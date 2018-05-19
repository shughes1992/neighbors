// import React, { Component } from 'react';
//
// // Class component
// class NavBar extends Component {
//   state = {
//
//   }
//
//   render () {
//     return (
//       <div>Navbar {this.props}</div>
//     )
//   }
// }
//
// export default NavBar;


// Functional component
import React from 'react';

const Navbar = (props) => {
  return (
    <div>
      <div>Navbar {props.name1}</div>
      <div>Navbar {props.name2}</div>
      <button id={props.name1} onClick={props.clicked}>click me!</button>
    </div>
  )
}

export default Navbar;
