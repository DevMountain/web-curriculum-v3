# Node Two

In this lecture we talk about Top Level Middleware, Using Postman, and using Axios in our API.

Lecture Slides: https://slides.com/dmweb/node-2

Mini Project: https://github.com/DevMountain/node-2-mini

Afternoon Project: https://github.com/DevMountain/node-2-afternoon

## Student Learning Objectives

### Express

- Student can apply `express.json` as top level middle-ware
- Student can access the body from req.body
- Student can use `post`, `put`, `delete` methods to handle the associated requests

### Top-Level Middleware

- Student can describe how app.use is fired before every endpoint declared after it.
- Student can set up `express.json` in an `app.use()` at the top of their server file.

### Tooling - Postman

- Student can send requests to their server with Postman.
- Student can send requests to their server with Postman including a body in the request.
- Student can send requests to their server with Postman including params in the request.

### Express Patterns

- Student can set up a controller to export content with `module.exports` and require that controller in their server file.
- Student can write endpoint handler functions in the controller file and then reference them in the endpoint in the server file.

## Top Level Middleware

`Top Level Middleware` is the term we use to refer to some logic that will be executed upon every request that is made to our API.

We can set up that logic inside of the built method `.use()` that comes from the object that is return from invoking `express`.

```javascript
app.use(/* some function to execute here */)
```

## Req Body

Sometimes we need to send some complex data to our API. Using the `req.query` or `req.params` just might not be sufficient enough to use to send this data. This is where the `body` comes into play.

`req.body` is the object we can use to receive the complex data. However, the data that comes from the body of the request is received as `JSON` so we need to parse it into a Javascript Object.

We can do this by using a special function from `express` called `express.json()`. This function will parse the JSON that comes as the `body` from the request and turn it into a useable object for us.

We want to invoke this function as `Top Level Middleware` so that it is invoked upon every connection made to our API.

We will pass it into our `app.use()` function to run it as top level middleware.

```javascript
app.use(express.json())
```

## CORS

CORS stands for `Cross Origin Resource Sharing`. This is a security protocol that we can use to safely allow other origins talk to our origin. This means that we can make a request from one server to another server.

We first need to install `CORS` as a dependency for our project. In the terminal, run:

```bash
$ npm install cors
```

Then require it at the top of the `index.js` file for our API.

```javascript
const cors = require('cors')
```

Then we need this function to be invoked as top level middleware.

```javascript
app.use(cors())
```

Now your API is setup to follow the `CORS` protocol.

## Postman

`Postman` is a suite that we can use to act as a `client` to interact with the `API` that we build.

The browser, by default, will only let us make `get` requests from the URL. So we can use `postman` to test out a `full CRUD API`.

## Full CRUD API

So far we have built an API that has only allowed `get` requests to be made. We need to also allow `post`, `put`, and `delete` requests to be made to become a `full CRUD API`.

POST:

```js
app.post('path for the endpoint', handlerFunc)
```

PUT:

```js
app.put('path for the endpoint', handlerFunc)
```

DELETE:

```js
app.delete('path for the endpoint', handlerFunc)
```

We now have a "fully functional" API because we are following the full CRUD pattern.

## Controller

A `controller` is what we can use to store all of our functions that we use to handle the requests being made.

We usually will create a separate javascript file that will hold the controller functions.

# Node 2 Additional Resources

## Node and Express

- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction — This is a great overview of Node and Express from MDN.

- https://medium.com/@LindaVivah/the-beginners-guide-understanding-node-js-express-js-fundamentals-e15493462be1 — In-depth reading about Node and Express.

- https://www.sohamkamani.com/blog/2018/05/30/understanding-how-expressjs-works/ — How Express works behind the scenes

## Middleware

- https://developer.mozilla.org/en-US/docs/Glossary/Middleware — Concise definition of middleware.

- http://www.webdevelopmenthelp.net/2017/02/express-middleware-tutorial.html — An in-depth overview of middleware.

- https://discuss.codecademy.com/t/how-does-app-use-work/384243 — How does app.use() work?

- https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded — What does express.json() do? (Read second answer.)

## Postman

- https://www.digitalcrafts.com/blog/student-blog-what-postman-and-why-use-it — What is Postman and why use it?

# Node 2 Mini Project

https://github.com/DevMountain/node-2-mini

# Node 2 Afternoon Project

https://github.com/DevMountain/node-2-afternoon
