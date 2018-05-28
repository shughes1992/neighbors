import React from 'react';
import classes from './navigation.css';
import image from './logo.png'
import Avatar from '../Avatar/Avatar'
const Navbar = (props) => {

  return (
    <div className={classes.NavBar}>
      <h1 className={classes.Title}><img src={image} height="100px" /> neighbors</h1>
      <div className={classes.Profile}>
        <Avatar context='navbar' username={props.username}/>
      </div>
    </div>
  )
}

export default Navbar;
