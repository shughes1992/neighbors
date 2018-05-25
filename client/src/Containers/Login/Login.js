import React, { Component } from 'react';
import classes from './Login.css';
// import MapContainer from '../Components/Map/Map'
import Button from '../../Components/UI/Button/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions'




class Login extends Component {
 render() {
    return (
      <div className={classes.LoginForm}>
        <form className={classes.Form}>
          <h3>Log in</h3>
          <input
            type="text"
            id="username"
            className={classes.InputField}
            value={this.props.username}
            placeholder="jaqueesedoe@mail.com"
            onChange={(event) => (this.props.handleUsernameChange(event.target.value))}
          />
          <input
            type="password"
            id="password"
            className={classes.InputField}
            value={this.props.password}
            placeholder="P@ssw0rd"
            onChange={event => (this.props.handlePasswordChange(event.target.value))}
          />
        </form>
        <Button clicked={this.login}>Log In</Button>
      </div>
    )

  };
}

const mapStateToProps = state => {
  return {
    username: state.username,
    password: state.password,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleUsernameChange: (username) => dispatch({type: actionTypes.UPDATE_USERNAME, username: username}),
    handlePasswordChange: (password) => dispatch({type: actionTypes.UPDATE_PASSWORD, password: password})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
