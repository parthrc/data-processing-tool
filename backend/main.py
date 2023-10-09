from fastapi import Depends, FastAPI, HTTPException, status,UploadFile, Response
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from typing import Annotated
import models
from database import engine, SessionLocal
from sqlalchemy.orm import Session
import json
from helpers import convert_to_json 

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
@app.post("/register/")
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
@app.post("/login/")
async def login(data: LoginBase, db: db_dependency):
    login_user = db.query(models.User).filter(models.User.email == data.email).first()
    if login_user == None:
        return {"status":"Fail", "msg":"Email does not exist"}
    elif login_user.password == data.password:
        return {"status":"Success", "msg":"User login successful", "data": {"user_id": login_user.id, "name": login_user.username}}
    else:
        return {"status":"Fail", "msg":"Wrong password entered. Click on forgot password to change your password"}

        
# SHow all users
@app.get("/users/")
async def show_all_users(db: db_dependency):
    all_users = db.query(models.User).all()
    return {"status":"Success", "msg":"All users list", "data": all_users}


# Get user with USER_ID
@app.get('/users/{user_id}')
async def read_user(user_id: int, db: db_dependency):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if user is None:
        return {"status":"Fail", "msg":f"User with user_id {user_id} does not exist"}
    return {"status":"Success", "msg":f'User with user_id {user_id} fetched successfully', "data": user}

# Get user with EMail
@app.get('/users/email/{email}')
async def read_user_email(email: str, db: db_dependency):
    user = db.query(models.User).filter(models.User.email == email).first()
    if user is None:
        return {"status":"Fail", "msg":f"User with email {email} does not exist"}
    return {"status":"Success", "msg":f'User with email {email} fetched successfully', "data": user}

#File upload
@app.post("/upload/{user_id}")
async def file_upload(file: UploadFile, user_id: int, db: db_dependency):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if user:
        json_content =  convert_to_json(file)
        #Create new file and store in DB
        new_file = models.File(name=file.filename, user_id=user_id, content=json_content)
        db.add(new_file)
        db.commit()
        print(type(json_content))
        print(json_content)
        return {"status":"Success", "msg":f"File {file.filename} uploaded successfully by user with id = {user_id}"}
    else:
        return {"status":"Fail", "msg":f"User with user id = {user_id} does not exist"}

    
         
#Files of a User
@app.get("/{user_id}/files")
async def get_files_of_user(user_id: int, db: db_dependency):
    files_list = db.query(models.File).filter(models.File.user_id == user_id).all()
    #Above queryreturn a list of objects
    #So we need to loop through and convert it into an json string
    json_str = '['

    for x in files_list:         
        json_str += f'{{"Filename":"{x.name}", "id":{x.id}}},'

    json_str += ']'
    final_str = json_str[:-2] + json_str[-1]
    #We use custom FastAPI Response object to stop auto serializing of data by FastAPI
    return Response(final_str)

#File iwth file id
@app.get("/file/{file_id}")
async def get_file(file_id: int, db: db_dependency):
    file = db.query(models.File).filter(models.File.id == file_id).first()
    print(type(file))
    print(file)
    return Response(file.content)


#Delete file with file_id
@app.post("/delete/{file_id}")
async def delete_file(file_id: int, db: db_dependency):
    file = db.query(models.File).filter(models.File.id == file_id).first()

    if file:
        db.delete(file)
        db.commit()

        return {"status":"Success", "msg":f"File with id = {file_id} deleted successfully"}
    return {"status":"Fail", "msg":f"File with id = {file_id} does not exist"}
     


    
    