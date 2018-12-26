import React, { Component } from 'react';
import DropdownMenu from '../../components/DropdownMenu/DropdownMenu';
import styled from 'styled-components';
import { Context } from '../../Provider';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Context.Consumer>
                {context => {
                    return (
                        <StyledNavbar>
                            <DropdownMenu 
                                header="FLEX-DIRECTION:"
                                handleSelectItem={(selected) => context.updateFlexDirection(selected)}
                                content={["row", "column", "row-reverse", 'column-revers']}
                            />
                        </StyledNavbar>
                    )
                }}
            </Context.Consumer>

        );
    }
}

export default Navbar;

const StyledNavbar = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 0;
    width: 80%;
    // background-color: yellow;
    margin-right: auto;
    margin-left: auto;
`