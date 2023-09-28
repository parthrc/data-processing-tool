from fastapi import Depends, FastAPI, HTTPException, status,UploadFile
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from typing import Annotated
import models
from database import engine, SessionLocal
from sqlalchemy.orm import Session
import json

#BaseModels
class RegisterBase(BaseModel):
    email: str
    username: str
    password: str
    security_question: str
    security_answer: str


class LoginBase(BaseModel):
    email: str
    password: str


#Instantiate fastapi app
app = FastAPI()
models.Base.metadata.create_all(bind=engine)
# cors
origins = [
    "http://localhost:5173",
    "https://localhost:5173"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#Database
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]


#Root route
@app.get("/")
async def root():
    return {"hello":"Hello"}


#Register route
@app.post("/register")
async def register(data: RegisterBase, db: db_dependency):
    new_user_data = models.User(**data.model_dump())
    new_user_email = db.query(models.User).filter(models.User.email == data.email).first()
    new_user_username = db.query(models.User).filter(models.User.username == data.username).first()
    if new_user_email:
        return {"Status":"Fail", "msg":"Email already exists"}
    elif new_user_username:
        return {"Status":"Fail", "msg":"Username already exists"}
    else:
        db.add(new_user_data)
        db.commit()
        return {"Status":"Success", "msg":"User registered sucessfully", "data": data}

  


#Login route
@app.post("/login")
async def login(data: LoginBase, db: db_dependency):
    login_user = db.query(models.User).filter(models.User.email == data.email).first()
    if login_user == None:
        return {"status":"Fail", "msg":"Email does not exist"}
    elif login_user.password == data.password:
        return {"status":"Success", "msg":"User login sucessfull", "data": {"user_id": login_user.id}}
    else:
        return {"status":"Fail", "msg":"Wrong password entered. Click on forgot password to change your password"}

        
