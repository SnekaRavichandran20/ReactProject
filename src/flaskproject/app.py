from flask import Flask
from flask_restful import Api
from exceptions.exceptions import errors
from db.db import initialize_db
from routes.routes import initialize_routes
from helpers.logger import initialize_logger
from db.db import db
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, support_credentials=True)

api = Api(app, errors=errors)
app.config[
    "SQLALCHEMY_DATABASE_URI"
] = "postgresql://postgres:propel123@localhost:5432/postgres"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Initialize the logger
initialize_logger(app)

# Initialize the database
initialize_db(app)

# Initialize the routes
initialize_routes(api)

app.secret_key = "vijay"
with app.app_context():
    db.create_all()