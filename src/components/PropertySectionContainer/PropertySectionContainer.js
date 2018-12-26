import React, { Component } from 'react';
import styled from 'styled-components';
import { Context } from '../../Provider';

// import VerticalBoxAxis from '../VerticalBoxAxis/VerticalBoxAxis';
// import HorizantalBoxAxis from '../HorizantalBoxAxis/HorizantalBoxAxis';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

class PropertySectionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            flexDirection: ''
        };
    }
    render() {
        return (
            <Context.Consumer>
                {context => {
                    return (
                        <StyledPropertySectionContainer>
                            <div>title</div>
                            <div className="dropdown">
                                <DropdownMenu 
                                    // className="dropdown"
                                    // width="40%"
                                    header="test"
                                    content={["a", "b"]}
                                    hasHeader={false}
                                    handleSelectItem={(selected) => console.log(selected)}
                                    {...this.props}
                                />
                            </div>
                            <StyledHorizantalAxis flexDirection={context.state.flexDirection} {...this.props}>
                                <div className="horizantalAxisContent">
                                    {(context.state.flexDirection === "row" || context.state.flexDirection === "row-reverse") ?
                                        <span className="main">MAIN AXIS</span> : <span className="cross">CROSS AXIS</span>
                                    }
                                </div>
                            </StyledHorizantalAxis>

                            <StyledVerticalAxisAndItemContainer flexDirection={context.state.flexDirection} {...this.props}>
                                <div className="verticalAxisContent">
                                    {(context.state.flexDirection === "row" || context.state.flexDirection === "row-reverse") ?
                                        <span className="cross">CROSS AXIS</span> : <span className="main">MAIN AXIS</span>
                                    }
                                </div>
                                {this.props.children}
                            </StyledVerticalAxisAndItemContainer>
                        </StyledPropertySectionContainer>
                    )
                }}
            </Context.Consumer>
        );
    }
}

export default PropertySectionContainer;

const StyledPropertySectionContainer = styled.div`
    background-color: ${props => props.theme.background.dark};
    padding: 20px;
    text-align: center;
    width: 80%;

    margin-right: auto;
    margin-left: auto;
    .dropdown {
        background-color: purple;
        margin-right: auto;
        margin-left: auto;
        display: flex;
        justify-content: center;
        padding: 10px 0;
    }
`

const StyledHorizantalAxis = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: content;
    height: 100%;
    background: #65666D;
    z-index: 1;
    font-family: ${props => props.theme.font.title};
    .horizantalAxisContent {
        background-color: ${props => (props.flexDirection === "column" || props.flexDirection === "column-reverse") ? props.theme.axis.crossLight :props.theme.axis.mainLight }
        color: ${props => (props.flexDirection === "column" || props.flexDirection === "column-reverse") ? props.theme.axis.crossDark : props.theme.axis.mainDark }
        width: 100%;
    }
` 

const StyledVerticalAxisAndItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: content;
    height: 100%;
    background: #65666D;
    z-index: 1;
    font-family: ${props => props.theme.font.title};
    .verticalAxisContent {
        background-color: ${props => (props.flexDirection === "column" || props.flexDirection === "column-reverse") ? props.theme.axis.mainLight :props.theme.axis.crossLight }
        color: ${props => (props.flexDirection === "column" || props.flexDirection === "column-reverse") ? props.theme.axis.mainDark : props.theme.axis.crossDark }
        height: 150px;
        text-align: center;
        writing-mode: vertical-rl;
        text-orientation: mixed;
    }
`

