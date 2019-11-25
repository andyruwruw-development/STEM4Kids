from flask_wtf import FlaskForm
from wtforms import TextField, IntegerField, SubmitField

class CreateLesson(FlaskForm):
    course_name = TextField("Course Name")
    course_compiler = TextField("Compiler")
    course_color = TextField("Color")

    ch_number = TextField("Chapter Number")
    ch_name = TextField("Chapter Name")
    ch_color = TextField("Chapter Color")


