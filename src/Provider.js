import React, { Component } from 'react';

export const Context = React.createContext();

class Provider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            flexDirection: "row"
         };
    }
    updateFlexDirection = (selected) => {
        this.setState({ flexDirection: selected })
    }
    render() {
        return (
            <Context.Provider
                value={{
                    state: this.state,
                    updateFlexDirection: this.updateFlexDirection,
                }}
            >
                {this.props.children}    
            </Context.Provider>
        );
    }
}

export default Provider;