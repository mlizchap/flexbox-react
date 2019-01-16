import React, { Component } from 'react';
import styled from 'styled-components';

import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { Context } from '../../Provider';

const letters = ["a", "b", "c"];

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
                    <StyledChildCardContainer>
                    {letters.map(letter => {
                        return (
                            <StyledChildCard letter={letter}>
                                <div className="propTitle">{letter}</div>
                                <div className="properties">
                                    <div className="prop">
                                        <span>grow:</span>
                                        <DropdownMenu 
                                            hover
                                            width="50px"
                                            content={[0, 1, 2, 3, 4, 5]}
                                            default={context.state.childProps.flexGrow[letter]}
                                            handleSelectItem={(value) => this.props.changeFlexGrow(value, letter)}
                                            {...this.props}
                                        />
                                        </div>
                                    <div className="prop">
                                        <span>shrink:</span>
                                        <DropdownMenu 
                                            hover
                                            width="50px"
                                            // color="dark"
                                            content={[0 ,1, 2, 3, 4, 5]}
                                            default={context.state.childProps.flexShrink[letter]}
                                            handleSelectItem={(value) => this.props.changeFlexShrink(value, letter)}
                                            {...this.props}
                                        />
                                    </div>
                                    <div className="prop">
                                        <span>basis:</span>
                                        <DropdownMenu 
                                            hover
                                            width="50px"
                                            // color="green"
                                            default={context.state.childProps.flexBasis[letter]}
                                            content={["20%", "33%", "40%", "60%", "auto"]}
                                            handleSelectItem={(value) => this.props.changeFlexBasis(value, letter)}
                                            {...this.props}
                                        />
                                    </div>
                                </div>
                            </StyledChildCard>
                        )
                    })}
                </StyledChildCardContainer>
            )
        }}
    </Context.Consumer>

            

        );
    }
}

export default ChildCardMultiProps;

const StyledChildCard = styled.div`
    font-family: ${props => props.theme.font.main}
    width: 100px;
    background-color: ${props => props.theme.blue[props.letter].light};
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    padding-top: 10px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 10px;
    margin-top: 10px;

    .properties {
        line-height: 20px;
        margin-top: 5px;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-right: auto;
        margin-left: auto;
        align-items: center;
    }
    .prop {
        font-size: 9pt;
        line-height: 25px;
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 5px;
        
    }
    .propTitle {
        background-color: white;
        font-family: ${props => props.theme.font.title}
        border-radius: 50%;
        width: 25px;
        height: 25px;
        line-height: 25px;
        font-size: 10pt;
        margin-right: auto;
        margin-left: auto;
    }
`

const StyledChildCardContainer = styled.div`
    display: flex;
`