const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");

const users = require("./users.js");
const User = users.model;

const admins = require("./admins.js");
const Admin = admins.model;

const parents = require("./parents.js");
const Parent = parents.model;

const reportSchema = new mongoose.Schema({
    parent: {
        type: mongoose.Schema.ObjectId,
        ref: 'Parent'
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },

    subject: String,
    topicIndex: Number,
    index: Number,

    report: [],

    started: {
      type: Date,
      default: Date.now
    },
    completed: Date
});
  
const Report = mongoose.model('Report', reportSchema);

router.post("/", auth.verifyToken, User.verify, async (req, res) => {
    const report = new Report({
        parent: req.user.parent,
        user: req.user,

        subject: req.body.subject,
        topicIndex: req.body.topicIndex,
        index: req.body.index,
        
        report: req.body.report,

        completed: null,
    });
    try {
      await report.save();
      return res.send(report);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

// Get One
router.get("/parent/:childId/:reportId", auth.verifyToken, Parent.verify, async (req, res) => {
    try {
      let report = await Report.findOne({
        parent: req.parent,
        'user._id' : req.params.childId,
        _id: reportId,
      });
      return res.send(report);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

// Get All
router.get("/parent/:childId", auth.verifyToken, Parent.verify, async (req, res) => {
    try {
      let reports = await Report.find({
        parent: req.parent,
        'user._id' : req.params.childId,
      }).sort({
        started: -1,
      });
      return res.send(reports);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

router.get("/admin", auth.verifyToken, Admin.verify, async (req, res) => {
    try {
      let reports = await Report.find({
      }).sort({
        started: -1,
      });
      return res.send(reports);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

router.get("/admin/:id", auth.verifyToken, Admin.verify, async (req, res) => {
    try {
      let report = await Report.findOne({
        _id : req.params.id,
      });
      res.send(report);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

router.put("/progress", auth.verifyToken, User.verify, async (req, res) => {
    try {
      let report = await Report.findOne({
        user: req.user
      });
      report.report = req.body.report;
      await report.save();
      return res.send(true);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

module.exports = {
  model: Report,
  routes: router,
}