(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(7),s=n.n(a),c=n(2),i=n(3),l=n(5),u=n(4),b=(n(13),n(1)),g=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={goodsList:Object(b.a)(t.props.goodsList),selectValue:1},t.reverseList=function(){t.setState((function(t){var e=t.goodsList;return{goodsList:Object(b.a)(e).reverse()}}))},t.sortAlphabetically=function(){t.setState((function(t){var e=t.goodsList;return{goodsList:Object(b.a)(e).sort((function(t,e){return t.localeCompare(e)}))}}))},t.resetState=function(){t.setState((function(){return{goodsList:Object(b.a)(t.props.goodsList),selectValue:1}}))},t.lengthSort=function(){t.setState((function(t){var e=t.goodsList;return{goodsList:Object(b.a)(e).sort((function(t,e){return t.length-e.length}))}}))},t.selectLength=function(e){t.setState({selectValue:e,goodsList:t.props.goodsList.filter((function(t){return t.length>=e}))})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=Object(b.a)(Array(10).keys());return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{type:"button",onClick:this.reverseList},"Reverse"),r.a.createElement("button",{type:"button",onClick:this.sortAlphabetically},"Sort"),r.a.createElement("button",{type:"button",onClick:this.resetState},"Reset"),r.a.createElement("button",{type:"button",onClick:this.lengthSort},"Sort by Length"),r.a.createElement("select",{value:this.state.selectValue,onChange:function(e){return t.selectLength(e.target.value)}},e.map((function(t){return r.a.createElement("option",{key:t},t+1)})))),r.a.createElement("ul",null,this.state.goodsList.map((function(t){return r.a.createElement("li",{key:t},t)}))))}}]),n}(r.a.Component),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={isButtonVisible:!0},t.showGoodsFromServer=function(){t.setState({isButtonVisible:!1})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state.isButtonVisible;return r.a.createElement("div",null,t?r.a.createElement("button",{type:"button",onClick:this.showGoodsFromServer},"Start"):r.a.createElement(g,{goodsList:h}))}}]),n}(r.a.Component);s.a.render(r.a.createElement(p,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.0767542e.chunk.js.map