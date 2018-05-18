import React, { Component } from 'react';
// import '../public/stylesheets/style.css'
import background from './components/assets/images/neighbors-2.jpg';
import NavBar from './components/Navigation/Navigation'
import classes from './App.css';

class App extends Component {
  state = {
    name: "Neigbors",
    authenticated: false
  }
  login = (event) => {
    console.log(event.target.id)
    this.setState({
      authenticated: true
    })
  }

  render() {
    return (
      <div>
        <NavBar name1="neighbors" name2="neighborhood" clicked={this.login}/>
        <NavBar name1='sam' name2='mike' clicked={this.login}/>
      </div>
    );
  }
}

export default App;
