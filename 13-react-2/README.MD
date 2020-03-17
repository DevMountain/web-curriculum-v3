# React Two

In this lecture we will go more in depth about data and how it flows in the React ecosystem.

Lecture Slides: https://slides.com/dmweb/react-2

Afternoon Project (Drills 1 - 7): https://github.com/devmountain/react-drills

# Student Learning Objectives

<details>
    <summary>React</summary>
    <ul>
        <li>Student can pass hard coded data via props</li>
        <li>Student can pass data from state via props</li>
        <li>Student can pass functions via props</li>
        <li>Student can bind functions</li>
        <li>Student understands they need to bind any function passed as a prop</li>
        <li>Student can access this.props in a child to get data from the parent</li>
        <li>Student can invoke a function from a parent that was passed via props</li>
        <li>Student can pass data back to a parent via a props function</li>
    </ul>
</details>

## Data Flow

React will handle its data using `unidirectional data flow`. This means that data is passed down from the top of the application to the bottom. We can determine what top and bottom are using our `component architecture` design.

We can use events to send data back up the `component tree`.

![DataFlow](images/dataflow.png)

Values from a components state or methods can be passed to a child component through `props`

## Props

Using props allow us to pass data from a parent component to a child component. We do this rendering a child component inside of our JSX then setting an attribute on the rendered component with the data that we want to pass as a value for the attribute.

### Passing Props From Parent Component

```javascript
import React from 'react'

// Import the child component
import ChildComponent from './ChildComponent'

class ParentComponent extends React.Component {
  constructor() {
    super()

    this.state = {
      name: 'Tayte',
    }
  }

  render() {
    return (
      <div>
        // Render the child component inside of the parents JSX // Apply props
        to it to pass the data
        <ChildComponent myName={this.state.name} />
      </div>
    )
  }
}

export default ParentComponent
```

### Receiving Props Functional Component

Receiving props as a `functional component` is different then how we receive them as a `class component`. In the functional component, we will need to set a parameter to allow us to receieve the `props` object as an argument. We can then access the data from that object.

Let's create the child component from the above example as a functional component:

```javascript
import React from 'react'

const ChildComponent = props => {
  // notice how we have a param set to receive the props object

  return (
    // We can then use this object to grab the prop from it
    <h1>My name is: {props.myName}</h1>
  )
}

export default ChildComponent
```

### Receiving Props Class Component

Receiving props as a `class component` is not the same as a functional component. We no longer need to set a parameter in any way to receive the `props` object. This object is actually built into the class component so we will access it through the class itself using the `this` keyword.

Let's create that same child componet but in class form:

```javascript
import React from 'react';

class ChildComponent extends React.Component {
    render(){
        return (
            // notice how we use the `this` keyword
            <h1>My name is: {this.props.myName}
        )
    }
}

export default ChildComponent;
```

### Passing Methods

We can also pass methods from one component to another component so that the functionality inside of the nested component can update the state of where that method was created.

When we pass methods we need to make sure that we `bind` them to the component they were created in.

In the constructor is where you want to bind your methods.

```javascript
import React from 'react'

class ParentComponent extends React.Component {
  constructor() {
    super()

    this.state = {
      name: 'Tayte',
    }

    // bind methods here
    this.changeName = this.changeName.bind(this)
  }

  changeName() {
    // use setState to update state values
    this.setState({
      name: 'Tayte V2',
    })
  }

  render() {
    return (
      <div>
        // we are now passing multiple props one from state and the other the
        method to update the state
        <ChildComponent myName={this.state.name} changeName={this.changeName} />
      </div>
    )
  }
}

class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>My name is: {this.props.myName}</h1>
        // use the method on the event of the button
        <button onClick={this.props.changeName}>Update Name</button>
      </div>
    )
  }
}

export default ChildComponent
```

# Additional Resources

## General

- [React Docs - Components and Props](https://reactjs.org/docs/components-and-props.html) - This is the official React.js documentation for using props

## Articles

- [Scriptverse - Passing props to functional components](https://scriptverse.academy/tutorials/reactjs-pass-props-to-functional-component.html) - This article describes the difference in passing props to a Class Component child and a Functional Component child.
- [Robin Wieruch - Passing props to a component](https://www.robinwieruch.de/react-pass-props-to-component) - In-depth article on passing props and overall data-flow in React. Also introduces Render Props, has a lot of great syntax to follow.
- [React Tutorial - Props](http://www.reactjstutorial.net/props.html) - Another great article that breaks down props in-depth for both functional and class components.

## Videos

- [The New Boston - Props tutorial](https://www.youtube.com/watch?v=i1PLMgtG5Qo) - This is a simple video tutorial about declaring props and accessing props in a class component.
- [LearnCode.academy - Props tutorial](https://www.youtube.com/watch?v=qh3dYM6Keuw) - This video breaks down passing props from a parent to a child and then on to a grandchild. It includes the context of state and also does a great job of describing and showing React's Virtual DOM
