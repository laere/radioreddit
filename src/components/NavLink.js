import React, { Component } from 'react';

const NavLink = (props) => {
  return (
    <div className="navItem">
      <span>{props.header}</span>
    </div>
  );
};

NavLink.propTypes = {
  header: React.PropTypes.string,
  style: React.PropTypes.string
};

export default NavLink;
