import React, { Component } from 'react';
import Mobile from './Mobile';
import Desktop from './Desktop';
import { Context } from '../../Provider';


class ChildCardMultiProps extends Component {
    render() {
        return (
            <Context.Consumer>
                {context => {
                    return (
                        <div>
                            {(context.state.isMobileWidth) ?  <Mobile {...this.props} /> : <Desktop {...this.props}/>}
                        </div>
                    )
                }}
            </Context.Consumer>
        );
    }
}

export default ChildCardMultiProps;