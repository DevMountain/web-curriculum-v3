# Javascript 2

Lecture Slides: https://slides.com/dmweb/javascript-2

Afternoon Project: https://github.com/DevMountain/javascript-2-afternoon-project

1. [JavaScript 2 Lecture Notes](#JavaScript-2-Lecture-Notes)
1. [Additional Resources](#additional-resources)
1. [JavaScript 2 Mini Project](#JavaScript-2-Mini-Project)
1. [JavaScript 2 Afternoon Project](#JavaScript-2-Afternoon-Project)

## Student Learning Objectives

<details>
<summary>Arrays</summary>
<ul>
<li>Students can access values in an array using index</li>
<li>Students can edit an array using built in methods
<ul>
  <li>.push()</li>
  <li>.pop()</li>
  <li>.shift()</li>
  <li>.unshift()</li>
  <li>.slice()</li>
  <li>.splice()</li>
</ul>
</li>
<li>Students can use .length to check the length of an array</li>
</ul>
</details>

<details>
<summary>For loops</summary>
<ul>
<li>Students can use a for loop to repeat a block of code until the condition fails</li>
<li>Students can use for loops to iterate over an array</li>
</ul>
</details>

<details>
<summary>Objects</summary>
<ul>
<li>Students can access values in an object using dot notation</li>
<li>Students can access values in an object using bracket notation</li>
<li>Students can add a key/value pair to an object using dot notation</li>
<li>Students can add a key/value pair to an object using bracket notation</li>
<li>Students can create a method</li>
<li>Students can invoke a method</li>
<li>Students can create objects by writing a function that returns an object</li>
</ul>

</details>

<details>
<summary>Arrays of objects</summary>
<ul>
<li>Students can access a value within an object that is nested within an array</li>
<li>Students can invoke a method on an object that is nested within an array</li>
</ul>

</details>

<details>
<summary>The ternary operator</summary>
<ul>
<li>Students can use the ternary operator as an alternative to an if statement</li>
<li>Students can conditionally assign a value to a variable using the ternary operator</li>
<li>Students can test for multiple conditions using the ternary operator</li>
</ul>
</details>

<details>
<summary>Callbacks</summary>
<ul>
<li>Students can pass a function as an argument in to another function</li>
<li>Students can invoke a parameter whose value is a function</li>
<li>Students can write a higher order function</li>
</ul>
</details>

---

## Javascript 2 lecture notes

### Arrays, Objects, and Callbacks

---

In this lecture we start to dive into some more functionality of JavaScript. We will learn how to access and edit specific values nested within arrays and objects. We will also learn about methods, or functions nested within objects. Finally, we'll talk about callbacks, or functions that are passed as arguments to other functions. All of these are useful for storing and retrieving data in an organized way, a skill that will be essential to being a successful developer.

> Note: The topics covered in this lesson will act as the foundation for most of the more advanced subjects we will cover. Please make sure you are comfortable with all of these ideas and make sure to ask for help if you're not sure about something.

### Arrays

#### Accessing values in an array

---

Values inside of arrays are accessed primarily using **bracket notation**. This allows us to reference a specific index, or location within an array. To do this, we use the following format: `array[index]`

Arrays are zero indexed, meaning that the first index, or location, inside of an array is 0. For example:

```js
var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

> In this example `numArr[0]` is equal to 1 because 1 is the first item in the array. `numArr[5]` is equal to 4 because 4 is the 5th index on the array.
>
> This can be a confusing idea at first, but you will have plenty of practice accessing items in arrays.

You can also access values on an array by passing in a variable. This can be useful if you don't know exactly which index you will need to access at different times. For example:

```js
var namesArr = ['Andrew', 'Jonathan', 'Josh', 'Brandon']

var index = 0

console.log(namesArr[index])
//This will print 'Andrew' to the console.

//However, if we change the value of index later in the file,
//we can access another value.

index = 2
console.log(namesArr[index])
//Because the value of index is now 2, this will print 'Josh' to the console
```

#### Editing arrays

---

Arrays have built in functions to easily edit their contents. They will all allow you to edit arrays as the data you are dealing with changes.

All of these functions are invoked by chaining them onto an array variable in the following format: `array.function()`. Let's dive into them:

- `.push()` allows you to add an item to the end of an array.

  ```js
  var namesArr = ['Andrew', 'Jonathan', 'Josh']
  namesArr.push('Brandon')

  //namesArr now looks like this: ['Andrew', 'Jonathan', 'Josh', 'Brandon']
  ```

- `.pop()` removes the last item from an array.

  ```js
  var namesArr = ['Andrew', 'Jonathan', 'Josh']
  var finalName = namesArr.pop()

  //namesArr now looks like this: ['Andrew', 'Jonathan']
  //.pop can be assigned to a variable which will be the item removed.
  //In this example finalName is now equal to 'Josh'
  ```

- `.shift()` removes the first item from an array.

  ```js
  var namesArr = ['Andrew', 'Jonathan', 'Josh']
  var firstName = namesArr.shift()

  //namesArr now looks like this: ['Jonathan', 'Josh']
  //Similar to .pop, .shift can be assigned to a variable.
  //firstName will be equal to 'Andrew'
  ```

- `.unshift()` allows you to add an item to the front of an array.
  ```js
  var namesArr = ['Andrew', 'Jonathan', 'Josh']
  namesArr.push('Brandon')
  //namesArr now looks like this: ['Brandon', 'Andrew', 'Jonathan', 'Josh']
  ```
- `.slice()` makes a shallow copy of the array that it's chained on to. It takes two arguments, the starting and ending indices of the array you want to copy.
  ```js
  var namesArr = ['Andrew', 'Jonathan', 'Josh']
  var someNames = namesArr.slice(0, 1)
  //someNames now looks like this: ['Andrew', 'Jonathan']
  ```
  > Note: this does not change the original array.
- `.splice()` is the most dynamic of all for editing arrays. It takes 3 arguments:

  1.  The index at which we want to begin editing
  2.  How many items to remove from the array
  3.  Any values to replace at that index

  ```js
  var namesArr = ['Andrew', 'Jonathan', 'Josh', 'Brandon', 'Steve']
  var removedName = namesArr.splice(1, 1)
  //This will remove 1 name from the array at index 1 and assign it to the variable removedName
  //namesArr now looks like this: ['Andrew', 'Josh', 'Brandon', 'Steve']
  //removedName is equal to 'Jonathan'

  //We can continue to edit it, and even put new values in
  namesArr.splice(1, 0, 'Charles')
  //This will just insert charles at index 1.
  //namesArr will now look like this: ['Andrew', 'Charles', 'Josh', 'Brandon', 'Steve']
  ```

  > .splice() is incredibly dynamic and will be one of the most useful functions you can learn. It would be worth your time to play around with it in a repl or other project to increase your familiarity with what it can do.

#### .length

---

All arrays have a length property by default. As the name would suggest this returns the length of the array. Remember that while arrays are zero indexed, length is not. For example:

```js
var namesArr = ['Andrew', 'Jonathan', 'Josh']
console.log(namesArr.length)
//Prints 3 to the console
```

> Note: You do not invoke length, as it is not a function but a property.
>
> Trick: You can use .length to dynamically access the last index in an array. If we wanted the last item in our `namesArr` array but didn't know its index, we could reference it like this: `namesArr[namesArr.length - 1]`. This is a good trick to know.

### For loops

For loops are statements that allow us to repeat a given block of code until a given condition fails. A for loop is structured like this:

```js
for (let i = 0; i < 5; i++) {
  //Code to execute goes here
}
```

Let's break that down a little bit. When we initialize a for loop, we need to provide it 3 things separated by semicolons `;`

1. An iterator, usually represented by `i`. This is used to track how many times the for loop has run.
2. A condition. As long as this condition evaluates to `true`, the cycle will continue. As soon as it fails, the for loop will stop.
3. What we want to have happen at the completion of each loop. Most commonly we will just increment our iterator by saying `i++`.

Let's revisit the above example:

```js
for (let i = 0; i < 5; i++) {
  console.log(i)
}
```

> What this loop will end up doing is console logging `0 1 2 3 4` because as long as `i` is less than 5, we will console log `i`, incrementing it by 1 after each loop. This is obviously a very simple example, but for loops can be incredibly useful.

#### Using a for loop to iterate over an array

---

We are able to use for loops to dynamically look at each item in an array based on its index. Let's take a look at what this might look like:

```js
var numsArr = [1, 2, 3, 4, 5]
for (let i = 0; i < numsArr.length; i++) {
  numsArr[i] += 1
  //The += operator is the same as saying numsArr[i] = numsArr[i] + 1
}

//After the for loop runs, numsArr will look like this: [2,3,4,5,6]
```

> In this way we are able to loop over an array and dynamically access `numsArr` at index `i`, executing a block of code on each item in the array.
>
> NOTE: While for loops are useful for looping over arrays, they are not intrinsically tied together. The important thing to remember, is that a for loop executes a given code block until the provided condition evaluates to false.

### Objects

#### Accessing values on objects

---

Values on objects can be accessed using either dot or bracket notation. Let's look at both.

- Dot notation is the most common way to access properties on an object. To access a value on an object, you reference `object.key`. An example:

  ```js
  var person = {
    name: 'Andrew',
    age: 27,
    married: true,
    friends: ['Jonathan', 'Josh', 'Brandon'],
    favorites: {
      food: 'Jambalaya',
      car: 'Land Rover',
      animal: 'Duck',
    },
  }

  console.log(person.name)
  //Prints 'Andrew' to the console

  //If you have objects nested inside of objects, you can chain dot notation together
  console.log(person.favorites.car)
  //Prints 'Land Rover' to the console
  ```

- Bracket notation is useful when you need to dynamically access keys on an object. To access a value on an object you reference `object[key]`. For example:

  ```js
  var person = {
    name: 'Andrew',
    age: 27,
    married: true,
    friends: ['Jonathan', 'Josh', 'Brandon'],
    favorites: {
      food: 'Jambalaya',
      car: 'Land Rover',
      animal: 'Duck',
    },
  }

  console.log(person['name'])
  //Prints 'Andrew' to the console

  var myKey = 'favorites'
  console.log(person[myKey]['animal'])
  //Prints 'Duck' to the console
  ```

  > NOTE: When using bracket notation, you can either provide a string of the key name, or a variable.

#### Adding keys to an object

---

New key/value pairs can be added to existing objects using either dot or bracket notation.

- Using dot notation:

  ```js
  var person = {
    name: 'Andrew',
    age: 27,
    married: true,
    friends: ['Jonathan', 'Josh', 'Brandon'],
    favorites: {
      food: 'Jambalaya',
      car: 'Land Rover',
      animal: 'Duck',
    },
  }

  person.hasPets = false
  //This will add a key of hasPets to the person object and give it a value of false.

  //This works with nested objects as well.
  person.favorites.place = 'St. Petersburg'
  //This will add a place property to the nested favorites object and give it the value of 'St. Petersburg'

  //Don't forget what we learned above,
  //if there are arrays as properties on and object, the functions we learned apply.

  person.friends.push('Charles')
  //This will push the value 'Charles' onto the friends array on the person object.
  //It is incredibly common to see data nested in this fashion, so you should become comfortable with seeing it
  ```

- Using bracket notation:

  ```js
  //This code will behave identically to the code above
  var person = {
    name: 'Andrew',
    age: 27,
    married: true,
    friends: ['Jonathan', 'Josh', 'Brandon'],
    favorites: {
      food: 'Jambalaya',
      car: 'Land Rover',
      animal: 'Duck',
    },
  }

  person['hasPets'] = false
  //This will add a key of hasPets to the person object and give it a value of false.

  //This works with nested objects as well.
  person['favorites'].place = 'St. Petersburg'
  //This will add a place property to the nested favorites object and give it the value of 'St. Petersburg'
  //Notice you can combine bracket and dot notation

  var myKey = 'friends'

  person[myKey].push('Charles')
  //This will push the value 'Charles' onto the friends array on the person object.
  ```

  #### Methods

  Methods are functions that live on objects. We can create a method using a number of different syntax but the one that will look most familiar is using the `function` keyword. For example:

  ```js
  const person = {
    name: 'Andrew',
    age: 27,
    friends: ['Jonathan', 'Josh', 'Brandon'],
    sayHi: function() {
      console.log('Hello, ' + person.name)
    },
    listFriends: function() {
      console.log(person.friends)
    },
  }
  ```

  > In this example, we have attached two methods to our person object: `sayHi` and `listFriends`. We invoke methods by referencing their key using either dot or bracket notation, and using parentheses `()` to indicate we want to invoke the function. In this case, we could invoke `sayHi` by typing `person.sayHi()` which would print 'Hello, Andrew' to the console.
  >
  > All JavaScript data types have methods attached to them. It will be worth your time to study what some of them are. We have already learned some examples today: `.push()`, `.pop()`, etc. are all methods!

#### Using functions to create objects

---

It can be really useful to use functions to create objects that we can then reference later in our code. Let's expand upon our example of the `person` object but make it a bit more dynamic:

```js
function makePeople(name, age, friends) {
  return {
    name: name,
    age: age,
    friends: friends,
    sayHi: function() {
      console.log('Hello ' + name)
    },
    listFriends: function() {
      console.log(friends)
    },
  }
}

//This function will allow us to create many different person objects,
//each specific to each individual.  Let's see what this looks like:

var andrew = makePeople('Andrew', 27, ['Jonathan', 'Josh', 'Brandon'])
var jonathan = makePeople('Jonathan', 27, ['Andrew', 'Steve'])
//This will give us an object customized to me.
//This works because our return value of the function is the new person object
//When we use a function to create a new object, it has access to all of the properties and methods on that object.

andrew.sayHi()
//This will print 'Hello Andrew' to the console
jonathan.sayHi()
//This will print 'Hello Jonathan' to the console
```

### Arrays of objects

#### Accessing properties on arrays of objects

---

It is extremely common that you will see data organized as arrays of objects. Let's look at an example:

```js
var people = [
  {
    name: 'Andrew',
    age: 27,
    friends: ['Jonathan', 'Josh', 'Brandon'],
    sayHi: function() {
      console.log('Hello, ' + this.name)
    },
  },
  {
    name: 'Jonathan',
    age: 27,
    friends: ['Andrew', 'Josh', 'Steve'],
    sayHi: function() {
      console.log('Hello, ' + this.name)
    },
  },
  {
    name: 'Josh',
    age: 28,
    friends: ['Andrew', 'Jonathan', 'Kyle'],
    sayHi: function() {
      console.log('Hello, ' + this.name)
    },
  },
]

//This is an extremely common data structure that you should get used to reading.
//Take a minute and acquaint yourself with how this array is put together.
```

> Note: For now, don't worry about the `this` in the `sayHi` function. We will dive into what that means later. For now, just understand that it is telling the function to reference the name property on the same object it is attached to.

Accessing specific properties inside of an array of objects works exactly how you would expect it to:

```js
var people = [
  {
    name: 'Andrew',
    age: 27,
    friends: ['Jonathan', 'Josh', 'Brandon'],
    sayHi: function() {
      console.log('Hello, ' + this.name)
    },
  },
  {
    name: 'Jonathan',
    age: 27,
    friends: ['Andrew', 'Josh', 'Steve'],
    sayHi: function() {
      console.log('Hello, ' + this.name)
    },
  },
  {
    name: 'Josh',
    age: 28,
    friends: ['Andrew', 'Jonathan', 'Kyle'],
    sayHi: function() {
      console.log('Hello, ' + this.name)
    },
  },
]

console.log(people[0].name)
//This will print 'Andrew' to the console.

//We can also invoke methods this way
people[1].sayHi()
//Prints 'Hello, Jonathan' to the console.
```

> Note: Notice that all of the objects in the people array have the same structure. It is important to maintain this when creating arrays of objects so that we can dynamically reference each property on each object within the array.

### The ternary operator

#### As an alternative to if statements

---

The ternary operator can be used as an alternative to if...else statements to make our code more concise. We format a ternary in the following way:

`condition ? what to do if true : what to do if false`

Let's look at an example:

```js
//Regular if...else statement
if (2 === 2) {
  console.log('Math still works')
} else {
  console.log('Math is broken')
}

//Now let's replace it with a ternary

2 === 2 ? console.log('Math still works') : console.log('Math is broken')
```

> These two bits of code will execute identically. The ternary syntax can be confusing at first, but practice will make it easier to understand.

#### Using ternaries to assign values to variables

---

Let's look at something a bit more dynamic:

```js
var num1 = 10
var num2 = 5
var statement

num1 > num2
  ? (statement = 'First number is more')
  : (statement = 'Second number is more')

console.log(statement)
//Prints 'First number is more' to the console
```

> Using this we can change the values assigned to `num1` and `num2` which will in turn effect the value of `statement`

#### Nesting ternaries

---

While a ternary only allows for two outcomes, we can provide ternaries as one or both of those outcomes. This is called nesting ternaries. Let's look at an example:

```js
var num = 15

num < 15
  ? console.log('Less than 15')
  : num === 15
  ? console.log('It is 15')
  : console.log('Greater than 15')
```

> Depending on the value of `num` something different will be printed to the console. Let's walk through it in plain english:
>
> 1.  **IF** `num` is less than 15, `'Less than 15'` will be printed to the console
> 2.  **ELSE IF** `num` is equal to 15, `'It is 15'` will be printed to the console
> 3.  **ELSE** `'Greater than 15'` will be printed to the console.
>
> This can obviously get very messy very quickly so it is inadvisable to use ternaries where there are a large number of possible outcomes. As an alternative to large if...else statement and nested ternaries, it is good to look into the `switch` statement.

### Callbacks

A callback is a function that is passed as an argument to another function. This is a very common pattern that you should become familiar with. Let's look at an example:

```js
function callback() {
  console.log('I am a callback')
}
//Our initial function

function cbRunner(cb) {
  //Notice, cbRunner takes in a callback function as its parameter
  //it then invokes that function
  cb()
}

cbRunner(callback)
//Prints 'I am a callback' to the console
```

> This is obviously a very primitive example but does a good job at illustrating the callback pattern. Let's look at an example that could actually be used:

```js
function greeting(name){
  return 'Hello, ' + name
}

function consoleLogResult(cb){
  console.log(cb())
}

consoleLogResult(() => return greeting('Andrew'))
//Prints 'Hello, Andrew' to the console
```

> This example is a little more complex and uses some syntax you may not yet be familiar with, so let's break it down. There are several elements:
>
> 1.  Our `greeting` function takes a name and returns a greeting specific for that person
> 2.  Our `consoleLogResult` function takes a callback and prints its result to the console
> 3.  Because we need to pass an argument to our callback function (`greeting`), we need to invoke it as part of the argument passed to `consoleLogResult`. Here we are using the arrow function syntax to do so.
>
> Functions such as `consoleLogResult` whose purpose is to execute their callback functions and do something with their value are known as _higher order functions_. You will learn shortly about many built in higher order functions so it's good to know what that means.

# Additional Resources

## General

- [javascript.info](https://javascript.info) - Matias' hands down, personal favorite resource for learning all things JavaScript, from 0 to hero.
- [Understand JavaScript Callback Functions and Use Them](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/) - A more detailed breakdown of callback functions and how they work. A great resource if you want to review that further.
- [Array - JavaScript \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) - More detailed information on the array data type and the methods built in to it. We will go over many of these in the next few days but it's a good idea to start to acquaint yourself with them.
- [Object - JavaScript \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) - More detailed information on the object data type.
- [Understand The JavaScript Ternary Operator like the ABCs ― Scotch.io](https://scotch.io/tutorials/understand-the-javascript-ternary-operator-like-abc) - More information on ternaries and how they work.
- [Codewars](https://www.codewars.com/dashboard) - Great resource to practice problem solving and acquaint yourself with basic JavaScript concepts.
- [Repl.it](https://repl.it/~) - Code sandbox to practice JavaScript or any other language.

## Videos

- [1.2 JavaScript II on Vimeo](https://vimeo.com/246522547/c7891ae0b0)
- [Traversy Media Javascript Intro](https://www.youtube.com/watch?v=hdI2bqOjy3c&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=2&t=0s)
  > Although this video is long, watching it will greatly deepen your understanding of the discussed topics and prepare you for the more advanced topics we will be covering very soon.

# JavaScript 2 Mini Project

Embedded in Unit 1.4 at https://lms.devmountain.com/courses/70

# JavaScript 2 Afternoon Project

https://github.com/DevMountain/javascript-2-afternoon-project
