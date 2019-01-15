import React, { Component } from 'react';
import './App.css';
import ParentProperties from './sections/ParentProperties/ParentProperties';
import Header from './sections/Header/Header';
import ChildProperties from './sections/ChildProperties/ChildProperties';
import Nav from './sections/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App" style={{width: '100%'}}>
        <Header />
        <Nav />    
        <div style={{marginTop: '25px'}}><ParentProperties /></div>
        <ChildProperties />
      </div>
    );
  }
}

export default App;
