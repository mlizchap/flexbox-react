(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(34)},24:function(e,t,n){},26:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(10),o=n.n(i),c=n(6),l=(n(24),n(1)),s=n(2),u=n(4),f=n(3),p=n(5),h=(n(26),n(7)),d=n(9),m=n(8),g=a.a.createContext(),x=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(f.a)(t).call(this,e))).updateDimensions=function(e){console.log(e),e<800?n.setState({isMobileWidth:!0}):n.setState({isMobileWidth:!1})},n.componentDidMount=function(){window.addEventListener("resize",function(){return n.updateDimensions(window.innerWidth)})},n.componentWillMount=function(){n.updateDimensions(window.innerWidth)},n.updateFlexDirection=function(e){n.setState({flexDirection:e})},n.changeJustifyContent=function(e){n.setState({parentProps:Object(m.a)({},n.state.parentProps,{justifyContent:e})})},n.changeAlignItems=function(e){n.setState({parentProps:Object(m.a)({},n.state.parentProps,{alignItems:e})})},n.changeAlignContent=function(e){n.setState({parentProps:Object(m.a)({},n.state.parentProps,{alignContent:e,flexWrap:"wrap"})})},n.changeFlexWrap=function(e){n.setState({parentProps:Object(m.a)({},n.state.parentProps,{flexWrap:e})})},n.changeOrder=function(e,t){n.setState({childProps:Object(m.a)({},n.state.childProps,{order:Object(m.a)({},n.state.childProps.order,Object(d.a)({},t,e))})})},n.changeAlignSelf=function(e,t){n.setState({childProps:Object(m.a)({},n.state.childProps,{alignSelf:Object(m.a)({},n.state.childProps.alignSelf,Object(d.a)({},t,e))})})},n.changeFlexGrow=function(e,t){console.log("slected",e,t),n.setState({childProps:Object(m.a)({},n.state.childProps,{flexGrow:Object(m.a)({},n.state.childProps.flexGrow,Object(d.a)({},t,Number(e)))})})},n.changeFlexShrink=function(e,t){n.setState({childProps:Object(m.a)({},n.state.childProps,{flexShrink:Object(m.a)({},n.state.childProps.flexShrink,Object(d.a)({},t,e))})})},n.changeFlexBasis=function(e,t){n.setState({childProps:Object(m.a)({},n.state.childProps,{flexBasis:Object(m.a)({},n.state.childProps.flexBasis,Object(d.a)({},t,e))})})},n.updateNavigation=function(e){window.location.href="#".concat(e),n.state.isMobileWidth?window.scrollBy(0,-75):window.scrollBy(0,-60),console.log(window.location.href)},n.state={isMobileWidth:!0,flexDirection:"row",currentParentProp:"",parentProps:{justifyContent:"flex-start",alignItems:"flex-start",flexWrap:"nowrap",alignContent:"flex-start"},childProps:{order:{a:1,b:1,c:1},alignSelf:{a:"flex-start",b:"flex-start",c:"flex-start"},flexGrow:{a:0,b:0,c:0},flexShrink:{a:1,b:1,c:1},flexBasis:{a:"auto",b:"auto",c:"auto"}}},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(g.Provider,{value:{state:this.state,updateFlexDirection:this.updateFlexDirection,changeJustifyContent:this.changeJustifyContent,changeAlignItems:this.changeAlignItems,changeAlignContent:this.changeAlignContent,changeFlexWrap:this.changeFlexWrap,changeOrder:this.changeOrder,changeAlignSelf:this.changeAlignSelf,changeFlexGrow:this.changeFlexGrow,changeFlexShrink:this.changeFlexShrink,changeFlexBasis:this.changeFlexBasis,updateNavigation:this.updateNavigation}},this.props.children)}}]),t}(r.Component);function b(){var e=Object(h.a)(["\n    background-color: ",";\n    margin: 5px;\n    padding: 0 15px;\n    display: inline-block;\n    width: ",";;\n    height: ",";\n    line-height: ",";\n    border-radius: 2px;\n    order: ",";\n    align-self: ",";\n    flex-grow: ",";\n    flex-shrink: ",";\n    flex-basis: ",";\n"]);return b=function(){return e},e}var v=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(f.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(w,this.props,this.props.display)}}]),t}(r.Component),w=c.b.div(b(),function(e){return e.color},function(e){return e.width},function(e){return e.height},function(e){return e.height},function(e){return e.order},function(e){return e.alignSelf},function(e){return e.flexGrow},function(e){return e.flexShrink},function(e){return e.flexBasis});function O(){var e=Object(h.a)(["\n    display: flex;\n    height: 50px;\n    line-height: 25px;\n    height: 150px;\n    width: 100%;\n    flex-direction: ",";\n    justify-content: ",";\n    align-items: ",";\n    align-content: ",";\n    flex-wrap: ",";\n    overflow: scroll;\n\n"]);return O=function(){return e},e}var j=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(f.a)(t).call(this,e))).componentDidMount=function(){n.setState({heights:Array.from({length:10},function(e,t){return n.getRandomValue(20,30)}),widths:Array.from({length:10},function(e,t){return n.getRandomValue(15,30)})})},n.getRandomValue=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},n.state={heights:[],widths:[]},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(g.Consumer,null,function(t){return a.a.createElement(E,{flexDirection:t.state.flexDirection,justifyContent:e.props.justifyContent?t.state.parentProps.justifyContent:"flex-start",alignItems:e.props.alignItems?t.state.parentProps.alignItems:"flex-start",alignContent:e.props.alignContent?t.state.parentProps.alignContent:"flex-start",flexWrap:e.props.flexWrap?t.state.parentProps.flexWrap:e.props.alignContent?"wrap":"nowrap"},Array.from({length:e.props.itemAmount||3},function(t,n){return a.a.createElement(v,{color:"#d4fcee",height:"".concat(e.state.heights[n],"px"),width:"".concat(e.state.widths[n],"px"),display:n+1})}))})}}]),t}(r.Component),E=c.b.div(O(),function(e){return e.flexDirection},function(e){return e.justifyContent},function(e){return e.alignItems},function(e){return e.alignContent},function(e){return e.flexWrap});function y(){var e=Object(h.a)(["\n    width: ",";\n    // background-color: blue;\n    text-align: left;\n    .topHeader {\n        text-align: center;\n        width: 100%;\n        display: inline-block;\n        margin: 0;\n        background-color: white;\n        color: #424247;\n        font-size: 12pt;\n        padding: 2px 0px;\n        font-family: ",";\n        letter-spacing: .1rem;\n    }\n    .toggleBtn {\n        width: ",";\n        border: none;\n        font-family: ",";\n        padding: 3px;\n        background-color: ",";\n        color: ",";\n        \n        font-size: 10pt;\n        &:hover {\n            cursor: pointer;\n            background-color: ",";\n        }\n    }\n    .buttonDisplay {\n\n        display: flex;\n    }\n    .text {\n        font-size: ",";\n        flex-grow: 1;\n    }\n    .content {\n        width: ",";\n        \n        position: absolute;\n        z-index: 100;\n        font-size: 10pt;\n        font-family: ",";\n    }\n    .item {\n\n        padding: 5px;\n    }\n    .selected {\n        background: #a3a4a8;\n        color: #7a7c82;;\n    }\n    .notSelected {\n        background-color: ",";\n        color: ",";\n        &:hover {\n            background-color: ",";\n            cursor: pointer;\n        }\n    }\n"]);return y=function(){return e},e}var S=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(f.a)(t).call(this,e))).toggleContent=function(){n.setState({showContent:!n.state.showContent})},n.hideContent=function(){n.setState({showContent:!1})},n.itemSelect=function(e){n.setState({selected:e,currentSelected:e,showContent:!1}),n.props.handleSelectItem(e)},n.hoverItem=function(e){n.props.hover&&n.setState({currentSelected:n.state.selected},function(){return n.props.handleSelectItem(e)})},n.state={selected:"",currentSelected:"",showContent:!1},n.width=a.a.createRef(),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(k,this.props,a.a.createElement("div",{onMouseLeave:this.hideContent},this.props.header?a.a.createElement("span",{className:"topHeader"},this.props.header.toUpperCase()):null,a.a.createElement("button",{className:"toggleBtn",onClick:this.toggleContent},a.a.createElement("div",{className:"buttonDisplay"},a.a.createElement("span",{className:"text"},this.props.noDisplaySelected?this.props.defaultDisplay:this.state.selected||this.props.defaultDisplay||this.props.content[0]),a.a.createElement("span",{className:"arrow"},"\u25bc"))),a.a.createElement("br",null),a.a.createElement("div",{className:"content",style:{display:this.state.showContent?"inline-block":"none"},onMouseLeave:function(){return e.props.handleSelectItem(e.state.currentSelected)}},this.props.content.map(function(t){return a.a.createElement("div",{key:t,className:t!==e.state.selected&&(e.state.selected||t!==e.props.content[0])||e.props.noDisplaySelected?"notSelected item":"selected item",onClick:function(){return e.itemSelect(t)},onMouseEnter:function(){return e.hoverItem(t)}},t)}))))}}]),t}(r.Component),k=c.b.div(y(),function(e){return e.width||"150px"},function(e){return e.theme.font.title},function(e){return e.width||"150px"},function(e){return e.theme.font.title},function(e){return e.theme[e.color].main},function(e){return e.theme[e.color].dark},function(e){return e.theme[e.color].hover},function(e){return e.main?"14pt":"12pt"},function(e){return e.width||"150px"},function(e){return e.theme.font.main},function(e){return e.theme[e.color].light},function(e){return e.theme[e.color].dark},function(e){return e.theme[e.color].hover});function C(){var e=Object(h.a)(["\n    display: flex;\n    flex-direction: row;\n    flex-grow: content;\n    height: 100%;\n    background: #65666D;\n    z-index: 1;\n    font-family: ",";\n    .verticalAxisContent {\n        background-color: ","\n        color: ","\n        height: 150px;\n        text-align: center;\n        writing-mode: vertical-rl;\n        text-orientation: mixed;\n    }\n"]);return C=function(){return e},e}function D(){var e=Object(h.a)(["\n    display: flex;\n    flex-direction: row;\n    flex-grow: content;\n    height: 100%;\n    background: #65666D;\n    z-index: 1;\n    font-family: ",";\n    .horizantalAxisContent {\n        background-color: ","\n        color: ","\n        width: 100%;\n    }\n"]);return D=function(){return e},e}function P(){var e=Object(h.a)(["\n    background-color: ",";\n    padding: 20px;\n    text-align: center;\n    // width: 80%;\n    margin-bottom: 20px;\n    margin-right: auto;\n    margin-left: auto;\n\n    .title {\n        color: ",";\n        font-family: ",";\n        font-weight: bold;\n        letter-spacing: .3rem;\n    }\n    .dropdown {\n        margin-right: auto;\n        margin-left: auto;\n        display: flex;\n        justify-content: center;\n        padding: 10px 0;\n    }\n\n"]);return P=function(){return e},e}var N=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(f.a)(t).call(this,e))).state={flexDirection:""},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(g.Consumer,null,function(t){return a.a.createElement(I,e.props,a.a.createElement("div",{className:"title"},e.props.title),a.a.createElement("div",{className:"dropdown"},a.a.createElement(S,Object.assign({hover:!0,color:"green",content:e.props.contents,hasHeader:!1},e.props))),a.a.createElement(A,Object.assign({flexDirection:t.state.flexDirection},e.props),a.a.createElement("div",{className:"horizantalAxisContent"},"row"===t.state.flexDirection||"row-reverse"===t.state.flexDirection?a.a.createElement("span",{className:"main"},"MAIN AXIS"):a.a.createElement("span",{className:"cross"},"CROSS AXIS"))),a.a.createElement(L,Object.assign({flexDirection:t.state.flexDirection},e.props),a.a.createElement("div",{className:"verticalAxisContent"},"row"===t.state.flexDirection||"row-reverse"===t.state.flexDirection?a.a.createElement("span",{className:"cross"},"CROSS AXIS"):a.a.createElement("span",{className:"main"},"MAIN AXIS")),e.props.children))})}}]),t}(r.Component),I=c.b.div(P(),function(e){return e.theme.background.dark},function(e){return e.theme[e.color].title},function(e){return e.theme.font.main}),A=c.b.div(D(),function(e){return e.theme.font.title},function(e){return"column"===e.flexDirection||"column-reverse"===e.flexDirection?e.theme.axis.crossLight:e.theme.axis.mainLight},function(e){return"column"===e.flexDirection||"column-reverse"===e.flexDirection?e.theme.axis.crossDark:e.theme.axis.mainDark}),L=c.b.div(C(),function(e){return e.theme.font.title},function(e){return"column"===e.flexDirection||"column-reverse"===e.flexDirection?e.theme.axis.mainLight:e.theme.axis.crossLight},function(e){return"column"===e.flexDirection||"column-reverse"===e.flexDirection?e.theme.axis.mainDark:e.theme.axis.crossDark});function F(){var e=Object(h.a)(["    \n    max-width: 500px;\n    width: 90%;\n    padding: 0 5%;\n    margin-right: auto;\n    margin-left: auto;\n    border: ",";\n    background: ",";\n    .mainTitle {\n        // width: 80%;\n        font-size: 20pt;\n        color: ",";\n        font-family: ",";\n        display: flex;\n        padding: 10px 0px;\n        margin-right: auto;\n        margin-left: auto;\n        text-align: center;\n    }\n    .titleText {\n        margin-right: ",";\n        margin-left: ",";\n    }\n"]);return F=function(){return e},e}var M=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(f.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(g.Consumer,null,function(e){return a.a.createElement(B,{isMobile:e.state.isMobileWidth},a.a.createElement("span",{id:"PARENT%20PROPERTIES",className:"mainTitle"},a.a.createElement("span",{className:"titleText"},"PARENT PROPERTIES")),a.a.createElement("span",{id:"justify-content"},a.a.createElement(N,{title:"justify-content",color:"green",contents:["flex-start","flex-end","center","space-between","space-around","space-evenly"],handleSelectItem:function(t){return e.changeJustifyContent(t)}},a.a.createElement(j,{justifyContent:!0}))),a.a.createElement("span",{id:"align-items"},a.a.createElement(N,{title:"align-items",color:"green",contents:["flex-start","flex-end","center","stretch","baseline"],handleSelectItem:function(t){return e.changeAlignItems(t)}},a.a.createElement(j,{alignItems:!0}))),a.a.createElement("span",{id:"align-content"},a.a.createElement(N,{title:"align-content",color:"green",contents:["flex-start","flex-end","center","stretch","space-between","space-around"],handleSelectItem:function(t){return e.changeAlignContent(t)}},a.a.createElement(j,{alignContent:!0,itemAmount:8}))),a.a.createElement("span",{id:"flex-wrap"},a.a.createElement(N,{title:"flex-wrap",color:"green",contents:["no-wrap","wrap","wrap-reverse"],handleSelectItem:function(t){return e.changeFlexWrap(t)}},a.a.createElement(j,{flexWrap:!0,itemAmount:8}))))})}}]),t}(r.Component),B=c.b.div(F(),function(e){return e.isMobile?null:"1px solid ".concat(e.theme.green.mainTitle)},function(e){return e.theme.green.background},function(e){return e.theme.green.mainTitle},function(e){return e.theme.font.title},function(e){return e.isMobile?"auto":null},function(e){return e.isMobile?"auto":null});function T(){var e=Object(h.a)(["\n    display: flex;\n    justify-content: center;\n    padding: 10px 0;\n    margin-right: auto;\n    margin-left: auto;\n\n    position: sticky;\n    top: 0;\n    width: 100%;\n    background-color: orange;\n"]);return T=function(){return e},e}r.Component;var W=c.b.div(T());function R(){var e=Object(h.a)(["\n    position: sticky;\n    top: 0;\n    display: flex;\n    padding: 10px 0;\n    justify-content: space-around;\n    background-color: white;\n    \n    margin-right: auto;\n    margin-left: auto;\n    border-bottom: 1px solid ",";\n\n    .dropdowns {\n        display: flex;\n        max-width: 600px;\n        width: 80%;\n        justify-content: space-around;\n        @media only screen and (max-width: 600px) {\n            flex-direction: column;\n            align-items: center;\n          }\n    }\n   \n\n    .goto {\n        align-self: flex-end;\n        @media only screen and (max-width: 600px) {\n            align-self: center;\n            margin-top: 10px;\n          }\n    }\n"]);return R=function(){return e},e}var G=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(f.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(g.Consumer,null,function(e){return a.a.createElement(z,null,a.a.createElement("div",{className:"dropdowns"},a.a.createElement(S,{main:!0,hover:!0,color:"purple",header:e.state.isMobileWidth?null:"FLEX-DIRECTION",handleSelectItem:function(t){return e.updateFlexDirection(t)},content:["row","column","row-reverse","column-reverse"]}),a.a.createElement(S,{main:!0,className:"goto",color:"purple",header:e.state.isMobileWidth?null:"NAVIGATION",handleSelectItem:function(t){return e.updateNavigation(t)},noDisplaySelected:!0,defaultDisplay:"Go To:",content:["PARENT PROPERTIES","justify-content","align-items","align-content","flex-wrap","CHILD PROPERTIES","order","align-self","grow-shrink-basis"]})))})}}]),t}(r.Component),z=c.b.div(R(),function(e){return e.theme.background.dark});function V(){var e=Object(h.a)(["\n    width: 100%;\n    color: ",";\n    font-family: ",";\n    letter-spacing: .1rem;\n    padding-top: 15px;\n    // color: white;\n    .headerTitle {\n        font-size: 22pt;\n    }\n"]);return V=function(){return e},e}var X=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(f.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(H,null,a.a.createElement("span",{className:"headerTitle"},"FLEX BOX APP"))}}]),t}(r.Component),H=c.b.div(V(),function(e){return e.theme.background.dark},function(e){return e.theme.font.title});function J(){var e=Object(h.a)(["\n    font-family: ","\n    width: 140px;\n    background-color: ",";\n    display: flex;\n    flex-direction: column;\n    padding: 15px;\n    align-items: center;\n    margin-right: auto;\n    margin-left: auto;\n    margin-bottom: 15px;\n    margin-top: 10px;\n    .property {\n        line-height: 20px;\n        margin-top: 15px;\n        width: 100%;\n        display: flex;\n        justify-content: space-around;\n    }\n    .propTitle {\n        line-height: 25px;\n        padding-right: 5px;\n        font-size: 10pt;\n    }\n"]);return J=function(){return e},e}var U=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(f.a)(t).call(this,e))).state={currentLetter:"a"},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement($,{letter:this.state.currentLetter},a.a.createElement("div",{className:"letter"},a.a.createElement(S,{width:"50px",content:["a","b","c"],color:"blue",defaultDisplay:"a",handleSelectItem:function(t){return e.setState({currentLetter:t})}})),a.a.createElement("div",{className:"property"},a.a.createElement(S,Object.assign({hover:!0,width:"100px",color:"blue",defaultDisplay:this.props.propValue[this.state.currentLetter],handleSelectItem:function(t){return e.props.changePropertyMobile(t,e.state.currentLetter)}},this.props))))}}]),t}(r.Component),$=c.b.div(J(),function(e){return e.theme.font.main},function(e){return e.theme.blue[e.letter].light});function q(){var e=Object(h.a)(["\n    font-family: ","\n    width: 100px;\n    background-color: ","\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    align-items: center;\n    margin-right: auto;\n    margin-left: auto;\n    margin-bottom: 15px;\n    margin-top: 10px;\n    .property {\n        line-height: 20px;\n        margin-top: 15px;\n        width: 100%;\n        display: flex;\n        justify-content: space-around;\n    }\n    .propTitle {\n        background-color: white;\n        font-family: ","\n        border-radius: 50%;\n        width: 25px;\n        height: 25px;\n        line-height: 25px;\n        font-size: 10pt;\n        margin-right: auto;\n        margin-left: auto;\n    }\n"]);return q=function(){return e},e}function K(){var e=Object(h.a)(["\n    display: flex;\n"]);return K=function(){return e},e}var Q=["a","b","c"],Y=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(f.a)(t).call(this,e))).handleSelect=function(e,t){console.log(e,t),n.props.changeOrder(e,t),n.props.changeAlignSelf(e,t)},n.state={currentLetter:"a"},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(Z,null,Q.map(function(t){return console.log("VALL",e.props.propValue[t]),a.a.createElement(_,{letter:e.state.currentLetter,letterBgColor:t},a.a.createElement("div",{className:"propTitle"},t),a.a.createElement("div",{className:"property"},a.a.createElement(S,Object.assign({hover:!0,width:"100px",color:"blue",defaultDisplay:e.props.propValue[t],handleSelectItem:function(n){return e.handleSelect(n,t)}},e.props))))}))}}]),t}(r.Component),Z=c.b.div(K()),_=c.b.div(q(),function(e){return e.theme.font.main},function(e){return e.theme.blue[e.letterBgColor].light},function(e){return e.theme.font.title}),ee=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(g.Consumer,null,function(t){return a.a.createElement("div",null,t.state.isMobileWidth?a.a.createElement(U,e.props):a.a.createElement(Y,e.props))})}}]),t}(r.Component);function te(){var e=Object(h.a)(["\n    font-family: ","\n    width: 140px;\n    background-color: ",";\n    display: flex;\n    flex-direction: column;\n    padding-top: 10px;\n    padding-bottom: 5px;\n    align-items: center;\n    margin-right: auto;\n    margin-left: auto;\n    margin-bottom: 10px;\n    margin-top: 10px;\n    .properties {\n        line-height: 20px;\n        margin-top: 10px;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        margin-right: auto;\n        margin-left: auto;\n        align-items: center;\n    }\n    .prop {\n        font-size: 10pt;\n        display: flex;\n        width: 80%;\n        justify-content: space-between;\n        // background-color: orange;\n        margin-bottom: 5px;\n        \n    }\n    .propTitle {\n        line-height: 25px;\n        padding-right: 5px;\n        font-size: 10pt;\n    }\n"]);return te=function(){return e},e}var ne=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(f.a)(t).call(this,e))).state={currentLetter:"a"},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(g.Consumer,null,function(t){return a.a.createElement(re,{letter:e.state.currentLetter},a.a.createElement(S,{width:"50px",content:["a","b","c"],color:"blue",handleSelectItem:function(t){return e.setState({currentLetter:t},function(t){return e.props.handleCurrentLetter(e.state.currentLetter)})}}),a.a.createElement("div",{className:"properties"},a.a.createElement("div",{className:"prop"},a.a.createElement("span",null,"grow:"),a.a.createElement(S,Object.assign({hover:!0,width:"60px",color:"blue",defaultDisplay:t.state.childProps.flexGrow[e.state.currentLetter],content:[0,1,2,3,4,5],handleSelectItem:function(t){return e.props.changeFlexGrow(t,e.state.currentLetter)}},e.props))),a.a.createElement("div",{className:"prop"},a.a.createElement("span",null,"shrink:"),a.a.createElement(S,Object.assign({hover:!0,width:"60px",color:"blue",content:[0,1,2,3,4,5],defaultDisplay:t.state.childProps.flexShrink[e.state.currentLetter],handleSelectItem:function(t){return e.props.changeFlexShrink(t,e.state.currentLetter)}},e.props))),a.a.createElement("div",{className:"prop"},a.a.createElement("span",null,"basis:"),a.a.createElement(S,Object.assign({hover:!0,width:"60px",color:"blue",content:["20%","33%","40%","60%","auto"],defaultDisplay:t.state.childProps.flexBasis[e.state.currentLetter],handleSelectItem:function(t){return e.props.changeFlexBasis(t,e.state.currentLetter)}},e.props)))))})}}]),t}(r.Component),re=c.b.div(te(),function(e){return e.theme.font.main},function(e){return e.theme.blue[e.letter].light});function ae(){var e=Object(h.a)(["\n    display: flex;\n"]);return ae=function(){return e},e}function ie(){var e=Object(h.a)(["\n    font-family: ","\n    width: 100px;\n    background-color: ",";\n    display: flex;\n    flex-direction: column;\n    padding: 5px 10px;\n    padding-top: 10px;\n    margin-right: auto;\n    margin-left: auto;\n    margin-bottom: 10px;\n    margin-top: 10px;\n\n    .properties {\n        line-height: 20px;\n        margin-top: 5px;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        margin-right: auto;\n        margin-left: auto;\n        align-items: center;\n    }\n    .prop {\n        font-size: 9pt;\n        line-height: 25px;\n        display: flex;\n        width: 100%;\n        justify-content: space-between;\n        margin-bottom: 5px;\n        \n    }\n    .propTitle {\n        background-color: white;\n        font-family: ","\n        border-radius: 50%;\n        width: 25px;\n        height: 25px;\n        line-height: 25px;\n        font-size: 10pt;\n        margin-right: auto;\n        margin-left: auto;\n    }\n"]);return ie=function(){return e},e}var oe=["a","b","c"],ce=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(f.a)(t).call(this,e))).state={currentLetter:"a"},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(g.Consumer,null,function(t){return a.a.createElement(se,null,oe.map(function(n){return a.a.createElement(le,{letter:n},a.a.createElement("div",{className:"propTitle"},n),a.a.createElement("div",{className:"properties"},a.a.createElement("div",{className:"prop"},a.a.createElement("span",null,"grow:"),a.a.createElement(S,Object.assign({hover:!0,width:"50px",content:[0,1,2,3,4,5],default:t.state.childProps.flexGrow[n],handleSelectItem:function(t){return e.props.changeFlexGrow(t,n)}},e.props))),a.a.createElement("div",{className:"prop"},a.a.createElement("span",null,"shrink:"),a.a.createElement(S,Object.assign({hover:!0,width:"50px",content:[0,1,2,3,4,5],default:t.state.childProps.flexShrink[n],handleSelectItem:function(t){return e.props.changeFlexShrink(t,n)}},e.props))),a.a.createElement("div",{className:"prop"},a.a.createElement("span",null,"basis:"),a.a.createElement(S,Object.assign({hover:!0,width:"50px",default:t.state.childProps.flexBasis[n],content:["20%","33%","40%","60%","auto"],handleSelectItem:function(t){return e.props.changeFlexBasis(t,n)}},e.props)))))}))})}}]),t}(r.Component),le=c.b.div(ie(),function(e){return e.theme.font.main},function(e){return e.theme.blue[e.letter].light},function(e){return e.theme.font.title}),se=c.b.div(ae()),ue=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(g.Consumer,null,function(t){return a.a.createElement("div",null,t.state.isMobileWidth?a.a.createElement(ne,e.props):a.a.createElement(ce,e.props))})}}]),t}(r.Component);function fe(){var e=Object(h.a)(["\n    display: flex;\n    flex-direction: row;\n    flex-grow: content;\n    height: 100%;\n    background: #65666D;\n    z-index: 1;\n    font-family: ",";\n    .verticalAxisContent {\n        background-color: ","\n        color: ","\n        height: 150px;\n        text-align: center;\n        writing-mode: vertical-rl;\n        text-orientation: mixed;\n    }\n"]);return fe=function(){return e},e}function pe(){var e=Object(h.a)(["\n    display: flex;\n    flex-direction: row;\n    flex-grow: content;\n    height: 100%;\n    background: #65666D;\n    z-index: 1;\n    font-family: ",";\n    .horizantalAxisContent {\n        background-color: ","\n        color: ","\n        width: 100%;\n    }\n"]);return pe=function(){return e},e}function he(){var e=Object(h.a)(["\n    background-color: ",";\n    padding: 20px;\n    text-align: center;\n    margin-bottom: 20px;\n    margin-right: auto;\n    margin-left: auto;\n    .title {\n        color: ",";\n        font-family: ",";\n        font-weight: bold;\n        letter-spacing: .3rem;\n    }\n    .dropdown {\n        margin-right: auto;\n        margin-left: auto;\n        display: flex;\n        justify-content: center;\n        padding: 10px 0;\n    }\n\n"]);return he=function(){return e},e}var de=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(f.a)(t).call(this,e))).state={flexDirection:""},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(g.Consumer,null,function(t){return a.a.createElement(me,Object.assign({color:"blue"},e.props),a.a.createElement("div",{className:"title"},e.props.title),e.props.singleCard?a.a.createElement(ee,e.props):a.a.createElement(ue,e.props),a.a.createElement(ge,Object.assign({flexDirection:t.state.flexDirection},e.props),a.a.createElement("div",{className:"horizantalAxisContent"},"row"===t.state.flexDirection||"row-reverse"===t.state.flexDirection?a.a.createElement("span",{className:"main"},"MAIN AXIS"):a.a.createElement("span",{className:"cross"},"CROSS AXIS"))),a.a.createElement(xe,Object.assign({flexDirection:t.state.flexDirection},e.props),a.a.createElement("div",{className:"verticalAxisContent"},"row"===t.state.flexDirection||"row-reverse"===t.state.flexDirection?a.a.createElement("span",{className:"cross"},"CROSS AXIS"):a.a.createElement("span",{className:"main"},"MAIN AXIS")),e.props.children))})}}]),t}(r.Component),me=c.b.div(he(),function(e){return e.theme.background.dark},function(e){return e.theme[e.color].title},function(e){return e.theme.font.main}),ge=c.b.div(pe(),function(e){return e.theme.font.title},function(e){return"column"===e.flexDirection||"column-reverse"===e.flexDirection?e.theme.axis.crossLight:e.theme.axis.mainLight},function(e){return"column"===e.flexDirection||"column-reverse"===e.flexDirection?e.theme.axis.crossDark:e.theme.axis.mainDark}),xe=c.b.div(fe(),function(e){return e.theme.font.title},function(e){return"column"===e.flexDirection||"column-reverse"===e.flexDirection?e.theme.axis.mainLight:e.theme.axis.crossLight},function(e){return"column"===e.flexDirection||"column-reverse"===e.flexDirection?e.theme.axis.mainDark:e.theme.axis.crossDark});function be(){var e=Object(h.a)(["\n    display: flex;\n    height: 50px;\n    line-height: 25px;\n    height: 150px;\n    width: 100%;\n    overflow: scroll;\n    flex-direction: ",";\n    // order: ","\n"]);return be=function(){return e},e}var ve=["#91bbff","#BFD4FF","#BDDDFC"],we=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(f.a)(t).call(this,e))).componentDidMount=function(){n.setState({heights:Array.from({length:10},function(e,t){return n.getRandomValue(20,30)}),widths:Array.from({length:10},function(e,t){return n.getRandomValue(15,45)})})},n.getRandomValue=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},n.state={heights:[],widths:[]},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(g.Consumer,null,function(t){return a.a.createElement(Oe,Object.assign({flexDirection:t.state.flexDirection},e.props),Array.from({length:e.props.itemAmount||3},function(t,n){return a.a.createElement(v,Object.assign({color:ve[n],height:"".concat(e.state.heights[n],"px"),width:"".concat(e.state.widths[n],"px"),display:String.fromCharCode(97+n),order:e.props["order".concat(String.fromCharCode(97+n))],alignSelf:e.props["alignSelf".concat(String.fromCharCode(97+n))],flexGrow:e.props["flexGrow".concat(String.fromCharCode(97+n))],flexShrink:e.props["flexShrink".concat(String.fromCharCode(97+n))],flexBasis:e.props["flexBasis".concat(String.fromCharCode(97+n))]},e.props))}))})}}]),t}(r.Component),Oe=c.b.div(be(),function(e){return e.flexDirection},function(e){return e.order});function je(){var e=Object(h.a)(["\n    max-width: 500px;\n    text-align: left;\n    width: 90%;\n    padding: 0 5%;\n    margin-right: auto;\n    margin-left: auto;\n    margin-top: 15px;\n    margin-bottom: 150px;\n\n    text-align: ",";\n    background-color: ",";\n    border: ",";\n    .mainTitle {\n        font-size: 20pt;\n        color: ",";\n        font-family: ",";\n        display: flex;\n        padding: 10px 0px;\n    }\n    .titleText {\n        margin-right: ",";\n        margin-left: ",";\n    }\n"]);return je=function(){return e},e}var Ee=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(f.a)(t).call(this,e))).state={currentLetter:"a"},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(g.Consumer,null,function(t){return a.a.createElement(ye,{isMobile:t.state.isMobileWidth},a.a.createElement("span",{id:"CHILD%20PROPERTIES",className:"mainTitle"},a.a.createElement("span",{className:"titleText"},"CHILD PROPERTIES")),a.a.createElement("div",{id:"order"},a.a.createElement(de,{singleCard:!0,propName:"order",content:[0,1,2,3,10,"auto"],color:"dark",title:"order",propValue:t.state.childProps.order,changePropertyMobile:function(e,n){return t.changeOrder(e,n)},changeOrder:function(e,n){return t.changeOrder(e,n)},changeAlignSelf:function(){},handleCurrentLetter:function(t){return e.setState({currentLetter:t})}},a.a.createElement(we,{ordera:t.state.childProps.order.a,orderb:t.state.childProps.order.b,orderc:t.state.childProps.order.c}))),a.a.createElement("span",{id:"align-self"},a.a.createElement(de,{singleCard:!0,propName:"align-self",content:["flex-start","flex-end","center","baseline","stretch"],color:"dark",title:"align-self",propValue:t.state.childProps.alignSelf,changePropertyMobile:function(e,n){return t.changeAlignSelf(e,n)},changeOrder:function(){},changeAlignSelf:function(e,n){return t.changeAlignSelf(e,n)},handleCurrentLetter:function(t){return e.setState({currentLetter:t})}},a.a.createElement(we,{alignSelfa:t.state.childProps.alignSelf.a,alignSelfb:t.state.childProps.alignSelf.b,alignSelfc:t.state.childProps.alignSelf.c}))),a.a.createElement("span",{id:"grow-shrink-basis"},a.a.createElement(de,Object.assign({propName:"grow | shrink | basis",color:"dark",title:"grow | shrink | basis",changeFlexGrow:t.state.isMobileWidth?function(n){return t.changeFlexGrow(n,e.state.currentLetter)}:function(e,n){return t.changeFlexGrow(e,n)},changeFlexShrink:t.state.isMobileWidth?function(n){return t.changeFlexShrink(n,e.state.currentLetter)}:function(e,n){return t.changeFlexShrink(e,n)},changeFlexBasis:t.state.isMobileWidth?function(n){return t.changeFlexBasis(n,e.state.currentLetter)}:function(e,n){return t.changeFlexBasis(e,n)},handleCurrentLetter:function(t){return e.setState({currentLetter:t})}},e.props),a.a.createElement(we,{flexGrowa:t.state.childProps.flexGrow.a,flexGrowb:t.state.childProps.flexGrow.b,flexGrowc:t.state.childProps.flexGrow.c,flexShrinka:t.state.childProps.flexShrink.a,flexShrinkb:t.state.childProps.flexShrink.b,flexShrinkc:t.state.childProps.flexShrink.c,flexBasisa:t.state.childProps.flexBasis.a,flexBasisb:t.state.childProps.flexBasis.b,flexBasisc:t.state.childProps.flexBasis.c}))))})}}]),t}(r.Component),ye=c.b.div(je(),function(e){return e.isMobile?"center":"left"},function(e){return e.theme.blue.background},function(e){return e.isMobile?null:"1px solid ".concat(e.theme.blue.mainTitle)},function(e){return e.theme.blue.mainTitle},function(e){return e.theme.font.title},function(e){return e.isMobile?"auto":null},function(e){return e.isMobile?"auto":null}),Se=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App",style:{width:"100%"}},a.a.createElement(X,null),a.a.createElement(G,null),a.a.createElement("div",{style:{marginTop:"25px"}},a.a.createElement(M,null)),a.a.createElement(Ee,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(c.a,{theme:{blue:{mainTitle:"#5975a5",background:"#f2f6fc",title:"#a0c4ff",main:"white",dark:"#15436d",highlight:"#398fdd",hover:"#b4c3e8",light:"white",a:{light:"#91BBFF"},b:{light:"#BFD4FF"},c:{light:"#BDDDFC"}},green:{main:"#c5e5d5",light:"#fcfffc",dark:"#0c6d4b",hover:"#e1f7ef",item:"#cbede0",title:"#bcfff3",background:"#fcfffc",mainTitle:"#89af9b"},purple:{title:"#65666D",main:"#4c4f54",dark:"#e6dbf9",highlight:"#65666D",hover:"#76757a",light:"#5f5e63"},light:{light:"white",dark:"#4c4f54",hover:"#d8e7ff",main:"white",title:"blue"},dark:{light:"white",dark:"#4c4f54",hover:"#d8e7ff",main:"white",title:"#a0c4ff"},background:{dark:"#424247",light:"blue"},font:{main:"Raleway",title:"Cabin Sketch"},axis:{mainLight:"#ffe8e8",crossLight:"#ffedd8",mainDark:"#e28c8c",crossDark:"#e09953"}}},a.a.createElement(x,null,a.a.createElement(Se,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.0ae0ea7b.chunk.js.map