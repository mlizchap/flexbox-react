import React, { Component } from 'react';
import styled from 'styled-components';

import DropdownMenu from '../DropdownMenu/DropdownMenu';

class SinglePropMobile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentLetter: "a"
         };
    }
    render() {
        return (
            <StyledChildCard letter={this.state.currentLetter}>
                <div className="letter">
                <DropdownMenu 
                    width="50px"
                    content={["a", "b", "c"]}
                    color="blue"
                    defaultDisplay="a"
                    handleSelectItem={(selected) => this.setState({ currentLetter: selected })}
                />
                </div>
                <div className="property">
                    <DropdownMenu 
                        hover
                        width="100px"
                        color="blue"
                        defaultDisplay={this.props.propValue[this.state.currentLetter]}
                        handleSelectItem={(selected) => this.props.changePropertyMobile(selected, this.state.currentLetter)}
                        {...this.props}
                    />
                </div>
            </StyledChildCard>
        );
    }
}

export default SinglePropMobile;

const StyledChildCard = styled.div`
    font-family: ${props => props.theme.font.main}
    width: 140px;
    background-color: ${props => props.theme.blue[props.letter].light};
    display: flex;
    flex-direction: column;
    padding: 15px;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 15px;
    margin-top: 10px;
    .property {
        line-height: 20px;
        margin-top: 15px;
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    .propTitle {
        line-height: 25px;
        padding-right: 5px;
        font-size: 10pt;
    }
`