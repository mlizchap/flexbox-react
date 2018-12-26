import React, { Component } from 'react';
import './App.css';
import ParentProperties from './sections/ParentProperties/ParentProperties';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';
import Header from './sections/Header/Header';
import Navbar from './sections/Navbar/Navbar';
import PropertySectionContainer from './components/PropertySectionContainer/PropertySectionContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        


        <ParentProperties />
      </div>
    );
  }
}

export default App;
