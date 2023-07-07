from image import image
from flask_cors import CORS, cross_origin
from sqlalchemy import or_
import io
import numpy as np
from datetime import datetime
from sqlalchemy.orm.attributes import flag_modified
from flask import Flask, request, url_for, redirect, jsonify, session, abort
from flask_sqlalchemy import SQLAlchemy
import uuid
from sqlalchemy.dialects.postgresql import UUID
import secrets
import base64
import validators
import exc
from werkzeug.security import check_password_hash, generate_password_hash
app = Flask(__name__)
key = secrets.token_urlsafe(16)
key_bytes = key.encode("utf-8")
token = base64.b64encode(key_bytes)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:propel123@localhost:5432/postgres'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    username = db.Column(db.String(120), nullable=False)
    firstname = db.Column(db.String(20), nullable=False)
    lastname = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    contact = db.Column(db.String(20), nullable=False)
    title = db.Column(db.String(20), nullable=False)
    companyname = db.Column(db.String(20), nullable=False)
    role = db.Column(db.String(20), nullable=False)

    image_file = db.Column(db.Text, nullable=False, default=image)
    password = db.Column(db.String(60), nullable=False)
    status = db.Column(db.Boolean(60), nullable=False, default=True)

    def __repr__(self):
        return f"User('{self.username}', '{self.email}')"


class Color(db.Model):
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    code = db.Column(db.String(8), nullable=False)

    def __repr__(self):
        return f"Color('{self.code}')"


class Usercolor(db.Model):
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    primaryColor = db.Column(db.String(8), nullable=False)
    secColor = db.Column(db.String(8), nullable=False)
    fontColor = db.Column(db.String(8), nullable=False)
    user_id = db.Column(UUID(as_uuid=True),
                        db.ForeignKey('user.id'), nullable=False)

    def __repr__(self):
        return f"Color('{self.code}')"


response = {
    'token': key,
    'logoUrl': 'imageUrl',
    'token': key,
}


@app.route("/curruser", methods=['GET', 'POST'])
def curruser():
    if 'email' in session:
        return jsonify({
            "Logged in as": session['email']
        })
    return 'You are not logged in'


@app.route("/register", methods=['GET', 'POST'])
@cross_origin(origin='*')
def register():
    if request.method == 'POST':

        username = request.json['email']
        email = request.json['email']
        password = request.json['password']
        firstname = request.json['firstname']
        lastname = request.json['lastname']
        contact = request.json['contact']
        role = request.json['role']
        companyname = request.json['companyname']
        title = request.json['title']
        if len(password) < 6:
            return jsonify({'error': "Password is too short"}), 400

        if len(username) < 3:
            return jsonify({'error': "User is too short"}), 400

        # if not username.isalnum() or " " in username:
        #     return jsonify({'error': "Username should be alphanumeric, also no spaces"}), 400

        if not validators.email(email):
            return jsonify({'error': "Email is not valid"}), 400

        user = User.query.filter_by(email=email).first()
        if user is not None:
            if user.status == True:
                return jsonify({'error': "Email is taken"}), 409

        user = User.query.filter_by(username=username).first()
        if user is not None:
            if user.status == True:
                return jsonify({'error': "username is taken"}), 409

        user = User(firstname=firstname, lastname=lastname, username=username, password=password,
                    email=email, contact=contact, companyname=companyname, role=role, title=title)
        db.session.add(user)
        db.session.commit()

        return jsonify({
            'message': "User created",
            'user': {
                'username': username, "email": email
            }

        })


@app.route("/login", methods=['GET', 'POST'])
@cross_origin(origin='*')
def login():
    if request.method == 'POST':
        session["email"] = request.json["username"]
        session["password"] = request.json["password"]
        user = User.query.filter_by(email=session["email"], status=True).first()

        if user:
            session["id"] = user.id
            if user.password == session["password"]:
                color = Usercolor.query.filter_by(user_id=user.id).first()

                if color:
                    return jsonify(
                        {
                            "id": user.id,
                            "token": key,
                            "logourl": str(user.image_file),
                            "firstname": user.firstname,
                            "lastname": user.lastname,
                            "customUI": {
                                "primarycolor": color.primaryColor,
                                "secondarycolor": color.secColor,
                                "fontcolor": color.fontColor,
                            },
                        }
                    )
                else:
                    return jsonify(
                        {
                            "id": user.id,
                            "token": key,
                            "logourl": str(user.image_file),
                            "firstname": user.firstname,
                            "lastname": user.lastname,
                            "customUI": {
                                "primarycolor": "#00467F",
                                "secondarycolor": "#069AD9",
                                "fontcolor": "#000000",
                            },
                        }
                    )
        else:
            return jsonify({
                'message': "Wrong Login credentials"
            }), 401


@app.route("/custom-ui/<user_id>", methods=['GET', 'POST'])
@cross_origin(origin='*')
def customui(user_id):
    if request.method == 'POST':
        hexcodeOne = request.json["primarycolor"]
        hexcodeTwo = request.json["secondarycolor"]
        hexcodeThree = request.json["fontcolor"]
        user = Usercolor.query.filter_by(user_id=user_id).first()
    if user:
        user.primaryColor = hexcodeOne
        user.secColor = hexcodeTwo
        user.fontColor = hexcodeThree
        db.session.merge(user)
        db.session.flush()
        db.session.commit()
        return jsonify({"Success,The changes are added to the user id": user_id})
    else:
        colorOne = Color(code=hexcodeOne)
        colorTwo = Color(code=hexcodeTwo)
        colorThree = Color(code=hexcodeThree)
        usercolor = Usercolor(
            primaryColor=hexcodeOne,
            secColor=hexcodeTwo,
            fontColor=hexcodeThree,
            user_id=user_id,
        )
        db.session.add(usercolor)
        db.session.add(colorOne)
        db.session.add(colorTwo)
        db.session.add(colorThree)

        db.session.commit()
        return jsonify({"Success,The changes are added to the user id": user_id})


@app.route("/custom-logo/<user_id>", methods=['GET', 'POST'])
@cross_origin(origin='*')
def customlogo(user_id):
    if request.method == 'POST':

        file = request.files['image'].read()  # byte file

        token = base64.b64encode(file).decode('ascii')
        user = User.query.filter_by(id=user_id).first()
        user.image_file = token
        db.session.merge(user)
        db.session.flush()
        db.session.commit()
        # return "Changes are successfull"
        # return token
        return jsonify({
            "logourl": token
        })


@app.route("/logout", methods=['GET', 'POST'])
@cross_origin(origin='*')
def logout():
    session.pop('username', None)
    session.pop('email', None)
    session.pop('id', None)
    return jsonify({
        "message": "Logout Successful"
    })


@app.route("/update/<user_id>", methods=['PUT'])
@cross_origin(origin='*')
def update(user_id):
    username = request.json['email']
    email = request.json['email']
    # password = request.json['password']
    firstname = request.json['firstname']
    lastname = request.json['lastname']
    contact = request.json['contact']
    role = request.json['role']
    companyname = request.json['companyname']
    title = request.json['title']
    user = User.query.filter_by(id=user_id).first()
    user.username = username
    user.email = email
    user.firstname = firstname
    user.role = role
    # user.password = password
    user.contact = contact
    user.lastname = lastname
    user.companyname = companyname
    user.title = title
    db.session.merge(user)
    db.session.flush()
    db.session.commit()
    return jsonify({
        "The user was updated id ": user.id
    })


@app.route("/delete/<user_id>", methods=['DELETE'])
@cross_origin(origin='*')
def delete(user_id):

    user = User.query.filter_by(id=user_id).first()
    if user:

        user.status = False

        db.session.commit()

        return jsonify({
            "The user was deleted successfully": user_id
        })
    return 'NO users found', 401


@app.route("/user-list", methods=['POST'])
@cross_origin(origin='*')
def getuser():
    searchkey = request.json['searchkey']
    startingindex = request.json['startingindex']
    rowsize = request.json['rowsize']
    page = int(startingindex)
    rows = (
        User.query.filter(
            or_(
                User.firstname.ilike("%" + searchkey + "%"),
                User.lastname.ilike("%" + searchkey + "%"),
            ), User.status == True
        ))
    count = 0
    for i in rows:
        count += 1

    per_page = int(rowsize)
    users = User.query.filter(or_(User.firstname.ilike('%' + searchkey + '%'),
                                  User.lastname.ilike('%' + searchkey + '%')
                                  ), User.status == True).order_by(User.role.asc(), User.firstname.asc()).paginate(page, per_page, error_out=False)

    results = [
        {
            "id": user.id,
            "firstname": user.firstname,
            "lastname": user.lastname,
            "email": user.email,
            "contact": user.contact,
            "companyname": user.companyname,
            "title": user.title,
            "role": user.role,
            "status": user.status
        } for user in users.items]
    return {"count": count, "users": results, "message": "success"}


app.secret_key = 'vijay'
if __name__ == '__main__':
    app.run(debug=True)
