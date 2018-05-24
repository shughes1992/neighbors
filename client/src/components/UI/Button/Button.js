import React from 'react';
import classes from './Button.css'

// because this component just renders some jsx we'll just return everything
// but where's the return statement!?
// notice the parenthesis surround the function instead of curly brackets
// this is shorthand for returning everything inside the function
const Button = (props) => (
  <button className={classes.Button} onClick={props.clicked}>{props.children}</button>
)

export default Button;
