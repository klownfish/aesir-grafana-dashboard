(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"8M//":function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n("UvM7"),a=n("NXk7"),o=n("3SGO"),i=n("KyLG"),s=n("GQ3c"),c=n("rd46"),l=n("Obii"),u=n("50r9"),p=n("jL/7");function f(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){f(o,r,a,i,s,"next",e)}function s(e){f(o,r,a,i,s,"throw",e)}i(void 0)}))}}function h(e,t,n){return m.apply(this,arguments)}function m(){return(m=d(regeneratorRuntime.mark((function e(t,n,r){var i,s,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.b.getDashboardBySlug(t);case 2:(i=e.sent)&&(s=i.meta.url,-1!==r.indexOf("dashboard-solo")&&(s=s.replace("/d/","/d-solo/")),c=l.locationUtil.stripBaseFromUrl(s),n(Object(o.d)({path:c,partial:!0,replace:!0})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e,t,n){return y.apply(this,arguments)}function y(){return(y=d(regeneratorRuntime.mark((function e(t,n,r){var c,u,p,f,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,e.t0=t.routeInfo,e.next=e.t0===s.DashboardRouteInfo.Home?4:e.t0===s.DashboardRouteInfo.Normal?15:e.t0===s.DashboardRouteInfo.New?29:30;break;case 4:return e.next=6,a.b.get("/api/dashboards/home");case 6:if(!(c=e.sent).redirectUri){e.next=11;break}return u=l.locationUtil.stripBaseFromUrl(c.redirectUri),n(Object(o.d)({path:u,replace:!0})),e.abrupt("return",null);case 11:return c.meta.canSave=!1,c.meta.canShare=!1,c.meta.canStar=!1,e.abrupt("return",c);case 15:if("db"!==t.urlType){e.next=18;break}return h(t.urlSlug,n,r().location.path),e.abrupt("return",null);case 18:return p=t.$injector.get("dashboardLoaderSrv"),e.next=21,p.loadDashboard(t.urlType,t.urlSlug,t.urlUid);case 21:if(f=e.sent,!t.fixUrl||!f.meta.url){e.next=28;break}if(d=l.locationUtil.stripBaseFromUrl(f.meta.url),m=r().location.path,d===m){e.next=28;break}return n(Object(o.d)({path:d,partial:!0,replace:!0})),e.abrupt("return",null);case 28:return e.abrupt("return",f);case 29:return e.abrupt("return",v(t.urlFolderId));case 30:throw{message:"Unknown route "+t.routeInfo};case 31:e.next=40;break;case 33:if(e.prev=33,e.t1=e.catch(0),!e.t1.cancelled){e.next=37;break}return e.abrupt("return",null);case 37:return n(Object(i.f)({message:"Failed to fetch dashboard",error:e.t1})),console.error(e.t1),e.abrupt("return",null);case 40:case"end":return e.stop()}}),e,null,[[0,33]])})))).apply(this,arguments)}function g(e){return function(){var t=d(regeneratorRuntime.mark((function t(n,a){var l,f,d,h,m,y,g,v,O,E,k,S,P,C,j;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(i.g)()),setTimeout((function(){null===a().dashboard.getModel()&&n(Object(i.i)())}),500),t.next=4,b(e,n,a);case 4:if(l=t.sent){t.next=7;break}return t.abrupt("return");case 7:n(Object(i.h)()),t.prev=8,f=new c.a(l.dashboard,l.meta),t.next=17;break;case 12:return t.prev=12,t.t0=t.catch(8),n(Object(i.f)({message:"Failed create dashboard model",error:t.t0})),console.error(t.t0),t.abrupt("return");case 17:return(d=a()).location.query.orgId||n(Object(o.d)({query:{orgId:d.user.orgId},partial:!0,replace:!0})),h=e.$injector.get("timeSrv"),m=e.$injector.get("annotationsSrv"),y=e.$injector.get("keybindingSrv"),g=e.$injector.get("unsavedChangesSrv"),v=e.$injector.get("dashboardSrv"),h.init(f),m.init(f),d.dashboard.modifiedQueries&&(O=d.dashboard.modifiedQueries,E=O.panelId,k=O.queries,f.meta.fromExplore=!(!E||!k)),t.next=29,n(Object(u.c)(e.urlUid,f));case 29:if(a().templating.transaction.uid===e.urlUid){t.next=31;break}return t.abrupt("return");case 31:if(a().dashboard.initPhase===s.DashboardInitPhase.Services){t.next=33;break}return t.abrupt("return");case 33:try{f.processRepeats(),f.updateSubmenuVisibility(),(S=a().location.query).autofitpanels&&f.autoFitPanels(window.innerHeight,S.kiosk),g.init(f,e.$scope),y.setupDashboardBindings(e.$scope,f)}catch(e){n(Object(o.b)(Object(r.a)("Dashboard init failed",e))),console.error(e)}d.dashboard.modifiedQueries&&(P=d.dashboard.modifiedQueries,C=P.panelId,j=P.queries,w(n,f,C,j)),v.setCurrent(f),e.routeInfo!==s.DashboardRouteInfo.New&&Object(p.a)(f),n(Object(i.e)(f));case 38:case"end":return t.stop()}}),t,null,[[8,12]])})));return function(e,n){return t.apply(this,arguments)}}()}function v(e){var t={meta:{canStar:!1,canShare:!1,isNew:!0,folderId:0},dashboard:{title:"New dashboard",panels:[{type:"add-panel",gridPos:{x:0,y:0,w:12,h:9},title:"Panel Title"}]}};return e&&(t.meta.folderId=parseInt(e,10)),t}function w(e,t,n,r){var a=t.panels.findIndex((function(e){return e.id===n}));a>-1&&(t.panels[a].targets=r),e(Object(i.d)())}},Cved:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.Data="data",e.Meta="meta",e.Error="error",e.Stats="stats",e.JSON="json",e.Query="query"}(r||(r={}))},Yuww:function(e,t,n){"use strict";var r,a=n("q1tI"),o=n.n(a),i=n("TSYQ"),s=n.n(i),c=n("jYz7"),l=n("/MKj"),u=n("LvDl"),p=n("Obii"),f=n("kDLi"),d=n("Csm0"),h=n("t8hP"),m=n("5kRJ"),b=n("NPB1"),y=n("Cved");function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}!function(e){e.Error="Error",e.Info="Info",e.Links="Links"}(r||(r={}));var S=function(e){function t(){var e,n;v(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=O(this,(e=E(t)).call.apply(e,[this].concat(i)))).timeSrv=Object(b.a)(),n.getInfoMode=function(){var e=n.props,t=e.panel;return e.error?r.Error:t.description?r.Info:t.links&&t.links.length?r.Links:void 0},n.getInfoContent=function(){var e=n.props.panel,t=e.description||"",r=m.a.replace(t,e.scopedVars),a=Object(p.renderMarkdown)(r),i=n.props.links&&n.props.links.getLinks(e);return o.a.createElement("div",{className:"panel-info-content markdown-html"},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}}),i&&i.length>0&&o.a.createElement("ul",{className:"panel-info-corner-links"},i.map((function(e,t){return o.a.createElement("li",{key:t},o.a.createElement("a",{className:"panel-info-corner-links__item",href:e.href,target:e.target},e.title))}))))},n.onClickError=function(){Object(h.getLocationSrv)().update({partial:!0,query:{inspect:n.props.panel.id,inspectTab:y.a.Error}})},n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,e),n=t,(a=[{key:"renderCornerType",value:function(e,t,n){var a=e===r.Error?"error":"info";return o.a.createElement(f.Tooltip,{content:t,placement:"top-start",theme:a},o.a.createElement("div",{className:"panel-info-corner panel-info-corner--".concat(e.toLowerCase()),onClick:n},o.a.createElement("i",{className:"fa"}),o.a.createElement("span",{className:"panel-info-corner-inner"})))}},{key:"render",value:function(){var e=this.props.error,t=this.getInfoMode();return t?t===r.Error&&e?this.renderCornerType(t,e,this.onClickError):t===r.Info||t===r.Links?this.renderCornerType(t,this.getInfoContent):null:null}}])&&w(n.prototype,a),i&&w(n,i),t}(a.Component),P=n("kDDq");function C(){var e=I(["\n    position: absolute;\n    top: 7px;\n    right: ",";\n    color: ",";\n  "]);return C=function(){return e},e}function j(){var e=I(["\n    margin-right: ",";\n    a::after {\n      display: none;\n    }\n  "]);return j=function(){return e},e}function I(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var x=function(e){var t="submenu"===e.type,n="divider"===e.type,r=Object(f.useTheme)(),a=Object(P.css)(j(),r.spacing.sm),i=Object(P.css)(C(),r.spacing.xs,r.colors.textWeak);return n?o.a.createElement("li",{className:"divider"}):o.a.createElement("li",{className:t?"dropdown-submenu":void 0},o.a.createElement("a",{onClick:e.onClick,href:e.href},e.iconClassName&&o.a.createElement(f.Icon,{name:e.iconClassName,className:a}),o.a.createElement("span",{className:"dropdown-item-text","aria-label":d.selectors.components.Panels.Panel.headerItems(e.text)},e.text,t&&o.a.createElement(f.Icon,{name:"angle-right",className:i})),e.shortcut&&o.a.createElement("span",{className:"dropdown-menu-item-shortcut"},o.a.createElement(f.Icon,{name:"keyboard",className:a})," ",e.shortcut)),e.children)};function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var M=function(e){function t(){var e,n;N(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=T(this,(e=_(t)).call.apply(e,[this].concat(a)))).renderItems=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return o.a.createElement("ul",{className:"dropdown-menu dropdown-menu--menu panel-menu",role:t?"":"menu"},e.map((function(e,t){return o.a.createElement(x,{key:"".concat(e.text).concat(t),type:e.type,text:e.text,iconClassName:e.iconClassName,onClick:e.onClick,shortcut:e.shortcut},e.subMenu&&n.renderItems(e.subMenu,!0))})))},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return o.a.createElement("div",{className:"panel-menu-container dropdown open"},this.renderItems(this.props.items))}}])&&L(n.prototype,r),a&&L(n,a),t}(a.PureComponent),V=n("MAcC"),U=n("3SGO"),q=n("iODs"),F=n("+JUD"),Q=n("umNM"),z=n("Efza"),H=n("m257");function A(e,t,n){var r=function(e){Object(h.getLocationSrv)().update({partial:!0,query:{inspect:t.id,inspectTab:e}})},a=[];t.isEditing||a.push({text:"View",iconClassName:"eye",onClick:function(e){e.preventDefault(),q.d.dispatch(Object(U.d)({query:{viewPanel:t.id},partial:!0}))},shortcut:"v"}),e.canEditPanel(t)&&!t.isEditing&&a.push({text:"Edit",iconClassName:"edit",onClick:function(e){e.preventDefault(),q.d.dispatch(Object(U.d)({query:{editPanel:t.id},partial:!0}))},shortcut:"e"}),a.push({text:"Share",iconClassName:"share-alt",onClick:function(n){n.preventDefault(),Object(F.e)(e,t)},shortcut:"p s"}),!Q.a.hasAccessToExplore()||t.plugin&&t.plugin.meta.skipDataQuery||a.push({text:"Explore",iconClassName:"compass",shortcut:"x",onClick:function(e){e.preventDefault();var n=e.ctrlKey||e.metaKey?function(e){return window.open(e)}:void 0;q.d.dispatch(Object(z.l)(t,{getDataSourceSrv:h.getDataSourceSrv,getTimeSrv:b.a,getExploreUrl:H.j,openInNewWindow:n}))}});var o=[];t.plugin&&!t.plugin.meta.skipDataQuery&&(o.push({text:"Data",onClick:function(e){return r("data")}}),e.meta.canEdit&&o.push({text:"Query",onClick:function(e){return r("query")}})),o.push({text:"Panel JSON",onClick:function(e){return r("json")}}),a.push({type:"submenu",text:"Inspect",iconClassName:"info-circle",onClick:function(e){return r()},shortcut:"i",subMenu:o});var i=[];return!e.canEditPanel(t)||t.isViewing||t.isEditing||(i.push({text:"Duplicate",onClick:function(n){n.preventDefault(),Object(F.c)(e,t)},shortcut:"p d"}),i.push({text:"Copy",onClick:function(e){e.preventDefault(),Object(F.b)(t)}})),n&&function(){var e=n.getScope(),t=e.$$childHead.ctrl,r=t.getExtendedMenu(),a=!0,o=!1,s=void 0;try{for(var c,l=function(){var n=c.value,r={text:n.text,href:n.href,shortcut:n.shortcut};n.click&&(r.onClick=function(){e.$eval(n.click,{ctrl:t})}),i.push(r)},u=r[Symbol.iterator]();!(a=(c=u.next()).done);a=!0)l()}catch(e){o=!0,s=e}finally{try{a||null==u.return||u.return()}finally{if(o)throw s}}}(),!t.isEditing&&i.length&&a.push({type:"submenu",text:"More...",iconClassName:"cube",subMenu:i,onClick:function(e){e.preventDefault()}}),e.canEditPanel(t)&&!t.isEditing&&(a.push({type:"divider",text:""}),a.push({text:"Remove",iconClassName:"trash-alt",onClick:function(n){n.preventDefault(),Object(F.d)(e,t,!0)},shortcut:"p r"})),a}function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function J(e,t){return!t||"object"!==W(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var X=function(e){function t(){var e,n;$(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=J(this,(e=K(t)).call.apply(e,[this].concat(a)))).clickCoordinates={x:0,y:0},n.state={panelMenuOpen:!1,menuItems:[]},n.eventToClickCoordinates=function(e){return{x:e.clientX,y:e.clientY}},n.onMouseDown=function(e){n.clickCoordinates=n.eventToClickCoordinates(e)},n.isClick=function(e){return Object(u.isEqual)(e,n.clickCoordinates)},n.onMenuToggle=function(e){if(n.isClick(n.eventToClickCoordinates(e))){e.stopPropagation();var t=n.props,r=A(t.dashboard,t.panel,t.angularComponent);n.setState({panelMenuOpen:!n.state.panelMenuOpen,menuItems:r})}},n.closeMenu=function(){n.setState({panelMenuOpen:!1})},n.onCancelQuery=function(){n.props.panel.getQueryRunner().cancelQuery()},n.openInspect=function(e,t){var r=n.props,a=r.updateLocation,o=r.panel;e.stopPropagation(),a({query:{inspect:o.id,inspectTab:t},partial:!0})},n.renderNotice=function(e){return o.a.createElement(f.Tooltip,{content:e.text,key:e.severity},e.inspect?o.a.createElement("div",{className:"panel-info-notice pointer",onClick:function(t){return n.openInspect(t,e.inspect)}},o.a.createElement(f.Icon,{name:"info-circle",style:{marginRight:"8px"}})):o.a.createElement("a",{className:"panel-info-notice",href:e.link,target:"_blank"},o.a.createElement(f.Icon,{name:"info-circle",style:{marginRight:"8px"}})))},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(t,e),n=t,(r=[{key:"renderLoadingState",value:function(){return o.a.createElement("div",{className:"panel-loading",onClick:this.onCancelQuery},o.a.createElement(f.Tooltip,{content:"Cancel query"},o.a.createElement(f.Icon,{className:"panel-loading__spinner spin-clockwise",name:"sync"})))}},{key:"render",value:function(){var e=this.props,t=e.panel,n=e.scopedVars,r=e.error,a=e.isViewing,i=e.isEditing,c=e.data,l=e.alertState,u=this.state.menuItems,h=m.a.replace(t.title,n,"text"),b=s()({"panel-header":!0,"grid-drag-handle":!(a||i)}),y={},g=!0,v=!1,w=void 0;try{for(var O,E=c.series[Symbol.iterator]();!(g=(O=E.next()).done);g=!0){var k=O.value;if(k.meta&&k.meta.notices){var P=!0,C=!1,j=void 0;try{for(var I,x=k.meta.notices[Symbol.iterator]();!(P=(I=x.next()).done);P=!0){var D=I.value;y[D.severity]=D}}catch(e){C=!0,j=e}finally{try{P||null==x.return||x.return()}finally{if(C)throw j}}}}}catch(e){v=!0,w=e}finally{try{g||null==E.return||E.return()}finally{if(v)throw w}}return o.a.createElement(o.a.Fragment,null,c.state===p.LoadingState.Loading&&this.renderLoadingState(),o.a.createElement("div",{className:b},o.a.createElement(S,{panel:t,title:t.title,description:t.description,scopedVars:t.scopedVars,links:Object(V.b)(t),error:r}),o.a.createElement("div",{className:"panel-title-container",onClick:this.onMenuToggle,onMouseDown:this.onMouseDown,"aria-label":d.selectors.components.Panels.Panel.title(h)},o.a.createElement("div",{className:"panel-title"},Object.values(y).map(this.renderNotice),l&&o.a.createElement(f.Icon,{name:"alerting"===l?"heart-break":"heart",className:"icon-gf panel-alert-icon",style:{marginRight:"4px"},size:"sm"}),o.a.createElement("span",{className:"panel-title-text"},h),o.a.createElement(f.Icon,{name:"angle-down",className:"panel-menu-toggle"}),this.state.panelMenuOpen&&o.a.createElement(f.ClickOutsideWrapper,{onClick:this.closeMenu,parent:document},o.a.createElement(M,{items:u})),c.request&&c.request.timeInfo&&o.a.createElement("span",{className:"panel-time-info"},o.a.createElement(f.Icon,{name:"clock-nine",size:"sm"})," ",c.request.timeInfo)))))}}])&&B(n.prototype,r),a&&B(n,a),t}(a.Component),Y=n("T9PE"),Z=n("kHZm"),ee=n("ZFWI"),te=n("eXZ6");function ne(e){return(ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){oe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ie(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function se(e,t){return!t||"object"!==ne(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ce(e){return(ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function le(e,t){return(le=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ue=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=se(this,ce(t).call(this,e))).timeSrv=Object(b.a)(),n.onRefresh=function(){var e=n.props,t=e.panel,r=e.isInView,a=e.width;if(r){var o=Object(F.a)(t,n.timeSrv.timeRange());if(n.wantsQueryExecution){if(a<0)return;t.getQueryRunner().run({datasource:t.datasource,queries:t.targets,panelId:t.id,dashboardId:n.props.dashboard.id,timezone:n.props.dashboard.getTimezone(),timeRange:o.timeRange,timeInfo:o.timeInfo,maxDataPoints:t.maxDataPoints||a,minInterval:t.interval,scopedVars:t.scopedVars,cacheTimeout:t.cacheTimeout,transformations:t.transformations})}else n.onRender()}else n.setState({refreshWhenInView:!0})},n.onRender=function(){var e={renderCounter:n.state.renderCounter+1};n.setState(e)},n.onOptionsChange=function(e){n.props.panel.updateOptions(e)},n.onFieldConfigChange=function(e){n.props.panel.updateFieldConfig(e)},n.onPanelError=function(e){n.state.errorMessage!==e&&n.setState({errorMessage:e})},n.onChangeTimeRange=function(e){n.timeSrv.setTime({from:Object(p.toUtc)(e.from),to:Object(p.toUtc)(e.to)})},n.state={isFirstLoad:!0,renderCounter:0,refreshWhenInView:!1,data:{state:p.LoadingState.NotStarted,series:[],timeRange:p.DefaultTimeRange}},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&le(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.panel,r=t.dashboard;n.events.on(p.PanelEvents.refresh,this.onRefresh),n.events.on(p.PanelEvents.render,this.onRender),r.panelInitialized(this.props.panel),this.hasPanelSnapshot?this.setState({data:ae({},this.state.data,{state:p.LoadingState.Done,series:Object(Z.a)(n.snapshotData)}),isFirstLoad:!1}):(this.wantsQueryExecution||this.setState({isFirstLoad:!1}),this.querySubscription=n.getQueryRunner().getData({withTransforms:!0,withFieldConfig:!0}).subscribe({next:function(t){return e.onDataUpdate(t)}}))}},{key:"componentWillUnmount",value:function(){this.props.panel.events.off(p.PanelEvents.refresh,this.onRefresh),this.props.panel.events.off(p.PanelEvents.render,this.onRender),this.querySubscription&&this.querySubscription.unsubscribe()}},{key:"componentDidUpdate",value:function(e){var t=this.props.isInView;t!==e.isInView&&t&&this.state.refreshWhenInView&&this.onRefresh()}},{key:"onDataUpdate",value:function(e){if(this.props.isInView){var t,n=this.state.isFirstLoad;switch(e.state){case p.LoadingState.Loading:if(this.state.data.state===p.LoadingState.Loading)return;break;case p.LoadingState.Error:var r=e.error;r&&t!==r.message&&(t=r.message);break;case p.LoadingState.Done:this.props.dashboard.snapshot&&(this.props.panel.snapshotData=e.series.map((function(e){return Object(p.toDataFrameDTO)(e)}))),n&&(n=!1)}this.setState({isFirstLoad:n,errorMessage:t,data:e})}}},{key:"shouldSignalRenderingCompleted",value:function(e,t){return e===p.LoadingState.Done||t.skipDataQuery}},{key:"renderPanel",value:function(e,t){var n=this.props,r=n.panel,a=n.plugin,i=this.state,c=i.renderCounter,l=i.data,u=i.isFirstLoad,f=ee.b.theme,d=l.state;if(u&&(d===p.LoadingState.Loading||d===p.LoadingState.NotStarted))return null;this.shouldSignalRenderingCompleted(d,a.meta)&&Y.a.renderingCompleted();var h=a.panel,m=l.timeRange||this.timeSrv.timeRange(),b=this.hasOverlayHeader()?0:f.panelHeaderHeight,y=a.noPadding?0:f.panelPadding,g=e-2*y-te.i,v=t-b-2*y-te.i,w=s()({"panel-content":!0,"panel-content--no-padding":a.noPadding}),O=r.getOptions();return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:w},o.a.createElement(h,{id:r.id,data:l,title:r.title,timeRange:m,timeZone:this.props.dashboard.getTimezone(),options:O,fieldConfig:r.fieldConfig,transparent:r.transparent,width:g,height:v,renderCounter:c,replaceVariables:r.replaceVariables,onOptionsChange:this.onOptionsChange,onFieldConfigChange:this.onFieldConfigChange,onChangeTimeRange:this.onChangeTimeRange})))}},{key:"hasOverlayHeader",value:function(){var e=this.props.panel,t=this.state,n=t.errorMessage,r=t.data;return!(n||r.request&&r.request.timeInfo||e.hasTitle())}},{key:"render",value:function(){var e=this,t=this.props,n=t.dashboard,r=t.panel,a=t.isViewing,i=t.isEditing,c=t.width,l=t.height,u=t.updateLocation,p=this.state,h=p.errorMessage,m=p.data,b=r.transparent,y=s()({"panel-container":!0,"panel-container--absolute":!0,"panel-container--transparent":b,"panel-container--no-title":this.hasOverlayHeader()});return o.a.createElement("div",{className:y,"aria-label":d.selectors.components.Panels.Panel.containerByTitle(r.title)},o.a.createElement(X,{panel:r,dashboard:n,title:r.title,description:r.description,scopedVars:r.scopedVars,links:r.links,error:h,isEditing:i,isViewing:a,data:m,updateLocation:u}),o.a.createElement(f.ErrorBoundary,null,(function(t){var n=t.error;return n?(e.onPanelError(n.message||"Error in plugin"),null):e.renderPanel(c,l)})))}},{key:"hasPanelSnapshot",get:function(){var e=this.props.panel;return e.snapshotData&&e.snapshotData.length}},{key:"wantsQueryExecution",get:function(){return!(this.props.plugin.meta.skipDataQuery||this.hasPanelSnapshot)}}])&&ie(n.prototype,r),a&&ie(n,a),t}(a.PureComponent),pe=n("KyLG");function fe(e){return(fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function de(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function he(e,t){return!t||"object"!==fe(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function me(e){return(me=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function be(e,t){return(be=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ye=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=he(this,me(t).call(this,e))).element=null,n.timeSrv=Object(b.a)(),n.onPanelRenderEvent=function(e){var t=n.state.alertState;e&&e.alertState&&n.props.panel.alert?n.setState({alertState:e.alertState}):e&&e.alertState&&!n.props.panel.alert?n.setState({alertState:void 0}):e&&t?n.setState({alertState:void 0}):n.forceUpdate()},n.state={data:{state:p.LoadingState.NotStarted,series:[],timeRange:p.DefaultTimeRange}},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&be(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this,t=this.props.panel;this.loadAngularPanel();var n=t.getQueryRunner();this.querySubscription=n.getData({withTransforms:!1,withFieldConfig:!1}).subscribe({next:function(t){return e.onPanelDataUpdate(t)}})}},{key:"subscribeToRenderEvent",value:function(){this.props.panel.events.on(p.PanelEvents.render,this.onPanelRenderEvent)}},{key:"onPanelDataUpdate",value:function(e){var t;if(e.state===p.LoadingState.Error){var n=e.error;n&&t!==n.message&&(t=n.message)}this.setState({data:e,errorMessage:t})}},{key:"componentWillUnmount",value:function(){this.cleanUpAngularPanel(),this.querySubscription&&this.querySubscription.unsubscribe(),this.props.panel.events.off(p.PanelEvents.render,this.onPanelRenderEvent)}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,r=n.plugin,a=n.height,o=n.width,i=n.panel;e.plugin!==r&&(this.cleanUpAngularPanel(),this.loadAngularPanel()),e.width===o&&e.height===a||this.scopeProps&&(this.scopeProps.size.height=this.getInnerPanelHeight(),this.scopeProps.size.width=this.getInnerPanelWidth(),i.events.emit(p.PanelEvents.panelSizeChanged))}},{key:"getInnerPanelHeight",value:function(){var e=this.props,t=e.plugin,n=e.height,r=ee.b.theme;return n-(this.hasOverlayHeader()?0:r.panelHeaderHeight)-2*(t.noPadding?0:r.panelPadding)-te.i}},{key:"getInnerPanelWidth",value:function(){var e=this.props,t=e.plugin,n=e.width,r=ee.b.theme;return n-2*(t.noPadding?0:r.panelPadding)-te.i}},{key:"loadAngularPanel",value:function(){var e=this.props,t=e.panel,n=e.dashboard,r=e.setPanelAngularComponent;if(this.element){var a=Object(h.getAngularLoader)();this.scopeProps={panel:t,dashboard:n,size:{width:this.getInnerPanelWidth(),height:this.getInnerPanelHeight()}},r({panelId:t.id,angularComponent:a.load(this.element,this.scopeProps,'<plugin-component type="panel" class="panel-height-helper"></plugin-component>')}),this.subscribeToRenderEvent()}}},{key:"cleanUpAngularPanel",value:function(){var e=this.props,t=e.angularComponent,n=e.setPanelAngularComponent,r=e.panel;t&&t.destroy(),n({panelId:r.id,angularComponent:null})}},{key:"hasOverlayHeader",value:function(){var e=this.props.panel,t=this.state,n=t.errorMessage,r=t.data;return!(n||r.request&&r.request.timeInfo||e.hasTitle())}},{key:"render",value:function(){var e,t,n,r=this,a=this.props,i=a.dashboard,c=a.panel,l=a.isViewing,u=a.isEditing,p=a.plugin,f=a.angularComponent,h=a.updateLocation,m=this.state,b=m.errorMessage,y=m.data,g=m.alertState,v=c.transparent,w=s()((e={"panel-container":!0,"panel-container--absolute":!0,"panel-container--transparent":v,"panel-container--no-title":this.hasOverlayHeader(),"panel-has-alert":void 0!==c.alert},t="panel-alert-state--".concat(g),n=void 0!==g,t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e)),O=s()({"panel-content":!0,"panel-content--no-padding":p.noPadding});return o.a.createElement("div",{className:w,"aria-label":d.selectors.components.Panels.Panel.containerByTitle(c.title)},o.a.createElement(X,{panel:c,dashboard:i,title:c.title,description:c.description,scopedVars:c.scopedVars,angularComponent:f,links:c.links,error:b,isViewing:l,isEditing:u,data:y,updateLocation:h,alertState:g}),o.a.createElement("div",{className:O},o.a.createElement("div",{ref:function(e){return r.element=e},className:"panel-height-helper"})))}}])&&de(n.prototype,r),a&&de(n,a),t}(a.PureComponent),ge={setPanelAngularComponent:pe.n,updateLocation:U.d},ve=Object(l.connect)((function(e,t){return{angularComponent:e.dashboard.panels[t.panel.id].angularComponent}}),ge)(ye),we=n("J4KJ"),Oe=n("13X4");function Ee(e){return(Ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ke(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Se(e,t){return!t||"object"!==Ee(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Pe(e){return(Pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ce(e,t){return(Ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return xe}));var je=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=Se(this,Pe(t).call(this,e))).specialPanels={},n.onMouseEnter=function(){n.props.dashboard.setPanelFocus(n.props.panel.id)},n.onMouseLeave=function(){n.props.dashboard.setPanelFocus(0)},n.state={isLazy:!e.isInView},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ce(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.props.initDashboardPanel(this.props.panel)}},{key:"componentDidUpdate",value:function(){this.state.isLazy&&this.props.isInView&&this.setState({isLazy:!1})}},{key:"renderPanel",value:function(e){var t=this.props,n=t.dashboard,r=t.panel,a=t.isViewing,i=t.isInView,s=t.isEditing,l=t.updateLocation;return o.a.createElement(c.a,null,(function(t){var c=t.width,u=t.height;return 0===c?null:e.angularPanelCtrl?o.a.createElement(ve,{plugin:e,panel:r,dashboard:n,isViewing:a,isEditing:s,isInView:i,width:c,height:u}):o.a.createElement(ue,{plugin:e,panel:r,dashboard:n,isViewing:a,isEditing:s,isInView:i,width:c,height:u,updateLocation:l})}))}},{key:"render",value:function(){var e=this.props,t=e.isViewing,n=e.plugin,r=this.state.isLazy;if(!n)return null;if(r)return null;var a=s()({"panel-wrapper":!0,"panel-wrapper--view":t});return o.a.createElement("div",{className:a,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave},this.renderPanel(n))}}])&&ke(n.prototype,r),a&&ke(n,a),t}(a.PureComponent),Ie={initDashboardPanel:we.f,updateLocation:Oe.b},xe=Object(l.connect)((function(e,t){var n=e.dashboard.panels[t.panel.id];return n?{plugin:n.plugin}:{plugin:null}}),Ie)(je)}}]);
//# sourceMappingURL=default~DashboardPage~SoloPanelPage.53357ab538498b4b1638.js.map