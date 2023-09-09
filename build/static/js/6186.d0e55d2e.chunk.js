"use strict";(self.webpackChunkschool_recycle=self.webpackChunkschool_recycle||[]).push([[6186],{69822:function(t,n,e){e.d(n,{W:function(){return o}});var r=e(15671),i=e(43144),a=e(60136),s=e(29388),c=e(73274),o=function(t){(0,a.Z)(e,t);var n=(0,s.Z)(e);function e(t){var i;(0,r.Z)(this,e);var a=t.chains,s=void 0===a?c.gL9:a,o=t.options;return(i=n.call(this)).chains=s,i.options=o,i}return(0,i.Z)(e,[{key:"getBlockExplorerUrls",value:function(t){var n,e,r=null!==(n=null===(e=t.explorers)||void 0===e?void 0:e.map((function(t){return t.url})))&&void 0!==n?n:[];return r.length>0?r:void 0}},{key:"isChainUnsupported",value:function(t){return!this.chains.some((function(n){return n.chainId===t}))}},{key:"updateChains",value:function(t){this.chains=t}}]),e}(e(13631).Z)},12738:function(t,n,e){e.d(n,{A:function(){return l},C:function(){return d},R:function(){return v},S:function(){return Z},U:function(){return w},a:function(){return f}});var r=e(97326),i=e(43144),a=e(15671),s=e(60136),c=e(29388),o=e(98737),u=e(46170),h=function(t){(0,s.Z)(e,t);var n=(0,c.Z)(e);function e(t,r){var i;(0,a.Z)(this,e);var s=r.cause,c=r.code,o=r.data;if(!Number.isInteger(c))throw new Error('"code" must be an integer.');if(!t||"string"!==typeof t)throw new Error('"message" must be a nonempty string.');return(i=n.call(this,"".concat(t,". Cause: ").concat(JSON.stringify(s)))).cause=s,i.code=c,i.data=o,i}return(0,i.Z)(e)}((0,o.Z)(Error)),p=function(t){(0,s.Z)(e,t);var n=(0,c.Z)(e);function e(t,r){(0,a.Z)(this,e);var i=r.cause,s=r.code,c=r.data;if(!(Number.isInteger(s)&&s>=1e3&&s<=4999))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');return n.call(this,t,{cause:i,code:s,data:c})}return(0,i.Z)(e)}(h),l=function(t){(0,s.Z)(e,t);var n=(0,c.Z)(e);function e(){var t;return(0,a.Z)(this,e),t=n.apply(this,arguments),(0,u._)((0,r.Z)(t),"name","AddChainError"),(0,u._)((0,r.Z)(t),"message","Error adding chain"),t}return(0,i.Z)(e)}((0,o.Z)(Error)),d=function(t){(0,s.Z)(e,t);var n=(0,c.Z)(e);function e(t){var i;(0,a.Z)(this,e);var s=t.chainId,c=t.connectorId;return i=n.call(this,'Chain "'.concat(s,'" not configured for connector "').concat(c,'".')),(0,u._)((0,r.Z)(i),"name","ChainNotConfigured"),i}return(0,i.Z)(e)}((0,o.Z)(Error)),f=function(t){(0,s.Z)(e,t);var n=(0,c.Z)(e);function e(){var t;return(0,a.Z)(this,e),t=n.apply(this,arguments),(0,u._)((0,r.Z)(t),"name","ConnectorNotFoundError"),(0,u._)((0,r.Z)(t),"message","Connector not found"),t}return(0,i.Z)(e)}((0,o.Z)(Error)),v=function(t){(0,s.Z)(e,t);var n=(0,c.Z)(e);function e(t){var i;return(0,a.Z)(this,e),i=n.call(this,"Resource unavailable",{cause:t,code:-32002}),(0,u._)((0,r.Z)(i),"name","ResourceUnavailable"),i}return(0,i.Z)(e)}(h),Z=function(t){(0,s.Z)(e,t);var n=(0,c.Z)(e);function e(t){var i;return(0,a.Z)(this,e),i=n.call(this,"Error switching chain",{cause:t,code:4902}),(0,u._)((0,r.Z)(i),"name","SwitchChainError"),i}return(0,i.Z)(e)}(p),w=function(t){(0,s.Z)(e,t);var n=(0,c.Z)(e);function e(t){var i;return(0,a.Z)(this,e),i=n.call(this,"User rejected request",{cause:t,code:4001}),(0,u._)((0,r.Z)(i),"name","UserRejectedRequestError"),i}return(0,i.Z)(e)}(p)},53800:function(t,n,e){e.d(n,{g:function(){return a},i:function(){return i}});var r=e(73274);function i(t){var n=new URL(t).hostname;return n.endsWith(".thirdweb.com")||"localhost"===n||"0.0.0.0"===n}function a(t){return(0,r.OZ$)(t).map((function(t){try{var n=new URL(t);return n.hostname.endsWith(".thirdweb.com")&&(n.pathname="",n.search=""),n.toString()}catch(e){return t}}))}},6186:function(t,n,e){e.r(n),e.d(n,{WalletConnectConnector:function(){return j}});var r=e(84506),i=e(29439),a=e(74165),s=e(15861),c=e(1413),o=e(15671),u=e(43144),h=e(97326),p=e(60136),l=e(29388),d=e(41146),f=e(63700),v=e(46170),Z=e(97419),w=e(60723),m=e(49716),b=e(22766),g=e(53800),x=e(69822),k=e(12738),y=(e(13631),new Set([1,137,10,42161,56])),C="eip155",_="wagmi.requestedChains",I="wallet_addEthereumChain",S="last-used-chain-id",E=new WeakMap,N=new WeakMap,U=new WeakMap,W=new WeakSet,A=new WeakSet,L=new WeakSet,M=new WeakSet,O=new WeakSet,P=new WeakSet,D=new WeakSet,q=new WeakSet,j=function(t){(0,p.Z)(e,t);var n=(0,l.Z)(e);function e(t){var r;return(0,o.Z)(this,e),r=n.call(this,(0,c.Z)((0,c.Z)({},t),{},{options:(0,c.Z)({isNewChainsStale:!0},t.options)})),(0,d._)((0,h.Z)(r),q),(0,d._)((0,h.Z)(r),D),(0,d._)((0,h.Z)(r),P),(0,d._)((0,h.Z)(r),O),(0,d._)((0,h.Z)(r),M),(0,d._)((0,h.Z)(r),L),(0,d._)((0,h.Z)(r),A),(0,d._)((0,h.Z)(r),W),(0,v._)((0,h.Z)(r),"id",b.w.walletConnect),(0,v._)((0,h.Z)(r),"name","WalletConnect"),(0,v._)((0,h.Z)(r),"ready",!0),(0,f._)((0,h.Z)(r),E,{writable:!0,value:void 0}),(0,f._)((0,h.Z)(r),N,{writable:!0,value:void 0}),(0,f._)((0,h.Z)(r),U,{writable:!0,value:void 0}),(0,v._)((0,h.Z)(r),"onAccountsChanged",(function(t){0===t.length?r.emit("disconnect"):r.emit("change",{account:Z.getAddress(t[0])})})),(0,v._)((0,h.Z)(r),"onChainChanged",function(){var t=(0,s.Z)((0,a.Z)().mark((function t(n){var e,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Number(n),i=r.isChainUnsupported(e),t.next=4,(0,f.b)((0,h.Z)(r),U).setItem(S,String(n));case 4:r.emit("change",{chain:{id:e,unsupported:i}});case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()),(0,v._)((0,h.Z)(r),"onDisconnect",(0,s.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.a)((0,h.Z)(r),O,F).call((0,h.Z)(r),[]);case 2:return t.next=4,(0,f.b)((0,h.Z)(r),U).removeItem(S);case 4:r.emit("disconnect");case 5:case"end":return t.stop()}}),t)})))),(0,v._)((0,h.Z)(r),"onDisplayUri",(function(t){r.emit("message",{type:"display_uri",data:t})})),(0,v._)((0,h.Z)(r),"onConnect",(function(){r.emit("connect",{provider:(0,f.b)((0,h.Z)(r),E)})})),(0,f.a)((0,h.Z)(r),U,t.options.storage),(0,d.a)((0,h.Z)(r),W,R).call((0,h.Z)(r)),r.filteredChains=r.chains.length>50?r.chains.filter((function(t){return y.has(t.chainId)})):r.chains,r}return(0,u.Z)(e,[{key:"connect",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(){var n,e,r,i,s,c,o,u,h,p,l,v,m,b,g=arguments;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=(n=g.length>0&&void 0!==g[0]?g[0]:{}).chainId,r=n.pairingTopic,t.prev=1,i=e){t.next=9;break}return t.next=6,(0,f.b)(this,U).getItem(S);case 6:s=t.sent,c=s?parseInt(s):void 0,i=c&&!this.isChainUnsupported(c)?c:null===(o=this.filteredChains[0])||void 0===o?void 0:o.chainId;case 9:if(i){t.next=11;break}throw new Error("No chains found on connector.");case 11:return t.next=13,this.getProvider();case 13:return u=t.sent,this.setupListeners(),t.next=17,(0,d.a)(this,L,V).call(this);case 17:if(h=t.sent,!u.session||!h){t.next=21;break}return t.next=21,u.disconnect();case 21:if(u.session&&!h){t.next=28;break}return p=this.filteredChains.filter((function(t){return t.chainId!==i})).map((function(t){return t.chainId})),this.emit("message",{type:"connecting"}),t.next=26,u.connect({pairingTopic:r,chains:[i],optionalChains:p.length>0?p:[i]});case 26:return t.next=28,(0,d.a)(this,O,F).call(this,this.filteredChains.map((function(t){return t.chainId})));case 28:return t.next=30,u.enable();case 30:if(0!==(l=t.sent).length){t.next=33;break}throw new Error("No accounts found on provider.");case 33:return v=Z.getAddress(l[0]),t.next=36,this.getChainId();case 36:return m=t.sent,b=this.isChainUnsupported(m),t.abrupt("return",{account:v,chain:{id:m,unsupported:b},provider:new w.Q(u)});case 41:if(t.prev=41,t.t0=t.catch(1),!/user rejected/i.test(null===t.t0||void 0===t.t0?void 0:t.t0.message)){t.next=45;break}throw new k.U(t.t0);case 45:throw t.t0;case 46:case"end":return t.stop()}}),t,this,[[1,41]])})));return function(){return t.apply(this,arguments)}}()},{key:"disconnect",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(){var n,e,r,i=this;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=function(){if("undefined"!==typeof localStorage)for(var t in localStorage)t.startsWith("wc@2")&&localStorage.removeItem(t)})(),t.next=4,this.getProvider();case 4:e=t.sent,r=function(){var t=(0,s.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.disconnect();case 3:t.next=9;break;case 5:if(t.prev=5,t.t0=t.catch(0),/No matching key/i.test(t.t0.message)){t.next=9;break}throw t.t0;case 9:return t.prev=9,(0,d.a)(i,M,B).call(i),t.next=13,(0,d.a)(i,O,F).call(i,[]);case 13:return n(),t.finish(9);case 15:case"end":return t.stop()}}),t,null,[[0,5,9,15]])})));return function(){return t.apply(this,arguments)}}(),r();case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getAccount",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(){var n,e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getProvider();case 2:if(n=t.sent,0!==(e=n.accounts).length){t.next=6;break}throw new Error("No accounts found on provider.");case 6:return t.abrupt("return",Z.getAddress(e[0]));case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getChainId",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(){var n,e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getProvider();case 2:return n=t.sent,e=n.chainId,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getProvider",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(){var n,e=arguments;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=(e.length>0&&void 0!==e[0]?e[0]:{}).chainId,(0,f.b)(this,E)){t.next=4;break}return t.next=4,(0,d.a)(this,W,R).call(this);case 4:if(!n){t.next=7;break}return t.next=7,this.switchChain(n);case 7:if((0,f.b)(this,E)){t.next=9;break}throw new Error("No provider found.");case 9:return t.abrupt("return",(0,f.b)(this,E));case 10:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getSigner",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(){var n,e,r,s,c,o=arguments;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=(o.length>0&&void 0!==o[0]?o[0]:{}).chainId,t.next=3,Promise.all([this.getProvider({chainId:n}),this.getAccount()]);case 3:return e=t.sent,r=(0,i.Z)(e,2),s=r[0],c=r[1],t.abrupt("return",new w.Q(s,n).getSigner(c));case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"isAuthorized",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(){var n,e,r,s,c;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Promise.all([this.getAccount(),this.getProvider()]);case 3:return n=t.sent,e=(0,i.Z)(n,2),r=e[0],s=e[1],t.next=9,(0,d.a)(this,L,V).call(this);case 9:if(c=t.sent,r){t.next=12;break}return t.abrupt("return",!1);case 12:if(!c||!s.session){t.next=21;break}return t.prev=13,t.next=16,s.disconnect();case 16:t.next=20;break;case 18:t.prev=18,t.t0=t.catch(13);case 20:return t.abrupt("return",!1);case 21:return t.abrupt("return",!0);case 24:return t.prev=24,t.t1=t.catch(0),t.abrupt("return",!1);case 27:case"end":return t.stop()}}),t,this,[[0,24],[13,18]])})));return function(){return t.apply(this,arguments)}}()},{key:"switchChain",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(n){var e,r,i,s,o,u,h,p;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.chains.find((function(t){return t.chainId===n}))){t.next=3;break}throw new k.S("Chain with ID: ".concat(n,", not found on connector."));case 3:return t.prev=3,t.next=6,this.getProvider();case 6:if(r=t.sent,i=(0,d.a)(this,D,K).call(this),s=(0,d.a)(this,q,X).call(this),i.includes(n)||!s.includes(I)){t.next=20;break}return u=null!==(o=e.explorers)&&void 0!==o&&o.length?{blockExplorerUrls:[e.explorers[0].url]}:{},t.next=14,r.request({method:I,params:[(0,c.Z)({chainId:m.hexValue(e.chainId),chainName:e.name,nativeCurrency:e.nativeCurrency,rpcUrls:(0,g.g)(e)},u)]});case 14:return t.next=16,(0,d.a)(this,P,$).call(this);case 16:return(h=t.sent).push(n),t.next=20,(0,d.a)(this,O,F).call(this,h);case 20:return t.next=22,r.request({method:"wallet_switchEthereumChain",params:[{chainId:m.hexValue(n)}]});case 22:return t.abrupt("return",e);case 25:if(t.prev=25,t.t0=t.catch(3),p="string"===typeof t.t0?t.t0:null===t.t0||void 0===t.t0?void 0:t.t0.message,!/user rejected request/i.test(p)){t.next=30;break}throw new k.U(t.t0);case 30:throw new k.S(t.t0);case 31:case"end":return t.stop()}}),t,this,[[3,25]])})));return function(n){return t.apply(this,arguments)}}()},{key:"setupListeners",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((0,f.b)(this,E)){t.next=2;break}return t.abrupt("return");case 2:(0,d.a)(this,M,B).call(this),(0,f.b)(this,E).on("accountsChanged",this.onAccountsChanged),(0,f.b)(this,E).on("chainChanged",this.onChainChanged),(0,f.b)(this,E).on("disconnect",this.onDisconnect),(0,f.b)(this,E).on("session_delete",this.onDisconnect),(0,f.b)(this,E).on("display_uri",this.onDisplayUri),(0,f.b)(this,E).on("connect",this.onConnect);case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),e}(x.W);function R(){return T.apply(this,arguments)}function T(){return(T=(0,s.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(0,f.b)(this,N)||(0,f.a)(this,N,(0,d.a)(this,A,J).call(this)),t.abrupt("return",(0,f.b)(this,N));case 2:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function J(){return Q.apply(this,arguments)}function Q(){return(Q=(0,s.Z)((0,a.Z)().mark((function t(){var n,i,s,c,o,u,h,p;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(5894).then(e.bind(e,75894));case 2:if(n=t.sent,i=n.default,s=n.OPTIONAL_EVENTS,c=n.OPTIONAL_METHODS,o=this.filteredChains.map((function(t){return t.chainId})),u=(0,r.Z)(o),h=u[0],p=u.slice(1),!h){t.next=15;break}return t.t0=f.a,t.t1=this,t.t2=E,t.next=13,i.init({showQrModal:!1!==this.options.qrcode,projectId:this.options.projectId,optionalMethods:c,optionalEvents:s,chains:[h],optionalChains:p,metadata:{name:this.options.dappMetadata.name,description:this.options.dappMetadata.description||"",url:this.options.dappMetadata.url,icons:[this.options.dappMetadata.logoUrl||""]},rpcMap:Object.fromEntries(this.filteredChains.map((function(t){return[t.chainId,t.rpc[0]]}))),qrModalOptions:this.options.qrModalOptions});case 13:t.t3=t.sent,(0,t.t0)(t.t1,t.t2,t.t3);case 15:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function V(){return z.apply(this,arguments)}function z(){return(z=(0,s.Z)((0,a.Z)().mark((function t(){var n,e,r;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,d.a)(this,q,X).call(this).includes(I)){t.next=3;break}return t.abrupt("return",!1);case 3:if(this.options.isNewChainsStale){t.next=5;break}return t.abrupt("return",!1);case 5:return t.next=7,(0,d.a)(this,P,$).call(this);case 7:if(n=t.sent,e=this.filteredChains.map((function(t){return t.chainId})),!(r=(0,d.a)(this,D,K).call(this)).length||r.some((function(t){return e.includes(t)}))){t.next=12;break}return t.abrupt("return",!1);case 12:return t.abrupt("return",!e.every((function(t){return n.includes(t)})));case 13:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function B(){(0,f.b)(this,E)&&((0,f.b)(this,E).removeListener("accountsChanged",this.onAccountsChanged),(0,f.b)(this,E).removeListener("chainChanged",this.onChainChanged),(0,f.b)(this,E).removeListener("disconnect",this.onDisconnect),(0,f.b)(this,E).removeListener("session_delete",this.onDisconnect),(0,f.b)(this,E).removeListener("display_uri",this.onDisplayUri),(0,f.b)(this,E).removeListener("connect",this.onConnect))}function F(t){return H.apply(this,arguments)}function H(){return(H=(0,s.Z)((0,a.Z)().mark((function t(n){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,f.b)(this,U).setItem(_,JSON.stringify(n));case 2:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function $(){return G.apply(this,arguments)}function G(){return(G=(0,s.Z)((0,a.Z)().mark((function t(){var n;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,f.b)(this,U).getItem(_);case 2:return n=t.sent,t.abrupt("return",n?JSON.parse(n):[]);case 4:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function K(){var t;if(!(0,f.b)(this,E))return[];var n=null===(t=(0,f.b)(this,E).session)||void 0===t||null===(t=t.namespaces[C])||void 0===t||null===(t=t.chains)||void 0===t?void 0:t.map((function(t){return parseInt(t.split(":")[1]||"")}));return null!==n&&void 0!==n?n:[]}function X(){var t;if(!(0,f.b)(this,E))return[];var n=null===(t=(0,f.b)(this,E).session)||void 0===t||null===(t=t.namespaces[C])||void 0===t?void 0:t.methods;return null!==n&&void 0!==n?n:[]}}}]);
//# sourceMappingURL=6186.d0e55d2e.chunk.js.map