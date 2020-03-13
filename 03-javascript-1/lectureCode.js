// Variables and data types
//Numbers

//Declare a variable called age and give it a value of your age.

//Declare a variable called 6 and give it a value of 3 + 3.  We can perform math operations on numbers.

//Strings
//Declare a variable called name and give it a value of your name.

//Declare a variable called greeting and give it a value of a nice greeting.  Use either template strings or concatenation to add your name to the end of the greeting.

//Booleans
//Declare a variable called lovesCode and give it a value of a boolean.

//Arrays
//Declare a variable called friends and give it a value of an array containing 3 strings, each one a name of a friend.
//Console.log the first item in your array

//Objects
//Declare a variable called me.  Make it an object with the following properties: name, age, lovesCode, friends, and greeting.  Use your previously declared variables to provide values to this object.

//Console log the name property on your object.
//DOT NOTATION

//BRACKET NOTATION

//Add a new property called favoriteNumber and give it a value of your favorite number.

//Console log the whole object

//Functions

//Write a function called sayHello, have it return the string of hello.  Invoke it below.

//Modify the above function to take in an argument of name.  Invoke it below passing in any name as a string.

//Create a function called sum as a function expression that takes in two parameters: num1 and num2.  Return their sum.  Invoke it below passing in any two numbers.

//Write a function as an arrow function called findFirst that will take in an array.  It should return the first item in the array.
const numsArr = [1, 2, 3, 4, 5, 6]

//If statements

//Write a function called equalChecker that takes in two numbers.  If they are equal return true, if they are not return false.

//Write a function called canIDrive that takes in a number, someones age.  If the person is under 16 return the string 'you can drive a bike'.  If they are between 16 and 50 return 'you can drive a car'.  Otherwise, return the string 'you can drive a cadillac'.  Invoke the function below.

//Scope

//Look at the variables and functions below.  Let's figure out what is visible where.

let globalVar = 'I am on the global scope'

function outerFn() {
  let outerVar = 'I am scoped to outerFn'
  console.log(globalVar)
  console.log(outerVar)
  function innerFn() {
    let innerVar = 'I am scoped to innerFn'
    console.log(globalVar)
    console.log(outerVar)
    console.log(innerVar)
  }
  innerFn()
}

// outerFn()
