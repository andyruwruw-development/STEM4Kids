from itsdangerous import TimedJSONWebSignatureSerializer as Serializer
from flask import current_app
from server import db, login_manager
from flask_login import UserMixin
import mongoengine

@login_manager.user_loader
def load_user(email):
    return db.parents.find_one({"email" : email})

class ParentUser(mongoengine.Document.UserMixin):
    meta = {'collection' : 'parents'}

    firstName = mongoengine.StringField(required = True)
    lastName = mongoengine.StringField(required = True)
    email = mongoengine.EmailField()

    

