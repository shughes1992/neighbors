import React, { Component } from 'react';
// import '../public/stylesheets/style.css'
<<<<<<< HEAD
import background from './components/assets/images/neighbors-2.jpg'; 
import classes from './App.css';

const title={
  fontSize: "30px",
  textAlign: "center"
}
=======
import background from './components/assets/images/neighbors-2.jpg';
import NavBar from './components/Navigation/Navigation';
import ChatRoom from './components/layout/ChatRoom/ChatRoom';
import classes from './App.css';
>>>>>>> b1403b029003f1c9848e607c6b660c3444854993

class App extends Component {
  state = {
    name: "Neigbors",
    authenticated: false,
    chatHistory: [{user: 'user1', message: 'hello!'}, {user: 'user2', message: 'Oh hi there'}],
    activeUser: 'user1'
  }
  login = (event) => {
    console.log(event.target.id)
    this.setState({
      authenticated: true
    })
  }

  render() {
    return (
      <div className={classes.App}>
<<<<<<< HEAD

        <header className="App-header">
        <h1 style={title}>{this.state.name}</h1>

        {this.state.authenticated&&
        <img src={background} className="App-background" alt="neigborhood" style={{height: 700, opacity: 0.5}}/>

      }

        {!this.state.authenticated&&
          <div>
              <h2> Username: </h2>
              <input /> 
              <h2> Password: </h2>

              <input /> 
              <br />
              <br />

              <button onClick={()=>this.login()}> 
                Login
              </button>
              <button> 
                Sign Up
              </button>
          </div>
        }

        
        </header>

    
=======
        <NavBar name1="neighbors" name2="neighborhood"/>
        <ChatRoom chatHistory={this.state.chatHistory} activeUser={this.state.activeUser}/>
>>>>>>> b1403b029003f1c9848e607c6b660c3444854993
      </div>
    );
  }
}

export default App;
