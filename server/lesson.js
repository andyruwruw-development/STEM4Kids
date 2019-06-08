const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");

const admins = require("./admins.js");
const Admin = admins.model;

// Created Schema for complete lessons
const lessonSchema = new mongoose.Schema({
    author: String,
    editors: Array,
    subject: String,

    topicIndex: Number,
    index: Number,

    title: String,
    lesson: [],

    created: {
      type: Date,
      default: Date.now
    },
});
// Initializing Lesson Variable.
const Lesson = mongoose.model('Lesson', lessonSchema);

// Posts new lessons, verifies admin privlages.
router.post("/", auth.verifyToken, Admin.verify, async (req, res) => {
    const lesson = new Lesson({
        author: req.admin.name,
        editors: [],
        subject: req.body.subject,
    
        topicIndex: req.body.topicIndex,
        index: req.body.index,
    
        title: req.body.index,
        lesson: req.body.lesson,
    });
    try {
      await lesson.save();
      return res.send(lesson);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

// Gets a lesson. Finds by API call parameters.
router.get("/:subject/:topicIndex/:index", async (req, res) => {
    try {
      let lesson = await Lesson.findOne({
        subject: req.params.subject,
        subject: req.params.topicIndex,
        subject: req.params.index,
      });
      return res.send(lesson);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

// Edits a lesson, adds admin's name to editors list.
router.put("/:subject/:topicIndex/:index", auth.verifyToken, Admin.verify, async (req, res) => {
    try {
      let lesson = await Lesson.findOne({
        subject: req.params.subject,
        subject: req.params.topicIndex,
        subject: req.params.index,
      });

      lesson.editors.push(req.admin.name);
      lesson.subject = req.body.subject;
      lesson.topicIndex = req.body.topicIndex;
      lesson.index = req.body.index;
      lesson.title = req.body.title;
      lesson.lesson = req.body.lesson
      ;
      await lesson.save();
      return res.send(lesson);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

// Deletes a lesson after verifying admin privlages.
router.delete("/:subject/:topicIndex/:index", auth.verifyToken, Admin.verify, async (req, res) => {
    try {
      await Lesson.deleteOne({
        subject: req.params.subject,
        subject: req.params.topicIndex,
        subject: req.params.index,
      });
      return res.send(true);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

module.exports = {
    model: Lesson,
    routes: router,
}