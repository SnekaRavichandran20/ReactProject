from models.user import User, Color, Usercolor  # importing database models
from flask_restful import Resource
from flask_cors import cross_origin
from sqlalchemy import or_
from db.db import db
from image import image
from flask import request, jsonify, session
import secrets, base64, validators
from exceptions.exceptions import (
    AlphaNumericError,
    UnauthorizedError,
    BadRequest,
    EmailAlreadyExistsError,
    UsernameAlreadyExistsError,
)

key = secrets.token_urlsafe(16)  # secret token for login


class registerApi(Resource):  # UserRegistration Api
    def post(self):

        if request.method == "POST":

            username = request.json["email"]
            email = request.json["email"]
            password = request.json["password"]
            firstname = request.json["firstname"]
            lastname = request.json["lastname"]
            contact = request.json["contact"]
            role = request.json["role"]
            companyname = request.json["companyname"]
            title = request.json["title"]
            if len(password) < 6:
                raise BadRequest

            if len(username) < 3:
                raise BadRequest

            if not validators.email(email):
                raise AlphaNumericError

            user = User.query.filter_by(email=email).first()
            if user is not None:
                if user.status == True:
                    raise EmailAlreadyExistsError
            user = User.query.filter_by(username=username).first()
            if user is not None:
                if user.status == True:
                    raise UsernameAlreadyExistsError

            user = User(
                firstname=firstname,
                lastname=lastname,
                username=username,
                password=password,
                email=email,
                contact=contact,
                companyname=companyname,
                role=role,
                title=title,
            )
            db.session.add(user)
            db.session.commit()

            return jsonify(
                {
                    "message": "User created",
                    "user": {"username": username, "email": email},
                }
            )


class loginApi(Resource):  # User Login API
    @cross_origin(origin='*')
    def post(self):
        session["email"] = request.json["username"]
        session["password"] = request.json["password"]
        user = User.query.filter_by(email=session["email"],status=True).first()

        if user:
            
            session["id"] = user.id
            if user.password == session["password"]:
                color = Usercolor.query.filter_by(user_id=user.id).first()
                if color:
                    return jsonify(
                        {
                            "id": user.id,
                            "token": key,
                            "firstname": user.firstname,
                            "lastname": user.lastname,
                            "logourl": str(user.image_file),
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
                            "firstname": user.firstname,
                            "lastname": user.lastname,
                            "token": key,
                            "logourl": str(user.image_file),
                            "customUI": {
                                "primarycolor": "#00467F",
                                "secondarycolor": "#069AD9",
                                "fontcolor": "#000000",
                            },
                        }
                    )
        else:
            raise UnauthorizedError


class customUIApi(Resource):  # API for adding and updating colors for the interface
    def post(self, user_id):

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


class customLogoApi(Resource):  # API for updating userlogo
    def post(self,user_id):
        file = request.files['image'].read()  # byte file

        token = base64.b64encode(file).decode('ascii')
        user = User.query.filter_by(id=user_id).first()
        user.image_file = token
        db.session.merge(user)
        db.session.flush()
        db.session.commit() # return "Changes are successfull"
        return jsonify({
            "logourl": token
        })


class logoutApi(Resource):  # API for user logout
    def post(self):
        session.pop("username", None)
        session.pop("email", None)
        session.pop("id", None)
        return jsonify({"message": "Logout Successful"})


class updateApi(Resource):  # API for updating user in the usertable
    def put(self, user_id):
        username = request.json["email"]
        email = request.json["email"]
        firstname = request.json["firstname"]
        lastname = request.json["lastname"]
        contact = request.json["contact"]
        role = request.json["role"]
        companyname = request.json["companyname"]
        title = request.json["title"]
        user = User.query.filter_by(id=user_id).first()
        user.username = username
        user.email = email
        user.firstname = firstname
        user.role = role
        user.contact = contact
        user.lastname = lastname
        user.companyname = companyname
        user.title = title
        db.session.merge(user)
        db.session.flush()
        db.session.commit()
        return jsonify({"The user was updated id ": user.id})


class deleteApi(Resource):  # soft deleting user from the usertable
    def delete(self, user_id):
        user = User.query.filter_by(id=user_id).first()
        if user:

            user.status = False

            db.session.commit()

            return jsonify({"The user was deleted successfully": user_id})
        raise UnauthorizedError


class getUserApi(
    Resource
):  # API for fetching users from the usertable according to searchkey,pagination
    def post(self):
        searchkey = request.json["searchkey"]
        startingindex = request.json["startingindex"]
        rowsize = request.json["rowsize"]
        page = int(startingindex)
        per_page = int(rowsize)

        users = (
            User.query.filter(
                or_(
                    User.firstname.ilike("%" + searchkey + "%"),
                    User.lastname.ilike("%" + searchkey + "%"),
                ),
                User.status == True,
            )
            .order_by(User.role.asc(),User.firstname.asc())
            .paginate(page, per_page, error_out=False)
        )

        rows = User.query.filter(
            or_(
                User.firstname.ilike("%" + searchkey + "%"),
                User.lastname.ilike("%" + searchkey + "%"),
            ),
            User.status == True,
        )
        count = 0
        for i in rows:
            count += 1
        results = [
            {
            "id": str(user.id),
            "firstname": user.firstname,
            "lastname": user.lastname,
            "email": user.email,
            "contact": user.contact,
            "companyname": user.companyname,
            "title": user.title,
            "role": user.role,
            "status": user.status
            }
            for user in users.items
        ]
        return {"count": count, "users": results, "message": "success"}

class restoreDefaultApi(Resource):  # restoring defaults
    def post(self, user_id):
        user = User.query.filter_by(id=user_id).first()
        color = Usercolor.query.filter_by(user_id=user_id).first()
        if user:

            user.image_file = image
            color.primaryColor ='#00467F'
            color.secColor = '#069AD9'
            color.fontColor = '#000000'
            db.session.merge(user)
            db.session.merge(color)
            db.session.flush()
            db.session.commit()

            return jsonify({"The user defaults were restored": user_id})
        raise UnauthorizedError

