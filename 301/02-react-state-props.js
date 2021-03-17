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

// when you pass state properties from the parent to the child, the child accesses it via props while the parent uses this.state

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

// -----------------------------
// React: handling events
// -----------------------------
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

// -----------------------------
// React: conditional rendering
// -----------------------------

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

// ->

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);

//Element Variables

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

// ->

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);

//Inline If with Logical && Operator

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);

//&&

render() {
  const count = 0;
  return (
    <div>
      { count && <h1>Messages: {count}</h1>}
    </div>
  );
}

//Inline If-Else with Conditional Operator

render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}

render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn
        ? <LogoutButton onClick={this.handleLogoutClick} />
        : <LoginButton onClick={this.handleLoginClick} />
      }
    </div>
  );
}

//Preventing Component from Rendering

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);

// -----------------------------
// React: bootstrap
// -----------------------------



// -----------------------------
// Class Notes
// -----------------------------

// map functions and arrays

const arr = [4, 5, 3, 5, 24, 5];

// these are the same
const newArr1 = arr.map(x => Math.pow(x,2));

const newArr2 = arr.map(x => {
  return Math.pow(x,2);
})