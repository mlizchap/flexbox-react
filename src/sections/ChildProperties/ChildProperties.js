import React, { Component } from 'react';

import ChildCardSingleProp from '../../components/ChildCardSingleProp/ChildCardSingleProp';

class ChildProperties extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentLetter: "a"
         };
    }
    render() {
        return (
            <div>
                <ChildCardSingleProp
                    propName="order:"
                    letter={this.state.currentLetter}
                    content={[1, 2, 3]} 
                    handleSelectItem={(selected) => this.setState({ currentLetter: selected })}
                    handleCurrentLetter={(currentLetter) => console.log(currentLetter)}
                />
            </div>
        );
    }
}

export default ChildProperties;