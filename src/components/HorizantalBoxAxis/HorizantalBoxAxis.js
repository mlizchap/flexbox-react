import React, { Component } from 'react';
import { Context } from '../../Provider';
import styled from 'styled-components';

class HorizantalBoxAxis extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Context.Consumer>
                {context => {
                    console.log(context.state.flexDirection === "column" ? "YES" : "noe")
                    return (
                        <StyledHorizantalAxis flexDirection={context.state.flexDirection} {...this.props}>
                            <div className="horizantalAxisContent">
                                {(context.state.flexDirection === "row" || context.state.flexDirection === "row-reverse") ?
                                    <span>MAIN AXIS</span> : <span>CROSS AXIS</span>
                                }
                            
                            </div>
                        </StyledHorizantalAxis>
                    )
                }}
            </Context.Consumer>
        )
    }
}

export default HorizantalBoxAxis;

const StyledHorizantalAxis = styled.div`
    background-color: ${props => (props.flexDirection === "column" || props.flexDirection === "column-reverse") ? props.theme.axis.crossLight :props.theme.axis.mainLight}
    color: ${props => (props.flexDirection === "column" || props.flexDirection === "column-reverse") ? props.theme.axis.crossDark : props.theme.axis.mainDark}
    display: flex;
    flex-direction: row;
    flex-grow: content;
    height: 100%;
    z-index: 1;
    font-family: ${props => props.theme.font.title};
    .verticalAxisContent {
        text-align: center;
        padding-top: 5px;
        writing-mode: vertical-rl;
        text-orientation: mixed;
    }
`