const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");

const parent = require("../accounts/parents.js");
const Parent = parent.model;

const users = require("../accounts/users.js");
const User = users.model;

// Created Schema for new subject material.
const parentProfileSchema = new mongoose.Schema({
    parent: {
        type: mongoose.Schema.ObjectId,
        ref: 'Parent'
    },
    children: [],
});
// Initializing List Variable.
const ParentProfile = mongoose.model('ParentProfile', parentProfileSchema);

router.post("/parent/register", auth.verifyToken, Parent.verify, async (req, res) => {
  const parent = new ParentProfile({
      parent: req.parent,
      children: [],
  });
  try {
    await parent.save();
    return res.send(parent);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// Adds a subcatagory to list
router.put("/parent/addchild", auth.verifyToken, Parent.verify, async (req, res) => {
    try {
      let parent = await ParentProfile.findOne({
        parent: req.parent,
      });
      parent.children.push(req.body.user);
      await parent.save();
      return res.send(parent);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

module.exports = {
    model: ParentProfile,
    routes: router,
}