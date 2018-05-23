import React from 'react';

const userOutput = (props) => {

  const styles = {
    fontWeight: 'bold',
    color: 'red',
  };

  return (
    <div style={styles}>
      <p>{props.username}</p>
      <p>{props.username} loves tea and cake!</p>
    </div>
  );
};

export default userOutput;