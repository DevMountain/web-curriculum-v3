# Lesson Sections

Lecture slides: https://slides.com/dmweb/react-3

Mini Project: https://github.com/DevMountain/react-i-ii-review

Afternoon project: https://github.com/DevMountain/react-i-ii-afternoon

## Student Learning Objectives

<details open>
    <summary>React</summary>
    <ul>
        <li>Student understands when componentDidMount fires in the react lifecycle</li>
    </ul>
</details>

## React 3 Lecture Notes

#### The Component Lifecycle

The component lifecycle refers to the 'life' and 'death' of a component on the viewport. There are four main phases to a components lifecycle:

- Initialization - initialization of state and props for the component
- Mounting - mounting of the component to the viewport (rendering)
- Updating - updating of a components state or props, triggering a re-render
- Unmounting - unmounting of the component from the viewport

With components having this defined lifecycle, we are able to take advantage of it by using lifecycle methods to enrich our components functionality.

#### Lifecycle Methods

Lifecycle methods are part of the React library, and are readily available to class components. Lifecycle methods will be invoked at certain phases of the components lifecycle. While there are many lifecycle methods, some you may use often are:

- Render - required for class components, invokes during the mounting and updating phases
- componentDidMount - invokes just after the mounting phase
- componentDidUpdate - invokes during the updating phase

`render` is the only required lifecycle method for class components. It fires after the initialization of state and props, during the mounting phase, and then will re-invoke after any change to state or props, which is the updating phase.

```js
    render(){
        return (
            <div></div>
        )
    }
```

---

`componentDidMount` is a great method for getting data to your front-end as soon as the component loads on the viewport:

```js
    componentDidMount(){
        axios.get('https://swapi.co/api/people')
        .then(res => this.setState({people: res.data}))
        .catch(err => console.log(err));
    }
```

The above example would request the Star Wars api as soon as the component has finished rendering, and then set the data to state. Note that componentDidMount will only invoke after the first render of the component.

---

`componentDidUpdate` will be invoked during the updating phase of the lifecycle, meaning that it won't invoke after the first render of a component (componentDidMount invokes after the first render), but will invoke after each subsequent re-render of the component. componentDidUpdate is able to compare current state and props with previous state and props through passing the arguments prevState and prevProps. To avoid componentDidUpdate invoking infinitely, you often need to include a condition to the method (this is required if the functionality in your componentDidUpdate changes state or props.)

```js
    componentDidUpdate(prevProps, prevState){
        if(prevProps.people !== props.people){
            console.log('componentDidUpdate invoked')
        }
    }
```

# Additional Resources

- [React Docs - Components](https://reactjs.org/docs/react-component.html) - React documentation of the component lifecycle and available lifecycle methods.
- [Medium - Component Lifecycle](https://medium.com/@baphemot/understanding-reactjs-component-life-cycle-823a640b3e8d) - Medium article on the component lifecycle.
