import React, { Component } from 'react';
import styled from 'styled-components';

import DropdownMenu from '../DropdownMenu/DropdownMenu';

const letters = ["a", "b", "c"]

class SinglePropDesktop extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentLetter: "a"
         };
    }
    handleSelect = (selected, letter) => {
        console.log(selected, letter)
        this.props.changeOrder(selected, letter)
        this.props.changeAlignSelf(selected, letter)
    }
    render() {
        return (
            <StyledChildCardContainer>
                {(letters.map(letter => {
                    console.log("VALL", this.props.propValue[letter])
                    return (
                        <StyledChildCard letter={this.state.currentLetter} letterBgColor={letter}>
                        <div className="propTitle">{letter}</div>
                        <div className="property">
                            <DropdownMenu 
                                hover
                                width="100px"
                                color="blue"
                                defaultDisplay={this.props.propValue[letter]}
                                handleSelectItem={(selected) => this.handleSelect(selected, letter)}
                                {...this.props}
                            />
                        </div>
                        </StyledChildCard>
                    )

                }))}

            </StyledChildCardContainer>
        );
    }
}

export default SinglePropDesktop;

const StyledChildCardContainer = styled.div`
    display: flex;
`
const StyledChildCard = styled.div`
    font-family: ${props => props.theme.font.main}
    width: 100px;
    background-color: ${props => props.theme.blue[props.letterBgColor].light}
    display: flex;
    flex-direction: column;
    padding: 10px;
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