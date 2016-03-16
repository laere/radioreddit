import React, { Component } from 'react';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <nav role="navigation">
      <div className="mainNavbar">
        <NavLink header="About" />
        <NavLink header="Channels" />
        <NavLink header="Hot" />
        <NavLink header="Library" />
        <NavLink header="Upload" />
        <div className="mainNavbarSearchbar">
          <input type="text" placeholder="Search..."/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
