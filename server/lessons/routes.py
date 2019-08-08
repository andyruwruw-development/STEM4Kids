from flask import Blueprint
from server import db


lessons = Blueprint('lessons', __name__)

@lessons.route("/api/courses/<course>", methods = ['GET'])
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



