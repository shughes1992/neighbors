import React, { Component } from 'react';
import classes from './Login.css';
// import MapContainer from '../Components/Map/Map'
import Button from '../../Components/UI/Button/Button';
import { Link } from 'react-router-dom';

class Login extends Component {

//Geolocatio prompt below

  state = {
    username: "",
    password: "",
    activeUser: "",
    authenticated: false
  }

  login = () => {
    // check username and password
    this.setState({
      authenticated: true
    })
    this.props.history.push('/chatRoom')
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
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
      <div className={classes.LoginForm}>
        <form className={classes.Form}>
          <h3>Log in</h3>
          <input type="text" id="username" className={classes.InputField} value={this.state.username} placeholder="jaqueesedoe@mail.com" onChange={this.handleChange}/>
          <input type="password" id="password" className={classes.InputField} value={this.state.password} placeholder="P@ssw0rd" onChange={this.handleChange}/>
        </form>
        <Button clicked={this.login}>Log In</Button>
      </div>
    )

  };
}


export default Login
