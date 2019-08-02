from flask import Flask, render_template, redirect, request, url_for, jsonify
from pymongo import MongoClient

from classes import CreateCourse
import hashlib, binascii, os
from pprint import pprint
#import datetime


#config
app = Flask(__name__)
client = MongoClient()
db = client.db
lessons = db.lessons


def createLesson(form):
    course = form.course.data
    course_color = form.course_color.data
    course_progress =  form.course_progress.data
    course_exp_date =  form.course_exp_data
    chapter_number =  form.chapter_number.data
    chapter_title = form.chapter_title.data
    section_number  = form.section_number.data
    section_title = form.section_title.data

    db.lessons.insert_one({
        "course" : course,
        "course_color" : course_color,
        "course_progress" : course_progress,
        "course_exp_date" : course_exp_date,
        "chapter_number" : chapter_number,
        "chapter_title" : chapter_title,
        "section_number" : section_number,
        "section_title" : section_title,
        "data"  : []  #lesson content
    })
    
def main():
    db.lessons.delete_many({})
    db.lessons.insert_many([
        {
            "course" : "Python",
            "chapter_number" : 1,
            "chapter_title" : "Variables",
            "section" : 1,
            "section_title" : "Random Section Title1",
            "data"  : []  #lesson content
        },
        {
            "course" : "Python",
            "chapter_number" : 1,
            "chapter_title" : "Variables",
            "section" : 2,
            "section_title" : "Random Section Title2",
            "data"  : []  #lesson content
        },
        {
            "course" : "Python",
            "chapter_number" : 1,
            "chapter_title" : "Variables",
            "section" : 2,
            "section_title" : "Random Section Title2",
            "data"  : []  #lesson content
        },
        {
            "course" : "Java",
            "chapter_number" : 1,
            "chapter_title" : "Introduction to Java",
            "section" : 2,
            "section_title" : "Random Section Title1",
            "data"  : []  #lesson content
        },
        {
            "course" : "Java",
            "chapter_number" : 1,
            "chapter_title" : "Introduction to Java",
            "section" : 2,
            "section_title" : "Random Section Title2",
            "data"  : []  #lesson content
        },
        {
            "course" : "Java",
            "chapter_number" : 1,
            "chapter_title" : "Introduction to Java",
            "section" : 2,
            "section_title" : "Random Section Title3",
            "data"  : []  #lesson content
        }]
    )
    return

main()

@app.route("/student/courses", methods = ['GET'])
def courses():
    cursor = db.lessons.find()
    if cursor : 
        output = []
        for document in cursor:
            if cursor :
                course = {
                    "course_name" : document["course"],
                    "course_color" : document["course_color"],
                    "course_progress" : document["course_progress"],
                    "course_exp_date" : document["course_exp_date"]
                }
                output.append(course)
    else : 
        output = "no data in lessons collection"

    return jsonify({"result" : output})

@app.route("/student/courses/<course>", methods = ['GET'])
def oneCourse():
    cursor = db.lessons.find({"course" : "Python"})
    if cursor :
        for document in cursor:
            output = {
                "course_name" : document["course"],
                "course_color" : document["course_color"],
                "course_progress" : document["course_progress"],
                "course_exp_date" : document["course_exp_date"]
            }
    output  = "No course Python in lessons collection"
    return jsonify({"result" : output})