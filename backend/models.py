from sqlalchemy import Boolean, Integer, String, Text, ForeignKey, Column, JSON
from sqlalchemy.orm import mapped_column, relationship
from database import Base

# file upload
from sqlalchemy_file import File, FileField
from sqlalchemy_file.storage import StorageManager


#User class
class User(Base):
    __tablename__ = 'user'

    id = mapped_column(Integer, primary_key=True, index=True)
    email = mapped_column(String(50), unique=True)
    username = mapped_column(String(50), unique=True)
    password = mapped_column(String(50))
    security_question = mapped_column(String(100))
    security_answer = mapped_column(String(50))


#File class
class File(Base):
    __tablename__ = 'file'

    id = mapped_column(Integer, primary_key=True, index=True)
    name = mapped_column(String(50))
    user_id = mapped_column(Integer, ForeignKey("user.id"))
    content = mapped_column(Text)

    user = relationship("User", backref="file")

