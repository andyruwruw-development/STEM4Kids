const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");

const SALT_WORK_FACTOR = 10;

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  name: String,
  clearance: Number,
  tokens: [],
});

adminSchema.pre('save', async function(next) {
  // only hash the password if it has been modified (or is new)
  if (!this.isModified('password'))
    return next();

  try {
    // generate a salt
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);

    // hash the password along with our new salt
    const hash = await bcrypt.hash(this.password, salt);

    // override the plaintext password with the hashed one
    this.password = hash;
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
});

adminSchema.methods.comparePassword = async function(password) {
  try {
    const isMatch = await bcrypt.compare(password, this.password);
    return isMatch;
  } catch (error) {
    return false;
  }
};

adminSchema.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj.password;
  delete obj.tokens;
  return obj;
}

adminSchema.methods.addToken = function(token) {
  this.tokens.push(token);
}

adminSchema.methods.removeToken = function(token) {
  this.tokens = this.tokens.filter(t => t != token);
}

adminSchema.methods.removeOldTokens = function() {
  this.tokens = auth.removeOldTokens(this.tokens);
}

// middleware to validate user account
adminSchema.statics.verify = async function(req, res, next) {
  // look up user account
  const user = await User.findOne({
    _id: req.user_id
  });
  if (!user || !user.tokens.includes(req.token))
    return res.clearCookie('token').status(403).send({
      error: "Invalid user account."
    });

  req.user = user;

  next();
}

const Admin = mongoose.model('Admin', adminSchema);

// create a new user
router.post('/', async (req, res) => {
  if (!req.body.username || !req.body.password || !req.body.name)
    return res.status(400).send({
      message: "Name, username, and password are required."
    });

  try {

    //  check to see if username already exists
    const existingAdmin = await Admin.findOne({
      username: req.body.username
    });
    if (existingAdmin)
      return res.status(403).send({
        message: "That username already exists."
      });
    console.log("HELSFJK:");
    // create new user
    const admin = new Admin({
      username: req.body.username,
      password: req.body.password,
      name: req.body.name,
      email: req.body.email,
      clearance: 3,
    });
    await admin.save();
    login(admin, res);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// login
router.post('/login', async (req, res) => {
  if (!req.body.username || !req.body.password)
    return res.status(400).send({
      message: "Username and password are required."
    });

  try {
    //  lookup user record
    const existingAdmin = await Admin.findOne({
      username: req.body.username
    });
    if (!existingAdmin)
      return res.status(403).send({
        message: "The username or password is wrong."
      });

    // check password
    if (!await existingAdmin.comparePassword(req.body.password))
      return res.status(403).send({
        message: "The username or password is wrong."
      });

    login(existingAdmin, res);

  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

async function login(admin, res) {
  let token = auth.generateToken({
    id: admin._id
  }, "24h");

  admin.removeOldTokens();
  admin.addToken(token);
  await admin.save();

  return res
    .cookie("token", token, {
      expires: new Date(Date.now() + 86400 * 1000)
    })
    .status(200).send(admin);
}

// Logout
router.delete("/", auth.verifyToken, Admin.verify, async (req, res) => {
  req.admin.removeToken(req.token);
  await req.user.save();
  res.clearCookie('token');
  res.sendStatus(200);
});

// Get current user if logged in.
router.get('/', auth.verifyToken, Admin.verify, async (req, res) => {
  return res.send(req.admin);
});

module.exports = {
  model: Admin,
  routes: router,
}