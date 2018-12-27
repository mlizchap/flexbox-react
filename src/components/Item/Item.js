import React, { Component } from 'react';
import styled from 'styled-components';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <StyledItem>a</StyledItem>
        );
    }
}

export default Item;

const StyledItem = styled.div`
    background-color: ${props => props.theme.green.item};
    margin: 5px;
    padding: 0 15px;
    display: inline-block;
    width: 5%;
    height: 15%;
`