import React, { Component } from 'react';
import NavLink from './NavLink';
import Logo from './Logo';
import Input from './Input';

const Navbar = () => {
  return (
    <header>
      <nav role="navigation">
        <Logo />
        <div className="mainNavbar">
          <NavLink header="About" />
          <NavLink header="Channels" />
          <NavLink header="Hot" />
          <NavLink header="Library" />
          <NavLink header="Upload" />
        </div>
        <Input style="mainNavbarSearchbar" type="text" text="Search..."/>
        <Input style="mainNavbarLogIn" type="submit" text="Log In" />
      </nav>
    </header>
  );
};

export default Navbar;
