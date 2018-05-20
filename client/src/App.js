import React, { Component } from 'react';
import background from './components/assets/images/neighbors-2.jpg';
import NavBar from './components/Navigation/Navigation';
import ChatRoom from './components/layout/ChatRoom/ChatRoom';
import classes from './App.css';
import api from './utils/apiRequests';

class App extends Component {
  state = {
    name: "Neigbors",
    authenticated: false,
    chatHistory: [],
    activeUser: 'user1'
  }

  componentWillMount(){
    api.getMessages()
    .then(response => {
      this.setState({
        chatHistory: response
      })
    })
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
