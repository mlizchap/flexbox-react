import React, { Component } from 'react';
import Item from '../Item/Item';
import styled from 'styled-components';
import { Context } from '../../Provider';

class ItemContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            heights: [],
            widths: []
         };
    }
    componentDidMount = () => {
        this.setState({ 
            heights: Array.from({length: 10}, (_, i) => this.getRandomValue(20, 40)),
            widths: Array.from({length: 10}, (_, i) => this.getRandomValue(40, 100)),
        })
    }
    getRandomValue = (min,max) => {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    render() {
        console.log(this.state.heights[0])
        return (
            <Context.Consumer>
                {context => {
                    console.log(context.state.parentProps.justifyContent)
                    return (
                        <StyledItemContainer 
                            flexDirection={context.state.flexDirection}
                            justifyContent={context.state.parentProps.justifyContent}
                        >
                            <Item height={`${this.state.heights[0]}px`} width={`${this.state.widths[0]}px`} letter="a" />
                            <Item height={`${this.state.heights[1]}px`} width={`${this.state.widths[1]}px`} letter="b" />
                            <Item height={`${this.state.heights[2]}px`} width={`${this.state.widths[2]}px`} letter="c" />
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