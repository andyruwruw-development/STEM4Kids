const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");

const admins = require("./admins.js");
const Admin = admins.model;

const lesson = require("./lesson.js");
const Lesson = lesson.model;

const exercise = require("./exercise.js");
const Exercise = exercise.model;

const quiz = require("./quiz.js");
const Quiz = quiz.model;

const profile = require("./profile.js");
const Profile = profile.model;

// Created Schema for new subject material.
const listSchema = new mongoose.Schema({
    subject: String,
    list: Array,
});
// Initializing List Variable.
const List = mongoose.model('List', listSchema);

/*
list
    [                                                
        {                                                      
            index: NUMBER,
            title: STRING,

            quizcompletion: Number,
            challengecompletion: Number,
            Participation: Number,

            items: [
                {
                    index: Number,
                    title: String,

                    quizcompletion: Number,
                    challengecompletion: Number,
                    Participation: Number,
                }
            ]
        }
    ]
*/

/*
progress [
    {
        subject: String,
        reports: [
            {
                subtopicIndex: Number,
                index: Number,

                quizcompletion: Number,
                challengecompletion: Number,
                Participation: Number,
                
                Date: Date, 
            }
        ]
    }
]
*/ 

router.post("/newsubject/:subject", auth.verifyToken, Admin.verify, async (req, res) => {
  const list = new List({
      subject: "C++ Lessons",
      list: [
        {
          topicIndex: 0,
          title: ""
        }
      ],
  });
  try {
    await list.save();
    return res.send(list);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// Posts new subject materials, verifies admin privlages.
router.post("/newsubject/:subject", auth.verifyToken, Admin.verify, async (req, res) => {
    const list = new List({
        subject: req.params.subject,
        list: [],
    });
    try {
      await list.save();
      return res.send(list);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

// Adds a subcatagory to list
router.put("/chapters/:subject", async (req, res) => {
    try {
      let list = await List.findOne({
        subject: req.params.subject,
      });
      list.list = req.body.list;
      await list.save();
      return res.send(list);
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

module.exports = {
    model: List,
    routes: router,
}