//Javascript 5

//Default
//Console log the this keyword to show the default context

//Implicit
// INVOKER OBJECT
// "this" refers to the object where the method is located (the parent object)

function introduceSelf() {
  if (this !== window) {
    console.log('this:', this)
  } else {
    console.log('this equals the window')
  }
}

// introduceSelf()

let user = {
  name: 'name',
  age: 24,
  favoriteColor: 'blue',
  introduceSelf: introduceSelf,
  subUser: {
    name: 'SUBUSER',
    age: 22,
    favoriteColor: 'red',
    introduceSelf: introduceSelf,
  },
}

// user.introduceSelf()

// user.subUser.introduceSelf()

const wallE = {
  name: 'Wall-E',
  age: 1000,
  //Write a sayHello method that will return the name of the robot.  Invoke it below
}

wallE.sayHello()

//Explicit

const salesTaxRates = {
  utah: 7.18,
  texas: 8.19,
  maine: 5.5,
  idaho: 6.03,
}

const shoes = {
  name: 'Yeezys',
  price: 2500,
}

const shirt = {
  name: 'J. Crew Flannel',
  price: 45,
}

const hat = {
  name: 'Stylish Snapback',
  price: 25,
}

//Write a function called calculatePrice that will use the name and price of an explicitly defined context and one of the tax rates from the salesTaxRates object to calculate the total price.  Do it once with each call, apply, and bind.

//Arrow functions

let contextObj = {
  regularMethod: function() {
    console.log(this === window ? 'this is the window' : this)
  },

  arrowMethod: () => {
    console.log(this === window ? 'this is the window' : this)
  },
}

//Constructor functions

//Create a constructor function called Robot.  It should accept parameters for name, height, and kindnessLevel.  You should also add a method called receive kindness which should accept a number, increse the kindness level by that amount and then return the updated object.  Use your constructor function to create a couple of robots.

//Prototype methods

//Create another constructor called Car.  It should take in make, model, and year parameters.  Create a prototype for the Car constructor called honk.  This function should return a string of 'Make Model says HONK!' filling in the values of make and model with the surrounding context.
