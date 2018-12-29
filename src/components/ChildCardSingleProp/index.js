import React, { Component } from 'react';
import SinglePropMobile from './SinglePropMobile';
import SinglePropDesktop from './SinglePropDesktop';
import { Context } from '../../Provider';


class ChildCardSingleProp extends Component {
    render() {
        return (
            <Context.Consumer>
                {context => {
                    return (
                        <div>
                            {/* <SinglePropMobile /> */}
                            {(context.state.isMobileWidth) ?  <SinglePropMobile {...this.props} /> : <SinglePropDesktop {...this.props} />}
                        </div>
                    )
                }}
            </Context.Consumer>
        );
    }
}

export default ChildCardSingleProp;

