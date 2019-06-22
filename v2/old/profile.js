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

const profileSchema = new mongoose.Schema({
    parent: {
        type: mongoose.Schema.ObjectId,
        ref: 'Parent'
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    notreached: Array,
    achievements: Array,

    grade: Number,
    level: Number,
    xp: Number,

    lessonsProgress: Array,
    quizes: Array,
    exercies: Array,

    age: Number,

    photo: String,

    created: {
      type: Date,
      default: Date.now
    },
    edited: {
        type: Date,
        default: Date.now
    }
});
  
const Profile = mongoose.model('Profile', profileSchema);

router.post("/", auth.verifyToken, User.verify, async (req, res) => {
    const profile = new Profile({
        parent: null,
        user: req.user,
        notreached: [],
        achievements: [],

        grade: 1,
        level: 0,
        xp: 0,
    
        lessonsProgress: [],
        quizes: [],
        exercies: [],
    
        age: req.body.age,
    
        photo: "default",
    });
    profile.notreached = populateAchievements();
    try {
      await profile.save();
      return res.send(profile);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

router.get("/", auth.verifyToken, User.verify, async (req, res) => {
    try {
      let profile = await Profile.findOne({
        user: req.user
      });
      return res.send(profile);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

router.get("/parent", auth.verifyToken, Parent.verify, async (req, res) => {
    try {
      let profile = await Profile.find({
        parent: req.parent
      });
      return res.send(profile);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

router.get("/parent/:id", auth.verifyToken, Parent.verify, async (req, res) => {
    try {
      let profile = await Profile.findOne({
        _id: req.params.id,
        parent: req.parent
      });
      return res.send(profile);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

router.get("/admin", auth.verifyToken, Admin.verify, async (req, res) => {
    try {
        let students = await Profile.find().sort({
            edited: -1
        });
      return res.send(students);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

router.get("/admin/:id", auth.verifyToken, Admin.verify, async (req, res) => {
    try {
        let student = await Profile.findOne({
            _id: req.params.id
        });
      return res.send(student);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

router.put("/xp", auth.verifyToken, User.verify, async (req, res) => {
    try {
      let profile = await Profile.findOne({
        user: req.user
      });
      let levelUp = [100, 100, 150, 175, 200, 250];
      profile.xp += req.body.xp;
      profile.edited = new Date();
      if (profile.level > 5 && profile.xp >= 300) {
          profile.xp -= 300;
          profile.level += 1;
      }
      else {
        if (profile.xp >= levelUp[profile.level]) {
            profile.xp -= levelUp[profile.level];
            profile.level += 1;
        }
      }
      await profile.save();
      return res.send(profile);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

router.put("/progress", auth.verifyToken, User.verify, async (req, res) => {
    try {
      let profile = await Profile.findOne({
        user: req.user
      });
      profile = testAchievements(profile);
      profile.edited = new Date();
      await profile.save();
      return res.send(profile);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

function populateAchievements() {
    let notreached = [{title: "Promising Starts!", description: "Reach Level 5.", photo: "five"}];
    notreached.push({title: "Dedicated Student!", description: "Reach Level 10.", photo: "ten"});
    notreached.push({title: "Hard Worker.", description: "Reach Level 20.", photo: "twenty"});
    notreached.push({title: "Coding 4 Life.", description: "Reach Level 50.", photo: "fifty"});
    notreached.push({title: "codingExpert = true;", description: "Reach Level 100.", photo: "hundred"});
    notreached.push({title: "Back At It Again.", description: "Work Two Days in a Row", photo: "twodays"});
    notreached.push({title: "Eat, Code, Sleep, Repeat.", description: "Work Five Days in a Row", photo: "fivedays"});
    notreached.push({title: "No Sweat.", description: "Finish a lesson with no mistakes first try.", photo: "enlightened"});
    notreached.push({title: "WOW.", description: "Finish a quiz with no mistakes first try.", photo: "genius"});
    notreached.push({title: "C++ Master", description: "Finish the whole C++ course.", photo: "complete"});
}

function testAchievements(profile) {
  for (var i = 0; i < profile.notreached.length; i++)
  {
    let achievedBool = false;
    switch(profile.notreached[i].photo) {
      case "five":
        if (level5(profile.level)) achievedBool = true;
        break;
      case "ten":
        if (level10(profile.level)) achievedBool = true;
        break;
      case "twenty":
        if (level20(profile.level)) achievedBool = true;
        break;
      case "fifty":
        if (level50(profile.level)) achievedBool = true;
        break;
      case "hundred":
        if (level100(profile.level)) achievedBool = true;
        break;
      case "twodays":
        if (twodaysrow(profile.edited)) achievedBool = true;
        break;
      case "fivedays":
        if (fivedaysrow(profile.edited)) achievedBool = true;
        break;
      case "enlightened":
        if (lessonmistakeless(profile.progress)) achievedBool = true;
        break;
      case "genius":
        if (quizmistakeless(profile.progress)) achievedBool = true;
        break;
      case "complte":
        if (completion(profile.progress)) achievedBool = true;
        break;
    }
  }
    return profile;
}

function level5(level) {
    if (level == 5) {
        return true;
    }
    return false;
}

function level10(level) {
    if (level == 10) {
        return true;
    }
    return false;
}

function level20(level) {
    if (level == 20) {
        return true;
    }
    return false;
}

function level50(level) {
    if (level == 50) {
        return true;
    }
    return false;
}

function level100(level) {
  if (level == 50) {
      return true;
  }
  return false;
}

function twodaysrow(level) {
  if (level == 50) {
      return true;
  }
  return false;
}

function fivedaysrow(level) {
  if (level == 50) {
      return true;
  }
  return false;
}

function lessonmistakeless(level) {
  if (level == 50) {
      return true;
  }
  return false;
}

function quizmistakeless(level) {
  if (level == 50) {
      return true;
  }
  return false;
}

function completion(level) {
  if (level == 50) {
      return true;
  }
  return false;
}

module.exports = {
    model: Profile,
    routes: router,
}