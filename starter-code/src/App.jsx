import React, { Component } from 'react';

import Navbar from "./Navbar";
import Header from "./Header";
import Button from "./Button";

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <Header />
          <Button />
      </div>
    );
  }
}

export default App;