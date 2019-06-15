# Rest API Server

This is a rundown of everything I know about writing RESTful APIs.

## Table of Contents
1. <a href="#part1">Part 1:</a> What is an Express Server Middleware
2. <a href="#part2">Part 2:</a> Request Routing - Finding the Right Function
   1. <a href="#part2-part1">Method 1:</a> Request Type
   2. <a href="#part2-part2">Method 2:</a> Request Path
   3. <a href="#part2-part3">Method 3:</a> Routing to Multiple Files
3. <a href="#part3">Part 3:</a> Creating the Server
   1. <a href="#part3-part1">Section 1:</a> Installation of Packages
   2. <a href="#part3-part2">Section 2:</a> The Router
   3. <a href="#part3-part3">Section 3:</a> Server Files
   4. <a href="#part3-part4">Section 4:</a> Mongoose Schemas and Objects

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

