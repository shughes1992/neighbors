import React, { Component } from 'react';
import classes from './Login.css';
// import MapContainer from '../Components/Map/Map'
import Button from '../../components/UI/Button/Button';

class Login extends Component {


//Geolocatio prompt below

  state = {
    username: "",
    password: "",
    activeUser: "",
    authenticated: false
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
      activeUser: this.state.username,
      authenticated: true
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
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

 getLocation() {


 }

 render() {
    return (
      <div className='container'>
      <div className={classes.LoginForm}>
        <form>
          <h3>Log in</h3>
          <input type="text" id="username" className={classes.Username} value={this.state.username} placeholder="jaqueesedoe@mail.com" onChange={this.handleChange}/>
          <input type="password" id="password" className={classes.Password} value={this.state.password} placeholder="P@ssw0rd" onChange={this.handleChange}/>
          <Button clicked={this.handleSubmit}>Log In</Button>
        </form>
      </div>
      </div>
    )

  };
}


export default Login