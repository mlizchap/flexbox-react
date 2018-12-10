import React, { Component } from 'react';
import { Context } from '../../Provider';
import styled from 'styled-components';

class VericalBoxAxis extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Context.Consumer>
                {context => {
                    return (
                        <div>
                            <StyledVerticalAxis flexDirection={context.state.flexDirection} {...this.props}>
                                <div className="verticalAxisContent">
                                    {(context.state.flexDirection === "row" || context.state.flexDirection === "row-reverse") ?
                                        <span>CROSS AXIS</span> : <span>MAIN AXIS</span>
                                    }
                                </div>
                            </StyledVerticalAxis>
                        </div>
                    )
                }}
            </Context.Consumer>
        );
    }
}

export default VericalBoxAxis;

const StyledVerticalAxis = styled.div`
    background-color: ${props => (props.flexDirection === "column" || props.flexDirection === "column-reverse") ? props.theme.axis.mainLight :props.theme.axis.crossLight }
    color: ${props => (props.flexDirection === "column" || props.flexDirection === "column-reverse") ? props.theme.axis.mainDark : props.theme.axis.crossDark }
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