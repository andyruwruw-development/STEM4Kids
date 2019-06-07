const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const router = express.Router();
const auth = require("./auth.js");

const admins = require("./admins.js");
const Admin = admins.model;

// Created Schema for complete exercises
const exerciseSchema = new mongoose.Schema({
    author: String,
    editors: Array,
    subject: String,

    topicIndex: Number,
    index: Number,

    title: String,
    exercise: [],

    created: {
      type: Date,
      default: Date.now
    },
});
// Initializing Exercise Variable.
const Exercise = mongoose.model('Exercise', exerciseSchema);

// Posts new exercises, verifies admin privlages.
router.post("/", auth.verifyToken, Admin.verify, async (req, res) => {
    const exercise = new Exercise({
        author: req.admin.name,
        editors: [],
        subject: req.body.subject,
    
        topicIndex: req.body.topicIndex,
        index: req.body.index,
    
        title: req.body.index,
        exercise: req.body.exercise,
    });
    try {
      await exercise.save();
      return res.send(exercise);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

// Gets a exercise. Finds by API call parameters.
router.get("/:subject/:topicIndex/:index", async (req, res) => {
    try {
      let exercise = await Exercise.findOne({
        subject: req.params.subject,
        subject: req.params.topicIndex,
        subject: req.params.index,
      });
      return res.send(exercise);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

// Edits a exercise, adds admin's name to editors list.
router.put("/:subject/:topicIndex/:index", auth.verifyToken, Admin.verify, async (req, res) => {
    try {
      let exercise = await Exercise.findOne({
        subject: req.params.subject,
        subject: req.params.topicIndex,
        subject: req.params.index,
      });

      exercise.editors.push(req.admin.name);
      exercise.subject = req.body.subject;
      exercise.topicIndex = req.body.topicIndex;
      exercise.index = req.body.index;
      exercise.title = req.body.title;
      exercise.exercise = req.body.exercise
      ;
      await exercise.save();
      return res.send(exercise);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

// Deletes a exercise after verifying admin privlages.
router.delete("/:subject/:topicIndex/:index", auth.verifyToken, Admin.verify, async (req, res) => {
    try {
      await Exercise.deleteOne({
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
    model: Exercise,
    routes: router,
}