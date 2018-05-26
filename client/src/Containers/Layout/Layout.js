import React, { Component } from 'react';
import Login from '../Login/Login';
import ChatRoom from '../ChatRoom/ChatRoom';
import NavBar from '../../Components/Navigation/Navigation';
import api from '../../utils/apiRequests';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/loginActions'
import classes from './layout.css';
class Layout extends Component {
  // get the user's location as soon as they go to the homepage
  componentWillMount() {
    this.getGeoCoords();
  }

  showLocation = (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    // dispatch action
    console.log("dispatching location action")
    this.props.submitLocation(lat, lng)
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
    location: state.location
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitLocation: (lat, lng) => dispatch(actionCreators.submitLocation(lat, lng))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
