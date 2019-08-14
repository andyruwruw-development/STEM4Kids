from flask import render_template, url_for, flash, redirect, request, Blueprint
from flask_login import login_user, current_user, logout_user, login_required
from server import db, bcrypt
from server.users.students.forms import LoginForm, UpdateAccountForm, RegistrationForm, RequestResetForm, ResetPasswordForm
from server.users.students.utils import savePicture, sendResetEmail
from flask_login import current_user, login_required
from server.models import User

student =  Blueprint('student', __name__)

@student.route("/api/student/courses/course", methods = ['GET'])
@login_required
def getCourseList(course):
    output = {"chapterList" : []}
    cursor = db.lessons.find({"course" : course})
    if cursor :
        for document in cursor :
            output["course"] = document["course"]
            output["compiler"] = document["compiler"]
            output["chapterList"].insert(0,{
                "chapterNumber" : document["chapterNumber"],
                "chapterTitle" : document["chapterTitle"],
                "data" : []
            })
            chapterCourse = db.lessons.find({"$and" : [{"course" : course},{ "chapterNumber" : output["chapterList"][0]["chapterNumber"]}]})
            if chapterCourse:
                for doc in chapterCourse:
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

@student.route("/api/student/login", methods = ['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('main.home'))
    form = LoginForm()
    if form.validate_on_submit():
        user = db.student.find_one({"username" : form.studentUsername.data})
        if user and bcrypt.check_password_hash(user["password"], form.password.data):
            login_user(user, remember= form.remember.data)
            next_page = request.args.get('/api/student/courses')
            return redirect(next_page) if next_page else redirect(url_for('main.html'))
        else : 
            flash("Login Unsucessful. Please check username and password", 'danger')
    return render_template("login.html", title = "Login", form = form)

@student.route("/api/logout")
def logout():
    logout_user()
    return redirect(url_for("main.home"))

@student.route("/api/student/account", method = ['GET', 'POST'])
@login_required
def studentAccount():
    form = UpdateAccountForm()
    if form.validate_on_submit():
        if form.picture.data:
            picture_file = savePicture(form.picture.data)
            current_user.image_file = picture_file
        current_user.username = form.username.data
        current_user.email = form.email.data
        # db.student.save({})
        # db.student.update_one({})
        # db.session.commit()
        flash("Your account has been updated!")
        return redirect(url_for('/api/student/account'))
    elif request.method == 'GET':
        form.username.data =  current_user.username
        form.email.data = current_user.email
    image_file = url_for('static', filename = "profile_pics/" + current_user.image_file)
    return render_template("/api/student/account/", title = 'Student Account', image_file = image_file, form = form)


@student.route('/reset_password', methods = ['GET', 'POST'])
def resetPasswordRequest():
    if current_user.is_authenticated():
        return redirect(url_for('main.html'))
    form = RequestResetForm()
    if form.validate_on_submit():
        user = db.student.find_one({"username" : form.username.data})
        sendResetEmail(user)
        flash('An email has been sent with instructions to reset your password', 'info')
        return redirect(url_for('user.login'))
    return render_template('resetRequest.html', title = "Reset Password", form = form)


@student.route('/api/resetPassword/<token>', methods = ['GET', 'POST'])
def resetToken(token):
    if current_user.is_authenticated:
        return redirect(url_for("main.home"))
    user = User.verifyResetToken(token)
    if user is None:
        flash('That is an invalid or expired token', 'warning')
        return redirect(url_for('main.home'))
    form = ResetPasswordForm()
    if form.validate_on_submit():
        hashedPassword = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        user.password = hashedPassword
        # db.student.update_one({})
        # filter by student_id, update password 
        
        flash('Your password has been updated! You are now able to login', 'success')
        return redirect(url_for('user.login'))
    return redirect(url_for('ResetToken.html', title = "Reset Password", form = form))

@student.route("/students/lessons/<course>/<chapter>/<section>", methods = ['GET'])
def notSureWhatThisDoes():
    return 

@student.route("student/quiz/<course>/<chapter>/<section>", methods = ['GET'])
def dontKnowWhatThisDoes():
    return

@student.route("students/profile", methods = ['GET'])
def studentProfile():
    return

@student.route("student/xp", methods = ['PUT'])
def addStudentXP():
    return