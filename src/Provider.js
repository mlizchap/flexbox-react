import React, { Component } from 'react';

export const Context = React.createContext();

class Provider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            flexDirection: "row",
            parentProps: {
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                alignContent: "flex-start"
            }
         };
    }
    updateFlexDirection = (selected) => {
        this.setState({ flexDirection: selected })
    }
    changeJustifyContent = (selected) => {
        this.setState({ parentProps: {...this.state.parentProps, justifyContent: selected } })
    }
    render() {
        return (
            <Context.Provider
                value={{
                    state: this.state,
                    updateFlexDirection: this.updateFlexDirection,
                    changeJustifyContent: this.changeJustifyContent,
                }}
            >
                {this.props.children}    
            </Context.Provider>
        );
    }
}

export default Provider;