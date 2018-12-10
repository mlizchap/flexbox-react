import React, { Component } from 'react';
import styled from 'styled-components';

class ItemContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <StyledContainer {...this.props}>
                {this.props.children}
            </StyledContainer>
        );
    }
}

export default ItemContainer;

const StyledContainer = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent};
    width: 50%;
    background-color: blue;
    margin-right: auto;
    margin-left: auto;
`