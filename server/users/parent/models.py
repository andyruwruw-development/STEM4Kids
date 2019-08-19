from itsdangerous import TimedJSONWebSignatureSerializer as Serializer
from flask import current_app
from server import db, login_manager
from flask_login import UserMixin
from server.users.students.models import StudentUser
import mongoengine

@login_manager.user_loader
def load_user(email):
    return db.parents.find_one({"email" : email})

class ParentUser(mongoengine.Document,UserMixin):
    meta = {'collection' : 'parents'}

    firstName = mongoengine.StringField(required = True)
    lastName = mongoengine.StringField(required = True)

    email = mongoengine.EmailField()
    phone = mongoengine.StringField(required = True)

    students = mongoengine.ListField(mongoengine.ReferenceField(StudentUser))

    def resetToken(self, expireSec = 1800):
        s = Serializer(current_app.config['SECRET-KEY'], expireSec)
        return s.dumps({"email" : self.email}).decode('utf-8')
    
    @staticmethod 
    def resetResetToken(token):
        s = Serializer(current_app.config['SECRET-KEY'])
        try:
            email = s.loads(token)['email']
        except:
            return None
        return db.parents.find_one({"email" : email})

    def __repr__(self):
        return f"Parent('{self.firstName}','{self.lastName}','{self.email}')"
    
    

    

