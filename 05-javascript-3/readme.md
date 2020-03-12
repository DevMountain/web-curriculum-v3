# Javascript 3

## Slideshow: https://slides.com/awestenskow/javascript-3

1. [JavaScript 3 Lecture Notes](#JavaScript-3-Lecture-Notes)
1. [Additional Resources](#additional-resources)
1. [JavaScript 3 Mini Project](#JavaScript-3-Mini-Project)
1. [JavaScript 3 Afternoon Project](#JavaScript-3-Afternoon-Project)

## Student Learning Objectives

<details>
  <summary>Arrow Functions</summary>
  <ul>
  <li>Students can create/define functions using arrow function syntax
</details>

<details>
  <summary>Array Methods</summary>
  <ul>
  <li>Students can use the following array methods:
  <ul>
    <li>forEach</li>
    <li>map</li>
    <li>filter</li>
    <li>reduce</li>
  </ul>
  </li>
  </ul>
</details>

<details>
  <summary>Objects</summary>
  <ul>
  <li>Students can use delete to delete an object property</li>
  <li>Students can use a for in loop to access property names and values on an object</li>
  <li>Students can use Object.assign() to create a new object</li>
  <li>Students can use object destructuring to create new variables from an object</li>
  </ul>
</details>

<details>
  <summary>Spread Operator</summary>
  <ul>
  <li>Students can use the spread operator with arrays:
  <ul>
    <li>Making a copy of an array</li>
    <li>Declaring a new array literal</li>
    <li>Concatenating arrays</li>
  </ul>
  </li>
  <li>Students can use the spread operator with objects:
  <ul>
    <li>Making a copy of an object</li>
    <li>Declaring a new object literal</li>
  </ul>
  </li>
  </ul>
</details>

<details>
<summary>Nesting</summary>
<ul>
<li>Students can build objects with objects and arrays as properties</li>
<li>Students can build arrays of arrays and arrays of objects</li>
<li>Students can nest for loops</li>
</ul>
</details>

---

## Javascript 3 Lecture Notes

### Arrow Functions, Array Methods, the Spread Operator, and Nesting

---

In this lecture, we are introduced to some more advanced array methods that allow us to manipulate data in interesting ways. We also learn various methods to make our code more compact and increase its readability.

> Note: The topics covered in this lesson will be used incredibly frequently in all JavaScript projects. It will be worth your time to copy the code snippets presented here and play with them in a repl. The more practice you can get on these subjects, the better.

### Arrow Functions

---

Arrow functions were introduced during the ES6 release of JavaScript and are a great way to condense code while also creating/defining functions

```js
//Below is an example of a function declaration
function sum(num1, num2) {
  return num1 + num2
}

//This is an example of the same function written using an arrow function
const sum = (num1, num2) => {
  return num1 + num2
}

//This is a yet shorter version of the same arrow function from above - because there are no curly brackets here, the return is implied
const sum = (num1, num2) => num1 + num2
```

### Array Methods

---

A method is a function which lives on an object. All of the methods we will discuss here live on the global `Array` object. Each data type has its own global object, meaning that they are accessible anywhere in our file and on any variable of that data type.

> It will be worth your time to look into some of the methods that live on the global objects for each of the data types `Number`, `String`, `Object`, `Function`, etc. There are also a number of other global objects such as `Math` and `JSON` which are extremely helpful. There are a few links in the additional resources section of this document that can help get you started learning about those.

Using the array methods we will look at today can be a bit overwhelming at first, so we will break down the syntax and give a lot of examples. Array methods are invoked by chaining them onto an array using `.`. We then name the method and invoke it, passing in any necessary arguments. It is also important to note that these functions operate much like a `for` loop because they loop over the specified array similar to how we used `for` loops in the past with arrays. The methods we will learn today each accept only one argument, a callback function.

> Note: This callback function will accept different arguments depending on which function we are invoking.

Let's see some examples:

#### .forEach

---

The .forEach array method loops over the array and performs an action for each item in the array without returning a new array. This can be useful for performing an action a set number of times or editing the values in the original array. Let's look at an example:

The .forEach callback function will loop over the given array in a way very similar to a for loop can and accepts three arguments:

1. The individual item it is looking at, often referred to as `element` or `el`.
2. The index of the item being looked at.
3. The entire original array.

```js
const names = ['Andrew', 'Jonathan', 'Josh']
//If we simply wanted to print each of these names to the console, we could do this:

names.forEach(function(element, index, array) {
  console.log(element)
})

//However, the usefulness of this is limited.  Let's imagine we wanted to find out who was cool, but didn't need a new array.

names.forEach(function(element, index, array) {
  if (element === 'Andrew') {
    names[index] = element + ' is cool.'
  } else {
    names[index] = element + ' is not cool.'
  }
})

//names now looks like this:
//['Andrew is cool', 'Jonathan is not cool', 'Josh is not cool']
```

#### .map

---

The .map method behaves very similarly to .forEach and its callback function even takes the same arguments (element, index, and array) - the major difference being that it is used to create a new array instead of simply performing an action for each item in the array. The .map method returns a new array of the same length as the original array and generally will change some aspect of the values in the original array.

Let's look at what this will look like:

```js
const nums = [1, 2, 3, 4, 5]

const numsPlusOne = nums.map(function(element, index, array) {
  //.map loops over the nums array and looks at each item
  //On the first run element = 1, index = 0, and array = [1,2,3,4,5]
  //On the second run element = 2, index = 1, and array = [1,2,3,4,5]
  //element and index are placeholder values for each element and index in the array
  return element + 1
  //Our return value is what will be added to the new array, meaning in this case we will add each number + 1
})

//numsPlusOne is equal to [2,3,4,5,6]
//The original nums array has not been changed
```

We can also do more advanced logic in our array methods. Let's look at an example:

```js
const names = ['Andrew', 'Jonathan', 'Josh']

const whoIsCool = names.map(function(element, index, array) {
  if (element === 'Andrew') {
    return element + ' is super cool.'
  } else {
    return element + ' is not cool.'
  }
})

//After this runs, whoIsCool will look like this:
//['Andrew is super cool', 'Jonathan is not cool', 'Josh is not cool']
```

> Notes:
>
> 1.  Since .map does not affect the original array, it **always** needs to be assigned to a new variable.
> 2.  The array returned by .map will **always** be the same length as the original array. If you do not provide a valid return as part of your callback function, that element will be `undefined`.
> 3.  You do not have to provide all 3 arguments to your callback function. If you only need the element, that's all you have to pass to the callback function. Just remember that the first argument passed is the element, the second is the index, and the third is the array, regardless of what you name each of them.

#### .filter

---

True to its name, .filter allows us to filter items out of an array based on a set condition. It's callback function accepts the same arguments as .map and .forEach but is explicitly looking for either a `true` or `false` value to be returned. If the callback function returns `true`, that element will be added to the new array, otherwise it will be ignored. Let's see an example:

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Imagine we only want the even numbers from this array

const evens = nums.filter(function(element, index, array) {
  if (element % 2 === 0) {
    return true
  }
})
```

> Notes:
>
> 1.  In this example uses the modulus operator `%` which will return the remainder of the division. If we divide by two and the remainder is 0, we know it's an even number.
> 2.  Filter always returns a new array and therefore needs to be assigned to a variable

#### .reduce

---

.reduce allows us to take many values and reduce them down to a single value. It is slightly different from the others we have looked at today because it takes in two arguments, a callback function and an initializer. The initializer is important because it tells .reduce what data type we are expecting to return from the function. If no initializer is provided, the first item in the array will be used as the initial starting value in the function. Furthermore, the callback function accepts one extra argument, the accumulator. The accumulator is used to keep track of our value as we loop through the array. The simplest functionality of .reduce is to sum an array of numbers but the possibilities are endless. Let's take a look:

```js
const nums = [1, 2, 3, 4, 5]

const sumNums = nums.reduce(function(acc, element, index, array) {
  return (acc += element)
}, 0)
```

Let's look at what our values will look like for each loop:

1. On the first run:

- the `acc` is equal to the initializer, `0`
- `element` is the first item in the array, `1`
- We `return 0 + 1`, so `acc` becomes `1` for the next loop.

2. On the second loop:

- `acc` is equal to `1`, `element` is equal to `2`
- We `return 1 + 2`, so `acc` becomes `3`

3. Once all of the loops have completed, the final value of `acc` is assigned to `sumNums`

- If we console log `sumNums`, we will see `21`.

This is a very basic example, but let's look at something a little more fun:

```js
const names = ['Jonathan', 'Josh', 'Brandon']

const andrewsFriends = names.reduce(function(acc, element, index, array) {
  if (index === names.length - 1) {
    return acc + 'and ' + element
  } else {
    return acc + element + ', '
  }
}, "Andrew's friends are ")
```

In this example, our initializer is the beginning of a string `"Andrew's friends are "`. With each loop, we are pulling a name from the names array and adding it to this string. Once we hit the last item (where `index` is equal to the length of the array minus one) we finish off the string with `'and'`. Again, this is a silly example but shows some of the power that .reduce has.

> Notes:
>
> 1.  Reduce always returns a new value and therefore needs to be assigned to a variable.
> 2.  When beginning to write .reduce functions, it can be easy to forget either the accumulator or the initializer. Remember, whatever the first argument you pass to the callback function will be the accumulator, regardless of what you name it.

### Objects

#### Deleting properties

---

We can delete existing properties from an object using the `delete` keyword. Let's take a look:

```js
const person = {
  name: 'Andrew',
  age: 27,
  isMarried: true,
  friends: ['Jonathan', 'Josh', 'Brandon'],
  biggestFear: 'Spiders',
}

//I don't want everyone to know my biggest fear so let's remove that

delete person.biggestFear

//person now looks exactly the same but without the biggestFear key
```

#### for in loops

---

for in loops allow us to loop through the keys on an object in a similar way that we can loop through the items in an array. The syntax looks like this:

```js
const person = {
  name: 'Andrew',
  age: 27,
  isMarried: true,
  friends: ['Jonathan', 'Josh', 'Brandon'],
  biggestFear: 'Spiders',
  smallestFear: 'Fleas',
}

for (let key in person) {
  //code to execute
}
```

> A for in loop will look at each key/value pair on an object with the `key` variable representing each key. Let's imagine I wanted to change all of my fears:

```js
const person = {
  name: 'Andrew',
  age: 27,
  isMarried: true,
  friends: ['Jonathan', 'Josh', 'Brandon'],
  biggestFear: 'Spiders',
  smallestFear: 'Fleas',
}

for (let key in person) {
  //For the first loop, key is equal to 'name',
  //On the second it is equal to 'age'
  //This continues until the for in loop has looked at all keys on an object
  if (key.includes('Fear')) {
    person[key] = 'Nothing'
  }
}

//If we console log the person object, both biggestFear and smallestFear will be 'Nothing'
```

> Note: The .includes() method lives on the global `String` object and can be called on any string. It checks if a string includes a given substring and returns either `true` or `false`

#### Object.assign()

---

.assign() is a method that lives on the global `Object` object and can be used to combine multiple source objects into a single target object. It accepts an indeterminate number of arguments. The first is the target object into which all source objects will be combined. All subsequent arguments should be target objects from which we want to pull to create our new object. This has numerous uses:

1. Making a copy of an object

   ```js
   const person = {
     name: 'Andrew',
     age: 27,
     isMarried: true,
     friends: ['Jonathan', 'Josh', 'Brandon'],
     biggestFear: 'Spiders',
     smallestFear: 'Fleas',
   }

   const secondPerson = Object.assign({}, person)
   ```

   > This will just create a copy of the person object. Notice that our target object, the first argument passed to the .assign method, is an empty object.

2. Combining several objects into one, this is also called flattening:

   ```js
   const favorites = {
     food: 'Jambalaya',
     color: 'Red',
     number: 38,
   }

   const favorites2 = {
     car: 'Land Rover',
     season: 'Spring',
     brand: 'J Crew',
   }

   Object.assign(favorites, favorites2)
   ```

   > This edits the original array, adding the keys from the second object onto the first. The original `person` object will now have the `car`, `season`, and `brand` keys. If there are common keys between the two objects, the source object will override the target object.

### The Spread Operator (...)

---

One of the more useful features added in ES6 is the spread operator. This gives us a simple way to make copies of arrays and objects, this is referred to as spreading them.

#### Arrays

Using the spread operator to make copies of arrays is very simple, let's take a look:

```js
const names = ['Andrew', 'Jonathan', 'Josh']

const moreNames = [...names]
//This will spread the names array onto our new moreNames array, making a copy.  We can edit these independently of each other.  Changes to one will not affect the other.
```

We can also use the spread operator to use an existing array as a jumping off point for a new array:

```js
const names = ['Andrew', 'Jonathan', 'Josh']

const moreNames = [...names, 'Brandon', 'Steve']
//This spreads our names array onto moreNames and then adds 'Brandon' and 'Steve' to the moreFriends array.
//Again, this does not affect the original array.
```

Finally, we can use the spread operator to concatenate arrays:

```js
const evens = [2, 4, 6]
const odds = [1, 3, 5]

const nums = [...evens, ...odds]
//This will concatenate the two arrays together.
//nums will be equal to [2,4,6,1,2,3]
```

> Note: All of the techniques we have learned here can be mixed an matched to make your code more concise and readable.

#### Objects

Using the spread operator with objects works much the same as with arrays. We can make a copy of an object:

```js
const person = {
  name: 'Andrew',
  age: 27,
  married: true,
}

const anotherPerson = { ...person }
//This gives me a copy of my person object without affecting the original
```

We can also use existing objects as a jumping off point:

```js
const person = {
  name: 'Andrew',
  age: 27,
  married: true,
}

const detailedPerson = { ...person, height: '6 feet', attractive: true }
//This will create a new object which has the same properties as the original person object
//It also adds the height and attractive properties.
```

Finally, you can overwrite existing properties on new objects. Let's imagine that Josh is also 27 and married but his name is Josh, we can do:

```js
const person = {
  name: 'Andrew',
  age: 27,
  married: true,
}

const secondPerson = { ...person, name: 'Josh' }

//This will give us a new object based on the person object, but with a unique name property.
```

### Nesting

#### Objects within objects, arrays within arrays, and arrays within objects

---

Complex data type can be nested within each other, allowing for more complex data structures. Most commonly, you will see data organized into an object with various properties attached. These properties can be of any data type. Let's look at an example:

```js
const person = {
  name: 'Andrew',
  age: 27,
  married: true,
  friends: [
    {
      name: 'Jonathan',
      age: 27,
      cool: true,
    },
    {
      name: 'Josh',
      age: 28,
      cool: true,
    },
    {
      name: 'Brandon',
      age: 39,
      cool: false,
    },
  ],
  favorites: {
    color: 'red',
    car: 'Land Rover',
    brand: 'J Crew',
  },
  numbers: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
}
```

This is an example of a complex data structure. The parent object contains `name`, `age`, `married`, `friends`, `favorites`, and `numbers` properties. Each of these illustrates a different data type, with `friends`, `favorites`, and `numbers` showing nested data types.

- `friends` is an example of an array of objects, each with their own `name`, `age`, and `cool` properties. It is incredibly common to see arrays of objects and you should get used to reading this data structure.
- Favorites is an object nested within an object
- Numbers contains an array of arrays.
  > Note: All of these are valid and are common ways of moving large amounts of data. As you build your own applications, maintaining a consistent data structure will be incredibly important both for readability and reliability of your app. You should always take time to consider how your data will be organized and formatted.

#### Nesting for loops

---

For loops can be nested in the same way that functions can. However, wrapping your head around exactly what's happening can be a little confusing at first. Let's take a look:

```js
//We know that if we want to run a for loop 5 times we can do this:
for (let i = 0; i < 5; i++) {
  console.log(i)
}
//This will print 0 1 2 3 4 to the console.
//Let's look at a nested for loop:

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j)
  }
}

//What this means is that for every cycle on our outer for loop,
//the inner loop will run five times. Our console logs would look like this:
/*
0,0
0,1
0,2
0,3
0,4
1,0
1,1
1,2
1,3
1,4
2,0
2,1
etc...
...until 
4,4
*/
```

> Note: It is common to use `j` as your variable for a nested for loop.
>
> Notice that `i` has the same value for five of the console logs. After our `j` loop has run five times, `i` increments and runs our `j` loop five more times. This continues until `i` has run five times.

Take some time to play around with this and experiment until you understand what is going on. This is a good exercise in tracking data and the values of changing variables.

# Additional Resources

## General

[Top 10 ES6 Features Every Busy JavaScript Developer Must Know](https://webapplog.com/es6/) - A good breakdown of ES6 features

[Template literals (Template strings) - JavaScript \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) - An INCREDIBLY important concept to understand. Worth your time to look at. Understanding string literals will make your life a LOT easier.

[Array.prototype.map() - JavaScript \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) - Breakdown of .map

[Array.prototype.forEach() - JavaScript \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) - Breakdown of .forEach

[Array.prototype.filter() - JavaScript \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) - Breakdown of .filter

[Array.prototype.reduce() - JavaScript \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) - Breakdown of .reduce. This is a VERY powerful array method and would be worth your time to practice using it for more than summing numbers.

[Spread syntax - JavaScript \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) - More information about spread.

[JavaScript Number Prototype Methods \| W3 Schools](https://www.w3schools.com/js/js_number_methods.asp) - This is a helpful list that provides some of the most common methods associated with the Number data type

[JavaScript String Prototype Methods \| W3 Schools](https://www.w3schools.com/js/js_string_methods.asp) - This is a helpful list that provides some of the most common methods associated with the String data type

[JavaScript Array Prototype Methods \| W3 Schools](https://www.w3schools.com/js/js_array_methods.asp) - This is a helpful list that provides some of the most common methods associated with Arrays

[JavaScript Math Methods \| W3 Schools](https://www.w3schools.com/js/js_math.asp) - This is a helpful list of some of the most common Math methods available in JavaScript

[JavaScript JSON Methods \| W3 Schools](https://www.w3schools.com/js/js_json.asp) - This is a helpful list of some of the most common JSON methods available in JavaScript

## Videos

[YouTube - Higher order functions and arrays](https://www.youtube.com/watch?v=rRgD1yVwIvE) - A more detailed breakdown of some of the array methods we have covered here.

[YouTube - Nested loops](https://www.youtube.com/watch?v=piKpw_CghS8) - A visual breakdown of a nested for loop.

# JavaScript 3 Mini Project

Embedded in Unit 1.5 at https://lms.devmountain.com/courses/70

# JavaScript 3 Afternoon Project

https://github.com/DevMountain/javascript-3-afternoon-project
