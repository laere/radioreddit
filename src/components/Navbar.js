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
      <div>
        <input className="mainNavbarSearch" type="text" placeholder="Search..." />
        <i className="fa fa-user fa-lg"/>
        <button className="mainNavbarLogin">Log In</button>
      </div>
    </header>
  );
};

export default Navbar;
