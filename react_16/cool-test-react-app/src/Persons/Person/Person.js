import React from 'react';
// import { Input } from 'reactstrap';

import classes from './Person.css';

const person = (props) => {
  const rand = Math.random();
  if (rand > 0.7) {
    throw new Error('Something went wrong!');
  }
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
}

export default person;