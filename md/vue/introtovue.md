# Vue Front-End

Vue is my favorite.

It's just like React in purpose, so I am told.

The website says something like 

`Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.`

Essentially, instead of using code to change the DOM like -
```
let element = document.getElementById("tutorial-title");
element.innerHTML = "This is a Pain";
```
Vue lets you dynamically change elements in the DOM by binding them to variables.

NO MORE *setInterval()*

NO MORE *getElementByID()*

IT'S AMAZING.

If you just want to test it out, you'll have to import Vue script from your HTML before your script link or element.
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.7/vue.js" integrity="sha256-g+Q8DFAmG5+eyRPSydX0LY4TfjsL11XSDrIGerbbEdA=" crossorigin="anonymous"></script>
```

Here's what your JavaScript will look like.

```
var app = new Vue({
    el: '#app',
    data:
    {

    },
    methods: 
    {

    },
    computed: 
    {

    },
    created() 
    {

    }
```

Vue is just a giant object.

I'm just going to break down the different sections.

# el: '#app',

In your DOM, you create a *div* with *app* as the ID.

This Vue object will find, and bind to it.

# data:

We place all of our variables here.

These are the variables we'll be able to bind to elements in the DOM.

# methods:

Here's a place for all of our funcitons / methods.

Unlike usual JavaScript, they're just created like so.

```
methods: 
{
    toggleMenu()
    {
        this.menu = !this.menu;
    },
    logout()
    {
        this.user = null;
    },
}
```
Variables within *data* can only be accessed using *this.* before their name.

# computed

These are written like methods, but always return a value.

Say we would like to bind an element on the DOM to display the percent completed in a task, but the percent as ease of coding is presented in a decimal format.

We can created a computed property for it.

```
computed: 
{
    percentageComplete()
    {
        return this.progress * 100 + "%";
    }
}
```

We can now directly bind the element in the DOM to the computed property *percentageComplete* and it will always display the percent format of *this.progress*.

Computed properties are special in they are constantly checking if their *dependancies* or variables they use to build the return result (in this case *this.progress*) change.

If *percentageComplete* senses a change in *this.progress*, it will automatically update itself using the new value of *this.progress* and likewise update any items on the DOM bound to it's return result.

# created()

Just a function run at the creation of the Vue object, basically the constructor if you choose to use it that way.

I usually use it to check if someone's logged in, and throw them to the login page if they aren't.

# Now the HELLA COOL SHIT

Now what you can do with HTML to work with the Vue Object.

You don't need to use *this.* for anything in the HTML when binding to Vue variables.

You also treat computed properties like variables.

# **HERE'S THE COOL STUFF**

## **TEXT BINDING**
```
<h1>Progress: {{percentageComplete}}</h1>
```
*{{percentageComplete}}* will automatically be replaced with the value of the variable / computed property *percentageComplete* and updated automatically if changed.

## **V-IF**

```
<div v-if="menu"></div>
```
The *div* will only exist if *menu* is true.

You can also use boolean statements instead of single variables.

```
<h1 v-if="attempts >= 5"> You Lose </h1>
```

## **V-FOR**
```
<div v-for="task in todolist">
    <h1>{{task.text}}</h1>
    <h1>{{task.date}}</h1>
</div>
```
If *todolist* is an array of objects, Vue will duplicate this *div* for each item in the array and place them in order.

V-for is essentially an enhanced for loop, in which each item in *todolist* is placed in *task*.

So if you want to display the *.text* data of an object in the array, you just depend on the enhanced loop and use *task.text*.

## **V-BIND:CLASS**

Honestly an amazing tool.

You can have CSS Classes dynamically bound to elements based on boolean statements from your JavaScript.

So - 
```
<button v-bind:class="{grey-out : tooManyAttempts}" id="login"> Login </button>
```
This is essentially a button that will have the CSS class *grey-out* bound to if depending on whether the variable *tooManyAttempts* is true or false.

You can also create boolean statements instead of single variables - such as -
```
<button v-bind:class="{grey-out : attempts >= 5}" id="login"> Login </button>
```

## **@CLICK**
Vue makes it easy to run functions based on events.
```
<button @click="startGame"> Start </button>
```
In this case *startGame* is a method / function within the Vue object.

You can also pass parameters if you add the parenthesis.

```
<button @click="startGame("easy")"> Start </button>
```

You can also just put in straight up statements.
```
<button @click="start = true; menu = false;"> Start </button>
```
Kinda gross though.

## **@MOUSEOVER**

Same deal as *@click*, you can run functions when the mouse hovers over an element.

I've used this play hover sound effects as players hover over buttons.

```
<button @mouseover="playSound("hover")"> Start </button>
```
