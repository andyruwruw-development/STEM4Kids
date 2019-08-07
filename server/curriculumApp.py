from flask import Flask, render_template, redirect, request, url_for, jsonify
from pymongo import MongoClient

from classes import CreateCourse
import hashlib, binascii, os
from pprint import pprint
#import datetime
import operator


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
            "type" : "quiz",
            "index" : 0,
            "course" : "Python",
            "compiler" : None,
            "course_progress" : 0.0,
            "chapter_number" : 1,
            "chapter_title" : "Variables",
            "section_number" : 1,
            "section_title" : "Random Section Title1",
            "data"  : []  # content
        },
        {
            "type" : "quiz",
            "index" : 0,
            "course" : "Python",
            "compiler" : None,
            "course_progress" : 0.0,
            "chapter_number" : 2,
            "chapter_title" : "Variables2",
            "section_number" : 2,
            "section_title" : "Random Section Title2",
            "data"  : []  # content
        },
        {
            "type" : "quiz",
            "index" : 0,
            "course" : "Python",
            "compiler" : None,
            "course_progress" : 0.0,
            "chapter_number" : 3,
            "chapter_title" : "Variables3",
            "section_number" : 3,
            "section_title" : "Random Section Title3",
            "data"  : []  # content
        },
        {
            "type" : "quiz",
            "index" : 0,
            "course" : "Java",
            "compiler" : None,
            "course_progress" : 0.0,
            "chapter_number" : 1,
            "chapter_title" : "Introduction to Java",
            "section_number" : 2,
            "section_title" : "Random Section Title1",
            "data"  : []  # content
        },
        {
            "type" : "quiz",
            "index" : 0,
            "course" : "Java",
            "compiler" : None,
            "course_progress" : 0.0,
            "chapter_number" : 2,
            "chapter_title" : "Introduction to Java",
            "section_number" : 2,
            "index": 2,
            "section_title" : "Random Section Title2",
            "data"  : []  # content
        },
        {
            "type" : "quiz",
            "index" : 0,
            "course" : "Java",
            "compiler" : None,
            "course_progress" : 0.0,
            "chapter_number" : 3,
            "chapter_title" : "Introduction to Java",
            "section_number" : 3,
            "section_title" : "Random Section Title3",
            "data"  : []  # content
        }
    ])

    return
main()


@app.route("/api/courses/<course>", methods = ['GET'])
def getCourseList(course):
    output = {
        "chapterList" : []
    }
    
    cursor = db.lessons.find({"course" : course})
    if cursor :
        for document in cursor: 
            output["course"] = document["course"]
            output["compiler"] = document["compiler"]
            output["chapterList"].insert(0,{
                "chapterNumber" : document["chapter_number"],
                "chapterTitle" : document["chapter_title"],
                "data" : []
            })
            chapterCursor =  db.lessons.find( { "$and" : [{"course" : course},{"chapter_number" : output["chapterList"][0]["chapterNumber"] }]})
            if chapterCursor:
                for doc in chapterCursor:
                    if len(output["chapterList"][0]["data"]) == 0:
                        output["chapterList"][0]["data"].insert(0,{
                            "type" : doc["type"],
                            "course" : doc["course"],
                            "chapterNumber" : doc["chapter_number"],
                            "chapterTitle" : doc["chapter_title"],
                            "sectionNumber" : doc["section_number"],
                            "sectionTitle" : doc["section_title"]
                        })
                    elif output["chapterList"][0]["data"][1]["sectionNumber"] == output["chapterList"][0]["data"][0]["sectionNumber"]:
                        break
            
    return output

    
@app.route("/api/student/courses", methods = ['GET'])
def courses():
    cursor = db.lessons.find()
    if cursor : 
        output = []
        for document in cursor:
            if cursor :
                course = {
                    "course_name" : document["course"],
                    "course_color" : document["course_color"]
                    #"course_progress" : document["course_progress"],
                    #"course_exp_date" : document["course_exp_date"]
                
                }
                output.append(course)
    else : 
        output = "no data in lessons collection"
    return output

@app.route("/students/lessons/<course>/<chapter>/<section>", methods = ['GET'])
def notSureWhatThisDoes():
    return 

@app.route("student/quiz/<course>/<chapter>/<section>", methods = ['GET'])
def dontKnowWhatThisDoes():
    return

@app.route("students/profile", methods = ['GET'])
def studentProfile():
    return

@app.route("student/xp", methods = ['PUT'])
def addStudentXP():
    return

if __name__ == "__main__":
    app.run(debug=True)