# Rest API Server

This is a rundown of everything I know about writing RESTful APIs.

Feel free to text me any questions. I'm not that great at explaining concepts and hope that this at least serves as a reference.

Don't forget to [Install MongoDB](#installmongo) first.

Happy coding.

## Table of Contents

1. <a href="#pre">Preface:</a> JavaScript Syntax
2. <a href="#part1">Part 1:</a> What is an Express Server Middleware
3. <a href="#part2">Part 2:</a> Request Routing - Finding the Right Function
   1. <a href="#part2-part1">Method 1:</a> Request Type
   2. <a href="#part2-part2">Method 2:</a> Request Path
   3. <a href="#part2-part3">Method 3:</a> Routing to Multiple Files
4. <a href="#part3">Part 3:</a> Creating the Server
   1. <a href="#part3-part1">Section 1:</a> Installation of Packages
   2. <a href="#part3-part2">Section 2:</a> The Router
   3. <a href="#part3-part3">Section 3:</a> Server Files
   4. <a href="#part3-part4">Section 4:</a> Mongoose Schemas and Objects
   5. <a href="#part3-part5">Section 5:</a> Server Functions
   6. <a href="#part3-part6">Section 6:</a> Stuff Mongoose Can Do
   7. <a href="#part3-part7">Section 7:</a> POST Functions
5. <a href="#part4">Part 4:</a> Tips and Tricks
   1. <a href="#part4-part1">Tip 1:</a> Path Parameters
   2. <a href="#part4-part2">Tip 2:</a> Logging Created Times
   3. <a href="#part4-part3">Tip 3:</a> User File
   4. <a href="#part4-part4">Tip 4:</a> Proper Permissions
   5. <a href="#part4-part5">Tip 5:</a> User Data
   6. <a href="#part4-part6">Tip 6:</a> Helping Functions
   7. <a href="#part4-part7">Tip 7:</a> Using `_id` for Cool Stuff

<h1 id="installmongo">MongoDB Installation</h1>

Before we get started on anything you'll need to start a Mongo Database server on your computer!

If you plan on working on multiple computers I would do this on both.

There is [installation documentation](https://docs.mongodb.com/manual/installation/) on the Mongo website but below summarizes the steps on each OS.

## Installing on MacOS

First, tap the official MongoDb repositiory.

```
brew tap mongodb/brew
```
If your mac isn't letting you use brew, you can install [Homebrew](https://brew.sh/) again.

After that is done, install Mongo.
```
brew install mongodb-community@4.0
```

To run from the command line in the foreground:
```
mongod --config /usr/local/etc/mongod.conf
```
To run as a service:
```
brew services start mongodb-community@4.0
```
## Installing on Windows

First, [download the Windows 64-bit](https://www.mongodb.com/download-center/community?jmp=docs), MSI installation for the current version.

Next, double-click the MSI file you downloaded. You can install with the defaults. Install MongoDB Compass for a GUI for the database.

## R u a hardcore coder with Linux?
To install MongoDB:
```
sudo apt update
sudo apt install mongodb
```
Mongo will run on port `27017` by default.

Check if it's chuggin:
```
sudo systemctl status mongodb
```
Stop it:
```
sudo systemctl stop mongodb
```
To start or restart Mongo:
```
sudo systemctl start mongodb
sudo systemctl restart mongodb
```
By default Mongo is setup to run automatically to disable/enable this behavior:
```
sudo systemctl disable mongodb
sudo systemctl enable mongodb
```

<h1 id="pre">Preface: Javascript Syntax</h1>

```
Declaring Variables 
(No distinction as to the type of variable you wish to create)

var foo = "Soup";
let bar = 12;
const baz = [1, 2, 3];
```

```
Creating Functions 

function foo(bar) {
  let baz = bar * 100;
  baz += "%";           // Changes it to a string.
  return baz;
}
```

<h1 id="part1">Part 1: What is an Express Server Middleware</h1>

Our server runs locally on the same machine holding the website and doesn't actively do anything until called upon, thus RESTful.

We allow clients on our website to make **requests** to the server, and recieve **responses**. 

*Node JS* (npm) allows us to run an *Express Server* or a *middleware*, a series of functions which come between the *request* and *response*. Because the *Express Server* is run locally, it's only accessable by our clients through websites hosted on our system.

The *Express Server* has the only access to our *Mongo Database*, which holds lesson materials, user information, and other data we wish to keep private.

Our server functions can ensure that we only share data with users to whom have access.

<h1 id="part2">Part 2: Request Routing - Finding the Right Function</h1>

There's a few ways the server knows which function to correctly run when handling a request.

<h2 id="part2-part1">Method 1: Request Type</h2>

First of which is the *type of request* received.

REST APIs can recieve four different kind of requests.
```
1. POST
2. GET
3. PUT
4. DELETE
```
A **POST** request is typically used to *create* new resources.

A **GET** request is typically used to *recieve* existing resources.

A **PUT** request is typically used to *change* existing resources.

A **DELETE** request is typically used to *delete* existing resources.

<h2 id="part2-part2">Method 2: Request Path</h2>

Requests all come with designated paths, to which cooresponding functions respond to.

For example, the client might want to retrieve all locations held in the database. 

The client side website might make a call to our API with the path -
```
GET /api/locations
```
Our *Express Router* will run the correct function based on the *request's path*, retrieve all the relevent data from our database, and send it back in a *response*.

Or perhaps the client wishes to view details pertaining one specific location. They could use an alternate path -
```
GET /api/locations/cupertino
```
<h2 id="part2-part3">Method 3: Routing to Multiple Files</h2>

We're going to be handling all *reqests* from one server, which means serving a multitude of data types and cooresponding functions.

Luckily with an *Express Server* we can create a central router and send *requests* to the right file through reading their path.

This means if we get the request -
```
GET /api/locations/cupertino
```
We can route it to our locations file.

```
INSIDE THE ROUTER

const users = require("./users.js");
app.use("/api/users", users.routes);

const parents = require("./parents.js");
app.use("/api/parents", parents.routes);

const locations = require("./locations.js");
app.use("/api/locations", locations.routes);
```
Inside of our locations file, we only need to right a function with the path -
```
GET /cupertino
```
Because Express cuts off the now irrelevant `/api/locations`.

<h1 id="part3">Part 3: Creating the Server</h1>

I start by creating a file for my server in the repository.

<h2 id="part3-part1">Section 1: Installation of Packages</h2>

Then within command prompt I install the packages needed.
```
npm install express mongoose bcrypt jsonwebtoken cookie-parser
```
**express** is our middleware program.

**mongoose** is our database.

**bcrypt** hashes passwords for us to ensure we dont store them in plain text.

**jsonwebtoken** allows us to store tokens on clients browser for user information.

**cookie-parser** cookies are stored on the browser as well.

<h2 id="part3-part2">Section 2: The Router</h2>

[Example Router](https://github.com/andyruwruw/To-Do-Personal/blob/master/server/todoserver.js)

We can then create our first file, the router.

To start we need to import the packages we want to use.

Place these at the top in order.
```
const express = require('express');
const bodyParser = require("body-parser");
```
Once again, express is our middleware, and body-parser is apart of Node.js to parse incoming reqests.
```
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
```
Further inicialization of our express middleware with body-parser now that they've been imported.
```
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/pick_a_collection', {
  useNewUrlParser: true
});
```
This imports mongoose, our database package. Our machine will already have a mongoose server running on it.

You can choose the collection you wish to save to where it says `pick_a_collection`. This just needs to be unique from other servers you might be running on the machine saving to mongoose.

```
const cookieParser = require("cookie-parser");
app.use(cookieParser());
```
The package cookie-parser is involved in request handling.

Now we're done with importing.

Finally, this needs to go at the **very bottom of the file**, and should always be the last thing on the router file -
```
app.listen(3003, () => console.log('Server listening on port 3003!'));
```
The number symbolizes the port by which the server will be running on. Within our Vue website we designate it to route all calls to this same port. It's important to have identical ports for both and not have other servers running with the same port.

As we create new files for various routes, we'll add the following to our router between `app.use(cookieParser());` and `app.listen*]`.
```
const example = require("./example.js");
app.use("/api/example", example.routes);
```
Change out `example` with the name and topic of each file. This will be used by Express to correctly route each request to it's desired file.

<h2 id="part3-part3">Section 3: Server Files</h2>

[Example Server File](https://github.com/andyruwruw/To-Do-Personal/blob/master/server/item.js)

Server files you create need a few things to work properly.

The following needs to be placed at the top to import the correct files to work properly.
```
const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
```
and at the very end of the file after all the functions, you need -
```
module.exports = {
    model: Item,
    routes: router,
}
```
We'll talk later about what `Item` signifies and it's importance.

<h2 id="part3-part4">Section 4: Mongoose Schemas and Objects</h2>

We store all our data in a Mongoose Data Base, which has its own annoying syntax and ways of use. I have suffered trying to figure out how Mongoose works, with a lot of documentation reading.

Luckily I can just tell you everything I know and it'll be easy!

Mongoose saves data under different `databases(db)`, which is what we designated earlier in the router. Each database is separate from another and I usually keep one per site.

Databases then have `collections`, which are "collections" of simular objects (JavaScript Objects are python dictionaries).

At the top of each "routed-to" file we've created we need to define what type of objects we will be storing in each of their collections.

To define this, we create a `schema`.

Following `const router = express.Router();` add the following -
```
const exampleSchema = new mongoose.Schema({
    foo: String,
    bar: Number,
    baz: Object,
    hi_there: Array,
    how_are_you: {
        good: Boolean,
        bad: [String, String String]
    },
    UwU: Date.now,
});

const Example = mongoose.model('Example', exampleSchema);
```
We'll have to decide what kind of data to store, all of that is just nonsense. But the use of `Number`, `String`, `Object`, `Boolean`, etc are use to designate in the *schema* definition what type of data will be stored in that slot.

Our statement below creating our *schema* is where we finally define the Object, which will be used throughout our code.

`Example` and `exampleSchema` are exchanged depending on what the Item is.

<h2 id="part3-part5">Section 5: Server Functions</h2>

Finally getting around to talk about the `CODING`.

First thing we gotta do is create the basic function with the correct path and type.

Let's go back to the first example with the path -
```
GET /api/locations/cupertino
```

Note that express will lead the request to our `locations.js` file and remove irrelevent parts of the path, making it now just -
```
GET /cupertino
```

Between declaring the `mongoose object` and `module.exports` start the following -
```
router.get("/cupertino", async (req, res) => {

});
```
The first line `get` is where we designate the type of reqests lead to this function. It can be changed with `post`, `put`, and `delete`.

In cases where the path is simply
```
GET /api/locations
```
You can create the previous function as -
```
router.get("/", async (req, res) => {

});
```
because the first two items are removed by the router.

More to note, `async (req, res) => { }` is syntax for JavaScript to run the function between the brackets with `req(request)` and `res(response)` as parameters.

An `async` function is a long subject. All I usually take away from it is it's (<-- it its is it isn't is it) enabling of you to use `await`. I'll talk about that in a little bit.

Say we wanted to find an item from within the *Mongo Database* called `Item`.

First step is wrapping that function in a `try` and `catch` statement, which will *catch* any errors thrown and send them back to the client.

```
router.get("/", async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});
```
The purpose of `console.log` is simply debugging. It's JavaScripts `print` or `cout` or `System.out.println()` ( <<< last one is gross).






Within the `try` statement we're going to find our item, and then send it back in the `response`.

There's two ways to find things in Mongoose: `find` and `findOne`. 

*Find* will return and `array` of results that match a set of given parameters. 

I wrote "Find one will find one" but that's redundant. It returns one object.

```
router.get("/", async (req, res) => {
    try {
      let item = await Item.findOne({
        subject: "quetzal",
      });
      return res.send(item);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});
```
We create a new variable to hold the data called `item`, and then use `await` (I'll explain it right after this I promise).

We then specify what TYPE of object we want to find with our `Item` object we declared with the *mongoose schema*. 

`findOne` is opened up and we set the parameters as to what Item we want to find.

In this case, it will find an item with `subject` of *"quetzal"* and return it.

Now say we want to do something with `item` after we load it.

```
router.get("/", async (req, res) => {
    try {
      let item = await Item.findOne({
        subject: "quetzal",
      });

      item.data += 1;

      return res.send(item);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});
```
With web programming, you have to account for the fact that some things take a while to load.

`await` within an `async` function is like a **pause** until the file has been found and loaded. For example, all of my server calls have to be `async` to allow the data to first to sent back from the server.

The statement `return res.send(item);` will send item back to the client.

When a request is made, a **payload** can be added to it, or an object with data.

For example, I can ask for a lesson, and in the payload, specify the subject and index, which can be used to find it.

Data sent in the payload can be accessed through -
```
req.body.var_name
```
So if my payload was -
```
{
  subject: "Science",
  index: 2,
}
```
You could access the `subject` through `req.body.subject`.

<h2 id="part3-part6">Section 6: Stuff Mongoose Can Do</h2>

```
Find One

await Item.findOne({   // Nothing i
  key: value,
  key: value,
});

Returns Object
```

```
Find Many

await Item.find({             // Leaving find({}) empty will return all items.
  key: value,
  key: value,
});

Returns Array of Items
```

```
Delete One

await Item.deleteOne({
  key: value,
  key: value,
});

Returns Object with Confirmation
```

```
Delete Many

await Item.deleteMany({
  key: value,
  key: value,
});

Returns Object with Confirmation
```

```
Change Data

await Item.updateOne({
  key: value,       // Finds Object based on These
  key: value,
},
{
  $set: {           // Changes this data. Optional
    key: newValue,
    key: newValue,
  },
  $push {           // Push data, Optional.
    key: value,
  },
});

Returns Object with Confirmation
```

```
Find and Sort Array of Objects

await Item.find({
  key: value,       // Finds Object based on These
  key: value,
}).sort({
  key: -1 OR 1 (ascending or descending)
});

Returns Sorted Array of Objects
```

<h2 id="part3-part7">Section 7: POST Functions</h2>

`POST` functions create new items and are a bit different.

Say we have the schema:
```
const itemSchema = new mongoose.Schema({
    title: String
  });
  
  const Item = mongoose.model('Item', itemSchema);
```
You would right a `POST function` as follows with the right path.
```
router.post("/", async (req, res) => {
    const item = new Item({
      title: req.body.title,
    });
    try {
      await item.save();
      return res.send(items);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });
```

Create a new item using the syntax `const item = new Item` with the correct object name in place of `item` and `Item`.

Within a try and catch, `await item.save()` is used to save the item to the database.

I usually send the new item to the client as well for immediate display.


<h1 id="part4">Part 4: Tips and Tricks</h1>


<h2 id="part4-part1">Tip 1: Path Parameters</h2>

```
router.get("/:location/:username", async (req, res) => {
    try {
      let item = await Item.findOne({
        username: req.params.username,
        location: req.params.location,
      });

      return res.send(item);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});
```

Notice the use of `/:location/:username` in the path for the function.

These essentially become parameters accessable through `req.params.var_name`.

Meaning, if I called the function by -
```
GET /api/location/cupertino/andrew
```
The first two variables would be removed by Express, and `req.params.location` would have the value **"cupertino"**, and `req.params.location` would have **"andrew"**.

<h2 id="part4-part2">Tip 2: Logging Created Times</h2>

```
const itemSchema = new mongoose.Schema({
    title: String,

    created: {
      type: Date,
      default: Date.now
    },
  });
```

Adding the following `created` to the bottom of your schema can be really useful.

Within the *POST function*, you don't need to set `created`, it will automatically create a *Date Object* the moment it was created.

```
router.post("/", async (req, res) => {
    const item = new Item({
      title: req.body.title,
    });
    try {
      await item.save();
      return res.send(items);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });
```

This allows you to send back arrays of items sorted in order of date created.

```
router.get("/", async (req, res) => {
  try {
    let items = await Item.find({
    }).sort({
      created: -1
    });
    return res.send(comments);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
  });
```

The `sort({created: -1})` will arrange the array of items in reverse order.

<h2 id="part4-part3">Tip 3: User File</h2>

So I took the class on web design this last fall, and we learned all about salting and hashing passwords to have consistant, irreversable passwords hashed and not stored in plain text.

Along with storing webtokens with user data so they don't have to login everytime with the same device.

Honestly because the process is always the same, I used the same file and rarely make changes, and I'd suggest doing the same.

If you want to read into it and figure it out go ahead!

[Student (User) File](./users.js)

[Admin (User) File](./admins.js)

[Parent (User) File](./parents.js)

But go ahead and copy the file into the server.

They all require the file [auth.js](./auth.js) which verfies tokens.

Files with links to `auth.js` at the top need to be in same directory as the file.

<h2 id="part4-part4">Tip 4: Proper Permissions</h2>

Say we have a function that allows admins to add new admins.

In order to ensure only admins have access to that function, we can add verfication.

At the top of the file under `const router = express.Router();` add the following link to our `auth.js` file.

```
const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");
```

This brings us to something I mentioned I would talk about earlier.
```
module.exports = {
    model: Item,
    routes: router,
}
```
At the bottom of each of your files you should have an export that leads back to the router.

When we created schemas, we initialized a template object called `Item`. Every file will have a different schema and template object. You can add the template object to `model: Item,` to export it and allow other files to import it for their own use.

So always ensure that the object you're dealing with is getting exported at the bottom.

So lets import that object into the file we just added `const auth = require("./auth.js");` to. Add the following to import the `User` object from `user.js`. Add it right below where we imported `auth.js`.

```
const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");

const users = require("./users.js");
const User = users.model;
```

The user object is now available for us to use to verify login information, and protect functions from running without proper authentication.

To do this we add the following to our functions that require login to access.
```
router.get("/", auth.verifyToken, User.verify, async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});
```
`auth.verifyToken` is a method within `auth.js` which will check for stored cookies with proper login information.

`User.verify` will validate a user account by looking it up in our database.

The same can be done with `parents.js` and `admins.js`.
```
const parents = require("./parents.js");
const Parent = parents.model;

router.get("/", auth.verifyToken, Parent.verify, async (req, res) => {
```
```
const admins = require("./admins.js");
const Admin = admins.model;

router.get("/", auth.verifyToken, Admin.verify, async (req, res) => {
```
<h2 id="part4-part5">Tip 5: User Data</h2>

Students will all have their own profiles, which requires us to bind their unique `User` object to a new `StudentProfile` object.

To start, don't forget to import `auth.js` and the `User` objects.
```
const auth = require("./auth.js");

const users = require("./users.js");
const User = users.model;
```

Next, for the schema of a profile, we can tell mongoose that one of data pieces will be a `User` object with the following syntax.

```
const itemSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },

    // Other Data

  });
  
  const Item = mongoose.model('Item', itemSchema);
```
When we use a `POST` function to create a new item, usually you go through the following:
```
router.post("/", async (req, res) => {
    const item = new Item({
      title: req.body.title,
    });
    try {
      await item.save();
      return res.send(items);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });
```
Using `req.body.var_name ` to access `request` data.

However when sent a `request`, the `User` information will be available in `req.user` as opposed to `req.body`. So you can simply write a `POST` function with a user's `User` object as a piece of data as follows:
```
router.post("/", auth.verifyToken, User.verify, async (req, res) => {
    const item = new Item({
      user: req.user,
      title: req.body.title,
    });
    try {
      await item.save();
      return res.send(item);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });
```
Same goes for `Admin` and `Parent`.
```
admin: req.user
```
```
parent: req.user
```
I'll be using the variable name `user` for all three, it's up to the server to have the `User` for kids, `Parent` for parents, and `Admin` for admins. The only place you should have to use `user` universally is accessing `req.user`.

Additionally, each Parent will have a profile with their kids as data pieces.

Here you can get away with just an empty array:
```
const itemSchema = new mongoose.Schema({
    parent: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },

    kids: [] 
    // OR 
    // kids: Array

  });
  
  const Item = mongoose.model('Item', itemSchema);
```
And then just have a function for adding kids.

Honestly that one is going to be tricky and I'm still planning it out in my head, we can talk throught it together!

<h2 id="part4-part6">Tip 6: Helping Functions</h2>

Feel free to add more functions to clean up the code!

Back when I coded chess, I kept all the chess logic in my server. Ensuring no one could cheat by changing their own source code.

Syntax for functions is at [JavaScript Syntax](pre).

<h2 id="part4-part7">Tip 7: Using `_id` for Cool Stuff</h2>

It's not that interesting actually.

Every item in your Mongoose server is saved with a `_id` regardless if you add it to the `schema`. These `_id` can be manually set in the `POST` function, and can be useful to finding items by a unique id.

---
---
---
---
## HUZZAH! YOU NOW KNOW EVERYTHING I KNOW.
Feel free to ask questions.

---
---
---
---


