import React, { Component } from 'react';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';
import '../../scss/main.scss';

export default class App extends Component {
  render() {
    return (
    <div>
      <Logo />
      <Navbar />
      {this.props.children}
    </div>
    );
  }
}
