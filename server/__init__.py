from flask import Flask, render_template, redirect, request, url_for, jsonify
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_mail import Mail
from pymongo import MongoClient
from server.config import Config


#config
app = Flask(__name__)
client = MongoClient()
db = client.db
bcrypt = Bcrypt()
mail = Mail()


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)

    from server.users.staff.routes import staff
    from server.users.students.routes import student
    from server.users.parent.routes import parent
    from server.lessons.routes import lessons

    app.register_blueprint(staff)
    app.register_blueprint(student)
    app.register_blueprint(parent)
    app.register_blueprint(lessons)

    return app