import React, { Component } from 'react';

const Input = (props) => {
  return (
    <div className={props.style}>
      <input type={props.type} value={props.text} placeholder={props.text}/>
    </div>
  );
};

export default Input;
