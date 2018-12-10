import React, { Component } from 'react';
import styled from 'styled-components';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <StyledItem>item</StyledItem>
        );
    }
}

export default Item;

const StyledItem = styled.div`
    background-color: green;
    margin: 10px;
    padding: 10px;
    display: inline-block;
`