from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed
from wtforms import StringField, PasswordField, SubmitField, BooleanField
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError
from flask_login import current_user
from server import users, db

class RegistrationForm(FlaskForm):
    username = StringField('Username', validators = [DataRequired(), Length(min = 3, max = 10)])
    email = StringField('Email', validators = [DataRequired(), Email()])
    password = PasswordField('Password', validators = [DataRequired(), EqualTo('password')])

    submit = SubmitField('Sign Up')

    def validateUserName(self, username):
        user = db.students.find({"username" : username})
        if user : 
            raise ValidationError('That username is taken. Please choose a different one.')
    def validateEmail(self, email) :
        user = db.students.find({"email" : email})
        if user:
            raise ValidationError("That email is taken. Please choose a different one.")
class LoginForm(FlaskForm):
    username = StringField('Username', validators = [DataRequired()])
    password = PasswordField('Password', validators = [DataRequired()])
    remember = BooleanField('Remember Me')
    submit = SubmitField('Login') 

class Request