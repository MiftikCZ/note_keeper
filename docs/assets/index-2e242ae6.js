(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const _ of l)if(_.type==="childList")for(const i of _.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const _={};return l.integrity&&(_.integrity=l.integrity),l.referrerPolicy&&(_.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?_.credentials="include":l.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function r(l){if(l.ep)return;l.ep=!0;const _=n(l);fetch(l.href,_)}})();var I,f,le,S,J,ie,q,M={},ce=[],$e=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function C(e,t){for(var n in t)e[n]=t[n];return e}function se(e){var t=e.parentNode;t&&t.removeChild(e)}function Ce(e,t,n){var r,l,_,i={};for(_ in t)_=="key"?r=t[_]:_=="ref"?l=t[_]:i[_]=t[_];if(arguments.length>2&&(i.children=arguments.length>3?I.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(_ in e.defaultProps)i[_]===void 0&&(i[_]=e.defaultProps[_]);return L(e,i,r,l,null)}function L(e,t,n,r,l){var _={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l??++le};return l==null&&f.vnode!=null&&f.vnode(_),_}function b(e){return e.children}function T(e,t){this.props=e,this.context=t}function D(e,t){if(t==null)return e.__?D(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?D(e):null}function ue(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ue(e)}}function K(e){(!e.__d&&(e.__d=!0)&&S.push(e)&&!U.__r++||J!==f.debounceRendering)&&((J=f.debounceRendering)||ie)(U)}function U(){var e,t,n,r,l,_,i,c;for(S.sort(q);e=S.shift();)e.__d&&(t=S.length,r=void 0,l=void 0,i=(_=(n=e).__v).__e,(c=n.__P)&&(r=[],(l=C({},_)).__v=_.__v+1,z(c,_,l,n.__n,c.ownerSVGElement!==void 0,_.__h!=null?[i]:null,r,i??D(_),_.__h),pe(r,_),_.__e!=i&&ue(_)),S.length>t&&S.sort(q));U.__r=0}function ae(e,t,n,r,l,_,i,c,a,h){var o,v,d,s,p,H,y,g=r&&r.__k||ce,$=g.length;for(n.__k=[],o=0;o<t.length;o++)if((s=n.__k[o]=(s=t[o])==null||typeof s=="boolean"||typeof s=="function"?null:typeof s=="string"||typeof s=="number"||typeof s=="bigint"?L(null,s,null,null,s):Array.isArray(s)?L(b,{children:s},null,null,null):s.__b>0?L(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s)!=null){if(s.__=n,s.__b=n.__b+1,(d=g[o])===null||d&&s.key==d.key&&s.type===d.type)g[o]=void 0;else for(v=0;v<$;v++){if((d=g[v])&&s.key==d.key&&s.type===d.type){g[v]=void 0;break}d=null}z(e,s,d=d||M,l,_,i,c,a,h),p=s.__e,(v=s.ref)&&d.ref!=v&&(y||(y=[]),d.ref&&y.push(d.ref,null,s),y.push(v,s.__c||p,s)),p!=null?(H==null&&(H=p),typeof s.type=="function"&&s.__k===d.__k?s.__d=a=de(s,a,e):a=fe(e,s,d,g,p,a),typeof n.type=="function"&&(n.__d=a)):a&&d.__e==a&&a.parentNode!=e&&(a=D(d))}for(n.__e=H,o=$;o--;)g[o]!=null&&(typeof n.type=="function"&&g[o].__e!=null&&g[o].__e==n.__d&&(n.__d=he(r).nextSibling),ye(g[o],g[o]));if(y)for(o=0;o<y.length;o++)ve(y[o],y[++o],y[++o])}function de(e,t,n){for(var r,l=e.__k,_=0;l&&_<l.length;_++)(r=l[_])&&(r.__=e,t=typeof r.type=="function"?de(r,t,n):fe(n,r,r,l,r.__e,t));return t}function fe(e,t,n,r,l,_){var i,c,a;if(t.__d!==void 0)i=t.__d,t.__d=void 0;else if(n==null||l!=_||l.parentNode==null)e:if(_==null||_.parentNode!==e)e.appendChild(l),i=null;else{for(c=_,a=0;(c=c.nextSibling)&&a<r.length;a+=1)if(c==l)break e;e.insertBefore(l,_),i=_}return i!==void 0?i:l.nextSibling}function he(e){var t,n,r;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(r=he(n)))return r}return null}function Se(e,t,n,r,l){var _;for(_ in n)_==="children"||_==="key"||_ in t||F(e,_,null,n[_],r);for(_ in t)l&&typeof t[_]!="function"||_==="children"||_==="key"||_==="value"||_==="checked"||n[_]===t[_]||F(e,_,t[_],n[_],r)}function Y(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||$e.test(t)?n:n+"px"}function F(e,t,n,r,l){var _;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Y(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Y(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")_=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+_]=n,n?r||e.addEventListener(t,_?X:Q,_):e.removeEventListener(t,_?X:Q,_);else if(t!=="dangerouslySetInnerHTML"){if(l)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t.indexOf("-")==-1?e.removeAttribute(t):e.setAttribute(t,n))}}function Q(e){return this.l[e.type+!1](f.event?f.event(e):e)}function X(e){return this.l[e.type+!0](f.event?f.event(e):e)}function z(e,t,n,r,l,_,i,c,a){var h,o,v,d,s,p,H,y,g,$,N,x,G,P,E,k=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(a=n.__h,c=t.__e=n.__e,t.__h=null,_=[c]),(h=f.__b)&&h(t);try{e:if(typeof k=="function"){if(y=t.props,g=(h=k.contextType)&&r[h.__c],$=h?g?g.props.value:h.__:r,n.__c?H=(o=t.__c=n.__c).__=o.__E:("prototype"in k&&k.prototype.render?t.__c=o=new k(y,$):(t.__c=o=new T(y,$),o.constructor=k,o.render=xe),g&&g.sub(o),o.props=y,o.state||(o.state={}),o.context=$,o.__n=r,v=o.__d=!0,o.__h=[],o._sb=[]),o.__s==null&&(o.__s=o.state),k.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=C({},o.__s)),C(o.__s,k.getDerivedStateFromProps(y,o.__s))),d=o.props,s=o.state,o.__v=t,v)k.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(k.getDerivedStateFromProps==null&&y!==d&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(y,$),!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(y,o.__s,$)===!1||t.__v===n.__v){for(t.__v!==n.__v&&(o.props=y,o.state=o.__s,o.__d=!1),o.__e=!1,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(A){A&&(A.__=t)}),N=0;N<o._sb.length;N++)o.__h.push(o._sb[N]);o._sb=[],o.__h.length&&i.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(y,o.__s,$),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(d,s,p)})}if(o.context=$,o.props=y,o.__P=e,x=f.__r,G=0,"prototype"in k&&k.prototype.render){for(o.state=o.__s,o.__d=!1,x&&x(t),h=o.render(o.props,o.state,o.context),P=0;P<o._sb.length;P++)o.__h.push(o._sb[P]);o._sb=[]}else do o.__d=!1,x&&x(t),h=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++G<25);o.state=o.__s,o.getChildContext!=null&&(r=C(C({},r),o.getChildContext())),v||o.getSnapshotBeforeUpdate==null||(p=o.getSnapshotBeforeUpdate(d,s)),E=h!=null&&h.type===b&&h.key==null?h.props.children:h,ae(e,Array.isArray(E)?E:[E],t,n,r,l,_,i,c,a),o.base=t.__e,t.__h=null,o.__h.length&&i.push(o),H&&(o.__E=o.__=null),o.__e=!1}else _==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=He(n.__e,t,n,r,l,_,i,a);(h=f.diffed)&&h(t)}catch(A){t.__v=null,(a||_!=null)&&(t.__e=c,t.__h=!!a,_[_.indexOf(c)]=null),f.__e(A,t,n)}}function pe(e,t){f.__c&&f.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){f.__e(r,n.__v)}})}function He(e,t,n,r,l,_,i,c){var a,h,o,v=n.props,d=t.props,s=t.type,p=0;if(s==="svg"&&(l=!0),_!=null){for(;p<_.length;p++)if((a=_[p])&&"setAttribute"in a==!!s&&(s?a.localName===s:a.nodeType===3)){e=a,_[p]=null;break}}if(e==null){if(s===null)return document.createTextNode(d);e=l?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s,d.is&&d),_=null,c=!1}if(s===null)v===d||c&&e.data===d||(e.data=d);else{if(_=_&&I.call(e.childNodes),h=(v=n.props||M).dangerouslySetInnerHTML,o=d.dangerouslySetInnerHTML,!c){if(_!=null)for(v={},p=0;p<e.attributes.length;p++)v[e.attributes[p].name]=e.attributes[p].value;(o||h)&&(o&&(h&&o.__html==h.__html||o.__html===e.innerHTML)||(e.innerHTML=o&&o.__html||""))}if(Se(e,d,v,l,c),o)t.__k=[];else if(p=t.props.children,ae(e,Array.isArray(p)?p:[p],t,n,r,l&&s!=="foreignObject",_,i,_?_[0]:n.__k&&D(n,0),c),_!=null)for(p=_.length;p--;)_[p]!=null&&se(_[p]);c||("value"in d&&(p=d.value)!==void 0&&(p!==e.value||s==="progress"&&!p||s==="option"&&p!==v.value)&&F(e,"value",p,v.value,!1),"checked"in d&&(p=d.checked)!==void 0&&p!==e.checked&&F(e,"checked",p,v.checked,!1))}return e}function ve(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){f.__e(r,n)}}function ye(e,t,n){var r,l;if(f.unmount&&f.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||ve(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(_){f.__e(_,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&ye(r[l],t,n||typeof e.type!="function");n||e.__e==null||se(e.__e),e.__=e.__e=e.__d=void 0}function xe(e,t,n){return this.constructor(e,n)}function De(e,t,n){var r,l,_;f.__&&f.__(e,t),l=(r=typeof n=="function")?null:n&&n.__k||t.__k,_=[],z(t,e=(!r&&n||t).__k=Ce(b,null,[e]),l||M,M,t.ownerSVGElement!==void 0,!r&&n?[n]:l?null:t.firstChild?I.call(t.childNodes):null,_,!r&&n?n:l?l.__e:t.firstChild,r),pe(_,e)}I=ce.slice,f={__e:function(e,t,n,r){for(var l,_,i;t=t.__;)if((l=t.__c)&&!l.__)try{if((_=l.constructor)&&_.getDerivedStateFromError!=null&&(l.setState(_.getDerivedStateFromError(e)),i=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(e,r||{}),i=l.__d),i)return l.__E=l}catch(c){e=c}throw e}},le=0,T.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof e=="function"&&(e=e(C({},n),this.props)),e&&C(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),K(this))},T.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),K(this))},T.prototype.render=b,S=[],ie=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,q=function(e,t){return e.__v.__b-t.__v.__b},U.__r=0;var R,m,V,Z,B=0,me=[],W=[],ee=f.__b,te=f.__r,ne=f.diffed,_e=f.__c,re=f.unmount;function ge(e,t){f.__h&&f.__h(m,e,B||t),B=0;var n=m.__H||(m.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:W}),n.__[e]}function O(e){return B=1,Ne(be,e)}function Ne(e,t,n){var r=ge(R++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):be(void 0,t),function(c){var a=r.__N?r.__N[0]:r.__[0],h=r.t(a,c);a!==h&&(r.__N=[h,r.__[1]],r.__c.setState({}))}],r.__c=m,!m.u)){var l=function(c,a,h){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter(function(d){return d.__c});if(o.every(function(d){return!d.__N}))return!_||_.call(this,c,a,h);var v=!1;return o.forEach(function(d){if(d.__N){var s=d.__[0];d.__=d.__N,d.__N=void 0,s!==d.__[0]&&(v=!0)}}),!(!v&&r.__c.props===c)&&(!_||_.call(this,c,a,h))};m.u=!0;var _=m.shouldComponentUpdate,i=m.componentWillUpdate;m.componentWillUpdate=function(c,a,h){if(this.__e){var o=_;_=void 0,l(c,a,h),_=o}i&&i.call(this,c,a,h)},m.shouldComponentUpdate=l}return r.__N||r.__}function Pe(e,t){var n=ge(R++,3);!f.__s&&Le(n.__H,t)&&(n.__=e,n.i=t,m.__H.__h.push(n))}function Ee(){for(var e;e=me.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(w),e.__H.__h.forEach(j),e.__H.__h=[]}catch(t){e.__H.__h=[],f.__e(t,e.__v)}}f.__b=function(e){m=null,ee&&ee(e)},f.__r=function(e){te&&te(e),R=0;var t=(m=e.__c).__H;t&&(V===m?(t.__h=[],m.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=W,n.__N=n.i=void 0})):(t.__h.forEach(w),t.__h.forEach(j),t.__h=[])),V=m},f.diffed=function(e){ne&&ne(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(me.push(t)!==1&&Z===f.requestAnimationFrame||((Z=f.requestAnimationFrame)||Ae)(Ee)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==W&&(n.__=n.__V),n.i=void 0,n.__V=W})),V=m=null},f.__c=function(e,t){t.some(function(n){try{n.__h.forEach(w),n.__h=n.__h.filter(function(r){return!r.__||j(r)})}catch(r){t.some(function(l){l.__h&&(l.__h=[])}),t=[],f.__e(r,n.__v)}}),_e&&_e(e,t)},f.unmount=function(e){re&&re(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{w(r)}catch(l){t=l}}),n.__H=void 0,t&&f.__e(t,n.__v))};var oe=typeof requestAnimationFrame=="function";function Ae(e){var t,n=function(){clearTimeout(r),oe&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);oe&&(t=requestAnimationFrame(n))}function w(e){var t=m,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),m=t}function j(e){var t=m;e.__c=e.__(),m=t}function Le(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function be(e,t){return typeof t=="function"?t(e):t}var Te=0;function u(e,t,n,r,l,_){var i,c,a={};for(c in t)c=="ref"?i=t[c]:a[c]=t[c];var h={type:e,props:a,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Te,__source:l,__self:_};if(typeof e=="function"&&(i=e.defaultProps))for(c in i)a[c]===void 0&&(a[c]=i[c]);return f.vnode&&f.vnode(h),h}function We({todos:e,setTodos:t,setShowWorkspaces:n}){return u("div",{class:"workspaces",children:e.map(r=>{const l=()=>{t(e.map(_=>_.id==r.id?{..._,color:(()=>{switch(r.color){case"red":return"orange";case"orange":return"yellow";case"yellow":return"green";case"green":return"blue";case"blue":return"pink";case"pink":return"purple";default:return"red"}})()}:_))};return u("div",{class:((r==null?void 0:r.color)||"orange")+" workspace",children:[u("div",{class:"title",onClick:()=>{n(r.id)},children:r==null?void 0:r.title}),u("div",{class:"tools",children:u("span",{class:"tool changeColor material-symbols-outlined icon",onClick:()=>{l()},children:"colorize"})})]})})})}function ke(e){let t=new Date(parseInt(`${e}`));return`${t.getDate()}-${t.getMonth()+1} ${t.getHours()}:${t.getMinutes()}`}function we({setTodos:e,todos:t}){let n=Date.now();return u("button",{class:"add_workspace",onClick:()=>{let r=new Date;e([...t,{title:ke(n),date:n,id:Date.now().toLocaleString(),color:"yellow",todos:[{content:`hello world ${r.getDate()}.${r.getMonth()+1}.${r.getFullYear()} !`,date:Date.now(),id:Date.now().toLocaleString()}]}])},children:"Add new"})}function Me({setTodos:e,todos:t,workspace:n,setAfter:r}){const[l,_]=O("");return u(b,{children:u("form",{class:"relative",onSubmit:i=>{i.preventDefault()},children:u("div",{class:"popup",children:[u("input",{type:"text",class:"input",placeholder:"Write some note...",onInput:i=>{var c;_((c=i.target)==null?void 0:c.value)},autofocus:!0}),u("div",{class:"content",children:[u("button",{type:"submit",class:"button _add",onClick:()=>{l&&(Ue({setTodos:e,todos:t,workspace:n},l),r(u(b,{})))},children:"Add"}),u("button",{type:"close",class:"button close",onClick:()=>{r(u(b,{}))},children:"Close"})]})]})})})}function Ue({setTodos:e,todos:t,workspace:n},r){e(t.map(l=>{if(l.id==n.id){let _=Date.now();return{...n,todos:[...n.todos,{content:r,date:_,id:_.toLocaleString()}]}}return l}))}function Fe({setTodos:e,todos:t,workspace:n}){const[r,l]=O(u(b,{}));return u(b,{children:[r,u("button",{class:"add",onClick:()=>{l(u(b,{children:u(Me,{setAfter:l,setTodos:e,todos:t,workspace:n})}))},children:"+"})]})}function Oe({id:e,setTodos:t,todo:n,todos:r,workspace:l}){return u("div",{class:"todo",children:[u("div",{class:"body",children:u("span",{class:"text",children:n})}),u("button",{class:"remove",onClick:()=>{l.todos=l.todos.filter(_=>_.id!=e),t(r.map(_=>_.id==l.id?{..._,todos:_.todos.filter(i=>i.id!=e)}:_))},children:u("span",{class:"material-symbols-outlined icon",children:"delete"})})]})}function Ie({nowData:e,show:t}){return t?u("div",{class:`divider ${e==0?"today":""}`,children:e==0?"today":e==1?"yesterday":`${e} days ago`}):u(b,{})}function Ve({date_now:e,workspace:t,setTodos:n,todos:r}){let l="";return u(b,{children:t==null?void 0:t.todos.map(_=>{const i=new Date(e);let c=e-_.date-(i.valueOf()-i.setHours(0,0,0,0)),a=Math.floor(c/1e3/60/60/24)+1,h=!1;return a!==l&&(l=a,h=!0),u(b,{children:[u(Ie,{nowData:a,show:h}),u(Oe,{id:_.id,todo:_.content,workspace:t,setTodos:n,todos:r})]})})})}function qe({setTodos:e,todos:t,id:n,setShowWorkspaces:r}){let l=t.find(c=>c.id==n),_=ke(l.date);const i=Date.now();return u("div",{class:"showWorkspace",children:l?u(b,{children:[u("div",{class:"header",children:[u("button",{class:"return material-symbols-outlined",onClick:()=>{e(t.filter(c=>c.id!=n)),r("")},children:"delete"}),u("input",{class:"title",onChange:c=>{e(t.map(a=>{var h;return a.id==l.id?{...l,title:((h=c.target)==null?void 0:h.value)||_}:a}))},value:l==null?void 0:l.title,placeholder:_}),u("button",{class:"return material-symbols-outlined",onClick:()=>{r("")},children:"arrow_back"})]}),u("div",{class:"todos",children:u(Ve,{date_now:i,setTodos:e,todos:t,workspace:l})}),u(Fe,{setTodos:e,todos:t,workspace:l})]}):u(b,{children:[u("h1",{children:"404"}),u("p",{children:"something broke... this note group doesn't exist"}),u("button",{class:"goback",onClick:()=>{r("")},children:"Go back"})]})})}function Be(){const e=new Date,t=`${e.getDate()}.${e.getMonth()+1}`;let n=JSON.parse(localStorage.getItem("nk_todos")||"[]")||[];n||(n=[]);const[r,l]=O(""),[_,i]=O(n);return Pe(()=>{localStorage.setItem("nk_todos",JSON.stringify(_))},[_]),u(b,{children:r?u(qe,{id:r,setShowWorkspaces:l,setTodos:i,todos:_}):u(b,{children:u("div",{class:"app",children:u("div",{class:"allWorkspaces",children:[u("div",{class:"header",children:["Notes ",u("span",{class:"clocks",children:t})]}),u(We,{setShowWorkspaces:l,setTodos:i,todos:_}),u(we,{setTodos:i,todos:_})]})})})})}De(u(Be,{}),document.getElementById("app"));
