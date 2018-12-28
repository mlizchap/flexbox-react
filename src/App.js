import React, { Component } from 'react';
import './App.css';
import ParentProperties from './sections/ParentProperties/ParentProperties';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';
import Header from './sections/Header/Header';
import Navbar from './sections/Navbar/Navbar';
import PropertySectionContainer from './components/PropertySectionContainer/PropertySectionContainer';
import ChildCardSingleProp from './components/ChildCardSingleProp/ChildCardSingleProp';
import ChildProperties from './sections/ChildProperties/ChildProperties';

class App extends Component {
  render() {
    return (
      <div className="App" style={{width: '100%'}}>
        <Header />
        <Navbar />
        
        <ChildProperties />

        <ParentProperties />
      </div>
    );
  }
}

export default App;
