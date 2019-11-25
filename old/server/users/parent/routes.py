from flask import render_template, url_for,flash, redirect, request, Blueprint
from flask_login import login_user, current_user, logout_user, login_required
from server import db, bcrypt
from server.users.parent.forms import LoginForm, studentRegistrationForm, RequestResetForm, ResetPasswordForm
from server.users.utils import sendResetEmail
from flask_login import current_user, login_required
from server.users.parent.models import ParentUser
from server.users.students.models import StudentUser


parent = Blueprint('parent', __name__)

@parent.route("/api/registration", methods = ['GET', 'POST'])
@login_required
def registerStudent():
    if current_user.is_authenticated:
        return redirect(url_for('main.home'))
    form = studentRegistrationForm()
    if form.validate_on_submit():
        hashedPassword = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        
        current_user.password = hashedPassword
        current_user.firstName = form.firstName.data
        current_user.lastName = form.lastName.data
        current_user.email = form.email.data
        current_user.phone = form.phone.data

        user = ParentUser(firstName = form.)


    return 
        
