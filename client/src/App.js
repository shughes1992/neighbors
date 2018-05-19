import React, { Component } from 'react';
// import '../public/stylesheets/style.css'
import background from './components/assets/images/neighbors-2.jpg'; 
import classes from './App.css';

const title={
  fontSize: "30px",
  textAlign: "center"
}

class App extends Component {

  constructor () {
    super() 
    this.state = {
      name: "Neigbors", 
      authenticated: false
    }
  }

login(){
  this.setState({
    authenticated: true
  })
}

  render() {
    return (
      <div className={classes.App}>

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

    
      </div>


    );
  }
}

export default App;
