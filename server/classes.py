from flask_wtf import FlaskForm
from wtforms import TextField, IntegerField, SubmitField

class CreateStaff(FlaskForm):
    employee_id = TextField("Employee ID")
    first_name = TextField("First Name")
    last_name = TextField("Last Name")
    username = TextField("Username")
    password = TextField("Password")
    
class UpdateStaff(FlaskForm):
    location = TextField("Location")
    phone = TextField("Phone")
    email = TextField("Email")

class CreateCourse(FlaskForm):
    course_name = TextField("Course Name")
    course_compiler = TextField("Compiler")
    course_color = TextField("Color")

    ch_number = TextField("Chapter Number")
    ch_name = TextField("Chapter Name")
    ch_color = TextField("Chapter Color")
