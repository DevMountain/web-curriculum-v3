//Arrays - Accessing and modifying.

const devMtnStaff = ['Andrew', 'Scott', 'Matt', 'Lucas', 'Cole', 'Rob', 'Aaron']

//Bracket Notation
//Console log the second and fourth items in the devMtnStaff array.

//.push, .pop, .shift, .unshift
//Remove the last item in the devMtnStaff array

// console.log(devMtnStaff)
//Add a new name to the end of the devMtnStaff array

//Remove the first item from the devMtnStaff array

// console.log(devMtnStaff)
//Add a new name to the beginning of the devMtnStaff array

//.slice, .splice
const magicNumbers = [7, 27, 87, 77, 777]
//Make a copy of the magicNumbers array.

//Make a copy of the magicNumbers excluding the first and last items

//Remove the number 87 from the magicNumbers array, then replace it with 67

//.length

//Find the length of the magicNumbers array and console log it.

//Using the length property, console log the last item in the magicNumbers array

//For loops

//Write a function called logFive, it should contain a for loop that will run five times and should console log the numbers 1 - 5.  Invoke it below.

//Modify the function below to include a for loop that will double all values in the array.
function doubleMeNumbers() {
  let numsArr = [2, 4, 6, 8, 10]

  return numsArr
}

// doubleMeNumbers()

const wordsArr = [
  `Oh`,
  `it's`,
  `a`,
  `beautiful`,
  `array`,
  `in`,
  `the`,
  `neighborhood.`,
]

//Modify the function below to take in an array of words.  The function should loop through the array and return a completed sentance.
function makeMeASentance() {
  let newStr = ''

  return newStr
}

//Decrementing for loop
//Modify the function below to include a decrementing for loop.  It should loop backwards through the array and console log each number, starting with 5 and ending with 1
function decrementLoop() {
  let decArr = [1, 2, 3, 4, 5]
}

// decrementLoop()

//Objects
let andrewObj = {
  name: 'Andrew',
  age: 27,
  favorites: {
    color: 'red',
    number: 38,
    people: ['Becca', 'Scott', 'Adam Driver'],
  },
  greeting: function() {
    return 'Hello there!'
  },
}

//Dot and bracket Notation
//Using dot notation console log the name from andrewObj

//Using bracket notation console log the age from andrewObj

//Console log the favorite color from andrewObj.

//Console log the first favorite person from andrewObj.

//Invoke the greeting method from andrewObj

//Ternary operator
//Write a function called isItEven that takes in a number and returns true if it is even and false if it isn't.  Write it first as an if statement and then as a ternary

//Callback functions

function callbackFn() {
  console.log('I am an inner function')
}

//Write a function called outerFn, this should take in a callback function.  Inside of outerFn invoke callbackFn.

function niceGreeting(name) {
  return `I hope you have a good day ${name}`
}

function normalGreeting(name) {
  return `I hope you have a normal day ${name}`
}

function meanGreeting(name) {
  return `I hope you have a bad day ${name}`
}

//Write a function called sayTheGreeting below that will take in a callback function and a name.  Invoke the callback function and pass it the name.
