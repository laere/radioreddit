import React, { Component } from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink';


const Navbar = () => {
  return (
    <header>
      <nav role="navigation row">
        <img src="http://radioreddit.com/images/logo.svg" alt="radio reddit" width="300px"/>
        <div className="mainNavbar">
          <NavLink header="About" />
          <NavLink header="Channels" />
          <NavLink header="Hot" />
          <NavLink header="Library" />
          <NavLink header="Upload" />
        </div>
        <div className="mainNavbarIcons">
          <i className="fa fa-search fa-lg"/>
          <i className="fa fa-user fa-lg"/>
          <button>Log In</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
