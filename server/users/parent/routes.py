from flask import Blueprint
from server import db
# from server.users.parent.forms import ...
from flask_login import current_user, login_required


parent = Blueprint('parent', __name__)
