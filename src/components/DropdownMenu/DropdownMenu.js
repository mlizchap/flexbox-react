import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class DropdownMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selected: "",
            showContent: false
         };
         this.width = React.createRef();
    }
    toggleContent = () => {
        this.setState({ showContent: !this.state.showContent });
    }
    hideContent = () => {
        this.setState({ showContent: false })
    }
    itemSelect = (selected) => {
        this.setState({ selected })
        this.props.handleSelectItem(selected);
    }
    render() {
        return (
            <StyledDropDownMenu {...this.props} >
                <div onMouseLeave={this.hideContent}>
                    {(this.props.hasHeader) ? 
                    <span className="topHeader">{this.props.header.toUpperCase()}</span> : null }
                    <button className="toggleBtn" onClick={this.toggleContent} >
                        <div className="buttonDisplay">
                            <span className="text">{ this.state.selected || this.props.content[0] }</span>
                            <span className="arrow">&#9660;</span>
                        </div>
                    </button><br />
                    <div className="content" style={{ display: (this.state.showContent) ? "inline-block" : "none" }}>
                        {this.props.content.map(item => {
                            return (
                                <div 
                                    key={item} 
                                    className={(item === this.state.selected || !this.state.selected && item === this.props.content[0]) ? "selected item" : "notSelected item"}
                                    onClick={() => this.itemSelect(item)}
                                >
                                    {item}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </StyledDropDownMenu>
        );
    }
}

export default DropdownMenu;

DropdownMenu.PropTypes = {
    header: PropTypes.string,
    content: PropTypes.array,
    handleSelectItem: PropTypes.func,
    hasHeader: PropTypes.bool
}

const StyledDropDownMenu = styled.div`
    width: ${props => props.width || '200px'};
    background-color: blue;
    text-align: left;
    .topHeader {
        width: 80%;
        display: inline-block;
        background-color: ${props => props.theme.blue.dark};
        color: ${props => props.theme.blue.light};
        padding: 2px 0px;
        font-size: 10pt;
        font-family: ${props => props.theme.font.title};
        letter-spacing: .06rem;
    }
    .toggleBtn {
        width: ${props => props.width || '200px'};
        border: none;
        font-family: ${props => props.theme.font.main};
        padding: 5px;
        background-color: ${props => props.theme.blue.main};
        color: ${props => props.theme.blue.dark};
        font-size: 10pt;
        &:hover {
            cursor: pointer;
            background-color: ${props => props.theme.blue.hover};
        }
    }
    .buttonDisplay {

        display: flex;
    }
    .text {
        flex-grow: 1;
    }
    .content {
        width: ${props => props.width || '200px'};
        
        position: absolute;
        z-index: 100;
        font-size: 10pt;
        font-family: ${props => props.theme.font.main};
    }
    .item {

        padding: 5px;
    }
    .selected {
        background: #7a7c82;
        color: #a3a4a8;
    }
    .notSelected {
        background-color: ${props => props.theme.blue.light};
        color: ${props => props.theme.blue.dark};
        &:hover {
            background-color: ${props => props.theme.blue.highlight};
            color: ${props => props.theme.blue.light};
            cursor: pointer;
        }
    }
`