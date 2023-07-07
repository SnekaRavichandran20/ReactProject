from flask_sqlalchemy import SQLAlchemy
# importing and intializing db
db = SQLAlchemy()

def initialize_db(app):
    db.init_app(app)
