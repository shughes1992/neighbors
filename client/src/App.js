import React, { Component } from 'react';
// import '../public/stylesheets/style.css'
import background from './components/assets/images/neighbors-2.jpg';
import NavBar from './components/Navigation/Navigation';
import ChatRoom from './components/layout/ChatRoom/ChatRoom';
import classes from './App.css';

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
        <NavBar name1="neighbors" name2="neighborhood"/>
        <ChatRoom chatHistory={this.state.chatHistory} activeUser={this.state.activeUser}/>
      </div>
    );
  }
}

export default App;
