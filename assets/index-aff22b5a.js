var Ne=Object.defineProperty;var Ce=(e,t,n)=>t in e?Ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var k=(e,t,n)=>(Ce(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function S(){}function he(e,t){for(const n in t)e[n]=t[n];return e}function Te(e){return e()}function _e(){return Object.create(null)}function j(e){e.forEach(Te)}function Ye(e){return typeof e=="function"}function Q(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ie(e){return Object.keys(e).length===0}function _(e,t){e.appendChild(t)}function $(e,t,n){e.insertBefore(t,n||null)}function Y(e){e.parentNode&&e.parentNode.removeChild(e)}function De(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function L(e){return document.createTextNode(e)}function O(){return L(" ")}function D(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function m(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Re(e){return Array.from(e.childNodes)}function se(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function ye(e,t){e.value=t??""}function ge(e,t,n,i){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function je(e,t,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,i,t),r}let J;function K(e){J=e}function Se(){if(!J)throw new Error("Function called outside component initialization");return J}function Be(e){Se().$$.on_mount.push(e)}function oe(){const e=Se();return(t,n,{cancelable:i=!1}={})=>{const r=e.$$.callbacks[t];if(r){const s=je(t,n,{cancelable:i});return r.slice().forEach(o=>{o.call(e,s)}),!s.defaultPrevented}return!0}}const U=[],pe=[];let W=[];const ve=[],Ue=Promise.resolve();let le=!1;function We(){le||(le=!0,Ue.then($e))}function ue(e){W.push(e)}const ce=new Set;let B=0;function $e(){if(B!==0)return;const e=J;do{try{for(;B<U.length;){const t=U[B];B++,K(t),ze(t.$$)}}catch(t){throw U.length=0,B=0,t}for(K(null),U.length=0,B=0;pe.length;)pe.pop()();for(let t=0;t<W.length;t+=1){const n=W[t];ce.has(n)||(ce.add(n),n())}W.length=0}while(U.length);for(;ve.length;)ve.pop()();le=!1,ce.clear(),K(e)}function ze(e){if(e.fragment!==null){e.update(),j(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ue)}}function Fe(e){const t=[],n=[];W.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),W=t}const re=new Set;let qe;function F(e,t){e&&e.i&&(re.delete(e),e.i(t))}function ee(e,t,n,i){if(e&&e.o){if(re.has(e))return;re.add(e),qe.c.push(()=>{re.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function be(e,t){const n={},i={},r={$$scope:1};let s=e.length;for(;s--;){const o=e[s],u=t[s];if(u){for(const l in o)l in u||(i[l]=1);for(const l in u)r[l]||(n[l]=u[l],r[l]=1);e[s]=u}else for(const l in o)r[l]=1}for(const o in i)o in n||(n[o]=void 0);return n}function we(e){return typeof e=="object"&&e!==null?e:{}}function te(e){e&&e.c()}function q(e,t,n,i){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),i||ue(()=>{const o=e.$$.on_mount.map(Te).filter(Ye);e.$$.on_destroy?e.$$.on_destroy.push(...o):j(o),e.$$.on_mount=[]}),s.forEach(ue)}function G(e,t){const n=e.$$;n.fragment!==null&&(Fe(n.after_update),j(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ge(e,t){e.$$.dirty[0]===-1&&(U.push(e),We(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function X(e,t,n,i,r,s,o,u=[-1]){const l=J;K(e);const c=e.$$={fragment:null,ctx:[],props:s,update:S,not_equal:r,bound:_e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:_e(),dirty:u,skip_bound:!1,root:t.target||l.$$.root};o&&o(c.root);let h=!1;if(c.ctx=n?n(e,t.props||{},(d,v,...w)=>{const M=w.length?w[0]:v;return c.ctx&&r(c.ctx[d],c.ctx[d]=M)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](M),h&&Ge(e,d)),v}):[],c.update(),h=!0,j(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){const d=Re(t.target);c.fragment&&c.fragment.l(d),d.forEach(Y)}else c.fragment&&c.fragment.c();t.intro&&F(e.$$.fragment),q(e,t.target,t.anchor,t.customElement),$e()}K(l)}class Z{$destroy(){G(this,1),this.$destroy=S}$on(t,n){if(!Ye(n))return S;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!Ie(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Ke(e,t){const n=i=>i!=b.EMPTY;if(e.every(n))return-1;if(R(e,t)==-1){let i;do i=ae(e.length);while(e[i]!=b.EMPTY);return i}return R(e,t)}function Ve(e,t){const n=de(e),i=new Map;for(const s of n){const o=[...e];o[s]=t,i.set(s,fe(o,I(t),t,!1)),o[s]=b.EMPTY}let r=[-1,-1/0];for(const s of i)s[1]>r[1]&&(r=s);return r[0]}function fe(e,t,n,i){const r=de(e),s=Oe(e);if(s===n)return 1;if(s===I(n))return-1;if(!r.length)return 0;let o=i?-1/0:1/0;for(const u of r){if(e[u]=t,i){const l=fe(e,I(t),n,!1);o=Math.max(o,l)}else{const l=fe(e,I(t),n,!0);o=Math.min(o,l)}e[u]=b.EMPTY}return o}function Je(e,t){const n=r=>r!=b.EMPTY;if(e.every(n))return-1;if(R(e,t)!=-1)return R(e,t);if(Ee(e,t)!=-1)return Ee(e,t);if(e[4]==b.EMPTY)return 4;let i;do i=ae(e.length);while(e[i]!=b.EMPTY);return i}function Qe(e,t){const n=r=>r!=b.EMPTY;if(e.every(n))return-1;const i=I(t);if(R(e,i)!=-1)return R(e,i);{let r;do r=ae(e.length);while(e[r]!=b.EMPTY);return r}}function Ee(e,t){const n=r=>r!=b.EMPTY;if(e.every(n))return-1;const i=I(t);return R(e,i)!=-1?R(e,i):-1}function ne(e){switch(e){case A.EASY:return Ke;case A.PETTY:return Qe;case A.MEDIUM:return Je;case A.HARD:return Ve;case(A.HUMAN||A.ONLINE):return;default:return}}function R(e,t){if(!He(t))throw new Error(`Player ${t} is not valid`);for(let n=0;n<e.length;n++){if(e[n]!==b.EMPTY)continue;const i=[...e];if(i[n]=t,Le(i,t))return n}return-1}function ae(e){return Math.floor(Math.random()*e)}var A=(e=>(e[e.EASY=0]="EASY",e[e.PETTY=1]="PETTY",e[e.MEDIUM=2]="MEDIUM",e[e.HARD=3]="HARD",e[e.HUMAN=4]="HUMAN",e[e.ONLINE=5]="ONLINE",e))(A||{}),b=(e=>(e[e.EMPTY=0]="EMPTY",e[e.PLAYER1=1]="PLAYER1",e[e.PLAYER2=2]="PLAYER2",e))(b||{});class ke{constructor(t){k(this,"score",0);k(this,"field");k(this,"botMove");this.field=t}addWin(){this.score++}isHuman(){return this.botMove===void 0}move(t){return this.botMove!==void 0?this.botMove(t,this.field):-1}}class Xe{constructor(t=new ke(1),n=new ke(2),i=0){k(this,"player");k(this,"enemy");k(this,"mode");t.score=0,n.score=0,this.mode=i,this.player=t,this.enemy=n,this.enemy.botMove=ne(this.mode)}addWin(t){switch(t){case 1:this.player.addWin();break;case 2:this.enemy.addWin();break}}switchSides(){const t=this.player.botMove;this.player.botMove=this.enemy.botMove,this.enemy.botMove=t;const n=this.player.score;this.player.score=this.enemy.score,this.enemy.score=n}updateMode(t){if(this.mode=t,this.player.isHuman()&&this.enemy.isHuman()&&t!=4){this.enemy.botMove=ne(this.mode);return}this.player.isHuman()||(this.player.botMove=ne(this.mode)),this.enemy.isHuman()||(this.enemy.botMove=ne(this.mode))}}class Ae{constructor(t){k(this,"finished");k(this,"winner",0);this.winner=Oe(t),this.finished=Ze(t)||this.winner!==0}isDraw(){return this.finished===!0&&this.winner===0}}function Ze(e){return!e.some(t=>t===0)}function Oe(e){for(const t of[1,2])if(Le(e,t))return t;return 0}function Le(e,t){return e[0]==t&&e[1]==t&&e[2]==t||e[3]==t&&e[4]==t&&e[5]==t||e[6]==t&&e[7]==t&&e[8]==t||e[0]==t&&e[3]==t&&e[6]==t||e[1]==t&&e[4]==t&&e[7]==t||e[2]==t&&e[5]==t&&e[8]==t||e[0]==t&&e[4]==t&&e[8]==t||e[6]==t&&e[4]==t&&e[2]==t}function ie(){const e=new Array(9);return e.fill(0),e}function de(e){return e.map((t,n)=>t!==0?-1:n).filter(t=>t>=0)}function I(e){return He(e)?3-e:0}function He(e){return e===1||e===2}function Me(e,t,n){const i=e.slice();return i[19]=t[n],i[21]=n,i}function Pe(e){let t,n=e[3](e[19])+"",i,r,s,o;function u(){return e[7](e[21])}function l(){return e[8](e[21])}return{c(){t=p("div"),i=L(n),r=O(),m(t,"class","field svelte-j5xlyz"),m(t,"id",e[21].toString())},m(c,h){$(c,t,h),_(t,i),_(t,r),s||(o=[D(t,"click",u),D(t,"keydown",l)],s=!0)},p(c,h){e=c,h&9&&n!==(n=e[3](e[19])+"")&&se(i,n)},d(c){c&&Y(t),s=!1,j(o)}}}function xe(e){let t,n,i,r,s,o,u,l,c,h,d,v,w,M,f=e[0],y=[];for(let g=0;g<f.length;g+=1)y[g]=Pe(Me(e,f,g));return{c(){t=p("div"),n=p("div");for(let g=0;g<y.length;g+=1)y[g].c();i=O(),r=p("div"),s=p("span"),o=L(e[5]),u=O(),l=p("input"),c=O(),h=p("button"),d=L("connect"),m(n,"id","grid"),m(n,"class","svelte-j5xlyz"),m(l,"type","text"),m(l,"placeholder","remote player ID"),m(h,"type","button"),h.disabled=v=e[4]!=="",m(r,"id","online"),ge(r,"display",e[1].isOnline()||e[2].isOnline()?"flex":"none"),m(r,"class","svelte-j5xlyz"),m(t,"id","board"),m(t,"class","svelte-j5xlyz")},m(g,E){$(g,t,E),_(t,n);for(let a=0;a<y.length;a+=1)y[a]&&y[a].m(n,null);_(t,i),_(t,r),_(r,s),_(s,o),_(r,u),_(r,l),ye(l,e[4]),_(r,c),_(r,h),_(h,d),w||(M=[D(l,"input",e[9]),D(h,"click",et)],w=!0)},p(g,[E]){if(E&73){f=g[0];let a;for(a=0;a<f.length;a+=1){const T=Me(g,f,a);y[a]?y[a].p(T,E):(y[a]=Pe(T),y[a].c(),y[a].m(n,null))}for(;a<y.length;a+=1)y[a].d(1);y.length=f.length}E&32&&se(o,g[5]),E&16&&l.value!==g[4]&&ye(l,g[4]),E&16&&v!==(v=g[4]!=="")&&(h.disabled=v),E&6&&ge(r,"display",g[1].isOnline()||g[2].isOnline()?"flex":"none")},i:S,o:S,d(g){g&&Y(t),De(y,g),w=!1,j(M)}}}function et(){}function tt(e,t,n){let{board:i}=t,{fieldToString:r}=t,{player:s}=t,{enemy:o}=t,u="",l="",c=b.PLAYER1|b.PLAYER2;c=b.PLAYER1;const h=oe();function d(){return c===s.field?s:o}function v(){return c===s.field?o:s}function w(a){d().isOnline()||M(a)}function M(a){if(f(a,d().field)){if(v().isOnline()){const T=v();u!==""&&l!==""&&T.connection!==void 0||console.error(`failed to send move to player ${u}`)}if(c=I(c),!d().isHuman()&&!d().isOnline()){const T=d().move(i);f(T,d().field),c=I(c)}}}function f(a,T){return i[a]!==b.EMPTY||new Ae(i).finished?!1:(n(0,i[a]=T,i),n(0,i),!0)}const y=a=>w(a),g=a=>w(a);function E(){u=this.value,n(4,u),n(2,o),n(1,s)}return e.$$set=a=>{"board"in a&&n(0,i=a.board),"fieldToString"in a&&n(3,r=a.fieldToString),"player"in a&&n(1,s=a.player),"enemy"in a&&n(2,o=a.enemy)},e.$$.update=()=>{if(e.$$.dirty&1){let a=new Ae(i);a.finished&&h("finished",a)}if(e.$$.dirty&1&&de(i).length===9&&(c=b.PLAYER1,!d().isHuman()&&!d().isOnline())){const a=d().move(i);f(a,d().field),c=b.PLAYER2}e.$$.dirty&6&&(o.isOnline()&&o.connection===void 0||!o.isOnline()&&o.connection!==void 0&&(o.connection.close(),n(2,o.connection=void 0,o),n(5,l=""),n(4,u="")),s.isOnline()&&s.connection===void 0||!s.isOnline()&&s.connection!==void 0&&(s.connection.close(),n(1,s.connection=void 0,s),n(5,l=""),n(4,u="")))},[i,s,o,r,u,l,w,y,g,E]}class nt extends Z{constructor(t){super(),X(this,t,tt,xe,Q,{board:0,fieldToString:3,player:1,enemy:2})}}function it(e){let t;return{c(){t=L("🤖")},m(n,i){$(n,t,i)},d(n){n&&Y(t)}}}function rt(e){let t;return{c(){t=L("👨‍💻")},m(n,i){$(n,t,i)},d(n){n&&Y(t)}}}function st(e){let t;return{c(){t=L("🤖")},m(n,i){$(n,t,i)},d(n){n&&Y(t)}}}function ot(e){let t;return{c(){t=L("👨‍💻")},m(n,i){$(n,t,i)},d(n){n&&Y(t)}}}function ct(e){let t,n,i,r,s,o=e[0].score+"",u,l,c,h,d,v=e[1].score+"",w,M,f,y,g,E;function a(P,H){return H&1&&(r=null),r==null&&(r=!!P[0].isHuman()),r?rt:it}let T=a(e,-1),N=T(e);function me(P,H){return H&2&&(y=null),y==null&&(y=!!P[1].isHuman()),y?ot:st}let x=me(e,-1),C=x(e);return{c(){t=p("div"),n=p("div"),i=p("i"),N.c(),s=O(),u=L(o),l=O(),c=p("div"),c.textContent="🆚",h=O(),d=p("div"),w=L(v),M=O(),f=p("i"),C.c(),m(i,"class","svelte-1gwglwo"),m(n,"id","player1"),m(n,"class","player svelte-1gwglwo"),m(c,"id","versus"),m(c,"class","svelte-1gwglwo"),m(f,"class","svelte-1gwglwo"),m(d,"id","player2"),m(d,"class","player svelte-1gwglwo"),m(t,"id","scoreboard"),m(t,"class","svelte-1gwglwo")},m(P,H){$(P,t,H),_(t,n),_(n,i),N.m(i,null),_(n,s),_(n,u),_(t,l),_(t,c),_(t,h),_(t,d),_(d,w),_(d,M),_(d,f),C.m(f,null),g||(E=[D(c,"click",e[3]),D(c,"keydown",e[4])],g=!0)},p(P,[H]){T!==(T=a(P,H))&&(N.d(1),N=T(P),N&&(N.c(),N.m(i,null))),H&1&&o!==(o=P[0].score+"")&&se(u,o),H&2&&v!==(v=P[1].score+"")&&se(w,v),x!==(x=me(P,H))&&(C.d(1),C=x(P),C&&(C.c(),C.m(f,null)))},i:S,o:S,d(P){P&&Y(t),N.d(),C.d(),g=!1,j(E)}}}function lt(e,t,n){let{player:i}=t,{enemy:r}=t,s=oe();function o(){s("switch")}const u=()=>o(),l=()=>o();return e.$$set=c=>{"player"in c&&n(0,i=c.player),"enemy"in c&&n(1,r=c.enemy)},[i,r,o,u,l]}class ut extends Z{constructor(t){super(),X(this,t,lt,ct,Q,{player:0,enemy:1})}}function ft(e){let t,n,i,r,s,o,u,l,c,h;return{c(){t=p("nav"),n=p("select"),i=p("option"),i.textContent="🤖",r=p("option"),r.textContent="🤖➕",s=p("option"),s.textContent="🤖❗",o=p("option"),o.textContent="❗🤖❗",u=p("option"),u.textContent="👨‍💻",l=p("option"),l.textContent="👨‍💻 / 👨‍💻",i.__value="easy",i.value=i.__value,m(i,"class","svelte-17bkcmu"),r.__value="petty",r.value=r.__value,m(r,"class","svelte-17bkcmu"),s.__value="medium",s.value=s.__value,m(s,"class","svelte-17bkcmu"),o.__value="hard",o.value=o.__value,m(o,"class","svelte-17bkcmu"),u.__value="human",u.value=u.__value,m(u,"class","svelte-17bkcmu"),l.__value="online",l.value=l.__value,l.disabled=!0,m(l,"class","svelte-17bkcmu"),m(n,"id","mode"),m(n,"class","svelte-17bkcmu"),m(t,"class","svelte-17bkcmu")},m(d,v){$(d,t,v),_(t,n),_(n,i),_(n,r),_(n,s),_(n,o),_(n,u),_(n,l),c||(h=D(n,"change",e[0]),c=!0)},p:S,i:S,o:S,d(d){d&&Y(t),c=!1,h()}}}function at(e){const t=oe();function n(i){let r=i.target.value,s=A.EASY;switch(r){case"easy":s=A.EASY;break;case"petty":s=A.PETTY;break;case"medium":s=A.MEDIUM;break;case"hard":s=A.HARD;break;case"human":s=A.HUMAN;break;case"online":s=A.ONLINE;break;default:s=A.EASY;break}t("change",s)}return[n]}class dt extends Z{constructor(t){super(),X(this,t,at,ft,Q,{})}}class z{constructor({primary:t,secondary:n,primaryAccent:i,secondaryAccent:r,background:s,name:o}){k(this,"primary");k(this,"secondary");k(this,"primaryAccent");k(this,"secondaryAccent");k(this,"background");k(this,"name");this.primary=t,this.secondary=n,this.primaryAccent=i,this.secondaryAccent=r,this.background=s,this.name=o}CSS(){return`--primary: ${this.primary}; --secondary: ${this.secondary}; --primaryAccent: ${this.primaryAccent}; --secondaryAccent: ${this.secondaryAccent}; --background: ${this.background}`}}const V=[new z({primary:"#1e1f26",secondary:"#bdc3c7",primaryAccent:"#3498db",secondaryAccent:"#2980b9",background:"#2c3e50",name:"Midnight blue"}),new z({primary:"#ffd700",secondary:"#616161",primaryAccent:"#8c7853",secondaryAccent:"#c5cae9",background:"#121212",name:"Black and gold"}),new z({primary:"#4e9a06",secondary:"#f7e267",primaryAccent:"#edd400",secondaryAccent:"#ce5c00",background:"#1b1b1b",name:"Dark green"}),new z({primary:"#8e24aa",secondary:"#ffd54f",primaryAccent:"#ffb300",secondaryAccent:"#e65100",background:"#121212",name:"Vibrant purple"}),new z({primary:"#008080",secondary:"#ffe0b2",primaryAccent:"#ffab91",secondaryAccent:"#4a148c",background:"#232323",name:"Teal blue"})];function mt(e){let t,n,i,r,s;return{c(){t=p("button"),n=L("🎨"),m(t,"title",i=V[e[0]].name),m(t,"class","svelte-tojmix")},m(o,u){$(o,t,u),_(t,n),r||(s=D(t,"click",e[2]),r=!0)},p(o,[u]){u&1&&i!==(i=V[o[0]].name)&&m(t,"title",i)},i:S,o:S,d(o){o&&Y(t),r=!1,s()}}}function ht(e,t,n){const i=oe();let r=0;Be(()=>{i("changed",V[r])});function s(){n(0,r=(r+1)%V.length),i("changed",V[r])}return[r,s,()=>s()]}class _t extends Z{constructor(t){super(),X(this,t,ht,mt,Q,{})}}function yt(e){let t,n,i,r,s,o,u,l,c,h;n=new dt({}),n.$on("change",e[5]);const d=[e[1]];let v={};for(let f=0;f<d.length;f+=1)v=he(v,d[f]);r=new ut({props:v}),r.$on("switch",e[6]),o=new _t({}),o.$on("changed",vt);const w=[{board:e[0]},{fieldToString:e[2]},e[1]];let M={};for(let f=0;f<w.length;f+=1)M=he(M,w[f]);return c=new nt({props:M}),c.$on("finished",e[3]),{c(){t=p("header"),te(n.$$.fragment),i=O(),te(r.$$.fragment),s=O(),te(o.$$.fragment),u=O(),l=p("main"),te(c.$$.fragment),m(t,"class","svelte-3o9bc2"),m(l,"class","svelte-3o9bc2")},m(f,y){$(f,t,y),q(n,t,null),_(t,i),q(r,t,null),_(t,s),q(o,t,null),$(f,u,y),$(f,l,y),q(c,l,null),h=!0},p(f,[y]){const g=y&2?be(d,[we(f[1])]):{};r.$set(g);const E=y&7?be(w,[y&1&&{board:f[0]},y&4&&{fieldToString:f[2]},y&2&&we(f[1])]):{};c.$set(E)},i(f){h||(F(n.$$.fragment,f),F(r.$$.fragment,f),F(o.$$.fragment,f),F(c.$$.fragment,f),h=!0)},o(f){ee(n.$$.fragment,f),ee(r.$$.fragment,f),ee(o.$$.fragment,f),ee(c.$$.fragment,f),h=!1},d(f){f&&Y(t),G(n),G(r),G(o),f&&Y(u),f&&Y(l),G(c)}}}const gt="❌",pt="⭕";function vt({detail:e}){let t=Object.entries(e);for(let n of t)typeof n[1]=="string"&&document.documentElement.style.setProperty(`--${n[0]}`,`${n[1]}`)}function bt(e,t,n){let i=ie(),r=new Xe,s=h=>{switch(h){case b.EMPTY:return"";case b.PLAYER1:return gt;case b.PLAYER2:return pt}};function o(h){h.detail.isDraw()||(r.addWin(h.detail.winner),n(1,r)),setTimeout(()=>n(0,i=ie()),1e3)}function u(){n(0,i=ie()),r.switchSides(),n(1,r)}function l({detail:h}){r.updateMode(h),n(1,r),n(0,i=ie())}return[i,r,s,o,u,l,()=>u()]}class wt extends Z{constructor(t){super(),X(this,t,bt,yt,Q,{})}}new wt({target:document.getElementById("app")});
