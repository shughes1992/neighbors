import React from 'react';
// import classes from './navigation.css';

const Navbar = (props) => {
  return (
    <div style={{ height: '10vh', width: '100%', backgroundColor: '#f46242', fontFamily: 'Georgia, serif', fontSize: '50px', color: 'white',  }}>

    <div className = "container">
      <div className = "navbar navbar-default">

          <div className="text-danger">{props.name1}</div>
          <div style={{ height: '15%', width: '100%', backgroundColor: '#f46242' }}> Neighbors
      </div>

      </div>
    </div>
    </div>
  )
}

export default Navbar;