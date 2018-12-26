import React, { Component } from 'react';

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
            parentProps: {
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                alignContent: "flex-start"
            }
         };
    }
    render() {
        return (
            <div>
                
            <PropertySectionContainer
                // content={["CC", "VV"]}
                // handleSelectItem={() => {}}
            />
                {/* {parentPropertyData.detail.map(prop => {
                    return (
                        <div key={prop.camelCaseTitle}>
                            {prop.kabobCaseTitle}
                            <div>
                                <ItemDisplay 
                                    
                                    justifyContent={this.state.parentProps[prop.camelCaseTitle]}
                                    
                                />
                            </div>
                        </div>
                    )
                })} */}
            </div>
        );
    }
}

export default ParentProperties;

