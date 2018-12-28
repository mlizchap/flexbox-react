import React, { Component } from 'react';
import { Context } from '../../Provider';

import styled from 'styled-components';
import Item from '../../components/Item/Item';
import ItemContainer from '../../components/ItemContainer/ItemContainer';
import PropertySectionContainer from '../../components/PropertySectionContainer/PropertySectionContainer';

const ItemDisplay = (props) => {
    console.log(props)
    return (
        <ItemContainer {...props}>
            <Item />
            <Item />
            <Item />
        </ItemContainer>
    )
}



class ParentProperties extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        return (
            <Context.Consumer>
                {context => {
                    return (
                        <StyledProperties>
                            <span className="mainTitle">PARENT PROPERTIES</span>
                            <PropertySectionContainer
                                title="justify-content"
                                color="green"
                                contents={["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"]}
                                handleSelectItem={ (selected) => context.changeJustifyContent(selected) }
                            >
                                <ItemContainer justifyContent />
                            </PropertySectionContainer>

                            <PropertySectionContainer
                                title="align-items"
                                color="green"
                                contents={["flex-start", "flex-end", "center", "stretch", "baseline"]}
                                handleSelectItem={ (selected) => context.changeAlignItems(selected) }
                            >
                                <ItemContainer alignItems />
                            </PropertySectionContainer>

                            <PropertySectionContainer
                                title="align-content"
                                color="green"
                                contents={["flex-start", "flex-end", "center", "stretch", "space-between", "space-around"]}
                                handleSelectItem={ (selected) => context.changeAlignContent(selected) }
                            >
                                <ItemContainer alignContent itemAmount={8}/>
                            </PropertySectionContainer>


                            <PropertySectionContainer
                                title="flex-wrap"
                                color="green"
                                contents={["no-wrap", "wrap", "wrap-reverse"]}
                                handleSelectItem={ (selected) => context.changeFlexWrap(selected) }
                            >
                                <ItemContainer flexWrap itemAmount={8}/>
                            </PropertySectionContainer>


                            
                        </StyledProperties>
                    )
                }}
            </Context.Consumer>
        );
    }
}

export default ParentProperties;

const StyledProperties = styled.div`
    max-width: 500px;
    text-align: left;
    width: 90%;
    padding: 0 5%;
    margin-right: auto;
    margin-left: auto;
    background-color: ${props => props.theme.green.background};
    .mainTitle {
        // width: 80%;
        font-size: 20pt;
        color: ${props => props.theme.green.mainTitle};
        font-family: ${props => props.theme.font.title};
        font-weight: 800;
        display: flex;
        padding: 10px 0px;
        // background-color: orange;
        margin-right: auto;
        margin-left: auto;

    }
`

