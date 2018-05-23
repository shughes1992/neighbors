import React from 'react';

const Navbar = (props) => {
  return (
    <div>
      <div className="text-danger">Navbar {props.name1}</div>
      <div>Navbar {props.name2}</div>
      <button id={props.name1} onClick={props.clicked}>click me!</button>
    </div>
  )
}

export default Navbar;