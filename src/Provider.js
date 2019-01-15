import React, { Component } from 'react';

export const Context = React.createContext();

class Provider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isMobileWidth: true,
            flexDirection: "row",
            currentParentProp: "",
            parentProps: {
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                alignContent: "flex-start"
            },
            childProps: {
                order: { a: 1, b: 1,  c: 1 },
                alignSelf: {a: 'flex-start', b: 'flex-start', c: 'flex-start'},
                flexGrow: {a: 0, b: 0, c: 0},
                flexShrink: { a: 1, b: 1,  c: 1 },
                flexBasis: {a: 'auto', b: 'auto', c: 'auto'}
            }
        };
    }
    updateDimensions = (windowSize) => {
        console.log(windowSize)
        if (windowSize < 800) {
            this.setState({ isMobileWidth: true })
        } else {
            this.setState({ isMobileWidth: false })
        }
    }    
    componentDidMount = () => {
        window.addEventListener("resize", () => this.updateDimensions(window.innerWidth) );
    }
    componentWillMount = () => {
        this.updateDimensions(window.innerWidth);
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
    changeOrder = (value, letter) => {
        this.setState({
            childProps: { ...this.state.childProps, order: {...this.state.childProps.order, [letter]: value }}
        })
    }
    changeAlignSelf = (value, letter) => {
        this.setState({
            childProps: { ...this.state.childProps, alignSelf: {...this.state.childProps.alignSelf, [letter]: value }}
        })
    }
    changeFlexGrow = (value, letter) => {
        console.log('slected', value, letter)
        this.setState({
            childProps: {...this.state.childProps, flexGrow: {...this.state.childProps.flexGrow, [letter]: Number(value)}}
        })
    }
    changeFlexShrink = (value, letter) => {
        this.setState({
            childProps: {...this.state.childProps, flexShrink: {...this.state.childProps.flexShrink, [letter]: value}}
        })
    }
    changeFlexBasis = (value, letter) => {
        this.setState({
            childProps: {...this.state.childProps, flexBasis: {...this.state.childProps.flexBasis, [letter]: value}}
        })
    }
    updateNavigation = (selected) => {
        
        window.location.href = `#${selected}`; 
        this.state.isMobileWidth ? window.scrollBy(0, -75) : window.scrollBy(0, -60);
        console.log(window.location.href)
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
                    changeFlexWrap: this.changeFlexWrap,
                    changeOrder: this.changeOrder,
                    changeAlignSelf: this.changeAlignSelf,
                    changeFlexGrow: this.changeFlexGrow,
                    changeFlexShrink: this.changeFlexShrink,
                    changeFlexBasis: this.changeFlexBasis,
                    updateNavigation: this.updateNavigation
                }}
            >
                {this.props.children}    
            </Context.Provider>
        );
    }
}

export default Provider;