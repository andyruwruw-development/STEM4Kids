import os
import secrets
from PIL import Image
from flask import url_for, current_app
from flask_mail import Message
from server import mail 

def savePicture(formPicture):
    randomHex = secrets.token_hex(8)
    _, f_ext = os.path.splitext(formPicture.filename)
    pictureFN = randomHex + f_ext
    picturePath = os.path.join(current_app.root_path, 'static/profile_pics', pictureFN)

    outputSize = (125,125)
    i = Image.open(formPicture)
    i.thumbnail(outputSize)
    i.save(picturePath)

    return pictureFN

def sendResetEmail(user):
    token = user.getResetToken()
    msg = Message(
        'Password Reset Request',
        sender = 'noreply@stem4kids.com',
        recipients = user["email"])
    msg.body = f'''To reset password, visit the following link: {url_for('student.resetToken', token = token, _external = True)} If you did not make this request, ignore this email and no changeds will be made to your account. '''
    mail.send(msg)