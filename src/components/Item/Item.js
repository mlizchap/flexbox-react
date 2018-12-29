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
            <StyledItem {...this.props}>{this.props.display}</StyledItem>
        );
    }
}

export default Item;

const StyledItem = styled.div`
    background-color: ${props => props.color};
    margin: 5px;
    padding: 0 15px;
    display: inline-block;
    width: ${props => props.width};;
    height: ${props => props.height};
    line-height: ${props => props.height};
    border-radius: 2px;
    order: ${props => props.order};
    align-self: ${props => props.alignSelf};
    flex-grow: ${props => props.flexGrow};
    flex-shrink: ${props => props.flexShrink};
    flex-basis: ${props => props.flexBasis};
`