(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();var F,h,le,S,J,ie,q,I={},ce=[],$e=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function C(e,t){for(var n in t)e[n]=t[n];return e}function se(e){var t=e.parentNode;t&&t.removeChild(e)}function Ce(e,t,n){var r,l,o,c={};for(o in t)o=="key"?r=t[o]:o=="ref"?l=t[o]:c[o]=t[o];if(arguments.length>2&&(c.children=arguments.length>3?F.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)c[o]===void 0&&(c[o]=e.defaultProps[o]);return w(e,c,r,l,null)}function w(e,t,n,r,l){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l??++le};return l==null&&h.vnode!=null&&h.vnode(o),o}function g(e){return e.children}function A(e,t){this.props=e,this.context=t}function H(e,t){if(t==null)return e.__?H(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?H(e):null}function ae(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ae(e)}}function K(e){(!e.__d&&(e.__d=!0)&&S.push(e)&&!O.__r++||J!==h.debounceRendering)&&((J=h.debounceRendering)||ie)(O)}function O(){var e,t,n,r,l,o,c,s;for(S.sort(q);e=S.shift();)e.__d&&(t=S.length,r=void 0,l=void 0,c=(o=(n=e).__v).__e,(s=n.__P)&&(r=[],(l=C({},o)).__v=o.__v+1,z(s,o,l,n.__n,s.ownerSVGElement!==void 0,o.__h!=null?[c]:null,r,c??H(o),o.__h),pe(r,o),o.__e!=c&&ae(o)),S.length>t&&S.sort(q));O.__r=0}function ue(e,t,n,r,l,o,c,s,u,f){var _,v,d,a,p,D,y,b=r&&r.__k||ce,$=b.length;for(n.__k=[],_=0;_<t.length;_++)if((a=n.__k[_]=(a=t[_])==null||typeof a=="boolean"||typeof a=="function"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"?w(null,a,null,null,a):Array.isArray(a)?w(g,{children:a},null,null,null):a.__b>0?w(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a)!=null){if(a.__=n,a.__b=n.__b+1,(d=b[_])===null||d&&a.key==d.key&&a.type===d.type)b[_]=void 0;else for(v=0;v<$;v++){if((d=b[v])&&a.key==d.key&&a.type===d.type){b[v]=void 0;break}d=null}z(e,a,d=d||I,l,o,c,s,u,f),p=a.__e,(v=a.ref)&&d.ref!=v&&(y||(y=[]),d.ref&&y.push(d.ref,null,a),y.push(v,a.__c||p,a)),p!=null?(D==null&&(D=p),typeof a.type=="function"&&a.__k===d.__k?a.__d=u=de(a,u,e):u=fe(e,a,d,b,p,u),typeof n.type=="function"&&(n.__d=u)):u&&d.__e==u&&u.parentNode!=e&&(u=H(d))}for(n.__e=D,_=$;_--;)b[_]!=null&&(typeof n.type=="function"&&b[_].__e!=null&&b[_].__e==n.__d&&(n.__d=he(r).nextSibling),ye(b[_],b[_]));if(y)for(_=0;_<y.length;_++)ve(y[_],y[++_],y[++_])}function de(e,t,n){for(var r,l=e.__k,o=0;l&&o<l.length;o++)(r=l[o])&&(r.__=e,t=typeof r.type=="function"?de(r,t,n):fe(n,r,r,l,r.__e,t));return t}function fe(e,t,n,r,l,o){var c,s,u;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(n==null||l!=o||l.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(l),c=null;else{for(s=o,u=0;(s=s.nextSibling)&&u<r.length;u+=1)if(s==l)break e;e.insertBefore(l,o),c=o}return c!==void 0?c:l.nextSibling}function he(e){var t,n,r;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(r=he(n)))return r}return null}function Se(e,t,n,r,l){var o;for(o in n)o==="children"||o==="key"||o in t||U(e,o,null,n[o],r);for(o in t)l&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||U(e,o,t[o],n[o],r)}function Y(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||$e.test(t)?n:n+"px"}function U(e,t,n,r,l){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Y(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Y(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?X:Q,o):e.removeEventListener(t,o?X:Q,o);else if(t!=="dangerouslySetInnerHTML"){if(l)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t.indexOf("-")==-1?e.removeAttribute(t):e.setAttribute(t,n))}}function Q(e){return this.l[e.type+!1](h.event?h.event(e):e)}function X(e){return this.l[e.type+!0](h.event?h.event(e):e)}function z(e,t,n,r,l,o,c,s,u){var f,_,v,d,a,p,D,y,b,$,W,x,G,M,T,k=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(u=n.__h,s=t.__e=n.__e,t.__h=null,o=[s]),(f=h.__b)&&f(t);try{e:if(typeof k=="function"){if(y=t.props,b=(f=k.contextType)&&r[f.__c],$=f?b?b.props.value:f.__:r,n.__c?D=(_=t.__c=n.__c).__=_.__E:("prototype"in k&&k.prototype.render?t.__c=_=new k(y,$):(t.__c=_=new A(y,$),_.constructor=k,_.render=xe),b&&b.sub(_),_.props=y,_.state||(_.state={}),_.context=$,_.__n=r,v=_.__d=!0,_.__h=[],_._sb=[]),_.__s==null&&(_.__s=_.state),k.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=C({},_.__s)),C(_.__s,k.getDerivedStateFromProps(y,_.__s))),d=_.props,a=_.state,_.__v=t,v)k.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(k.getDerivedStateFromProps==null&&y!==d&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(y,$),!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(y,_.__s,$)===!1||t.__v===n.__v){for(t.__v!==n.__v&&(_.props=y,_.state=_.__s,_.__d=!1),_.__e=!1,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(P){P&&(P.__=t)}),W=0;W<_._sb.length;W++)_.__h.push(_._sb[W]);_._sb=[],_.__h.length&&c.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(y,_.__s,$),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(d,a,p)})}if(_.context=$,_.props=y,_.__P=e,x=h.__r,G=0,"prototype"in k&&k.prototype.render){for(_.state=_.__s,_.__d=!1,x&&x(t),f=_.render(_.props,_.state,_.context),M=0;M<_._sb.length;M++)_.__h.push(_._sb[M]);_._sb=[]}else do _.__d=!1,x&&x(t),f=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++G<25);_.state=_.__s,_.getChildContext!=null&&(r=C(C({},r),_.getChildContext())),v||_.getSnapshotBeforeUpdate==null||(p=_.getSnapshotBeforeUpdate(d,a)),T=f!=null&&f.type===g&&f.key==null?f.props.children:f,ue(e,Array.isArray(T)?T:[T],t,n,r,l,o,c,s,u),_.base=t.__e,t.__h=null,_.__h.length&&c.push(_),D&&(_.__E=_.__=null),_.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=De(n.__e,t,n,r,l,o,c,u);(f=h.diffed)&&f(t)}catch(P){t.__v=null,(u||o!=null)&&(t.__e=s,t.__h=!!u,o[o.indexOf(s)]=null),h.__e(P,t,n)}}function pe(e,t){h.__c&&h.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){h.__e(r,n.__v)}})}function De(e,t,n,r,l,o,c,s){var u,f,_,v=n.props,d=t.props,a=t.type,p=0;if(a==="svg"&&(l=!0),o!=null){for(;p<o.length;p++)if((u=o[p])&&"setAttribute"in u==!!a&&(a?u.localName===a:u.nodeType===3)){e=u,o[p]=null;break}}if(e==null){if(a===null)return document.createTextNode(d);e=l?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a,d.is&&d),o=null,s=!1}if(a===null)v===d||s&&e.data===d||(e.data=d);else{if(o=o&&F.call(e.childNodes),f=(v=n.props||I).dangerouslySetInnerHTML,_=d.dangerouslySetInnerHTML,!s){if(o!=null)for(v={},p=0;p<e.attributes.length;p++)v[e.attributes[p].name]=e.attributes[p].value;(_||f)&&(_&&(f&&_.__html==f.__html||_.__html===e.innerHTML)||(e.innerHTML=_&&_.__html||""))}if(Se(e,d,v,l,s),_)t.__k=[];else if(p=t.props.children,ue(e,Array.isArray(p)?p:[p],t,n,r,l&&a!=="foreignObject",o,c,o?o[0]:n.__k&&H(n,0),s),o!=null)for(p=o.length;p--;)o[p]!=null&&se(o[p]);s||("value"in d&&(p=d.value)!==void 0&&(p!==e.value||a==="progress"&&!p||a==="option"&&p!==v.value)&&U(e,"value",p,v.value,!1),"checked"in d&&(p=d.checked)!==void 0&&p!==e.checked&&U(e,"checked",p,v.checked,!1))}return e}function ve(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){h.__e(r,n)}}function ye(e,t,n){var r,l;if(h.unmount&&h.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||ve(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){h.__e(o,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&ye(r[l],t,n||typeof e.type!="function");n||e.__e==null||se(e.__e),e.__=e.__e=e.__d=void 0}function xe(e,t,n){return this.constructor(e,n)}function He(e,t,n){var r,l,o;h.__&&h.__(e,t),l=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],z(t,e=(!r&&n||t).__k=Ce(g,null,[e]),l||I,I,t.ownerSVGElement!==void 0,!r&&n?[n]:l?null:t.firstChild?F.call(t.childNodes):null,o,!r&&n?n:l?l.__e:t.firstChild,r),pe(o,e)}F=ce.slice,h={__e:function(e,t,n,r){for(var l,o,c;t=t.__;)if((l=t.__c)&&!l.__)try{if((o=l.constructor)&&o.getDerivedStateFromError!=null&&(l.setState(o.getDerivedStateFromError(e)),c=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(e,r||{}),c=l.__d),c)return l.__E=l}catch(s){e=s}throw e}},le=0,A.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof e=="function"&&(e=e(C({},n),this.props)),e&&C(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),K(this))},A.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),K(this))},A.prototype.render=g,S=[],ie=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,q=function(e,t){return e.__v.__b-t.__v.__b},O.__r=0;var R,m,V,Z,B=0,me=[],E=[],ee=h.__b,te=h.__r,ne=h.diffed,oe=h.__c,re=h.unmount;function ge(e,t){h.__h&&h.__h(m,e,B||t),B=0;var n=m.__H||(m.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:E}),n.__[e]}function N(e){return B=1,Ne(be,e)}function Ne(e,t,n){var r=ge(R++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):be(void 0,t),function(s){var u=r.__N?r.__N[0]:r.__[0],f=r.t(u,s);u!==f&&(r.__N=[f,r.__[1]],r.__c.setState({}))}],r.__c=m,!m.u)){var l=function(s,u,f){if(!r.__c.__H)return!0;var _=r.__c.__H.__.filter(function(d){return d.__c});if(_.every(function(d){return!d.__N}))return!o||o.call(this,s,u,f);var v=!1;return _.forEach(function(d){if(d.__N){var a=d.__[0];d.__=d.__N,d.__N=void 0,a!==d.__[0]&&(v=!0)}}),!(!v&&r.__c.props===s)&&(!o||o.call(this,s,u,f))};m.u=!0;var o=m.shouldComponentUpdate,c=m.componentWillUpdate;m.componentWillUpdate=function(s,u,f){if(this.__e){var _=o;o=void 0,l(s,u,f),o=_}c&&c.call(this,s,u,f)},m.shouldComponentUpdate=l}return r.__N||r.__}function We(e,t){var n=ge(R++,3);!h.__s&&Pe(n.__H,t)&&(n.__=e,n.i=t,m.__H.__h.push(n))}function Me(){for(var e;e=me.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(L),e.__H.__h.forEach(j),e.__H.__h=[]}catch(t){e.__H.__h=[],h.__e(t,e.__v)}}h.__b=function(e){m=null,ee&&ee(e)},h.__r=function(e){te&&te(e),R=0;var t=(m=e.__c).__H;t&&(V===m?(t.__h=[],m.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=E,n.__N=n.i=void 0})):(t.__h.forEach(L),t.__h.forEach(j),t.__h=[])),V=m},h.diffed=function(e){ne&&ne(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(me.push(t)!==1&&Z===h.requestAnimationFrame||((Z=h.requestAnimationFrame)||Te)(Me)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==E&&(n.__=n.__V),n.i=void 0,n.__V=E})),V=m=null},h.__c=function(e,t){t.some(function(n){try{n.__h.forEach(L),n.__h=n.__h.filter(function(r){return!r.__||j(r)})}catch(r){t.some(function(l){l.__h&&(l.__h=[])}),t=[],h.__e(r,n.__v)}}),oe&&oe(e,t)},h.unmount=function(e){re&&re(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{L(r)}catch(l){t=l}}),n.__H=void 0,t&&h.__e(t,n.__v))};var _e=typeof requestAnimationFrame=="function";function Te(e){var t,n=function(){clearTimeout(r),_e&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);_e&&(t=requestAnimationFrame(n))}function L(e){var t=m,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),m=t}function j(e){var t=m;e.__c=e.__(),m=t}function Pe(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function be(e,t){return typeof t=="function"?t(e):t}var we=0;function i(e,t,n,r,l,o){var c,s,u={};for(s in t)s=="ref"?c=t[s]:u[s]=t[s];var f={type:e,props:u,key:n,ref:c,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--we,__source:l,__self:o};if(typeof e=="function"&&(c=e.defaultProps))for(s in c)u[s]===void 0&&(u[s]=c[s]);return h.vnode&&h.vnode(f),f}function Ae({todos:e,setTodos:t,setShowWorkspaces:n}){return i("div",{class:"workspaces",children:e.map(r=>{const l=()=>{t(e.map(o=>o.id==r.id?{...o,color:(()=>{switch(r.color){case"red":return"orange";case"orange":return"yellow";case"yellow":return"green";case"green":return"blue";case"blue":return"pink";case"pink":return"purple";default:return"red"}})()}:o))};return i("div",{class:((r==null?void 0:r.color)||"orange")+" workspace",children:[i("div",{class:"title",onClick:()=>{n(r.id)},children:r==null?void 0:r.title}),i("div",{class:"tools",children:i("span",{class:"tool changeColor material-symbols-outlined icon",onClick:()=>{l()},children:"colorize"})})]})})})}function ke(e){let t=new Date(parseInt(`${e}`));return`${t.getDate()}-${t.getMonth()+1} ${t.getHours()}:${t.getMinutes()}`}function Ee(){let e=new Date;const t=(()=>parseInt(e.getDate()+e.getMonth()+""+e.getMinutes()+e.getSeconds()).toString(36).toUpperCase())();return{def:{color:"yellow",label:"Default",addClass:"defOption"},tommorowTodos:{color:"purple",title:`${e.getDate()+1}-${e.getMonth()+1} Todos`,label:"Tommorow todos"},todaySchedule:{color:"red",label:"Day schedule",title:`${e.getDate()}-${e.getMonth()+1} Program`},todayTodos:{color:"purple",title:`${e.getDate()}-${e.getMonth()+1} Todos`,label:"Today todos"},bugFix:{color:"yellow",title:"Idea for bug fix",label:"Inspiration hit"},workoutLog:{color:"red",title:`${e.getDate()}-${e.getMonth()+1} Workout`,label:"Workout log"},productivityLog:{color:"green",title:`Did on ${e.getDate()}-${e.getMonth()+1}`,label:"What happened today"},inspirationHit:{color:"purple",title:`Cool idea ${e.getDate()}-${e.getMonth()+1}`,label:"Inspiration hit"},someList:{color:"green",title:`My list #${t}`,label:"List about things"},coolIdeas:{color:"blue",title:"Cool ideas",label:"Cool ideas"}}}function Le({setTodos:e,todos:t}){let n=Date.now();const r=ke(n),[l,o]=N(!1),c=n.toString(36);function s({color:f,title:_}){let v=new Date;e([...t,{title:_||r,date:n,id:c,color:f||"yellow",todos:[{content:`hello world ${v.getDate()}.${v.getMonth()+1}.${v.getFullYear()} !`,date:n,id:n.toLocaleString()}]}])}function u(){const f=Ee();function _({label:v,color:d,title:a,addClass:p}){return i(g,{children:i("button",{class:"button "+p,onClick:()=>{s({color:d,title:a}),o(!1)},children:v})})}return i(g,{children:i("div",{class:"relative",children:i("div",{class:"addWorkspaceMenu",children:i("div",{class:"content",children:[i("button",{class:"close material-symbols-outlined",onClick:()=>{o(!1)},children:"close"}),i("span",{class:"title",children:"Choose preset"}),i("div",{className:"buttons",children:Object.values(f).map(v=>i(g,{children:i(_,{addClass:v.addClass,label:v.label,title:v.title,color:v.color})}))})]})})})})}return i(g,{children:[l&&i(g,{children:i(u,{})}),i("button",{class:"add_workspace",onClick:()=>{o(!0)},children:"Add new"})]})}function Ie({setTodos:e,todos:t,workspace:n,setAfter:r}){const[l,o]=N("");return i(g,{children:i("form",{class:"relative",onSubmit:c=>{c.preventDefault()},children:i("div",{class:"popup",children:[i("input",{type:"text",class:"input",placeholder:"Write some note...",onInput:c=>{var s;o((s=c.target)==null?void 0:s.value)},autofocus:!0}),i("div",{class:"content",children:[i("button",{type:"submit",class:"button _add",onClick:()=>{l&&(Oe({setTodos:e,todos:t,workspace:n},l),r(null))},children:"Add"}),i("button",{type:"close",class:"button close",onClick:()=>{r(null)},children:"Close"})]})]})})})}function Oe({setTodos:e,todos:t,workspace:n},r){e(t.map(l=>{if(l.id==n.id){let o=Date.now();return{...n,todos:[...n.todos,{content:r,date:o,id:o.toString(36)}]}}return l}))}function Ue({setTodos:e,todos:t,workspace:n}){const[r,l]=N();return r?i(g,{children:[r,i("button",{class:"add material-symbols-outlined",onClick:()=>{l(null)},children:"close"})]}):i(g,{children:i("button",{class:"add material-symbols-outlined",onClick:()=>{l(i(g,{children:i(Ie,{setAfter:l,setTodos:e,todos:t,workspace:n})}))},children:"add"})})}function Fe({id:e,setTodos:t,todo:n,todos:r,workspace:l}){return i("div",{class:"todo",children:[i("div",{class:"body",children:i("span",{class:"text",children:n})}),i("button",{class:"remove",onClick:()=>{l.todos=l.todos.filter(o=>o.id!=e),t(r.map(o=>o.id==l.id?{...o,todos:o.todos.filter(c=>c.id!=e)}:o))},children:i("span",{class:"material-symbols-outlined icon",children:"delete"})})]})}function Ve({nowData:e,show:t}){return t?i("div",{class:`divider ${e==0?"today":""}`,children:e==0?"today":e==1?"yesterday":`${e} days ago`}):i(g,{})}function qe({date_now:e,workspace:t,setTodos:n,todos:r}){let l="";return i(g,{children:t==null?void 0:t.todos.map(o=>{const c=new Date(e);let s=e-o.date-(c.valueOf()-c.setHours(0,0,0,0)),u=Math.floor(s/1e3/60/60/24)+1,f=!1;return u!==l&&(l=u,f=!0),i(g,{children:[i(Ve,{nowData:u,show:f}),i(Fe,{id:o.id,todo:o.content,workspace:t,setTodos:n,todos:r})]})})})}function Be({setTodos:e,todos:t,id:n,setShowWorkspaces:r}){let l=t.find(s=>s.id==n),o=ke(l.date);const c=Date.now();return i("div",{class:"showWorkspace",children:l?i(g,{children:[i("div",{class:"header",children:[i("button",{class:"return material-symbols-outlined",onClick:()=>{e(t.filter(s=>s.id!=n)),r("")},children:"delete"}),i("input",{class:"title",onChange:s=>{e(t.map(u=>{var f;return u.id==l.id?{...l,title:((f=s.target)==null?void 0:f.value)||o}:u}))},value:l==null?void 0:l.title,placeholder:o}),i("button",{class:"return material-symbols-outlined",onClick:()=>{r("")},children:"arrow_back"})]}),i("div",{class:"todos",children:i(qe,{date_now:c,setTodos:e,todos:t,workspace:l})}),i(Ue,{setTodos:e,todos:t,workspace:l})]}):i(g,{children:[i("h1",{children:"404"}),i("p",{children:"something broke... this note group doesn't exist"}),i("button",{class:"goback",onClick:()=>{r("")},children:"Go back"})]})})}function je(){const e=new Date,t=`${e.getDate()}.${e.getMonth()+1}`;let n=JSON.parse(localStorage.getItem("nk_todos")||"[]")||[];n||(n=[]);const[r,l]=N(""),[o,c]=N(n);return We(()=>{localStorage.setItem("nk_todos",JSON.stringify(o))},[o]),i(g,{children:r?i(Be,{id:r,setShowWorkspaces:l,setTodos:c,todos:o}):i(g,{children:i("div",{class:"app",children:i("div",{class:"allWorkspaces",children:[i("div",{class:"header",children:["Notes ",i("span",{class:"clocks",children:t})]}),i(Ae,{setShowWorkspaces:l,setTodos:c,todos:o}),i(Le,{setTodos:c,todos:o})]})})})})}He(i(je,{}),document.getElementById("app"));