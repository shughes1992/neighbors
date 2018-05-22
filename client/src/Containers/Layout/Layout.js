import React, { Component } from 'react';
import Login from '../Login/Login';
import ChatRoom from '../ChatRoom/ChatRoom';
import Navigation from '../../components/Navigation/Navigation';
import api from '../../utils/apiRequests';
import { Route } from 'react-router'
class Layout extends Component {
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
      <div>
        <Navigation />
        <main>
          <Route path="/" exact component={Login}/>
          <Route path="/chatRoom" exact component={ChatRoom}/>
        </main>
      </div>
    )
  }
}

export default Layout;
