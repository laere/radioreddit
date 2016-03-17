import React, { Component } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../../scss/main.scss';

export default class App extends Component {
  render() {
    return (
    <div>
      <Navbar />
      {this.props.children}
      <Footer />
    </div>
    );
  }
}
