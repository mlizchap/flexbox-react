import React, { Component } from 'react';
import styled from 'styled-components';

import ChildPropSectionContainer from '../../components/ChildPropSectionsConainer/ChildPropSectionsContainer';
import ChildItemContainer from '../../components/ChildItemContainer/ChildItemContainer';
import { Context } from '../../Provider';

class ChildProperties extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentLetter: "a"
         };
    }
    render() {
        return (
            <Context.Consumer>
                {context => {
                    return (
                        <StyledProperties isMobile={context.state.isMobileWidth}>
                            <span id="CHILD%20PROPERTIES" className="mainTitle">
                                <span className="titleText">CHILD PROPERTIES</span>
                            </span>
                            <div id="order">
                                <ChildPropSectionContainer 
                                    singleCard
                                    propName="order"
                                    content={[0, 1, 2, 3, 10, 'auto']}
                                    color="dark"
                                    title="order"
                                    propValue={context.state.childProps.order}
                                    changePropertyMobile={(val, letter) => context.changeOrder(val, letter)} 
                                    changeOrder = {(val, letter) => context.changeOrder(val, letter)}
                                    changeAlignSelf={() => {}}
                                    handleCurrentLetter={(letter) => this.setState({ currentLetter: letter})}
                                >
                                    <ChildItemContainer 
                                        ordera={context.state.childProps.order.a}
                                        orderb={context.state.childProps.order.b}
                                        orderc={context.state.childProps.order.c}
                                    />
                            </ChildPropSectionContainer>
                            </div>

                            <span id="align-self">
                                <ChildPropSectionContainer 
                                    singleCard
                                    propName="align-self"
                                    content={["flex-start", "flex-end", "center", "baseline", 'stretch']}
                                    color="dark"
                                    title="align-self"
                                    propValue={context.state.childProps.alignSelf}
                                    changePropertyMobile={(val, letter) => context.changeAlignSelf(val, letter)} 
                                    changeOrder={() => {}}
                                    changeAlignSelf={(val, letter) => context.changeAlignSelf(val, letter)}
                                    // handleSelectItem={(value) => context.changeAlignSelf(value, this.state.currentLetter)} 
                                    handleCurrentLetter={(letter) => this.setState({ currentLetter: letter})}
                                >
                                    <ChildItemContainer 
                                        alignSelfa={context.state.childProps.alignSelf.a}
                                        alignSelfb={context.state.childProps.alignSelf.b}
                                        alignSelfc={context.state.childProps.alignSelf.c}
                                    />
                                </ChildPropSectionContainer>
                            </span>

                            <span id="grow-shrink-basis">
                                <ChildPropSectionContainer 
                                    propName="grow | shrink | basis"
                                    color="dark"
                                    title="grow | shrink | basis"
                                    changeFlexGrow={(!context.state.isMobileWidth) ? (value, letter) => context.changeFlexGrow(value, letter) : (value) => context.changeFlexGrow(value, this.state.currentLetter)}
                                    changeFlexShrink={(!context.state.isMobileWidth) ? (value, letter) => context.changeFlexShrink(value, letter) : (value) => context.changeFlexShrink(value, this.state.currentLetter)}
                                    changeFlexBasis={(!context.state.isMobileWidth) ? (value, letter) => context.changeFlexBasis(value, letter) : (value) => context.changeFlexBasis(value, this.state.currentLetter)}
                                    handleCurrentLetter={(letter) => this.setState({ currentLetter: letter})}
                                    {...this.props}
                                >
                                    <ChildItemContainer 
                                        flexGrowa={context.state.childProps.flexGrow.a}
                                        flexGrowb={context.state.childProps.flexGrow.b}
                                        flexGrowc={context.state.childProps.flexGrow.c}
                                        
                                        flexShrinka={context.state.childProps.flexShrink.a}
                                        flexShrinkb={context.state.childProps.flexShrink.b}
                                        flexShrinkc={context.state.childProps.flexShrink.c}
                                        
                                        flexBasisa={context.state.childProps.flexBasis.a}
                                        flexBasisb={context.state.childProps.flexBasis.b}
                                        flexBasisc={context.state.childProps.flexBasis.c}
                                    />
                                </ChildPropSectionContainer>
                            </span>

                        </StyledProperties>
                    )
                }}
            </Context.Consumer>

        );
    }
}

export default ChildProperties;

const StyledProperties = styled.div`
    max-width: 500px;
    text-align: left;
    width: 90%;
    padding: 0 5%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 15px;
    text-align: ${props => props.isMobile ? `center` : `left`};
    background-color: ${props => props.theme.blue.background};
    border: ${props => !props.isMobile ? `1px solid ${props.theme.blue.mainTitle}` : null };
    .mainTitle {
        font-size: 20pt;
        color: ${props => props.theme.blue.mainTitle};
        font-family: ${props => props.theme.font.title};
        display: flex;
        padding: 10px 0px;
    }
    .titleText {
        margin-right: ${props => props.isMobile ? `auto` : null};
        margin-left: ${props => props.isMobile ? `auto` : null};
    }
`