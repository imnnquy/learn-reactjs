# learn-reactjs
## Stuff
`webpack`, `babel`, `react`, `yarn`
## Setup
### Init yarn project
### Setup webpack
### Setup react project structure
### Add simple example


# Quick notes
## Props
### `Props` is an arbitrary inputs for React Component
`props` is read-only and passed to `Component` through attribute.
```
<Component name="abc">
```
This means `props.name= "abc"`
## State
### State is local value of Component and can be changed by `setState` method
## Lifecycle
### Mounting
These methods are called when an instance of a component is being created and inserted into the DOM:

```
constructor()
static getDerivedStateFromProps()
componentWillMount() / UNSAFE_componentWillMount()
render()
componentDidMount()
```
### Updating
An update can be caused by changes to props or state. These methods are called when a component is being re-rendered:

```
componentWillReceiveProps() / UNSAFE_componentWillReceiveProps()
static getDerivedStateFromProps()
shouldComponentUpdate()
componentWillUpdate() / UNSAFE_componentWillUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()
```
### Unmounting
This method is called when a component is being removed from the DOM:
```
componentWillUnmount()
```
### Error Handling
This method is called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
```
componentDidCatch()
```