const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");

const admins = require("../accounts/admins.js");
const Admin = admins.model;

// Created Schema for new subject material.
const adminProfileSchema = new mongoose.Schema({
    admin: {
        type: mongoose.Schema.ObjectId,
        ref: 'Admin'
    },
    email: String,
    phone: String,
    clearance: Number,

    location: Array,
});
// Initializing List Variable.
const AdminProfile = mongoose.model('AdminProfile', adminProfileSchema);

router.post("/admin/register", auth.verifyToken, Admin.verify, async (req, res) => {
  const profile = new AdminProfile({
      admin: req.admin,
      email: req.body.email,
      phone: req.body.phone,
      clearance: 1,

      location: [req.body.location],
  });
  try {
    await profile.save();
    return res.send(profile);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// Adds a subcatagory to list
router.put("/admin/update", auth.verifyToken, Admin.verify, async (req, res) => {
    try {
      let profile = await AdminProfile.findOne({
        admin: req.admin,
      });
      profile.email = req.body.email;
      profile.phone = req.body.phone;
      let admin = await Admin.findOne({
        username: req.admin.username,
      });
      admin.username = req.body.username;
      admin.name = req.body.name;
      await admin.save();
      await profile.save();
      return res.send(profile);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

router.put("/admin/clearance/:username/:clearance", auth.verifyToken, Admin.verify, async (req, res) => {
    try {
      let profile = await AdminProfile.findOne({
        admin: req.admin,
      });
      if (profile.clearance >= 3)
      {
        let admin = await Admin.findOne({
        username: req.params.username,
        })
        let adminprofile = await AdminProfile.findOne({
            admin: admin,
        })
        adminprofile.clearance = req.params.clearance;
        await adminprofile.save();
      }
      return res.send(adminprofile);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

router.delete("/admin/delete/:username/:clearance", auth.verifyToken, Admin.verify, async (req, res) => {
    try {
      let profile = await AdminProfile.findOne({
        admin: req.admin,
      });
      if (profile.clearance >= 3)
      {
        let admin = await Admin.findOne({
        username: req.params.username,
        });
        await AdminProfile.deleteOne({
            admin: admin,
        });
        let admin = await Admin.deleteOne({
            username: req.params.username,
        });
      }
      return res.send(true);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

module.exports = {
    model: AdminProfile,
    routes: router,
}