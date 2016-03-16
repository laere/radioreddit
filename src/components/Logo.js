import React, { Component } from 'react';
import { Link } from 'react-router';

const Logo = () => {
  return (
    <div className="mainLogo">
      <Link to="about">
        <img src="http://radioreddit.com/images/logo.svg" alt="radio reddit" />
      </Link>
    </div>
  );
};

export default Logo;
