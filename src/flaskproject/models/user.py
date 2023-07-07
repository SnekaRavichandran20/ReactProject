from db.db import db
import uuid
from sqlalchemy.dialects.postgresql import UUID
from image import image

class User(db.Model):  # usertable for storing all users
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    username = db.Column(db.String(120), nullable=False)
    firstname = db.Column(db.String(20), nullable=False)
    lastname = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(120),nullable=False)
    contact = db.Column(db.String(20), nullable=False)
    title = db.Column(db.String(20), nullable=False)
    companyname = db.Column(db.String(20), nullable=False)
    role = db.Column(db.String(20), nullable=False)
    image_file = db.Column(db.Text, nullable=False, default=image)
    password = db.Column(db.String(60), nullable=False)
    status = db.Column(db.Boolean, default=True)

    def __repr__(self):
        return f"User('{self.username}', '{self.email}')"


class Color(db.Model):  # table for storing all colors
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    code = db.Column(db.String(8), nullable=False)

    def __repr__(self):
        return f"Color('{self.code}')"


class Usercolor(db.Model):  # table for storing colors according to users
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    primaryColor = db.Column(db.String(8), nullable=False)
    secColor = db.Column(db.String(8), nullable=False)
    fontColor = db.Column(db.String(8), nullable=False)
    user_id = db.Column(UUID(as_uuid=True), db.ForeignKey("user.id"), nullable=False)

    def __repr__(self):
        return f"Color('{self.code}')"
