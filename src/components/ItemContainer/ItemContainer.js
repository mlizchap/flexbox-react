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
            heights: Array.from({length: 10}, (_, i) => this.getRandomValue(20, 30)),
            widths: Array.from({length: 10}, (_, i) => this.getRandomValue(15, 45)),
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
                    return (
                        <StyledItemContainer 
                            flexDirection={context.state.flexDirection}
                            justifyContent={(this.props.justifyContent) ? context.state.parentProps.justifyContent : 'flex-start'}
                            alignItems={(this.props.alignItems) ? context.state.parentProps.alignItems : 'flex-start'}
                            alignContent={(this.props.alignContent) ? context.state.parentProps.alignContent : 'flex-start'}
                            flexWrap={(this.props.flexWrap) ? context.state.parentProps.flexWrap : (this.props.alignContent) ? 'wrap' : 'nowrap' }
                        >
                            {Array.from({length: this.props.itemAmount || 3}, (_, i) => 
                                <Item height={`${this.state.heights[i]}px`} width={`${this.state.widths[i]}px`} display={i + 1} />)
                            }
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
    align-items: ${props => props.alignItems};
    align-content: ${props => props.alignContent};
    flex-wrap: ${props => props.flexWrap};
    overflow: scroll;

`