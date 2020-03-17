//Javascript Review
//Ask any problems from afternoon projects that students want to go over.

//List all primitive and complex data types.  What is the difference between primitive and complex data types?
/*
string
number
boolean
undefined
null

array
objects
*/
//What is the difference between null and undefined?
//---------------------------------------------------------//

//DECLARING VARIABLES
//What keywords do we know to declare variables.  What are their differences?

//var, let, const

//Declare a variable called name and give it a value of your name.

const name = 'Andrew'

//Declare a variable called age and give it a value of your age.

const age = 27

//Declare a variable called hasBeard and give it a value of a boolean.

const hasBeard = true

//Use these variables to create an object called me, give it name, age, and hasBeard properties.

const me = {
  name,
  age,
  hasBeard,
}

// console.log(me)

//What do we call data sets on an object?

//Add a new property to your me object called hobbies.  It should be an array of strings, each one a hobby you enjoy.

me.hobbies = ['learning', 'charity', 'friendship']

// console.log(me)

//Console log the first and last items in your hobbies array, use the length property

// console.log(me.hobbies[0])

// console.log(me.hobbies[me.hobbies.length -1])

//--------------------------------------------------------//

//IF STATEMENTS
//What is the difference between true and false and truthy and falsy?

//What are some examples of falsy values?
/*
false
0
''
null
undefined
NaN
0n 
*/

//Write an if statement that determines if your age is over 25.  If it is, console log 'I am over 25' to the console.

// if(me.hobbies){
//   console.log('truthy')
// } else {
//   console.log('falsy')
// }

// if(age > 25){
//   console.log('I am over 25')
// }

//Write an if statement based on the length of your hobbies array.  Use the following conditions:
//If you have 0 - 2 hobbies, console log `That's reasonable`
//If you have 3 - 5 hobbies, console log `That's a lot`
//Otherwise console log `That's excessive`

// if(me.hobbies.length >= 0 && me.hobbies.length <= 2){
//   console.log(`That's reasonable`)
// } else if(me.hobbies.length >= 3 && me.hobbies.length <= 5){
//   console.log(`That's a lot`)
// } else {
//   console.log(`That's excessive`)
// }

//--------------------------------------------------------//

//FOR LOOPS
const nums = [0, 11, 42, 63, 47, 54, 69, 75, 68, 49, 112]

//What are for loops?  What are they used for?

//Runs a block of code, a set number of times.

//Write a for loop that will console log the first five numbers in nums

// for(let i = 0; i < nums.length; i+= 2){
//   console.log(nums[i])
//   console.log('SAY THIS FIVE TIMES')
// }

//Write a reverse for loop that will loop through your hobbies array and log each of them to the console.

// for(let i = me.hobbies.length -1; i >= 0; i--){
//   console.log(me.hobbies[i])
// }

//Write a for loop that will console log every other number between 0 and 10.

// for(let i = 0; i <= 10; i+=2){
//   console.log(i)
// }

//------------------------------------------------------//

//FUNCTIONS

const people = [
  { name: 'Andrew', age: 27, hobbies: ['film', 'music', 'games'] },
  { name: 'Becca', age: 23, hobbies: ['biking', 'painting'] },
  { name: 'Brandon', age: 42, hobbies: ['running', 'sleeping'] },
]

//Write a function called nameFinder that takes in an object and returns the name property from that object.  Write it as an arrow function.  Invoke it with one of the people in the people array.

// const nameFinder = person => person.name

// const someName = nameFinder(people[2])

// console.log(someName)

//What is a method?

const robot = {
  name: 'Terminator',
  age: 1500,
}

//Add a method to the robot object called boom that will return the string 'BOOM BLAST'

robot.boom = () => 'BOOM BLAST'

// robot.boom = function(){
//   return 'BOOM BLAST'
// }

robot.height = 12

// console.log(robot)

robot.boom()

//What is a callback function?
//What is a higher order function?

//Write a function called executor that takes in a callback function, its only purpose is to invoke the function passed to it.  Write it as an arrow function.  Use it to invoke nameFinder.

// let executor = otherFunction => otherFunction()

// function executor(otherFunction){
//   return otherFunction()
// }
const nameFinder = person => person.name

const executor = otherFunction => {
  // console.log(otherFunction)
  return otherFunction()
}

executor(function() {
  return nameFinder(people[0])
})

//Add another method to the robot object called robotSays, it should take in a callback function and return the string `Robot says ` and then the result of the callback.

//nameFinder(people[0]) is equal to 'Andrew'

robot.robotSays = function(otherFunction) {
  let word = otherFunction()
  return 'Robot says ' + word
}

robot.robotSays(function() {
  return nameFinder(people[0])
})

robot.robotSays(() => nameFinder(people[0]))

//Write a function called terminate that will take in an object.  Use a for in loop to change all values on the object to 'Terminated'

const terminate = obj => {
  for (let property in obj) {
    // console.log(property)
    obj[property] = 'Terminated'
  }
  return obj
}

terminate(robot)
//------------------------------------------------------------//

//ARRAY METHODS

//What common methods do we know for manipulating arrays?

const things = ['car', 'fox', 'bread', 'pillow', 'jury duty']

//Use array methods to do the following:
// remove the last item from the array,

things.pop()

// remove the first item from the array,

things.shift()

// add something to the the end of the things array,

things.push(robot)

// add something to the beginning of the array,

things.unshift('Getting a midemenor at 27')

// remove the second item in the array and replace it with a new thing,

things.splice(1, 1, 'spongebob')

// console.log(things)
// make a copy of the array starting at the second item.

let someThings = things.slice(1)

// console.log(someThings)

//What is a higher order method?  What are some that we know?
/*
  .forEach
  .map
  .filter
  .reduce
  .sort
  .findIndex
  .find
*/

var jobs = [
  { receptionist: 'James' },
  { programmer: 'Steve' },
  { designer: 'Alicia' },
]

//Using the .filter method, create a variable equal to an array containing the person whose title is programmer.  Use only arrow functions.

// const findPerson = jobs.filter((element, index, array) => {
//   // console.log(element)
//   if(element.programmer){
//     return element
//   }
// })

const findPerson = jobs.filter(element => element.programmer)

// console.log(findPerson)

const inventors = [
  { id: 0, first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { id: 1, first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { id: 2, first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { id: 3, first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { id: 4, first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { id: 5, first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { id: 6, first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { id: 7, first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { id: 8, first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { id: 9, first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { id: 10, first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { id: 11, first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
]

// 1. Filter the list of inventors for those who were born in the 1500's (.filter)

const bornFifteens = inventors.filter(element => {
  if (element.year >= 1500 && element.year <= 1599) {
    return element
  }
})

// console.log(bornFifteens)

// 2. Give us an array of the inventors' first and last names (.map)

const nameFirstLast = inventors.map(function(element, index, array) {
  return `${element.first} ${element.last}`
})

// console.log(nameFirstLast)

// 3. How many years did all the inventors live? (.reduce)

const yearsLived = inventors.reduce((acc, element) => {
  // console.log(acc)

  const life = element.passed - element.year

  return acc + life
}, 0)

// console.log(yearsLived)

// 4. Sort the inventors by birthdate, oldest to youngest (.sort)

const whoIsOld = inventors.sort((a, b) => {
  // if (a.year > b.year) {
  //   return 1
  // } else if (a.year < b.year) {
  //   return -1
  // } else {
  //   return 0
  // }

  return a.year - b.year
})

// console.log(whoIsOld)

// 5. Sort the inventors by years lived (.sort)

inventors.sort((a, b) => {
  const lifeA = a.passed - a.year
  const lifeB = b.passed - b.year

  // if(lifeA > lifeB) {
  //   return 1
  // } else if( lifeB > lifeA){
  //   return -1
  // } else {
  //   return 0
  // }

  return lifeA - lifeB
})

// console.log(howLong)

// 6. Find the index of Marie Curie (.findIndex)

const marieIndex = inventors.findIndex((element, index, array) => {
  // console.log(index)

  return element.first === 'Marie' && element.last === 'Curie'
})

// console.log(marieIndex)

// 7. Find the information about the inventor with id 7 (.find)

const inventorSeven = inventors.find(element => {
  return element.id === 7
})

// console.log(inventorSeven)

// 8. Sum up the the instances of each of these (.reduce)
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
]
