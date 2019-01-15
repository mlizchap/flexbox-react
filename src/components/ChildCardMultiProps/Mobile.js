import React, { Component } from 'react';
import styled from 'styled-components';

import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { Context } from '../../Provider';

class ChildCardMultiProps extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentLetter: "a"
         };
    }
    render() {
        return (
            <Context.Consumer>
                {context => {
                    return (
                        <StyledChildCard letter={this.state.currentLetter}>
                            <DropdownMenu 
                                width="50px"
                                content={["a", "b", "c"]}
                                color="blue"
                                handleSelectItem={(selected) => this.setState({ currentLetter: selected }, (selected) => this.props.handleCurrentLetter(this.state.currentLetter))}
                            />
                            <div className="properties">
                                <div className="prop">
                                    <span>grow:</span>
                                    <DropdownMenu 
                                        hover
                                        width="60px"
                                        color="blue"
                                        defaultDisplay={context.state.childProps.flexGrow[this.state.currentLetter]}
                                        content={[0, 1, 2, 3, 4, 5]}
                                        handleSelectItem={(value) => this.props.changeFlexGrow(value, this.state.currentLetter)}
                                        {...this.props}
                                    />
                                </div>
                                <div className="prop">
                                    <span>shrink:</span>
                                    <DropdownMenu 
                                        hover
                                        width="60px"
                                        color="blue"
                                        content={[0 ,1, 2, 3, 4, 5]}
                                        defaultDisplay={context.state.childProps.flexShrink[this.state.currentLetter]}
                                        handleSelectItem={(value) => this.props.changeFlexShrink(value, this.state.currentLetter)}
                                        {...this.props}
                                    />
                                </div>
                                <div className="prop">
                                    <span>basis:</span>
                                    <DropdownMenu 
                                        hover
                                        width="60px"
                                        color="blue"
                                        content={["20%", "33%", "40%", "60%", "auto"]}
                                        defaultDisplay={context.state.childProps.flexBasis[this.state.currentLetter]}
                                        handleSelectItem={(value) => this.props.changeFlexBasis(value, this.state.currentLetter)}
                                        {...this.props}
                                    />
                                </div>
            
                            </div>
                        </StyledChildCard>
        
                    )
                }}
            </Context.Consumer>
        );
    }
}

export default ChildCardMultiProps;

const StyledChildCard = styled.div`
    font-family: ${props => props.theme.font.main}
    width: 140px;
    background-color: ${props => props.theme.blue[props.letter].light};
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-bottom: 5px;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 10px;
    margin-top: 10px;
    .properties {
        line-height: 20px;
        margin-top: 10px;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-right: auto;
        margin-left: auto;
        align-items: center;
    }
    .prop {
        font-size: 10pt;
        display: flex;
        width: 80%;
        justify-content: space-between;
        // background-color: orange;
        margin-bottom: 5px;
        
    }
    .propTitle {
        line-height: 25px;
        padding-right: 5px;
        font-size: 10pt;
    }
`