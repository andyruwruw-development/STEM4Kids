from flask import Flask, render_template, redirect, request, url_for, jsonify
from pymongo import MongoClient
from classes import CreateStaff, UpdateStaff
import hashlib, binascii, os
from pprint import pprint


#config
app = Flask(__name__)
client = MongoClient()
db = client.staff

def createStaffUserObj(form):
    #access permission: admin 

    employee_id = form.employee_id.data
    first_name = form.first_name.data
    last_name = form.last_name.data
    username = form.username.data
    password = form.password.data

    
    #create staff user object
    db.staff.insert_one({   #https://docs.mongodb.com/manual/tutorial/update-documents/
        "employeeID" : employee_id,
        "name":{
            "first" : first_name,
            "last" : last_name
        },
        "login": {
            "login_active": True,
            "username" : username,
            "password" : hash_password(password)
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

def hash_password(password):
    """Hash a password for storing."""
    salt = hashlib.sha256(os.urandom(60)).hexdigest().encode('ascii')
    pwdhash = hashlib.pbkdf2_hmac('sha512', password.encode('utf-8'), salt, 100000)
    pwdhash = binascii.hexlify(pwdhash)
    return (salt + pwdhash).decode('ascii')
 
def verify_password(stored_password, provided_password):
    """Verify a stored password against one provided by user"""
    salt = stored_password[:64]
    stored_password = stored_password[64:]
    pwdhash = hashlib.pbkdf2_hmac('sha512', provided_password.encode('utf-8'), salt.encode('ascii'), 100000)
    pwdhash = binascii.hexlify(pwdhash).decode('ascii')
    return pwdhash == stored_password

@app.route('/createAdminAccount', methods = ['GET','POST'])
def main():
    #create form
    cform = CreateStaff(prefix = 'cform') #create staff user object
    uform = UpdateStaff(prefix = 'uform') #update staff profile data

    #response
    if cform.validate_on_submit and cform.create.data:
        return createStaffUserObj(cform)
    if uform.validate_on_submit and uform.update.data:
        return createStaffProfile(uform)

    #read all data
    docs = db.staff.find()
    data = []
    for i in docs:
        data.append(i)
    return render_template("___.html", cform = cform, uform = uform)

if __name__ == "__main__":
    app.run(debug=True)