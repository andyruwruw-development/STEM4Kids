const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/codinglessons', {
  useNewUrlParser: true
});

const cookieParser = require("cookie-parser");
app.use(cookieParser());

// LOGINS
    const users = require("./users.js");
    app.use("/api/users", users.routes);

    //const parents = require("./parents.js");
    //app.use("/api/parents", parents.routes);

    const admins = require("./admins.js");
    app.use("/api/admins", admins.routes);

// MATERIAL
    const lesson = require("./lesson.js");
    app.use("/api/lesson", lesson.routes);

    const exercise = require("./exercise.js");  
    app.use("/api/exercise", exercise.routes);

    const quiz = require("./quiz.js");
    app.use("/api/quiz", quiz.routes);

// KIDS
    const profile = require("./profile.js");
    app.use("/api/profile", profile.routes);

    const progress = require("./progress.js");
    app.use("/api/progress", progress.routes);

app.listen(3003, () => console.log('Server listening on port 3003!'));