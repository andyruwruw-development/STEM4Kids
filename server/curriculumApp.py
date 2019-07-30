from flask import Flask, render_template, redirect, request, url_for, jsonify
from pymongo import MongoClient
from classes import CreateCourse
import hashlib, binascii, os
from pprint import pprint


#config
app = Flask(__name__)
client = MongoClient()
db = client.staff

def createCourse(form):
    course_name = form.course_name.data
    course_compiler =  form.course_compiler.data
    course_color = form.course_compiler.data

    ch_number = form.ch_number.data
    ch_name = form.ch_name.data
    ch_color = form.ch_color.data
    db.curriculum.insert_one({
        #init: course, single chapter, single lesson (to be appended)
        "course_name" : course_name,
        "course_compiler" : course_compiler,
        "course_color" : course_color,
        "course_exp_data" : 0,
        "chapter_list" : [
            {
               #single chapter sub-document
               "ch_number" : ch_number,
               "ch_name" : ch_name,
               "ch_color" : ch_color,               
               "ch_lessons" : [
                   {
                       #single lesson sub-document
                       "lesson_number" : "",
                       "lesson_name" : "",
                       "lesson_acts" : [
                           {
                               #single lesson activity sub-document
                               "lesson_act_id" : 0,
                               "type" : "", #exercise, quiz,example
                               "name" : "",
                               "title" : "",
                               "content" : []
                        }]
                }] 
            }
    ]})
    return 

def viewAllCourses():
    print("Printing all documents in collection CURRICULUM...")
    cursor = db.curriculum.find()
    for document in cursor:
        pprint(document)
    return

@app.route("/displayCourses", methods = ['POST'])
#display all courses & data
def displayCourses() :
    output = []
    for s in db.curriculum.find() :
        output.append(s)
    return jsonify({"result" : output})

@app.route("/courseCreation", methods = ['GET','POST'])
def courseCreation():
    #create form
    cform = CreateCourse(prefix = 'cform') #create Course

    #response
    if cform.validate_on_submit and cform.create.data:
        return createCourse(cform)
    
    return render_template("",cform = cform)

if __name__ == "__main__":
    app.run(debug=True)