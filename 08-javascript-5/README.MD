# Javascript 5

Lecture Slides: https://slides.com/dmweb/javascript-5

Afternoon Project (make sure to checkout to branch `web-dev-v3`): https://github.com/DevMountain/javascript-4-afternoon-project/tree/web-dev-v3

# Lesson Sections

1. [JavaScript 5 Lecture Notes](#JavaScript-5-Lecture-Notes)
2. [Additional Resources](#additional-resources)
3. [JavaScript 5 Mini Project](#JavaScript-5-Mini-Project)
4. [JavaScript 5 Afternoon Project](#JavaScript-5-Afternoon-Project)

## Student Learning Objectives

<details>
    <summary>Context</summary>
    <ul>
        <li>Student can use implicit context to invoke a function with the correct context</li>
        <li>Student understands default context</li>
        <li>Student can use the `call` method to explicity give context</li>
        <li>Student can use the `apply` method to explicity give context</li>
        <li>Student understands the difference between `call` and `apply`</li>
        <li>Student can use the `new` keyword to give context (this should be taught after classes)</li>
    </ul>
</details>

<details>
    <summary>Arrow Functions</summary>
    <ul>
        <li>Student can build and use an arrow function with one parameter (no parentheses)</li>
        <li>Student can build and use an arrow function with no parameters</li>
        <li>Student can build and use an arrow function with multiple parameters</li>
        <li>Student can build and use an arrow function on one line of code with no curly brackets or return</li>
        <li>Student understands that arrow function do not have their own `this` keyword</li>
        <li>Student can use the `this` keyword in an arrow function to defer the context of `this` to the enclosing scope</li>
    </ul>
</details>

<details>
    <summary>Constructor Functions</summary>
    <ul>
        <li>Student can create an object using a constructor function</li>
        <li>Student can add properties to an object using the `this` keyword within the constructor function</li>
        <li>Student can use `new` operator to invoke constructor functions</li>
        <li>Student can create public/private variables within a constructor function</li>
    </ul>
</details>

<details>
    <summary>Prototypes</summary>
    <ul>
        <li>Student can create a prototype method for a constructor function</li>
        <li>Student understands why prototype methods use less memory than adding the method to the new objects created</li>
    </ul>
</details>

---

## JavaScript 5 Lecture Notes

<details open>
    <summary>Lecture Introduction</summary>

In this lecture we introduce arrow functions, a way to write functions released during in ES6. We will also introduce constructor functions, which are functions used to create objects in JavaScript. We will also discuss context in JavaScript, and the meaning of the `this` keyword.

</details>

### Context

Outside of Javascript, context means the surrounding information that gives a better understanding and more clarity to a situation. This also applies the same way to Javascript.

Since objects are the building blocks of Javascript, there is a special object we can use to access the context of our code that is being executed. The object is referred to as `this`.

#### This

The value of `this` is decided upon how our code is being executed.

#### Default Context

The default value of `this` refers to the global object. In a browser environment, `this` would be the `window` object.

```javascript
const myCar = 'Tesla'

function displayMyCar() {
  // reference the global object with `this`
  alert(this.myCar)
}

displayMyCar()
```

#### Implicit Context

Implicit Context is where the value of `this` is the parent object of where the function exists. In the example above, the function exists in the global object, so the context of the `displayMyCar` function would be referring to the window object. However, the default value of the context will be implicitly changed based on where the function exists. Meaning, if we have a function inside of an object, the default context for that function would be the object it lives in.

> It's easy to think that the value of `this` will be whatever is left of the `.`

```javascript
const newCar = {
  make: 'Tesla',
  model: 'Model X',
  year: 2019,
  showOff: function() {
    alert(`I drive a ${this.make}`)
  },
}

newCar.showOff()
```

Notice how `showOff` lives on the `newCar` object so the context of the showOff function will be newCar.

#### Explicit Context

Explicit Context is where we explicitly tell a function what it's context is. We can do that by using the three different built in methods `call`, `apply`, and `bind`.

#### Call

`.call()` is a built in method that we can use on Function objects. This will allow us to pass in the object as an argument that we want the context of `this` to refer to. The following arguments will be additional values that we can use. These will need to be comma seperated.

```javascript
// people object with a method
const people = {
    sayName: function(car, year){
        alert(`My name is ${this.firstName} ${this.lastName} and I drive a ${car} made in ${year}`);
    };
};

// two new person objects
const personOne = {
    firstName: 'Tayte',
    lastName: 'Stokes'
};

const personTwo = {
    firstName: 'Matt',
    lastName: 'Bodily'
};

// call the people method sayName on two different objects
people.sayName.call(personeOne, 'tesla', 2020);
people.sayName.call(personTwo, 'masaratti', 2020);
```

#### Apply

`.apply()` works exactly like how call works, with the only difference being that apply only takes in two arguments so we will pass in new arguments as an array not comma seperated values.

```javascript
// people object with a method
const people = {
    sayName: function(car, year){
        alert(`My name is ${this.firstName} ${this.lastName} and I drive a ${car} made in ${year}`);
    };
};

// two new person objects
const personOne = {
    firstName: 'Tayte',
    lastName: 'Stokes'
};

const personTwo = {
    firstName: 'Matt',
    lastName: 'Bodily'
};

// apply the people method sayName on two different objects
people.sayName.apply(personeOne, ['tesla', 2020]);
people.sayName.apply(personTwo, ['masaratti', 2020]);
```

> Note: It's easy to remember the argument rule like so; Apply starts with an 'a' and so does array. Call starts with a 'c' and so does comma ;)

#### Bind

`.bind()` works very similar to call except it defers the function invocation, meaning it will return an entirely new function.

```javascript
// sayName function
function(car, year){
    alert(`My name is ${this.firstName} ${this.lastName} and I drive a ${car} made in ${year}`);
};

// two new person objects
const personOne = {
    firstName: 'Tayte',
    lastName: 'Stokes',
};

const personTwo = {
    firstName: 'Matt',
    lastName: 'Bodily'
};

// create new functions using the sayName functionality and the object to bind it to
const personOneBrag = sayName.bind(personOne, 'Tesla', 2020);
const personTwoBrag = sayName.bind(personTwo, 'Mazaratti', 2020);

// now we need to manually invoke the newly bound functions
personOneBrag();
personTwoBrag();
```

### Constructor Functions and Protoype Methods

A `constructor function` is special function we can use in javascript to create a new object. It's easy to think that a `constructor function` is a blueprint to the object we want to build.

We will create a `constructor function` just like any other function, except this time it will start with a capital letter.

```js
function Car() {}
```

Inside of the constructor function, we use the `this` keyword to refer to the object the function will build. The instance will automatically be returned for us so we do not need to declare the `return` statement.

```js
function Car() {
  // this ==> {} IMPLIED
  this.make = 'Tesla'
  this.model = 'Model X'
  // return this IMPLIED
}
```

We can now create a new `instance` or a new object from the constructor function using the `new` keyword.

```js
const myCar = new Car()
console.log(myCar) // => {make: 'Tesla', model: 'Model X'}
```

The `new` keyword will set the context for our constructor. It is what creates the object that we refer to using the `this` keyword.

We can also use `parameters` in our constructor functions to accept user input and use dynamic data.

```js
// same constructor as before, but this time we recieve arguments
function Car(make, model) {
  this.make = make
  this.model = model
}
```

we can now call upon that constructor function to create a new instance and pass in data to that instance.

```js
const myCar = Car('Tesla', 'Model X')
```

Now let's add some methods to our contructor function.

```js
function Car(make, model) {
  this.make = make
  this.model = model

  // method to honk
  this.honk = function() {
    alert('Beep Beep')
  }
}
```

Now let's create some instances from our new constructor that has a method on it.

```js
var subaru = new Car('Subaru', 'WRX')
var civic = new Car('Honda', 'Civic')
var tesla = new Car('Tesla', 'Model S')
```

We can now call the `honk` method on all of the car instances that we have created.

```js
subaru.honk()
civic.honk()
tesla.honk()
```

If we take a closer look at this, by console logging the instance objects, you can see that we are declaring a new `honk` function everytime we create a new instance from the Car constructor. This could be very impactful and not memory efficient for our applications when we create hundreds of instances from that constructor.

So how can we go about having this method available to us for every instance, but only declare it once? This is where `prototype functions` save the day!

Instead of putting the `honk` method on every instance that gets created, we can add the method as a `prototype method` to the `Car` constructor. This will allow all car objects made from the Car constructor to have access to it, while only having to declare it once.

We will directly target the `prototype` property that exists on the `Car` function (object) and add the method onto it.

```js
Car.prototype.honk = function() {
  alert(`Beep Beep, I am a ${this.make}!`)
}

// Now we can create our instances
var subaru = new Car('Subaru', 'WRX')
var civic = new Car('Honda', 'Civic')
var tesla = new Car('Tesla', 'Model S')

// We can still use the prototype method on every instance
subaru.honk()
civic.honk()
tesla.honk()

// notice how the `honk` method does not show up on the instance when we console log it now
console.log(subaru)
console.log(civic)
console.log(tesla)
```

After console logging the instances, we can see that the `honk` method no longer exists on that object. So how does the object have access to that prototype method?

This is where `prototypical inheritance` comes into play.

### Prototypical Inheritance

In javascript all functions are really just objects behind the scenes. This means that functions can have properties. Every function has a property called `prototype`, which is also another object that will hold methods inside of it.

When we invoke a function that exists on an object, let's call that object `car`. The browser will check the `car` object for the function, if it's not in that object, the browser will look into the `prototype` object that is a property of the `car` object. It will go up the chain of objects and their prototype properties until it feither finds the function or it doesn't find it. If it doesn't find it, that means the function is undefined.

A constructor function can inherit the prototype from another constructor function. This can be complicated and can get confusing, but it's good to be introduced to it.

```js
function Car(make, model) {
  this.make = make
  this.model = model
}

Car.prototype.honk = function() {
  console.log(`The ${this.make} goes Beep Beep!`)
}

const myCar = new Car('Tesla', 'Model X')

// We can get the prototype object from an instance using the Object.getPrototypeOf method
console.log(Object.getPrototypeOf(myCar)) // Car {honk: [function]}
```

Now let's create a `SuperCar` constructor that will inherit from the `Car` constructor and adds a v12 engine to it.

There are three steps we will need to follow to make this happen.

1. We will pass the current object through the `Car` constructor function to gain it's functionality. Then we will add the `engine` property that is only available to super cars.

2. We will then set the constructor functions protoype object to a new object created from the prototype of the object we want to inherit from. In this case it will be the `Car` prototype.

3. We will now set the constructor function appropriately for the clarity on which the constructor function is responsible for making the object.

```js
// Step One:
function SuperCar(make, model) {
  // pass the current object in with the arguments we recieved to gain the Car functionality
  Car.call(this, make, model)
  // then set the engine property to v12
  this.engine = 'v12'
}

// Step Two:
SuperCar.prototype = Object.create(Car.prototype)
// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

// Step Three:
SuperCar.prototype.constructor = SuperCar
```

> The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

Now let's use our SuperCar constructor that is inehriting the prototype properties from another constructor function.

```js
// Create a new instance of the supercar
const mySuperCar = new SuperCar('Tesla', 'Model Super')
// We can now use the prototype methods that we have inherited from Car
mySuperCar.honk()
// We can add more protype methods to the supercar
SuperCar.prototype.rev = function() {
  console.log(`You have revved the ${this.engine} engine`)
}
// Then we can use the prototype method
mySuperCar.rev()
// Now if we create a prototype method on Car, our SuperCar will also ineherit it
Car.prototype.oilChange = function() {
  console.log(`You have changed the oil for your ${this.make} ${this.model}`)
}
// We can now use that method
mySuperCar.oilChange()
```

### Arrow Functions

Arrow functions are the newest way in Javascript to create a function.

```javascript
// This function:
function notArrowFunction(str) {
  return str
}

// is the same as this arrow function:
let arrowFunction1 = str => {
  return str
}

// which is also the same as this arrow function:
let arrowFunction2 = str => {
  return str
}

// which is also the same as this arrow function:
let arrowFunction3 = str => str
```

Notice how we now use the `=>` rather than the `function` keyword. We also do not have to use parenthesis if we only are expecting a single argument. This is awesome because it allows for really short syntax that's easy to read.

Arrow function also work extremely well as a `callback` function.

```javascript
const myArray = [1, 2, 3, 4, 5]

// keep note of the anonymous arrow function being used as the callback
const evensArray = myArray.filter(element => {
  return element % 2 === 0
})
```

# Additional Resources

## Context

### Video Resource

- [LearnCode.academy - Context Tutorial](https://www.youtube.com/watch?v=fjJoX9F_F5g) - video that is easy to follow along with that really breaks it down well

#### Other Links

- [javascript.info - Context](https://javascript.info/object-methods) - using 'this' with objects and their methods

- [MDN - this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) -'this' keyword documentation

### Arrow Functions

#### Video Resource

- [freeCodeCamp.org - Arrow Functions](https://www.youtube.com/watch?v=22fyYvxz-do) - good overview and explanation of arrow functions

#### Other Links

- [javascript.info - Arrow Functions Basics](https://javascript.info/arrow-functions-basics) - this and the one below go about as in-depth as possible.

- [javascript.info - Arrow Functions Advanced](https://javascript.info/arrow-functions) - this one is more advanced than the basics one above

- [MDN - Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) - MDN docs on arrow functions - great for syntax examples and links to other topics related to arrow functions

## Constructor Functions

### Video Resource

- [Avelx - Contructor Function Tutorial](https://www.youtube.com/watch?v=lP_7H467pA8) - very easy to follow, albeit slow video on constructor functions

### Other Resources

- [javascript.info - Constructor Functions](https://javascript.info/constructor-new) - best resource I've found on constructor functions that doesn't go too deep into classes

- [MDN - Constructor Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) - this might make more sense after reading the Object_prototypes article from MDN below but is still a good reference on constructors

## Prototypes

### Video Resource

- [Tyler McGinnis - Prototypes](https://www.youtube.com/watch?v=XskMWBXNbp0) - example-heavy video on prototypes. @9:44 it gives a really good definition of prototypes

### Other Resources

- [MDN - Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes) - more of an article than a syntax heavy reference, this talks about what prototypes are and why they're used

- [Geeks for Geeks - Prototypes](https://www.geeksforgeeks.org/prototype-in-javascript/) - this article has good graphics to help understanding

# JavaScript 5 Mini Project

Embedded in Unit 2.3 at https://lms.devmountain.com/courses/70

# JavaScript 5 Afternoon Project

https://github.com/DevMountain/javascript-4-afternoon-project/tree/web-dev-v3
