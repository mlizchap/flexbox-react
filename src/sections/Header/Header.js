import React, { Component } from 'react';
import styled from 'styled-components';

import Navbar from '../Navbar/Navbar';
import Nav from '../Nav/Nav';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <StyledHeader>
                <span className="headerTitle">FLEX BOX APP</span>
                {/* <div className="sticky content">
                    <Navbar />
                </div> */}
            </StyledHeader>
        );
    }
}

export default Header;

const StyledHeader = styled.div`
    width: 100%;
    color: ${props => props.theme.background.dark};
    font-family: ${props => props.theme.font.title};
    letter-spacing: .1rem;
    padding-top: 15px;
    // color: white;
    .headerTitle {
        font-size: 22pt;
    }
`