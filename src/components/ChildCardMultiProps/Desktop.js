import React, { Component } from 'react';
import styled from 'styled-components';

import DropdownMenu from '../DropdownMenu/DropdownMenu';

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
            <StyledChildCardContainer>
                {letters.map(letter => {
                    return (
                        <StyledChildCard letter={letter}>
                            <div>{letter}</div>
                            <div className="properties">
                                <div className="prop">
                                    <span>grow:</span>
                                    <DropdownMenu 
                                        hover
                                        width="50px"
                                        // color="dark"
                                        content={[0, 1, 2, 3, 4, 5]}
                                        //handleSelectItem={(val) => console.log(val, letter)}
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
    padding: 15px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 15px;
    margin-top: 10px;
    .properties {
        line-height: 20px;
        margin-top: 15px;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-right: auto;
        margin-left: auto;
        align-items: center;
    }
    .prop {
        font-size: 10pt;
        line-height: 25px;
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 5px;
        
    }
    .propTitle {
        line-height: 25px;
        padding-right: 5px;
        font-size: 10pt;
    }
`

const StyledChildCardContainer = styled.div`
    display: flex;
`