from app import app #importing app from the source folder
from db.db import initialize_db

if __name__ == "__main__":
    initialize_db(app)
    app.run(debug=True)
