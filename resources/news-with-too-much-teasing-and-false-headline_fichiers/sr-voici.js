var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,e,m){a instanceof String&&(a=String(a));for(var q=a.length,c=0;c<q;c++){var g=a[c];if(e.call(m,g,c,a))return{i:c,v:g}}return{i:-1,v:void 0}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,e,m){if(m.get||m.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[e]=m.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,e,m,q){if(e){m=$jscomp.global;a=a.split(".");for(q=0;q<a.length-1;q++){var c=a[q];c in m||(m[c]={});m=m[c]}a=a[a.length-1];q=m[a];e=e(q);e!=q&&null!=e&&$jscomp.defineProperty(m,a,{configurable:!0,writable:!0,value:e})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,m){return $jscomp.findInternal(this,a,m).v}},"es6-impl","es3");$jscomp.SYMBOL_PREFIX="jscomp_symbol_";$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(a){return $jscomp.SYMBOL_PREFIX+(a||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(a){var e=0;return $jscomp.iteratorPrototype(function(){return e<a.length?{done:!1,value:a[e++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};$jscomp.iteratorFromArray=function(a,e){$jscomp.initSymbolIterator();a instanceof String&&(a+="");var m=0,q={next:function(){if(m<a.length){var c=m++;return{value:e(c,a[c]),done:!1}}q.next=function(){return{done:!0,value:void 0}};return q.next()}};q[Symbol.iterator]=function(){return q};return q};
$jscomp.polyfill("Array.prototype.keys",function(a){return a?a:function(){return $jscomp.iteratorFromArray(this,function(a){return a})}},"es6-impl","es3");$jscomp.polyfill("Object.is",function(a){return a?a:function(a,m){return a===m?0!==a||1/a===1/m:a!==a&&m!==m}},"es6-impl","es3");
$jscomp.polyfill("Array.prototype.includes",function(a){return a?a:function(a,m){var e=this;e instanceof String&&(e=String(e));for(var c=e.length,g=m||0;g<c;g++)if(e[g]==a||Object.is(e[g],a))return!0;return!1}},"es7","es3");
$jscomp.checkStringArgs=function(a,e,m){if(null==a)throw new TypeError("The 'this' value for String.prototype."+m+" must not be null or undefined");if(e instanceof RegExp)throw new TypeError("First argument to String.prototype."+m+" must not be a regular expression");return a+""};$jscomp.polyfill("String.prototype.includes",function(a){return a?a:function(a,m){return-1!==$jscomp.checkStringArgs(this,a,"includes").indexOf(a,m||0)}},"es6-impl","es3");
$jscomp.polyfill("String.prototype.startsWith",function(a){return a?a:function(a,m){var e=$jscomp.checkStringArgs(this,a,"startsWith");a+="";for(var c=e.length,g=a.length,n=Math.max(0,Math.min(m|0,e.length)),v=0;v<g&&n<c;)if(e[n++]!=a[v++])return!1;return v>=g}},"es6-impl","es3");
(function(a,e,m,q,c,g){function n(d,a){var c=typeof d[a];return"function"==c||!("object"!=c||!d[a])||"unknown"==c}function v(){if(!S){S=!0;for(var d=0;d<Q.length;d++)Q[d]();Q.length=0}}function k(d,a){S?d.call(a):Q.push(function(){d.call(a)})}function x(d){var a=d.toLowerCase().match(P);try{var c=a[2],r=a[3],e=a[4]||"";if("http:"==c&&":80"==e||"https:"==c&&":443"==e)e="";return c+"//"+r+e}catch(Ca){return console.log("url could not be parsed",d),""}}function z(d,a){var c="",r=d.indexOf("#");-1!==
r&&(c=d.substring(r),d=d.substring(0,r));var r=[],e;for(e in a)a.hasOwnProperty(e)&&r.push(e+"="+g(a[e]));return d+(w?"#":-1==d.indexOf("?")?"?":"&")+r.join("&")+c}function A(d){return"undefined"===typeof d}function t(d,a,c){var r,e;for(e in a)a.hasOwnProperty(e)&&(e in d?(r=a[e],"object"===typeof r?t(d[e],r,c):c||(d[e]=a[e])):d[e]=a[e]);return d}function C(d){if(A(l)){var a=e.body.appendChild(e.createElement("form")),c=a.appendChild(e.createElement("input"));c.name=L+"TEST"+F;l=c!==a.elements[c.name];
e.body.removeChild(a)}l?a=e.createElement('<iframe name="'+d.props.name+'"/>'):(a=e.createElement("IFRAME"),a.name=d.props.name);a.id=a.name=d.props.name;delete d.props.name;"string"==typeof d.container&&(d.container=e.getElementById(d.container));d.container||(t(a.style,{position:"absolute",top:"-2000px",left:"0px"}),d.container=e.body);c=d.props.src;d.props.src="javascript:false";t(a,d.props);a.border=a.frameBorder=0;a.allowTransparency=!0;d.container.appendChild(a);d.onLoad&&H(a,"load",d.onLoad);
if(d.usePost){var r=d.container.appendChild(e.createElement("form")),g;r.target=a.name;r.action=c;r.method="POST";if("object"===typeof d.usePost)for(var k in d.usePost)d.usePost.hasOwnProperty(k)&&(l?g=e.createElement('<input name="'+k+'"/>'):(g=e.createElement("INPUT"),g.name=k),g.value=d.usePost[k],r.appendChild(g));r.submit();r.parentNode.removeChild(r)}else a.src=c;d.props.src=c;return a}function I(d){var a;d.isHost=d.isHost||A(X.xdm_p);w=d.hash||!1;d.props||(d.props={});if(d.isHost){a=d.remote;
a=a.replace(R,"$1/");if(!a.match(/^(http||https):\/\//)){var c="/"===a.substring(0,1)?"":m.pathname;"/"!==c.substring(c.length-1)&&(c=c.substring(0,c.lastIndexOf("/")+1));a=m.protocol+"//"+m.host+c+a}for(;M.test(a);)a=a.replace(M,"");d.remote=a;d.channel=d.channel||"default"+F++;d.secret=Math.random().toString(16).substring(2)}else{d.channel=X.xdm_c.replace(/["'<>\\]/g,"");d.secret=X.xdm_s;d.remote=X.xdm_e.replace(/["'<>\\]/g,"");if(a=d.acl){a:{a=d.acl;c=d.remote;"string"==typeof a&&(a=[a]);for(var e,
r=a.length;r--;)if(e=a[r],e=new RegExp("^"==e.substr(0,1)?e:"^"+e.replace(/(\*)/g,".$1").replace(/\?/g,".")+"$"),e.test(c)){a=!0;break a}a=!1}a=!a}if(a)throw Error("Access denied for "+d.remote);}d.protocol="1";a=[new E.stack.PostMessageTransport(d)];a.push(new E.stack.QueueBehavior({lazy:d.lazy,remove:!0}));return a}function D(d){for(var a,c={incoming:function(d,a){this.up.incoming(d,a)},outgoing:function(d,a){this.down.outgoing(d,a)},callback:function(d){this.up.callback(d)},init:function(){this.down.init()},
destroy:function(){this.down.destroy()}},e=0,r=d.length;e<r;e++)a=d[e],t(a,c,!0),0!==e&&(a.down=d[e-1]),e!==r-1&&(a.up=d[e+1]);return a}function B(d){d.up.down=d.down;d.down.up=d.up;d.up=d.down=null}var F=Math.floor(1E4*Math.random()),P=/^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/,M=/[\-\w]+\/\.\.\//,R=/([^:])\/\//g,U="",E={},K=a.easyXDM,L="easyXDM_",l,w=!1,H,u;if(n(a,"addEventListener"))H=function(d,a,c){d.addEventListener(a,c,!1)},u=function(d,a,c){d.removeEventListener(a,c,!1)};else if(n(a,"attachEvent"))H=
function(d,a,c){d.attachEvent("on"+a,c)},u=function(d,a,c){d.detachEvent("on"+a,c)};else throw Error("Browser not supported");var S=!1,Q=[],d;"readyState"in e?(d=e.readyState,S="complete"==d||~navigator.userAgent.indexOf("AppleWebKit/")&&("loaded"==d||"interactive"==d)):S=!!e.body;if(!S){if(n(a,"addEventListener"))H(e,"DOMContentLoaded",v);else if(H(e,"readystatechange",function(){"complete"==e.readyState&&v()}),e.documentElement.doScroll&&a===top){var T=function(){if(!S){try{e.documentElement.doScroll("left")}catch(r){q(T,
1);return}v()}};T()}H(a,"load",v)}var X=function(d){d=d.substring(1).split("&");for(var a={},e,r=d.length;r--;)e=d[r].split("="),a[e[0]]=c(e[1]);return a}(/xdm_e=/.test(m.search)?m.search:m.hash),Y=function(){var d={},a={a:[1,2,3]};if("undefined"!=typeof JSON&&"function"===typeof JSON.stringify&&'{"a":[1,2,3]}'===JSON.stringify(a).replace(/\s/g,""))return JSON;Object.toJSON&&'{"a":[1,2,3]}'===Object.toJSON(a).replace(/\s/g,"")&&(d.stringify=Object.toJSON);"function"===typeof String.prototype.evalJSON&&
(a='{"a":[1,2,3]}'.evalJSON(),a.a&&3===a.a.length&&3===a.a[2]&&(d.parse=function(d){return d.evalJSON()}));return d.stringify&&d.parse?(Y=function(){return d},d):null};t(E,{version:"2.4.18.25",query:X,stack:{},apply:t,getJSONObject:Y,whenReady:k,noConflict:function(d){a.easyXDM=K;(U=d)&&(L="easyXDM_"+U.replace(".","_")+"_");return E}});E.DomHelper={on:H,un:u,requiresJSON:function(d){"object"==typeof a.JSON&&a.JSON||e.write('<script type="text/javascript" src="'+d+'">\x3c/script>')}};(function(){var d=
{};E.Fn={set:function(a,c){d[a]=c},get:function(a,c){var e=d[a];c&&delete d[a];return e}}})();E.Socket=function(d){var a=D(I(d).concat([{incoming:function(a,c){d.onMessage(a,c)},callback:function(a){if(d.onReady)d.onReady(a)}}])),c=x(d.remote);this.origin=x(d.remote);this.destroy=function(){a.destroy()};this.postMessage=function(d){a.outgoing(d,c)};a.init()};E.stack.PostMessageTransport=function(d){function c(a){var c;if(a.origin)c=x(a.origin);else if(a.uri)c=x(a.uri);else if(a.domain)c=m.protocol+
"//"+a.domain;else throw"Unable to retrieve the origin of the event";c==n&&a.data.substring(0,d.channel.length+1)==d.channel+" "&&e.up.incoming(a.data.substring(d.channel.length+1),c)}var e,l,g,n;return e={outgoing:function(a,c,e){try{g.postMessage(d.channel+" "+a,c||n),e&&e()}catch(Z){}},destroy:function(){u(a,"message",c);l&&(g=null,l.parentNode.removeChild(l),l=null)},onDOMReady:function(){n=x(d.remote);if(d.isHost){var k=function(n){try{n.data==d.channel+"-ready"&&(g="postMessage"in l.contentWindow?
l.contentWindow:l.contentWindow.document,u(a,"message",k),H(a,"message",c),q(function(){e.up.callback(!0)},0))}catch(ra){}};H(a,"message",k);t(d.props,{src:z(d.remote,{xdm_e:x(m.href),xdm_c:d.channel,xdm_p:1}),name:L+d.channel+"_provider"});l=C(d)}else H(a,"message",c),g="postMessage"in a.parent?a.parent:a.parent.document,g.postMessage(d.channel+"-ready",n),q(function(){e.up.callback(!0)},0)},init:function(){k(e.onDOMReady,e)}}};E.stack.QueueBehavior=function(d){function a(){if(d.remove&&0===l.length)B(e);
else if(!k&&0!==l.length&&!r){k=!0;var c=l.shift();e.down.outgoing(c.data,c.origin,function(d){k=!1;c.callback&&q(function(){c.callback(d)},0);a()})}}var e,l=[],k=!0,n="",r,m=0,w=!1,u=!1;return e={init:function(){A(d)&&(d={});d.maxLength&&(m=d.maxLength,u=!0);d.lazy?w=!0:e.down.init()},callback:function(d){k=!1;var c=e.up;a();c.callback(d)},incoming:function(a,l){if(u){var g=a.indexOf("_"),k=parseInt(a.substring(0,g),10);n+=a.substring(g+1);0===k&&(d.encode&&(n=c(n)),e.up.incoming(n,l),n="")}else e.up.incoming(a,
l)},outgoing:function(c,k,n){d.encode&&(c=g(c));var r=[],q;if(u){for(;0!==c.length;)q=c.substring(0,m),c=c.substring(q.length),r.push(q);for(;q=r.shift();)l.push({data:r.length+"_"+q,origin:k,callback:0===r.length?n:null})}else l.push({data:c,origin:k,callback:n});w?e.down.init():a()},destroy:function(){r=!0;e.down.destroy()}}};this.easyXDM=E})(window,document,location,window.setTimeout,decodeURIComponent,encodeURIComponent);window.avsr=window.avsr||{};
window.avsr.xdmStorage=window.avsr.xdmStorage||function(){var a=1,e=[],m=!1,q=new easyXDM.Socket({lazy:!1,remote:"https://cross-prod.antvoice.com/cookie.html?v=20160624",hash:!0,onMessage:function(a,c){var g=a.split(":"),n=g[0];g.splice(0,1);g=g.join(":");0!=g.indexOf("[LocalStorageError]")||m||(window.avsr.monitoring.logCall("LocalStorageProblem"),window.avsr.log&&window.avsr.log("Error while trying to communicate with cross domain","error","xdmStorage",g),m=!0);if(""!=n)e[n]("null"===g?null:g)}}),
c=function(c,g){var n=a++;e[n]=g;q.postMessage("mget:"+n+":"+c.join(","))},g=function(a){q.postMessage("mdel:0:"+a.join(","))};return{getKey:function(n,m,k){if(k){var v=[n,n+"-exp"];c(v,function(a){return a?(a=a.split(","),1<a.length&&parseInt(a[1])<Date.parse(new Date)?(g(v),m(null)):m(a[0])):m(null)})}else k=a++,e[k]=m,q.postMessage("get:"+k+":"+n)},getKeys:c,getAllValues:function(c){var g=a++;e[g]=function(a){var e={};a=a.split("&&");for(var g=0;g<a.length;g++){var n=a[g].split("==");e[n[0]]=n[1]}c(e)};
q.postMessage("values:"+g)},deleteKey:function(a){q.postMessage("del:0:"+a)},deleteKeys:g,setKey:function(a,c,e,g){g?q.postMessage("mset:0:"+a+","+a+"-exp:"+e+","+Date.parse(c)):q.postMessage("set:0:"+a+":"+e)},setKeys:function(a,c,e){q.postMessage("mset:0:"+a.join(",")+":"+e.join(","))},getStorageType:function(){return"xdm-storage"}}}();/*
 _jQuery v1.7.2 _jQuery.com | _jQuery.org/license */
(function(a,e){function m(b){return d.isWindow(b)?b:9===b.nodeType?b.defaultView||b.parentWindow:!1}function q(b){if(!ta[b]){var f=u.body,h=d("<"+b+">").appendTo(f),p=h.css("display");h.remove();if("none"===p||""===p)aa||(aa=u.createElement("iframe"),aa.frameBorder=aa.width=aa.height=0),f.appendChild(aa),ga&&aa.createElement||(ga=(aa.contentWindow||aa.contentDocument).document,ga.write((d.support.boxModel?"<!doctype html>":"")+"<html><body>"),ga.close()),h=ga.createElement(b),ga.body.appendChild(h),
p=d.css(h,"display"),f.removeChild(aa);ta[b]=p}return ta[b]}function c(b,f){var h={};d.each(la.concat.apply([],la.slice(0,f)),function(){h[this]=b});return h}function g(){ma=e}function n(){setTimeout(g,0);return ma=d.now()}function v(){try{return new a.XMLHttpRequest}catch(b){}}function k(b,f,h,p){if(d.isArray(f))d.each(f,function(d,f){h||ab.test(b)?p(b,f):k(b+"["+("object"==typeof f?d:"")+"]",f,h,p)});else if(h||"object"!==d.type(f))p(b,f);else for(var a in f)k(b+"["+a+"]",f[a],h,p)}function x(b,
f){var h,p,a=d.ajaxSettings.flatOptions||{};for(h in f)f[h]!==e&&((a[h]?b:p||(p={}))[h]=f[h]);p&&d.extend(!0,b,p)}function z(b,d,h,p,a,c){a=a||d.dataTypes[0];c=c||{};c[a]=!0;a=b[a];for(var f=0,y=a?a.length:0,N=b===ua,l;f<y&&(N||!l);f++)l=a[f](d,h,p),"string"==typeof l&&(!N||c[l]?l=e:(d.dataTypes.unshift(l),l=z(b,d,h,p,l,c)));!N&&l||c["*"]||(l=z(b,d,h,p,"*",c));return l}function A(b){return function(f,h){"string"!=typeof f&&(h=f,f="*");if(d.isFunction(h))for(var p=f.toLowerCase().split(Ga),a=0,c=p.length,
e,l;a<c;a++)e=p[a],(l=/^\+/.test(e))&&(e=e.substr(1)||"*"),e=b[e]=b[e]||[],e[l?"unshift":"push"](h)}}function t(b,f,h){var p="width"===f?b.offsetWidth:b.offsetHeight,a="width"===f?1:0;if(0<p){if("border"!==h)for(;4>a;a+=2)h||(p-=parseFloat(d.css(b,"padding"+da[a]))||0),"margin"===h?p+=parseFloat(d.css(b,h+da[a]))||0:p-=parseFloat(d.css(b,"border"+da[a]+"Width"))||0;return p+"px"}p=ha(b,f);if(0>p||null==p)p=b.style[f];if(va.test(p))return p;p=parseFloat(p)||0;if(h)for(;4>a;a+=2)p+=parseFloat(d.css(b,
"padding"+da[a]))||0,"padding"!==h&&(p+=parseFloat(d.css(b,"border"+da[a]+"Width"))||0),"margin"===h&&(p+=parseFloat(d.css(b,h+da[a]))||0);return p+"px"}function C(b){var f=(b.nodeName||"").toLowerCase();"input"===f?I(b):"script"!==f&&"undefined"!=typeof b.getElementsByTagName&&d.grep(b.getElementsByTagName("input"),I)}function I(b){if("checkbox"===b.type||"radio"===b.type)b.defaultChecked=b.checked}function D(b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName("*"):"undefined"!=
typeof b.querySelectorAll?b.querySelectorAll("*"):[]}function B(b,f){var h;1===f.nodeType&&(f.clearAttributes&&f.clearAttributes(),f.mergeAttributes&&f.mergeAttributes(b),h=f.nodeName.toLowerCase(),"object"===h?f.outerHTML=b.outerHTML:"input"!==h||"checkbox"!==b.type&&"radio"!==b.type?"option"===h?f.selected=b.defaultSelected:"input"===h||"textarea"===h?f.defaultValue=b.defaultValue:"script"===h&&f.text!==b.text&&(f.text=b.text):(b.checked&&(f.defaultChecked=f.checked=b.checked),f.value!==b.value&&
(f.value=b.value)),f.removeAttribute(d.expando),f.removeAttribute("_submit_attached"),f.removeAttribute("_change_attached"))}function F(b,f){if(1===f.nodeType&&d.hasData(b)){var h,p,a;p=d._data(b);var c=d._data(f,p),e=p.events;if(e)for(h in delete c.handle,c.events={},e)for(p=0,a=e[h].length;p<a;p++)d.event.add(f,h,e[h][p]);c.data&&(c.data=d.extend({},c.data))}}function P(b,f){return d.nodeName(b,"table")?b.getElementsByTagName("tbody")[0]||b.appendChild(b.ownerDocument.createElement("tbody")):b}
function M(b){var d=Ha.split("|");b=b.createDocumentFragment();if(b.createElement)for(;d.length;)b.createElement(d.pop());return b}function R(b,f,h){f=f||0;if(d.isFunction(f))return d.grep(b,function(b,d){return!!f.call(b,d,b)===h});if(f.nodeType)return d.grep(b,function(b,d){return b===f===h});if("string"==typeof f){var p=d.grep(b,function(b){return 1===b.nodeType});if(bb.test(f))return d.filter(f,p,!h);f=d.filter(f,p)}return d.grep(b,function(b,p){return 0<=d.inArray(b,f)===h})}function U(b){return!b||
!b.parentNode||11===b.parentNode.nodeType}function E(){return!0}function K(){return!1}function L(b,f,h){var p=f+"defer",a=f+"queue",c=f+"mark",e=d._data(b,p);!e||"queue"!==h&&d._data(b,a)||"mark"!==h&&d._data(b,c)||setTimeout(function(){d._data(b,a)||d._data(b,c)||(d.removeData(b,p,!0),e.fire())},0)}function l(b){for(var f in b)if(("data"!==f||!d.isEmptyObject(b[f]))&&"toJSON"!==f)return!1;return!0}function w(b,f,h){if(h===e&&1===b.nodeType)if(h="data-"+f.replace(r,"-$1").toLowerCase(),h=b.getAttribute(h),
"string"==typeof h){try{h="true"===h?!0:"false"===h?!1:"null"===h?null:d.isNumeric(h)?+h:Y.test(h)?d.parseJSON(h):h}catch(p){}d.data(b,f,h)}else h=e;return h}function H(b){var d=T[b]={},h,p;b=b.split(/\s+/);h=0;for(p=b.length;h<p;h++)d[b[h]]=!0;return d}var u=a.document,S=a.navigator,Q=a.location,d=function(){function b(){if(!d.isReady){try{u.documentElement.doScroll("left")}catch(Qb){setTimeout(b,1);return}d.ready()}}var d=function(b,f){return new d.fn.init(b,f,c)},h=a._jQuery,p=a._$,c,N=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
l=/\S/,g=/^\s+/,n=/\s+$/,k=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,r=/^[\],:{}\s]*$/,m=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,q=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,w=/(?:^|:|,)(?:\s*\[)+/g,A=/(webkit)[ \/]([\w.]+)/,t=/(opera)(?:.*version)?[ \/]([\w.]+)/,v=/(msie) ([\w.]+)/,D=/(mozilla)(?:.*? rv:([\w.]+))?/,H=/-([a-z]|[0-9])/ig,C=/^-ms-/,B=function(b,d){return(d+"").toUpperCase()},J=S.userAgent,ba,ia,cb=Object.prototype.toString,na=Object.prototype.hasOwnProperty,z=Array.prototype.push,
x=Array.prototype.slice,O=String.prototype.trim,E=Array.prototype.indexOf,K={};d.fn=d.prototype={constructor:d,init:function(b,f,h){var p,a;if(!b)return this;if(b.nodeType)return this.context=this[0]=b,this.length=1,this;if("body"===b&&!f&&u.body)return this.context=u,this[0]=u.body,this.selector=b,this.length=1,this;if("string"==typeof b){"<"!==b.charAt(0)||">"!==b.charAt(b.length-1)||3>b.length?p=N.exec(b):p=[null,b,null];if(p&&(p[1]||!f)){if(p[1])return a=(f=f instanceof d?f[0]:f)?f.ownerDocument||
f:u,(h=k.exec(b))?d.isPlainObject(f)?(b=[u.createElement(h[1])],d.fn.attr.call(b,f,!0)):b=[a.createElement(h[1])]:(h=d.buildFragment([p[1]],[a]),b=(h.cacheable?d.clone(h.fragment):h.fragment).childNodes),d.merge(this,b);if((f=u.getElementById(p[2]))&&f.parentNode){if(f.id!==p[2])return h.find(b);this.length=1;this[0]=f}this.context=u;this.selector=b;return this}return!f||f._jQuery?(f||h).find(b):this.constructor(f).find(b)}if(d.isFunction(b))return h.ready(b);b.selector!==e&&(this.selector=b.selector,
this.context=b.context);return d.makeArray(b,this)},selector:"",_jQuery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return x.call(this,0)},get:function(b){return null==b?this.toArray():0>b?this[this.length+b]:this[b]},pushStack:function(b,f,h){var p=this.constructor();d.isArray(b)?z.apply(p,b):d.merge(p,b);p.prevObject=this;p.context=this.context;"find"===f?p.selector=this.selector+(this.selector?" ":"")+h:f&&(p.selector=this.selector+"."+f+"("+h+")");return p},each:function(b,
f){return d.each(this,b,f)},ready:function(b){d.bindReady();ba.add(b);return this},eq:function(b){b=+b;return-1===b?this.slice(b):this.slice(b,b+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(x.apply(this,arguments),"slice",x.call(arguments).join(","))},map:function(b){return this.pushStack(d.map(this,function(d,f){return b.call(d,f,d)}))},end:function(){return this.prevObject||this.constructor(null)},push:z,sort:[].sort,splice:[].splice};
d.fn.init.prototype=d.fn;d.extend=d.fn.extend=function(){var b,f,h,p,a,c,y=arguments[0]||{},J=1,N=arguments.length,l=!1;"boolean"==typeof y&&(l=y,y=arguments[1]||{},J=2);"object"!=typeof y&&!d.isFunction(y)&&(y={});for(N===J&&(y=this,--J);J<N;J++)if(null!=(b=arguments[J]))for(f in b)h=y[f],p=b[f],y!==p&&(l&&p&&(d.isPlainObject(p)||(a=d.isArray(p)))?(a?(a=!1,c=h&&d.isArray(h)?h:[]):c=h&&d.isPlainObject(h)?h:{},y[f]=d.extend(l,c,p)):p!==e&&(y[f]=p));return y};d.extend({noConflict:function(b){a._$===
d&&(a._$=p);b&&a._jQuery===d&&(a._jQuery=h);return d},isReady:!1,readyWait:1,holdReady:function(b){b?d.readyWait++:d.ready(!0)},ready:function(b){if(!0===b&&!--d.readyWait||!0!==b&&!d.isReady){if(!u.body)return setTimeout(d.ready,1);d.isReady=!0;!0!==b&&0<--d.readyWait||(ba.fireWith(u,[d]),d.fn.trigger&&d(u).trigger("ready").off("ready"))}},bindReady:function(){if(!ba){ba=d.Callbacks("once memory");if("complete"===u.readyState)return setTimeout(d.ready,1);if(u.addEventListener)u.addEventListener("DOMContentLoaded",
ia,!1),a.addEventListener("load",d.ready,!1);else if(u.attachEvent){u.attachEvent("onreadystatechange",ia);a.attachEvent("onload",d.ready);var f=!1;try{f=null==a.frameElement}catch(Rb){}u.documentElement.doScroll&&f&&b()}}},isFunction:function(b){return"function"===d.type(b)},isArray:Array.isArray||function(b){return"array"===d.type(b)},isWindow:function(b){return null!=b&&b==b.window},isNumeric:function(b){return!isNaN(parseFloat(b))&&isFinite(b)},type:function(b){return null==b?String(b):K[cb.call(b)]||
"object"},isPlainObject:function(b){if(!b||"object"!==d.type(b)||b.nodeType||d.isWindow(b))return!1;try{if(b.constructor&&!na.call(b,"constructor")&&!na.call(b.constructor.prototype,"isPrototypeOf"))return!1}catch(Ia){return!1}for(var f in b);return f===e||na.call(b,f)},isEmptyObject:function(b){for(var d in b)return!1;return!0},error:function(b){throw Error(b);},parseJSON:function(b){if("string"!=typeof b||!b)return null;b=d.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(r.test(b.replace(m,
"@").replace(q,"]").replace(w,"")))return(new Function("return "+b))();d.error("Invalid JSON: "+b)},parseXML:function(b){if("string"!=typeof b||!b)return null;var f,h;try{a.DOMParser?(h=new DOMParser,f=h.parseFromString(b,"text/xml")):(f=new ActiveXObject("Microsoft.XMLDOM"),f.async="false",f.loadXML(b))}catch(Tb){f=e}f&&f.documentElement&&!f.getElementsByTagName("parsererror").length||d.error("Invalid XML: "+b);return f},noop:function(){},globalEval:function(b){b&&l.test(b)&&(a.execScript||function(b){a.eval.call(a,
b)})(b)},camelCase:function(b){return b.replace(C,"ms-").replace(H,B)},nodeName:function(b,d){return b.nodeName&&b.nodeName.toUpperCase()===d.toUpperCase()},each:function(b,f,h){var p,a=0,c=b.length,y=c===e||d.isFunction(b);if(h)if(y)for(p in b){if(!1===f.apply(b[p],h))break}else for(;a<c&&!1!==f.apply(b[a++],h););else if(y)for(p in b){if(!1===f.call(b[p],p,b[p]))break}else for(;a<c&&!1!==f.call(b[a],a,b[a++]););return b},trim:O?function(b){return null==b?"":O.call(b)}:function(b){return null==b?
"":(b+"").replace(g,"").replace(n,"")},makeArray:function(b,f){var h=f||[];if(null!=b){var p=d.type(b);null==b.length||"string"===p||"function"===p||"regexp"===p||d.isWindow(b)?z.call(h,b):d.merge(h,b)}return h},inArray:function(b,d,f){var h;if(d){if(E)return E.call(d,b,f);h=d.length;for(f=f?0>f?Math.max(0,h+f):f:0;f<h;f++)if(f in d&&d[f]===b)return f}return-1},merge:function(b,d){var f=b.length,h=0;if("number"==typeof d.length)for(var p=d.length;h<p;h++)b[f++]=d[h];else for(;d[h]!==e;)b[f++]=d[h++];
b.length=f;return b},grep:function(b,d,f){var h=[],p;f=!!f;for(var a=0,c=b.length;a<c;a++)p=!!d(b[a],a),f!==p&&h.push(b[a]);return h},map:function(b,f,h){var p,a,c=[],y=0,J=b.length;if(b instanceof d||J!==e&&"number"==typeof J&&(0<J&&b[0]&&b[J-1]||0===J||d.isArray(b)))for(;y<J;y++)p=f(b[y],y,h),null!=p&&(c[c.length]=p);else for(a in b)p=f(b[a],a,h),null!=p&&(c[c.length]=p);return c.concat.apply([],c)},guid:1,proxy:function(b,f){if("string"==typeof f){var h=b[f];f=b;b=h}if(!d.isFunction(b))return e;
var p=x.call(arguments,2),h=function(){return b.apply(f,p.concat(x.call(arguments)))};h.guid=b.guid=b.guid||h.guid||d.guid++;return h},access:function(b,f,h,p,a,c,y){var J,l=null==h,N=0,g=b.length;if(h&&"object"==typeof h){for(N in h)d.access(b,f,N,h[N],1,c,p);a=1}else if(p!==e){J=y===e&&d.isFunction(p);l&&(J?(J=f,f=function(b,f,h){return J.call(d(b),h)}):(f.call(b,p),f=null));if(f)for(;N<g;N++)f(b[N],h,J?p.call(b[N],N,f(b[N],h)):p,y);a=1}return a?b:l?f.call(b):g?f(b[0],h):c},now:function(){return(new Date).getTime()},
uaMatch:function(b){b=b.toLowerCase();b=A.exec(b)||t.exec(b)||v.exec(b)||0>b.indexOf("compatible")&&D.exec(b)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function b(d,f){return new b.fn.init(d,f)}d.extend(!0,b,this);b.superclass=this;b.fn=b.prototype=this();b.fn.constructor=b;b.sub=this.sub;b.fn.init=function(h,p){p&&p instanceof d&&!(p instanceof b)&&(p=b(p));return d.fn.init.call(this,h,p,f)};b.fn.init.prototype=b.fn;var f=b(u);return b},browser:{}});d.each("Boolean Number String Function Array Date RegExp Object".split(" "),
function(b,d){K["[object "+d+"]"]=d.toLowerCase()});J=d.uaMatch(J);J.browser&&(d.browser[J.browser]=!0,d.browser.version=J.version);d.browser.webkit&&(d.browser.safari=!0);l.test(" ")&&(g=/^[\s\xA0]+/,n=/[\s\xA0]+$/);c=d(u);u.addEventListener?ia=function(){u.removeEventListener("DOMContentLoaded",ia,!1);d.ready()}:u.attachEvent&&(ia=function(){"complete"===u.readyState&&(u.detachEvent("onreadystatechange",ia),d.ready())});return d}(),T={};d.Callbacks=function(b){b=b?T[b]||H(b):{};var f=[],h=[],p,
a,c,l,g,n,k=function(h){var p,a,c,y;p=0;for(a=h.length;p<a;p++)c=h[p],y=d.type(c),"array"===y?k(c):"function"!==y||b.unique&&m.has(c)||f.push(c)},r=function(d,y){y=y||[];p=!b.memory||[d,y];c=a=!0;n=l||0;l=0;for(g=f.length;f&&n<g;n++)if(!1===f[n].apply(d,y)&&b.stopOnFalse){p=!0;break}c=!1;f&&(b.once?!0===p?m.disable():f=[]:h&&h.length&&(p=h.shift(),m.fireWith(p[0],p[1])))},m={add:function(){if(f){var b=f.length;k(arguments);c?g=f.length:p&&!0!==p&&(l=b,r(p[0],p[1]))}return this},remove:function(){if(f)for(var d=
arguments,h=0,p=d.length;h<p;h++)for(var a=0;a<f.length&&(d[h]!==f[a]||(c&&a<=g&&(g--,a<=n&&n--),f.splice(a--,1),!b.unique));a++);return this},has:function(b){if(f)for(var d=0,h=f.length;d<h;d++)if(b===f[d])return!0;return!1},empty:function(){f=[];return this},disable:function(){f=h=p=e;return this},disabled:function(){return!f},lock:function(){h=e;p&&!0!==p||m.disable();return this},locked:function(){return!h},fireWith:function(d,f){h&&(c?b.once||h.push([d,f]):(!b.once||!p)&&r(d,f));return this},
fire:function(){m.fireWith(this,arguments);return this},fired:function(){return!!a}};return m};var X=[].slice;d.extend({Deferred:function(b){var f=d.Callbacks("once memory"),h=d.Callbacks("once memory"),p=d.Callbacks("memory"),a="pending",c={resolve:f,reject:h,notify:p},e={done:f.add,fail:h.add,progress:p.add,state:function(){return a},isResolved:f.fired,isRejected:h.fired,then:function(b,d,f){l.done(b).fail(d).progress(f);return this},always:function(){l.done.apply(l,arguments).fail.apply(l,arguments);
return this},pipe:function(b,f,h){return d.Deferred(function(p){d.each({done:[b,"resolve"],fail:[f,"reject"],progress:[h,"notify"]},function(b,f){var h=f[0],a=f[1],c;d.isFunction(h)?l[b](function(){(c=h.apply(this,arguments))&&d.isFunction(c.promise)?c.promise().then(p.resolve,p.reject,p.notify):p[a+"With"](this===l?p:this,[c])}):l[b](p[a])})}).promise()},promise:function(b){if(null==b)b=e;else for(var d in e)b[d]=e[d];return b}},l=e.promise({}),g;for(g in c)l[g]=c[g].fire,l[g+"With"]=c[g].fireWith;
l.done(function(){a="resolved"},h.disable,p.lock).fail(function(){a="rejected"},f.disable,p.lock);b&&b.call(l,l);return l},when:function(b){function f(b){return function(d){e[b]=1<arguments.length?X.call(arguments,0):d;g.notifyWith(n,e)}}function h(b){return function(d){p[b]=1<arguments.length?X.call(arguments,0):d;--l||g.resolveWith(g,p)}}var p=X.call(arguments,0),a=0,c=p.length,e=Array(c),l=c,g=1>=c&&b&&d.isFunction(b.promise)?b:d.Deferred(),n=g.promise();if(1<c){for(;a<c;a++)p[a]&&p[a].promise&&
d.isFunction(p[a].promise)?p[a].promise().then(h(a),g.reject,f(a)):--l;l||g.resolveWith(g,p)}else g!==b&&g.resolveWith(g,c?[b]:[]);return n}});d.support=function(){var b,f,h,p,c,e,l,g,n=u.createElement("div");n.setAttribute("className","t");n.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";f=n.getElementsByTagName("*");h=n.getElementsByTagName("a")[0];if(!f||!f.length||!h)return{};p=u.createElement("select");c=p.appendChild(u.createElement("option"));
f=n.getElementsByTagName("input")[0];b={leadingWhitespace:3===n.firstChild.nodeType,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(h.getAttribute("style")),hrefNormalized:"/a"===h.getAttribute("href"),opacity:/^0.55/.test(h.style.opacity),cssFloat:!!h.style.cssFloat,checkOn:"on"===f.value,optSelected:c.selected,getSetAttribute:"t"!==n.className,enctype:!!u.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==u.createElement("nav").cloneNode(!0).outerHTML,
submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0};d.boxModel=b.boxModel="CSS1Compat"===u.compatMode;f.checked=!0;b.noCloneChecked=f.cloneNode(!0).checked;p.disabled=!0;b.optDisabled=!c.disabled;try{delete n.test}catch(Pb){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"));
f=u.createElement("input");f.value="t";f.setAttribute("type","radio");b.radioValue="t"===f.value;f.setAttribute("checked","checked");f.setAttribute("name","t");n.appendChild(f);h=u.createDocumentFragment();h.appendChild(n.lastChild);b.checkClone=h.cloneNode(!0).cloneNode(!0).lastChild.checked;b.appendChecked=f.checked;h.removeChild(f);h.appendChild(n);if(n.attachEvent)for(l in{submit:1,change:1,focusin:1})f="on"+l,(g=f in n)||(n.setAttribute(f,"return;"),g="function"==typeof n[f]),b[l+"Bubbles"]=
g;h.removeChild(n);h=p=c=n=f=null;d(function(){var f,h,p,c,y,l,N=u.getElementsByTagName("body")[0];!N||(f=u.createElement("div"),f.style.cssText="padding:0;margin:0;border:0;visibility:hidden;width:0;height:0;position:static;top:0;margin-top:1px",N.insertBefore(f,N.firstChild),n=u.createElement("div"),f.appendChild(n),n.innerHTML="<table><tr><td style='padding:0;margin:0;border:0;display:none'></td><td>t</td></tr></table>",e=n.getElementsByTagName("td"),g=0===e[0].offsetHeight,e[0].style.display=
"",e[1].style.display="none",b.reliableHiddenOffsets=g&&0===e[0].offsetHeight,a.getComputedStyle&&(n.innerHTML="",l=u.createElement("div"),l.style.width="0",l.style.marginRight="0",n.style.width="2px",n.appendChild(l),b.reliableMarginRight=0===(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)),"undefined"!=typeof n.style.zoom&&(n.innerHTML="",n.style.width=n.style.padding="1px",n.style.border=0,n.style.overflow="hidden",n.style.display="inline",n.style.zoom=1,b.inlineBlockNeedsLayout=
3===n.offsetWidth,n.style.display="block",n.style.overflow="visible",n.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=3!==n.offsetWidth),n.style.cssText="position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:0;visibility:hidden;",n.innerHTML="<div style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;display:block;'><div style='padding:0;margin:0;border:0;display:block;overflow:hidden;'></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>",
h=n.firstChild,p=h.firstChild,c=h.nextSibling.firstChild.firstChild,y={doesNotAddBorder:5!==p.offsetTop,doesAddBorderForTableAndCells:5===c.offsetTop},p.style.position="fixed",p.style.top="20px",y.fixedPosition=20===p.offsetTop||15===p.offsetTop,p.style.position=p.style.top="",h.style.overflow="hidden",h.style.position="relative",y.subtractsBorderForOverflowNotVisible=-5===p.offsetTop,y.doesNotIncludeMarginInBodyOffset=1!==N.offsetTop,a.getComputedStyle&&(n.style.marginTop="1%",b.pixelMargin="1%"!==
(a.getComputedStyle(n,null)||{marginTop:0}).marginTop),"undefined"!=typeof f.style.zoom&&(f.style.zoom=1),N.removeChild(f),n=null,d.extend(b,y))});return b}();var Y=/^(?:\{.*\}|\[.*\])$/,r=/([A-Z])/g;d.extend({cache:{},uuid:0,expando:"_jQuery"+(d.fn._jQuery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(b){b=b.nodeType?d.cache[b[d.expando]]:b[d.expando];return!!b&&!l(b)},data:function(b,f,h,p){if(d.acceptData(b)){var a,
c;a=d.expando;var l="string"==typeof f,g=b.nodeType,n=g?d.cache:b,k=g?b[a]:b[a]&&a,r="events"===f;if(k&&n[k]&&(r||p||n[k].data)||!l||h!==e){k||(g?b[a]=k=++d.uuid:k=a);n[k]||(n[k]={},g||(n[k].toJSON=d.noop));if("object"==typeof f||"function"==typeof f)p?n[k]=d.extend(n[k],f):n[k].data=d.extend(n[k].data,f);b=a=n[k];p||(a.data||(a.data={}),a=a.data);h!==e&&(a[d.camelCase(f)]=h);if(r&&!a[f])return b.events;l?(c=a[f],null==c&&(c=a[d.camelCase(f)])):c=a;return c}}},removeData:function(b,f,h){if(d.acceptData(b)){var p,
a,c,e=d.expando,g=b.nodeType,n=g?d.cache:b,k=g?b[e]:e;if(n[k]){if(f&&(p=h?n[k]:n[k].data)){d.isArray(f)||(f in p?f=[f]:(f=d.camelCase(f),f in p?f=[f]:f=f.split(" ")));a=0;for(c=f.length;a<c;a++)delete p[f[a]];if(!(h?l:d.isEmptyObject)(p))return}if(!h&&(delete n[k].data,!l(n[k])))return;d.support.deleteExpando||!n.setInterval?delete n[k]:n[k]=null;g&&(d.support.deleteExpando?delete b[e]:b.removeAttribute?b.removeAttribute(e):b[e]=null)}}},_data:function(b,f,h){return d.data(b,f,h,!0)},acceptData:function(b){if(b.nodeName){var f=
d.noData[b.nodeName.toLowerCase()];if(f)return!0!==f&&b.getAttribute("classid")===f}return!0}});d.fn.extend({data:function(b,f){var h,p,a,c,l,g=this[0],n=0,k=null;if(b===e){if(this.length&&(k=d.data(g),1===g.nodeType&&!d._data(g,"parsedAttrs"))){a=g.attributes;for(l=a.length;n<l;n++)c=a[n].name,0===c.indexOf("data-")&&(c=d.camelCase(c.substring(5)),w(g,c,k[c]));d._data(g,"parsedAttrs",!0)}return k}if("object"==typeof b)return this.each(function(){d.data(this,b)});h=b.split(".",2);h[1]=h[1]?"."+h[1]:
"";p=h[1]+"!";return d.access(this,function(f){if(f===e)return k=this.triggerHandler("getData"+p,[h[0]]),k===e&&g&&(k=d.data(g,b),k=w(g,b,k)),k===e&&h[1]?this.data(h[0]):k;h[1]=f;this.each(function(){var a=d(this);a.triggerHandler("setData"+p,h);d.data(this,b,f);a.triggerHandler("changeData"+p,h)})},null,f,1<arguments.length,null,!1)},removeData:function(b){return this.each(function(){d.removeData(this,b)})}});d.extend({_mark:function(b,f){b&&(f=(f||"fx")+"mark",d._data(b,f,(d._data(b,f)||0)+1))},
_unmark:function(b,f,h){!0!==b&&(h=f,f=b,b=!1);if(f){h=h||"fx";var p=h+"mark";(b=b?0:(d._data(f,p)||1)-1)?d._data(f,p,b):(d.removeData(f,p,!0),L(f,h,"mark"))}},queue:function(b,f,h){var p;if(b)return f=(f||"fx")+"queue",p=d._data(b,f),h&&(!p||d.isArray(h)?p=d._data(b,f,d.makeArray(h)):p.push(h)),p||[]},dequeue:function(b,f){f=f||"fx";var h=d.queue(b,f),p=h.shift(),a={};"inprogress"===p&&(p=h.shift());p&&("fx"===f&&h.unshift("inprogress"),d._data(b,f+".run",a),p.call(b,function(){d.dequeue(b,f)},a));
h.length||(d.removeData(b,f+"queue "+f+".run",!0),L(b,f,"queue"))}});d.fn.extend({queue:function(b,f){var h=2;"string"!=typeof b&&(f=b,b="fx",h--);return arguments.length<h?d.queue(this[0],b):f===e?this:this.each(function(){var h=d.queue(this,b,f);"fx"===b&&"inprogress"!==h[0]&&d.dequeue(this,b)})},dequeue:function(b){return this.each(function(){d.dequeue(this,b)})},delay:function(b,f){b=d.fx?d.fx.speeds[b]||b:b;return this.queue(f||"fx",function(d,f){var h=setTimeout(d,b);f.stop=function(){clearTimeout(h)}})},
clearQueue:function(b){return this.queue(b||"fx",[])},promise:function(b,f){function h(){--l||p.resolveWith(a,[a])}"string"!=typeof b&&(f=b,b=e);b=b||"fx";for(var p=d.Deferred(),a=this,c=a.length,l=1,g=b+"defer",n=b+"queue",k=b+"mark",r;c--;)if(r=d.data(a[c],g,e,!0)||(d.data(a[c],n,e,!0)||d.data(a[c],k,e,!0))&&d.data(a[c],g,d.Callbacks("once memory"),!0))l++,r.add(h);h();return p.promise(f)}});var O=/[\n\t\r]/g,W=/\s+/,ka=/\r/g,G=/^(?:button|input)$/i,Ca=/^(?:button|input|object|select|textarea)$/i,
Za=/^a(?:rea)?$/i,qa=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,ra=d.support.getSetAttribute,Z,Da,Ea;d.fn.extend({attr:function(b,f){return d.access(this,d.attr,b,f,1<arguments.length)},removeAttr:function(b){return this.each(function(){d.removeAttr(this,b)})},prop:function(b,f){return d.access(this,d.prop,b,f,1<arguments.length)},removeProp:function(b){b=d.propFix[b]||b;return this.each(function(){try{this[b]=e,delete this[b]}catch(f){}})},
addClass:function(b){var f,h,a,c,e,l,g;if(d.isFunction(b))return this.each(function(f){d(this).addClass(b.call(this,f,this.className))});if(b&&"string"==typeof b)for(f=b.split(W),h=0,a=this.length;h<a;h++)if(c=this[h],1===c.nodeType)if(c.className||1!==f.length){e=" "+c.className+" ";l=0;for(g=f.length;l<g;l++)~e.indexOf(" "+f[l]+" ")||(e+=f[l]+" ");c.className=d.trim(e)}else c.className=b;return this},removeClass:function(b){var f,h,a,c,l,g,n;if(d.isFunction(b))return this.each(function(f){d(this).removeClass(b.call(this,
f,this.className))});if(b&&"string"==typeof b||b===e)for(f=(b||"").split(W),h=0,a=this.length;h<a;h++)if(c=this[h],1===c.nodeType&&c.className)if(b){l=(" "+c.className+" ").replace(O," ");g=0;for(n=f.length;g<n;g++)l=l.replace(" "+f[g]+" "," ");c.className=d.trim(l)}else c.className="";return this},toggleClass:function(b,f){var h=typeof b,a="boolean"==typeof f;return d.isFunction(b)?this.each(function(h){d(this).toggleClass(b.call(this,h,this.className,f),f)}):this.each(function(){if("string"===h)for(var p,
c=0,e=d(this),l=f,g=b.split(W);p=g[c++];)l=a?l:!e.hasClass(p),e[l?"addClass":"removeClass"](p);else if("undefined"===h||"boolean"===h)this.className&&d._data(this,"__className__",this.className),this.className=this.className||!1===b?"":d._data(this,"__className__")||""})},hasClass:function(b){b=" "+b+" ";for(var d=0,h=this.length;d<h;d++)if(1===this[d].nodeType&&-1<(" "+this[d].className+" ").replace(O," ").indexOf(b))return!0;return!1},val:function(b){var f,h,a,c=this[0];if(arguments.length)return a=
d.isFunction(b),this.each(function(h){var p=d(this),c;1===this.nodeType&&(a?c=b.call(this,h,p.val()):c=b,null==c?c="":"number"==typeof c?c+="":d.isArray(c)&&(c=d.map(c,function(b){return null==b?"":b+""})),f=d.valHooks[this.type]||d.valHooks[this.nodeName.toLowerCase()],f&&"set"in f&&f.set(this,c,"value")!==e||(this.value=c))});if(c){if((f=d.valHooks[c.type]||d.valHooks[c.nodeName.toLowerCase()])&&"get"in f&&(h=f.get(c,"value"))!==e)return h;h=c.value;return"string"==typeof h?h.replace(ka,""):null==
h?"":h}}});d.extend({valHooks:{option:{get:function(b){var d=b.attributes.value;return!d||d.specified?b.value:b.text}},select:{get:function(b){var f,h,a=b.selectedIndex,c=[],e=b.options,l="select-one"===b.type;if(0>a)return null;b=l?a:0;for(h=l?a+1:e.length;b<h;b++)if(f=e[b],!(!f.selected||(d.support.optDisabled?f.disabled:null!==f.getAttribute("disabled"))||f.parentNode.disabled&&d.nodeName(f.parentNode,"optgroup"))){f=d(f).val();if(l)return f;c.push(f)}return l&&!c.length&&e.length?d(e[a]).val():
c},set:function(b,f){var h=d.makeArray(f);d(b).find("option").each(function(){this.selected=0<=d.inArray(d(this).val(),h)});h.length||(b.selectedIndex=-1);return h}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(b,f,h,a){var p,c,l=b.nodeType;if(b&&3!==l&&8!==l&&2!==l){if(a&&f in d.attrFn)return d(b)[f](h);if("undefined"==typeof b.getAttribute)return d.prop(b,f,h);(a=1!==l||!d.isXMLDoc(b))&&(f=f.toLowerCase(),c=d.attrHooks[f]||(qa.test(f)?Da:Z));if(h!==
e){if(null===h){d.removeAttr(b,f);return}if(c&&"set"in c&&a&&(p=c.set(b,h,f))!==e)return p;b.setAttribute(f,""+h);return h}if(c&&"get"in c&&a&&null!==(p=c.get(b,f)))return p;p=b.getAttribute(f);return null===p?e:p}},removeAttr:function(b,f){var h,a,c,e,l,g=0;if(f&&1===b.nodeType)for(a=f.toLowerCase().split(W),e=a.length;g<e;g++)(c=a[g])&&(h=d.propFix[c]||c,l=qa.test(c),l||d.attr(b,c,""),b.removeAttribute(ra?c:h),l&&h in b&&(b[h]=!1))},attrHooks:{type:{set:function(b,f){if(G.test(b.nodeName)&&b.parentNode)d.error("type property can't be changed");
else if(!d.support.radioValue&&"radio"===f&&d.nodeName(b,"input")){var h=b.value;b.setAttribute("type",f);h&&(b.value=h);return f}}},value:{get:function(b,f){return Z&&d.nodeName(b,"button")?Z.get(b,f):f in b?b.value:null},set:function(b,f,h){if(Z&&d.nodeName(b,"button"))return Z.set(b,f,h);b.value=f}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",
frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(b,f,h){var a,c,l;l=b.nodeType;if(b&&3!==l&&8!==l&&2!==l)return(l=1!==l||!d.isXMLDoc(b))&&(f=d.propFix[f]||f,c=d.propHooks[f]),h!==e?c&&"set"in c&&(a=c.set(b,h,f))!==e?a:b[f]=h:c&&"get"in c&&null!==(a=c.get(b,f))?a:b[f]},propHooks:{tabIndex:{get:function(b){var d=b.getAttributeNode("tabindex");return d&&d.specified?parseInt(d.value,10):Ca.test(b.nodeName)||Za.test(b.nodeName)&&b.href?0:e}}}});d.attrHooks.tabindex=d.propHooks.tabIndex;
Da={get:function(b,f){var h,a=d.prop(b,f);return!0===a||"boolean"!=typeof a&&(h=b.getAttributeNode(f))&&!1!==h.nodeValue?f.toLowerCase():e},set:function(b,f,h){var a;!1===f?d.removeAttr(b,h):(a=d.propFix[h]||h,a in b&&(b[a]=!0),b.setAttribute(h,h.toLowerCase()));return h}};ra||(Ea={name:!0,id:!0,coords:!0},Z=d.valHooks.button={get:function(b,d){var f;return(f=b.getAttributeNode(d))&&(Ea[d]?""!==f.nodeValue:f.specified)?f.nodeValue:e},set:function(b,d,h){var f=b.getAttributeNode(h);f||(f=u.createAttribute(h),
b.setAttributeNode(f));return f.nodeValue=d+""}},d.attrHooks.tabindex.set=Z.set,d.each(["width","height"],function(b,f){d.attrHooks[f]=d.extend(d.attrHooks[f],{set:function(b,d){if(""===d)return b.setAttribute(f,"auto"),d}})}),d.attrHooks.contenteditable={get:Z.get,set:function(b,d,a){""===d&&(d="false");Z.set(b,d,a)}});d.support.hrefNormalized||d.each(["href","src","width","height"],function(b,f){d.attrHooks[f]=d.extend(d.attrHooks[f],{get:function(b){b=b.getAttribute(f,2);return null===b?e:b}})});
d.support.style||(d.attrHooks.style={get:function(b){return b.style.cssText.toLowerCase()||e},set:function(b,d){return b.style.cssText=""+d}});d.support.optSelected||(d.propHooks.selected=d.extend(d.propHooks.selected,{get:function(b){b=b.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}}));d.support.enctype||(d.propFix.enctype="encoding");d.support.checkOn||d.each(["radio","checkbox"],function(){d.valHooks[this]={get:function(b){return null===b.getAttribute("value")?
"on":b.value}}});d.each(["radio","checkbox"],function(){d.valHooks[this]=d.extend(d.valHooks[this],{set:function(b,f){if(d.isArray(f))return b.checked=0<=d.inArray(d(b).val(),f)}})});var sa=/^(?:textarea|input|select)$/i,Fa=/^([^\.]*)?(?:\.(.+))?$/,ca=/(?:^|\s)hover(\.\S+)?\b/,db=/^key/,eb=/^(?:mouse|contextmenu)|click/,Ja=/^(?:focusinfocus|focusoutblur)$/,fb=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,gb=function(b){(b=fb.exec(b))&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+
"(?:\\s|$)"));return b},Ka=function(b){return d.event.special.hover?b:b.replace(ca,"mouseenter$1 mouseleave$1")};d.event={add:function(b,f,a,p,c){var h,l,g,n,y,k,r,m,q;if(3!==b.nodeType&&8!==b.nodeType&&f&&a&&(h=d._data(b))){a.handler&&(r=a,a=r.handler,c=r.selector);a.guid||(a.guid=d.guid++);(g=h.events)||(h.events=g={});(l=h.handle)||(h.handle=l=function(b){return"undefined"==typeof d||b&&d.event.triggered===b.type?e:d.event.dispatch.apply(l.elem,arguments)},l.elem=b);f=d.trim(Ka(f)).split(" ");
for(h=0;h<f.length;h++)n=Fa.exec(f[h])||[],y=n[1],k=(n[2]||"").split(".").sort(),q=d.event.special[y]||{},y=(c?q.delegateType:q.bindType)||y,q=d.event.special[y]||{},n=d.extend({type:y,origType:n[1],data:p,handler:a,guid:a.guid,selector:c,quick:c&&gb(c),namespace:k.join(".")},r),m=g[y],m||(m=g[y]=[],m.delegateCount=0,q.setup&&!1!==q.setup.call(b,p,k,l)||(b.addEventListener?b.addEventListener(y,l,!1):b.attachEvent&&b.attachEvent("on"+y,l))),q.add&&(q.add.call(b,n),n.handler.guid||(n.handler.guid=a.guid)),
c?m.splice(m.delegateCount++,0,n):m.push(n),d.event.global[y]=!0;b=null}},global:{},remove:function(b,f,a,p,c){var h=d.hasData(b)&&d._data(b),e,l,g,n,y,k,r,m,q,w,u;if(h&&(r=h.events)){f=d.trim(Ka(f||"")).split(" ");for(e=0;e<f.length;e++)if(l=Fa.exec(f[e])||[],g=n=l[1],l=l[2],g){m=d.event.special[g]||{};g=(p?m.delegateType:m.bindType)||g;w=r[g]||[];y=w.length;l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(k=0;k<w.length;k++)u=w[k],!c&&n!==u.origType||a&&a.guid!==
u.guid||l&&!l.test(u.namespace)||p&&p!==u.selector&&("**"!==p||!u.selector)||(w.splice(k--,1),u.selector&&w.delegateCount--,!m.remove||m.remove.call(b,u));0===w.length&&y!==w.length&&((!m.teardown||!1===m.teardown.call(b,l))&&d.removeEvent(b,g,h.handle),delete r[g])}else for(g in r)d.event.remove(b,g+f[e],a,p,!0);d.isEmptyObject(r)&&(q=h.handle,q&&(q.elem=null),d.removeData(b,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(b,f,h,p){if(!h||3!==h.nodeType&&
8!==h.nodeType){var c=b.type||b,l=[],g,n,k,r,m,q;if(!Ja.test(c+d.event.triggered)&&(0<=c.indexOf("!")&&(c=c.slice(0,-1),g=!0),0<=c.indexOf(".")&&(l=c.split("."),c=l.shift(),l.sort()),h&&!d.event.customEvent[c]||d.event.global[c]))if(b="object"==typeof b?b[d.expando]?b:new d.Event(c,b):new d.Event(c),b.type=c,b.isTrigger=!0,b.exclusive=g,b.namespace=l.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+l.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,g=0>c.indexOf(":")?"on"+c:"",h){if(b.result=e,b.target||
(b.target=h),f=null!=f?d.makeArray(f):[],f.unshift(b),r=d.event.special[c]||{},!r.trigger||!1!==r.trigger.apply(h,f)){q=[[h,r.bindType||c]];if(!p&&!r.noBubble&&!d.isWindow(h)){n=r.delegateType||c;l=Ja.test(n+c)?h:h.parentNode;for(k=null;l;l=l.parentNode)q.push([l,n]),k=l;k&&k===h.ownerDocument&&q.push([k.defaultView||k.parentWindow||a,n])}for(n=0;n<q.length&&!b.isPropagationStopped();n++)l=q[n][0],b.type=q[n][1],(m=(d._data(l,"events")||{})[b.type]&&d._data(l,"handle"))&&m.apply(l,f),(m=g&&l[g])&&
d.acceptData(l)&&!1===m.apply(l,f)&&b.preventDefault();b.type=c;!(p||b.isDefaultPrevented()||r._default&&!1!==r._default.apply(h.ownerDocument,f)||"click"===c&&d.nodeName(h,"a"))&&d.acceptData(h)&&g&&h[c]&&("focus"!==c&&"blur"!==c||0!==b.target.offsetWidth)&&!d.isWindow(h)&&(k=h[g],k&&(h[g]=null),d.event.triggered=c,h[c](),d.event.triggered=e,k&&(h[g]=k));return b.result}}else for(n in h=d.cache,h)h[n].events&&h[n].events[c]&&d.event.trigger(b,f,h[n].handle.elem,!0)}},dispatch:function(b){b=d.event.fix(b||
a.event);var f=(d._data(this,"events")||{})[b.type]||[],h=f.delegateCount,p=[].slice.call(arguments,0),c=!b.exclusive&&!b.namespace,l=d.event.special[b.type]||{},g=[],n,k,r,m,q,w,u;p[0]=b;b.delegateTarget=this;if(!l.preDispatch||!1!==l.preDispatch.call(this,b)){if(h&&(!b.button||"click"!==b.type))for(r=d(this),r.context=this.ownerDocument||this,k=b.target;k!=this;k=k.parentNode||this)if(!0!==k.disabled){q={};w=[];r[0]=k;for(n=0;n<h;n++){m=f[n];u=m.selector;if(q[u]===e){var A=q,t=u,v;if(m.quick){v=
m.quick;var D=k.attributes||{};v=(!v[1]||k.nodeName.toLowerCase()===v[1])&&(!v[2]||(D.id||{}).value===v[2])&&(!v[3]||v[3].test((D["class"]||{}).value))}else v=r.is(u);A[t]=v}q[u]&&w.push(m)}w.length&&g.push({elem:k,matches:w})}f.length>h&&g.push({elem:this,matches:f.slice(h)});for(n=0;n<g.length&&!b.isPropagationStopped();n++)for(h=g[n],b.currentTarget=h.elem,f=0;f<h.matches.length&&!b.isImmediatePropagationStopped();f++)if(m=h.matches[f],c||!b.namespace&&!m.namespace||b.namespace_re&&b.namespace_re.test(m.namespace))b.data=
m.data,b.handleObj=m,m=((d.event.special[m.origType]||{}).handle||m.handler).apply(h.elem,p),m!==e&&(b.result=m,!1===m&&(b.preventDefault(),b.stopPropagation()));l.postDispatch&&l.postDispatch.call(this,b);return b.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:["char","charCode","key","keyCode"],filter:function(b,d){null==b.which&&
(b.which=null!=d.charCode?d.charCode:d.keyCode);return b}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(b,d){var f,a,c,l=d.button,g=d.fromElement;null==b.pageX&&null!=d.clientX&&(f=b.target.ownerDocument||u,a=f.documentElement,c=f.body,b.pageX=d.clientX+(a&&a.scrollLeft||c&&c.scrollLeft||0)-(a&&a.clientLeft||c&&c.clientLeft||0),b.pageY=d.clientY+(a&&a.scrollTop||c&&c.scrollTop||0)-(a&&a.clientTop||c&&
c.clientTop||0));!b.relatedTarget&&g&&(b.relatedTarget=g===b.target?d.toElement:g);!b.which&&l!==e&&(b.which=l&1?1:l&2?3:l&4?2:0);return b}},fix:function(b){if(b[d.expando])return b;var f,a,c=b,l=d.event.fixHooks[b.type]||{},g=l.props?this.props.concat(l.props):this.props;b=d.Event(c);for(f=g.length;f;)a=g[--f],b[a]=c[a];b.target||(b.target=c.srcElement||u);3===b.target.nodeType&&(b.target=b.target.parentNode);b.metaKey===e&&(b.metaKey=b.ctrlKey);return l.filter?l.filter(b,c):b},special:{ready:{setup:d.bindReady},
load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(b,f,a){d.isWindow(this)&&(this.onbeforeunload=a)},teardown:function(b,d){this.onbeforeunload===d&&(this.onbeforeunload=null)}}},simulate:function(b,f,a,c){b=d.extend(new d.Event,a,{type:b,isSimulated:!0,originalEvent:{}});c?d.event.trigger(b,null,f):d.event.dispatch.call(f,b);b.isDefaultPrevented()&&a.preventDefault()}};d.event.handle=d.event.dispatch;d.removeEvent=u.removeEventListener?function(b,
d,a){b.removeEventListener&&b.removeEventListener(d,a,!1)}:function(b,d,a){b.detachEvent&&b.detachEvent("on"+d,a)};d.Event=function(b,f){if(!(this instanceof d.Event))return new d.Event(b,f);b&&b.type?(this.originalEvent=b,this.type=b.type,this.isDefaultPrevented=b.defaultPrevented||!1===b.returnValue||b.getPreventDefault&&b.getPreventDefault()?E:K):this.type=b;f&&d.extend(this,f);this.timeStamp=b&&b.timeStamp||d.now();this[d.expando]=!0};d.Event.prototype={preventDefault:function(){this.isDefaultPrevented=
E;var b=this.originalEvent;!b||(b.preventDefault?b.preventDefault():b.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=E;var b=this.originalEvent;!b||(b.stopPropagation&&b.stopPropagation(),b.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=E;this.stopPropagation()},isDefaultPrevented:K,isPropagationStopped:K,isImmediatePropagationStopped:K};d.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(b,f){d.event.special[b]={delegateType:f,
bindType:f,handle:function(b){var a=b.relatedTarget,h=b.handleObj,c;if(!a||a!==this&&!d.contains(this,a))b.type=h.origType,c=h.handler.apply(this,arguments),b.type=f;return c}}});d.support.submitBubbles||(d.event.special.submit={setup:function(){if(d.nodeName(this,"form"))return!1;d.event.add(this,"click._submit keypress._submit",function(b){b=b.target;(b=d.nodeName(b,"input")||d.nodeName(b,"button")?b.form:e)&&!b._submit_attached&&(d.event.add(b,"submit._submit",function(b){b._submit_bubble=!0}),
b._submit_attached=!0)})},postDispatch:function(b){b._submit_bubble&&(delete b._submit_bubble,this.parentNode&&!b.isTrigger&&d.event.simulate("submit",this.parentNode,b,!0))},teardown:function(){if(d.nodeName(this,"form"))return!1;d.event.remove(this,"._submit")}});d.support.changeBubbles||(d.event.special.change={setup:function(){if(sa.test(this.nodeName)){if("checkbox"===this.type||"radio"===this.type)d.event.add(this,"propertychange._change",function(b){"checked"===b.originalEvent.propertyName&&
(this._just_changed=!0)}),d.event.add(this,"click._change",function(b){this._just_changed&&!b.isTrigger&&(this._just_changed=!1,d.event.simulate("change",this,b,!0))});return!1}d.event.add(this,"beforeactivate._change",function(b){b=b.target;sa.test(b.nodeName)&&!b._change_attached&&(d.event.add(b,"change._change",function(b){this.parentNode&&!b.isSimulated&&!b.isTrigger&&d.event.simulate("change",this.parentNode,b,!0)}),b._change_attached=!0)})},handle:function(b){var d=b.target;if(this!==d||b.isSimulated||
b.isTrigger||"radio"!==d.type&&"checkbox"!==d.type)return b.handleObj.handler.apply(this,arguments)},teardown:function(){d.event.remove(this,"._change");return sa.test(this.nodeName)}});d.support.focusinBubbles||d.each({focus:"focusin",blur:"focusout"},function(b,f){var a=0,c=function(b){d.event.simulate(f,b.target,d.event.fix(b),!0)};d.event.special[f]={setup:function(){0===a++&&u.addEventListener(b,c,!0)},teardown:function(){0===--a&&u.removeEventListener(b,c,!0)}}});d.fn.extend({on:function(b,
f,a,c,l){var h,p;if("object"==typeof b){"string"!=typeof f&&(a=a||f,f=e);for(p in b)this.on(p,f,a,b[p],l);return this}null==a&&null==c?(c=f,a=f=e):null==c&&("string"==typeof f?(c=a,a=e):(c=a,a=f,f=e));if(!1===c)c=K;else if(!c)return this;1===l&&(h=c,c=function(b){d().off(b);return h.apply(this,arguments)},c.guid=h.guid||(h.guid=d.guid++));return this.each(function(){d.event.add(this,b,c,a,f)})},one:function(b,d,a,c){return this.on(b,d,a,c,1)},off:function(b,f,a){if(b&&b.preventDefault&&b.handleObj){var h=
b.handleObj;d(b.delegateTarget).off(h.namespace?h.origType+"."+h.namespace:h.origType,h.selector,h.handler);return this}if("object"==typeof b){for(h in b)this.off(h,f,b[h]);return this}if(!1===f||"function"==typeof f)a=f,f=e;!1===a&&(a=K);return this.each(function(){d.event.remove(this,b,a,f)})},bind:function(b,d,a){return this.on(b,null,d,a)},unbind:function(b,d){return this.off(b,null,d)},live:function(b,f,a){d(this.context).on(b,this.selector,f,a);return this},die:function(b,f){d(this.context).off(b,
this.selector||"**",f);return this},delegate:function(b,d,a,c){return this.on(d,b,a,c)},undelegate:function(b,d,a){return 1==arguments.length?this.off(b,"**"):this.off(d,b,a)},trigger:function(b,f){return this.each(function(){d.event.trigger(b,f,this)})},triggerHandler:function(b,f){if(this[0])return d.event.trigger(b,f,this[0],!0)},toggle:function(b){var f=arguments,a=b.guid||d.guid++,c=0,l=function(a){var h=(d._data(this,"lastToggle"+b.guid)||0)%c;d._data(this,"lastToggle"+b.guid,h+1);a.preventDefault();
return f[h].apply(this,arguments)||!1};for(l.guid=a;c<f.length;)f[c++].guid=a;return this.click(l)},hover:function(b,d){return this.mouseenter(b).mouseleave(d||b)}});d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(b,f){d.fn[f]=function(b,d){null==d&&(d=b,b=null);return 0<arguments.length?this.on(f,null,b,d):this.trigger(f)};
d.attrFn&&(d.attrFn[f]=!0);db.test(f)&&(d.event.fixHooks[f]=d.event.keyHooks);eb.test(f)&&(d.event.fixHooks[f]=d.event.mouseHooks)});(function(){function b(b,d,f,a,h,p){h=0;for(var l=a.length;h<l;h++){var e=a[h];if(e){for(var g=!1,e=e[b];e;){if(e[c]===f){g=a[e.sizset];break}if(1===e.nodeType)if(p||(e[c]=f,e.sizset=h),"string"!=typeof d){if(e===d){g=!0;break}}else if(0<w.filter(d,[e]).length){g=e;break}e=e[b]}a[h]=g}}}function f(b,d,f,a,h,p){h=0;for(var l=a.length;h<l;h++){var e=a[h];if(e){for(var g=
!1,e=e[b];e;){if(e[c]===f){g=a[e.sizset];break}1===e.nodeType&&!p&&(e[c]=f,e.sizset=h);if(e.nodeName.toLowerCase()===d){g=e;break}e=e[b]}a[h]=g}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,c="sizcache"+(Math.random()+"").replace(".",""),l=0,g=Object.prototype.toString,n=!1,k=!0,r=/\\/g,m=/\r\n/g,q=/\W/;[0,0].sort(function(){k=!1;return 0});var w=function(b,d,f,h){f=f||[];var c=d=d||u;if(1!==d.nodeType&&
9!==d.nodeType)return[];if(!b||"string"!=typeof b)return f;var p,l,e,n,J,k,r=!0,m=w.isXML(d),y=[],ba=b;do if(a.exec(""),p=a.exec(ba))if(ba=p[3],y.push(p[1]),p[2]){n=p[3];break}while(p);if(1<y.length&&v.exec(b))if(2===y.length&&t.relative[y[0]])l=x(y[0]+y[1],d,h);else for(l=t.relative[y[0]]?[d]:w(y.shift(),d);y.length;)b=y.shift(),t.relative[b]&&(b+=y.shift()),l=x(b,l,h);else if(!h&&1<y.length&&9===d.nodeType&&!m&&t.match.ID.test(y[0])&&!t.match.ID.test(y[y.length-1])&&(J=w.find(y.shift(),d,m),d=J.expr?
w.filter(J.expr,J.set)[0]:J.set[0]),d)for(J=h?{expr:y.pop(),set:C(h)}:w.find(y.pop(),1!==y.length||"~"!==y[0]&&"+"!==y[0]||!d.parentNode?d:d.parentNode,m),l=J.expr?w.filter(J.expr,J.set):J.set,0<y.length?e=C(l):r=!1;y.length;)p=k=y.pop(),t.relative[k]?p=y.pop():k="",null==p&&(p=d),t.relative[k](e,p,m);else e=[];e||(e=l);e||w.error(k||b);if("[object Array]"===g.call(e))if(r)if(d&&1===d.nodeType)for(b=0;null!=e[b];b++)e[b]&&(!0===e[b]||1===e[b].nodeType&&w.contains(d,e[b]))&&f.push(l[b]);else for(b=
0;null!=e[b];b++)e[b]&&1===e[b].nodeType&&f.push(l[b]);else f.push.apply(f,e);else C(e,f);n&&(w(n,c,f,h),w.uniqueSort(f));return f};w.uniqueSort=function(b){if(B&&(n=k,b.sort(B),n))for(var d=1;d<b.length;d++)b[d]===b[d-1]&&b.splice(d--,1);return b};w.matches=function(b,d){return w(b,null,null,d)};w.matchesSelector=function(b,d){return 0<w(d,null,null,[b]).length};w.find=function(b,d,f){var a,h,c,p,e,l;if(!b)return[];h=0;for(c=t.order.length;h<c;h++)if(e=t.order[h],p=t.leftMatch[e].exec(b))if(l=p[1],
p.splice(1,1),"\\"!==l.substr(l.length-1)&&(p[1]=(p[1]||"").replace(r,""),a=t.find[e](p,d,f),null!=a)){b=b.replace(t.match[e],"");break}a||(a="undefined"!=typeof d.getElementsByTagName?d.getElementsByTagName("*"):[]);return{set:a,expr:b}};w.filter=function(b,d,f,a){for(var h,c,p,l,g,n,k,J,r=b,y=[],m=d,q=d&&d[0]&&w.isXML(d[0]);b&&d.length;){for(p in t.filter)if(null!=(h=t.leftMatch[p].exec(b))&&h[2]&&(n=t.filter[p],g=h[1],c=!1,h.splice(1,1),"\\"!==g.substr(g.length-1))){m===y&&(y=[]);if(t.preFilter[p])if(h=
t.preFilter[p](h,m,f,y,a,q),!h)c=l=!0;else if(!0===h)continue;if(h)for(k=0;null!=(g=m[k]);k++)g&&(l=n(g,h,k,m),J=a^l,f&&null!=l?J?c=!0:m[k]=!1:J&&(y.push(g),c=!0));if(l!==e){f||(m=y);b=b.replace(t.match[p],"");if(!c)return[];break}}if(b===r)if(null==c)w.error(b);else break;r=b}return m};w.error=function(b){throw Error("Syntax error, unrecognized expression: "+b);};var A=w.getText=function(b){var d,f;d=b.nodeType;var a="";if(d)if(1===d||9===d||11===d){if("string"==typeof b.textContent)return b.textContent;
if("string"==typeof b.innerText)return b.innerText.replace(m,"");for(b=b.firstChild;b;b=b.nextSibling)a+=A(b)}else{if(3===d||4===d)return b.nodeValue}else for(d=0;f=b[d];d++)8!==f.nodeType&&(a+=A(f));return a},t=w.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(b){return b.getAttribute("href")},type:function(b){return b.getAttribute("type")}},relative:{"+":function(b,d){var f=
"string"==typeof d,a=f&&!q.test(d),f=f&&!a;a&&(d=d.toLowerCase());for(var a=0,h=b.length,c;a<h;a++)if(c=b[a]){for(;(c=c.previousSibling)&&1!==c.nodeType;);b[a]=f||c&&c.nodeName.toLowerCase()===d?c||!1:c===d}f&&w.filter(d,b,!0)},">":function(b,d){var f,a="string"==typeof d,h=0,c=b.length;if(a&&!q.test(d))for(d=d.toLowerCase();h<c;h++){if(f=b[h])f=f.parentNode,b[h]=f.nodeName.toLowerCase()===d?f:!1}else{for(;h<c;h++)(f=b[h])&&(b[h]=a?f.parentNode:f.parentNode===d);a&&w.filter(d,b,!0)}},"":function(d,
a,h){var c,p=l++,e=b;"string"==typeof a&&!q.test(a)&&(a=a.toLowerCase(),c=a,e=f);e("parentNode",a,p,d,c,h)},"~":function(d,a,h){var c,p=l++,e=b;"string"==typeof a&&!q.test(a)&&(a=a.toLowerCase(),c=a,e=f);e("previousSibling",a,p,d,c,h)}},find:{ID:function(b,d,f){if("undefined"!=typeof d.getElementById&&!f)return(b=d.getElementById(b[1]))&&b.parentNode?[b]:[]},NAME:function(b,d){if("undefined"!=typeof d.getElementsByName){for(var f=[],a=d.getElementsByName(b[1]),h=0,c=a.length;h<c;h++)a[h].getAttribute("name")===
b[1]&&f.push(a[h]);return 0===f.length?null:f}},TAG:function(b,d){if("undefined"!=typeof d.getElementsByTagName)return d.getElementsByTagName(b[1])}},preFilter:{CLASS:function(b,d,f,a,h,c){b=" "+b[1].replace(r,"")+" ";if(c)return b;c=0;for(var p;null!=(p=d[c]);c++)p&&(h^(p.className&&0<=(" "+p.className+" ").replace(/[\t\n\r]/g," ").indexOf(b))?f||a.push(p):f&&(d[c]=!1));return!1},ID:function(b){return b[1].replace(r,"")},TAG:function(b,d){return b[1].replace(r,"").toLowerCase()},CHILD:function(b){if("nth"===
b[1]){b[2]||w.error(b[0]);b[2]=b[2].replace(/^\+|\s*/g,"");var d=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even"===b[2]&&"2n"||"odd"===b[2]&&"2n+1"||!/\D/.test(b[2])&&"0n+"+b[2]||b[2]);b[2]=d[1]+(d[2]||1)-0;b[3]=d[3]-0}else b[2]&&w.error(b[0]);b[0]=l++;return b},ATTR:function(b,d,f,a,h,c){d=b[1]=b[1].replace(r,"");!c&&t.attrMap[d]&&(b[1]=t.attrMap[d]);b[4]=(b[4]||b[5]||"").replace(r,"");"~="===b[2]&&(b[4]=" "+b[4]+" ");return b},PSEUDO:function(b,d,f,h,c){if("not"===b[1])if(1<(a.exec(b[3])||"").length||
/^\w/.test(b[3]))b[3]=w(b[3],null,null,d);else return b=w.filter(b[3],d,f,1^c),f||h.push.apply(h,b),!1;else if(t.match.POS.test(b[0])||t.match.CHILD.test(b[0]))return!0;return b},POS:function(b){b.unshift(!0);return b}},filters:{enabled:function(b){return!1===b.disabled&&"hidden"!==b.type},disabled:function(b){return!0===b.disabled},checked:function(b){return!0===b.checked},selected:function(b){b.parentNode&&b.parentNode.selectedIndex;return!0===b.selected},parent:function(b){return!!b.firstChild},
empty:function(b){return!b.firstChild},has:function(b,d,f){return!!w(f[3],b).length},header:function(b){return/h\d/i.test(b.nodeName)},text:function(b){var d=b.getAttribute("type"),f=b.type;return"input"===b.nodeName.toLowerCase()&&"text"===f&&(d===f||null===d)},radio:function(b){return"input"===b.nodeName.toLowerCase()&&"radio"===b.type},checkbox:function(b){return"input"===b.nodeName.toLowerCase()&&"checkbox"===b.type},file:function(b){return"input"===b.nodeName.toLowerCase()&&"file"===b.type},
password:function(b){return"input"===b.nodeName.toLowerCase()&&"password"===b.type},submit:function(b){var d=b.nodeName.toLowerCase();return("input"===d||"button"===d)&&"submit"===b.type},image:function(b){return"input"===b.nodeName.toLowerCase()&&"image"===b.type},reset:function(b){var d=b.nodeName.toLowerCase();return("input"===d||"button"===d)&&"reset"===b.type},button:function(b){var d=b.nodeName.toLowerCase();return"input"===d&&"button"===b.type||"button"===d},input:function(b){return/input|select|textarea|button/i.test(b.nodeName)},
focus:function(b){return b===b.ownerDocument.activeElement}},setFilters:{first:function(b,d){return 0===d},last:function(b,d,f,a){return d===a.length-1},even:function(b,d){return 0===d%2},odd:function(b,d){return 1===d%2},lt:function(b,d,f){return d<f[3]-0},gt:function(b,d,f){return d>f[3]-0},nth:function(b,d,f){return f[3]-0===d},eq:function(b,d,f){return f[3]-0===d}},filter:{PSEUDO:function(b,d,f,a){var h=d[1],c=t.filters[h];if(c)return c(b,f,d,a);if("contains"===h)return 0<=(b.textContent||b.innerText||
A([b])||"").indexOf(d[3]);if("not"===h){d=d[3];f=0;for(a=d.length;f<a;f++)if(d[f]===b)return!1;return!0}w.error(h)},CHILD:function(b,d){var f,a,h,p,e,l;f=d[1];l=b;switch(f){case "only":case "first":for(;l=l.previousSibling;)if(1===l.nodeType)return!1;if("first"===f)return!0;l=b;case "last":for(;l=l.nextSibling;)if(1===l.nodeType)return!1;return!0;case "nth":f=d[2];a=d[3];if(1===f&&0===a)return!0;h=d[0];if((p=b.parentNode)&&(p[c]!==h||!b.nodeIndex)){e=0;for(l=p.firstChild;l;l=l.nextSibling)1===l.nodeType&&
(l.nodeIndex=++e);p[c]=h}l=b.nodeIndex-a;return 0===f?0===l:0===l%f&&0<=l/f}},ID:function(b,d){return 1===b.nodeType&&b.getAttribute("id")===d},TAG:function(b,d){return"*"===d&&1===b.nodeType||!!b.nodeName&&b.nodeName.toLowerCase()===d},CLASS:function(b,d){return-1<(" "+(b.className||b.getAttribute("class"))+" ").indexOf(d)},ATTR:function(b,d){var f=d[1],f=w.attr?w.attr(b,f):t.attrHandle[f]?t.attrHandle[f](b):null!=b[f]?b[f]:b.getAttribute(f),a=f+"",h=d[2],c=d[4];return null==f?"!="===h:!h&&w.attr?
null!=f:"="===h?a===c:"*="===h?0<=a.indexOf(c):"~="===h?0<=(" "+a+" ").indexOf(c):c?"!="===h?a!==c:"^="===h?0===a.indexOf(c):"$="===h?a.substr(a.length-c.length)===c:"|="===h?a===c||a.substr(0,c.length+1)===c+"-":!1:a&&!1!==f},POS:function(b,d,f,a){var h=t.setFilters[d[2]];if(h)return h(b,f,d,a)}}},v=t.match.POS,D=function(b,d){return"\\"+(d-0+1)},H;for(H in t.match)t.match[H]=new RegExp(t.match[H].source+/(?![^\[]*\])(?![^\(]*\))/.source),t.leftMatch[H]=new RegExp(/(^(?:.|\r|\n)*?)/.source+t.match[H].source.replace(/\\(\d+)/g,
D));t.match.globalPOS=v;var C=function(b,d){b=Array.prototype.slice.call(b,0);return d?(d.push.apply(d,b),d):b};try{Array.prototype.slice.call(u.documentElement.childNodes,0)[0].nodeType}catch(J){C=function(b,d){var f=0,a=d||[];if("[object Array]"===g.call(b))Array.prototype.push.apply(a,b);else if("number"==typeof b.length)for(var h=b.length;f<h;f++)a.push(b[f]);else for(;b[f];f++)a.push(b[f]);return a}}var B,z;u.documentElement.compareDocumentPosition?B=function(b,d){return b===d?(n=!0,0):b.compareDocumentPosition&&
d.compareDocumentPosition?b.compareDocumentPosition(d)&4?-1:1:b.compareDocumentPosition?-1:1}:(B=function(b,d){if(b===d)return n=!0,0;if(b.sourceIndex&&d.sourceIndex)return b.sourceIndex-d.sourceIndex;var f,a,h=[],c=[];f=b.parentNode;a=d.parentNode;var p=f;if(f===a)return z(b,d);if(!f)return-1;if(!a)return 1;for(;p;)h.unshift(p),p=p.parentNode;for(p=a;p;)c.unshift(p),p=p.parentNode;f=h.length;a=c.length;for(p=0;p<f&&p<a;p++)if(h[p]!==c[p])return z(h[p],c[p]);return p===f?z(b,c[p],-1):z(h[p],d,1)},
z=function(b,d,f){if(b===d)return f;for(b=b.nextSibling;b;){if(b===d)return-1;b=b.nextSibling}return 1});(function(){var b=u.createElement("div"),d="script"+(new Date).getTime(),f=u.documentElement;b.innerHTML="<a name='"+d+"'/>";f.insertBefore(b,f.firstChild);u.getElementById(d)&&(t.find.ID=function(b,d,f){if("undefined"!=typeof d.getElementById&&!f)return(d=d.getElementById(b[1]))?d.id===b[1]||"undefined"!=typeof d.getAttributeNode&&d.getAttributeNode("id").nodeValue===b[1]?[d]:e:[]},t.filter.ID=
function(b,d){var f="undefined"!=typeof b.getAttributeNode&&b.getAttributeNode("id");return 1===b.nodeType&&f&&f.nodeValue===d});f.removeChild(b);f=b=null})();(function(){var b=u.createElement("div");b.appendChild(u.createComment(""));0<b.getElementsByTagName("*").length&&(t.find.TAG=function(b,d){var f=d.getElementsByTagName(b[1]);if("*"===b[1]){for(var a=[],h=0;f[h];h++)1===f[h].nodeType&&a.push(f[h]);f=a}return f});b.innerHTML="<a href='#'></a>";b.firstChild&&"undefined"!=typeof b.firstChild.getAttribute&&
"#"!==b.firstChild.getAttribute("href")&&(t.attrHandle.href=function(b){return b.getAttribute("href",2)});b=null})();u.querySelectorAll&&function(){var b=w,d=u.createElement("div");d.innerHTML="<p class='TEST'></p>";if(!d.querySelectorAll||0!==d.querySelectorAll(".TEST").length){w=function(d,f,a,h){f=f||u;if(!h&&!w.isXML(f)){var c=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(d);if(c&&(1===f.nodeType||9===f.nodeType)){if(c[1])return C(f.getElementsByTagName(d),a);if(c[2]&&t.find.CLASS&&f.getElementsByClassName)return C(f.getElementsByClassName(c[2]),
a)}if(9===f.nodeType){if("body"===d&&f.body)return C([f.body],a);if(c&&c[3]){var p=f.getElementById(c[3]);if(!p||!p.parentNode)return C([],a);if(p.id===c[3])return C([p],a)}try{return C(f.querySelectorAll(d),a)}catch(Ia){}}else if(1===f.nodeType&&"object"!==f.nodeName.toLowerCase()){var c=f,l=(p=f.getAttribute("id"))||"__sizzle__",e=f.parentNode,g=/^\s*[+~]/.test(d);p?l=l.replace(/'/g,"\\$&"):f.setAttribute("id",l);g&&e&&(f=f.parentNode);try{if(!g||e)return C(f.querySelectorAll("[id='"+l+"'] "+d),
a)}catch(Ia){}finally{p||c.removeAttribute("id")}}}return b(d,f,a,h)};for(var f in b)w[f]=b[f];d=null}}();(function(){var b=u.documentElement,d=b.matchesSelector||b.mozMatchesSelector||b.webkitMatchesSelector||b.msMatchesSelector;if(d){var f=!d.call(u.createElement("div"),"div"),a=!1;try{d.call(u.documentElement,"[test!='']:sizzle")}catch(na){a=!0}w.matchesSelector=function(b,h){h=h.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!w.isXML(b))try{if(a||!t.match.PSEUDO.test(h)&&!/!=/.test(h)){var c=d.call(b,
h);if(c||!f||b.document&&11!==b.document.nodeType)return c}}catch(Sb){}return 0<w(h,null,null,[b]).length}}})();(function(){var b=u.createElement("div");b.innerHTML="<div class='test e'></div><div class='test'></div>";b.getElementsByClassName&&0!==b.getElementsByClassName("e").length&&(b.lastChild.className="e",1!==b.getElementsByClassName("e").length&&(t.order.splice(1,0,"CLASS"),t.find.CLASS=function(b,d,f){if("undefined"!=typeof d.getElementsByClassName&&!f)return d.getElementsByClassName(b[1])},
b=null))})();u.documentElement.contains?w.contains=function(b,d){return b!==d&&(b.contains?b.contains(d):!0)}:u.documentElement.compareDocumentPosition?w.contains=function(b,d){return!!(b.compareDocumentPosition(d)&16)}:w.contains=function(){return!1};w.isXML=function(b){return(b=(b?b.ownerDocument||b:0).documentElement)?"HTML"!==b.nodeName:!1};var x=function(b,d,f){var a,h=[],c="";for(d=d.nodeType?[d]:d;a=t.match.PSEUDO.exec(b);)c+=a[0],b=b.replace(t.match.PSEUDO,"");b=t.relative[b]?b+"*":b;a=0;
for(var p=d.length;a<p;a++)w(b,d[a],h,f);return w.filter(c,h)};w.attr=d.attr;w.selectors.attrMap={};d.find=w;d.expr=w.selectors;d.expr[":"]=d.expr.filters;d.unique=w.uniqueSort;d.text=w.getText;d.isXMLDoc=w.isXML;d.contains=w.contains})();var hb=/Until$/,ib=/^(?:parents|prevUntil|prevAll)/,jb=/,/,bb=/^.[^:#\[\.,]*$/,kb=Array.prototype.slice,La=d.expr.match.globalPOS,lb={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({find:function(b){var f=this,a,c;if("string"!=typeof b)return d(b).filter(function(){a=
0;for(c=f.length;a<c;a++)if(d.contains(f[a],this))return!0});var l=this.pushStack("","find",b),e,g,n;a=0;for(c=this.length;a<c;a++)if(e=l.length,d.find(b,this[a],l),0<a)for(g=e;g<l.length;g++)for(n=0;n<e;n++)if(l[n]===l[g]){l.splice(g--,1);break}return l},has:function(b){var f=d(b);return this.filter(function(){for(var b=0,a=f.length;b<a;b++)if(d.contains(this,f[b]))return!0})},not:function(b){return this.pushStack(R(this,b,!1),"not",b)},filter:function(b){return this.pushStack(R(this,b,!0),"filter",
b)},is:function(b){return!!b&&("string"==typeof b?La.test(b)?0<=d(b,this.context).index(this[0]):0<d.filter(b,this).length:0<this.filter(b).length)},closest:function(b,f){var a=[],c,l,e=this[0];if(d.isArray(b)){for(l=1;e&&e.ownerDocument&&e!==f;){for(c=0;c<b.length;c++)d(e).is(b[c])&&a.push({selector:b[c],elem:e,level:l});e=e.parentNode;l++}return a}var g=La.test(b)||"string"!=typeof b?d(b,f||this.context):0;c=0;for(l=this.length;c<l;c++)for(e=this[c];e;){if(g?-1<g.index(e):d.find.matchesSelector(e,
b)){a.push(e);break}e=e.parentNode;if(!e||!e.ownerDocument||e===f||11===e.nodeType)break}a=1<a.length?d.unique(a):a;return this.pushStack(a,"closest",b)},index:function(b){return b?"string"==typeof b?d.inArray(this[0],d(b)):d.inArray(b._jQuery?b[0]:b,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(b,f){var a="string"==typeof b?d(b,f):d.makeArray(b&&b.nodeType?[b]:b),c=d.merge(this.get(),a);return this.pushStack(U(a[0])||U(c[0])?c:d.unique(c))},andSelf:function(){return this.add(this.prevObject)}});
d.each({parent:function(b){return(b=b.parentNode)&&11!==b.nodeType?b:null},parents:function(b){return d.dir(b,"parentNode")},parentsUntil:function(b,f,a){return d.dir(b,"parentNode",a)},next:function(b){return d.nth(b,2,"nextSibling")},prev:function(b){return d.nth(b,2,"previousSibling")},nextAll:function(b){return d.dir(b,"nextSibling")},prevAll:function(b){return d.dir(b,"previousSibling")},nextUntil:function(b,f,a){return d.dir(b,"nextSibling",a)},prevUntil:function(b,f,a){return d.dir(b,"previousSibling",
a)},siblings:function(b){return d.sibling((b.parentNode||{}).firstChild,b)},children:function(b){return d.sibling(b.firstChild)},contents:function(b){return d.nodeName(b,"iframe")?b.contentDocument||b.contentWindow.document:d.makeArray(b.childNodes)}},function(b,f){d.fn[b]=function(a,c){var h=d.map(this,f,a);hb.test(b)||(c=a);c&&"string"==typeof c&&(h=d.filter(c,h));h=1<this.length&&!lb[b]?d.unique(h):h;(1<this.length||jb.test(c))&&ib.test(b)&&(h=h.reverse());return this.pushStack(h,b,kb.call(arguments).join(","))}});
d.extend({filter:function(b,f,a){a&&(b=":not("+b+")");return 1===f.length?d.find.matchesSelector(f[0],b)?[f[0]]:[]:d.find.matches(b,f)},dir:function(b,f,a){var c=[];for(b=b[f];b&&9!==b.nodeType&&(a===e||1!==b.nodeType||!d(b).is(a));)1===b.nodeType&&c.push(b),b=b[f];return c},nth:function(b,d,a,c){d=d||1;for(c=0;b&&(1!==b.nodeType||++c!==d);b=b[a]);return b},sibling:function(b,d){for(var f=[];b;b=b.nextSibling)1===b.nodeType&&b!==d&&f.push(b);return f}});var Ha="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
mb=/ _jQuery\d+="(?:\d+|null)"/g,xa=/^\s+/,Ma=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Na=/<([\w:]+)/,nb=/<tbody/i,ob=/<|&#?\w+;/,pb=/<(?:script|style)/i,qb=/<(?:script|object|embed|option|style)/i,Oa=new RegExp("<(?:"+Ha+")[\\s/>]","i"),Pa=/checked\s*(?:[^=]|=\s*.checked.)/i,Qa=/\/(java|ecma)script/i,rb=/^\s*<!(?:\[CDATA\[|\-\-)/,V={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>",
"</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},ya=M(u);V.optgroup=V.option;V.tbody=V.tfoot=V.colgroup=V.caption=V.thead;V.th=V.td;d.support.htmlSerialize||(V._default=[1,"div<div>","</div>"]);d.fn.extend({text:function(b){return d.access(this,function(b){return b===e?d.text(this):this.empty().append((this[0]&&this[0].ownerDocument||u).createTextNode(b))},null,b,arguments.length)},
wrapAll:function(b){if(d.isFunction(b))return this.each(function(f){d(this).wrapAll(b.call(this,f))});if(this[0]){var f=d(b,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&f.insertBefore(this[0]);f.map(function(){for(var b=this;b.firstChild&&1===b.firstChild.nodeType;)b=b.firstChild;return b}).append(this)}return this},wrapInner:function(b){return d.isFunction(b)?this.each(function(f){d(this).wrapInner(b.call(this,f))}):this.each(function(){var f=d(this),a=f.contents();a.length?a.wrapAll(b):
f.append(b)})},wrap:function(b){var f=d.isFunction(b);return this.each(function(a){d(this).wrapAll(f?b.call(this,a):b)})},unwrap:function(){return this.parent().each(function(){d.nodeName(this,"body")||d(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(b){1===this.nodeType&&this.appendChild(b)})},prepend:function(){return this.domManip(arguments,!0,function(b){1===this.nodeType&&this.insertBefore(b,this.firstChild)})},before:function(){if(this[0]&&
this[0].parentNode)return this.domManip(arguments,!1,function(b){this.parentNode.insertBefore(b,this)});if(arguments.length){var b=d.clean(arguments);b.push.apply(b,this.toArray());return this.pushStack(b,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(b){this.parentNode.insertBefore(b,this.nextSibling)});if(arguments.length){var b=this.pushStack(this,"after",arguments);b.push.apply(b,d.clean(arguments));return b}},remove:function(b,
f){for(var a=0,c;null!=(c=this[a]);a++)if(!b||d.filter(b,[c]).length)!f&&1===c.nodeType&&(d.cleanData(c.getElementsByTagName("*")),d.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){for(var b=0,f;null!=(f=this[b]);b++)for(1===f.nodeType&&d.cleanData(f.getElementsByTagName("*"));f.firstChild;)f.removeChild(f.firstChild);return this},clone:function(b,f){b=null==b?!1:b;f=null==f?b:f;return this.map(function(){return d.clone(this,b,f)})},html:function(b){return d.access(this,
function(b){var f=this[0]||{},a=0,c=this.length;if(b===e)return 1===f.nodeType?f.innerHTML.replace(mb,""):null;if(!("string"!=typeof b||pb.test(b)||!d.support.leadingWhitespace&&xa.test(b)||V[(Na.exec(b)||["",""])[1].toLowerCase()])){b=b.replace(Ma,"<$1></$2>");try{for(;a<c;a++)f=this[a]||{},1===f.nodeType&&(d.cleanData(f.getElementsByTagName("*")),f.innerHTML=b);f=0}catch(N){}}f&&this.empty().append(b)},null,b,arguments.length)},replaceWith:function(b){if(this[0]&&this[0].parentNode){if(d.isFunction(b))return this.each(function(f){var a=
d(this),c=a.html();a.replaceWith(b.call(this,f,c))});"string"!=typeof b&&(b=d(b).detach());return this.each(function(){var f=this.nextSibling,a=this.parentNode;d(this).remove();f?d(f).before(b):d(a).append(b)})}return this.length?this.pushStack(d(d.isFunction(b)?b():b),"replaceWith",b):this},detach:function(b){return this.remove(b,!0)},domManip:function(b,f,a){var c,h,l,g=b[0],n=[];if(!d.support.checkClone&&3===arguments.length&&"string"==typeof g&&Pa.test(g))return this.each(function(){d(this).domManip(b,
f,a,!0)});if(d.isFunction(g))return this.each(function(c){var h=d(this);b[0]=g.call(this,c,f?h.html():e);h.domManip(b,f,a)});if(this[0]){l=g&&g.parentNode;d.support.parentNode&&l&&11===l.nodeType&&l.childNodes.length===this.length?c={fragment:l}:c=d.buildFragment(b,this,n);l=c.fragment;1===l.childNodes.length?h=l=l.firstChild:h=l.firstChild;if(h){f=f&&d.nodeName(h,"tr");for(var k=0,r=this.length,m=r-1;k<r;k++)a.call(f?P(this[k],h):this[k],c.cacheable||1<r&&k<m?d.clone(l,!0,!0):l)}n.length&&d.each(n,
function(b,f){f.src?d.ajax({type:"GET",global:!1,url:f.src,async:!1,dataType:"script"}):d.globalEval((f.text||f.textContent||f.innerHTML||"").replace(rb,"/*$0*/"));f.parentNode&&f.parentNode.removeChild(f)})}return this}});d.buildFragment=function(b,f,a){var c,h,l,e,g=b[0];f&&f[0]&&(e=f[0].ownerDocument||f[0]);e.createDocumentFragment||(e=u);1===b.length&&"string"==typeof g&&512>g.length&&e===u&&"<"===g.charAt(0)&&!qb.test(g)&&(d.support.checkClone||!Pa.test(g))&&(d.support.html5Clone||!Oa.test(g))&&
(h=!0,l=d.fragments[g],l&&1!==l&&(c=l));c||(c=e.createDocumentFragment(),d.clean(b,e,c,a));h&&(d.fragments[g]=l?c:1);return{fragment:c,cacheable:h}};d.fragments={};d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(b,f){d.fn[b]=function(a){var c=[];a=d(a);var h=1===this.length&&this[0].parentNode;if(h&&11===h.nodeType&&1===h.childNodes.length&&1===a.length)return a[f](this[0]),this;for(var h=0,l=a.length;h<l;h++){var e=(0<h?this.clone(!0):
this).get();d(a[h])[f](e);c=c.concat(e)}return this.pushStack(c,b,a.selector)}});d.extend({clone:function(b,f,a){var c,h,l;d.support.html5Clone||d.isXMLDoc(b)||!Oa.test("<"+b.nodeName+">")?c=b.cloneNode(!0):(c=u.createElement("div"),ya.appendChild(c),c.innerHTML=b.outerHTML,c=c.firstChild);var e=c;if(!(d.support.noCloneEvent&&d.support.noCloneChecked||1!==b.nodeType&&11!==b.nodeType||d.isXMLDoc(b)))for(B(b,e),c=D(b),h=D(e),l=0;c[l];++l)h[l]&&B(c[l],h[l]);if(f&&(F(b,e),a))for(c=D(b),h=D(e),l=0;c[l];++l)F(c[l],
h[l]);return e},clean:function(b,f,a,c){var h,p=[];f=f||u;"undefined"==typeof f.createElement&&(f=f.ownerDocument||f[0]&&f[0].ownerDocument||u);for(var l=0,e;null!=(e=b[l]);l++)if("number"==typeof e&&(e+=""),e){if("string"==typeof e)if(ob.test(e)){e=e.replace(Ma,"<$1></$2>");h=(Na.exec(e)||["",""])[1].toLowerCase();var g=V[h]||V._default,n=g[0],k=f.createElement("div"),r=ya.childNodes,m;f===u?ya.appendChild(k):M(f).appendChild(k);for(k.innerHTML=g[1]+e+g[2];n--;)k=k.lastChild;if(!d.support.tbody)for(n=
nb.test(e),g="table"!==h||n?"<table>"!==g[1]||n?[]:k.childNodes:k.firstChild&&k.firstChild.childNodes,h=g.length-1;0<=h;--h)d.nodeName(g[h],"tbody")&&!g[h].childNodes.length&&g[h].parentNode.removeChild(g[h]);!d.support.leadingWhitespace&&xa.test(e)&&k.insertBefore(f.createTextNode(xa.exec(e)[0]),k.firstChild);e=k.childNodes;k&&(k.parentNode.removeChild(k),0<r.length&&(m=r[r.length-1],m&&m.parentNode&&m.parentNode.removeChild(m)))}else e=f.createTextNode(e);var w;if(!d.support.appendChecked)if(e[0]&&
"number"==typeof(w=e.length))for(h=0;h<w;h++)C(e[h]);else C(e);e.nodeType?p.push(e):p=d.merge(p,e)}if(a)for(b=function(b){return!b.type||Qa.test(b.type)},l=0;p[l];l++)f=p[l],c&&d.nodeName(f,"script")&&(!f.type||Qa.test(f.type))?c.push(f.parentNode?f.parentNode.removeChild(f):f):(1===f.nodeType&&(e=d.grep(f.getElementsByTagName("script"),b),p.splice.apply(p,[l+1,0].concat(e))),a.appendChild(f));return p},cleanData:function(b){for(var f,a,c=d.cache,l=d.event.special,e=d.support.deleteExpando,g=0,n;null!=
(n=b[g]);g++)if(!n.nodeName||!d.noData[n.nodeName.toLowerCase()])if(a=n[d.expando]){if((f=c[a])&&f.events){for(var k in f.events)l[k]?d.event.remove(n,k):d.removeEvent(n,k,f.handle);f.handle&&(f.handle.elem=null)}e?delete n[d.expando]:n.removeAttribute&&n.removeAttribute(d.expando);delete c[a]}}});var za=/alpha\([^)]*\)/i,sb=/opacity=([^)]*)/,tb=/([A-Z]|^ms)/g,ub=/^[\-+]?(?:\d*\.)?\d+$/i,va=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,vb=/^([\-+])=([\-+.\de]+)/,wb=/^margin/,xb={position:"absolute",visibility:"hidden",
display:"block"},da=["Top","Right","Bottom","Left"],ha,Ra,Sa;d.fn.css=function(b,f){return d.access(this,function(b,f,a){return a!==e?d.style(b,f,a):d.css(b,f)},b,f,1<arguments.length)};d.extend({cssHooks:{opacity:{get:function(b,d){if(d){var f=ha(b,"opacity");return""===f?"1":f}return b.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":d.support.cssFloat?"cssFloat":"styleFloat"},style:function(b,f,a,c){if(b&&
3!==b.nodeType&&8!==b.nodeType&&b.style){var h,p=d.camelCase(f),l=b.style,g=d.cssHooks[p];f=d.cssProps[p]||p;if(a===e)return g&&"get"in g&&(h=g.get(b,!1,c))!==e?h:l[f];c=typeof a;"string"===c&&(h=vb.exec(a))&&(a=+(h[1]+1)*+h[2]+parseFloat(d.css(b,f)),c="number");if(!(null==a||"number"===c&&isNaN(a)||("number"===c&&!d.cssNumber[p]&&(a+="px"),g&&"set"in g&&(a=g.set(b,a))===e)))try{l[f]=a}catch(Ob){}}},css:function(b,f,a){var c,h;f=d.camelCase(f);h=d.cssHooks[f];f=d.cssProps[f]||f;"cssFloat"===f&&(f=
"float");if(h&&"get"in h&&(c=h.get(b,!0,a))!==e)return c;if(ha)return ha(b,f)},swap:function(b,d,a){var f={},c;for(c in d)f[c]=b.style[c],b.style[c]=d[c];a=a.call(b);for(c in d)b.style[c]=f[c];return a}});d.curCSS=d.css;u.defaultView&&u.defaultView.getComputedStyle&&(Ra=function(b,f){var a,c,l,e,g=b.style;f=f.replace(tb,"-$1").toLowerCase();(c=b.ownerDocument.defaultView)&&(l=c.getComputedStyle(b,null))&&(a=l.getPropertyValue(f),""===a&&!d.contains(b.ownerDocument.documentElement,b)&&(a=d.style(b,
f)));!d.support.pixelMargin&&l&&wb.test(f)&&va.test(a)&&(e=g.width,g.width=a,a=l.width,g.width=e);return a});u.documentElement.currentStyle&&(Sa=function(b,d){var f,a,c,l=b.currentStyle&&b.currentStyle[d],e=b.style;null==l&&e&&(c=e[d])&&(l=c);va.test(l)&&(f=e.left,a=b.runtimeStyle&&b.runtimeStyle.left,a&&(b.runtimeStyle.left=b.currentStyle.left),e.left="fontSize"===d?"1em":l,l=e.pixelLeft+"px",e.left=f,a&&(b.runtimeStyle.left=a));return""===l?"auto":l});ha=Ra||Sa;d.each(["height","width"],function(b,
f){d.cssHooks[f]={get:function(b,a,c){if(a)return 0!==b.offsetWidth?t(b,f,c):d.swap(b,xb,function(){return t(b,f,c)})},set:function(b,d){return ub.test(d)?d+"px":d}}});d.support.opacity||(d.cssHooks.opacity={get:function(b,d){return sb.test((d&&b.currentStyle?b.currentStyle.filter:b.style.filter)||"")?parseFloat(RegExp.$1)/100+"":d?"1":""},set:function(b,f){var a=b.style,c=b.currentStyle,l=d.isNumeric(f)?"alpha(opacity="+100*f+")":"",e=c&&c.filter||a.filter||"";a.zoom=1;if(1<=f&&""===d.trim(e.replace(za,
""))&&(a.removeAttribute("filter"),c&&!c.filter))return;a.filter=za.test(e)?e.replace(za,l):e+" "+l}});d(function(){d.support.reliableMarginRight||(d.cssHooks.marginRight={get:function(b,f){return d.swap(b,{display:"inline-block"},function(){return f?ha(b,"margin-right"):b.style.marginRight})}})});d.expr&&d.expr.filters&&(d.expr.filters.hidden=function(b){var f=b.offsetHeight;return 0===b.offsetWidth&&0===f||!d.support.reliableHiddenOffsets&&"none"===(b.style&&b.style.display||d.css(b,"display"))},
d.expr.filters.visible=function(b){return!d.expr.filters.hidden(b)});d.each({margin:"",padding:"",border:"Width"},function(b,f){d.cssHooks[b+f]={expand:function(d){var a="string"==typeof d?d.split(" "):[d],c={};for(d=0;4>d;d++)c[b+da[d]+f]=a[d]||a[d-2]||a[0];return c}}});var yb=/%20/g,ab=/\[\]$/,Ta=/\r?\n/g,zb=/#.*$/,Ab=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,Bb=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,Cb=/^(?:GET|HEAD)$/,Db=/^\/\//,
Ua=/\?/,Eb=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,Fb=/^(?:select|textarea)/i,Ga=/\s+/,Gb=/([?&])_=[^&]*/,Va=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,Wa=d.fn.load,ua={},Xa={},ea,fa;try{ea=Q.href}catch(b){ea=u.createElement("a"),ea.href="",ea=ea.href}fa=Va.exec(ea.toLowerCase())||[];d.fn.extend({load:function(b,f,a){if("string"!=typeof b&&Wa)return Wa.apply(this,arguments);if(!this.length)return this;var c=b.indexOf(" ");if(0<=c){var h=b.slice(c,b.length);b=b.slice(0,c)}c="GET";
f&&(d.isFunction(f)?(a=f,f=e):"object"==typeof f&&(f=d.param(f,d.ajaxSettings.traditional),c="POST"));var l=this;d.ajax({url:b,type:c,dataType:"html",data:f,complete:function(b,f,c){c=b.responseText;b.isResolved()&&(b.done(function(b){c=b}),l.html(h?d("<div>").append(c.replace(Eb,"")).find(h):c));a&&l.each(a,[c,f,b])}});return this},serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?d.makeArray(this.elements):this}).filter(function(){return this.name&&
!this.disabled&&(this.checked||Fb.test(this.nodeName)||Bb.test(this.type))}).map(function(b,f){var a=d(this).val();return null==a?null:d.isArray(a)?d.map(a,function(b,d){return{name:f.name,value:b.replace(Ta,"\r\n")}}):{name:f.name,value:a.replace(Ta,"\r\n")}}).get()}});d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(b,f){d.fn[f]=function(b){return this.on(f,b)}});d.each(["get","post"],function(b,f){d[f]=function(b,a,c,l){d.isFunction(a)&&(l=l||c,c=a,a=
e);return d.ajax({type:f,url:b,data:a,success:c,dataType:l})}});d.extend({getScript:function(b,f){return d.get(b,e,f,"script")},getJSON:function(b,f,a){return d.get(b,f,a,"json")},ajaxSetup:function(b,f){f?x(b,d.ajaxSettings):(f=b,b=d.ajaxSettings);x(b,f);return b},ajaxSettings:{url:ea,isLocal:/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(fa[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",
html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":d.parseJSON,"text xml":d.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:A(ua),ajaxTransport:A(Xa),ajax:function(b,f){function a(b,f,a,h){if(2!==H){H=2;v&&clearTimeout(v);A=e;t=h||"";x.readyState=0<b?4:0;var p,w,q;h=f;if(a){var u=c,D=x,y=u.contents,
B=u.dataTypes,z=u.responseFields,O,E,K,I;for(E in z)E in a&&(D[z[E]]=a[E]);for(;"*"===B[0];)B.shift(),O===e&&(O=u.mimeType||D.getResponseHeader("content-type"));if(O)for(E in y)if(y[E]&&y[E].test(O)){B.unshift(E);break}if(B[0]in a)K=B[0];else{for(E in a){if(!B[0]||u.converters[E+" "+B[0]]){K=E;break}I||(I=E)}K=K||I}K?(K!==B[0]&&B.unshift(K),a=a[K]):a=void 0}else a=e;if(200<=b&&300>b||304===b){if(c.ifModified){if(O=x.getResponseHeader("Last-Modified"))d.lastModified[m]=O;if(O=x.getResponseHeader("Etag"))d.etag[m]=
O}if(304===b)h="notmodified",p=!0;else try{O=c;O.dataFilter&&(a=O.dataFilter(a,O.dataType));var S=O.dataTypes;E={};var Q,G,$a=S.length,F,L=S[0],N,W,M,T,P;for(Q=1;Q<$a;Q++){if(1===Q)for(G in O.converters)"string"==typeof G&&(E[G.toLowerCase()]=O.converters[G]);N=L;L=S[Q];if("*"===L)L=N;else if("*"!==N&&N!==L){W=N+" "+L;M=E[W]||E["* "+L];if(!M)for(T in P=e,E)if(F=T.split(" "),F[0]===N||"*"===F[0])if(P=E[F[1]+" "+L]){T=E[T];!0===T?M=P:!0===P&&(M=T);break}M||P||d.error("No conversion from "+W.replace(" ",
" to "));!0!==M&&(a=M?M(a):P(T(a)))}}w=a;h="success";p=!0}catch(Hb){h="parsererror",q=Hb}}else if(q=h,!h||b)h="error",0>b&&(b=0);x.status=b;x.statusText=""+(f||h);p?n.resolveWith(l,[w,h,x]):n.rejectWith(l,[x,h,q]);x.statusCode(r);r=e;C&&g.trigger("ajax"+(p?"Success":"Error"),[x,c,p?w:q]);k.fireWith(l,[x,h]);C&&(g.trigger("ajaxComplete",[x,c]),--d.active||d.event.trigger("ajaxStop"))}}"object"==typeof b&&(f=b,b=e);f=f||{};var c=d.ajaxSetup({},f),l=c.context||c,g=l!==c&&(l.nodeType||l instanceof d)?
d(l):d.event,n=d.Deferred(),k=d.Callbacks("once memory"),r=c.statusCode||{},m,w={},q={},t,u,A,v,D,H=0,C,B,x={readyState:0,setRequestHeader:function(b,d){if(!H){var f=b.toLowerCase();b=q[f]=q[f]||b;w[b]=d}return this},getAllResponseHeaders:function(){return 2===H?t:null},getResponseHeader:function(b){var d;if(2===H){if(!u)for(u={};d=Ab.exec(t);)u[d[1].toLowerCase()]=d[2];d=u[b.toLowerCase()]}return d===e?null:d},overrideMimeType:function(b){H||(c.mimeType=b);return this},abort:function(b){b=b||"abort";
A&&A.abort(b);a(0,b);return this}};n.promise(x);x.success=x.done;x.error=x.fail;x.complete=k.add;x.statusCode=function(b){if(b){var d;if(2>H)for(d in b)r[d]=[r[d],b[d]];else d=b[x.status],x.then(d,d)}return this};c.url=((b||c.url)+"").replace(zb,"").replace(Db,fa[1]+"//");c.dataTypes=d.trim(c.dataType||"*").toLowerCase().split(Ga);null==c.crossDomain&&(D=Va.exec(c.url.toLowerCase()),c.crossDomain=!(!D||D[1]==fa[1]&&D[2]==fa[2]&&(D[3]||("http:"===D[1]?80:443))==(fa[3]||("http:"===fa[1]?80:443))));
c.data&&c.processData&&"string"!=typeof c.data&&(c.data=d.param(c.data,c.traditional));z(ua,c,f,x);if(2===H)return!1;C=c.global;c.type=c.type.toUpperCase();c.hasContent=!Cb.test(c.type);C&&0===d.active++&&d.event.trigger("ajaxStart");if(!c.hasContent&&(c.data&&(c.url+=(Ua.test(c.url)?"&":"?")+c.data,delete c.data),m=c.url,!1===c.cache)){D=d.now();var O=c.url.replace(Gb,"$1_="+D);c.url=O+(O===c.url?(Ua.test(c.url)?"&":"?")+"_="+D:"")}(c.data&&c.hasContent&&!1!==c.contentType||f.contentType)&&x.setRequestHeader("Content-Type",
c.contentType);c.ifModified&&(m=m||c.url,d.lastModified[m]&&x.setRequestHeader("If-Modified-Since",d.lastModified[m]),d.etag[m]&&x.setRequestHeader("If-None-Match",d.etag[m]));x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", */*; q=0.01":""):c.accepts["*"]);for(B in c.headers)x.setRequestHeader(B,c.headers[B]);if(c.beforeSend&&(!1===c.beforeSend.call(l,x,c)||2===H))return x.abort(),!1;for(B in{success:1,error:1,complete:1})x[B](c[B]);
if(A=z(Xa,c,f,x)){x.readyState=1;C&&g.trigger("ajaxSend",[x,c]);c.async&&0<c.timeout&&(v=setTimeout(function(){x.abort("timeout")},c.timeout));try{H=1,A.send(w,a)}catch(ba){if(2>H)a(-1,ba);else throw ba;}}else a(-1,"No Transport");return x},param:function(b,f){var a=[],c=function(b,f){f=d.isFunction(f)?f():f;a[a.length]=encodeURIComponent(b)+"="+encodeURIComponent(f)};f===e&&(f=d.ajaxSettings.traditional);if(d.isArray(b)||b._jQuery&&!d.isPlainObject(b))d.each(b,function(){c(this.name,this.value)});
else for(var l in b)k(l,b[l],f,c);return a.join("&").replace(yb,"+")}});d.extend({active:0,lastModified:{},etag:{}});var Ib=d.now(),oa=/(\=)\?(&|$)|\?\?/i;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return d.expando+"_"+Ib++}});d.ajaxPrefilter("json jsonp",function(b,f,c){f="string"==typeof b.data&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if("jsonp"===b.dataTypes[0]||!1!==b.jsonp&&(oa.test(b.url)||f&&oa.test(b.data))){var h,l=b.jsonpCallback=d.isFunction(b.jsonpCallback)?
b.jsonpCallback():b.jsonpCallback,e=a[l],g=b.url,n=b.data,k="$1"+l+"$2";!1!==b.jsonp&&(g=g.replace(oa,k),b.url===g&&(f&&(n=n.replace(oa,k)),b.data===n&&(g+=(/\?/.test(g)?"&":"?")+b.jsonp+"="+l)));b.url=g;b.data=n;a[l]=function(b){h=[b]};c.always(function(){a[l]=e;h&&d.isFunction(e)&&a[l](h[0])});b.converters["script json"]=function(){h||d.error(l+" was not called");return h[0]};b.dataTypes[0]="json";return"script"}});d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
contents:{script:/javascript|ecmascript/},converters:{"text script":function(b){d.globalEval(b);return b}}});d.ajaxPrefilter("script",function(b){b.cache===e&&(b.cache=!1);b.crossDomain&&(b.type="GET",b.global=!1)});d.ajaxTransport("script",function(b){if(b.crossDomain){var d,a=u.head||u.getElementsByTagName("head")[0]||u.documentElement;return{send:function(f,c){d=u.createElement("script");d.async="async";b.scriptCharset&&(d.charset=b.scriptCharset);d.src=b.url;d.onload=d.onreadystatechange=function(b,
f){if(f||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,a&&d.parentNode&&a.removeChild(d),d=e,f||c(200,"success")};a.insertBefore(d,a.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var Aa=a.ActiveXObject?function(){for(var b in ja)ja[b](0,1)}:!1,Jb=0,ja;d.ajaxSettings.xhr=a.ActiveXObject?function(){var b;if(!(b=!this.isLocal&&v()))a:{try{b=new a.ActiveXObject("Microsoft.XMLHTTP");break a}catch(f){}b=void 0}return b}:v;(function(b){d.extend(d.support,{ajax:!!b,
cors:!!b&&"withCredentials"in b})})(d.ajaxSettings.xhr());d.support.ajax&&d.ajaxTransport(function(b){if(!b.crossDomain||d.support.cors){var f;return{send:function(c,l){var h=b.xhr(),g,p;b.username?h.open(b.type,b.url,b.async,b.username,b.password):h.open(b.type,b.url,b.async);if(b.xhrFields)for(p in b.xhrFields)h[p]=b.xhrFields[p];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType);b.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");try{for(p in c)h.setRequestHeader(p,
c[p])}catch(Nb){}h.send(b.hasContent&&b.data||null);f=function(a,c){var p,n,k,r,m;try{if(f&&(c||4===h.readyState))if(f=e,g&&(h.onreadystatechange=d.noop,Aa&&delete ja[g]),c)4!==h.readyState&&h.abort();else{p=h.status;k=h.getAllResponseHeaders();r={};(m=h.responseXML)&&m.documentElement&&(r.xml=m);try{r.text=h.responseText}catch(wa){}try{n=h.statusText}catch(wa){n=""}p||!b.isLocal||b.crossDomain?1223===p&&(p=204):p=r.text?200:404}}catch(wa){c||l(-1,wa)}r&&l(p,n,r,k)};b.async&&4!==h.readyState?(g=++Jb,
Aa&&(ja||(ja={},d(a).unload(Aa)),ja[g]=f),h.onreadystatechange=f):f()},abort:function(){f&&f(0,1)}}}});var ta={},aa,ga,Kb=/^(?:toggle|show|hide)$/,Lb=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,pa,la=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],ma;d.fn.extend({show:function(b,a,h){var f;if(b||0===b)return this.animate(c("show",3),b,a,h);a=0;for(h=this.length;a<h;a++)b=this[a],b.style&&(f=b.style.display,!d._data(b,
"olddisplay")&&"none"===f&&(f=b.style.display=""),(""===f&&"none"===d.css(b,"display")||!d.contains(b.ownerDocument.documentElement,b))&&d._data(b,"olddisplay",q(b.nodeName)));for(a=0;a<h;a++)if(b=this[a],b.style&&(f=b.style.display,""===f||"none"===f))b.style.display=d._data(b,"olddisplay")||"";return this},hide:function(b,a,h){if(b||0===b)return this.animate(c("hide",3),b,a,h);var f;a=0;for(h=this.length;a<h;a++)b=this[a],b.style&&(f=d.css(b,"display"),"none"!==f&&!d._data(b,"olddisplay")&&d._data(b,
"olddisplay",f));for(a=0;a<h;a++)this[a].style&&(this[a].style.display="none");return this},_toggle:d.fn.toggle,toggle:function(b,a,h){var f="boolean"==typeof b;d.isFunction(b)&&d.isFunction(a)?this._toggle.apply(this,arguments):null==b||f?this.each(function(){var a=f?b:d(this).is(":hidden");d(this)[a?"show":"hide"]()}):this.animate(c("toggle",3),b,a,h);return this},fadeTo:function(b,d,a,c){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:d},b,a,c)},animate:function(b,
a,c,l){function f(){!1===h.queue&&d._mark(this);var a=d.extend({},h),f=1===this.nodeType,c=f&&d(this).is(":hidden"),l,e,g,p,n,k,r,m,w;a.animatedProperties={};for(g in b)if(l=d.camelCase(g),g!==l&&(b[l]=b[g],delete b[g]),(e=d.cssHooks[l])&&"expand"in e)for(g in p=e.expand(b[l]),delete b[l],p)g in b||(b[g]=p[g]);for(l in b){e=b[l];d.isArray(e)?(a.animatedProperties[l]=e[1],e=b[l]=e[0]):a.animatedProperties[l]=a.specialEasing&&a.specialEasing[l]||a.easing||"swing";if("hide"===e&&c||"show"===e&&!c)return a.complete.call(this);
f&&("height"===l||"width"===l)&&(a.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],"inline"===d.css(this,"display")&&"none"===d.css(this,"float")&&(d.support.inlineBlockNeedsLayout&&"inline"!==q(this.nodeName)?this.style.zoom=1:this.style.display="inline-block"))}null!=a.overflow&&(this.style.overflow="hidden");for(g in b)f=new d.fx(this,a,g),e=b[g],Kb.test(e)?(w=d._data(this,"toggle"+g)||("toggle"===e?c?"show":"hide":0),w?(d._data(this,"toggle"+g,"show"===w?"hide":"show"),
f[w]()):f[e]()):(n=Lb.exec(e),k=f.cur(),n?(r=parseFloat(n[2]),m=n[3]||(d.cssNumber[g]?"":"px"),"px"!==m&&(d.style(this,g,(r||1)+m),k*=(r||1)/f.cur(),d.style(this,g,k+m)),n[1]&&(r=("-="===n[1]?-1:1)*r+k),f.custom(k,r,m)):f.custom(k,e,""));return!0}var h=d.speed(a,c,l);if(d.isEmptyObject(b))return this.each(h.complete,[!1]);b=d.extend({},b);return!1===h.queue?this.each(f):this.queue(h.queue,f)},stop:function(b,a,c){"string"!=typeof b&&(c=a,a=b,b=e);a&&!1!==b&&this.queue(b||"fx",[]);return this.each(function(){var a,
f=!1,h=d.timers,l=d._data(this);c||d._unmark(!0,this);if(null==b)for(a in l){if(l[a]&&l[a].stop&&a.indexOf(".run")===a.length-4){var e=l[a];d.removeData(this,a,!0);e.stop(c)}}else l[a=b+".run"]&&l[a].stop&&(l=l[a],d.removeData(this,a,!0),l.stop(c));for(a=h.length;a--;)h[a].elem!==this||null!=b&&h[a].queue!==b||(c?h[a](!0):h[a].saveState(),f=!0,h.splice(a,1));c&&f||d.dequeue(this,b)})}});d.each({slideDown:c("show",1),slideUp:c("hide",1),slideToggle:c("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},
fadeToggle:{opacity:"toggle"}},function(b,a){d.fn[b]=function(b,d,f){return this.animate(a,b,d,f)}});d.extend({speed:function(b,a,c){var f=b&&"object"==typeof b?d.extend({},b):{complete:c||!c&&a||d.isFunction(b)&&b,duration:b,easing:c&&a||a&&!d.isFunction(a)&&a};f.duration=d.fx.off?0:"number"==typeof f.duration?f.duration:f.duration in d.fx.speeds?d.fx.speeds[f.duration]:d.fx.speeds._default;if(null==f.queue||!0===f.queue)f.queue="fx";f.old=f.complete;f.complete=function(b){d.isFunction(f.old)&&f.old.call(this);
f.queue?d.dequeue(this,f.queue):!1!==b&&d._unmark(this)};return f},easing:{linear:function(b){return b},swing:function(b){return-Math.cos(b*Math.PI)/2+.5}},timers:[],fx:function(b,d,a){this.options=d;this.elem=b;this.prop=a;d.orig=d.orig||{}}});d.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(d.fx.step[this.prop]||d.fx.step._default)(this)},cur:function(){if(null!=this.elem[this.prop]&&(!this.elem.style||null==this.elem.style[this.prop]))return this.elem[this.prop];
var b,a=d.css(this.elem,this.prop);return isNaN(b=parseFloat(a))?a&&"auto"!==a?a:0:b},custom:function(b,a,c){function f(b){return h.step(b)}var h=this,l=d.fx;this.startTime=ma||n();this.end=a;this.now=this.start=b;this.pos=this.state=0;this.unit=c||this.unit||(d.cssNumber[this.prop]?"":"px");f.queue=this.options.queue;f.elem=this.elem;f.saveState=function(){d._data(h.elem,"fxshow"+h.prop)===e&&(h.options.hide?d._data(h.elem,"fxshow"+h.prop,h.start):h.options.show&&d._data(h.elem,"fxshow"+h.prop,h.end))};
f()&&d.timers.push(f)&&!pa&&(pa=setInterval(l.tick,l.interval))},show:function(){var b=d._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=b||d.style(this.elem,this.prop);this.options.show=!0;b!==e?this.custom(this.cur(),b):this.custom("width"===this.prop||"height"===this.prop?1:0,this.cur());d(this.elem).show()},hide:function(){this.options.orig[this.prop]=d._data(this.elem,"fxshow"+this.prop)||d.style(this.elem,this.prop);this.options.hide=!0;this.custom(this.cur(),0)},step:function(b){var a,
c,l=ma||n(),e=!0,g=this.elem,k=this.options;if(b||l>=k.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();k.animatedProperties[this.prop]=!0;for(a in k.animatedProperties)!0!==k.animatedProperties[a]&&(e=!1);if(e){null!=k.overflow&&!d.support.shrinkWrapBlocks&&d.each(["","X","Y"],function(b,d){g.style["overflow"+d]=k.overflow[b]});k.hide&&d(g).hide();if(k.hide||k.show)for(a in k.animatedProperties)d.style(g,a,k.orig[a]),d.removeData(g,"fxshow"+a,!0),d.removeData(g,"toggle"+
a,!0);(b=k.complete)&&(k.complete=!1,b.call(g))}return!1}Infinity==k.duration?this.now=l:(c=l-this.startTime,this.state=c/k.duration,this.pos=d.easing[k.animatedProperties[this.prop]](this.state,c,0,1,k.duration),this.now=this.start+(this.end-this.start)*this.pos);this.update();return!0}};d.extend(d.fx,{tick:function(){for(var b,a=d.timers,c=0;c<a.length;c++)b=a[c],!b()&&a[c]===b&&a.splice(c--,1);a.length||d.fx.stop()},interval:13,stop:function(){clearInterval(pa);pa=null},speeds:{slow:600,fast:200,
_default:400},step:{opacity:function(b){d.style(b.elem,"opacity",b.now)},_default:function(b){b.elem.style&&null!=b.elem.style[b.prop]?b.elem.style[b.prop]=b.now+b.unit:b.elem[b.prop]=b.now}}});d.each(la.concat.apply([],la),function(b,a){a.indexOf("margin")&&(d.fx.step[a]=function(b){d.style(b.elem,a,Math.max(0,b.now)+b.unit)})});d.expr&&d.expr.filters&&(d.expr.filters.animated=function(b){return d.grep(d.timers,function(d){return b===d.elem}).length});var Ba,Mb=/^t(?:able|d|h)$/i,Ya=/^(?:body|html)$/i;
"getBoundingClientRect"in u.documentElement?Ba=function(b,a,c,l){try{l=b.getBoundingClientRect()}catch(y){}if(!l||!d.contains(c,b))return l?{top:l.top,left:l.left}:{top:0,left:0};b=a.body;a=m(a);return{top:l.top+(a.pageYOffset||d.support.boxModel&&c.scrollTop||b.scrollTop)-(c.clientTop||b.clientTop||0),left:l.left+(a.pageXOffset||d.support.boxModel&&c.scrollLeft||b.scrollLeft)-(c.clientLeft||b.clientLeft||0)}}:Ba=function(b,a,c){var f,h=b.offsetParent,l=a.body;f=(a=a.defaultView)?a.getComputedStyle(b,
null):b.currentStyle;for(var e=b.offsetTop,g=b.offsetLeft;(b=b.parentNode)&&b!==l&&b!==c&&(!d.support.fixedPosition||"fixed"!==f.position);)f=a?a.getComputedStyle(b,null):b.currentStyle,e-=b.scrollTop,g-=b.scrollLeft,b===h&&(e+=b.offsetTop,g+=b.offsetLeft,d.support.doesNotAddBorder&&(!d.support.doesAddBorderForTableAndCells||!Mb.test(b.nodeName))&&(e+=parseFloat(f.borderTopWidth)||0,g+=parseFloat(f.borderLeftWidth)||0),h=b.offsetParent),d.support.subtractsBorderForOverflowNotVisible&&"visible"!==
f.overflow&&(e+=parseFloat(f.borderTopWidth)||0,g+=parseFloat(f.borderLeftWidth)||0);if("relative"===f.position||"static"===f.position)e+=l.offsetTop,g+=l.offsetLeft;d.support.fixedPosition&&"fixed"===f.position&&(e+=Math.max(c.scrollTop,l.scrollTop),g+=Math.max(c.scrollLeft,l.scrollLeft));return{top:e,left:g}};d.fn.offset=function(b){if(arguments.length)return b===e?this:this.each(function(a){d.offset.setOffset(this,b,a)});var a=this[0],c=a&&a.ownerDocument;return c?a===c.body?d.offset.bodyOffset(a):
Ba(a,c,c.documentElement):null};d.offset={bodyOffset:function(b){var a=b.offsetTop,c=b.offsetLeft;d.support.doesNotIncludeMarginInBodyOffset&&(a+=parseFloat(d.css(b,"marginTop"))||0,c+=parseFloat(d.css(b,"marginLeft"))||0);return{top:a,left:c}},setOffset:function(b,a,c){var f=d.css(b,"position");"static"===f&&(b.style.position="relative");var h=d(b),l=h.offset(),e=d.css(b,"top"),g=d.css(b,"left"),n={},k={},r,m;("absolute"===f||"fixed"===f)&&-1<d.inArray("auto",[e,g])?(k=h.position(),r=k.top,m=k.left):
(r=parseFloat(e)||0,m=parseFloat(g)||0);d.isFunction(a)&&(a=a.call(b,c,l));null!=a.top&&(n.top=a.top-l.top+r);null!=a.left&&(n.left=a.left-l.left+m);"using"in a?a.using.call(b,n):h.css(n)}};d.fn.extend({position:function(){if(!this[0])return null;var b=this[0],a=this.offsetParent(),c=this.offset(),l=Ya.test(a[0].nodeName)?{top:0,left:0}:a.offset();c.top-=parseFloat(d.css(b,"marginTop"))||0;c.left-=parseFloat(d.css(b,"marginLeft"))||0;l.top+=parseFloat(d.css(a[0],"borderTopWidth"))||0;l.left+=parseFloat(d.css(a[0],
"borderLeftWidth"))||0;return{top:c.top-l.top,left:c.left-l.left}},offsetParent:function(){return this.map(function(){for(var b=this.offsetParent||u.body;b&&!Ya.test(b.nodeName)&&"static"===d.css(b,"position");)b=b.offsetParent;return b})}});d.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,a){var c=/Y/.test(a);d.fn[b]=function(f){return d.access(this,function(b,f,l){var h=m(b);if(l===e)return h?a in h?h[a]:d.support.boxModel&&h.document.documentElement[f]||h.document.body[f]:b[f];
h?h.scrollTo(c?d(h).scrollLeft():l,c?l:d(h).scrollTop()):b[f]=l},b,f,arguments.length,null)}});d.each({Height:"height",Width:"width"},function(b,a){var c="client"+b,f="scroll"+b,l="offset"+b;d.fn["inner"+b]=function(){var b=this[0];return b?b.style?parseFloat(d.css(b,a,"padding")):this[a]():null};d.fn["outer"+b]=function(b){var c=this[0];return c?c.style?parseFloat(d.css(c,a,b?"margin":"border")):this[a]():null};d.fn[a]=function(b){return d.access(this,function(b,a,h){if(d.isWindow(b))return a=b.document,
b=a.documentElement[c],d.support.boxModel&&b||a.body&&a.body[c]||b;if(9===b.nodeType)return a=b.documentElement,a[c]>=a[f]?a[c]:Math.max(b.body[f],a[f],b.body[l],a[l]);if(h===e)return b=d.css(b,a),a=parseFloat(b),d.isNumeric(a)?a:b;d(b).css(a,h)},a,b,arguments.length,null)}});a._jQuery=a._$=d;"function"==typeof define&&define.amd&&define.amd._jQuery&&define("_jQuery",[],function(){return d})})(window);/*
 loadCSS: load a CSS file asynchronously.
[c]2015 @scottjehl, Filament Group, Inc.
Licensed MIT
 onloadCSS: adds onload support for asynchronous stylesheets loaded with loadCSS.
[c]2014 @zachleat, Filament Group, Inc.
Licensed MIT
*/
(function(a){a.loadCSS=function(e,m,q){var c=a.document.createElement("link"),g;m?g=m:a.document.querySelectorAll?(g=a.document.querySelectorAll("style,link[rel=stylesheet],script"),g=g[g.length-1]):g=a.document.getElementsByTagName("script")[0];c.rel="stylesheet";c.href=e;c.media=q||"all";g.parentNode.insertBefore(c,m?g:g.nextSibling);return c}})(this);
function onloadCSS(a,e){a.onload=function(){a.onload=null;e&&e.call(a)};if("isApplicationInstalled"in navigator&&"onloadcssdefined"in a)a.onloadcssdefined(e)};(function(){var a="msie"==(/(msie) ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[])[1];window.avsr=window.avsr||{};window.avsr.ajax=new function(){_$.support.cors=!0;this.post=function(e,m,q,c){e=e.replace("http:",document.location.protocol);var g="";"?sandbox"==document.location.search.substr(0,8)&&(g="sandbox=true&");if(window.avsr.specifics&&window.avsr.utils.getSpecificsConf().availability&&window.avsr.utils.getSpecificsConf().availability.logParametersInQuery&&(-1==e.indexOf("Monitoring/Log")||
-1!=e.indexOf("Monitoring/LogCall"))){var n={market:m.market?m.market:"null",lang:m.lang?m.lang:"null",ownerId:m.ownerId?m.ownerId:m.webSiteId?m.webSiteId:"null",catalogId:m.catalogId?m.catalogId:"null",action:m.action?m.action:"null",userId:m.userId?m.userId:"null",rel:m.actionName?m.actionName:"null",location:m.location?m.location:"null",trackerLabel:m.trackerLabel?m.trackerLabel:"null",subTrackerLabel:m.subTrackerLabel?m.subTrackerLabel:"null",clientProductId:m.clientProductId?m.clientProductId:
m.clientProductIds?m.clientProductIds:"null"};-1!=e.indexOf("Monitoring/LogCall")&&(n={webSiteId:window.avsr.utils.getSpecificsConf().project.Id,cookieEnabled:navigator.cookieEnabled,counter:m.counter?m.counter:"null",url:document.location.href});g+=_$.param(n)}e=0<e.indexOf("?")?e+"&"+g:e+"?"+g;m.domain=document.location.hostname;if(a&&window.XDomainRequest){var v=new XDomainRequest;v.open("POST",e);v.contentType="application/json";v.timeout=avsr.ajaxTimeout;v.onprogress=function(){};v.onerror=function(){_$.isFunction(c)&&
c(v.responseText,"error")};v.ontimeout=function(){_$.isFunction(c)&&c(v.responseText,"timeout")};v.onload=function(){if(_$.isFunction(q)&&(q(JSON.parse(v.responseText)),avsr.main&&avsr.main.onCallSuccess))avsr.main.onCallSuccess(JSON.parse(v.responseText))};v.send(avsr.main.stringify(m))}else{var k=!1,x=_$.ajax({url:e,xhrFields:{withCredentials:!0},type:"POST",dataType:"json",accept:"application/json",data:m,success:function(a){k=!0;if(_$.isFunction(q)&&(q(a),avsr.main&&avsr.main.onCallSuccess))avsr.main.onCallSuccess(a)},
error:function(a,e,g){k=!0;_$.isFunction(c)&&c(a,e,g)}});e=3E4;avsr.ajaxTimeout&&(e=avsr.ajaxTimeout);window.setTimeout(function(){k||(x.abort(),_$.isFunction(c)&&c(x,"timeout"))},e)}};this.getHtml=function(e,m,q,c){e=e.replace("http:",document.location.protocol);if(a&&window.XDomainRequest){var g=new XDomainRequest;g.open("GET",e);g.timeout=avsr.ajaxTimeout;g.onprogress=function(){};g.onerror=function(){_$.isFunction(q)&&q(g.responseText,"error")};g.ontimeout=function(){_$.isFunction(q)&&q(g.responseText,
"timeout")};g.onload=function(){_$.isFunction(m)&&m(g.responseText)};g.send()}else e={url:e,type:"GET",dataType:"html",success:function(a){"undefined"!==typeof m&&_$.isFunction(m)&&m(a)},error:function(a,c,e){"undefined"!==typeof q&&_$.isFunction(q)&&q(a,c,e)}},!0!==c&&(e.xhrFields={withCredentials:!0}),_jQuery.ajax(e)}}})();window.avsr=window.avsr||{};
window.avsr.browserSupport=window.avsr.browserSupport||function(){var a="google;googlebot;yahooseeker;yahoo! slurp;msnbot;bingbot;baiduspider;ask jeeves/teoma;wkhtmltoimage;yandexbot;applebot;visualrevenue.com;pingbot;exabot;seznam;catchpoint;taginspector;evidon;phantomjs;http://s-books.net/crawl_policy;webissimo;evaliant;forusp;hola server".split(";"),e=!1,m=0,q=function(a){window.avsr&&window.avsr.log&&window.avsr.logException&&window.avsr.logXhr?a():5>=m&&(m++,setTimeout(function(){q(a)},50))};
return{isSupported:function(){for(var c=navigator.userAgent.toLowerCase(),e=0;e<a.length;e++)if(-1!=c.indexOf(a[e]))return q(function(){window.avsr.log("User agent contains global blocklist","error","browserSupport","Blacklisted part : "+a[e])}),!1;if(avsr.specifics.userAgentBlockList&&avsr.specifics.userAgentBlockList.length)for(e=0;e<avsr.specifics.userAgentBlockList.length;e++)if(-1!=c.indexOf(avsr.specifics.userAgentBlockList[e]))return q(function(){window.avsr.log("User agent contains avsr.specifics blocklist",
"error","browserSupport","Blacklisted part : "+avsr.specifics.userAgentBlockList[e])}),!1;return!0},isDisabledFunctionalities:function(){return e},splitQueryString:function(a){var c={};if(!a||""==a)return c;if(""!=a){a=a.split("&");for(var e=0;e<a.length;e++){var m=a[e].split("=");c[m[0]]=m[1]}return c}},isLocalStorageSupported:function(){var a=!1;try{var e=window.localStorage;if(e)try{e.setItem("av-test-localstorage","av-test-localstorage"),e.removeItem("av-test-localstorage"),a=!0}catch(n){q(function(){window.avsr.logException("Exception while trying to write to localStorage",
"isLocalStorageSupported",n)})}}catch(n){q(function(){window.avsr.logException("Exception while checking localStorage support","isLocalStorageSupported",n)})}return a},isPostMessageSupported:function(){var a=!1;try{var g=window.postMessage,a=g?!0:!1;g||q(function(){window.avsr.log("Post message is not available for this browser","error","isPostMessageSupported")})}catch(n){e=!0,q(function(){window.avsr.logException("Exception thrown while checking for postMessage support","isPostMessageSupported",
n)})}return a},isTranslated:function(){return 0<_$("#goog-gt-tt").length}}}();window.avsr=window.avsr||{};
window.avsr.cookies=window.avsr.cookies||function(){function a(a){var c=void 0;if(document.cookie&&""!==document.cookie)for(var e=document.cookie.split(";"),m=0;m<e.length;m++){var k=_$.trim(e[m]);k.substring(0,a.length+1)===a+"="&&(c=decodeURIComponent(k.substring(a.length+1)))}return c}var e=function(a){a=window.avsr.stringHelper.format("{0}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path={1}; domain={2}",a,"/",q());document.cookie=a},m=function(a,e,n){document.cookie=window.avsr.stringHelper.format("{0}={1}; expires={2}; path={3}; domain={4}",
a,n,e.toGMTString(),"/",q())},q=function(){var a,e,n=document.location.hostname.split(".");for(a=n.length-1;0<=a;a--)if(e=n.slice(a).join("."),document.cookie="weird_get_top_level_domain=cookie;domain=."+e+";",-1<document.cookie.indexOf("weird_get_top_level_domain=cookie"))return document.cookie="weird_get_top_level_domain=;domain=."+e+";expires=Thu, 01 Jan 1970 00:00:01 GMT;",e};return{getKey:function(c,e){var g=a(c);_$.isFunction(e)&&e(g)},getKeys:function(a,e){var c=[];if(document.cookie&&""!==
document.cookie)for(var g=document.cookie.split(";"),k=0;k<g.length;k++){var m=_$.trim(g[k]).split("="),q=a.indexOf(m[0].trim());-1<q&&(c[q]=m[1].trim())}for(k=0;k<a.length;k++)c[k]||(c[k]="");_$.isFunction(e)&&e(c.join(","))},getAllValues:function(a){var c={};if(document.cookie&&""!==document.cookie)for(var e=document.cookie.split(";"),m=0;m<e.length;m++){var k=_$.trim(e[m]).split("=");c[k[0].trim()]=(k[1]||"").trim()}_$.isFunction(a)&&a(c)},deleteKey:e,deleteKeys:function(a,g){for(var c=0;c<a.length;c++)e(a[c])},
setKey:m,setKeys:function(a,e,n){for(var c=0;c<a.length;c++)m(a[c],e,n[c])},getStorageType:function(){return"cookies"},getSynchronousCookie:a}}();window.avsr=window.avsr||{};
window.avsr.storageAccess=window.avsr.storageAccess||function(){var a=window.avsr.cookies,e=window.avsr.xdmStorage,m=void 0,q=function(a){var c=new Date;c.setHours(c.getHours()+a);return c},c=function(a){var c=new Date;c.setMinutes(c.getMinutes()+a);return c},g=0,n=function(a){window.avsr&&window.avsr.log&&window.avsr.logException&&window.avsr.logXhr?a():5>=g&&(g++,setTimeout(function(){n(a)},50))},v=function(a){var c=!1,g=new Date((new Date).getTime()+864E5),k=Math.random();try{e.setKey("av-third-party-enabled",
g,k),e.getKey("av-third-party-enabled",function(e){(c=e==k)||n(function(){window.avsr.log("Getted Value different from Setted value","warn","checkThirdPartyAccess")});a(c)})}catch(M){a(!1),n(function(){window.avsr.logException("Error while checking third party access","checkThirdPartyAccess",M)})}},k=null,x=function(c){if(avsr.utils.getSpecificsConf().isCrossDomain)if(!0===m)c(e);else if(!1===m)c(a);else if("false"===a.getSynchronousCookie("av-third-party-enabled"))m=!1,c(a);else{var g=new Date((new Date).getTime()+
864E5);avsr.browserSupport.isPostMessageSupported()?avsr.browserSupport.isLocalStorageSupported()?v(function(n){m=n;a.setKey("av-third-party-enabled",g,n);!0===n?c(e):(window.avsr.log("Third party cookies are not available, fallback to cookie storage.","info","storageAccess.loadIdentityStorage"),c(a))}):(m=!1,a.setKey("av-third-party-enabled",g,m),n(function(){window.avsr.log("Local storage is not supported, fallback to cookie storage","info","storageAccess.loadIdentityStorage")}),c(a)):(m=!1,a.setKey("av-third-party-enabled",
g,m),n(function(){window.avsr.log("Post message is not supported, fallback to cookie storage","info","storageAccess.loadIdentityStorage")}),c(a))}else m=!1,n(function(){window.avsr.log("Specifics forbids crossDomain, fallback to cookie storage.","info","storageAccess.loadIdentityStorage")}),c(a)},z=function(a,c){return window.avsr.stringHelper.format("social-reco-cached-{0}-{1}-{2}",avsr.utils.getSpecificsConf().project.Id,a,c)},A=function(a){return"av-sr-enabled-"+a},t=function(){return"av-enabled-ads"},
C=function(a){return window.avsr.stringHelper.format("social-reco-{0}",a)},I=function(a,c){k.setKeys(["av-mid","av-exp"],c,[a,Date.parse(c)])};return{getCookieTpEnabledValue:function(){return a.getSynchronousCookie("av-third-party-enabled")},getDeferredNotifications:function(){return a.getKey("deferedNotifications")},deleteDeferredNotifications:function(){return a.deleteKey("deferedNotifications")},setDeferredNotifications:function(c){a.setKey("deferedNotifications",c)},setCachedRecommendations:function(c,
e,g){a.setKey(z(c,e),g)},getCachedRecommendations:function(c,e){return a.getKey(z(c,e))},setRecoEnabledFlag:function(a,c,e){k.setKey(A(a),c,e)},getRecoEnabledFlag:function(a,c){return k.getKey(A(a),c)},deleteRecoEnabledFlag:function(a){k.deleteKey(A(a))},getMailData:function(c,e){a.getKey("av-mailid-"+c,e)},deleteMailData:function(c){a.deleteKey("av-mailid-"+c)},getUniqueIdentity:function(a){k.getKeys(["av-mid","av-exp"],function(c){c?(c=c.split(","),1<c.length?(c[0]&&""==c[1]&&(c[1]=parseInt(Date.now()+
5184E6+28512E6*Math.random()),I(c[0],new Date(c[1]))),a(c[0],c[1])):a(null,null)):a(null,null)})},setUniqueIdentity:I,getIdentityKey:C,getIdentity:function(a,c){k.getKey(C(a),c)},setIdentity:function(a,c,e){k.setKey(C(a),c,e)},deleteMachineIdentity:function(a){k.deleteKeys(["av-mid","av-exp","av-ctp"]);window.avsr.cookies.deleteKey("setavid")},getAllValues:function(a){k.getAllValues(a)},deleteOldKeys:function(a){k.deleteKeys(a)},getLastSyncDate:function(a,c){k.getKey(a,c)},updateSyncDate:function(a,
c){k.setKey(a,q(24*c),(new Date).getTime())},getDataStorage:function(){return a},getIdentityStorageType:function(){return k.getStorageType()},initIdentityStorage:function(a){x(function(c){k=c;a()})},checkThirdPartyAccess:v,setThirdPartyEnabledCookie:function(c,e){"false"==e?m=!1:"true"==e&&(m=!0);a.setKey("av-third-party-enabled",c,e)},getAllOwnerDisabled:function(a){k.getAllValues(function(c){var e=[],g;for(g in c)c.hasOwnProperty(g)&&0==g.indexOf("av-sr-enabled")&&0==c[g]&&e.push(g.split("-").reverse()[0]);
a(e)})},getSessionId:function(a,e){try{k.getKey("av-sess-id-"+a,function(g){try{g||(g=avsr.guid.newGuid()),k.setKey("av-sess-id-"+a,c(30),g,!0),e(g)}catch(P){e(null),n(function(){window.avsr.logException("Cannot get sessionId","getSessionId",P)})}},!0)}catch(F){e(null),n(function(){window.avsr.logException("Cannot get sessionId","getSessionId",F)})}},cleanSessionCookies:function(){k.getAllValues(function(a){if(a){for(var c=Object.keys(a),e=[],g=0;g<c.length;g++)-1<c[g].indexOf("av-sess-id")&&0>c[g].indexOf("-exp")&&
a["av-sess-id-exp"]&&parseInt(a["av-sess-id-exp"])<Date.parse(newDate())&&(e.push("av-sess-id"),e.push("av-sess-id-exp"));0<e.length&&k.deleteKeys(e)}})},setAdsEnabledFlag:function(a,c){k.setKey(t(),a,c)},getAdsEnabledFlag:function(a){return k.getKey(t(),a)},deleteAdsEnabledFlag:function(){k.deleteKey(t())},getDisabledDatas:function(a,c){var e=[A(a),t()];return k.getKeys(e,function(a){var e={isEnabledAds:!0,isEnabledReco:!0};null!=a&&void 0!=a&&0<a.length&&(a=a.split(","),2==a.length&&("0"==a[0]&&
(e.isEnabledReco=!1),"0"==a[1]&&(e.isEnabledAds=!1)));c(e)})}}}();var JSLog=function(){var a=function(){var a={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regExp","[object Object]":"object"};return{isPlainObject:function(c){if(!c||"object"!==a[Object.prototype.toString.call(c)]||c.nodeType||c&&"object"===typeof c&&"setInterval"in c||c.constructor&&!Object.prototype.hasOwnProperty.call(c,"constructor")&&!Object.prototype.hasOwnProperty.call(c.constructor.prototype,
"isPrototypeOf"))return!1;for(var e in c);return void 0===e||Object.prototype.hasOwnProperty.call(c,e)},isArray:function(c){return"array"===(null==c?String(c):a[Object.prototype.toString.call(c)]||"object")},isFunction:function(c){return"function"===(null==c?String(c):a[Object.prototype.toString.call(c)]||"object")},extend:function(){var a,c,e,g=arguments[0]||{},n=1,k=arguments.length;for("object"===typeof g||this.isFunction(g)||(g={});n<k;n++)if(null!=(a=arguments[n]))for(c in a)e=a[c],g!==e&&void 0!==
e&&(g[c]=e);return g}}}(),e=this,m=window.console,q=5,c={},g=["error","warn","info","debug","log"],n="assert clear count dir dirxml exception group groupCollapsed groupEnd profile profileEnd table time timeEnd trace".split(" "),v={},k={},x={},z=n.length;k.Logs={};k.SetLevel=function(a){q="number"===typeof a?a:5};k.GetLevel=function(){return q};k.SetFilter=function(a){if(a&&"string"===typeof a){a=a.split(" ");for(var e=a.length;0<=--e;)c[a]=!0;return c}return!1};k.UnsetFilter=function(a){if(a&&"string"===
typeof a){a=a.split(" ");for(var e=a.length;0<=--e;)c[a]&&delete c[a];return c}return!1};for(k.GetFilter=function(){return c};0<=--z;)(function(a){x[a]=function(){0!==q&&m&&m[a]&&m[a].apply(m,arguments)}})(n[z]);for(z=g.length;0<=--z;)(function(a,c){x[c]=function(){var n=Array.prototype.slice.call(arguments);m&&(0<q?q>a:g.length+q<=a)&&(m.firebug||m.firebuglite?m[c].apply(e,n):m[c]?m[c](n):m.log(n))}})(z,g[z]);var A=function(a){a=g.length;for(var n={};0<=--a;)(function(a,t){n[t]=function(){var n=
Array.prototype.slice.call(arguments);k.Logs[this.module].push([t].concat(n));m&&(0<q?q>a:g.length+q<=a)&&!c[this.module]&&(n.unshift("["+this.module+"]"),m.firebug||m.firebuglite?m[t].apply(e,n):m[t]?m[t](n):m.log(n))}})(a,g[a]);return n};k.Register=function(c){if(v[c])return v[c];k.Logs[c]=[];v[c]=a.extend({},x,A());v[c].module=c;return v[c]};k.GetModule=function(a){return v[a]?v[a]:!1};k.Dump=function(a){if(a&&v[a]){var c=k.Logs[a];x.groupCollapsed(a);a=0;for(var g=c.length;a<g;a++)x[c[a].slice(0,
1)].apply(e,c[a].slice(1))}else for(c in x.groupCollapsed("Loggers Dump"),v)v.hasOwnProperty(c)&&k.Dump(c);x.groupEnd()};a.extend(k,x);return k}();(function(){function a(a,c,e,k,q,z,A,t,C,I,D){m(encodeURIComponent(a),c,encodeURIComponent(e),k,encodeURIComponent(q),z,encodeURIComponent(A),encodeURIComponent(t),encodeURIComponent(C),I,encodeURI(D))}function e(a,c){return"Call Took  : "+(a-c)+" ms since last log"}function m(a,c,e,k,m,z,A,t,C,I,D){var g=null;q(a,c,function(){if(I&&0<I.length)for(g="",i=0;i<I.length;i++)g+=encodeURIComponent(I[i]),i<I.length-1&&(g+=",");window.avsr.main.platformReady(function(){var n=window.avsr.auth.getIdentity().mId,
q=window.avsr.utils.getSpecificsConf().project.Id,v=window.avsr.main.currentWindowGuid;q&&n&&(n={message:a,level:c,stackTrace:C,parameters:g,webSiteId:q,pageId:v,machineId:n,ajaxOptions:k,exceptionMessage:A,exceptionName:t,xhrResponseText:m,xhrStatus:z,functionName:e,url:D},avsr.ajax.post(avsr.main.getAbsoluteUrl("/Monitoring/LogApplicationMessage"),n))})})}function q(a,c,e){if(!a||!c||"error"!==c&&"warn"!=c&&"info"!=c&&"debug"!=c||!(avsr.loggingConfiguration&&avsr.loggingConfiguration.enabled&&avsr.loggingConfiguration.sampleRate&&
avsr.cookies))return!1;if("error"==avsr.loggingConfiguration.logLevel){if("error"!=c)return!1}else if("warn"==avsr.loggingConfiguration.logLevel){if("error"!=c&&"warn"!=c)return!1}else if("info"==avsr.loggingConfiguration.logLevel&&"error"!=c&&"warn"!=c&&"info"!=c)return!1;avsr.cookies.getKey("av-logging-sample-rate",function(a){avsr.loggingConfiguration.sampleRate>=a&&e();return!1})}var c=void 0;window.avsr=window.avsr||{};window.avsr.log=function(c,e,m){var g=Array.prototype.slice.call(arguments,
3);a(c,e,m,null,null,null,null,null,null,g,window.location.href)};window.avsr.logException=function(c,e,m){var g=Array.prototype.slice.call(arguments,3);m?a(c,"error",e,null,null,null,m.message,m.name,m.stack,g,window.location.href):a(c,"error",e,null,null,null,null,null,null,g)};window.avsr.logXhr=function(c,e,m,k,q,z){var g=Array.prototype.slice.call(arguments,6);a(c,e,m,q,k.responseText,k.status,JSON.stringify(z),null,null,g,window.location.href)};window.avsr.loggingConfiguration=window.avsr.loggingConfiguration||
{enabled:!1,sampleRate:100,windowOnErrorEnabled:!1,logLevel:"error"};window.avsr.logDatalayerErrors=function(a,c){var e=avsr.auth.completeParams({err:a,type:0,href:document.location.href});avsr.ajax.post(avsr.main.getAbsoluteUrl("/Datalayer/Report"),e);c&&console.log(a)};window.avsr.consoleLog=function(a,n){if(avsr.utils.isDevelopment()){var g=performance.now();c||(c=g);switch(a){case "debug":console.debug(n);console.debug(e(g,c));break;case "info":console.info(n);console.info(e(g,c));break;case "warn":console.warn(n);
console.warn(e(g,c));break;case "error":console.error(n),console.error(e(g,c))}c=g}}})();(function(){var a=function(){return window.avsr&&window.avsr.specifics&&window.avsr.utils.getSpecificsConf().availability?window.avsr.utils.getSpecificsConf().availability.isTimeLoggingEnabled:!0},e=function(){return window.avsr&&window.avsr.specifics&&window.avsr.utils.getSpecificsConf().availability?window.avsr.utils.getSpecificsConf().availability.isCallLoggingEnabled:!0},m=function(){return{getStartTime:function(){return(new Date).getTime()},measureTime:function(e,c){e&&a()&&((new Date).getTime(),
avsr.main.getAbsoluteUrl("/Monitoring/LogTime"))},logTimeOut:function(e){a()&&avsr.main.getAbsoluteUrl("/Monitoring/LogTimeOut")},logClientCall:function(a){e()&&(website=window.avsr.utils.getSpecificsConf().project.Id,avsr.main.getAbsoluteUrl("/Monitoring/LogClientCall"))},logCall:function(a){if(e()){var c=avsr.main.getAbsoluteUrl("/Monitoring/LogCall");avsr.ajax.post(c,{counter:a},null,null)}}}}();window.avsr=window.avsr||{};window.avsr.monitoring=m})();var JSON;JSON||(JSON={});
(function(){function a(a){return 10>a?"0"+a:a}function e(a){c.lastIndex=0;return c.test(a)?'"'+a.replace(c,function(a){var c=v[a];return"string"===typeof c?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function m(a,c){var q,t,v,x,z=g,B,F=c[a];F&&"object"===typeof F&&"function"===typeof F.toJSON&&(F=F.toJSON(a));"function"===typeof k&&(F=k.call(c,a,F));switch(typeof F){case "string":return e(F);case "number":return isFinite(F)?String(F):"null";case "boolean":case "null":return String(F);case "object":if(!F)return"null";
g+=n;B=[];if("[object Array]"===Object.prototype.toString.apply(F)){x=F.length;for(q=0;q<x;q+=1)B[q]=m(q,F)||"null";v=0===B.length?"[]":g?"[\n"+g+B.join(",\n"+g)+"\n"+z+"]":"["+B.join(",")+"]";g=z;return v}if(k&&"object"===typeof k)for(x=k.length,q=0;q<x;q+=1)"string"===typeof k[q]&&(t=k[q],(v=m(t,F))&&B.push(e(t)+(g?": ":":")+v));else for(t in F)Object.prototype.hasOwnProperty.call(F,t)&&(v=m(t,F))&&B.push(e(t)+(g?": ":":")+v);v=0===B.length?"{}":g?"{\n"+g+B.join(",\n"+g)+"\n"+z+"}":"{"+B.join(",")+
"}";g=z;return v}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(c){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+a(this.getUTCMonth()+1)+"-"+a(this.getUTCDate())+"T"+a(this.getUTCHours())+":"+a(this.getUTCMinutes())+":"+a(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var q=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
c=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,g,n,v={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},k;"function"!==typeof JSON.stringify&&(JSON.stringify=function(a,c,e){var q;n=g="";if("number"===typeof e)for(q=0;q<e;q+=1)n+=" ";else"string"===typeof e&&(n=e);if((k=c)&&"function"!==typeof c&&("object"!==typeof c||"number"!==typeof c.length))throw Error("JSON.stringify");return m("",{"":a})});
"function"!==typeof JSON.parse&&(JSON.parse=function(a,c){function e(a,g){var n,k,m=a[g];if(m&&"object"===typeof m)for(n in m)Object.prototype.hasOwnProperty.call(m,n)&&(k=e(m,n),void 0!==k?m[n]=k:delete m[n]);return c.call(a,g,m)}var g;a=String(a);q.lastIndex=0;q.test(a)&&(a=a.replace(q,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return g=eval("("+a+")"),"function"===typeof c?e({"":g},""):g;throw new SyntaxError("JSON.parse");})})();(function(a){function e(){}for(var m="assert count debug dir dirxml error exception group groupCollapsed groupEnd info log markTimeline profile profileEnd time timeEnd trace warn".split(" "),q;q=m.pop();)a[q]=a[q]||e})(function(){try{return console.log(),window.console}catch(a){return window.console={}}}());window.avsr=window.avsr||{};
window.avsr.stringHelper=window.avsr.stringHelper||function(){return{format:function(a){var e=arguments;return a.replace(/{(\d+)}/g,function(a,q){q=parseInt(q)+1;return"undefined"!=typeof e[q]?e[q]:a})},appendObject:function(a,e){var m=a;if("null"==m||-1==m.indexOf("{"))m="";return m+"|"+JSON.stringify(e)},av_hashFnv32a:function(a,e,m){var q,c=void 0===m?2166136261:m;m=0;for(q=a.length;m<q;m++)c^=a.charCodeAt(m),c+=(c<<1)+(c<<4)+(c<<7)+(c<<8)+(c<<24);return e?("0000000"+(c>>>0).toString(16)).substr(-8):
c>>>0},htmlEncode:function(a){return _$("<div/>").text(a).html()},htmlDecode:function(a){return _$("<div/>").html(a).text()},startsWith:function(a,e,m){m=m||0;return a.indexOf(e,m)===m}}}();window.avsr=window.avsr||{};
window.avsr.guid=window.avsr.guid||function(){var a;(function(){var e=window.crypto||window.msCrypto;if(!a&&e&&e.getRandomValues)try{var c=new Uint8Array(16);a=function(){e.getRandomValues(c);return c};a()}catch(n){}if(!a){var g=Array(16);a=function(){for(var a=0,c;16>a;a++)0===(a&3)&&(c=4294967296*Math.random()),g[a]=c>>>((a&3)<<3)&255;return g};"undefined"!==typeof console&&console.warn&&console.warn("[SECURITY] node-uuid: crypto not usable, falling back to insecure Math.random()")}})();for(var e=
[],m=0;256>m;m++)e[m]=(m+256).toString(16).substr(1);return{newGuid:function(){var m=a();m[6]=m[6]&15|64;m[8]=m[8]&63|128;var c=0;return e[m[c++]]+e[m[c++]]+e[m[c++]]+e[m[c++]]+"-"+e[m[c++]]+e[m[c++]]+"-"+e[m[c++]]+e[m[c++]]+"-"+e[m[c++]]+e[m[c++]]+"-"+e[m[c++]]+e[m[c++]]+e[m[c++]]+e[m[c++]]+e[m[c++]]+e[m[c++]]}}}();window.avsr=window.avsr||{};window.avsr.thirdPartyPartners=window.avsr.thirdPartyPartners||function(){return{mics:1,appnexus:2,google:3,rubicon:4,smartad:5,freewheel:6,bidswitch:7}}();
window.avsr.thirdParties=window.avsr.thirdParties||function(){var a=function(a,c,e,n){var g=avsr.main.getStorageAccess();g.getLastSyncDate(a,function(k){if(!0===n||!k||(new Date).getTime()-parseInt(k,10)>864E5*c)e(),g.updateSyncDate(a,c)})},e=function(a){_$("body").append("<img width='1' height='1' src='"+a+"'>")},m=function(a){window.__cmp?window.__cmp("getConsentData",null,a):a({})};return{initialize:function(q){var c=avsr.utils.getSpecificsConf();void 0===c.authorizedCookiePartner&&(c.authorizedCookiePartner=
[]);if(!0===q||!1!==c.isThirdPartySyncEnabled){var g=avsr.context.currentMember.mId;c.authorizedCookiePartner.includes(window.avsr.thirdPartyPartners.mics)&&a("av-tp-mics",7,function(){e("https://cookie-matching.mediarithmics.com/v1/get_user_agent_id?dom_token=antv17")},q);c.authorizedCookiePartner.includes(window.avsr.thirdPartyPartners.appnexus)&&a("av-tp-appnexus",7,function(){var a=avsr.main.getAbsoluteUrl(avsr.stringHelper.format("/ThirdParty/SyncId?oId={0}&mId={1}&tp=1&tpId=$UID",avsr.utils.getSpecificsConf().project.Id,
g),!0);"https:"==window.location.protocol?e(avsr.stringHelper.format("//secure.adnxs.com/getuid?{0}",a)):e(avsr.stringHelper.format("//ib.adnxs.com/getuid?{0}",a))},q);c.authorizedCookiePartner.includes(window.avsr.thirdPartyPartners.google)&&a("av-tp-google",7,function(){e(avsr.stringHelper.format("//cm.g.doubleclick.net/pixel?google_nid=antvoice_dmp&google_cm&oId={0}&mId={1}",avsr.utils.getSpecificsConf().project.Id,g))},q);c.authorizedCookiePartner.includes(window.avsr.thirdPartyPartners.rubicon)&&
a("av-tp-rubicon",7,function(){m(function(a){a=_$.isEmptyObject(a)?avsr.stringHelper.format("https://token.rubiconproject.com/token?pid=2655&puid={0}&p=1",g):avsr.stringHelper.format("https://token.rubiconproject.com/token?pid=2655&puid={0}&p=1&gdpr={1}&gdpr_consent={2}",g,a.gdprApplies?1:0,a.consentData);e(a)})},q);c.authorizedCookiePartner.includes(window.avsr.thirdPartyPartners.smartad)&&a("av-tp-smartad",7,function(){url=encodeURIComponent(avsr.main.getAbsoluteUrl(avsr.stringHelper.format("/ThirdParty/SyncId?oId={0}&mId={1}&tp=5&tpId=",
avsr.utils.getSpecificsConf().project.Id,g)),!0);e(avsr.stringHelper.format("//sync.smartadserver.com/getuid?url={0}[sas_uid]",url))},q);c.authorizedCookiePartner.includes(window.avsr.thirdPartyPartners.freewheel)&&a("av-tp-freewheel",7,function(){e(avsr.stringHelper.format("https://ads.stickyadstv.com/data-registering?dataProviderId=1137&redirectId=1569"))},q)}},callPixel:e}}();window.avsr=window.avsr||{};
window.avsr.utils=window.avsr.utils||function(){function a(a,c,g){return function(){var n="function"===typeof a,q=n?a:c?e:m;(n||g)&&window.avsr.consoleLog("info","Calling "+(n&&a.name?a.name:g));return q.apply(this,arguments)}}var e=function(){return!0},m=function(){};return{createHooks:function(e,c,g,n,m){return function(){1!=a(avsr.specifics[c],!0,c).apply(this,arguments)?avsr.log("Call has benn cancelled cancelled by "+c,"info","HooksManager"):(Array.prototype.push.call(arguments,a(avsr.specifics[g],
!0,g),a(avsr.specifics[n],!0,n),a(avsr.specifics[m],!1,m)),e.apply(this,arguments))}},callFunction:function(e,c){var g=e,n=c;Array.prototype.splice.call(arguments,0,2);return a(g,n).apply(this,arguments)},callInternal:function(e,c,g){var n=e,m=c,k=g;Array.prototype.splice.call(arguments,0,3);return a(n,m,k).apply(this,arguments)},getSpecificsConf:function(){var a;void 0!==avsr.specifics.clientSpecConfiguration?a=avsr.specifics.clientSpecConfiguration:(a={availability:avsr.specifics.availability,templateKey:avsr.specifics.templateKey,
isCrossDomain:avsr.specifics.isCrossDomain,project:avsr.specifics.project,configurations:avsr.specifics.configurations},avsr.specifics.configurations&&void 0!==avsr.specifics.configurations.trackByRedirect&&(a.tracking={useRedirect:avsr.specifics.configurations.trackByRedirect,parameters:avsr.specifics.configurations.trackingParameters}));return a},isDevelopment:function(){return 1<avsr.main.contentUrl.indexOf("social-reco")}}}();window.avsr=window.avsr||{};window.avsr.sn=window.avsr.sn||{};
window.avsr.sn.facebook=window.avsr.sn.facebook||function(){return{initialize:function(a,e,m,q){},deletePublish:function(a){var e=a.callback?a.callback:null;FB.api(a.postId?a.postId:null,"delete",function(a){e&&e(a)})},publish:function(a){var e=a.action,m=a.namespace,q=a.object,c=a.url;if("watch"==e||"read"==e)m=null;var g=a.callback?a.callback:null,n="/me/"+(null!=m&&""!=m?m+":"+a.ogAction:a.ogAction);"watch"==a.ogAction?(n="/me/video.watches",FB.api(n,"post",{video:c},function(a){null!=g&&(avsr.log("OG publish "+
e+" "+c,"info"),g(a))})):"read"==a.ogAction?FB.api(n,"post",{article:c},function(a){null!=g&&(avsr.log("OG publish "+e+" "+c,"info"),g(a))}):"favorite"==a.ogAction?FB.api(n,"post",{other:c},function(a){null!=g&&(avsr.log("OG publish "+e+" "+c,"info"),g(a))}):(a={},a[q]=c,FB.api(n,"post",a,function(a){avsr.log("OG publish "+n+" "+c,"info");g&&g(a)}))},login:function(a,e){},logout:function(a){},checkCurrentMember:function(a,e){return!0},subscribeToStatusChange:function(){},loadProfile:function(a){}}}();(function(a){avsr.scrollMonitor=a(_jQuery)})(function(a){function e(){g.viewportTop=n.scrollTop();g.viewportBottom=g.viewportTop+g.viewportHeight;g.documentHeight=v.height();if(g.documentHeight!==g.previousDocumentHeight){for(t=k.length;t--;)k[t].recalculateLocation();g.previousDocumentHeight=g.documentHeight}}function m(){g.viewportHeight=window.innerHeight||document.documentElement.clientHeight;e();q()}function q(){for(I=k.length;I--;)k[I].update();for(I=k.length;I--;)k[I].triggerCallbacks()}function c(c,
e){function n(a){if(0!==a.length)for(v=a.length;v--;)Q=a[v],Q.callback.call(k,A),Q.isOne&&a.splice(v,1)}var k=this;this.watchItem=c;this.offsets=e?e===+e?{top:e,bottom:e}:a.extend({},z,e):z;this.callbacks={};for(var m=0,q=x.length;m<q;m++)k.callbacks[x[m]]=[];this.locked=!1;var l,w,t,u,v,Q;this.triggerCallbacks=function(){this.isInViewport&&!l&&n(this.callbacks.enterViewport);this.isFullyInViewport&&!w&&n(this.callbacks.fullyEnterViewport);this.isAboveViewport!==t&&this.isBelowViewport!==u&&(n(this.callbacks.visibilityChange),
w||this.isFullyInViewport||(n(this.callbacks.fullyEnterViewport),n(this.callbacks.partiallyExitViewport)),l||this.isInViewport||(n(this.callbacks.enterViewport),n(this.callbacks.exitViewport)));!this.isFullyInViewport&&w&&n(this.callbacks.partiallyExitViewport);!this.isInViewport&&l&&n(this.callbacks.exitViewport);this.isInViewport!==l&&n(this.callbacks.visibilityChange);switch(!0){case l!==this.isInViewport:case w!==this.isFullyInViewport:case t!==this.isAboveViewport:case u!==this.isBelowViewport:n(this.callbacks.stateChange)}l=
this.isInViewport;w=this.isFullyInViewport;t=this.isAboveViewport;u=this.isBelowViewport};this.recalculateLocation=function(){if(!this.locked){var d=this.top,c=this.bottom;if(this.watchItem.nodeName){var e=this.watchItem.style.display;"none"===e&&(this.watchItem.style.display="");var l=a(this.watchItem).offset();this.top=l.top;this.bottom=l.top+this.watchItem.offsetHeight;"none"===e&&(this.watchItem.style.display=e)}else this.watchItem===+this.watchItem?this.top=0<this.watchItem?this.bottom=this.watchItem:
this.bottom=g.documentHeight-this.watchItem:(this.top=this.watchItem.top,this.bottom=this.watchItem.bottom);this.top-=this.offsets.top;this.bottom+=this.offsets.bottom;this.height=this.bottom-this.top;void 0===d&&void 0===c||this.top===d&&this.bottom===c||n(this.callbacks.locationChange)}};this.recalculateLocation();this.update();l=this.isInViewport;w=this.isFullyInViewport;t=this.isAboveViewport;u=this.isBelowViewport}var g={},n=a(window),v=a(document),k=[],x="visibilityChange enterViewport fullyEnterViewport exitViewport partiallyExitViewport locationChange stateChange".split(" "),
z={top:0,bottom:0};g.viewportTop;g.viewportBottom;g.documentHeight;g.viewportHeight=window.innerHeight||document.documentElement.clientHeight;g.previousDocumentHeight;var A,t,C,I;c.prototype={on:function(a,c,e){switch(!0){case "visibilityChange"===a&&!this.isInViewport&&this.isAboveViewport:case "enterViewport"===a&&this.isInViewport:case "fullyEnterViewport"===a&&this.isFullyInViewport:case "exitViewport"===a&&this.isAboveViewport&&!this.isInViewport:case "partiallyExitViewport"===a&&this.isAboveViewport:if(c.call(this),
e)return}if(this.callbacks[a])this.callbacks[a].push({callback:c,isOne:e});else throw Error("Tried to add a scroll monitor listener of type "+a+". Your options are: "+x.join(", "));},off:function(a,c){if(this.callbacks[a])for(var e=0,g;g=this.callbacks[a][e];e++){if(g.callback===c){this.callbacks[a].splice(e,1);break}}else throw Error("Tried to remove a scroll monitor listener of type "+a+". Your options are: "+x.join(", "));},one:function(a,c){this.on(a,c,!0)},recalculateSize:function(){this.height=
this.watchItem.offsetHeight+this.offsets.top+this.offsets.bottom;this.bottom=this.top+this.height},update:function(){this.isAboveViewport=this.top<g.viewportTop;this.isBelowViewport=this.bottom>g.viewportBottom;this.isInViewport=this.top<=g.viewportBottom&&this.bottom>=g.viewportTop;this.isFullyInViewport=this.top>=g.viewportTop&&this.bottom<=g.viewportBottom||this.isAboveViewport&&this.isBelowViewport},destroy:function(){var a=k.indexOf(this);k.splice(a,1);for(var a=0,c=x.length;a<c;a++)this.callbacks[x[a]].length=
0},lock:function(){this.locked=!0},unlock:function(){this.locked=!1}};for(var D=function(a){return function(c,e){this.on.call(this,a,c,e)}},B=0,F=x.length;B<F;B++){var P=x[B];c.prototype[P]=D(P)}try{e()}catch(M){a(e)}n.on("scroll",function(a){A=a;e();q()});n.on("resize",function(){clearTimeout(C);C=setTimeout(m,100)});g.beget=g.create=function(e,g){"string"===typeof e&&(e=a(e)[0]);e instanceof a&&(e=e[0]);var n=new c(e,g);k.push(n);n.update();return n};g.update=function(){A=null;e();q()};g.recalculateLocations=
function(){g.previousDocumentHeight=0;g.update()};return g});var popUpTimer;function popUp(a,e,m){popUpTimer=setTimeout(function(){popUpTwo(a,e,m)},5E3);window.open(e,a,m)}function popUpDone(){clearTimeout(popUpTimer);document.getElementById("popUpStatus").innerHTML="Pop-up worked"}
function popUpTwo(a,e,m){clearTimeout(popUpTimer);document.getElementById("popUpStatus").innerHTML="Pop-up didn't work. Time to create an absolute positioned iframe.";var q=document.createElement("iframe");q.src=e;q.name=a;q.style.position="absolute";a=m.split(",");for(i=0;i<a.length;i++)switch(e=a[i].split("="),e[0]){case "width":q.width=e[1];break;case "height":q.height=e[1];break;case "left":q.style.left=e[1]+"px";break;case "top":q.style.top=e[1]+"px"}document.getElementById("iframeArea").appendChild(q)}
function popUpFailed(){alert('Please disable your pop-up blocker and click the "Open Pop-up" button again.')};(function(a){function e(c,e,g,l){l={data:l||(e?e.data:{}),_wrap:e?e._wrap:null,tmpl:null,parent:e||null,nodes:[],calls:k,nest:x,wrap:z,html:A,update:t};c&&a.extend(l,c,{nodes:[],parent:e});g&&(l.tmpl=g,l._ctnt=l._ctnt||l.tmpl(a,l),l.key=++M,(U.length?B:D)[M]=l);return l}function m(c,e,g){var l;g=g?a.map(g,function(a){return"string"===typeof a?c.key?a.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,'$1 _tmplitem="'+c.key+'" $2'):a:m(a,c,a._ctnt)}):c;if(e)return g;g=g.join("");g.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,
function(c,e,g,n){l=a(g).get();v(l);e&&(l=q(e).concat(l));n&&(l=l.concat(q(n)))});return l?l:q(g)}function q(c){var e=document.createElement("div");e.innerHTML=c;return a.makeArray(e.childNodes)}function c(c){return new Function("_jQuery","_$item","var _$=_jQuery,call,_=[],_$data=_$item.data;with(_$data){_.push('"+a.trim(c).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,
function(c,e,l,g,k,m,q){c=a.tmpl.tag[l];if(!c)throw"Template command not found: "+l;l=c._default||[];m&&!/\w$/.test(k)&&(k+=m,m="");k?(k=n(k),q=q?","+n(q)+")":m?")":"",q=m?-1<k.indexOf(".")?k+m:"("+k+").call(_$item"+q:k,m=m?q:"(typeof("+k+")==='function'?("+k+").call(_$item):("+k+"))"):m=q=l.$1||"null";g=n(g);return"');"+c[e?"close":"open"].split("_$notnull_1").join(k?"typeof("+k+")!=='undefined' && ("+k+")!=null":"true").split("$1a").join(m).split("_$1").join(q).split("$2").join(g?g.replace(/\s*([^\(]+)\s*(\((.*?)\))?/g,
function(a,d,c,e){return(e=e?","+e+")":c?")":"")?"("+d+").call(_$item"+e:a}):l.$2||"")+"_.push('"})+"');}return _;")}function g(c,e){c._wrap=m(c,!0,a.isArray(e)?e:[I.test(e)?e:a(e).html()]).join("")}function n(a){return a?a.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function v(c){function g(d){function c(a){a+=n;k=m[a]=m[a]||e(k,D[k.parent.key+n]||k.parent,null,!0)}var l,g=d,k,w;if(w=d.getAttribute("_tmplitem")){for(;g.parentNode&&1===(g=g.parentNode).nodeType&&!(l=g.getAttribute("_tmplitem")););
l!==w&&(g=g.parentNode?11===g.nodeType?0:g.getAttribute("_tmplitem")||0:0,(k=D[w])||(k=B[w],k=e(k,D[g]||B[g],null,!0),k.key=++M,D[M]=k),R&&c(w));d.removeAttribute("_tmplitem")}else R&&(k=a.data(d,"tmplItem"))&&(c(k.key),D[k.key]=k,g=(g=a.data(d.parentNode,"tmplItem"))?g.key:0);if(k){for(l=k;l&&l.key!=g;)l.nodes.push(d),l=l.parent;delete k._ctnt;delete k._wrap;a.data(d,"tmplItem",k)}}var n="_"+R,l,k,m={},q,t,A;q=0;for(t=c.length;q<t;q++)if(1===(l=c[q]).nodeType){k=l.getElementsByTagName("*");for(A=
k.length-1;0<=A;A--)g(k[A]);g(l)}}function k(a,c,e,l){if(!a)return U.pop();U.push({_:a,tmpl:c,item:this,data:e,options:l})}function x(c,e,g){return a.tmpl(a.template(c),e,g,this)}function z(c,e){var g=c.options||{};g.wrapped=e;return a.tmpl(a.template(c.tmpl),c.data,g,c.item)}function A(c,e){var g=this._wrap;return a.map(a(a.isArray(g)?g.join(""):g).filter(c||"*"),function(a){if(e)a=a.innerText||a.textContent;else{var c;(c=a.outerHTML)||(c=document.createElement("div"),c.appendChild(a.cloneNode(!0)),
c=c.innerHTML);a=c}return a})}function t(){var c=this.nodes;a.tmpl(null,null,null,this).insertBefore(c[0]);a(c).remove()}var C=a.fn.domManip,I=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,D={},B={},F,P={key:0,data:{}},M=0,R=0,U=[];a.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(c,e){a.fn[c]=function(g){var l=[];g=a(g);var k,n,m;k=1===this.length&&this[0].parentNode;F=D||{};if(k&&11===k.nodeType&&1===k.childNodes.length&&1===g.length)g[e](this[0]),
l=this;else{n=0;for(m=g.length;n<m;n++)R=n,k=(0<n?this.clone(!0):this).get(),a.fn[e].apply(a(g[n]),k),l=l.concat(k);R=0;l=this.pushStack(l,c,g.selector)}g=F;F=null;a.tmpl.complete(g);return l}});a.fn.extend({tmpl:function(c,e,g){return a.tmpl(this[0],c,e,g)},tmplItem:function(){return a.tmplItem(this[0])},template:function(c){return a.template(c,this[0])},domManip:function(c,e,g){if(c[0]&&c[0].nodeType){for(var l=a.makeArray(arguments),k=c.length,n=0,m;n<k&&!(m=a.data(c[n++],"tmplItem")););1<k&&(l[0]=
[a.makeArray(c)]);m&&R&&(l[2]=function(c){a.tmpl.afterManip(this,c,g)});C.apply(this,l)}else C.apply(this,arguments);R=0;!F&&a.tmpl.complete(D);return this}});a.extend({tmpl:function(c,k,n,l){var w=!l;if(w)l=P,c=a.template[c]||a.template(null,c),B={};else if(!c)return c=l.tmpl,D[l.key]=l,l.nodes=[],l.wrapped&&g(l,l.wrapped),a(m(l,null,l.tmpl(a,l)));if(!c)return[];"function"===typeof k&&(k=k.call(l||{}));n&&n.wrapped&&g(n,n.wrapped);k=a.isArray(k)?a.map(k,function(a){return a?e(n,l,c,a):null}):[e(n,
l,c,k)];return w?a(m(l,null,k)):k},tmplItem:function(c){var e;for(c instanceof a&&(c=c[0]);c&&1===c.nodeType&&!(e=a.data(c,"tmplItem"))&&(c=c.parentNode););return e||P},template:function(e,g){return g?("string"===typeof g?g=c(g):g instanceof a&&(g=g[0]||{}),g.nodeType&&(g=a.data(g,"tmpl")||a.data(g,"tmpl",c(g.innerHTML))),"string"===typeof e?a.template[e]=g:g):e?"string"!==typeof e?a.template(null,e):a.template[e]||a.template(null,I.test(e)?e:a(e)):null},encode:function(a){return(""+a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}});
a.extend(a.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if(_$notnull_1){_=_.concat(_$item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"_$item.calls(_,$1,$2);_=[];",close:"call=_$item.calls();_=call._.concat(_$item.wrap(call,_));"},each:{_default:{$2:"_$index, _$value"},open:"if(_$notnull_1){_$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if((_$notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if((_$notnull_1) && $1a){"},html:{open:"if(_$notnull_1){_.push($1a);}"},
"=":{_default:{$1:"_$data"},open:"if(_$notnull_1){_.push(_$.encode($1a));}"},"!":{open:""}},complete:function(){D={}},afterManip:function(c,e,g){var l=11===e.nodeType?a.makeArray(e.childNodes):1===e.nodeType?[e]:[];g.call(c,e);v(l);R++}})})(_jQuery);window.avsr=window.avsr||{};
window.avsr.activities=window.avsr.activities||function(){function a(a,e,n,m,k){var c=function(c){try{"success"!=c.status&&(avsr.log('Success function status != "success" : '+c.status,"error",a,"Params : "+JSON.stringify(n),"Response : "+JSON.stringify(c)),"undefined"!==typeof failCallback&&_$.isFunction(failCallback)&&failCallback()),"undefined"!==typeof m&&_$.isFunction(m)&&m(c)}catch(t){avsr.logException("Error in success function call",a,t,"Params : "+JSON.stringify(n),"Response : "+JSON.stringify(c)),
"undefined"!==typeof n.exceptionCallback&&_$.isFunction(n.exceptionCallback)&&n.exceptionCallback(t)}},g=function(c,e,g){try{avsr.logXhr("Failure function call","error",a,c,e,g,"Params : "+JSON.stringify(n),"xhr : "+JSON.stringify(c)),"timeout"===e?"undefined"!==typeof n.callback&&_$.isFunction(n.callback)&&n.callback({status:"error",errorCode:508}):"undefined"!==typeof n.callback&&_$.isFunction(n.callback)&&(c.responseText?n.callback({status:"error",errorCode:JSON.parse(c.responseText).errorCode}):
n.callback({status:"error"}))}catch(I){avsr.logException("Error in failure function call",a,I,"Params : "+JSON.stringify(n),"xhr : "+JSON.stringify(c)),"undefined"!==typeof n.exceptionCallback&&_$.isFunction(n.exceptionCallback)&&n.exceptionCallback(I)}};k=avsr.utils.getSpecificsConf().project.Id;avsr.storageAccess.getSessionId(k,function(a){n.sessId=a;avsr.ajax.post(e,n,c,g)})}var e=function(a,e){var c=[],g=a.actionName||""==a.actionName?a.actionName:null;if(a.clientProductId){var k=a.clientProductId;
k&&!k.push&&(k+="","[object Object]"!=k&&(k.trim&&(k=k.trim()),0==k.indexOf("[")&&(k=k.substr(1,k.length-2)),a.clientProductId=k.split(",")));for(k=0;k<a.clientProductId.length;k++)c.push({id:a.clientProductId[k],currency:a.currency,market:avsr.context.market,lang:avsr.context.lang}),a.price&&a.price.length&&a.price.length==a.clientProductId.length?c[k].unit_sale_price=a.price[k]:a.price&&1==a.clientProductId.length&&(c[k].unit_sale_price=a.price),a.url&&a.url.push&&a.url.length==a.clientProductId.length?
c[k].url=a.url[k]:a.url&&1==a.clientProductId.length&&(c[k].url=a.url),c[k].isComplete=!1,c[k].action=g}else if(a.products&&a.products.length)for(k=0;k<a.products.length;k++){var m={id:a.products[k].id,catalog:a.products[k].catalog,url:a.products[k].url,unit_sale_price:a.products[k].price,currency:a.products[k].currency,action:a.products[k].action||g};m.market||(m.market=avsr.context.market);m.lang||(m.lang=avsr.context.lang);c.push(m)}else if(e){e.product&&e.product.name&&(e.product.name=avsr.stringHelper.htmlDecode(e.product.name),
e.product.description=avsr.stringHelper.htmlDecode(e.product.description));if(e.tags)for(k=0;k<e.tags.length;k++)e.tags[k].name&&(e.tags[k].name=avsr.stringHelper.htmlDecode(e.tags[k].name));if(e.basket&&null!=e.basket&&e.basket.line_items)for(m=e.basket.line_items,k=0;k<m.length;k++)for(var q=0;q<m[k].quantity;q++)c.push(m[k].product);else c=[e.product];for(k=0;k<c.length;k++)c[k].action=g,e.tags&&(c[k].tags=e.tags),c[k].isComplete=e.nodeComplete,c[k].market||(c[k].market=avsr.context.market),c[k].lang||
(c[k].lang=avsr.context.lang)}return c},m=function(a){if(a&&0<a.length){var c={};a.forEach(function(a){a.cUrlView&&!c[a.cUrlView]&&(avsr.thirdParties.callPixel(a.cUrlView),c[a.cUrlView]=!0)})}},q=function(a){if(a&&0<a.length){var c={};a.forEach(function(a){c[a]||(avsr.thirdParties.callPixel(a),c[a]=!0)})}};return{notifyClick:function(c,e){var g=c.callback?c.callback:null,m=c.exceptionCallback?c.exceptionCallback:null,k={cpId:c.clientProductId?c.clientProductId:null,recoId:c.recoId,recoGrpId:c.recoGrpId,
tracker:c.tracker,subTracker:c.subTracker,date:c.date,sId:c.supportId,recommender:c.recommender,loc:c.location};c.recipeId&&(k.r=c.recipeId);c.catalogId&&(k.cId=c.catalogId);c.campaignId&&(k.caId=c.campaignId);a("notifyClick",avsr.main.getAbsoluteUrl("/Activity/NotifyNodeClick",e),avsr.auth.completeParams(k),g,m)},notifyAction:avsr.utils.createHooks(function(c,g,n,m){if(avsr.browserSupport.isTranslated())avsr.log("Cannot notify action when a page is translated");else{var k=null;window.antvoice_variable&&
!c.clientProductId&&(k=_$.extend({},window.antvoice_variable),k.nodeComplete=!!avsr.datalayerStatus&&avsr.datalayerStatus.nodeStatus!=_sr.consts.NODE_INCOMPLETE);var q=c.actionName||""==c.actionName?c.actionName:null,z=c.callback?c.callback:null,A=c.exceptionCallback?c.exceptionCallback:null,t=c.webSiteId?c.webSiteId:avsr.utils.getSpecificsConf().project.Id,v=c.transactionId;k&&k.basket&&k.basket.line_items&&k.basket.transaction_id&&""!=k.basket.transaction_id&&(v=k.basket.transaction_id);var I={oId:t,
products:encodeURIComponent(avsr.main.stringify(e(c,k))),action:q,date:c.date,trId:v,multi:!!c.products,group:c.group};c=function(a){n(I,k,a)&&("undefined"!==typeof z&&_$.isFunction(z)&&z(a),m(I,k))};!0===g(I,k)&&a("notifyAction",avsr.main.getAbsoluteUrl("/Activity/NotifyNodesAction"),avsr.auth.completeParams(I),c,A)}},"startNotifyAction","preNotifyAction","postNotifyAction","endNotifyAction"),notifyTagAction:avsr.utils.createHooks(function(c,e,n,m){if(window.avsr.browserSupport.isTranslated())avsr.log("Cannot notify action when a page is translated");
else{var g=null;window.antvoice_variable&&(g=_$.extend({},window.antvoice_variable),g.nodeComplete=avsr.datalayerStatus.nodeStatus!=_sr.consts.NODE_INCOMPLETE);var q=c.actionName||""==c.actionName?c.actionName:null,z=c.callback?c.callback:null,A=c.exceptionCallback?c.exceptionCallback:null,t=[];if(c.tagLabel)t=[{name:avsr.stringHelper.htmlDecode(c.tagLabel),type:c.tagType,action:q}];else if(c.tags)for(q=0;q<c.tags.length;q++)t.push(c.tags[q]);else{for(q=0;q<g.tags.length;q++)g.tags[q].name&&(g.tags[q].name=
avsr.stringHelper.htmlDecode(g.tags[q].name));t=g.tags}var v={date:c.date,lang:avsr.context.lang,market:avsr.context.market,dlTags:encodeURIComponent(avsr.main.stringify(t))};c=function(a){n(v,g,a)&&("undefined"!==typeof z&&_$.isFunction(z)&&z(a),m(v,g))};!0===e(v,g)&&a("notifyTagAction",avsr.main.getAbsoluteUrl("/Activity/NotifyNodeTagsActions"),avsr.auth.completeParams(v),c,A)}},"startNotifyTagAction","preNotifyTagAction","postNotifyTagAction","endNotifyTagAction"),notifyProductDisplayed:function(a){if(avsr.context.currentMember){var c=
{p:avsr.main.stringify(a.products),recoId:a.recoId,tracker:a.tracker,subTracker:a.subTracker,recommender:a.recommender,loc:a.location,recoGrpId:a.recoGrpId,sId:a.supportId};a.recipeId&&(c.r=a.recipeId);var e=avsr.monitoring.getStartTime();avsr.ajax.post(avsr.main.getAbsoluteUrl("/Social/NotifyNodesDisplayed",a.isUseAvadsUrl),avsr.auth.completeParams(c),function(c){avsr.monitoring.measureTime(e,"NotifyProductDisplayed");"success"!=c.status&&(avsr.log('Success function status != "success" : '+c.status,
"error","notifyProductDisplayed","Params : "+JSON.stringify(a),"Response : "+JSON.stringify(c)),"undefined"!==typeof failCallback&&_$.isFunction(failCallback)&&failCallback())},function(c,e,g){var k=JSON.stringify(avsr.auth.completeParams(a));avsr.logXhr("Failure function call","error","notifyProductDisplayed",c,e,g,"Params : "+k,"xhr : "+JSON.stringify(c));"timeout"===e&&avsr.monitoring.logTimeOut("NotifyProductDisplayed")});m(a.products)}},notifyWidgetDisplayed:function(a){if(avsr.context.currentMember){var c=
{recoId:a.recoId,tracker:a.tracker,subTracker:a.subTracker,recommender:a.recommender,loc:a.location,cIds:JSON.stringify(a.cIds),caIds:JSON.stringify(a.caIds),recoGrpId:a.recoGrpId,sId:a.supportId};a.recipeId&&(c.r=a.recipeId);var e=avsr.monitoring.getStartTime();avsr.ajax.post(avsr.main.getAbsoluteUrl("/Social/NotifyRecoDisplayed",a.isUseAvadsUrl),avsr.auth.completeParams(c),function(c){avsr.monitoring.measureTime(e,"NotifyWidgetDisplayed");"success"!=c.status&&(avsr.log('Success function status != "success" : '+
c.status,"error","notifyWidgetDisplayed","Params : "+JSON.stringify(a),"Response : "+JSON.stringify(c)),"undefined"!==typeof failCallback&&_$.isFunction(failCallback)&&failCallback())},function(c,e,g){var k=JSON.stringify(avsr.auth.completeParams(a));avsr.logXhr("Failure function call","error","notifyWidgetDisplayed",c,e,g,"Params : "+k,"xhr : "+JSON.stringify(c));"timeout"===e&&avsr.monitoring.logTimeOut("NotifyWidgetDisplayed")});q(a.cUrlImpressions)}}}}();window.avsr=window.avsr||{};
window.avsr.auth=window.avsr.auth||function(){var a=null,e=function(a){window.avsr&&window.avsr.log&&window.avsr.logException&&window.avsr.logXhr?a():5>=logCheckAttempts&&(logCheckAttempts++,setTimeout(function(){e(a)},50))},m=function(a){var c=new Date;c.setDate(c.getDate()+a);return c},q=function(a){var c=new Date;c.setHours(c.getHours()+a);return c},c=function(){var a=new Date;a.setFullYear(a.getFullYear()+1);a.setMonth(a.getMonth()+1);return a},g=function(c,e){a={mId:c,amId:0};e&&_$.isFunction(e)&&
e()},n=function(c,e,g,k){a&&(a.cId=c,a.amId=e,2==e?a.fTo=g:a.sTo=g,a.mTo=k)},v=function(a){g(avsr.guid.newGuid(),a)},k=function(a){avsr.cookies.getKey("setavid",function(c){var g=avsr.main.getStorageAccess().getCookieTpEnabledValue();c&&"1"==c&&"true"==g?(avsr.monitoring.logCall("ShortlivedIdentity"),avsr.storageAccess.checkThirdPartyAccess(function(a){e(function(){avsr.log("Short lived identity","warn","createIdentity","Identity storage type : "+avsr.main.getStorageAccess().getIdentityStorageType(),
"Could write / read a second time to xdm storage : "+a)})}),avsr.storageAccess.setThirdPartyEnabledCookie(m(30),"false"),avsr.storageAccess.initIdentityStorage(a)):(avsr.cookies.setKey("setavid",q(72),"1"),a())})},x=function(c){avsr.context.currentMember=_$.extend({},a);window.srReady=avsr.context.currentMember&&!!avsr.context.currentMember.mId;c()},z=function(c,e){var g=document.location.hash,k=window.avsr.browserSupport.splitQueryString(document.location.search.substring(1)),g=window.avsr.browserSupport.splitQueryString(g.substring(1));
(k=_$.extend(k,g))&&k.srGroup&&(a.group=k.srGroup);c?(n(c,1),x(e)):k&&k.srAuthUserId?(n(k.srAuthUserId,1,void 0,k.srUserToken),x(e)):(k=avsr.utils.getSpecificsConf().project.Id,avsr.main.getStorageAccess().getMailData(k,function(a){a&&(a=a.split("|"),2==a.length&&n(a[0],1,void 0,a[1]));x(e)}))};return{loadIdentity:function(n,m){if(!0!==avsr.main.enforceDnt||1!=navigator.doNotTrack&&"1"!=navigator.doNotTrack&&"yes"!=navigator.doNotTrack&&"1"!=window.doNotTrack){var q=function(){z(n,m)};avsr.main.getStorageAccess().getUniqueIdentity(function(m,
n){var t=n&&0>n-Date.now();!m||""===m||30>m.length||t?(avsr.monitoring.logCall("LocalStorageEmpty"),e(function(){avsr.log("Local storage empty","info","loadIdentity","Identity storage type : "+avsr.main.getStorageAccess().getIdentityStorageType())}),"xdm-storage"===avsr.main.getStorageAccess().getIdentityStorageType()?k(function(){avsr.main.getStorageAccess().getUniqueIdentity(function(e,k){var m=k&&0>k-Date.now();!e||""===e||30>e.length||m?(v(q),avsr.main.getStorageAccess().setUniqueIdentity(a.mId,
c())):g(e,q)})}):(v(q),avsr.main.getStorageAccess().setUniqueIdentity(a.mId,c()))):g(m,q)})}else m()},initUser:function(a,c){_sr.isEnabled(function(){a&&(a.authUserId&&a.authModeId&&(1!=a.authModeId||"true"!=a.authUserId.toString())?(n(a.authUserId,a.authModeId,a.signedRequest),a&&"undefined"!==typeof a.callback&&_$.isFunction(a.callback)&&a.callback(),x(c)):avsr.utils.callFunction(a.callback))},function(){c();avsr.log("Recommendation disabled !");a&&!a.type&&a.callback&&a.callback({status:"error",
errorCode:900})})},completeParams:function(c){c.oId=avsr.utils.getSpecificsConf().project.Id;c.mId=a.mId;c.cliId=a.cId;c.amId=a.amId;c.group=a.group;c.lang=avsr.context.lang;c.market=avsr.context.market;c.siteToken=a.sTo;c.fbToken=a.fTo;c.mailToken=a.mTo;return c},getIdentity:function(){return _$.extend({},a)},logOut:function(c){g(a.mId);avsr.context.currentMember=_$.extend({},a);c()},cleanTmpCookie:function(){var a=avsr.utils.getSpecificsConf().project.Id;avsr.main.getStorageAccess().getMailData(a,
function(c){c&&avsr.main.getStorageAccess().deleteMailData(a)})}}}();window.avsr=window.avsr||{};window.avsr.recoDatalayer=window.avsr.recoDatalayer||function(){return{getMode:function(a){var e="none";a.areaId?e="simple":a.strategies&&a.support&&a.rendering&&a.rendering.mode&&(e="advanced");return e},updateRecoDatalayer:function(a){for(var e={},m=0;m<window.avsr.specifics.areaMapping.length;m++)if(conf=window.avsr.specifics.areaMapping[m],conf.areaId&&a.areaId&&conf.areaId==a.areaId){e=conf.recoDatalayer;break}return e}}}();window.avsr=window.avsr||{};
window.avsr.recommendation=window.avsr.recommendation||function(){function a(a,c,g){var l=g[0];(new IntersectionObserver(function(g,k){var d=!1;g.forEach(function(a){d=d||a.intersectionRatio>=M.threshold});d&&(k.unobserve(l),window.setTimeout(e(k,l,a,c),1E3))},M)).observe(l)}function e(a,c,e,g){return function(){(new IntersectionObserver(function(l,k){k.unobserve(c);var d=!1;l.forEach(function(a){d=d||a.intersectionRatio>=M.threshold});d?avsr.thirdParties.callPixel(avsr.main.getAbsoluteUrl("/public/v1/view?rId="+e,
g)):a.observe(c)},M)).observe(c)}}function m(){var a=navigator.userAgent||navigator.vendor||window.opera;a.match(/iPhone|iPad|iPod/i);a.match(/Android/i);a.match(/BB10|Tablet|Mobile/i);a.match(/IEMobile/i);var c=384>=window.screen.width&&900>=window.screen.height,e=a.match(/Tablet|iPad|iPod/i)&&1280>=window.screen.width&&1024>=window.screen.height;a.match(/Android|BlackBerry|Tablet|Mobile|iPhone|iPad|iPod|Opera Mini|IEMobile/i);return c?3:e?2:480<=window.screen.width&&800<=window.screen.height?1:
0}var q,c,g,n={},v={},k={},x,z=function(a,e){if(q===a.templateLayout&&g===a.productTemplate)e();else{var l=_$(a.selector),k=a.isUseAvadsUrl?avsr.main.contentUrlAvads:avsr.main.contentUrl;avsr.utils.getSpecificsConf().isUseAvadsUrl&&(k=avsr.main.contentUrlAvads);avsr.ajax.getHtml(k+"templates/"+avsr.utils.getSpecificsConf().templateKey+".htm",function(m){m=m.replace(/\[CDN\]/g,k);q=a.templateLayout;m=_$("<script>",{html:m});c=m.find("#container-"+a.templateLayout).html();g=m.find("#product-template");
l.show();e()},function(c){avsr.logXhr("Failure function call","error","templatesReady",c,null,c,"Params : "+JSON.stringify(a),"xhr : "+JSON.stringify(c));l.hide();null!=a.interactionsCallbacks&&"undefined"!==typeof a.interactionsCallbacks.fail&&_$.isFunction(a.interactionsCallbacks.fail)&&a.interactionsCallbacks.fail()},!0)}},A=function(e,k,m,n,z,v){var d=avsr.utils.getSpecificsConf().tracking||{},l="";k.containerId?l=window.avsr.stringHelper.startsWith(k.containerId,"#")||window.avsr.stringHelper.startsWith(k.containerId,
".")?k.containerId:"#"+k.containerId:k.selector&&(l=k.selector);window.avsr.containerSelector=l;n&&n.rendering&&(n.rendering.containerId=l);if((!e||!e.errorCode||2302!=e.errorCode)&&e.r&&2*e.totalItems>=m.limit){var w={RecommendedItems:[],Template:q,TrackerLabel:m.tracker,SubTrackerLabel:m.subTracker,CatalogId:m.cId};if(avsr.utils.callInternal(avsr.specifics.startTemplating,!0,"startTemplating",n,e)){var u=_$(l),r=c;if(e.req&&e.req.areaId){var O="av";e.req.areaId.split("_").forEach(function(a){O+=
a[0].toUpperCase()+a.slice(1).toLowerCase()});r='<div id="'+O+'">'+c+"</div>"}var H=!1,x;!l||k.filling&&"Overwrite"!=k.filling?l&&"InsertAfter"==k.filling&&(H=!0,_$(l).after(r),u=_$(l).next(),x=u.find("#"+k.template+"-RecommendedItemsContainer")):(H=!0,_$(l).empty(),_$(l).append(window.avsr.stringHelper.startsWith(l.split(" ").slice(-1)[0],"#")?c:r),x=_$(l+" #"+k.template+"-RecommendedItemsContainer"));for(l=0;l<e.r.length;l++){var G=e.r[l];if(G.items)for(t(G.items),k=0;k<G.items.length;k++){var A=
G.items[k];w.RecommendedItems.push(A);A.method=v&&v.action?v.action:"";A.addToBasket=v&&v.addToBasket?v.addToBasket:"";if(A.pictures){var Q=0;_$.each(A.pictures,function(a,d){a>Q&&(A.adsPicture=d,Q=a)})}!0===d.useRedirect&&(m.r=G.r,A.url=avsr.main.getAbsoluteUrl("/Activity/RecordClick",G.isUseAvadsUrl)+D(e.gId,G.recoGuid,A.clientProductId,A.url,m,A.catalogId,"ANTVOICE",A.campaignId))}}v=_$.tmpl(g,w);x.html(v);for(k=0;k<e.r.length;k++)G=e.r[k],!0!==d.useRedirect&&K(G.recoGuid,e.r[k].isUseAvadsUrl);
avsr.utils.callInternal(avsr.specifics.endTemplating,!1,"endTemplating",n,e,x);H&&avsr.main.ensureCssLoaded(function(){u.show()});for(k=0;k<e.r.length;k++)if(G=e.r[k],H)0<G.items.length&&(P(m,G,!1,G.isUseAvadsUrl),a(G.recoGuid,G.isUseAvadsUrl,x)),z&&z(G.items,G.recoGuid,G.log,G.isAbTesting,G.isActive);else for(k=0;k<e.r.length;k++){var G=e.r[k],C=G.recoGuid;n=function(){!0!==d.useRedirect&&K(C,G.isUseAvadsUrl);0<G.items.length&&(P(m,G,!1,G.isUseAvadsUrl),a(G.recoGuid,G.isUseAvadsUrl,x))};z&&z({html:v.html(),
items:G.items,callback:n},G.recoGuid,G.log,G.isAbTesting)}return!0}}else return _$(l).hide(),!1},t=function(a){a&&a.length&&a.forEach(function(a){v[a.catalogId]||(v[a.catalogId]={});v[a.catalogId][a.clientProductId]={campaignId:a.campaignId,catalogId:a.catalogId,nodeId:a.id,cUrlView:a.cUrlView}})},C=function(a,c){if(c){if(v[c])return v[c][a]}else{var e=Object.keys(v)[0];if(v[e])return v[e][a]}},I=function(a,c,e,g){for(var l=avsr.utils.getSpecificsConf().tracking||{},k=0;k<a.r.length;k++){t(a.r[k].items);
for(var d=0;d<a.r[k].items.length;d++)!0===l.useRedirect&&(c.r=a.r[k].r,a.r[k].items[d].url=avsr.main.getAbsoluteUrl("/Activity/RecordClick",g.isUseAvadsUrl)+D(a.gId,a.r[k].recoGuid,a.r[k].items[d].clientProductId,a.r[k].items[d].url,c,a.r[k].items[d].catalogId,"ANTVOICE",a.r[k].items[d].campaignId));!0!==l.useRedirect&&K(a.r[k].recoGuid,a.r[k].isUseAvadsUrl);!g.disableWidgetDisplayed&&0<a.r[k].items.length&&P(c,a.r[k],!0,a.r[k].isUseAvadsUrl);e&&e(a.r[k].items,a.r[k].recoGuid,a.r[k].log,a.r[k].isAbTesting,
a.r[k].isActive,a.r[k].owners)}},D=function(a,c,e,g,k,m,d,n){a={cpId:e,recoId:c,recoGrpId:a,tracker:k.tracker,subTracker:k.subTracker,recommender:d,loc:k.loc,domain:document.location.hostname,sId:k.support};k.r&&(a.r=k.r);m&&(a.cId=m);n&&(a.caId=n);var l=avsr.auth.completeParams(a);Object.keys(l).forEach(function(a){void 0===l[a]&&delete l[a]});return"?"+_$.param(l)+"&target="+encodeURIComponent(g)},B=function(a,c,e){if(avsr.specifics.getRecoTriggeringDistance&&_$.isFunction(avsr.specifics.getRecoTriggeringDistance)){var l=
avsr.specifics.getRecoTriggeringDistance(a);_$.isNumeric(l)&&-1<l&&(!c&&_$.isArray(a)?a.forEach(function(a){c||a&&a.rendering&&(a.rendering.containerId||a.rendering.selector)&&(c=a.rendering.containerId||a.rendering.selector)}):!c||window.avsr.stringHelper.startsWith(c,"#")||window.avsr.stringHelper.startsWith(c,".")||(c="#"+c),l={selector:c,distance:l});if(_$.isPlainObject(l)&&l.selector&&_$.isNumeric(l.distance)&&-1<l.distance){if(0<_$(l.selector).length){avsr.monitoring.logCall("DelayedRecommendationPrepared");
avsr.scrollMonitor.create(_$(l.selector),l.distance).one("enterViewport",function(){e()});return}window.avsr.monitoring.logCall("ContainerNonExistent")}}e()},F=function(a,c,e,g){if(null==a.recoGuid){for(var l={},m=0;m<c.items.length;m++)c.items[m].campaignId&&(l[c.items[m].campaignId]=!0);g={recoId:c.recoGuid,tracker:a.tracker,subTracker:a.subTracker,recommender:e,location:a.loc,recipeId:c.r,cIds:c.cIds,caIds:Object.keys(l),recoGrpId:k[c.recoGuid],supportId:a.support,isUseAvadsUrl:g,cUrlImpressions:c.cUrlsImpression};
n[c.recoGuid]={tracker:a.tracker,subTracker:a.subTracker,recommender:e,location:a.loc,recipeId:c.r,catalogIds:c.cIds,supportId:a.support};avsr.activities.notifyWidgetDisplayed(g)}},P=function(a,c,e,g){var l=[],m=[],d=function(){var a={};_$("*[data-sr-recoGuid="+c.recoGuid+"][data-sr-id][data-sr-nodisplay!=true][data-sr-attached!=true]").each(function(d,c){var e=_$(c),g=avsr.scrollMonitor.create(_$(c));0>m.indexOf(e.attr("data-sr-id"))&&(m.push(e.attr("data-sr-id")),g.one("enterViewport",function(){if(0!=
this.top||0!=this.bottom){var d=_$(this.watchItem).attr("data-sr-id"),c=_$(this.watchItem).attr("data-sr-catalog"),c=C(d,c);c.cUrlView&&!a[c.cUrlView]?(l.push({cpId:d,cId:c.catalogId,caId:c.campaignId,cUrlView:c.cUrlView}),a[c.cUrlView]=!0):l.push({cpId:d,cId:c.catalogId,caId:c.campaignId})}}));e.attr("data-sr-attached","true")})};if(e){var n=a.limit,q=setInterval(function(){d()},100);setInterval(function(){q&&_$("*[data-sr-attached]").length==n&&(clearInterval(q),q=null)},1E3)}else d();setInterval(function(){0<
l.length&&(avsr.activities.notifyProductDisplayed({recoId:c.recoGuid,products:l,tracker:a.tracker,subTracker:a.subTracker,recommender:a.recommender,location:a.loc,recipeId:c.r,recoGrpId:k[c.recoGuid],supportId:a.support,isUseAvadsUrl:g}),l=[])},1E3);k[c.recoGuid]=a.recoGrpId;F(a,c,"ANTVOICE",g)},M={root:null,rootMargin:"0px",threshold:.5},R=function(a,c,e){var g=_$(a).attr("data-sr-recoGuid"),l=n[g]||{},m=_$(a).attr("data-sr-id");a=_$(a).attr("data-sr-catalog");a=C(m,a);c={clientProductId:m,tracker:l.tracker,
subTracker:l.subTracker,recoId:g,callback:c,exceptionCallback:e,recommender:l.recommender,location:l.location,recoGrpId:k[g],supportId:l.supportId};l.recipeId&&(c.recipeId=l.recipeId);a.catalogId&&(c.catalogId=a.catalogId);a.campaignId&&(c.campaignId=a.campaignId);return c},U=function(a,c,e,g){try{avsr.activities.notifyClick(R(a,c,e),g)}catch(S){avsr.logException("Error while calling notifyClick","notifyClick",S),avrs.main.isFunction(e)&&e(S)}},E=function(a,c){a=_$(a);var e,g=null,l="a";a[0].nodeName.toLowerCase()==
l?e=a:_$(c)[0].nodeName.toLowerCase()==l?e=_$(c):(e=a.parentsUntil(_$(c),l),0==e.length&&(l="form",e=a.parentsUntil(_$(c),l)));0<e.length&&(g={el:_$(e[0]),isForm:"form"==l,shouldRedirect:"false"!=e.attr("data-sr-redirect")&&"false"!=a.attr("data-sr-redirect"),shouldNotify:"false"!=e.attr("data-sr-notify")&&"false"!=a.attr("data-sr-notify"),shouldTrigger:"false"!=e.attr("data-sr-trigger")&&"false"!=a.attr("data-sr-trigger")});return g},K=function(a,c){var e={},g=function(a,d){var c=_$(a).attr("data-sr-id");
0==e[c]?window.setTimeout(function(){g(a,d)},50):l(d)},l=function(a){a.shouldRedirect&&!a.isForm?window.location=a.el[0].href:a.isForm?a.el.submit():a.shouldTrigger&&a.el.attr("data-sr-onclick")&&_$.globalEval(a.el.attr("data-sr-onclick"))};_$(document.body).off("click.avsr","*[data-sr-recoGuid="+a+"]");_$(document.body).on("click.avsr","*[data-sr-recoGuid="+a+"]",function(a){var d=_$(this).attr("data-sr-id"),c=E(a.target,this);!0===e[d]||null==c||2==a.which||3==a.which||a.ctrlKey||"_blank"==c.el.attr("target")||
a.preventDefault()});_$(document.body).off("mouseup.avsr","*[data-sr-recoGuid="+a+"]");_$(document.body).on("mouseup.avsr","*[data-sr-recoGuid="+a+"]",function(a){var d=_$(this).attr("data-sr-id");if(void 0===e[d]){e[d]=!1;try{var k=E(a.target,this);k.shouldNotify?U(this,function(){e[d]=!0},function(a){avsr.monitoring.logClientCall("RecordingClickError");l(k)},c):delete e[d];var m=!1;"mouseup"!=a.type||null==k||2!=a.which&&3!=a.which&&!a.ctrlKey&&"_blank"!=k.el.attr("target")||(m=!0);!k||m&&!k.isForm||
g(this,k);k&&m&&k.el.attr("data-sr-ontab")&&_$.globalEval(k.el.attr("data-sr-ontab"))}catch(Y){avsr.logException("Error while binding event mouseup.avsr","mouseup.avsr",Y),delete e[d]}}})},L=function(a,c){var e=null;c.forEach(function(c){c.location&&null==e&&"ProductPage"==c.location&&(a.product?a.product.id||(e="Product id is not defined"):e="Currently on ProductPage but no product defined")});return e};return{getReco:avsr.utils.createHooks(function(a,c,e,g,k,n){try{var d=avsr.auth.completeParams({});
d.r=JSON.stringify(a);var l={page:window.antvoice_variable.page,product:window.antvoice_variable.product,project:window.antvoice_variable.project,user:window.antvoice_variable.user,recommendations_debug:window.antvoice_variable.recommendations_debug},q=window.avsr.browserSupport.splitQueryString(window.location.search.substr(1));q&&q.srRuleId&&(l.recommendations_debug||(l.recommendations_debug={}),l.recommendations_debug.ruleId=q.srRuleId);d.d=JSON.stringify(l);var t;window.window.antvoice_variable.recommendations_debug&&
(t=window.antvoice_variable.recommendations_debug.url);d.url=t||window.location.href;d.dv=m();var r,w=new Date;r=window.window.antvoice_variable.recommendations_debug&&window.window.antvoice_variable.recommendations_debug.userTimestamp?window.window.antvoice_variable.recommendations_debug.userTimestamp:parseInt((new Date).getTime()/1E3);tzO=window.window.antvoice_variable.recommendations_debug&&window.window.antvoice_variable.recommendations_debug.userTimezoneOffset?window.window.antvoice_variable.recommendations_debug.userTimezoneOffset:
60*w.getTimezoneOffset();d.uTs=r;d.tzO=tzO;q=null;if(null!=(q=L(l,a)))avsr.log("Recommendation was stopped before calling the server : "+q,"error","getReco","Params:"+JSON.stringify(d)),avsr.utils.callFunction(e);else{var u=function(g){if(!g.data||!g.data.g||g.data.g.length!=a.length)return avsr.log("Response does not have data","error","getReco","Params : "+JSON.stringify(d),"Response : "+JSON.stringify(g)),e&&e(),!1;x=g.data;if("success"!==g.status)return avsr.log('Response status != "success" : '+
g.status,"error","getReco","Params : "+JSON.stringify(d),"Response : "+JSON.stringify(g)),g.data&&g.data.g&&0<g.data.g.length&&g.data.g.forEach(function(a){a.r&&0<a.r.length&&a.r.forEach(function(a){2002===a.errorCode&&avsr.logDatalayerErrors("Filters error. E : "+a.error)})}),e&&e(),!1;var m=!1;g.data&&g.data.g&&0<g.data.g.length&&g.data.g.forEach(function(c,e){if(2302===c.errorCode){avsr.log("Recommendation is not suitable","info","getReco","Params : "+JSON.stringify(d),"Response : "+JSON.stringify(g));
var l=a[e];if(l.rendering&&l.rendering.onError&&_$.isFunction(l.rendering.onError))l.rendering.onError({requestIndex:e,message:"Recommendation is not suitable",errorCode:2302,group:c});m=!0}});if(m)return!1;if(g.data&&g.data.g&&0<g.data.g.length&&"success"===g.status){var r=0;g.data.g.forEach(function(d){var c={total:0},e=a[r].areaId;e&&(window.avsr.recoState||(window.avsr.recoState={}),d.r&&0<d.r.length&&d.r.forEach(function(a){c[a.recoGuid]=[];c.items&&a.items.forEach(function(d){c[a.recoGuid].push(d)});
c.total+=c[a.recoGuid].length}),window.avsr.recoState[e]=c);r++})}if(!k(d,g))return avsr.log("Recommendation was stopped after getting the recommendation result","info","getReco","Params : "+JSON.stringify(d),"Response : "+JSON.stringify(g)),!1;0<a.length?avsr.main.loadCss(a[0].isUseAvadsUrl):avsr.main.loadCss();g.data.g.forEach(function(c,e){var k=a[e];c.req&&(k=c.req,a[e].rendering&&(a[e].rendering.onSuccess&&(k.rendering.onSuccess=a[e].rendering.onSuccess),a[e].rendering.onError&&(k.rendering.onError=
a[e].rendering.onError)));for(var m=0,r=0;r<k.strategies.length;r++)m+=k.strategies[r].qty;var q={isDatalayer:!0,recommender:"ANTVOICE",loc:k.location||l.page.type,limit:m,support:k.support,recoGrpId:c.gId};null!=k.tracking&&(q.tracker=null!=k.tracking.tracker?k.tracking.tracker:"",q.subTracker=null!=k.tracking.subTracker?k.tracking.subTracker:"");if("html"===k.rendering.mode)try{z({templateLayout:k.rendering.template,selector:k.rendering.containerId||k.rendering.selector,isUseAvadsUrl:k.isUseAvadsUrl},
function(){if(!0===A(c,k.rendering,q,k)){if(k.rendering.onSuccess)k.rendering.onSuccess({requestIndex:e,group:c})}else if(avsr.log("Error trying to get a recommendation with these parameters","error","recommendationSet","Request : "+JSON.stringify(k),"Recommendation group : "+JSON.stringify(c)),k.rendering.onError)k.rendering.onError({requestIndex:e,message:"Error trying to get a recommendation with these parameters",group:c});g.data.g.length==e+1&&n(d)})}catch(ca){if(avsr.logException("Could not templatize a group of recommendations",
"social.reco.recommendations.getReco",ca,"recommendation group : "+JSON.stringify(c),"recommendation request : "+JSON.stringify(k)),k.rendering.onError)k.rendering.onError({requestIndex:e,message:"template error",group:c})}else try{I(c,q,void 0,k);if(k.rendering.callback){var t=eval(k.rendering.callback);t?t.apply(this,[{requestIndex:e,group:c}]):avsr.log("No callback with name "+k.rendering.callback,"error","recommendationSet")}if(k.rendering.onSuccess)k.rendering.onSuccess({requestIndex:e,group:c});
g.data.g.length==e+1&&n(d)}catch(ca){if(avsr.logException("Error calling the recommendation callback with these parameters : "+ca,"social.reco.recommendations.getReco",ca,"recommendation group : "+JSON.stringify(c),"recommendation callback : "+k.rendering.callback),window.avsr.consoleLog("error",ca),k.rendering.onError)k.rendering.onError({requestIndex:e,message:"Error trying to get a recommendation with these parameters",group:c})}});c&&c()},v=function(a,c,g){avsr.logXhr("Error while calling /Recommendation/Recommend",
"error","getReco",a,c,g,"Params : "+JSON.stringify(d),"xhr : "+JSON.stringify(a));e&&e()};avsr.storageAccess.getAllOwnerDisabled(function(c){d.excludedOwners=c;g(d)?B(a,null,function(){"true"===a[0].isUseAvadsUrl&&(a[0].isUseAvadsUrl=!0);avsr.ajax.post(avsr.main.getAbsoluteUrl("/Recommendation/Recommend",a[0].isUseAvadsUrl),d,u,v)}):avsr.log("Recommendation was stopped before calling the server","info","getReco","Params : "+JSON.stringify(d))})}}catch(G){avsr.logException("Exception while calling /Recommendation/Recommend",
"social.reco.recommendations.getReco",G),e&&e()}},"startGetReco","preGetReco","postGetReco","endGetReco"),enableRecommendation:function(a,c,e){var g=new Date;g.setFullYear(g.getFullYear()+10);avsr.main.getStorageAccess().deleteRecoEnabledFlag(avsr.utils.getSpecificsConf().project.Id);avsr.main.getStorageAccess().setRecoEnabledFlag(avsr.utils.getSpecificsConf().project.Id,g,a?"1":"0");a?(_sr.init({callback:e}),c&&_$("#"+c).show()):(c&&_$("#"+c).hide(),"undefined"!=typeof e&&_$.isFunction(e)&&e({enable:"false"}))},
isRecommendationEnabled:function(a,c){!0!==avsr.main.enforceDnt||1!=navigator.doNotTrack&&"1"!=navigator.doNotTrack&&"yes"!=navigator.doNotTrack&&"1"!=window.doNotTrack||!_$.isFunction(c)?avsr.main.getStorageAccess().getRecoEnabledFlag(avsr.utils.getSpecificsConf().project.Id,function(e){null!=e?"1"==e?a&&_$.isFunction(a)&&a():c&&_$.isFunction(c)&&c():a&&_$.isFunction(a)&&a()}):c()},enabledAds:function(a,c){var e=new Date;e.setFullYear(e.getFullYear()+1);avsr.main.getStorageAccess().deleteAdsEnabledFlag();
avsr.main.getStorageAccess().setAdsEnabledFlag(e,a?"1":"0");a||(e=avsr.auth.completeParams([]),avsr.ajax.getHtml(avsr.main.getAbsoluteUrl("/v1/unsubscribe?oId="+avsr.utils.getSpecificsConf().project.Id+"&mId="+e.mId,!0)))},isAdsEnabled:function(a,c){!0!==avsr.main.enforceDnt||1!=navigator.doNotTrack&&"1"!=navigator.doNotTrack&&"yes"!=navigator.doNotTrack&&"1"!=window.doNotTrack||!_$.isFunction(c)?avsr.main.getStorageAccess().getAdsEnabledFlag(function(e){null!=e?"1"==e?a&&_$.isFunction(a)&&a():c&&
_$.isFunction(c)&&c():a&&_$.isFunction(a)&&a()}):c()},getDisabledDatas:function(a){!0!==avsr.main.enforceDnt||1!=navigator.doNotTrack&&"1"!=navigator.doNotTrack&&"yes"!=navigator.doNotTrack&&"1"!=window.doNotTrack||!_$.isFunction(a)?avsr.main.getStorageAccess().getDisabledDatas(avsr.utils.getSpecificsConf().project.Id,function(c){a(c)}):a({isEnabledAds:!1,isEnabledReco:!1})},dataResponseRecoForAutomation:function(){return x}}}();window.avsr=window.avsr||{};
window.avsr.preview=window.avsr.preview||function(){function a(){var a=[];_$("*").filter(function(){return"fixed"===_$(this).css("position")}).each(function(){var c=_$(this);0===c.offset().top&&c.width()===document.documentElement.clientWidth&&0<c.height()&&500>c.height()&&"none"!==c.css("display")&&a.push(c)});return a}function e(a,c,g,k,m){a?0<_$("body").find("[data-sr-recoguid='"+a+"']").length?setTimeout(function(){k()},300):c<g?(c++,setTimeout(function(){e(a,c,g,k,m)},50)):m():m()}function m(a,
c,e,g,k){setTimeout(function(){c++;c<e&&window.avsr&&window.avsr.recoState&&window.avsr.recoState[a]?g(window.avsr.recoState[a]):c>=e?k():m(a,c,e,g,k)},50)}function q(){var c=a();if(c.length){var e=0;c.forEach(function(a){a.height()>e&&(e=a.height())});return e+20}return 20}function c(a){var c=Math.max(document.documentElement.clientWidth,window.innerWidth||0);a='<div id="ant-bg-popup"> <style> .ant-preview-ng { position: absolute; background: rgba(0,0,0,0.5); \t  z-index: 9999999998; } \t.ant-preview-popup{ position:fixed;\t z-index: 9999999999; width:500px;\t height:150px;background:#fff;\t} \t.ant-preview-text-container { position:relative;\t padding-left:10%;padding-right:10%;background:#fff;height:100%;width: 100%;text-align:center;display:table;\t}\t.ant-preview-text{display:table-cell;text-align:middle;font-style: italic;color:grey;vertical-align:middle;user-select: none;\t}  </style> \x3c!--EVERYWHERE--\x3e <div class="ant-preview-ng" style="height:'+
_$(document).height()+"px;width:"+_$(document).width()+'px;"></div> <div class="ant-preview-popup" style="top:'+(c/2-75).toString()+"px;left:"+(c/2-250).toString()+'px;"><div class="ant-preview-text-container"><div class="ant-preview-text">'+a+"</div></div></div > \t</div>";_$("body").prepend(a)}function g(a){var c=_$("body"),e=q(),g=a.offset().top-e,k=a.offset().top+a.height()+e,m=a.offset().left-20,n=a.offset().left+a.width()+20;a='<div id="ant-bg"> <style> .ant-preview-ng { position: absolute; background: rgba(0,0,0,0.5);z-index: 9999999998; } </style>\x3c!--TOP--\x3e<div class="ant-preview-ng" style="height:'+
g+"px;width:"+_$(document).width()+'px;"></div>\x3c!--BOTTOM--\x3e<div class="ant-preview-ng" style="top:'+k+"px;height:"+(c.height()-k)+"px; width:"+_$(document).width()+'px;"></div> \x3c!--LEFT--\x3e <div class="ant-preview-ng" style="top:'+g+"px;height:"+(a.height()+2*e)+"px;width:"+m+'px;"></div>\x3c!--RIGHT--\x3e <div class="ant-preview-ng" style="top:'+g+"px;left:"+n+"px;height:"+(a.height()+2*e)+"px;width:"+(_$(document).width()-n)+'px;"></div><div>';_$("body").prepend(a);_$("html, body").animate({scrollTop:g-
100},"slow")}function n(a){if(a){var c=_$(a);for(a=0<c.height();!a&&c;)c=c.parent(),a=0<c.height();return c}}function v(a,k){a?m(a,-1,15,function(m){var q,t,v=0,z;for(z in m)if(m.hasOwnProperty(z)&&m[z].constructor===Array){if(0===v)q=z;else if(1==v)t=z;else break;v++}t||(t=q);e(q,0,100,function(){var a;try{if(q===t){var c,e;_$("body").find("[data-sr-recoguid='"+q+"']").each(function(a){0==a?c=_$(this):1==a&&(e=_$(this))})}else c=_$("body").find("[data-sr-recoguid='"+q+"']"),e=_$("body").find("[data-sr-recoguid='"+
t+"']");a=x(c,e)}catch(R){a=void 0}a&&(a=n(a))&&_$(a)&&(g(a),k())},function(){c("There is no widget by the name of "+a+" on this page.")})},function(){window.avsr&&window.avsr.recoState&&window.avsr&&window.avsr[a]&&!window.avsr[a].total?c("Sorry, your campaign is too restrictive. Please change some filters to get more elements."):window.avsr&&window.avsr.recoState&&window.avsr&&!window.avsr[a]&&c("There is no widget by the name of "+a+" on this page.")}):k()}function k(){var a={};if(1<window.location.search.length)for(var c,
e=0,g=window.location.search.substr(1).split("&");e<g.length;e++)c=g[e].split("="),a[unescape(c[0])]=1<c.length?unescape(c[1]):"";for(var k in a)a.hasOwnProperty(k)&&"null"===a[k]&&delete a[k];return a}function x(a,c){_$parentsa=a.parents();_$parentsb=c.parents();var e=null;_$parentsa.each(function(){var a=this;_$parentsb.each(function(){if(a==this)return e=this,!1});if(e)return!1});return e}_$(function(){var a=k();a.srPreview&&a.srAreaId&&(v(a.srAreaId,function(){}),_$(window).resize(function(){window.window.avsr.preview.resizing||
(window.avsr.preview.resizing=!0,_$("#ant-bg").remove(),v(a.srAreaId,function(){window.avsr.preview.resizing=!1}))}))});return{}}();window.avsr=window.avsr||{};
window.avsr.main=window.avsr.main||function(){function a(){if(window.antvoice_variable&&avsr.specifics.fillDatalayer){var a=null,c=window.antvoice_variable;c.page&&c.page.type||(a="page does not exists or contains an error");c.project||(a="project must be defined");null==a&&"ProductPage"==c.page.type&&(c.product?c.product.id||c.product.url||(a="At least product id or url must be defined defined"):a="Currently on ProductPage but no product defined");if(null==a&&"PaiementConfirmationPage"==c.page.type)if(!c.basket)a=
"Currently on PaiementConfirmationPage but no basket defined";else if(!c.basket.transaction_id)a="Transaction Id is not defined";else if(!c.basket.line_items||0< !c.basket.line_items.length)a="No products in basket";c.tags&&c.tags.forEach(function(c){c.type&&c.name&&c.action||(a="A least one tag is incomplete")});if(null!==a)return c={err:a,type:0,href:document.location.href,oId:avsr.utils.getSpecificsConf().project.Id},avsr.ajax.post(avsr.main.getAbsoluteUrl("/Datalayer/Report"),c),!1}return!0}function e(a,
c,e){L(a)&&K(function(){q(function(){var e=avsr.context.currentMember;S(a.actionName)?D(function(g){g.isEnabledReco&&!avsr.utils.getSpecificsConf().isUseAvadsUrl||g.isEnabledAds&&avsr.utils.getSpecificsConf().isUseAvadsUrl?e?c(a):(g=avsr.cookies.getKey(avsr.cookies.getRecoCookieName()),avsr.log("("+c+") : Member null : "+g,"error","notify")):a&&a.callback&&d(a.callback,900)}):d(a.callback,5001)})})}function m(){for(var a=0;a<x.length;a++)x[a]();x=[]}function q(a){k?a():x.push(a)}function c(){L()&&
K(function(){try{var a=Y().getDeferredNotifications();if(a&&-1!=a.indexOf("{"))for(var c=a.substring(1).split("|"),a=0;a<c.length;a++)try{var d=_$.parseJSON(c[a]);e(d,avsr.activities.notifyClick)}catch(ka){avsr.logException("Cannot parse the defered parameters","handleDeferredActivities",ka)}Y().deleteDeferredNotifications();k=!0;m()}catch(ka){avsr.logException("Cannot read the storage deferedNotifications","handleDeferredActivities",ka)}k=!0;m()})}function g(){L()&&K(function(){try{avsr.thirdParties.initialize()}catch(r){avsr.logException("Cannot synchronize third party identites",
"handleThirdPartiesIndentities",r)}})}function n(a){L()&&K(function(){try{window.antvoice_variable&&window.antvoice_variable.recommendations&&a&&avsr.main.getReco(window.antvoice_variable.recommendations)}catch(O){console.error(O),avsr.logException("Couldn't get data layered recommendation to work","handleDatalayeredRecommendation",O)}})}function v(){L()&&K(function(){try{Y().cleanSessionCookies()}catch(r){avsr.logException("Couldn't clean session cookies","cleanSessionCookies",r)}})}var k=!1,x=[],
z="//social-reco.antvoice.com/".replace("http:",document.location.protocol),A=document.location.protocol+"//ads.avads.net/",t="//img.antvoice.com/".replace("http:",document.location.protocol),C=null,I={currentMember:{},lang:"N/A",market:"N/A"},D=function(a){Q()&&avsr.main.getOptOutDatas(function(c){a(c)},function(c){a(c)})},B=function(){!window.antvoice_variable&&window.webSiteName&&(window.antvoice_variable={project:window.webSiteName,page:{type:"HomePage"}});var a=avsr.specifics.fillDatalayer;!a&&
avsr.specifics.completeDatalayer&&_$.isFunction(avsr.specifics.completeDatalayer)&&(a=avsr.specifics.completeDatalayer);try{window.avsr.datalayerStatus=avsr.utils.callInternal(a,!1,"fillDatalayer",null,{})}catch(W){var c=!1;["M\u00e9moire insuffisante","Out of memory"].forEach(function(a){c=c||0<W.message.indexOf(a)});c||(a={err:"An exception occured. "+W,type:0,href:document.location.href,oId:avsr.utils.getSpecificsConf().project.Id},avsr.ajax.post(avsr.main.getAbsoluteUrl("/Datalayer/Report"),a))}},
F=function(){avsr.cookies&&avsr.loggingConfiguration&&avsr.loggingConfiguration.enabled&&avsr.loggingConfiguration.sampleRate&&avsr.cookies.getKey("av-logging-sample-rate",function(a){if(!a){a=Math.floor(100*Math.random());var c=new Date;c.setHours(c.getHours()+1);window.avsr.cookies.setKey("av-logging-sample-rate",c,a)}});if(avsr.loggingConfiguration&&avsr.loggingConfiguration.enabled&&avsr.loggingConfiguration.windowOnErrorEnabled){var a=window.onerror;window.onerror=function(c,d,e,g,k){try{k?avsr.logException("window.onerror exception : "+
c,"window.onerror",k):avsr.log("window.onerror exception : "+c,"error","window.onerror")}catch(qa){}a&&a(c,d,e,g,k)}}window.avsr.main.currentWindowGuid=window.avsr.guid.newGuid();var c=window.onload;window.onload=function(){window.avsr.main.currentWindowGuid=window.avsr.guid.newGuid();c&&c()}},P={},M=[],R=function(a){if(P[a])for(var c;c=P[a].pop();)c();c=M.indexOf(a);-1<c&&(M.splice(c,1),P[a]&&delete P[a])},U=function(a,c){0>M.indexOf(a)&&(M.push(a),c())},E=function(a,c){0>M.indexOf(a)?c():(P[a]||
(P[a]=[]),P[a].push(c))},K=function(a){E("identityLoaded",a)},L=function(a){null===C&&(C=avsr.browserSupport.isSupported(),C||(avsr.log("Browser is not supported.","error","ensureBrowserSupport"),window.avsr.monitoring.logCall("BrowserNotSupported")));if(C)return!0;d(a,600);return!1},l=function(a){e(a,avsr.activities.notifyAction,_sr.consts.NOTIFY_ACTION)},w=function(c){B();if(avsr.utils.callInternal(a,!1,"isDatalerLayerValid"))if(null==avsr.datalayerStatus&&(avsr.datalayerStatus={dlStatus:_sr.consts.DL_NOTUSED,
nodeStatus:_sr.consts.NODE_EMPTY,error:""}),avsr.datalayerStatus.dlStatus==_sr.consts.DL_ERR||avsr.datalayerStatus.nodeStatus==_sr.consts.NODE_ERR)c={err:avsr.datalayerStatus.error,type:avsr.datalayerStatus.dlStatus==_sr.consts.DL_ERR?0:1,href:document.location.href,oId:avsr.utils.getSpecificsConf().project.Id},avsr.ajax.post(avsr.main.getAbsoluteUrl("/Datalayer/Report"),c);else c.onDatalayerValid();else c.onDatalayerInvalid()},H=!1,u=function(a){avsr.specifics.noCss||H||-1<navigator.appVersion.indexOf("Safari/534.57.2")&&
-1==navigator.appVersion.indexOf("Chrome")?(window.avsr.consoleLog("debug","ensureCssLoaded - Css Loaded"),a()):window.setTimeout(function(){u(a)},50)},S=function(a){if(window.avsr&&window.avsr.specifics&&window.avsr.utils.getSpecificsConf().availability){if(window.avsr.utils.getSpecificsConf().availability.isUserActionsEnabled){if(a)for(var c=0;c<window.avsr.utils.getSpecificsConf().availability.disabledActionsList.length;c++)if(window.avsr.utils.getSpecificsConf().availability.disabledActionsList[c]==
a)return!1;return!0}return!1}return!0},Q=function(){return window.avsr&&window.avsr.specifics&&window.avsr.utils.getSpecificsConf().availability?window.avsr.utils.getSpecificsConf().availability.isRecoEnabled:!0},d=function(a,c){"undefined"!==typeof a&&_$.isFunction(a)&&a({status:"error",errorCode:c})},T=function(a,c,d){return function(){avsr.log("The function "+(d?d:"")+" has been deprecated"+(a?" in version "+a:""),"warn","deprecate");return c.apply(window,arguments)}},X=function(){var a=document.location.hash,
c=window.avsr.browserSupport.splitQueryString(document.location.search.substring(1)),a=window.avsr.browserSupport.splitQueryString(a.substring(1)),d=_$.extend(c,a);if(d&&L()&&(_$.isFunction(avsr.specifics.preHandleQueryString)&&avsr.specifics.preHandleQueryString(d),d.srProductId||d.srClientProductId&&d.srTrackerLabel&&d.srSubTrackerLabel||d.srBatchId)){var e;d.hasOwnProperty("sandbox")&&(e=!0);d.srProductId?avsr.main.platformReady(function(){var a=avsr.auth.completeParams({cliId:d.srAuthUserId,cpId:d.srProductId,
cat:d.srCatalog,batchId:d.srBatchId,group:d.srGroup,sandbox:e});avsr.ajax.post(avsr.main.getAbsoluteUrl("/Crm/NodeClick"),a,function(){},function(c,d,e){avsr.logXhr("Error while posting to /Crm/NodeClick","error","handleQueryString",c,d,e,"Params : "+JSON.stringify(a),"xhr : "+JSON.stringify(c))})}):d.srClientProductId&&d.srTrackerLabel&&d.srSubTrackerLabel?avsr.main.platformReady(function(){l({actionName:"ANTVOICE_Clic",clientProductId:d.srClientProductId,trackerLabel:d.srTrackerLabel,subTrackerLabel:d.srSubTrackerLabel,
source:3,withInteract:!0})}):d.srBatchId&&avsr.main.platformReady(function(){avsr.auth.completeParams({cliId:d.srAuthUserId,batchId:d.srBatchId,group:d.srGroup})})}},Y=function(){return avsr.storageAccess};return{startApi:function(a,d,e){function k(e){window.avsr.context=I;avsr.ajaxTimeout=3E4;!a&&window.antvoice_variable&&window.antvoice_variable.page&&window.antvoice_variable.page.market&&2==window.antvoice_variable.page.market.length&&window.antvoice_variable.page.market[0]&&window.antvoice_variable.page.market[1]&&
(a=window.antvoice_variable.page.market[0],d=window.antvoice_variable.page.market[1]);void 0!=a&&""!=a&&(avsr.context.lang=a);void 0!=d&&""!=d&&(avsr.context.market=d);L()||(window.srReady=!0);window.avsr&&window.avsr.loggingConfiguration&&window.avsr.loggingConfiguration.enabled&&window.avsr.loggingConfiguration.sampleRate&&F();navigator.cookieEnabled?"cookie"in document&&(0<document.cookie.length||-1<(document.cookie="av-test").indexOf.call(document.cookie,"av-test"))||(window.avsr.log&&avsr.log("Could not write to cookies but navigator.cookieEnabled is true",
"warn","startApi"),l=!0):(l=!0,window.avsr.log&&avsr.log("CookieDisabled","warn","startApi"));l?window.avsr.monitoring.logCall("CookieDisabled"):L()?avsr.storageAccess.initIdentityStorage(function(){var a=null;window.antvoice_variable&&window.antvoice_variable.user&&window.antvoice_variable.user.user_id&&(a=window.antvoice_variable.user.user_id);var d={};U("enableLoadLock",function(){D(function(a){d=a;R("enableLoadLock")})});E("enableLoadLock",function(){avsr.auth.loadIdentity(a,e);X();c();n(d.isEnabledReco);
v();d.isEnabledReco&&d.isEnabledAds&&g()})}):e()}var l=!1;U("apiLoaded",function(){window._sr=window._sr||{};window._sr.init=avsr.main.initIdentity;window._sr.logout=avsr.main.logout;window._sr.isBrowserSupported=avsr.main.isBrowserSupported;window._sr.enable=avsr.main.enable;window._sr.disable=avsr.main.disable;window._sr.isEnabled=avsr.main.isEnabled;window._sr.getReco=avsr.main.getReco;window._sr.notifyAction=avsr.main.notifyAction;window._sr.notifyTagAction=avsr.main.notifyTagAction;window._sr.isUserInTestGroup=
avsr.main.isUserInTestGroup;window._sr.updateDatalayer=avsr.main.updateDatalayer;window._sr.notifyWidgetDisplayed=T("2.13.0",avsr.main.notifyWidgetDisplayed,"_sr.notifyWidgetDisplayed");window._sr.notifyProductDisplayed=T("2.13.0",avsr.main.notifyProductDisplayed,"_sr.notifyProductDisplayed");window.social=window.social||{};window.social.reco=window.social.reco||{};window.social.reco.init=avsr.main.initIdentity;window.social.reco.logout=avsr.main.logout;window.social.reco.enable=avsr.main.enable;
window.social.reco.disable=avsr.main.disable;window.social.reco.isEnabled=avsr.main.isEnabled;window.social.reco.getReco=avsr.main.getReco;window.social.reco.notifyAction=avsr.main.notifyAction;window.social.reco.notifyWidgetDisplayed=avsr.main.notifyWidgetDisplayed;window.social.reco.notifyProductDisplayed=avsr.main.notifyProductDisplayed;window.social.reco.updateDatalayer=avsr.main.updateDatalayer;U("identityLoaded",function(){});avsr.utils.callInternal(avsr.specifics.preStart,!0,"presStart")?w({onDatalayerValid:function(){k(function(){R("apiLoaded");
!0!==e&&R("identityLoaded");avsr.utils.callInternal(avsr.specifics.postStart,!1,"postStart")})},onDatalayerInvalid:function(){avsr.log("AntVoice library initialization cancelled by datalayer checking","info","startApi")}}):avsr.log("AntVoice library initialization cancelled by preStart","info","startApi")})},platformReady:K,getAbsoluteUrl:function(a,c){avsr.utils.getSpecificsConf().isUseAvadsUrl&&(c=!0);var d=!0===c?A:z;"/"==d[d.length-1]&&"/"==a[0]&&(a=a.substr(1));return window.avsr.stringHelper.format("{0}{1}",
d,a)},onload:[],initIdentity:function(a){L()&&E("apiLoaded",function(){avsr.auth.initUser(a,function(){R("identityLoaded")})})},notifyAction:l,notifyTagAction:function(a){e(a,avsr.activities.notifyTagAction,_sr.consts.NOTIFY_TAG_ACTION)},isBrowserSupported:function(){null===C&&((C=avsr.browserSupport.isSupported())||avsr.browserSupport.isDisabledFunctionalities()||window.avsr.monitoring.logCall("BrowserNotSupported"));return C},enable:function(a,c){L({callback:c})&&K(function(){avsr.recommendation.enableRecommendation(!0,
a,c,!1)})},disable:function(a,c){L({callback:c})&&K(function(){avsr.recommendation.enableRecommendation(!1,a,c)})},isEnabled:function(a,c){L()?avsr.recommendation.isRecommendationEnabled(a,c):c&&_$.isFunction(c)&&c()},isEnabledRecoAds:function(a,c){L()?avsr.recommendation.isAdsEnabled(a,c):c&&_$.isFunction(c)&&c()},getOptOutDatas:function(a,c){L()?avsr.recommendation.getDisabledDatas(a):c&&_$.isFunction(c)&&c({isEnabledAds:!0,isEnabledReco:!0})},getReco:function(a,c,d){L()&&K(function(){var e=!1;
avsr.utils.getSpecificsConf().isUseAvadsUrl?e=!0:0<a.length&&(e=a[0].isUseAvadsUrl?!0:!1);D(function(g){if(g.isEnabledReco&&!e||g.isEnabledAds&&e)if(window.antvoice_variable)if(a){for(g=0;g<a.length;g++){var k=avsr.recoDatalayer.getMode(a[g]);"simple"===k&&void 0!==window.avsr.specifics.areaMapping&&(a[g]=avsr.recoDatalayer.updateRecoDatalayer(a[g]),a[g].strategies&&a[g].support&&a[g].rendering&&a[g].rendering.mode||avsr.logDatalayerErrors("getReco: E: recoDatalayer.strategies, recoDatalayer.support, recoDatalayer.rendering or recoDatalayer.rendering.mode is undefined.",
!0));"simple"!==k&&"advanced"!=k&&avsr.logDatalayerErrors("getReco: E: The datalayer mode is neither advanced nor simple.",!0)}avsr.recommendation.getReco(a,c,d)}else avsr.logDatalayerErrors("request: E: No recommendation requests",!0),d&&d();else avsr.logDatalayerErrors("request: E: Could not get antvoice_variable",!0),d&&d()})})},notifyWidgetDisplayed:function(a){L(a)&&K(function(){Q()&&_sr.isEnabled(function(){avsr.activities.notifyWidgetDisplayed(a)},function(){a&&a.callback&&d(a.callback,900)})})},
notifyProductDisplayed:function(a){L(a)&&K(function(){Q()&&_sr.isEnabled(function(){avsr.activities.notifyProductDisplayed(a)},function(){a&&a.callback&&d(a.callback,900)})})},updateDatalayer:function(){L()&&K(function(){w({onDatalayerValid:function(){avsr.utils.callInternal(avsr.specifics.postFillDatalayer,!1,"postFillDatalayer")},onDatalayerInvalid:function(){avsr.log("AntVoice library datalayer update cancelled by datalayer checking","info","startApi")}})})},logout:function(a){L({callback:a})&&
K(function(){avsr.auth.logOut({callback:a})})},contentUrl:t,contentUrlAvads:document.location.protocol+"//img.avads.net/",isUserInTestGroup:function(a){L({callback:a})&&K(function(){"undefined"!==typeof a&&_$.isFunction(a)&&a(avsr.auth.isAbTestGroup())})},getStorageAccess:Y,stringify:function(a){if("undefined"!==typeof Prototype&&1.7>parseFloat(Prototype.Version.substr(0,3))&&"undefined"!==typeof Array.prototype.toJSON){var c=Array.prototype.toJSON;delete Array.prototype.toJSON;a=JSON.stringify(a);
Array.prototype.toJSON=c;return a}return JSON.stringify(a)},loadCss:function(a){if(!avsr.specifics.noCss&&!H){var c=a?avsr.main.contentUrlAvads:avsr.main.contentUrl;!a&&avsr.utils.getSpecificsConf().isUseAvadsUrl&&(c=avsr.main.contentUrlAvads);c+="social.reco.recommendation."+avsr.utils.getSpecificsConf().project.cssKey+".css".replace("http: ",document.location.protocol+":");a=window.loadCSS(c);window.onloadCSS(a,function(){window.avsr.consoleLog("info","Css Loaded");H=!0})}},ensureCssLoaded:u,onCallSuccess:function(){try{avsr.auth.cleanTmpCookie()}catch(r){avsr.logException("An error occured while cleaning tmp cookies",
"onCallSuccess",r)}},enforceDnt:!1}}();window._sr=window._sr||{consts:{DL_OK:0,DL_ERR:1,DL_NOTUSED:2,NODE_OK:10,NODE_ERR:11,NODE_EMPTY:12,NODE_INCOMPLETE:13,RECO:100,NOTIFY_ACTION:101,NOTIFY_TAG_ACTION:102}};window._sr._start=avsr.main.startApi;

window.avsr = window.avsr || {};
window.avsr.specifics = window.avsr.specifics || (function () {

    String.prototype.av_hashFnv32a = function (asString, seed) {
        return window.avsr.stringHelper.av_hashFnv32a(this, asString, seed);
    };

    var clientSpecConfiguration =
    {
        availability: {
            isRecoEnabled: true,
            isUserActionsEnabled: true,
            isTimeLoggingEnabled: true,
            logParametersInQuery: false,
            isCallLoggingEnabled: true,
            isRecommendationCached: false,
            disabledActionsList: [],
            auditIdentity: true
        }, // + param tracking par redirections => cf ci dessous
        templateKey: "voici",
        isCrossDomain: true,
        project: { "Id": 62, "groupKey": "PRISMA", "cssKey": "VOICI" },
        configurations: { serverSideStrategies: true },
        tracking: {},
        gdpr: {
            noCollect: false, // Permet d'empêcher la collecte
            isPublisherOwnCmp: false, // Si c'est true, alors ce paramètre va de paire avec le suivant
            hasConsent: null
        },authorizedCookiePartner: [
            window.avsr.thirdPartyPartners.appnexus,
            window.avsr.thirdPartyPartners.google,
            window.avsr.thirdPartyPartners.rubicon,
            window.avsr.thirdPartyPartners.smartad, 
            window.avsr.thirdPartyPartners.freewheel
        ],
    };

    //AB TAsty Conf
    if (window.location && window.location.hash) {
        var encHash = window.location.hash.substring(1);
        if (encHash.indexOf("embedEditor=") != -1) {
            clientSpecConfiguration.isCrossDomain = false;
            clientSpecConfiguration.tracking.useRedirect = true;
        }
    }
    if (window.location && window.location.search) {
        var encQuery = window.location.search.substring(1);
        if (encQuery.indexOf("embedEditor=") != -1) {
            clientSpecConfiguration.isCrossDomain = false;
            clientSpecConfiguration.tracking.useRedirect = true;
        }
    }
    if (window.ABTastyEditor) {
        clientSpecConfiguration.isCrossDomain = false;
        clientSpecConfiguration.tracking.useRedirect = true;
    }

    // Hook particuliers

    /* Reco est un objet qui contient les propriétés suivantes :
		{ 
			r: 
				[{
					items: response.data.items,
					owners: response.data.owners,
					recoGuid: response.data.recoGuid,
					log: response.data.log,
					isAbTesting: response.data.isAbTesting,
					isActive: response.data.isActive
				}],
			totalItems: response.data.items.length, 
			gId: response.data.recoGuid // id de groupe de reco
		}
	*/

    var startTemplating = function (params, reco) { //Avant templating (HTML ou JSON)

        
        return true; // Pour annuler le templating
    }

    // pre et postTemplating seront appelé à priori pour chaque groupe. Donc il n'y aura qu'un recoContainer par appel
    var endTemplating = function (params, reco, recoContainers) {
        //Après templating (HTML ou JSON (si faisable)) -> le tableau recoContainers contient les objets Jquery répondant au sélecteur '[data-sr-recoid = "XXXX"]'	
        return true; // Pour annuler l'appel	
    }


    // GetRecommendation

    var startGetReco = function (params) {
        return true; // Pour annuler l'appel
    }

    var preGetReco = function (params) { //Avant appel Serveur récupération Reco
        return true; // Pour annuler l'appel
    }

    var postGetReco = function (params, response) { // Après retour Serveur récupération Reco
        return true; // Pour annuler l'appel
    }

    var endGetReco = function (params) {
    }


    // NotifyAction

    var startNotifyAction = function (params) {
        return true; // Pour annuler l'appel
    }

    var preNotifyAction = function (params) { //Avant notification d'une action
        return true; // Pour annuler le notify
    }

    var postNotifyAction = function (params, response) { //Après notification d'une action
        return true; // Pour annuler l'appel		
    }

    var endNotifyAction = function (params) {
    }


    // NotifyTagAction

    var startNotifyTagAction = function (params) {
        return true; // Pour annuler l'appel
    }

    var preNotifyTagAction = function (params) { //Avant notification d'une action
        return true; // Pour annuler le notify
    }

    var postNotifyTagAction = function (params, response) { //Après notification d'une action
        return true; // Pour annuler l'appel		
    }

    var endNotifyTagAction = function (params) {
    }


    // Init calls

    var preStart = function () {
        //Si il y avait du code à la suite du specifics c'est dans ces fonctions qu'il doit aller (y compris le _sr.init/_sr.start)

        return true;  //Permet d'empêcher le chargement de la librairie
    }

    var fillDatalayer = function () {

        if (!window.antvoice_variable)
            window.antvoice_variable = {};
            
        if (window.antvoice_variable.page.type == "ProductPage") {
            
            fillDatalayerGeneric();
            var meta;
            var metaContent;


            if (window.antvoice_variable.product && window.antvoice_variable.product.pictures) {
                var originalPics = _$.merge([], window.antvoice_variable.product.pictures);
                window.antvoice_variable.product.pictures = [];
                for (var i = 0, l = originalPics.length; i < l; i++) {
                    window.antvoice_variable.product.pictures.push(originalPics[i]);
                    if (originalPics[i].url.indexOf('pmdstatic.net') == -1) {
                        obj = {};
                        obj.url = ('//img.tra.pmdstatic.net/fit/' + encodeURIComponent(originalPics[i].url.replace(/\./g, '.2E')) + '/210x160/quality/100/' + encodeURIComponent("VOI" + window.antvoice_variable.product.id + '-' + i + '210') + '.jpg').replace(/%/g, '.');
                        window.antvoice_variable.product.pictures.push(obj);
                    } else {
                        var match = originalPics[i].url.match(/pmdstatic\.net\/[a-z]+\/(.*?)\/[0-9]+x[0-9]+/);
                        if (match && match.length == 2) {
                            obj = {};
                            obj.url = ('//img.tra.pmdstatic.net/fit/' + match[1] + '/210x160/quality/100/' + encodeURIComponent("VOI" + window.antvoice_variable.product.id + '-' + i + '210') + '.jpg');
                            window.antvoice_variable.product.pictures.push(obj);
                        }
                    }
                }
            }

            //Properties && Categ Tags	
            if (!window.antvoice_variable.product.properties)
                window.antvoice_variable.product.properties = {};
            if (window.antvoice_variable.product.pictures && window.antvoice_variable.product.pictures.length > 0) {
                window.antvoice_variable.product.properties.WithImage = "true";
            } else {
                window.antvoice_variable.product.properties.WithImage = "false";
            }
            
            meta = _$("meta[itemprop='dateModified']");
            if (meta && meta.length > 0 && meta.attr("content")) {
                metaContent = meta.attr("content");
                window.antvoice_variable.product.properties.DateModified = metaContent;
            }
            if(!window.antvoice_variable.product.properties.WithVideo){
                if ((_$('.video-js').length > 0)
                    || (_$('iframe[src*="vimeo"]').length > 0)
                    || (_$('iframe[src*="youtube"]').length > 0)
                    || (_$('iframe[src*="ultimedia"]').length > 0)
                    || (_$('.dmp_StartView').length > 0)
                    || (_$('video[src*="dailymotion"]').length > 0)
                    || (_$('video[src*="facebook"]').length > 0)
                    || (_$('video[src*="youtube"]').length > 0)
                    || (_$('object[data*="brightcove"]').length > 0)) {
                    if (window.antvoice_variable.product.properties)
                        window.antvoice_variable.product.properties.WithVideo = "true";
                }
            }

            if (window.antvoice_variable && window.antvoice_variable.product && window.antvoice_variable.product.name && window.antvoice_variable.product.name.indexOf("404") > -1) {
                delete window.antvoice_variable.product;
                window.antvoice_variable.page.type = "ErrorPage";
            }
        }
        return true; //Permet d'empêcher l'utilisation de la librairie
    }

    var fillDatalayerGeneric = function () {
        try {
            var jsonScriptSel = _$('script[type="application/ld+json"]');
            var jsonLD;
            var breadcrumb;
            var jsonScript;
            if (jsonScriptSel) {
                for (var c = 0; c < jsonScriptSel.length; c++) {
                    jsonScript = _$(jsonScriptSel[c]);
                    if (!!jsonScript && !!jsonScript.html()) {
                        jsonScript = jsonScript.html();

                        if (JSON.parse(jsonScript)["@type"] == "BreadcrumbList" || JSON.parse(jsonScript)["@type"] == "BreadCrumbList") {
                            breadcrumb = JSON.parse(jsonScript);
                            //console.log("breadcrumb: " + JSON.stringify(JSON.parse(jsonScript)));
                        } else if (
                            JSON.parse(jsonScript)["@type"] == "NewsArticle" ||
                            JSON.parse(jsonScript)["@type"] == "Article" ||
                            JSON.parse(jsonScript)["@type"] == "TVEpisode" ||
                            JSON.parse(jsonScript)["@type"] == "Movie" ||
                            JSON.parse(jsonScript)["@type"] == "VideoObject" || 
                            JSON.parse(jsonScript)["@type"] == "Recipe"
                        ) {
                            jsonLD = JSON.parse(jsonScript);
                        }
                    }
                }
            }
        } catch (e) {
            var ap = {
                err: "An exception occured. " + e,
                type: 0,
                href: document.location.href,
                oId: avsr.utils.getSpecificsConf().project.Id,
                mId: avsr.auth.getIdentity().mId
            };
            avsr.ajax.post(avsr.main.getAbsoluteUrl("/Datalayer/Report"), ap);
        }

        var tmp = null;

        if (!window.antvoice_variable) window.antvoice_variable = {};
        if (!window.antvoice_variable.product) window.antvoice_variable.product = {};
        if (!window.antvoice_variable.product.properties) window.antvoice_variable.product.properties = {};

        // ---------------------------------------------------------------
        //                              URL
        // ---------------------------------------------------------------

        window.antvoice_variable.product.url = null;

        try {
            if (jsonLD) {
                if (jsonLD.mainEntityOfPage) {
                    tmp = jsonLD.mainEntityOfPage;
                    if(tmp["@id"]){
                        tmp = tmp["@id"];
                    }
                    window.antvoice_variable.product.url = tmp ? tmp : null;
                } else if (jsonLD.url) {
                    window.antvoice_variable.product.url = jsonLD.url;
                } else {
                    tmp = jsonLD.mainEntityOfPage;
                    window.antvoice_variable.product.url = tmp ? tmp : null;
                }
            }
            if (!window.antvoice_variable.product.url && _$("meta[property='og:url']").length > 0) {
                //BBO
                tmp = _$("meta[property='og:url']")["content"];
                window.antvoice_variable.product.url = tmp ? tmp : null;
            }
            if (!window.antvoice_variable.product.url && _$("meta[name='parsely-link']").length > 0) {
                //BBO
                tmp = _$("meta[name='parsely-link']").attr("content");
                window.antvoice_variable.product.url = tmp ? tmp : null;
            }
            if(!window.antvoice_variable.product.url){
                window.antvoice_variable.product.url = window.location.href;
            }
        } catch (e) {
            var ap = {
                err: "An exception occured while setting Url : " + e,
                type: 0,
                href: document.location.href,
                oId: avsr.utils.getSpecificsConf().project.Id,
                mId: avsr.auth.getIdentity().mId
            };
            avsr.ajax.post(avsr.main.getAbsoluteUrl("/Datalayer/Report"), ap);
        }
        // ---------------------------------------------------------------
        //                              ID
        // ---------------------------------------------------------------

        window.antvoice_variable.product.id = null;
        try {
            // recup depuis l'URL (apres l'avant dernier "/" de l'url si terminée par un "/")
            tmp = window.antvoice_variable.product.url.match("^.*?/([0-9][0-9][0-9]+)-[A-Za-z-_.]+/?");
            if (tmp) {
                window.antvoice_variable.product.id = tmp[1] ? tmp[1] : null;
            }
            if (!window.antvoice_variable.product.id) {
                tmp = window.antvoice_variable.product.url.match("^.*?\/(?:[0-9A-Za-z-.]+\/)*[0-9A-Za-z-.]+[-_]((?:art)?[0-9][0-9][0-9]+)[^-]");
                if (tmp) {
                    window.antvoice_variable.product.id = tmp[1] ? tmp[1] : null;
                }
            }

            // sinon, hash Url à partir de // sans le last / ni ? ou # (ex : https://google.com/test/?val=10#res => //google.com/test)
            if (!window.antvoice_variable.product.id) {
                //nettoyer url avant envoi
                var cleanUrl = "//";
                cleanUrl += window.location.hostname;
                cleanUrl += window.location.pathname;
                if (cleanUrl[cleanUrl.length - 1] == "/") {
                    cleanUrl = cleanUrl.substring(0, cleanUrl.length - 1);
                }
                _$.ajax({
                    type: "POST",
                    url: "https://social-reco.antvoice.com/demo/hash/hash",
                    data: { text: cleanUrl },
                    success: function (value) {
                        window.antvoice_variable.product.id = value.hash;
                        url = cleanUrl; //BBO
                    },
                    async: false
                });
            }
            //console.log("hash: "+ JSON.stringify(id));
        } catch (e) {
            var ap = {
                err: "An exception occured while setting Id : " + e,
                type: 0,
                href: document.location.href,
                oId: avsr.utils.getSpecificsConf().project.Id,
                mId: avsr.auth.getIdentity().mId
            };
            avsr.ajax.post(avsr.main.getAbsoluteUrl("/Datalayer/Report"), ap);
        }

        // ---------------------------------------------------------------
        //                            TITLE
        // ---------------------------------------------------------------

        window.antvoice_variable.product.name = null;
        // recup title JSON ld ou meta
        try {
            if (jsonLD) {
                tmp = jsonLD.headline;
                window.antvoice_variable.product.name = tmp ? tmp : null;

                if (!window.antvoice_variable.product.name) {
                    tmp = jsonLD.name;
                    window.antvoice_variable.product.name = tmp ? tmp : null;
                }
            }

            tmp = _$("meta[property='og:title']"); //BBO
            if (!window.antvoice_variable.product.name && tmp && tmp.attr("content") && (tmp = tmp.attr("content").match(new RegExp("^(.*?)(?:- Voici)?$")))) {
                //BBO
                window.antvoice_variable.product.name = tmp.length > 0 ? tmp[1] : null; //BBO
            }
            if (!window.antvoice_variable.product.name && _$("meta[property='og:title']").length > 0) {
                //BBO
                tmp = _$("meta[property='og:title']").attr("content");
                window.antvoice_variable.product.name = tmp ? tmp : null;
            }
            if (!window.antvoice_variable.product.name && _$("meta[name='parsely-title']").length > 0) {
                //BBO
                tmp = _$("meta[name='parsely-title']").attr("content");
                window.antvoice_variable.product.name = tmp ? tmp : null;
            }
        } catch (e) {
            var ap = {
                err: "An exception occured while setting Name :  " + e,
                type: 0,
                href: document.location.href,
                oId: avsr.utils.getSpecificsConf().project.Id,
                mId: avsr.auth.getIdentity().mId
            };
            avsr.ajax.post(avsr.main.getAbsoluteUrl("/Datalayer/Report"), ap);
        }

        // ---------------------------------------------------------------
        //                          DESCRIPTION
        // ---------------------------------------------------------------

        window.antvoice_variable.product.description = null;

        try {
            if (jsonLD) {
                tmp = jsonLD.description;
                window.antvoice_variable.product.description = tmp ? tmp : null;

                if (!window.antvoice_variable.product.description) {
                    tmp = jsonLD.alternativeHeadline;
                    window.antvoice_variable.product.description = tmp ? tmp : null;
                }
                if (!window.antvoice_variable.product.description && jsonLD.video) {
                    tmp = jsonLD.video.description;
                    window.antvoice_variable.product.description = tmp ? tmp : null;
                }
            }
            if (!window.antvoice_variable.product.description && _$("meta[property='og:description']").length > 0) {
                //BBO
                tmp = _$("meta[property='og:description']").attr("content");
                window.antvoice_variable.product.description = tmp ? tmp : null;
            }
            if (!window.antvoice_variable.product.description && _$("meta[name='description']").length > 0) {
                //BBO
                tmp = _$("meta[name='description']").attr("content");
                window.antvoice_variable.product.description = tmp ? tmp : null;
            }
        } catch (e) {
            var ap = {
                err: "An exception occured while setting Description : " + e,
                type: 0,
                href: document.location.href,
                oId: avsr.utils.getSpecificsConf().project.Id,
                mId: avsr.auth.getIdentity().mId
            };
            avsr.ajax.post(avsr.main.getAbsoluteUrl("/Datalayer/Report"), ap);
        }

        // ---------------------------------------------------------------
        //                          IMAGE URL
        // ---------------------------------------------------------------

        window.antvoice_variable.product.pictures = null;

        try {
            if (jsonLD) {
                if (jsonLD.image) {
                    tmp = jsonLD.image.url;
                    window.antvoice_variable.product.pictures = tmp ? [{ url: tmp }] : null;
                }
            }
            //au cas où l'article contienne un array d'images
            if (!window.antvoice_variable.product.pictures && _$("meta[property='og:image']").length > 0) {
                //BBO
                if (_$("meta[property='og:image']")[0].content) {
                    window.antvoice_variable.product.pictures = [];
                    for (var i = 0; i < _$("meta[property='og:image']").length; i++) {
                        //BBO ????
                        window.antvoice_variable.product.pictures.push({ url: _$("meta[property='og:image']")[i].content });
                    }
                }

                if (!window.antvoice_variable.product.pictures && _$("meta[property='og:image']").length > 0) {
                    //BBO
                    tmp = _$("meta[property='og:image']").attr("content");
                    window.antvoice_variable.product.pictures = tmp ? [{ url: tmp }] : null;
                }
            }

            if (window.antvoice_variable.product.pictures && window.antvoice_variable.product.pictures.length == 1) {
                window.antvoice_variable.product.pictures = [window.antvoice_variable.product.pictures[0]];
            }
        } catch (e) {
            var ap = {
                err: "An exception occured while setting Pictures : " + e,
                type: 0,
                href: document.location.href,
                oId: avsr.utils.getSpecificsConf().project.Id,
                mId: avsr.auth.getIdentity().mId
            };
            avsr.ajax.post(avsr.main.getAbsoluteUrl("/Datalayer/Report"), ap);
        }

        // ---------------------------------------------------------------
        //                          WITH VIDEO
        // ---------------------------------------------------------------

        try {
            if(jsonLD && jsonLD.video){
                window.antvoice_variable.product.properties.WithVideo = "true";
            }
            if(window.antvoice_variable.product.properties.isVideo){
                window.antvoice_variable.product.properties.WithVideo = "true";
            }
        }catch (e){
            var ap = {
                err: "An exception occured while setting WithVideo parameter : " + e,
                type: 0,
                href: document.location.href,
                oId: avsr.utils.getSpecificsConf().project.Id,
                mId: avsr.auth.getIdentity().mId
            };
            avsr.ajax.post(avsr.main.getAbsoluteUrl("/Datalayer/Report"), ap);
        }

        // ---------------------------------------------------------------
        //                             META
        // ---------------------------------------------------------------

        window.antvoice_variable.product.properties.MetaCategory = null;

        try {
            if (jsonLD) {
                tmp = jsonLD["@type"];
                window.antvoice_variable.product.properties.MetaCategory = tmp ? tmp : null;
            }
            if (!window.antvoice_variable.product.properties.MetaCategory) {
                tmp = window.location.hostname;
                if (tmp.includes("test")) {
                    window.antvoice_variable.product.properties.MetaCategory = "test";
                } else if (tmp.includes("quiz")) {
                    window.antvoice_variable.product.properties.MetaCategory = "quiz";
                }
            }

            if (!window.antvoice_variable.product.properties.MetaCategory) {
                tmp = _$("meta[property='article:section']")
                    .attr("content")
                    .toLowerCase();
                if (tmp && (tmp.includes("tests") || tmp.includes("test"))) {
                    window.antvoice_variable.product.properties.MetaCategory = "test";
                } else if (tmp && (tmp.includes("quiz") || tmp.includes("Quizz"))) {
                    window.antvoice_variable.product.properties.MetaCategory = "quiz";
                }
            }

            if (!window.antvoice_variable.product.properties.MetaCategory) {
                tmp = _$("meta[property='og:type']").attr("content");
                window.antvoice_variable.product.properties.MetaCategory = tmp ? tmp : null;
            }

            if (!window.antvoice_variable.product.properties.MetaCategory) {
                tmp = _$("meta[name='parsely-type']").attr("content");
                window.antvoice_variable.product.properties.MetaCategory = tmp ? tmp : null;
            }

            window.antvoice_variable.product.properties.MetaCategory = window.antvoice_variable.product.properties.MetaCategory
                ? window.antvoice_variable.product.properties.MetaCategory.toLowerCase()
                : null;
        } catch (e) {
            var ap = {
                err: "An exception occured while setting MetaCategory : " + e,
                type: 0,
                href: document.location.href,
                oId: avsr.utils.getSpecificsConf().project.Id,
                mId: avsr.auth.getIdentity().mId
            };
            avsr.ajax.post(avsr.main.getAbsoluteUrl("/Datalayer/Report"), ap);
        }

        // ---------------------------------------------------------------
        //                           CATEGORY
        // ---------------------------------------------------------------
        var fromArticleSection = false;
        var subCatIndex = null;
        window.antvoice_variable.product.properties.Category = null;
        try {
            if (
                breadcrumb &&
                breadcrumb.itemListElement &&
                ((breadcrumb.itemListElement[0] && breadcrumb.itemListElement[0].item) || (breadcrumb.itemListElement[1] && breadcrumb.itemListElement[1].item))
            ) {
                if (breadcrumb.itemListElement.length == 2 && breadcrumb.itemListElement[0].item) {
                    //BBO
                    tmp = breadcrumb.itemListElement[0].item.name;
                    window.antvoice_variable.product.properties.Category = tmp ? tmp : null;
                } else if (breadcrumb.itemListElement.length == 3 && breadcrumb.itemListElement[1].item) {
                    //BBO
                    tmp = breadcrumb.itemListElement[1].item.name;
                    window.antvoice_variable.product.properties.Category = tmp ? tmp : null;
                } else {
                    for (var i = 0; i < breadcrumb.itemListElement.length; i++) {
                        if (breadcrumb.itemListElement[i].item && breadcrumb.itemListElement[i].item["@id"]) {
                            //BBO
                            subCatIndex = i;
                        }
                    }
                    tmp = subCatIndex > 0 && breadcrumb.itemListElement[subCatIndex - 1] && breadcrumb.itemListElement[subCatIndex - 1].item ? breadcrumb.itemListElement[subCatIndex - 1].item.name : null; //BBO
                    window.antvoice_variable.product.properties.Category = tmp ? tmp : null;
                }
            }
            if (!window.antvoice_variable.product.properties.Category && jsonLD && jsonLD.genre) {
                window.antvoice_variable.product.properties.Category = jsonLD.genre;
            }

            if (!window.antvoice_variable.product.properties.Category && _$("meta[property='article:section']").length > 0) {
                //BBO
                tmp = _$("meta[property='article:section']").attr("content");
                window.antvoice_variable.product.properties.Category = tmp ? tmp : null;
            }

            if (!window.antvoice_variable.product.properties.Category && _$("meta[name='parsely-section']").length > 0) {
                //BBO
                tmp = _$("meta[name='parsely-section']").attr("content");
                window.antvoice_variable.product.properties.Category = tmp ? tmp : null;
                fromArticleSection = true;
            }

            window.antvoice_variable.product.properties.Category = window.antvoice_variable.product.properties.Category ? window.antvoice_variable.product.properties.Category.toLowerCase() : null;
        } catch (e) {
            var ap = {
                err: "An exception occured while setting Category : " + e,
                type: 0,
                href: document.location.href,
                oId: avsr.utils.getSpecificsConf().project.Id,
                mId: avsr.auth.getIdentity().mId
            };
            avsr.ajax.post(avsr.main.getAbsoluteUrl("/Datalayer/Report"), ap);
        }
        // ---------------------------------------------------------------
        //                         SUB-CATEGORY
        // ---------------------------------------------------------------

        window.antvoice_variable.product.properties.SubCategory = null;

        try {
            if (
                breadcrumb &&
                breadcrumb.itemListElement &&
                ((breadcrumb.itemListElement[2] && breadcrumb.itemListElement[2].item) || (breadcrumb.itemListElement[1] && breadcrumb.itemListElement[1].item))
            ) {
                if (breadcrumb.itemListElement.length == 2 && breadcrumb.itemListElement[1].item) {
                    //BBO
                    tmp = breadcrumb.itemListElement[1].item.name;
                    window.antvoice_variable.product.properties.SubCategory = tmp ? tmp : null;
                } else if (breadcrumb.itemListElement.length == 3 && breadcrumb.itemListElement[2].item) {
                    //BBO
                    tmp = breadcrumb.itemListElement[2].item.name;
                    window.antvoice_variable.product.properties.SubCategory = tmp ? tmp : null;
                } else {
                    tmp = subCatIndex > 0 && breadcrumb.itemListElement[subCatIndex] && breadcrumb.itemListElement[subCatIndex].item ? breadcrumb.itemListElement[subCatIndex].item.name : null; //BBO
                    window.antvoice_variable.product.properties.SubCategory = tmp ? tmp : null;
                }
            }
            if (!window.antvoice_variable.product.properties.SubCategory && jsonLD) {
                tmp = jsonLD.articleSection;
                window.antvoice_variable.product.properties.SubCategory = tmp ? tmp : null;
            }

            if (!window.antvoice_variable.product.properties.SubCategory && !fromArticleSection && _$("meta[name='parsely-section']") > 0) {
                //BBO
                tmp = _$("meta[name='parsely-section']").attr("content");
            }

            window.antvoice_variable.product.properties.SubCategory = window.antvoice_variable.product.properties.SubCategory
                ? window.antvoice_variable.product.properties.SubCategory.toLowerCase()
                : null;
        } catch (e) {
            var ap = {
                err: "An exception occured  while setting SubCategory : " + e,
                type: 0,
                href: document.location.href,
                oId: avsr.utils.getSpecificsConf().project.Id,
                mId: avsr.auth.getIdentity().mId
            };
            avsr.ajax.post(avsr.main.getAbsoluteUrl("/Datalayer/Report"), ap);
        }
        // ---------------------------------------------------------------
        //                            TAGS
        // ---------------------------------------------------------------

        window.antvoice_variable.tags = [];

        try {
            if (jsonLD && jsonLD.keywords && jsonLD.keywords.length > 0) {
                if (typeof jsonLD.keywords == "string") {
                    tmp = jsonLD.keywords.split(",");
                } else if (typeof jsonLD.keywords == "object") {
                    tmp = jsonLD.keywords;
                }
                for (var i = 0; i < jsonLD.keywords.length; i++) {
                    window.antvoice_variable.tags.push({
                        type: "Generic",
                        name: tmp[i].toLowerCase(),
                        action: window.antvoice_variable.project.toUpperCase() + "_Generic_View"
                    });
                }
            }
        } catch (e) {
            var ap = {
                err: "An exception occured while setting Action Tags with jsonLD : " + e,
                type: 0,
                href: document.location.href,
                oId: avsr.utils.getSpecificsConf().project.Id,
                mId: avsr.auth.getIdentity().mId
            };
            avsr.ajax.post(avsr.main.getAbsoluteUrl("/Datalayer/Report"), ap);
        }
        try {
            if (window.antvoice_variable.tags.length < 1 && _$("meta[name='parsely-tags']").length > 0) {
                //BBO
                tmp = _$("meta[name='parsely-tags']").attr("content");
                tmp = tmp ? tmp.split(",") : null;
                if (tmp) {
                    for (var i = 0; i < tmp.length; i++) {
                        window.antvoice_variable.tags.push({
                            type: "Generic",
                            name: tmp[i].toLowerCase(),
                            action: window.antvoice_variable.project.toUpperCase() + "_Generic_View"
                        });
                    }
                }
            }
        } catch (e) {
            var ap = {
                err: "An exception occured while setting Action Tags with meta[name='parsely-tags'] : " + e,
                type: 0,
                href: document.location.href,
                oId: avsr.utils.getSpecificsConf().project.Id,
                mId: avsr.auth.getIdentity().mId
            };
            avsr.ajax.post(avsr.main.getAbsoluteUrl("/Datalayer/Report"), ap);
        }

        try {
            if (window.antvoice_variable.tags.length < 1) {
                tmp = _$("meta[property='article:tag']");
                if (tmp && tmp.length > 0) {
                    if (typeof tmp == "object") {
                        for (var i = 0; i < tmp.length; i++) {
                            if (tmp[i].content) {
                                window.antvoice_variable.tags.push({
                                    type: "Generic",
                                    name: tmp[i].content.toLowerCase(),
                                    action: window.antvoice_variable.project.toUpperCase() + "_Generic_View"
                                });
                            }
                        }
                    } else if (typeof tmp == "string") {
                        if (tmp.content) {
                            window.antvoice_variable.tags.push({
                                type: "Generic",
                                name: tmp.content.toLowerCase(),
                                action: window.antvoice_variable.project.toUpperCase() + "_Generic_View"
                            });
                        }
                    }
                }
            }
        } catch (e) {
            var ap = {
                err: "An exception occured while setting Action Tags with meta[property='article:tag'] : " + e,
                type: 0,
                href: document.location.href,
                oId: avsr.utils.getSpecificsConf().project.Id,
                mId: avsr.auth.getIdentity().mId
            };
            avsr.ajax.post(avsr.main.getAbsoluteUrl("/Datalayer/Report"), ap);
        }

        try {
            if (window.antvoice_variable.tags.length < 1) {
                tmp = _$('meta[itemprop="keywords"]');
                if (tmp && tmp.length > 0) {
                    if (typeof tmp == "object") {
                        for (var i = 0; i < tmp.length; i++) {
                            if (tmp[i].content) {
                                window.antvoice_variable.tags.push({
                                    type: "Generic",
                                    name: tmp[i].content.toLowerCase(),
                                    action: window.antvoice_variable.project.toUpperCase() + "_Generic_View"
                                });
                            }
                        }
                    } else if (typeof tmp == "string") {
                        if (tmp.content) {
                            window.antvoice_variable.tags.push({
                                type: "Generic",
                                name: tmp.content.toLowerCase(),
                                action: window.antvoice_variable.project.toUpperCase() + "_Generic_View"
                            });
                        }
                    }
                }
            }
        } catch (e) {
            var ap = {
                err: "An exception occured while setting Action Tags with meta[itemprop='keywords'] : " + e,
                type: 0,
                href: document.location.href,
                oId: avsr.utils.getSpecificsConf().project.Id,
                mId: avsr.auth.getIdentity().mId
            };
            avsr.ajax.post(avsr.main.getAbsoluteUrl("/Datalayer/Report"), ap);
        }
        try {
            if (jsonLD && jsonLD["@type"] == "Movie") {
                tmp = jsonLD.actor;
                if (tmp.length) {
                    for (var i = 0; i < tmp.length; i++) {
                        if (tmp[i] && tmp[i].name) {
                            window.antvoice_variable.tags.push({
                                type: "Generic",
                                name: tmp[i].name,
                                action: window.antvoice_variable.project.toUpperCase() + "_Generic_View"
                            });
                        }
                    }
                }
                tmp = jsonLD.director;
                if (tmp.length) {
                    for (var i = 0; i < tmp.length; i++) {
                        if (tmp[i] && tmp[i].name) {
                            window.antvoice_variable.tags.push({
                                type: "Generic",
                                name: tmp[i].name,
                                action: window.antvoice_variable.project.toUpperCase() + "_Generic_View"
                            });
                        }
                    }
                }
            }
        } catch (e) {
            var ap = {
                err: "An exception occured while setting Action Tags with actors and directors : " + e,
                type: 0,
                href: document.location.href,
                oId: avsr.utils.getSpecificsConf().project.Id,
                mId: avsr.auth.getIdentity().mId
            };
            avsr.ajax.post(avsr.main.getAbsoluteUrl("/Datalayer/Report"), ap);
        }
        try {
            if (window.antvoice_variable.product.properties.SubCategory) {
                window.antvoice_variable.tags.push({
                    type: "Category",
                    name: window.antvoice_variable.product.properties.SubCategory,
                    action: window.antvoice_variable.project.toUpperCase() + "_Category_View"
                });
            }
            if (window.antvoice_variable.product.properties.Category) {
                window.antvoice_variable.tags.push({
                    type: "Category",
                    name: window.antvoice_variable.product.properties.Category,
                    action: window.antvoice_variable.project.toUpperCase() + "_Category_View"
                });
            }
        } catch (e) {
            var ap = {
                err: "An exception occured while setting Action Tag  with categories and subcategories: " + e,
                type: 0,
                href: document.location.href,
                oId: avsr.utils.getSpecificsConf().project.Id,
                mId: avsr.auth.getIdentity().mId
            };
            avsr.ajax.post(avsr.main.getAbsoluteUrl("/Datalayer/Report"), ap);
        }
        // ---------------------------------------------------------------
        //                        DATE PUBLISHED
        // ---------------------------------------------------------------

        window.antvoice_variable.product.properties.DatePublished = null;

        try {
            if (jsonLD) {
                tmp = jsonLD.datePublished;
                window.antvoice_variable.product.properties.DatePublished = tmp ? tmp : null;
            }

            if (!window.antvoice_variable.product.properties.DatePublished && _$("meta[property='article:published_time']").length > 0) {
                //BBO
                tmp = _$("meta[property='article:published_time']").attr("content");
                window.antvoice_variable.product.properties.DatePublished = tmp ? tmp : null;
            }

            if (!window.antvoice_variable.product.properties.DatePublished && _$("meta[name='parsely-pub-date']").length > 0) {
                //BBO
                tmp = _$("meta[name='parsely-pub-date']").attr("content");
                window.antvoice_variable.product.properties.DatePublished = tmp ? tmp : null;
            }

            if (!window.antvoice_variable.product.properties.DatePublished && _$("meta[itemprop='datePublished']").length > 0) {
                //BBO
                tmp = _$("meta[itemprop='datePublished']").attr("content");
                window.antvoice_variable.product.properties.DatePublished = tmp ? tmp : null;
            }
        } catch (e) {
            var ap = {
                err: "An exception occured while setting Date : " + e,
                type: 0,
                href: document.location.href,
                oId: avsr.utils.getSpecificsConf().project.Id,
                mId: avsr.auth.getIdentity().mId
            };
            avsr.ajax.post(avsr.main.getAbsoluteUrl("/Datalayer/Report"), ap);
        }
        // ---------------------------------------------------------------
        //                              STATE
        // ---------------------------------------------------------------

        window.antvoice_variable.product.status = "Inactive"; //BBO
        try {
            if (
                window.antvoice_variable.product.name &&
                window.antvoice_variable.product.id &&
                window.antvoice_variable.product.url &&
                window.antvoice_variable.product.description &&
                window.antvoice_variable.product.pictures &&
                window.antvoice_variable.product.pictures.length > 0 &&
                window.antvoice_variable.product.properties &&
                window.antvoice_variable.product.properties.MetaCategory &&
                window.antvoice_variable.product.properties.DatePublished
            ) {
                window.antvoice_variable.product.status = "Active"; //BBO
            }
        } catch (e) {
            var ap = {
                err: "An exception occured while setting status : " + e,
                type: 0,
                href: document.location.href,
                oId: avsr.utils.getSpecificsConf().project.Id,
                mId: avsr.auth.getIdentity().mId
            };
            avsr.ajax.post(avsr.main.getAbsoluteUrl("/Datalayer/Report"), ap);
        }
        console.log(JSON.stringify(window.antvoice_variable))
    };

    var postStart = function () {

        // Définir les stratégies
        if (!window.antvoice_strategies)
            window.antvoice_strategies =
                [
                    {
                        sId: "s32",
                        name: "PrismaShop Abo",
                        filters: {
                            "AND": [
                                { "ProductType": { values: ["Abo"], filterOperator: "Equals" } },
                                {
                                    "OR": [
                                        { "DurationType": { values: ["ADD"], filterOperator: "Equals" } },
                                        { "DurationType": { values: ["ADI"], filterOperator: "Equals" } }
                                    ]
                                }
                            ]
                        },
                        r: 32,
                        locations: ["ProductPage", "Unspecified"]
                    }

                ];

        //Si il y avait du code à la suite du specifics c'est dans ces fonctions qu'il doit aller (y compris le _sr.init/_sr.start)
        var srUrl = _$("meta[property='og:url']");

        if (srUrl && srUrl.length > 0 && srUrl.attr("content") && window.antvoice_variable.product && window.antvoice_variable.product.url) {
            var srFinalUrl = srUrl.attr("content");
            var res = srFinalUrl.match('^.*?\/([0-9A-Za-z-_\.]+\/)*[0-9A-Za-z-_\.]+[-_]([0-9]+)');
            if (res) {
                window.antvoice_variable.product.id = res[res.length - 1];
            } else {
                if (String.prototype.av_hashFnv32a) {
                    window.antvoice_variable.product.id = window.location.pathname.av_hashFnv32a();
                }
            }
        }

        if (!window.antvoice_variable.page.environment)
            window.antvoice_variable.page.environment = "P";
        if (window.antvoice_variable.page.type == "ProductPage" && window.antvoice_variable.product && window.antvoice_variable.product.url && window.antvoice_variable.product.id) {

            _sr.notifyAction({
                actionName: window.antvoice_variable.project.toUpperCase() + "_View",
                callback: function () {
                    if (window.antvoice_variable.tags && window.antvoice_variable.tags.length > 0) {
                        _sr.notifyTagAction({});
                    }
                }
            });

        }
       

    }

    // Other methods

    var getRecoTriggeringDistance = function (params) {
        return 300;
    }



    return {
        clientSpecConfiguration: clientSpecConfiguration,

        startTemplating: startTemplating,
        endTemplating: endTemplating,

        startGetReco: startGetReco,
        preGetReco: preGetReco,
        postGetReco: postGetReco,
        endGetReco: endGetReco,

        startNotifyAction: startNotifyAction,
        preNotifyAction: preNotifyAction,
        postNotifyAction: postNotifyAction,
        endNotifyAction: endNotifyAction,

        startNotifyTagAction: startNotifyTagAction,
        preNotifyTagAction: preNotifyTagAction,
        postNotifyTagAction: postNotifyTagAction,
        endNotifyTagAction: endNotifyTagAction,

        preStart: preStart,
        fillDatalayer: fillDatalayer,
        postStart: postStart,

        getRecoTriggeringDistance: getRecoTriggeringDistance
    };

})();

if (!window._srAsyncInit) {
    _sr._start();
} else {
    window._srAsyncInit();
}