import React, { Component } from 'react';

class Login extends Component {


//Geolocatio prompt below

  state = {
    username: '',
    password: '',
    authenticated: false
  }
  componentWillMount() {
    console.log("PROPS: ", this.props)
    this.props.getGeoCoords()
  }

 errorHandler(err) {

    if(err.code == 1) {
       alert("Error: Access is denied!");
    } else if( err.code == 2) {
       alert("Error: Position is unavailable!");
    }
 }

 render() {
    return (
        <div>Login page</div>
    )

};
}


export default Login
