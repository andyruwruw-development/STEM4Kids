from flask import Flask, render_template, redirect, request, url_for, jsonify
from pymongo import MongoClient
from classes import CreateStaff, UpdateStaff
import hashlib, binascii, os
from pprint import pprint


#config
app = Flask(__name__)
client = MongoClient()
db = client.student

def createStudentObj(form):
    #access permission: admin, staff, parent
    first_name = form.first_name.data
    last_name = form.last_name.data
    username =  form.username.data
    password = form.password.data


    db.student.insert_one({
        "student_information" : {
            "student_id" : 0,
            "first_name" : "",
            "last_name" : "",
            "location" : "",
            "username" : "",
            "password" : "" ,#store hashpassword in db
            "parent" : "",#objID
            "contact_info" : {[ 
                #parent contact info list
                #insert only one parent contact info
            ]},
            "emergency_contact" : {[
                #emergency contact info list
                #append from addEmergencyContact and updateEmergencyContact

            ]},
            "courses" :{[
                #list of student course data & progress
                { 
                    "course" : "5d3ab004385e47c13d66e4c9", 
                    #id to random course in curriculum, 
                    "course_progress" : 0, 
                    "chapters_progres" : [],
                    "lessons_progress" : []
                }
            ]}
        }
    })
    return

def addEmergencyContacts(form):
    first_name = form.first_name.data
    last_name = form.last_name.data
    email = form.email.data
    phone = form.email.phone

    eContact = [first_name,last_name,email,phone]

    #update student contacts in studentUserObject
    db.student.update_one({   
            {"login.login_active": True},
            {
                #update in studentObj --> emergency_contact[]
                "$set":{
                    #"emergency_contact" : [].append(eContact)
                }
            }
        })       
    return 

def viewAllStudents():
    print("Printing all documents in collection STUDENT...")
    cursor = db.student.find()
    for document in cursor:
        pprint(document)
    return

@app.route("/viewStudentCourse")
def viewStudentCourse():
    course = db.student.find_one({"student_id" : 0})
    if course : 
        output = {
            "course_name" : course["courses.course.course_name"],
            "course_progress" : course["courses.course_progress"],
            "course_color" : course["courses.course.course_color"],
            "course_exp_date" : course["courses.course.course_exp_date"]
            }
    else:
        output = "No such ID"

    return jsonify({"student course" : output})


