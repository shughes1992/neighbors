import React, { Component } from 'react';
import classes from './Login.css';
// import MapContainer from '../Components/Map/Map'
import Button from '../../Components/UI/Button/Button';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import * as actionTypes from '../../store/actions'
import * as actionCreators from '../../store/actions/loginActions'

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
            onChange={event => (this.props.handleUsernameChange(event.target.value))}
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
        <Button clicked={this.props.login}>Log In</Button>
      </div>
    )
  };
}

const mapStateToProps = state => {
  return {
    username: state.username,
    password: state.password,
    loggedIn: state.loggedIn,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleUsernameChange: (username) => dispatch(actionCreators.updateUsername(username)),
    handlePasswordChange: (password) => dispatch(actionCreators.updatePassword(password)),
    login: () => dispatch(actionCreators.userLogin())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
