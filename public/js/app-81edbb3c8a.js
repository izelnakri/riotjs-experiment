!function e(t,r,n){function o(u,c){if(!r[u]){if(!t[u]){var a="function"==typeof require&&require;if(!c&&a)return a(u,!0);if(i)return i(u,!0);var s=new Error("Cannot find module '"+u+"'");throw s.code="MODULE_NOT_FOUND",s}var f=r[u]={exports:{}};t[u][0].call(f.exports,function(e){var r=t[u][1][e];return o(r?r:e)},f,f.exports,e,t,r,n)}return r[u].exports}for(var i="function"==typeof require&&require,u=0;u<n.length;u++)o(n[u]);return o}({1:[function(e,t,r){"use strict";function n(){return{type:"INCREMENT"}}function o(){return{type:"DECREMENT"}}Object.defineProperty(r,"__esModule",{value:!0}),r.incrementCounter=n,r.decrementCounter=o},{}],2:[function(e,t,r){"use strict";function n(){return{type:"REQUEST_FEEDBACKS"}}function o(){return function(e){return Store.dispatch(n()),fetch("/api/feedbacks").then(function(e){return e.json()}).then(function(e){return Store.dispatch(i(e))})}}function i(e){return{type:"RECEIVE_FEEDBACKS",feedbacks:u(e),receivedAt:Date.now()}}function u(e){return e.items=_.sortBy(e.items,function(e){return e.creation_date}),e}function c(e){return!(e.feedbacks.receivedAt&&moment(e.feedbacks.receivedAt)>moment().subtract(10,"minutes"))}function a(){return function(e,t){return c(Store.getState())?Store.dispatch(o()):Promise.resolve()}}Object.defineProperty(r,"__esModule",{value:!0}),r.requestFeedbacks=n,r.fetchFeedbacks=o,r.receiveFeedbacks=i,r.shouldFetchFeedbacks=c,r.fetchFeedbacksIfNeeded=a},{}],3:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("./counter");Object.keys(n).forEach(function(e){"default"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return n[e]}})});var o=e("./todos");Object.keys(o).forEach(function(e){"default"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return o[e]}})});var i=e("./user");Object.keys(i).forEach(function(e){"default"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return i[e]}})});var u=e("./feedbacks");Object.keys(u).forEach(function(e){"default"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return u[e]}})})},{"./counter":1,"./feedbacks":2,"./todos":4,"./user":5}],4:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=0;r.addTodo=function(e){return{type:"ADD_TODO",id:n++,text:e}},r.setVisibilityFilter=function(e){return{type:"SET_VISIBILITY_FILTER",filter:e}},r.toggleTodo=function(e){return{type:"TOGGLE_TODO",id:e}}},{}],5:[function(e,t,r){"use strict"},{}],6:[function(e,t,r){"use strict";e("./store.js"),e("./copy.js"),window.App={},App.routesLoad=function(){riot.visit=function(e,t){riot.mount("#page","page-"+e,t)},riot.route("/",function(){riot.visit("index"),Store.dispatch(actions.fetchFeedbacksIfNeeded()),console.log("root route is called")}),riot.route("/about",function(){riot.visit("about")}),riot.route("/contact",function(){riot.visit("contact")}),riot.route("/counter",function(){riot.visit("counter")}),riot.route("/forgot-password",function(){riot.visit("forgot-password")}),riot.route("/login",function(){riot.visit("login")}),riot.route("/privacy",function(){riot.visit("privacy")}),riot.route("/register",function(){riot.visit("register")}),riot.route("/search?keyword=*",function(e){riot.visit("search"),console.log("Search keyword: "+e)}),riot.route("/terms",function(){riot.visit("terms")}),riot.route(function(e,t,r){console.log("Collection is: "+e),console.log("id is: "+t),console.log("action is: "+r)}),riot.route.base("/"),riot.route.start(!0),App.routesLoad=function(){}},App.routesLoad()},{"./copy.js":7,"./store.js":15}],7:[function(e,t,r){"use strict";window.$parse=ngParser,window.t=function(e,t){function r(e){return $parse(e)(_.merge(Store.getState(),t))}function n(e){return Mustache.render(e,_.merge(Store.getState(),t))}var o="en",i=lang[o][e];if(_.isUndefined(i))return void console.warn("Copy not found, unknown key "+e);if(_.isArray(i)){if(i[0].expression){var u,c;return _.isUndefined(t)?(u=_.find(i,{expression:"true"}),n(u.value)):(c=_.find(i,function(e){return r(e.expression)===!0}),_.isUndefined(c)?(u=_.find(i,{expression:"true"}),u?n(u.value):""):n(c.value))}return console.warn("Array without expression requested for copy key: "+e),""}return _.isObject(i)?i.expression?r(i.expression)?n(i.value):"":(console.warn("Object without expression requested for copy key: "+e),""):n(i)}},{}],8:[function(e,t,r){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],t=arguments[1];switch(t.type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;default:return e}}Object.defineProperty(r,"__esModule",{value:!0}),r.counter=n},{}],9:[function(e,t,r){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];switch(t.type){case"REQUEST_FEEDBACKS":return e;case"RECEIVE_FEEDBACKS":return Object.assign({},t.feedbacks,{receivedAt:t.receivedAt,ratings:[1,2,3,4,5]});default:return e}}Object.defineProperty(r,"__esModule",{value:!0}),r.feedbacks=n},{}],10:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("./counter");Object.keys(n).forEach(function(e){"default"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return n[e]}})});var o=e("./feedbacks");Object.keys(o).forEach(function(e){"default"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return o[e]}})});var i=e("./todos");Object.keys(i).forEach(function(e){"default"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return i[e]}})});var u=e("./user");Object.keys(u).forEach(function(e){"default"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return u[e]}})})},{"./counter":8,"./feedbacks":9,"./todos":11,"./user":12}],11:[function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function o(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];switch(t.type){case"ADD_TODO":return{id:t.id,text:t.text,completed:!1};case"TOGGLE_TODO":return e.id!==t.id?e:Object.assign({},e,{completed:!e.completed});default:return e}}function i(){var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],t=arguments[1];switch(t.type){case"ADD_TODO":return[].concat(n(e),[o(void 0,t)]);case"TOGGLE_TODO":return e.map(function(e){o(e,t)});default:return e}}function u(){var e=arguments.length<=0||void 0===arguments[0]?"SHOW_ALL":arguments[0],t=arguments[1];switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}}Object.defineProperty(r,"__esModule",{value:!0}),r.todo=o,r.todos=i,r.visibilityFilter=u},{}],12:[function(e,t,r){"use strict";function n(e,t){switch(e||(e=0),t.type){case"USER_CREATE":return{username:t.username,email:t.email,name:t.name,firstName:t.firstName,lastName:t.lastName,created_at:"",updated_at:"",passwordDigest:""};default:return e}}Object.defineProperty(r,"__esModule",{value:!0}),r.user=n},{}],13:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.filterFeedbacks=void 0;var n=e("reselect"),o=[1,2,3,4,5],i=function(){return Store.getState().feedbacks.items},u=function(e){return _.includes(o,e)?o=_.reject(o,function(t){return t===e}):o.push(e),_.assign([],o)};r.filterFeedbacks=(0,n.createSelector)([i,u],function(e,t){return console.log("SELECTOR IS CALLED"),_.filter(e,function(e){return _.includes(t,e.rating)})})},{reselect:18}],14:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("./feedbacks");Object.keys(n).forEach(function(e){"default"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return n[e]}})})},{"./feedbacks":13}],15:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}var i=e("reselect"),u=e("./actions"),c=o(u),a=e("./reducers"),s=o(a),f=e("./selectors"),d=o(f),l=e("redux-thunk"),p=n(l),v=e("redux-logger"),y=n(v);Raven.config("https://0d07aee195e54fb3b27eca52d653976a@app.getsentry.com/72051").install(),window.onunhandledrejection=function(e){Raven.captureException(e.reason,{extra:{state:S.getState()}})};var g={todosVisibilityFilter:"SHOW_ALL",todos:[],todo:{},user:{},counter:0,feedbacks:{count:0,count_nolimit:0,items:[],total:0,ratings:[1,2,3,4,5]}},b=(0,y["default"])(),h=function(e){return function(t){return function(r){try{return t(r)}catch(n){throw console.error("Caught an exception!",n),Raven.captureException(n,{extra:{action:r,state:e.getState()}}),n}}}},m=Redux.combineReducers(s),S=Redux.createStore(m,g,Redux.applyMiddleware(p["default"],h,b));window.Store=S,window.createSelector=i.createSelector,window.actions=c,window.reducers=s,window.selectors=d,riot.mixin("store",{init:function(){var e=this;window.dispatch=S.dispatch,window.createSelector=i.createSelector,_.each(Object.keys(c),function(t){e[t]=function(){return dispatch(c[t]())}}),e.on("mount",function(){e.store=S.getState(),S.subscribe(function(){console.log("called"),e.store=S.getState(),e.update()}),console.log("Store mount is called for a tag: "+e.root.tagName),e.update()}),e.on("update",function(){console.log("Store update is called for a tag: "+e.root.tagName)})}})},{"./actions":3,"./reducers":10,"./selectors":14,"redux-logger":16,"redux-thunk":17,reselect:18}],16:[function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function o(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}function i(e,t,r,i){switch("undefined"==typeof e?"undefined":o(e)){case"object":return"function"==typeof e[i]?e[i].apply(e,n(r)):e[i];case"function":return e(t);default:return e}}function u(){function e(){A.forEach(function(e,t){var r=e.started,o=e.startedTime,c=e.action,a=e.prevState,f=e.error,l=e.took,p=e.nextState,y=A[t+1];y&&(p=y.prevState,l=y.started-r);var b=S(c),h="function"==typeof d?d(function(){return p},c):d,m=s(o),_=j.title?"color: "+j.title(b)+";":null,w="action "+(g?m:"")+" "+b.type+" "+(v?"(in "+l.toFixed(2)+" ms)":"");try{h?j.title?u.groupCollapsed("%c "+w,_):u.groupCollapsed(w):j.title?u.group("%c "+w,_):u.group(w)}catch(E){u.log(w)}var O=i(n,b,[a],"prevState"),k=i(n,b,[b],"action"),x=i(n,b,[f,a],"error"),T=i(n,b,[p],"nextState");O&&(j.prevState?u[O]("%c prev state","color: "+j.prevState(a)+"; font-weight: bold",a):u[O]("prev state",a)),k&&(j.action?u[k]("%c action","color: "+j.action(b)+"; font-weight: bold",b):u[k]("action",b)),f&&x&&(j.error?u[x]("%c error","color: "+j.error(f,a)+"; font-weight: bold",f):u[x]("error",f)),T&&(j.nextState?u[T]("%c next state","color: "+j.nextState(p)+"; font-weight: bold",p):u[T]("next state",p));try{u.groupEnd()}catch(E){u.log("—— log end ——")}}),A.length=0}var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r=t.level,n=void 0===r?"log":r,o=t.logger,u=void 0===o?console:o,c=t.logErrors,a=void 0===c?!0:c,d=t.collapsed,l=t.predicate,p=t.duration,v=void 0===p?!1:p,y=t.timestamp,g=void 0===y?!0:y,b=t.transformer,h=t.stateTransformer,m=void 0===h?function(e){return e}:h,_=t.actionTransformer,S=void 0===_?function(e){return e}:_,w=t.errorTransformer,E=void 0===w?function(e){return e}:w,O=t.colors,j=void 0===O?{title:function(){return"#000000"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}}:O;if("undefined"==typeof u)return function(){return function(e){return function(t){return e(t)}}};b&&console.error("Option 'transformer' is deprecated, use stateTransformer instead");var A=[];return function(t){var r=t.getState;return function(t){return function(n){if("function"==typeof l&&!l(r,n))return t(n);var o={};A.push(o),o.started=f.now(),o.startedTime=new Date,o.prevState=m(r()),o.action=n;var i=void 0;if(a)try{i=t(n)}catch(u){o.error=E(u)}else i=t(n);if(o.took=f.now()-o.started,o.nextState=m(r()),e(),o.error)throw o.error;return i}}}}var c=function(e,t){return new Array(t+1).join(e)},a=function(e,t){return c("0",t-e.toString().length)+e},s=function(e){return"@ "+a(e.getHours(),2)+":"+a(e.getMinutes(),2)+":"+a(e.getSeconds(),2)+"."+a(e.getMilliseconds(),3)},f="undefined"!=typeof performance&&"function"==typeof performance.now?performance:Date;t.exports=u},{}],17:[function(e,t,r){"use strict";function n(e){var t=e.dispatch,r=e.getState;return function(e){return function(n){return"function"==typeof n?n(t,r):e(n)}}}r.__esModule=!0,r["default"]=n},{}],18:[function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function o(e,t){return e===t}function i(e){var t=arguments.length<=1||void 0===arguments[1]?o:arguments[1],r=null,n=null;return function(){for(var o=arguments.length,i=Array(o),u=0;o>u;u++)i[u]=arguments[u];return null!==r&&r.length===i.length&&i.every(function(e,n){return t(e,r[n])})?n:(r=i,n=e.apply(void 0,i))}}function u(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(e){return"function"==typeof e})){var r=t.map(function(e){return typeof e}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, "+("instead received the following types: ["+r+"]"))}return t}function c(e){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;t>o;o++)r[o-1]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),i=0;t>i;i++)o[i]=arguments[i];var c=0,a=o.pop(),s=u(o),f=e.apply(void 0,[function(){return c++,a.apply(void 0,arguments)}].concat(r)),d=function(e,t){for(var r=arguments.length,o=Array(r>2?r-2:0),i=2;r>i;i++)o[i-2]=arguments[i];var u=s.map(function(r){return r.apply(void 0,[e,t].concat(o))});return f.apply(void 0,n(u))};return d.recomputations=function(){return c},d.resetRecomputations=function(){return c=0},d}}function a(){return c(i).apply(void 0,arguments)}function s(e){var t=arguments.length<=1||void 0===arguments[1]?a:arguments[1];if("object"!=typeof e)throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);var r=Object.keys(e);return t(r.map(function(t){return e[t]}),function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return t.reduce(function(e,t,n){return e[r[n]]=t,e},{})})}r.__esModule=!0,r.defaultMemoize=i,r.createSelectorCreator=c,r.createSelector=a,r.createStructuredSelector=s},{}]},{},[6]);
//# sourceMappingURL=app-81edbb3c8a.js.map