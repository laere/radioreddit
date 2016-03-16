import React, { Component } from 'react';

const NavLink = (props) => {
  return (
    <div className="navItem">
      <span>{props.header}</span>
    </div>
  );
};

export default NavLink;
