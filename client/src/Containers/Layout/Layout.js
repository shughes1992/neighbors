import React, { Component } from 'react';
import Login from '../Login/Login';
import ChatRoom from '../ChatRoom/ChatRoom';
import Navigation from '../../components/Navigation/Navigation';
import api from '../../utils/apiRequests';
import { Route } from 'react-router'
import { Link } from 'react-router-dom';
class Layout extends Component {
  state = {
    name: "Neigbors",
    authenticated: false,
    chatHistory: [],
    lat: 0,
    lng: 0,
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

  showLocation = (position) => {

    console.log("in show location")
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    this.setState({
      lat: latitude,
      lng: longitude
    })
  }

  getGeoCoords = () => {
    if(navigator.geolocation) {

       // timeout at 60000 milliseconds (60 seconds)
       var options = {timeout:60000};
       navigator.geolocation.getCurrentPosition(this.showLocation, this.errorHandler, options);
    } else {
       alert("Sorry, browser does not support geolocation!");
    }
  }
  render() {
    return (
      <div>
        <Navigation />
        <main>
          <Route path="/" exact render={() => <Login getGeoCoords={this.getGeoCoords}/>}/>
          <Route path="/chatRoom" exact render = {() => (
            <ChatRoom chatHistory={this.state.chatHistory} lat={this.state.lat} lng={this.state.lng} />
          )}/>
          <Link to="/chatRoom">Go to chatroom</Link>
        </main>
      </div>
    )
  }
}

export default Layout;
