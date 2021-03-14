// -----------------------------
// React: Elements
// elements: the smallest building blocks
// -----------------------------

// *** creating an element
// React.createElement() takes 3 arguments
// 1. type of element you want to create
// 2.an object with all properties wanted; can pass null 
// 3.children of the element you're creating)
const title = React.createElement(
  'h1',
  { id: 'main-title', title: 'This is a title.' },
  'My First React Element!'
);
console.log(title) // -> returns an object that represents/describes a dom node

// *** rendering an element

const title = React.createElement(
  'h1',
  { id: 'main-title', title: 'This is a title' },
  'My First React Element!'
);

const desc = React.createElement(
  'p',
  null,
  'I just learned how to create a React node and render it into the DOM.'
);

const header = React.createElement(
  'header',
  null,
  title,
  desc
);

// ReactDOM.render() -> creates and updates the DOM
// accepts 2 arguments
// 1. the js object(s) you'd like to render
// 2. the html tag you'd like to render to (the container element)
// render will replace whatever is already in the container
ReactDOM.render(
  header,
  document.getElementById('root')
);

// -----------------------------
// React: JSX
// an extension of the JS language that uses syntax that is similar to HTML
// -----------------------------

// *** example of JSX

// browsers can't read JSX and thus will need to be compiled (Babel, a build stack, etc)

const title = <h1>My First React Element!</h1>;
const desc = <p>I just learned how to create a React node and render it into the DOM.</p>;

// still returns objects, babel translates JSX to React.createElement

const header = React.createElement(
  'header',
  null,
  title,
  desc
);

ReactDOM.render(
  header,
  document.getElementById('root')
);

// *** example of embeded js expressions
// js expressions are wrapped in {} and can accept valid js, like variables and functions

const desc = 'I just learned how to create a React node and render it into the DOM.';
const myTitleID = 'main-title';
const name = 'Guil';

// className = css class attribute
const header = (
  <header>
    <h1 id={myTitleID}>{ name }'s First React Element!</h1> 
    <p className="main-desc">{ desc }</p>
  </header>
);

ReactDOM.render(
  header,
  document.getElementById('root')
);

// -----------------------------
// React: Components
// -----------------------------

// *** create a component
// 1. define the component as a function or class
// 2. display the component in the UI with a JSX tag

// components require a capital first letter
function Header() {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: 1</span>
    </header>
  );
}

ReactDOM.render(
  header,
  document.getElementById('root')
);

// *** use a component with JSX

function Header() {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: 1</span>
    </header>
  );
}

// user made component JSX indicated with the capital first letter (lowercase indicates an html tag in JSX)
// self containing JSX components have a self closing <Header />
// example of nested: <Header><Title><Header/>
ReactDOM.render(
  <Header />,
  document.getElementById('root')
);

// *** components as arrow functions

const Header = () => {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: 1</span>
    </header>
  );
}

// example of an implicit return if it just returns html tags
const Header = () =>
  <header>
    <h1>Scoreboard</h1>
    <span className="stats">Players: 1</span>
  </header>

ReactDOM.render(
  <Header />,
  document.getElementById('root')
);

// *** composing components

const Header = () => {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: 1</span>
    </header>
  );
}

// parent component of Counter, child of App component
const Player = () => {
  return (
    <div className="player">
      <span className="player-name">
        Guil
      </span>

      <Counter />
    </div>
  );
}

// child component of Parent
const Counter = () => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">35</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
}

// parent component of all the components
const App = () => {
  return (
    <div className="scoreboard">
      <Header />

      {/* Players list */}
      <Player />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// -----------------------------
// React: Properties (Props)
// props: a list of properties used to pass data to a component.
//        components are customized and made reuseable with props.
// -----------------------------

// *** setting and using props
// 1. define the props in a component's JSX tag
// 2. enable the use of props in a component

const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  );
}

const App = () => {
  return (
    <div className="scoreboard">
      <Header 
        title="Scoreboard" 
        totalPlayers={1} 
      />

      {/* Players list */}
      <Player />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// *** use props for reuseable components 
// separation of concerns

const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        {props.name}
      </span>

      <Counter score={props.score} />
    </div>
  );
}

const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{ props.score }</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
}

const App = () => {
  return (
    <div className="scoreboard">
      <Header 
        title="Scoreboard" 
        totalPlayers={1} 
      />

      {/* Players list */}
      <Player name="Guil" score={50} />
      <Player name="Treasure" score={90} />
      <Player name="Ashley" score={85} />
      <Player name="James" score={80} />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// *** using keys with props and arrays

const players = [
  {
    name: "Guil",
    score: 50,
    id: 1
  },
  {
    name: "Treasure",
    score: 85,
    id: 2
  },
  {
    name: "Ashley",
    score: 95,
    id: 3
  },
  {
    name: "James",
    score: 80,
    id: 4
  }
];

const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        { props.name }
      </span>

      <Counter score={props.score} />
    </div>
  );
}

const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{ props.score }</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
}

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header 
        title="Scoreboard" 
        totalPlayers={props.initialPlayers.length} 
      />

      {/* Players list */}
      {props.initialPlayers.map( player =>
        <Player 
          name={player.name}
          score={player.score}
          key={player.id.toString()}            
        />
      )}
    </div>
  );
}

ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById('root')
);

// -----------------------------
// React: State
// props are read-only
// dynamicly changed things use state
// -----------------------------

// *** create a component as a Class
// state is only available to Class Components
// class components, props are accessed with "this" -> this.props.score vs props.score 

class Counter extends React.Component {
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{ this.props.score }</span>
        <button className="counter-action increment"> + </button>
      </div>
    );
  }
}

// *** create a stateful component

// constructor() {
//   super()
//   this.state = {
//     score: 0
//   }
// }

class Counter extends React.Component {
  state = {
    score: 0
  };

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment"> + </button>
      </div>
    );
  }
}

// *** handling events

class Counter extends React.Component {
  state = {
    score: 0
  };

  incrementScore() {
    console.log('Hi, from inside incrementScore!');
  }

// react event handlers are inline ( onClick )
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}

// *** updating state

class Counter extends React.Component {
  state = {
    score: 0
  };

  // .setState -> react has to be told when state will be changed, will then re-render the component because state is changed
  incrementScore() {
    this.setState({
      score: this.state.score + 1
    });
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}

// *** bind event handlers to components

class Counter extends React.Component {
  state = {
    score: 0
  };

  // you need to bind your custom methods because of how class extends from React.Component
  // arrow function auto binds

  incrementScore = () => {
    this.setState({
      score: this.state.score + 1
    });
  }

  decrementScore = () => {
    this.setState({
      score: this.state.score - 1
    });
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }

  // another way to bind not using arrow functions

  incrementScore() {
    this.setState({
      score: this.state.score + 1
    });
  }

  decrementScore() {
    this.setState({
      score: this.state.score - 1
    });
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore.bind(this)}> - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
      </div>
    );
  }
}

// *** update state based on previous state

class Counter extends React.Component {
  state = {
    score: 0
  };

  incrementScore = () => {
    this.setState( prevState => ({
      score: prevState.score + 1
    }));
  }

  // this is the same as above but without the return {} and instead uses ()
  // incrementScore = () => {
  //   this.setState( prevState => {
  //     return {
  //       score: prevState.score + 1
  //     }
  //   });
  // }

  decrementScore = () => {
    this.setState( prevState => ({
      score: prevState.score - 1
    }));
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}

// ***  creating the application state

// two types of state
// 1. application state: data that is available to the entire application
// 2. local component state: state that is specific to a component and not shared outside of the component

class App extends React.Component {

  state = {
    players: [
      {
        name: "Guil",
        id: 1
      },
      {
        name: "Treasure",
        id: 2
      },
      {
        name: "Ashley",
        id: 3
      },
      {
        name: "James",
        id: 4
      }
    ]
  };

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalPlayers={this.state.players.length} 
        />
  
        {/* Players list */}
        {this.state.players.map( player =>
          <Player 
            name={player.name}
            key={player.id.toString()}            
          />
        )}
      </div>
    );
  }
}

// *** remove items from state

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
        { props.name }
      </span>

      <Counter />
    </div>
  );
}

class App extends React.Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1
      },
      {
        name: "Treasure",
        id: 2
      },
      {
        name: "Ashley",
        id: 3
      },
      {
        name: "James",
        id: 4
      }
    ]
  };

  // filters through array, and makes a new array with all the id's except the id passed into handleRemovePlayer
  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter( p => p.id !== id )
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalPlayers={this.state.players.length} 
        />
  
        {/* Players list */}
        {this.state.players.map( player =>
          <Player 
            name={player.name}
            id={player.id}
            key={player.id.toString()} 
            removePlayer={this.handleRemovePlayer}           
          />
        )}
      </div>
    );
  }
}