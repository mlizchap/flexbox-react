import React, { Component } from 'react';
import { Context } from '../../Provider';

import {parentPropertyData} from '../../data';
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
                        <div>
                            <PropertySectionContainer
                                color="green"
                                title="justify-content"
                                contents={["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"]}
                                handleSelectItem={ (selected) => context.changeJustifyContent(selected) }
                            >
                                <ItemContainer />
                            </PropertySectionContainer>

                            <PropertySectionContainer
                                color="green"
                                title=""
                                contents={["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"]}
                                handleSelectItem={ (selected) => context.changeJustifyContent(selected) }
                            >
                                <ItemContainer />
                            </PropertySectionContainer>
                        </div>
                    )
                }}
            </Context.Consumer>
        );
    }
}

export default ParentProperties;

