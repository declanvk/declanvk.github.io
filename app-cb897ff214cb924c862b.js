webpackJsonp([0xd2a57dc1d883],{"./.cache/api-runner-browser.js":function(e,o){"use strict";function n(e,o,n){var t=s.map(function(n){if(n.plugin[e]){var t=n.plugin[e](o,n.options);return t}});return t=t.filter(function(e){return"undefined"!=typeof e}),t.length>0?t:n?[n]:[]}function t(e,o,n){return s.reduce(function(n,t){return t.plugin[e]?n.then(function(){return t.plugin[e](o,t.options)}):n},Promise.resolve())}o.__esModule=!0,o.apiRunner=n,o.apiRunnerAsync=t;var s=[]},"./.cache/async-requires.js":function(e,o,n){"use strict";var t;o.components={"component---src-pages-404-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-404-js!./src/pages/404.js"),"component---src-pages-page-2-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-page-2-js!./src/pages/page-2.js"),"component---src-pages-index-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-js!./src/pages/index.js")},o.json=(t={"layout-index.json":n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),"404.json":n("./node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json")},t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["page-2.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---page-2!./.cache/json/page-2.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["404-html.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json"),t),o.layouts={"component---src-layouts-index-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-js!./.cache/layouts/index.js")}},"./.cache/component-renderer.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function s(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function r(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function a(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}o.__esModule=!0;var u=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i=n("./node_modules/react/react.js"),c=t(i),l=n("./node_modules/prop-types/index.js"),d=t(l),p=n("./.cache/loader.js"),m=t(p),f=n("./.cache/emitter.js"),h=t(f),g=function(e){var o=e.children;return c.default.createElement("div",null,o())},j=function(e){function o(n){s(this,o);var t=r(this,e.call(this));return t.state={location:n.location,pageResources:m.default.getResourcesForPathname(n.location.pathname)},t}return a(o,e),o.prototype.componentWillReceiveProps=function(e){var o=this;if(this.state.location.pathname!==e.location.pathname){var n=m.default.getResourcesForPathname(e.location.pathname);n?this.setState({location:e.location,pageResources:n}):m.default.getResourcesForPathname(e.location.pathname,function(n){o.setState({location:e.location,pageResources:n})})}},o.prototype.componentDidMount=function(){var e=this;h.default.on("onPostLoadPageResources",function(o){o.page.path===m.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:o.pageResources})})},o.prototype.shouldComponentUpdate=function(e,o){return!o.pageResources||(!(this.state.pageResources||!o.pageResources)||(this.state.pageResources.component!==o.pageResources.component||(this.state.pageResources.json!==o.pageResources.json||!(this.state.location.key===o.location.key||!o.pageResources.page||!o.pageResources.page.matchPath&&!o.pageResources.page.path))))},o.prototype.render=function(){return this.props.page?this.state.pageResources?(0,i.createElement)(this.state.pageResources.component,u({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:g,u({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},o}(c.default.Component);j.propTypes={page:d.default.bool,layout:d.default.bool,location:d.default.object},o.default=j,e.exports=o.default},"./.cache/emitter.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=n("./node_modules/mitt/dist/mitt.js"),r=t(s),a=(0,r.default)();e.exports=a},"./.cache/find-page.js":function(e,o,n){"use strict";var t=n("./node_modules/react-router-dom/index.js"),s={};e.exports=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n){var r=n.slice(o.length);if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r.split("?").length>1&&(r=r.split("?").slice(0,-1).join("")),s[r])return s[r];var a=void 0;return e.some(function(e){if(e.matchPath){if((0,t.matchPath)(r,{path:e.path})||(0,t.matchPath)(r,{path:e.matchPath}))return a=e,s[r]=e,!0}else if((0,t.matchPath)(r,{path:e.path,exact:!0}))return a=e,s[r]=e,!0;return!1}),a}}},"./node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xa2868bfb69fc,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/404-html.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xe70826b53c04,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/404.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x81b8806e4260,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(60335399758886,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/layout-index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---page-2!./.cache/json/page-2.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x7b71d9db271c,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/page-2.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-js!./.cache/layouts/index.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x67ef26645b2a,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/dev/Projects/declanvk.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/dev/Projects/declanvk.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/dev/Projects/declanvk.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/dev/Projects/declanvk.github.io/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/dev/Projects/declanvk.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/dev/Projects/declanvk.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js')})})}},"./.cache/loader.js":function(e,o,n){(function(o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=n("./node_modules/react/react.js"),r=(t(s),n("./.cache/find-page.js")),a=t(r),u=n("./.cache/emitter.js"),i=t(u),c=void 0,l={},d={},p={},m={},f={},h=[],g=[],j={},b=[],y={},v=function(e){return e&&e.default||e},x=void 0,_=!0;x=n("./.cache/prefetcher.js")({getNextQueuedResources:function(){return b.slice(-1)[0]},createResourceDownload:function(e){w(e,function(){b=b.filter(function(o){return o!==e}),x.onResourcedFinished(e)})}}),i.default.on("onPreLoadPageResources",function(e){x.onPreLoadPageResources(e)}),i.default.on("onPostLoadPageResources",function(e){x.onPostLoadPageResources(e)});var R=function(e,o){return y[e]>y[o]?1:y[e]<y[o]?-1:0},P=function(e,o){return j[e]>j[o]?1:j[e]<j[o]?-1:0},w=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(m[e])o.nextTick(function(){n(null,m[e])});else{var t="component---"===e.slice(0,12)?d.components[e]||d.layouts[e]:d.json[e];t(function(o,t){m[e]=t,n(o,t)})}},k=function(e,n){f[e]?o.nextTick(function(){n(null,f[e])}):w(e,function(o,t){if(o)n(o);else{var s=v(t());f[e]=s,n(o,s)}})},E=1,O={empty:function(){g=[],j={},y={},b=[],h=[]},addPagesArray:function(e){h=e;var o="";c=(0,a.default)(e,o)},addDevRequires:function(e){l=e},addProdRequires:function(e){d=e},dequeue:function(e){return g.pop()},enqueue:function(e){if(!h.some(function(o){return o.path===e}))return!1;var o=1/E;E+=1,j[e]?j[e]+=1:j[e]=1,O.has(e)||g.unshift(e),g.sort(P);var n=c(e);return n.jsonName&&(y[n.jsonName]?y[n.jsonName]+=1+o:y[n.jsonName]=1+o,b.indexOf(n.jsonName)!==-1||m[n.jsonName]||b.unshift(n.jsonName)),n.componentChunkName&&(y[n.componentChunkName]?y[n.componentChunkName]+=1+o:y[n.componentChunkName]=1+o,b.indexOf(n.componentChunkName)!==-1||m[n.jsonName]||b.unshift(n.componentChunkName)),b.sort(R),x.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:b,resourcesCount:y}},getPages:function(){return{pathArray:g,pathCount:j}},getPage:function(e){return c(e)},has:function(e){return g.some(function(o){return o===e})},getResourcesForPathname:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};_&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(c(e)||navigator.serviceWorker.getRegistrations().then(function(e){for(var o=e,n=Array.isArray(o),t=0,o=n?o:o[Symbol.iterator]();;){var s;if(n){if(t>=o.length)break;s=o[t++]}else{if(t=o.next(),t.done)break;s=t.value}var r=s;r.unregister()}window.location.reload()})),_=!1;var t=c(e);if(!t)return void console.log("A page wasn't found for \""+e+'"');if(e=t.path,p[e])return o.nextTick(function(){n(p[e]),i.default.emit("onPostLoadPageResources",{page:t,pageResources:p[e]})}),p[e];i.default.emit("onPreLoadPageResources",{path:e});var s=void 0,r=void 0,a=void 0,u=function(){if(s&&r&&(!t.layoutComponentChunkName||a)){p[e]={component:s,json:r,layout:a};var o={component:s,json:r,layout:a};n(o),i.default.emit("onPostLoadPageResources",{page:t,pageResources:o})}};return k(t.componentChunkName,function(e,o){e&&console.log("Loading the component for "+t.path+" failed"),s=o,u()}),k(t.jsonName,function(e,o){e&&console.log("Loading the JSON for "+t.path+" failed"),r=o,u()}),void(t.layoutComponentChunkName&&k(t.layoutComponentChunkName,function(e,o){e&&console.log("Loading the Layout for "+t.path+" failed"),a=o,u()}))},peek:function(e){return g.slice(-1)[0]},length:function(){return g.length},indexOf:function(e){return g.length-g.indexOf(e)-1}};e.exports=O}).call(o,n("./node_modules/process/browser.js"))},"./.cache/pages.json":function(e,o){e.exports=[{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-page-2-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"page-2.json",path:"/page-2/"},{componentChunkName:"component---src-pages-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},"./.cache/prefetcher.js":function(e,o){"use strict";e.exports=function(e){var o=e.getNextQueuedResources,n=e.createResourceDownload,t=[],s=[],r=function(){var e=o();e&&(s.push(e),n(e))},a=function(e){switch(e.type){case"RESOURCE_FINISHED":s=s.filter(function(o){return o!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(o){return o!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===s.length&&0===t.length&&r()},0)};return{onResourcedFinished:function(e){a({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){a({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){a({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){a({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:s}},empty:function(){t=[],s=[]}}}},0:function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},r=n("./.cache/api-runner-browser.js"),a=n("./node_modules/react/react.js"),u=t(a),i=n("./node_modules/react-dom/index.js"),c=t(i),l=n("./node_modules/react-router-dom/index.js"),d=n("./node_modules/gatsby-react-router-scroll/index.js"),p=n("./node_modules/history/createBrowserHistory.js"),m=t(p),f=n("./node_modules/domready/ready.js"),h=t(f),g=n("./.cache/emitter.js"),j=t(g),b=n("./.cache/pages.json"),y=t(b),v=n("./.cache/redirects.json"),x=t(v),_=n("./.cache/component-renderer.js"),R=t(_),P=n("./.cache/async-requires.js"),w=t(P),k=n("./.cache/loader.js"),E=t(k);n("./node_modules/core-js/modules/es6.promise.js"),window.___emitter=j.default,E.default.addPagesArray(y.default),E.default.addProdRequires(w.default),window.asyncRequires=w.default,window.___loader=E.default,window.matchPath=l.matchPath;var O=(0,m.default)(),N=x.default.reduce(function(e,o){return e[o.fromPath]=o,e},{}),C=function(e){var o=N[e];if(null!=o){var n=E.default.getResourcesForPathname(e);return null!=n&&console.error('The route "'+e+'" matches both a page and a redirect; this is probably not intentional.'),O.replace(o.toPath),!0}return!1};C(window.location.pathname),(0,r.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history||(window.___history=e,e.listen(function(e,o){C(e.pathname)||(0,r.apiRunner)("onRouteUpdate",{location:e,action:o})}))}function o(e,o){var n=o.location.pathname,t=(0,r.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:n});if(t.length>0)return t[0];if(e){var s=e.location.pathname;if(s===n)return!1}return!0}(0,r.apiRunner)("registerServiceWorker").length>0&&n("./.cache/register-service-worker.js");var t=function(e){function o(t){t.page.path===E.default.getPage(e).path&&(j.default.off("onPostLoadPageResources",o),clearTimeout(n),window.___history.push(e))}if(window.location.pathname!==e){var n=setTimeout(function(){j.default.off("onPostLoadPageResources",o),j.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);E.default.getResourcesForPathname(e)?(clearTimeout(n),window.___history.push(e)):j.default.on("onPostLoadPageResources",o)}};window.___navigateTo=t,(0,r.apiRunner)("onRouteUpdate",{location:O.location,action:O.action});var i=(0,r.apiRunner)("replaceRouterComponent",{history:O})[0],p=function(e){var o=e.children;return u.default.createElement(l.Router,{history:O},o)};E.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,a.createElement)(i?i:p,null,(0,a.createElement)(d.ScrollContext,{shouldUpdateScroll:o},(0,a.createElement)((0,l.withRouter)(R.default),{layout:!0,children:function(o){return(0,a.createElement)(l.Route,{render:function(n){e(n.history);var t=o?o:n;return E.default.getPage(t.location.pathname)?(0,a.createElement)(R.default,s({page:!0},t)):(0,a.createElement)(R.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},t=(0,r.apiRunner)("wrapRootComponent",{Root:n},n)[0];(0,h.default)(function(){return c.default.render(u.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,r.apiRunner)("onInitialClientRender")})})})})},"./.cache/redirects.json":function(e,o){e.exports=[]},"./.cache/register-service-worker.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=n("./.cache/emitter.js"),r=t(s),a="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(a+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var o=e.installing;console.log("installingWorker",o),o.addEventListener("statechange",function(){switch(o.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),r.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},"./node_modules/domready/ready.js":function(e,o,n){!function(o,n){e.exports=n()}("domready",function(){var e,o=[],n=document,t=n.documentElement.doScroll,s="DOMContentLoaded",r=(t?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return r||n.addEventListener(s,e=function(){for(n.removeEventListener(s,e),r=1;e=o.shift();)e()}),function(e){r?setTimeout(e,0):o.push(e)}})},"./node_modules/gatsby-module-loader/patch.js":function(e,o,n){"use strict";function t(){function e(e){var o=t.lastChild;return"SCRIPT"!==o.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",o)):void(o.onload=o.onerror=function(){o.onload=o.onerror=null,setTimeout(e,0)})}var o,t=document.querySelector("head"),s=n.e,r=n.s;n.e=function(t,a){var u=!1,i=!0,c=function(e){a&&(a(n,e),a=null)};return!r&&o&&o[t]?void c(!0):(s(t,function(){u||(u=!0,i?setTimeout(function(){c()}):c())}),void(u||(i=!1,e(function(){u||(u=!0,r?r[t]=void 0:(o||(o={}),o[t]=!0),c(!0))}))))}}t()},"./node_modules/hoist-non-react-statics/index.js":function(e,o){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s=Object.defineProperty,r=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,c=i&&i(Object);e.exports=function e(o,l,d){if("string"!=typeof l){if(c){var p=i(l);p&&p!==c&&e(o,p,d)}var m=r(l);a&&(m=m.concat(a(l)));for(var f=0;f<m.length;++f){var h=m[f];if(!(n[h]||t[h]||d&&d[h])){var g=u(l,h);try{s(o,h,g)}catch(e){}}}return o}return o}},"./node_modules/mitt/dist/mitt.js":function(e,o){function n(e){return e=e||Object.create(null),{on:function(o,n){(e[o]||(e[o]=[])).push(n)},off:function(o,n){e[o]&&e[o].splice(e[o].indexOf(n)>>>0,1)},emit:function(o,n){(e[o]||[]).map(function(e){e(n)}),(e["*"]||[]).map(function(e){e(o,n)})}}}e.exports=n},"./node_modules/process/browser.js":function(e,o){function n(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function s(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(o){try{return l.call(null,e,0)}catch(o){return l.call(this,e,0)}}}function r(e){if(d===clearTimeout)return clearTimeout(e);if((d===t||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(o){try{return d.call(null,e)}catch(o){return d.call(this,e)}}}function a(){h&&m&&(h=!1,m.length?f=m.concat(f):g=-1,f.length&&u())}function u(){if(!h){var e=s(a);h=!0;for(var o=f.length;o;){for(m=f,f=[];++g<o;)m&&m[g].run();g=-1,o=f.length}m=null,h=!1,r(e)}}function i(e,o){this.fun=e,this.array=o}function c(){}var l,d,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{d="function"==typeof clearTimeout?clearTimeout:t}catch(e){d=t}}();var m,f=[],h=!1,g=-1;p.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)o[n-1]=arguments[n];f.push(new i(e,o)),1!==f.length||h||s(u)},i.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-404-js!./src/pages/404.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x9427c64ab85d,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/dev/Projects/declanvk.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/dev/Projects/declanvk.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/dev/Projects/declanvk.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/dev/Projects/declanvk.github.io/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/dev/Projects/declanvk.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/dev/Projects/declanvk.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/404.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-js!./src/pages/index.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(35783957827783,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/dev/Projects/declanvk.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/dev/Projects/declanvk.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/dev/Projects/declanvk.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/dev/Projects/declanvk.github.io/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/dev/Projects/declanvk.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/dev/Projects/declanvk.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-page-2-js!./src/pages/page-2.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xc6c285f8fd10,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/dev/Projects/declanvk.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/dev/Projects/declanvk.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/dev/Projects/declanvk.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/dev/Projects/declanvk.github.io/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/dev/Projects/declanvk.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/dev/Projects/declanvk.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/page-2.js')})})}}});
//# sourceMappingURL=app-cb897ff214cb924c862b.js.map