import React from 'react';
import classes from './navigation.css';
import image from './logo.png'
const Navbar = (props) => {

  return (
    <div className={classes.NavBar}>
      <h1 className={classes.Title}><img src={image} height="100px" /> neighbors</h1>
      <div className={classes.Profile}>
        <i className={"fas fa-user-circle " + classes.ProfileImage }></i>
        <div className={classes.ProfileName}>{props.username}</div>
      </div>
    </div>
  )
}

export default Navbar;
