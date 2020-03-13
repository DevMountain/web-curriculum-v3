//Arrow Functions

//Rewrite the following functions as arrow functions
function sum(num1, num2) {
  return num1 + num2
}

function sayMyName(name) {
  return `Your name is ${name}`
}

//Rewrite the following function as an arrow function on a single line.
function favoriteSong(song) {
  return `My favorite song is ${song}`
}

//Higher Order Methods
// .forEach

let numArr = [1, 2, 3, 4, 5]
const stringArr = ['Andrew', 'Banana', 'Tesla', 'Carbon Fiber']

//This is a basic for loop that console logs numbers 1 - 5.
for (let i = 0; i < numArr.length; i++) {
  // console.log(numArr[i])
}

//Write a function using .forEach that accomplishes the same thing.

//Below is a function we wrote yesterday for building a sentence from an array of words.  Modify it to work with a .forEach method.
const wordsArr = [`Won't`, `you`, `be`, `my`, `neighbor`]

function makeMeASentence(arr) {
  let newStr = ''
  for (let i = 0; i < arr.length; i++) {
    newStr = `${newStr} ${arr[i]}`
  }

  return newStr
}

makeMeASentence(wordsArr)

// .map

const friends = ['Jonathan', 'Josh', 'Brandon']
//Here is an array of friends.  Write a function called coolFriends that takes in an array of names and returns a new array stating that they are cool.  For example, a friend named Charles would be returned as 'Charles is cool'.  Use .map

const ages = [22, 25, 27, 30]
//Write a function called happyBirthday that will take in an array of ages.  This function should return a new array of all of the ages incremented by one.  Use .map

const dogs = [
  {
    breed: 'Poodle',
    goodBoy: true,
    name: 'Timmy',
  },
  {
    breed: 'Lab',
    goodBoy: true,
    name: 'Sandwich',
  },
  {
    breed: 'Yorkie',
    goodBoy: false,
    name: 'Josh',
  },
]

//Above is an array containing objects, each describing a dog.  Write a function called goodBoys which will take in an array of dog objects.  The function should return a new array containing a sentence describing each dog and whether they are a good boy or not.

// .filter

const nums = [1, 2, 3, 4, 5, 6]
//Using .filter, create a new array containing only the even numbers

const turtles = ['snapping', 'leatherback', 'ninja', 'green', 'sea']
//Using .filter, create a new array containing only the turtles that start with s.

//Using .filter and the dogs array above, create a new array containing only the good boys.

// .reduce

const moreNums = [12, 22, 14, 23, 20, 1001]
//Write a function called sumNums that takes in an array of numbers.  Use .reduce to return the sum of all the numbers.

const friendsArr = [
  {
    name: 'Jonathan',
    age: 27,
  },
  {
    name: 'Josh',
    age: 28,
  },
  {
    name: 'Brandon',
    age: 35,
  },
]
//Above is an array of friends.  Use .reduce to create a single string listing all of the friends.  The final result should look like: 'The friends are Jonathan, Josh, and Brandon'

// ARROW FUNCTIONS IN ARRAY METHODS

const ages2 = [22, 23, 45, 26, 87]

const birthday2 = ages.map(element => ++element)

//OBJECTS

//delete

const andrew = {
  name: 'Andrew',
  age: 27,
  biggestFear: {
    animal: 'Spider',
    crisis: 'Existential',
  },
}

//Delete the biggestFear property from the above object.

//for in loops

const andrewObj = {
  name: 'Andrew',
  age: 27,
  biggestFear: 'Spiders',
  smallestFear: 'Evil babies',
  favorites: {
    number: 38,
    person: 'Becca',
    brand: 'J Crew',
  },
}

//Using a for in loop change the value of any key in the andrew object above containing the word fear to 'Nothing'

//Using a nested for in loop, change the value of every key in the favorites object to 'Adam Driver'

//Object.assign

const person = {
  name: 'Billy Bob',
  age: 59,
  handsome: 'Maybe?',
}
//Using Object.assign create a new object called billyBob that will be a copy of the person object above.

const info = {
  tall: true,
  married: true,
  favoriteCity: 'St. Petersburg',
}
//Again using Object.assign, add all of the keys in the info object to the billyBob object.

//Spread Operator (...)

const smallNums = [1, 2, 3, 4, 5, 6]
const bigNums = [77, 889, 99, 10000]

//Using the spread operator, make a copy of the smallNums array.

//Using the spread operator make a copy of both the smallNums and bigNums array as a single array.

const person2 = {
  name: 'Charles',
  age: 106,
  married: false,
}

const info2 = {
  married: true,
  tall: true,
  handsome: 'Maybe?',
}

//Using the spread operator, make a copy of the person2 object above called charles

//Again using the spread opeartor, make a copy of the charles object called charlesInfo with all of the keys from the info2 object included.

const charlesInfo = { ...charles, ...info2 }

// console.log(charlesInfo)

//destructuring

const andrew2 = {
  name: 'Andrew',
  birthday: 'May 29',
  email: 'andrew@andrew.com',
  age: 27,
  biggestFear: 'Spiders',
}

const brandon = {
  name: 'Brandon',
  birthday: 'August 6',
  email: 'bran@don.com',
}

// Destructure the birthday and email properties from the andrew2 object.

// Destructure the birthday and email properties from the brandon object.  You will need to alias the variables to avoid duplicate declarations.

//NESTING

const duplicateNums = [1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 7, 8, 9]
//Using a nested for loop, remove all duplicates from the array above.
