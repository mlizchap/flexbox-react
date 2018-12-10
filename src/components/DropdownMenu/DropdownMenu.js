import React, { Component } from 'react';
import styled from 'styled-components';

const test = ["a", "b", "c"]

class DropdownMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selected: "",
            showContent: false
         };
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
            <StyledDropDownMenu>
                <div onMouseLeave={this.hideContent}>
                    <div className="dropDownHeader">{this.props.header.toUpperCase()}</div>
                    <button className="toggleBtn" onClick={this.toggleContent}>
                        <div className="buttonDisplay">
                            <span className="text">{ this.state.selected || this.props.content[0] }</span>
                            <span className="arrow">&#9660;</span>
                        </div>
                    </button>
                    <div className="content" style={{ display: (this.state.showContent) ? "block" : "none" }}>
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

const StyledDropDownMenu = styled.div`
    width: 150px;
    .dropDownHeader {
        background-color: ${props => props.theme.blue.dark};
        color: ${props => props.theme.blue.light};
        padding: 3px;
        font-size: 10pt;
        font-family: ${props => props.theme.font.title};
        letter-spacing: .06rem;
    }
    .toggleBtn {
        width: 150px;
        border: none;
        // border-radius: 4px;
        font-family: ${props => props.theme.font.main};
        padding: 5px;
        background-color: ${props => props.theme.blue.main};
        color: ${props => props.theme.blue.dark};
        font-size: 12pt;
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
        position: absolute;
        width: 150px;
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