import React, { Component } from 'react';
import Login from '../Login/Login';
import ChatRoom from '../ChatRoom/ChatRoom';
import NavBar from '../../Components/Navigation/Navigation';
import api from '../../utils/apiRequests';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import classes from './layout.css'
class Layout extends Component {
  state = {
    name: "Neigbors",
    authenticated: false,
    chatHistory: [],
    lat: 0,
    lng: 0,
    activeUser: 'mike'
  }

  componentWillMount() {
    // api.getMessages()
    // .then(response => {
    //   this.setState({
    //     chatHistory: response
    //   })
    // })
  }

  componentDidMount() {
    console.log(this.props.history)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {

    }
  }

  login = (activeUser) => {
    console.log(activeUser)
    console.log(this.props)
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
       var options = {timeout:60000};
       navigator.geolocation.getCurrentPosition(this.showLocation, this.errorHandler, options);
    } else {
       alert("Sorry, browser does not support geolocation!");
    }
  }
  render() {
    return (
      <div>
        <NavBar />
        <main className={classes.Main}>
          <Route path="/" exact render={props => <Login history={props.history} getGeoCoords={this.getGeoCoords} login={this.login}/>}/>
          <Route path="/chatRoom" exact render = {() => (
            <ChatRoom chatHistory={this.state.chatHistory} lat={this.state.lat} lng={this.state.lng} activeUser={this.state.activeUser} />
          )}/>
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}


// const mapStateToProps = state => {
//   return {
//     username: state.username,
//     password: state.password,
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     handleUsernameChange: (username) => dispatch(actionCreators.updateUsername(username)),
//     handlePasswordChange: (password) => dispatch(actionCreators.updatePassword(password)),
//     login: () => dispatch(actionCreators.userLogin())
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Login);
export default Layout;
