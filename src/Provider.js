import React, { Component } from 'react';

export const Context = React.createContext();

class Provider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            flexDirection: "row",
            currentParentProp: "",
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
        this.setState({ 
            parentProps: {...this.state.parentProps, justifyContent: selected },
            
        })
    }
    changeAlignItems = (selected) => {
        console.log('slected', selected)
        this.setState({ parentProps: {...this.state.parentProps, alignItems: selected } })
    }
    changeAlignContent = (selected) => {
        this.setState({ 
            parentProps: {...this.state.parentProps, alignContent: selected, flexWrap: 'wrap' }
        })
    }
    changeFlexWrap = (selected) => {
        this.setState({ 
            parentProps: {...this.state.parentProps, flexWrap: selected }
        })
    }
    render() {
        return (
            <Context.Provider
                value={{
                    state: this.state,
                    updateFlexDirection: this.updateFlexDirection,
                    changeJustifyContent: this.changeJustifyContent,
                    changeAlignItems: this.changeAlignItems,
                    changeAlignContent: this.changeAlignContent,
                    changeFlexWrap: this.changeFlexWrap
                }}
            >
                {this.props.children}    
            </Context.Provider>
        );
    }
}

export default Provider;