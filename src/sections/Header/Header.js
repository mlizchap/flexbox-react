import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <StyledHeader>
                FLEX BOX APP
            </StyledHeader>
        );
    }
}

export default Header;

const StyledHeader = styled.div`
    width: 100%;

    background-color: ${props => props.theme.background.dark};
    font-family: ${props => props.theme.font.title};
    font-size: 26pt;
    letter-spacing: .1rem;
    padding: 10px 0px;
    color: white;
`