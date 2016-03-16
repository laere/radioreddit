import React, { Component } from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink';


const Navbar = () => {
  return (
    <header>
      <img src="http://radioreddit.com/images/logo.svg" alt="radio reddit" width="300px"/>
      <nav role="navigation" className="mainNavbar">
        <NavLink header="About" />
        <NavLink header="Channels" />
        <NavLink header="Hot" />
        <NavLink header="Library" />
        <NavLink header="Upload" />
      </nav>
      <div className="mainNavbarIcons">
        <i className="fa fa-search fa-lg"/>
        <i className="fa fa-user fa-lg"/>
        <button>Log In</button>
      </div>
    </header>
  );
};

export default Navbar;
