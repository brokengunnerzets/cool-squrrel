(function(t){function e(e){for(var n,a,i=e[0],u=e[1],c=e[2],m=0,d=[];m<i.length;m++)a=i[m],o[a]&&d.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,i=1;i<r.length;i++){var u=r[i];0!==o[u]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={app:0},s=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("c21b"),o=r.n(n);o.a},"2a4c":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),o=r("2f62"),s=r("9f7b"),a=(r("2dd8"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid d-flex justify-content-center align-items-center flex-column",style:{backgroundColor:t.color},attrs:{id:"app"}},[t.room&&!t.isGameMasterMode?r("Home"):t._e(),t.room||t.isGameMasterMode?t._e():r("Login",{attrs:{color:t.color},on:{toGameMaster:t.toGameMasterMode}}),!t.room&&t.isGameMasterMode?r("GMLogin",{attrs:{color:t.color},on:{roomConnected:function(e){return t.setUpRoom(e)}}}):t._e(),t.room&&t.isGameMasterMode&&t.socketRef?r("GMLobby",{attrs:{color:t.color,socket:t.socketRef}}):t._e(),r("div",[r("button",{staticClass:"btn",on:{click:t.toggleMode}},[t._v(t._s(t.toggleText))])])],1)}),i=[],u=r("fd9b"),c=r.n(u),l=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid main-contaier"},[r("nav",{staticClass:"navbar navbar-expand-lg"},[r("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("CoolSquirrel")])]),r("div",{staticClass:"container"},[t._v("\n    asdddddddddd\n  ")])])}],d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login-box shadow p-3 mb-5 bg-white rounded"},[r("b-alert",{attrs:{variant:"danger",dismissible:"",show:t.showAlert},on:{dismissed:function(e){t.showAlert=!1}}},[t._v("\n    "+t._s(t.errorText)+"\n  ")]),r("h1",[t._v("Join a Game")]),r("form",{on:{submit:function(t){t.preventDefault()}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"inputUsername"}},[t._v("Username")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",id:"inputUsername","aria-describedby":"username",placeholder:"Enter username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),r("small",{staticClass:"form-text text-muted"},[t._v("This will be your identity in the game.")])]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Room")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.roomName,expression:"roomName"}],staticClass:"form-control",attrs:{type:"text",id:"inputRoom","aria-describedby":"room",placeholder:"Enter room code"},domProps:{value:t.roomName},on:{input:function(e){e.target.composing||(t.roomName=e.target.value)}}}),r("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("Ask the game master for the game code.")])]),r("button",{staticClass:"btn",style:{backgroundColor:t.color},on:{click:t.connect}},[t._v("Join")])])],1)},f=[],p=(r("96cf"),r("3040")),h=r("bc3a"),v=r.n(h),b={name:"Login",props:{color:String},data:function(){return{username:"",roomName:"",errorText:"",showAlert:!1}},methods:{connect:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(){var e,r,n,o,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.username&&this.roomName){t.next=3;break}return this.toggleAlert("Username and room required"),t.abrupt("return");case 3:return t.next=5,v.a.get("/rooms/".concat(this.roomName));case 5:if(e=t.sent,r=e.data,r.isValid){t.next=10;break}return this.toggleAlert("Room doesn't exists"),t.abrupt("return");case 10:return t.next=12,v.a.get("/users/".concat(this.username));case 12:if(n=t.sent,o=n.data,o.isValid){t.next=17;break}return this.toggleAlert("Username is not available."),t.abrupt("return");case 17:s=io("/".concat(this.roomName)),s.emit("userConnect",this.username);case 19:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),toggleAlert:function(t){var e=this;this.errorText=t,this.showAlert=!0,setTimeout(function(){e.showAlert=!1},2e3)}}},g=b,_=(r("a585"),r("2877")),x=Object(_["a"])(g,d,f,!1,null,"6f75bff0",null);x.options.__file="Login.vue";var w=x.exports,y={name:"Home",components:{Login:w},data:function(){return{currentMessage:""}},methods:{}},C=y,M=(r("9d0d"),Object(_["a"])(C,l,m,!1,null,"aa9a2844",null));M.options.__file="Home.vue";var R=M.exports,k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login-box shadow p-3 mb-5 bg-white rounded"},[r("b-alert",{attrs:{variant:"danger",dismissible:"",show:t.showAlert},on:{dismissed:function(e){t.showAlert=!1}}},[t._v("\n    "+t._s(t.errorText)+"\n  ")]),r("h1",[t._v("Create a Game")]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"inputUsername"}},[t._v("Username")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",id:"inputUsername","aria-describedby":"username",placeholder:"Enter username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),r("small",{staticClass:"form-text text-muted"},[t._v("This will be your identity as the gamemaster.")])]),r("button",{staticClass:"btn",style:{backgroundColor:t.color},on:{click:t.createRoom}},[t._v("Create")])],1)},T=[],S={name:"LoginGameMaster",props:{color:String},data:function(){return{username:"",showAlert:!1,errorText:"Something wrong happened"}},methods:{createRoom:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(){var e,r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,this.username){t.next=5;break}return this.errorText="Username required",this.showAlert=!0,t.abrupt("return");case 5:return t.next=7,v.a.get("/newRoom");case 7:e=t.sent,r=e.data,n=io("/".concat(r.roomName)),n.emit("gameMasterConnect",this.username),this.$emit("roomConnected",n),this.$store.dispatch("setCurrentRoom",r.roomName),t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](0),this.errorText=t.t0.message,this.showAlert=!0;case 19:case"end":return t.stop()}},t,this,[[0,15]])}));return function(){return t.apply(this,arguments)}}()}},O=S,G=(r("8317"),Object(_["a"])(O,k,T,!1,null,"725a7692",null));G.options.__file="LoginGameMaster.vue";var j=G.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login-box shadow p-3 mb-5 bg-white rounded"},[r("h1",[t._v("Room: "+t._s(t.room))]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12 col-md-8 play-controller"},[r("h2",[t._v("Current Round: "+t._s(t.currentRound))]),r("button",{staticClass:"btn boutane",style:{backgroundColor:t.color},on:{click:function(e){t.timerBtnFct()}}},[t._v(t._s(t.btnText))]),!t.timerStarted&&t.timerPaused?r("button",{staticClass:"btn boutane",style:{backgroundColor:t.color}},[t._v("Resume")]):t._e(),!t.timerStarted&&t.timerPaused?r("button",{staticClass:"btn boutane",style:{backgroundColor:t.color}},[t._v("Reset")]):t._e(),r("stopwatch",{ref:"timerRef"})],1),r("div",{staticClass:"col-sm-12 col-md-4"},[r("hr"),r("h2",[t._v("Users connected")]),t._l(t.users,function(e,n){return r("b-list-group",{key:n},[r("b-list-group-item",[t._v(t._s(e))])],1)})],2)])])},P=[],E=r("2ef0"),L=r.n(E),N=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"timer"}},[r("span",{attrs:{id:"minutes"}},[t._v(t._s(t.seconds))]),r("span",{attrs:{id:"middle"}},[t._v(":")]),r("span",{attrs:{id:"seconds"}},[t._v(t._s(t.milliseconds))])])},$=[],U={data:function(){return{timer:null,totalTime:2e3}},computed:{milliseconds:function(){return this.formatMS(this.totalTime%1e3)},seconds:function(){return Math.floor(this.totalTime/1e3)}},methods:{startTimer:function(){var t=this;this.timer=setInterval(function(){return t.countdown()},1)},stopTimer:function(){clearInterval(this.timer),this.timer=null},resetTimer:function(){this.totalTime=1500,clearInterval(this.timer),this.timer=null},countdown:function(){this.totalTime--,0===this.totalTime&&alert("OVER")},formatMS:function(t){return t>99?t:t<99&&t>9?"0".concat(t):"00".concat(t)}}},D=U,H=(r("671e"),Object(_["a"])(D,N,$,!1,null,null,null));H.options.__file="Stopwatch.vue";var J=H.exports,I={name:"LobbyGM",components:{Stopwatch:J},props:{socket:Object,color:String},data:function(){return{users:[],timerStarted:!1,timerPaused:!1,currentRound:1}},computed:{room:function(){return this.$store.getters.currentRoom},btnText:function(){return this.timerStarted?"Pause":"Start"}},methods:{timerBtnFct:function(){this.timerStarted?(this.socket.emit("gm_timerPause",this.currentRound),this.setTimerData(!1,!0)):(this.socket.emit("gm_timerStart",this.currentRound),this.$refs.timerRef.startTimer(),this.setTimerData(!0,!1))},setTimerData:function(t,e){this.timerStarted=t,this.timerPaused=e}},created:function(){var t=this;this.socket&&(this.socket.on("userJoined",function(e){t.users.push(e)}),this.socket.on("userLeft",function(e){var r=L.a.cloneDeep(t.users);L.a.remove(r,function(t){return t===e});t.users=r}),this.socket.on("game_roundEnd",function(){t.currentRound=t.currentRound+=1}))}},q=I,V=(r("8990"),Object(_["a"])(q,A,P,!1,null,"5934e0fd",null));V.options.__file="GameLobby.vue";var B=V.exports,F={name:"app",components:{Home:R,Login:w,GMLogin:j,GMLobby:B},data:function(){return{color:"#ffffff",isGameMasterMode:!0,socketRef:null}},computed:{room:function(){return this.$store.getters.currentRoom},toggleText:function(){return this.isGameMasterMode?"Player Mode":"Game Master Mode"}},created:function(){this.color=c()({luminosity:"light"})},methods:{toggleMode:function(){this.isGameMasterMode=!this.isGameMasterMode},setUpRoom:function(t){this.socketRef=t}}},z=F,K=(r("034f"),Object(_["a"])(z,a,i,!1,null,null,null));K.options.__file="App.vue";var Q=K.exports;n["a"].use(o["a"]),n["a"].use(s["a"]),n["a"].config.productionTip=!1;var W=new o["a"].Store({state:{currentRoom:void 0},actions:{setCurrentRoom:function(t,e){var r=t.commit;r("SET_ROOM",e)}},getters:{currentRoom:function(t){return t.currentRoom}},mutations:{SET_ROOM:function(t,e){t.currentRoom=e}}});new n["a"]({render:function(t){return t(Q)},store:W}).$mount("#app")},"61cd":function(t,e,r){},"671e":function(t,e,r){"use strict";var n=r("df5c"),o=r.n(n);o.a},8317:function(t,e,r){"use strict";var n=r("b13a"),o=r.n(n);o.a},8990:function(t,e,r){"use strict";var n=r("a72e"),o=r.n(n);o.a},"9d0d":function(t,e,r){"use strict";var n=r("61cd"),o=r.n(n);o.a},a585:function(t,e,r){"use strict";var n=r("2a4c"),o=r.n(n);o.a},a72e:function(t,e,r){},b13a:function(t,e,r){},c21b:function(t,e,r){},df5c:function(t,e,r){}});
//# sourceMappingURL=app.04a8a7c4.js.map