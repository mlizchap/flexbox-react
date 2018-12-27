import React, { Component } from 'react';
import Item from '../Item/Item';
import styled from 'styled-components';
import { Context } from '../../Provider';

class ItemContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Context.Consumer>
                {context => {
                    console.log(context.state.parentProps.justifyContent)
                    return (
                        <StyledItemContainer 
                            flexDirection={context.state.flexDirection}
                            justifyContent={context.state.parentProps.justifyContent}
                        >
                            <Item />
                            <Item />
                            <Item />
                        </StyledItemContainer>
                    )
                }}
            </Context.Consumer>

        );
    }
}

export default ItemContainer;

const StyledItemContainer = styled.div`
    display: flex;
    height: 50px;
    line-height: 25px;
    height: 150px;
    width: 100%;
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
`