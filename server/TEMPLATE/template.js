const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
//const auth = require("./auth.js");

//const admins = require("./admins.js");
//const TEMPLATE = admins.model;

// Created Schema for new subject material.
const TEMPLATESchema = new mongoose.Schema({
    
});
// Initializing List Variable.
const TEMPLATE = mongoose.model('TEMPLATE', TEMPLATESchema);


router.post("/TEMPLATE/:TEMPLATE", auth.verifyToken, TEMPLATE.verify, async (req, res) => {
  const TEMPLATE = new TEMPLATE({
      
  });
  try {
    await TEMPLATE.save();
    return res.send(TEMPLATE);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// Adds a subcatagory to list
router.put("/TEMPLATE/:TEMPLATE", async (req, res) => {
    try {
      let TEMPLATE = await TEMPLATE.findOne({
        TEMPLATE: req.params.TEMPLATE,
      });

      await TEMPLATE.save();
      return res.send(TEMPLATE);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});



module.exports = {
    model: TEMPLATE,
    routes: router,
}