const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");

const admins = require("./admins.js");
const Admin = admins.model;

const user = require("./users.js");
const User = user.model;

const itemSchema = new mongoose.Schema({
    author: String,
    editors: Array,

    subject: String,
    topicIndex: Number,
    index: Number,
    lessonIndex: Number,

    type: String,

    title: String,
    data: [],

    created: {
      type: Date,
      default: Date.now
    },
});

// Initializing Lesson Variable.
const Item = mongoose.model('Item', itemSchema);

// Posts new lessons, verifies admin privlages.
router.post("/create", auth.verifyToken, Admin.verify, async (req, res) => {
    const item = new Item({
        author: req.admin.name,
        editors: [],

        subject: req.body.subject,
        topicIndex: req.body.topicIndex,
        index: req.body.index,
        lessonIndex: null,

        type: req.body.type,
        data: req.body.data,
    
        title: req.body.index,
        data: req.body.data,
    });
    if (item.type == "lesson")
    {
        item.lessonIndex = req.body.lessonIndex;
    }
    try {
      await item.save();
      return res.send(item);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

// Gets a lesson. Finds by API call parameters.
router.get("/view/:subject/:topicIndex/:type/:index", async (req, res) => {
    try {
      let item = await Item.findOne({
        subject: req.params.subject,
        topicIndex: req.params.topicIndex,
        type: req.params.type,
        index: req.params.index,
      });
      return res.send(item);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

// Edits a lesson, adds admin's name to editors list.
router.put("/edit/:subject/:topicIndex/:type/:index", auth.verifyToken, Admin.verify, async (req, res) => {
    try {
        if (req.admin.clearance > 1)
        {
            let item = await Item.findOne({
                subject: req.params.subject,
                topicIndex: req.params.topicIndex,
                type: req.params.type,
                index: req.params.index,
            });
            item.editors.push(req.admin.name);
            item.subject = req.body.subject;
            item.topicIndex = req.body.topicIndex;
            item.index = req.body.index;
            if (item.type == "lesson")
            {
                item.lessonIndex = req.body.lessonIndex;
            }
            item.title = req.body.title;
            item.data = req.body.data;
            await item.save();
            return res.send(item);
        }
        return res.send(false);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

router.delete("/delete/:subject/:topicIndex/:type/:index", auth.verifyToken, Admin.verify, async (req, res) => {
    try {
        if (req.admin.clearance > 1)
        {
            await Item.deleteOne({
                subject: req.params.subject,
                topicIndex: req.params.topicIndex,
                type: req.params.type,
                index: req.params.index,
            });
            return res.send(true);
        }
        return res.send(false);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

module.exports = {
    model: Item,
    routes: router,
}