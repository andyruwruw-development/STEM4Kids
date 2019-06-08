const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");

const admins = require("./admins.js");
const Admin = admins.model;

// Created Schema for complete quizes
const quizSchema = new mongoose.Schema({
    author: String,
    editors: Array,
    subject: String,

    topicIndex: Number,
    index: Number,

    title: String,
    quiz: [],

    created: {
      type: Date,
      default: Date.now
    },
});
// Initializing Quiz Variable.
const Quiz = mongoose.model('Quiz', quizSchema);

// Posts new quizes, verifies admin privlages.
router.post("/", auth.verifyToken, Admin.verify, async (req, res) => {
    const quiz = new Quiz({
        author: req.admin.name,
        editors: [],
        subject: req.body.subject,
    
        topicIndex: req.body.topicIndex,
        index: req.body.index,
    
        title: req.body.index,
        quiz: req.body.quiz,
    });
    try {
      await quiz.save();
      return res.send(quiz);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

// Gets a quiz. Finds by API call parameters.
router.get("/:subject/:topicIndex/:index", async (req, res) => {
    try {
      let quiz = await quiz.findOne({
        subject: req.params.subject,
        subject: req.params.topicIndex,
        subject: req.params.index,
      });
      return res.send(quiz);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

// Edits a quiz, adds admin's name to editors list.
router.put("/:subject/:topicIndex/:index", auth.verifyToken, Admin.verify, async (req, res) => {
    try {
      let quiz = await Quiz.findOne({
        subject: req.params.subject,
        subject: req.params.topicIndex,
        subject: req.params.index,
      });

      quiz.editors.push(req.admin.name);
      quiz.subject = req.body.subject;
      quiz.topicIndex = req.body.topicIndex;
      quiz.index = req.body.index;
      quiz.title = req.body.title;
      quiz.quiz = req.body.quiz
      ;
      await quiz.save();
      return res.send(quiz);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

// Deletes a quiz after verifying admin privlages.
router.delete("/:subject/:topicIndex/:index", auth.verifyToken, Admin.verify, async (req, res) => {
    try {
      await Quiz.deleteOne({
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
    model: Quiz,
    routes: router,
}