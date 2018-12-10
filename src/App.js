import React, { Component } from 'react';
import './App.css';
import ParentProperties from './sections/ParentProperties/ParentProperties';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';
import Header from './sections/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div style={{ padding: '20px'}}>
          <DropdownMenu 
            header="fdas"
            handleSelectItem={(selected) => console.log(selected)}
            content={["a", "b", "c"]}
          />
        </div>
        <ParentProperties />
      </div>
    );
  }
}

export default App;
