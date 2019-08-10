from datetime import datetime
from itsdangerous import TimedJSONWebSignatureSerializer as Serializer
from flask import current_app
from server import db, login_manager
from flask_login import UserMixin
import mongoengine

@login_manager.user_loader
def load_user(user_id):
    return db.student.find_one({"user_id" : user_id})
# student mapping document
class User(mongoengine.Document,UserMixin):
    userID = mongoengine.StringField(required = True)
    firstName = mongoengine.StringField(required = True)
    lastName = mongoengine.StringField(required = True)

    username = mongoengine.StringField(required =  True)
    password = mongoengine.StringField(required = True)

    meta = {'collection' : 'students'} 


    def getResetToken(self, expiresSec = 1800):
        s = Serializer(current_app.config['SECRET_KEY'], expiresSec)
        return s.dumps({'userID' : self.userID}).decode('utf-8')
    @staticmethod
    def verifyResetToken(token):
        s = Serializer(current_app.config['SECRET_KEY'])
        try:
            user_id = s.loads(token)['user_id']
        except:
            return None
        return db.students.find_one({"user_id" : user_id})

    def __repr__(self):
        return
