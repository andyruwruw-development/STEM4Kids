from datetime import datetime
from itsdangerous import TimedJSONWebSignatureSerializer as Serializer
from flask import current_app
from server import db, login_manager
from flask_login import UserMixin
import mongoengine


@login_manager.user_loader
def load_user(userID):
    return db.student.find_one({"userID" : userID})


# student mapping document PUT IN STUDENT FILE
class StudentUser(mongoengine.Document,UserMixin):
    meta = {'collection' : 'students'} 

    # profile information -- server/users/students/forms.py
    #                     -- server/users/students/routes.py (createProfile)
    userID = mongoengine.StringField(required = True)
    username = mongoengine.StringField(required =  True)
    password = mongoengine.StringField(required = True)
    imageFile = mongoengine.ImageField()

    # contact information -- server/users/parents/forms.py
    #                     -- server/users/parents/routes.py (register)
    firstName = mongoengine.StringField(required = True)
    lastName = mongoengine.StringField(required = True)
    email = mongoengine.EmailField()
    
    # acquired from parents collection
    parent = mongoengine.ObjectIdField()


    def getResetToken(self, expiresSec = 1800):
        s = Serializer(current_app.config['SECRET_KEY'], expiresSec)
        return s.dumps({'userID' : self.userID}).decode('utf-8')

    @staticmethod
    def verifyResetToken(token):
        s = Serializer(current_app.config['SECRET_KEY'])
        try:
            userID = s.loads(token)['userID']
        except:
            return None
        return db.students.find_one({"userID" : userID})

    def __repr__(self):
        return f"User('{self.username}', '{self.email}', '{self.imageFile}')"
        
# called when the parent createst the 
class EmergencyContacts(mongoengine.EmbeddedDocument):
    firstName = mongoengine.StringField(required = True)
    lastName = mongoengine.StringField(required = True)
    relationToStudent = mongoengine.StringField(required = True)
    
    # contact info
    phoneNumber = mongoengine.StringField(required = True)
    email = mongoengine.EmailField(required = True)
    

