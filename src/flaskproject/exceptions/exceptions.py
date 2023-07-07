from werkzeug.exceptions import HTTPException


class InternalServerError(HTTPException):  # List of all custom exceptions with classes
    pass


class AlphaNumericError(HTTPException):
    pass


class EmailAlreadyExistsError(HTTPException):
    pass


class UsernameAlreadyExistsError(HTTPException):
    pass


class UnauthorizedError(HTTPException):
    pass


class EmailDoesnotExistsError(Exception):
    pass


class BadRequest(HTTPException):
    pass


errors = {
    "InternalServerError": {"message": "Wrong login creditie", "status": 404},
    "AlphaNumericError": {
        "message": "Please enter a valid username or email",
        "status": 400,
    },
    "EmailAlreadyExistsError": {
        "message": "User with given email address already exists",
        "status": 400,
    },
    "UsernameAlreadyExistsError": {
        "message": "User with given username already exists",
        "status": 400,
    },
    "UnauthorizedError": {"message": "Invalid username or password", "status": 401},
    "EmailDoesnotExistsError": {
        "message": "Couldn't find the user with given email address",
        "status": 400,
    },
    "BadRequest": {"message": "Username or password length is short", "status": 400},
}
