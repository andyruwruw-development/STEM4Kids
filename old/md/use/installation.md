# Installation and Setup

There's a few things you have to get running before you can view and test the website.

You need to install *Vue CLI* onto your machine. I'm pretty sure you can run this anywhere in command line.

```
npm install -g @vue/cli
```

Check with -
```
vue --version
```

Next you'll need *npm* installed.

If you have a Windows machine, you might have to download it [online](https://nodejs.org/en/).

Otherwise just use -
```
npm install stable
```

You can check if it's there with -
```
npm -v
```

Next you'll need to install nessisary packages for the server.

Go into the server folder at the top level with command line and run the following command.
```
npm install express mongoose bcrypt jsonwebtoken cookie-parser
```

Next, for each folder: *parents, student, admin,* you'll need to install some packages as well. Just go into each folder with command line and run -

```
npm install axios moment
```

Now that that's all set up, if you go into any of those three folders for each of our websites and run -
```
npm run serve
```
Vue will automatically host the website usually at [http://localhost:8080/](http://localhost:8080/)

When making changes, Vue automatically updates the server with the changes.

PRETTY NIFTY.

As a final touch, you have to go into the *server* folder in a separate window of command line and run -
```
node stem4kids.js
```
To start the server. Our website will get mad if it can't connect to the server for data.

Pretty sure that's it. Honestly hoping I didn't miss something. No clue how I deal with this mess.