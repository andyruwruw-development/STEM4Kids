from flask import (render_template, url_for, flash, redirect, request, abort, Blueprint)
from server import db
from server.users.staff.forms import CreateLesson
from flask_login import current_user, login_required


staff = Blueprint('staff', __name__)

@staff.route("/api/staff/lesson/new", methods = ['GET', 'POST'])
def newLesson():
    form = CreateLesson()
    if form.validate_on_submit():
        db.lessons.insert_one({
            "course" : form.course.data,
            "course_color" : form.course_color.data,
            "course_progress" : form.course_progress.data,
            "course_exp_date" : form.course_exp_data,
            "chapter_number" : form.chapter_number.data,
            "chapter_title" : form.chapter_title.data,
            "section_number" : form.section_number.data,
            "section_title" : form.section_title.data,
            "data"  : []  #lesson content
        })
        flash('New lesson created')
        return redirect(url_for("/api/lesson"))
    return 

def createStaffUserObj(form):
  
    #create staff user object
    db.staff.insert_one({   #https://docs.mongodb.com/manual/tutorial/update-documents/
        "employeeID" : "",
        "name":{
            "first" : "",
            "last" : ""
        },
        "login": {
            "login_active": True,
            "username" : "",
            "password" : ""
        },
        "profile":{ 
            "location" : "",
            "phone" : "",
            "email" : ""
        }
        })
    return 

def createStaffProfile(form):
    username = input("Enter name of admin as login: ")

    if db.staff.find_one({"login.username":username},{"login.active_login":1}): #active_login: returns True/False
        #get profile data
        location = form.location.data
        phone = form.phone.data
        email = form.email.data
        

        #set profile data by username
        db.staff.update_one({   
            #filter by custom employee_id
            {"username": username},
            {
                "$set":{
                    "profile.location" : location,
                    "profile.phone" : phone,
                    "profile.email" : email
                }
            }
        })       
    return