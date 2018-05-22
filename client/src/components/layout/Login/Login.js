import React, { Component } from 'react';

class Login extends Component {


//Geolocatio prompt below

state = {
    lat: 0,
    lng: 0
  }


  componentWillMount() {

    this.getLocation()

  }

  showLocation = (position) => {

    console.log("in show location")
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    console.log(latitude, longitude)
    
    this.setState({
      lat: latitude,
      lng: longitude
    }) 
 }

 errorHandler(err) {

    if(err.code == 1) {
       alert("Error: Access is denied!");
    } else if( err.code == 2) {
       alert("Error: Position is unavailable!");
    }
 }

 getLocation() {

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
        <div />
    )
    
};
}


export default Login
