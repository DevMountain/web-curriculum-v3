# React 4

Lecture Slides: https://slides.com/dmweb/react-4

Mini Project: https://github.com/DevMountain/react-3-mini

Afternoon Project: https://github.com/DevMountain/react-3-afternoon

## Student Learning Objectives

<details>
    <summary>JavaScript</summary>
    <ul>
        <li>Student understands promises help with asynchronous code</li>
        <li>Student can describe the difference between sychronous and asynchronous javascript code</li>
        <li>Student can correctly create a .then to handle a promise</li>
    </ul>
</details>

<details>
    <summary>Axios | HTTP | REST | CRUD</summary>
    <ul>
        <li>Student can describe the parts of a URL</li>
        <li>Student can describe CRUD</li>
        <li>Student can describe REST</li>
        <li>Student can identify best practice for get, put, post, and delete</li>
        <li>Student can identify a URL used for REST and a URL used to deliver HTML content</li>
        <li>Student knows what the body is in an http request</li>
        <li>Student can use params in http request URLs</li>
        <li>Student can send data in the body of http requests</li>
        <li>Student can write JSON</li>
        <li>Student can install and import axios</li>
        <li>Student can perform a GET with axios</li>
        <li>Student can perform a PUT with axios</li>
        <li>Student can perform a POST with axios</li>
        <li>Student can perform a DELETE with axios</li>
        <li>Student can put data from axios results onto state</li>
        <li>Student can send data from user input with axios requests</li>
        <li>Student can invoke axios in a click event</li>
        <li>Student can invoke axios in componentDidMount</li>
    </ul>
</details>

## HTTP(S)

HTTP stands for `Hyper Text Transfer Protocol`.

The `(S)` stands for secure. If a web sites url is prefixed with `HTTPS` then it will usually have a green lock next to it meaning that this site is secure to send information to it over the interwebs.

This is the protocol that we follow when making a network or an `http request`.

We do this by making an http request to a URL.

### Query

The `query` of the request is extra information that we can apply to the URL. This is usually used to find specific values.

Queries start with a `?` then use a key value pair.

Example: http://example.com/people/?name=tayte

Above, I'm looking for a user named 'tayte'

### Params

The `params` are extra parts of our URL to send data. It works like a query almost, but we don't need a `?` or a key/value pair.

We just prefix the param with a backslash.

Example: http://example.com/people/tayte

Above, 'tayte' is the param.

## URL

URL stands for `Uniform Resource Locator`.

The URL is a mixture of the protocol, domain, and endpoint being requested.

`https://devmountain.com/about.html`

Above is an example of a `URL`.

- Protocol - https://

- Domain - devmountain.com

- EndPoint - /about.html

## Parts Of A Request

When a request is made to a URL, there are two portions that make up the request.

### Header

The `header` is the part of the request that holds information about the request we are making and the response that we receive.

The header can contain information about parts of the request like status codes,

### Body

The body is an optional part of the request. This is where we will store the data that we want to send through the request.

The body does not always have to have information inside of it. It's okay to keep it empty if need be.

A good example of this is if we have a form on our webpage and we hit the submit button, it then will perform a request and send the information that we typed into the form through the `body` of the request.

## JSON

`JSON` is the format that we can use to structure our data that is being sent in the request.

JSON is short for `Javascript Object Notation`. This is how we will transfer information between different languages.

JSON looks very similar to a Javascript object, but the key/value pairs are wrapped in double quotes, however `numbers` do not.

```json
{
  "name": "tayte",
  "age": 22,
  "hobbies": ["snowboarding", "video games", "cars"],
  "car": {
    "make": "subaru",
    "year": 2014
  }
}
```

Notice how we can still send arrays and objects inside of JSON.

We also can not have a trailing comma on our object.

## REST

REST stands for `Representational State Transfer`.

This is an architecture or design concept for transfering our data.

This applies a set rules and constraints to allow different systems to talk to each other.

This is the design concept that we will use to talk to a `RESTful API`.

## RESTful API

API stands for `Application Programming Interface`.

An API is a layer that we can interact with to send and get information from a server.

A `RESTful API` follows a design pattern that uses the four parts of REST to interact with it: `post`, `put`, `get`, and `delete`.

- Post - This is used for adding new data.

- Get - This is used for retrieving data.

- Put - This is for updating data. It's easy to remember this because put has a 'u' in it and update startes with it.

- Delete - This is for removing data.

Interacting with an API using all four of these methods are a way that we can follow a concept called `CRUD`.

## CRUD

CRUD is the model that is followed to setup the basic functionalities for an API.

CRUD is short for `Create`, `Read`, `Update`, and `Delete`. These are the four basic functionalities that will make an API "complete".

The `REST` methods and The `CRUD` operations correlate with each other like so:

- Post - Create

- Get - Read

- Put - Update

- Delete - Delete

## Synchronous

Javascript is a `synchronous` language. This means that it can only have one thing happen at a time.

This causes a problem for us when we need to make an `HTTP request` to a server because requests can sometimes take a large amount of time to receieve a response. Since Javascript is synchronous, it will just make the request then think it's done. Meaning that when we receive a response from the request it will not do anything with that response.

So we need to make our code run `asynchronous`.

## Asynchronous

`Asynchronous` Javascript will allow us to make a request then execute the rest of our code, then once we receive a response from our request, it will handle it.

This makes it so our application can still run and perform correctly.

> Note: this is a very high level overview of the two topics, so go ahead do some personal study to learn more about synchronous code, asynchronous code, and the call stack!

## Component Lifecycle

Before we start to implement what we have just discussed in React, let's review the `Component Lifecycle`.

The `Component Lifecycle` is the term we use to dictate the the time a component exist to the time the component no longer exists in our web browser.

We can use some built in `Lifecycle Hooks` to execute logic based off of the current stage of "life" the component is in.

> Note: We can only use these lifecycle hooks inside of a class component

### Constructor

The `constructor` method is the first lifecycyle hook that is fired. It is used to invoke `super()` and set the `props` object to the component.

```javascript
class Example extends Component {
  // the constructor function invoking super and setting state
  constructor() {
    super()

    this.state = {
      example: true,
    }
  }

  render() {
    return (
      <div>
        <h1>
          This is an example class component to show off the component did mount
          hook
        </h1>
      </div>
    )
  }
}
```

### Render

The `render` method is executed when the component `mounts` to the page. This should be where we return the `JSX` to make up the display for the component.

```javascript
class Example extends Component {
  // render is the lifecycle hook that returns jsx to create a display for our component
  render() {
    return (
      <div>
        <h1>
          This is an example class component to show off the componentDidMount
          hook
        </h1>
      </div>
    )
  }
}
```

### componentDidMount

`componentDidMount` is the hook we can use to have code immediately executed when the component `mounts` to the web page.

```javascript
class Example extends Component {
  constructor() {
    super()

    this.state = {
      example: true,
    }
  }

  // Component Did Mount Lifecycle Hook
  componentDidMount() {
    // Anything inside of here will be exectued when the component mounts
    alert('Hello World!')
  }

  render() {
    return (
      <div>
        <h1>
          This is an example class component to show off the component did mount
          hook
        </h1>
      </div>
    )
  }
}
```

This will only be executed once, and will not be executed on a `re-render` from updating state.

## Axios

Axios is the library that we will be using to create `asynchronous http requests`.

### Install Axios

We first need to install `axios` from the package manager.

In your terminal, make sure that you are in the current project directory, then run:

```bash
$ npm install axios --save
```

This will install the library into your project so we have access to the built-in methods needed.

### Import Axios

At the top of the file that we plan to use `axios`, go ahead and `import` the package in.

```javascript
import axios from 'axios'
```

This will bring it into our code so we can use it.

### Using Axios

> Note: Refer to 'src/App.js' for an example

Axios returns a `promise` in JavaScript. A promise is a special object in JavaScript that will hold a response object from an http request.

This allows us to asynchronously handle JavaScript code.

```javascript
const promise = axios.get('http://swapi.co/api/people')
```

We can then use this `promise` object to handle data that comes back from the response. If it is a successful promise, it will `resolve` and if it resolves we will use a `.then()` method.

The `.then()` method accepts a callback function as argument. The `response` param in the callback is where we have access to the object returned from the response.

The data sent back from the server will be stored on the `data` property of the response.

```javascript
promise.then(response => {
  console.log(response.data)
})
```

If there is a failure in anyway, we can handle it by using a `.catch()`. We chain this method onto the `.then()` so we can "catch" the error.

```javascript
promise
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
    console.log(error)
  })
```

#### Axios Methods

There are four methods that we will be using from the `axios` library.

GET - This method will recieve a url as an argument to make a `get request` to. This acts as the `read` of our CRUD.

```javascript
const promise = axios.get('http://website.com/api/')
```

POST - This method uses two arguments, the url to hit and an object for the body of the request. This acts as the `create` of CRUD.

```javascript
const promise = axios.post('http://website.com/api/', { name: 'tayte' })
```

PUT - This method uses two arguments, the url to hit and an object for the body of the request. This acts as the `update` of CRUD.

```javascript
const promise = axios.put('http://website.com/api/', { name: 'tayte' })
```

DELETE - This method will recieve the url to hit as an argument. This acts as the `delete` of our CRUD.

> We will usually send some information through the params

```javascript
const promise = axios.delete('http://website.com/people/2')
```

## Resources

<details>

<summary> <code> Axios </code> </summary>

- [Axios Docs](https://github.com/axios/axios)
- [using Axios in react video](https://www.youtube.com/watch?v=oQnojIyTXb8)
- [Post, put, get and delete requests with axios](https://alligator.io/react/axios-react/)

</details>

<details>

<summary> <code> Props </code> </summary>

- [React Props](https://www.robinwieruch.de/react-pass-props-to-component/#react-props)
- [Props inside a map method](https://www.robinwieruch.de/react-list-component)

</details>
