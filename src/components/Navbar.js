import React, { Component } from 'react';

const Navbar = () => {
  return (
    <nav role="navigation">
      <div className="mainNavbar">
        <div className="navItem"><span>About</span></div>
        <div className="navItem"><span>Channels</span></div>
        <div className="navItem"> <span>Library</span></div>
        <div className="navItem"><span>Hot</span></div>
        <div className="navItem"><span>Upload</span></div>
      </div>
    </nav>
  );
};

export default Navbar;
