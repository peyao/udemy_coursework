import React from 'react';

const tooShortStyle = {
  color: 'red',
  fontWeight: 'bold',
};
const longEnoughStyle = {
  ...tooShortStyle,
  color: 'green',
};

const validationComponent = (props) => {
  const isTooShort = props.text.length < 5;
  if (isTooShort) {
    return <p style={tooShortStyle}>Text too short</p>;
  } else {
    return <p style={longEnoughStyle}>Text long enough</p>;
  }
}

export default validationComponent;