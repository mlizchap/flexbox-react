import React, { Component } from 'react';
import Item from '../Item/Item';
import styled from 'styled-components';
import { Context } from '../../Provider';

const colors = ["#91bbff", "#BFD4FF", "#BDDDFC"]

class ChildItemContainer extends Component {
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
        return (
            <Context.Consumer>
                {context => {
                    return (
                        <StyledItemContainer flexDirection={context.state.flexDirection} {...this.props}>
                            {Array.from({length: this.props.itemAmount || 3}, (_, i) => 
                                <Item 
                                    color={colors[i]}
                                    height={`${this.state.heights[i]}px`} 
                                    width={`${this.state.widths[i]}px`} 
                                    display={String.fromCharCode(97+i)} 
                                    order={this.props[`order${String.fromCharCode(97+i)}`]}
                                    alignSelf={this.props[`alignSelf${String.fromCharCode(97+i)}`]}
                                    flexGrow={ this.props[`flexGrow${String.fromCharCode(97+i)}`]}
                                    flexShrink={this.props[`flexShrink${String.fromCharCode(97+i)}`]}
                                    flexBasis={this.props[`flexBasis${String.fromCharCode(97+i)}`]}
                                    {...this.props} 
                                />)
                            }
                        </StyledItemContainer>
                    )
                }}
            </Context.Consumer>

        );
    }
}

export default ChildItemContainer;

const StyledItemContainer = styled.div`
    display: flex;
    height: 50px;
    line-height: 25px;
    height: 150px;
    width: 100%;
    overflow: scroll;
    flex-direction: ${props => props.flexDirection};
    // order: ${props => props.order}
`