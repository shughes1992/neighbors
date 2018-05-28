import React from 'react';
import classes from './windowHeader.css'
const WindowHeader = (props) => {
  let style = {};
  if (props.position === "center") {
    style={textAlign: "center"}
  }
  return (
    <div className={classes.WindowHeader} style={style}>{props.children}</div>
  )
}

export default WindowHeader;
