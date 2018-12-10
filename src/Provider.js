import React, { Component } from 'react';

export const Context = React.createContext();

class Provider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         };
    }
    render() {
        return (
            <Context.Provider
            
            >
                {this.props.children}    
            </Context.Provider>
        );
    }
}

export default Provider;