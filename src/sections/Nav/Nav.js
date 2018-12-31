import React, { Component } from 'react';
import styled from 'styled-components';
import DropdownMenu from '../../components/DropdownMenu/DropdownMenu';
import { Context } from '../../Provider';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Context.Consumer>
                {context => {
                    return (
                        <StyledNav>
                            <div className="dropdowns">
                            <DropdownMenu 
                                hover
                                color="blue"
                                header="FLEX-DIRECTION:"
                                handleSelectItem={(selected) => context.updateFlexDirection(selected)}
                                content={["row", "column", "row-reverse", 'column-revers']}
                            />
                            <DropdownMenu 
                                className="goto"
                                hover
                                color="blue"
                                handleSelectItem={(selected) => context.updateFlexDirection(selected)}
                                content={["row", "column", "row-reverse", 'column-revers']}
                            />
                            </div>
                        </StyledNav>
                    )
                }}
            </Context.Consumer>
        );
    }
}

export default Nav;

const StyledNav = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    padding: 10px 0;
    justify-content: space-around;
    background-color: white;

    margin-right: auto;
    margin-left: auto;
    border-bottom: 1px solid ${props => props.theme.background.dark};

    .dropdowns {
        display: flex;
        // background-color: red;
        max-width: 600px;
        width: 80%;
        justify-content: space-around;
        @media only screen and (max-width: 600px) {
            flex-direction: column;
            align-items: center;
          }
    }
   

    .goto {
        align-self: flex-end;
        @media only screen and (max-width: 600px) {
            align-self: center;
            margin-top: 10px;
          }
    }
`