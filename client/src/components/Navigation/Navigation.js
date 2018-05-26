import React from 'react';
import classes from './navigation.css';

const Navbar = (props) => {

  return (
    <div className={classes.NavBar}>
      <h1 className={classes.Title}> neighbors</h1>
      <div className={classes.Profile}>
        <i className={"fas fa-user-circle " + classes.ProfileImage }></i>
        <div className={classes.ProfileName}>{props.username}</div>
      </div>
    </div>
  )
}

export default Navbar;
