# React 7

Lecture Slides: https://slides.com/dmweb/advanced-react

Lecture Code: https://github.com/DevMountain/react-7

## Student Learning Objectives

- [React 7](#react-7)
  - [Student Learning Objectives](#student-learning-objectives)
  - [Hooks](#hooks)
    - [What are hooks?](#what-are-hooks)
    - [useState](#usestate)
    - [useEffect](#useeffect)
  - [Higher Order Components (HOCS)](#higher-order-components-hocs)
  - [Render Props](#render-props)
    - [props.children](#propschildren)
  - [Additional Resources](#additional-resources)
    - [Documentation](#documentation)
    - [Articles](#articles)
    - [Videos](#videos)

## Hooks

### What are hooks?

Hooks are a relatively recent addition to React that allow us to access state and lifecycle hooks in functional components. This has numerous benefits, including allowing us to leverage the efficiency of functional components while not sacrificing the functionality of class based components.

There are a number of hooks, each with their own functionality. Additionally, React allows you to write your own custom hooks. Today we will focus on two: useState and useEffect.

### useState

Use state gives us access to state values in a functional component. After importing `useState` from react, you can establish a state value like this:

```js
import React, { useState } from 'react'

const functionalComponent = props => {
  const [stateValue, setStateFunction] = useState(initialValue)
  //When you invoke useState, you pass it an initial value.  It returns to you a state value and a function for updating that state value.  This function will share functionality with the setState function that we are already familiar with.

  //Both the value and the function can be called whatever you want and should be named appropriately for the piece of data they represent.
}

export default functionalComponent
```

The above is just an example of the format of useState. Let's look at what a simple counter component would look like using useState:

<summary><code>Counter.js</code></summary>

```jsx
import React, { useState } from 'react'

export default () => {
  const [count, setCount] = useState(0)
  //This establishes our count variable as state and initializes its value at 0.
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      // When we click the above button it will increment our state value by 1.
    </div>
  )
}
```

The useState hook can be used to store any data type. Let's look at an example of using our useState hook to keep track of a list of movies and the value of an input box:

<summary><code>MovieList.js</code></summary>

```js
import React, { useState } from 'react'

export default () => {
  const [movies, setMovies] = useState([
    'Alien',
    'Predator',
    'Alien Vs. Predator',
  ])
  //This initializes our state value movies as an array with 3 items.
  const [input, setInput] = useState('')
  //This will be used to hold the value of our input box.
  return (
    <div>
      {movies.map(movie => (
        <h2>{movie}</h2>
      ))}
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        //Here we attach our setInput function to the onChange of our input box.
        type="text"
      />
      <button
        onClick={() => {
          setMovies([...movies, input])
          //This will update the value of our movies array with the new item we just typed.  Notice how compact the code is to accomplish this vs. how it is done in a class based component.
          setInput('')
        }}
      >
        Add Movie
      </button>
    </div>
  )
}
```

### useEffect

useEffect allows us to use side effects in our functional components such as making network requests or calculating values. This one hook will replace the familiar lifecycle methods and can accomplish the duties of componentDidMount, componentDidUpdate, and componentWillUnmount all in one function.

Use effect accepts two arguments, a callback function and an array of dependencies. The callback function will run automatically on mounting and again any time any of the values in the dependencies array changes. If no dependencies array is provided, useEffect will run after EVERY render. Keep this in mind when deciding which dependencies to include in your array. Finally, useEffect can optionally return a cleanup function. This will behave like componentWillUnmount. Let's take a look:

```js
import React, {useEffect} from 'react'

const functionalComponent = props => {
  useEffect(() => {
    //Code to execute goes here, network calls, calculations, etc

    return () => //Optional cleanup function

  }, [/*Dependencies go here*/])

}

export default functionalComponent
```

The above is just an example of the format. Let's look at an example of a component that uses useEffect to make a network request and set the result on state.

<summary><code>Pokemon.js</code></summary>

```js
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default props => {
  const [pokemon, updatePokemon] = useState([])
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then(res => {
      updatePokemon(res.data.results)
    })
  }, [])
  return <div>{JSON.stringify(pokemon)}</div>
}
```

The above component will fetch some Pokemon from the pokeAPI and set those values on state. A couple of things to note:

- Because we have not included a cleanup function, nothing special will happen when the component unmounts. This is common when making network requests but you should be conscious of what your effect is doing and if it requires any cleanup.

## Higher Order Components (HOCS)

Higher order components or HOCs are an advanced React technique that allow us to reuse logic across multiple components. While not a part of the React API, they exist as a common and useful pattern for extending the functionality of our application.

> Examples of HOCs that we have seen include `connect` from redux and `withRouter` from react router dom

HOCs are usually written as functions which accept a component as a parameter, apply some sort of logic to the component, and then return a new component. The format will be as follows:

```js
import React from 'react'

const HigherOrderComponent = WrappedComponent => {
  //LOGIC IS DECLARED HERE.  ANY FUNCTIONALITY AND/OR DATA THAT SHOULD BE APPLIED

  return props => {
    return <WrappedComponent {...props} /*Additional props supplied here */ >
  }
}
export default HigherOrderComponent
```

Let's looks at an example of how a Higher Order Component can save us time in applying dynamic styling to our components. The code below shows a custom button which will allow us to dynamically provide styling to our button based on whether or not a prop of darkMode is supplied. All of this logic is localized to this button and is not reusable without copy and pasting.

<summary><code>BadButton.js</code></summary>

```js
import React from 'react'

const styles = {
  default: {
    color: '#0f0f0f',
    background:
      'linear-gradient(to bottom, #98989877, #d8d8d8 65%, #ababab33 100%',
    borderRadius: '4px',
    padding: '.4rem 1rem',
    border: '1px solid #d8d8d8ab',
    outline: 'none',
    fontSize: '1rem',
  },

  darkMode: {
    background: 'linear-gradient(to bottom, #000000 ,#434343 50%',
    color: 'white',
  },
}

const BadButton = props => {
  let style = { ...styles.default }
  //Styles will default to the default styling
  if (props.darkMode) {
    style = { ...style, ...styles.darkMode }
  }
  //If a prop of darkMode is provided, it will switch some of the styles to reflect that.
  return (
    <button {...props} style={style}>
      {props.text ? props.text : 'Bad Little Button'}
    </button>
    //If a prop of text is supplied, the button will display that.  Otherwise it will display Bad Little Button
  )
}

export default BadButton
```

Let's look at how building a Higher Order Component to handle the logic of switching styles can make this whole process easier and more reusable.

<summary><code>styleHoc.js</code></summary>

```js
import React, { Component } from 'react'

const styles = {
  default: {
    color: '#0f0f0f',
    background:
      'linear-gradient(to bottom, #98989877, #d8d8d8 65%, #ababab33 100%',
    borderRadius: '4px',
    padding: '.4rem 1rem',
    border: '1px solid #d8d8d8ab',
    outline: 'none',
    fontSize: '1rem',
  },

  darkMode: {
    background: 'linear-gradient(to bottom, #000000 ,#434343 50%',
    color: 'white',
  },
}

export default WrappedComponent => {
  //OUR HOC TAKES IN A WRAPPED COMPONENT AS ITS PARAMETER
  return props => {
    let style = { ...styles.default }

    if (props.darkMode) {
      style = { ...style, ...styles.darkMode }
    }
    //OUR LOGIC FOR DETERMINING DARK MODE IS THE SAME AS ABOVE BUT IT CAN BE APPLIED TO ANY COMPONENT WE WANT TO WRAP
    return <WrappedComponent {...props} style={style} />
    //The wrapped component represents ANY component that we want to apply these styles to.
  }
}
```

Now let's write a couple of components to take advantage of

<summary><code>GoodButton.js</code></summary>

```js
import React from 'react'
import styleHoc from './styleHoc'
//We import our StyleHOC to be able to use it.

const GoodButton = props => {
  return (
    <button {...props} style={props.style}>
      {props.text ? props.text : 'Good Button'}
    </button>
  )
}

export default StyleHOC(GoodButton)
//By wrapping our button in our StyleHOC, we get all of the styles and logic from it without having to type it over again.
```

Let's build a simple div to take advantage of our style HOC.

<summary><code>Square.js</code></summary>

```js
import React from 'react'
import styleHoc from './styleHoc'

const Square = props => {
  return (
    <div style={{ ...props.style, width: '100px', height: '100px' }}>
      HELLO I AM A SQUARE
    </div>
  )
}
export default styleHoc(Square)
//The same styles are available to us when wrapping our simple square component.
```

Higher Order Components have many uses. Any kind of logic that we want to apply to our component can be done through a HOC. Imagine you have certain components in your app that you only want to be visible to authenticated users. We can use a HOC to solve that problem. Let's look at an Auth HOC that will use everything we have learned so far including the patten of HOCs, useState, and useEffect:

<summary><code>authHoc.js</code></summary>

```js
import React, { useEffect, useState } from 'react'

export default WrappedComponent => {
  //Our HOC is our default export.  It returns our wrapped component with some logic added in.
  return props => {
    const [isAdmin, setIsAdmin] = useState(false)
    //We set up a boolean on our state to track if a user is authenticated.  This will determine if they can see the wrapped component or not.

    useEffect(() => {
      //This is a very simple example but you can imagine that in this effect you could check for a session or a user on a redux state.  For now, we'll just check if a prop of admin is true or false.
      if (props.admin) {
        setIsAdmin(true)
      } else {
        setIsAdmin(false)
      }
    }, [props.admin])
    //Because we include props.admin in our dependencies array, the effect will run every time that value changes.

    return isAdmin ? <WrappedComponent {...props} /> : <div>Log in please</div>
  }
}
```

Now let's edit our Square component to include our AuthHOC:

<summary><code>Square.js</code></summary>

```js
import React from 'react'
import styleHoc from './styleHoc'
import authHoc from './authHoc'

const Square = props => {
  return (
    <div style={{ ...props.style, width: '100px', height: '100px' }}>
      HELLO I AM A SQUARE
    </div>
  )
}
export default authHoc(styleHoc(Square))
//Now we can pass a prop of admin to our Square component to determine if it should be visible or not.
```

## Render Props

Render props are another advanced pattern in React which allow us to reuse logic and functionality by creating a component that gets its render method through a prop rather than hard coding it into our component.

### props.children

props.children is a pattern built into React that allows us to set up a component to dynamically render whatever is passed between its opening and closing tags. `props.children` is available in any react component and will represent any JSX that is written between opening and closing tags. Let's look at a component that will allow us to show or hide its children on demand:

<summary><code>Toggle.js</code></summary>

```js
import React, { useState } from 'react'
import styleHoc from './StyleHOC'

const Toggle = ({ style, children }) => {
  //In this example we are destructuring the style and children props as part of the function declaration
  const [on, setOn] = useState(false)
  //This boolean will determine if the children are shown or not
  return (
    <div style={style}>
      {on && children}
      // This will ensure that when our boolean is true, the component's children
      will be shown. The button below will be in charge of switching that boolean.
      <button onClick={() => setOn(!on)} style={style}>
        Show/Hide
      </button>
    </div>
  )
}

export default styleHoc(Toggle)
```

Now let's look at how we would use this component:

<summary><code>Hocs.js</code></summary>

```js
<ToggleRenderProps>
  <div>I am the children of ToggleRenderProps</div>
</ToggleRenderProps>
```

We can also use the render props pattern to pass a render method as props to our function. Let's look at what this will look like:

<summary><code>ToggleRenderProps.js</code></summary>

```js
import React, { useState } from 'react'
import styleHoc from './styleHoc'

const ToggleRenderProps = props => {
  const [on, setOn] = useState(false)
  const { style } = props
  //We set up our boolean just like in the first example.  The difference is below
  return <div>{props.render({ on, setOn, style })}</div>
  //We are telling our component that it will receive a function called render as a prop.  We will invoke that function and pass it an object containing on, setOn, and style as an argument.
}

export default styleHoc(ToggleRenderProps)

////////////////////////////////////

//We will use our component like this:

<ToggleRenderProps
  render={({ on, setOn, style }) => (
    //This function is the prop that we are passing to our ToggleRenderProps component.
    //Notice that it accepts an object with on, setOn, and style properties.  This is the object we provided above.
    <div>
      {on && <h1>Park your car, man.</h1>}
      <button style={style} onClick={() => setOn(!on)}>
        Show/Hide
      </button>
    </div>
    //We write our JSX as normal
  )}
/>
```

> NOTE: This pattern should be semi familiar to you as we see it in react router dom:

```js
<Route path='/:id' render={() => (
  <Switch>
    <Route path='/:id/dashboard' component={Dashboard}>
    <Route path='/:id/profile' component={Profile}>
  </Switch>
)}/>
```

We can combine both a pure render prop and `props.children` into a very dynamic component:

<summary><code>ToggleRPC.js</code></summary>

```js
import { useState } from 'react'
import styleHoc from './styleHoc'

const ToggleRPC = props => {
  const [on, setOn] = useState(false)
  const { children, style } = props
  return children({ on, setOn, style })
  //Notice our ToggleRPC component is expecting children to be a function.  This function will be provided when we use our component.  This basically gives us access to a boolean called on that we can use however we choose.
}

export default styleHoc(ToggleRPC)

//////////////////////////////
//Notice below that what is being passed as children is the function itself.  We still get access to our object containing on, setOn, and style.
<ToggleRPC>
  {({ on, setOn, style }) => (
    <div>
      {on && (
        <h1>
          I got an A on my origami assignment when I turned my paper into
          my teacher
        </h1>
      )}
      <button style={style} onClick={() => setOn(!on)}>
        Show/Hide
      </button>
    </div>
  )}
</ToggleRPC>
```

This pattern can be particularly confusing for students as it often incorporates arguments being passed across files so take some time to examine this code and internalize what is going on. If you are able to incorporate these three advanced patterns into your React code, you will be a much more efficient and effective developer. Here are some additional resources to help get a handle on these concepts.

## Additional Resources

### Documentation

[Hooks at a Glace | React docs](https://reactjs.org/docs/hooks-overview.html) - A great overall resource for understanding hooks and how they work in React

[Hooks API Reference | React docs](https://reactjs.org/docs/hooks-reference.html) - The official React documentation for hooks. Everything you need to know can be found here.

[Higher-Order Components | React docs](https://reactjs.org/docs/higher-order-components.html) - React's official reference on Higher Order Components. A good plain english explanation of what HOCS do.

[Render Props | React docs](https://reactjs.org/docs/render-props.html) - React's official reference on Render Props. An excellent breakdown of the benefits and use cases of render props.

### Articles

[Making Sense of React Hooks | Medium](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889) - An excellent article by Dan Abramov breaking down the reasons and use cases of hooks. It is HIGHLY recommended you read through this as it will greatly increase your understanding of hooks.

[Why React Hooks? | TylerMcginnis](https://tylermcginnis.com/why-react-hooks/) - An article breaking down the reasons for introducing hooks.

[React Hooks Tutorial | Valentino Gagliardi](https://www.valentinog.com/blog/hooks/) - A tutorial breaking down how to use hooks. Offers comparisons between class based components and functional components using hooks to demonstrate functionality.

[How to Use React Higher-Order Components | Medium](https://medium.com/@rossbulat/how-to-use-react-higher-order-components-c0be6821eb6c) - A great article breaking down a lot of different use cases for HOCS in React

[Understanding Render Props in React | Medium](https://medium.com/rayn-studios/understanding-render-props-in-react-7cf43a0f91fa) - A great article if you are having a hard time wrapping your head around the concept of render props.

### Videos

[Introducing React Hooks | Traversy Media](https://www.youtube.com/watch?v=mxK8b99iJTg) - Traversy Media's introduction to hooks in React

[React.js Hooks Crash Course | Academind](https://www.youtube.com/watch?v=-MlNBTSg_Ww) - A much more in depth exploration of hooks

[React Higher Order Components Tutorial | techsith](https://www.youtube.com/watch?v=A9_9gQIkfx4) - A tutorial of how to get started with React Higher Order Components

[React Render Props | Andre Madarang](https://www.youtube.com/watch?v=WAQeudhL1PA) - A video breaking down render props in React
