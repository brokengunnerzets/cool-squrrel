(function(t){function e(e){for(var r,i,u=e[0],s=e[1],c=e[2],f=0,d=[];f<u.length;f++)i=u[f],o[i]&&d.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("c21b"),o=n.n(r);o.a},"3b62":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=n("2f62"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid d-flex justify-content-center align-items-center",style:{backgroundColor:t.color},attrs:{id:"app"}},[t.room?n("Home"):t._e(),t.room?t._e():n("Login",{attrs:{color:t.color}})],1)},i=[],u=n("fd9b"),s=n.n(u),c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid main-contaier"},[n("nav",{staticClass:"navbar navbar-expand-lg"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("CoolSquirrel")])]),n("div",{staticClass:"container"},[t._v("\n    asdddddddddd\n  ")])])}],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-box shadow p-3 mb-5 bg-white rounded"},[n("h1",[t._v("Join a Game")]),n("form",[t._m(0),n("button",{staticClass:"btn",style:{backgroundColor:t.color},attrs:{type:"submit"}},[t._v("Join")])])])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Username")]),n("input",{staticClass:"form-control",attrs:{type:"text",id:"inputUsername","aria-describedby":"username",placeholder:"Enter username"}}),n("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("This will be your identity in the game.")])])}],p={name:"Login",props:{color:String},data:function(){return{}},methods:{}},m=p,v=(n("dfb9"),n("2877")),b=Object(v["a"])(m,f,d,!1,null,"dde92e1c",null);b.options.__file="Login.vue";var h=b.exports,_={name:"Home",components:{Login:h},data:function(){return{currentMessage:""}},methods:{}},g=_,y=(n("9d0d"),Object(v["a"])(g,c,l,!1,null,"aa9a2844",null));y.options.__file="Home.vue";var x=y.exports,w={name:"app",components:{Home:x,Login:h},data:function(){return{color:"#ffffff"}},computed:{room:function(){return this.$store.getters.currentRoom}},created:function(){this.color=s()({luminosity:"light"})}},C=w,j=(n("034f"),Object(v["a"])(C,a,i,!1,null,null,null));j.options.__file="App.vue";var O=j.exports;r["a"].use(o["a"]),r["a"].config.productionTip=!1;var S=new o["a"].Store({state:{currentRoom:void 0},getters:{currentRoom:function(t){return t.currentRoom}}});new r["a"]({render:function(t){return t(O)},store:S}).$mount("#app")},"61cd":function(t,e,n){},"9d0d":function(t,e,n){"use strict";var r=n("61cd"),o=n.n(r);o.a},c21b:function(t,e,n){},dfb9:function(t,e,n){"use strict";var r=n("3b62"),o=n.n(r);o.a}});
//# sourceMappingURL=app.d02e9c30.js.map