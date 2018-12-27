import React, { Component } from 'react';
import styled from 'styled-components';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = { 
             
         };
    }

    render() {
        return (
            <StyledItem {...this.props}>{this.props.letter}</StyledItem>
        );
    }
}

export default Item;

const StyledItem = styled.div`
    background-color: ${props => props.theme.green.item};
    margin: 5px;
    padding: 0 15px;
    display: inline-block;
    width: ${props => props.width};;
    height: ${props => props.height};
    line-height: ${props => props.height};
    border-radius: 2px;
`