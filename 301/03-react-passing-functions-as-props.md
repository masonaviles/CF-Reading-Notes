# 03 React Passing Functions as Props

## React Docs - Lifting State Up
- lift state up to the parent so it can be passed down, just parent component handling state
- child commincates changes via the parent's callback function because children can't change state otherwise
- communicates via passing in props
- if a component is a child component that needs to get props from a parent component, it should be written as a (functional component (and not a class component)
- components can be written as either or but class components are unique in that they can handle state. function components recieve props syntaxtly easier (maybe?)

## React Docs - lists and keys
### Rendering Multiple Components
```
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);
```
```
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
```
### Basic List Component
```
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```
Let’s assign a key to our list items inside numbers.map() and fix the missing key issue.
```
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

### Keys

```
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
```
```
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```
it's not recommended to use index because the order of items may change thus would change their keys and that's no bueno
```
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);
```
### Extracting Components with Keys
```
function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

### Keys Must Only Be Unique Among Siblings
```
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
);
```

### Embedding map() in JSX

```
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
```
```
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}
```

## React Tutorial through ‘Declaring a Winner’

## The Spread Operator

The spread operator is a useful and quick syntax for adding items to arrays, combining arrays or objects, and spreading an array out into a function’s arguments.

“When ...arr is used in the function call, it ‘expands’ an iterable object arr into the list of arguments.” — JavaScript.info

```
Math.max(1,3,5) // 5
Math.max([1,3,5]) // NaN

Math.max(...[1,3,5]) // 5
```

- Copying an array
- Concatenating or combining arrays
- Using Math functions
- Using an array as arguments
- Adding an item to a list
- Adding to state in React
- Combining objects
- Converting NodeList to an array

```

[...["😋😛😜🤪😝"]] // Array [ "😋😛😜🤪😝" ]
[..."🙂🙃😉😊😇🥰😍🤩!"] // Array(9) [ "🙂", "🙃", "😉", "😊", "😇", "🥰", "😍", "🤩", "!" ]

const hello = {hello: "😋😛😜🤪😝"}
const world = {world: "🙂🙃😉😊😇🥰😍🤩!"}

const helloWorld = {...hello,...world}
console.log(helloWorld) // Object { hello: "😋😛😜🤪😝", world: "🙂🙃😉😊😇🥰😍🤩!" }
```

### Copying an array

```
const fruits = ['🍏','🍊','🍌','🍉','🍍']
const moreFruits = [...fruits];
console.log(moreFruits) // Array(5) [ "🍏", "🍊", "🍌", "🍉", "🍍" ]
fruits[0] = '🍑'
console.log(...[...fruits,'...',...moreFruits]) //  🍑 🍊 🍌 🍉 🍍 ... 🍏 🍊 🍌 🍉 🍍
```

### Concatenating arrays

```
const myArray = [`🤪`,`🐻`,`🎌`]
const yourArray = [`🙂`,`🤗`,`🤩`]
const ourArray = [...myArray,...yourArray]
console.log(...ourArray) // 🤪 🐻 🎌 🙂 🤗 🤩
```

### Using Math functions

```
const numbers = [37, -17, 7, 0]
console.log(Math.min(numbers)) // NaN
console.log(Math.min(...numbers)) // -17
console.log(Math.max(...numbers)) // 37
```

### Using an array as arguments

```
const fruitStand = ['🍏','🍊','🍌']
const sellFruit = (f1, f2, f3) => { console.log(`Fruits for sale: ${f1}, ${f2}, ${f3}`) }
sellFruit(...fruitStand) // Fruits for sale: 🍏, 🍊, 🍌
fruitStand.pop()
fruitStand.pop()
fruitStand.push('🍉')
fruitStand.push('🍍')
sellFruit(...fruitStand) // Fruits for sale: 🍏, 🍉, 🍍
fruitStand.pop()
fruitStand.pop()
sellFruit(...fruitStand,'🍋') // Fruits for sale: 🍏, 🍋, undefined
```

### Adding an item to a list

```
const fewFruit = ['🍏','🍊','🍌']
const fewMoreFruit = ['🍉', '🍍', ...fewFruit]
console.log(fewMoreFruit) //  Array(5) [ "🍉", "🍍", "🍏", "🍊", "🍌" ]
```

### Adding to state in React

```
import React, { useState } from "react"
import ReactDOM from "react-dom"

import "./styles.css"

function App() {
  // React Hooks declarations
  const [searches, setSearches] = useState([])
  const [query, setQuery] = useState("")

  const handleClick = () => {
    // Add the search term to the list onClick of Search button
    // (Actually searching would require an API call here)

    // Save search term state to React Hooks
    setSearches(searches => [...searches, query])
  }
  
  // ...
```

### Combining objects

```
const objectOne = {hello: "🤪"}
const objectTwo = {world: "🐻"}
const objectThree = {...objectOne, ...objectTwo, laugh: "😂"}
console.log(objectThree) // Object { hello: "🤪", world: "🐻", laugh: "😂" }
const objectFour = {...objectOne, ...objectTwo, laugh: () => {console.log("😂".repeat(5))}}
objectFour.laugh() // 😂😂😂😂😂
```

### Converting NodeList to Array

```
[...document.querySelectorAll('div')]
```

### The spread operator and older browsers

```
// Using Function.prototype.apply() instead of the spread operator
[1,3,5].min() // undefined
Math.min([1,3,5]) // NaN
Math.min().apply(null, [1,3,5]) // 1
Math.max().apply(null, [1,3,5]) // 5
```

### A note about copying by reference

```
const array = ['😉','😊','😇']
const copyWithEquals = array // Changes to array will change copyWithEquals
const copyWithSpread = [...array] // Changes to array will not change copyWithSpread

array[0] = '😡' // Whoops, a bug

console.log(...array) // 😡 😊 😇
console.log(...copyWithEquals) // 😡 😊 😇
console.log(...copyWithSpread) // 😉 😊 😇
```

### Watch out for the deeply-nested Gotcha!

```
const nestedArray = [['😉'],['😊'],['😇']]
const nestedCopyWithSpread = [...nestedArray] // The spread operator makes a shallow copy

nestedArray[0][0] = '😡' // Whoops, a bug

console.log(...nestedArray) // 😡 😊 😇
console.log(...nestedCopyWithSpread) // 😡 😊 😇

// A deep copy would require a library like lodash or Ramda's R.clone() method
```