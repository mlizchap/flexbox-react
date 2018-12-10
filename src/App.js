import React, { Component } from 'react';
import './App.css';
import ParentProperties from './sections/ParentProperties/ParentProperties';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';
import Header from './sections/Header/Header';
// import MultiHeaderDropDown from './components/MultiHeaderDropDown/MultiHeaderDropDown.js';
import MultiHeaderDropDown from './components/MultiHeaderDropDown/MultiHeaderDropDown';
import Navbar from './sections/Navbar/Navbar';
import VerticalBoxAxis from './components/VerticalBoxAxis/VerticalBoxAxis';
import HorizantalBoxAxis from './components/HorizantalBoxAxis/HorizantalBoxAxis';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        
        <HorizantalBoxAxis />
        <VerticalBoxAxis />
        <ParentProperties />
      </div>
    );
  }
}

export default App;
