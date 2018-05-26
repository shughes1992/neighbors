import React, { Component } from 'react';
import Login from '../Login/Login';
import ChatRoom from '../ChatRoom/ChatRoom';
import NavBar from '../../Components/Navigation/Navigation';
import api from '../../utils/apiRequests';
import { Route, withRouter } from 'react-router-dom';
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
          <Route path="/" exact component={Login}/>
          <Route path="/chatRoom" exact component = {ChatRoom} />
        </main>
      </div>
    )
  }
}

// store
const mapStateToProps = state => {
  return {
    location: state.loginReducer.location,
    loggedIn: state.loginReducer.loggedIn
  }
}

// dispatching actions
const mapDispatchToProps = dispatch => {
  return {
    submitLocation: (lat, lng) => dispatch(actionCreators.submitLocation(lat, lng))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
