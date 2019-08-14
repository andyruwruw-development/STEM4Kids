from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed
from wtforms import StringField, PasswordField, SubmitField, BooleanField
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError
from flask_login import current_user
from server import users, db
from server.users.students.models import StudentUser
import random

class parentRegistrationForm(FlaskForm):

    firstName = StringField('First Name', validators = [DataRequired()])
    lastName = StringField('Last Name', validators= [DataRequired()])
    password = PasswordField("Password", validators=[DataRequired()])
    confirmPassword = PasswordField('Confirm Password', validators = [DataRequired(), EqualTo('password')])
    
    # contact information 
    email = StringField('Email', validators=[DataRequired(), Email()])
    phone = StringField('Phone Number', validators=[DataRequired()])

    submit = SubmitField('Sign Up')

    def validateEmail(self, email) :
        user = db.students.find_one({"email" : email})
        if user:
            raise ValidationError("That email is taken. Please choose a different one.")
    def validatePhone(self, phone) :
        if ____:
            raise ValidationError("Phone number is not valid")


class studentRegistrationForm(FlaskForm):
    firstName = StringField('First Name', validators = [DataRequired()])
    lastName = StringField('Last Name', validators= [DataRequired()])
    email = StringField('Email', validators=[DataRequired(), Email()])
    submit = SubmitField('Login')


class LoginForm(FlaskForm):
    username = StringField('Username', validators = [DataRequired()])
    password = PasswordField('Password', validators = [DataRequired()])
    remember = BooleanField('Remember Me')
    submit = SubmitField('Login') 

class UpdateAccountForm(FlaskForm) :
    username = StringField('Username', validators = [DataRequired(), Length(min = 3, max = 10)])
    email = StringField('Email', validators = [DataRequired(), Email()])
    picture = FileField('Update Profile Picture', validators = [FileAllowed(['jpg', 'png'])])
    submit = SubmitField('Update')

    def validateUsername(self, username) : 
        if username.data != current_user.username:
            user = db.students.find_one({"username": username})
            if user:
                raise ValidationError('That username is taken. Please choose a different one.') 
    def validateEmail(self, email) : 
        if email.data != current_user.email():
            user = db.students.find({"email": email})
            if user:
                raise ValidationError("That email is taken. Please choose a different one.")

class RequestResetForm(FlaskForm) :
    email = StringField('Email', validators = [DataRequired(), Email()])
    submit = SubmitField('Request Passowrd Reset')
    
    def validateEmail(self, email):
        if email.data != current_user.email:
            user = db.student.find_one({"email" : email})
            if user is None:
                raise ValidationError('There is no account with that email. You must register first.')

class ResetPasswordForm(FlaskForm) :
    password =  PasswordField('Password', validators = [DataRequired()])
    confirmPassword = PasswordField('Confirm Password', validators = [DataRequired(), EqualTo('password')])
    submit = SubmitField('Reset Password')