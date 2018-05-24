import React from 'react';
import classes from './navigation.css';

const Navbar = (props) => {
  return (
    <div className={classes.NavBar}>
      <div className="text-danger">{props.name1}</div>
      <div className={classes.Title}> neighbors
      </div>
    </div>
  )
}

export default Navbar;
