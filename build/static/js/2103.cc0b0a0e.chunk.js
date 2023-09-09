"use strict";(self.webpackChunkschool_recycle=self.webpackChunkschool_recycle||[]).push([[2103],{61779:function(e,t,r){function n(e){return"string"===typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"===typeof e?Number(e):e}r.d(t,{n:function(){return n}})},32103:function(e,t,r){r.r(t),r.d(t,{PaperWalletConnector:function(){return k}});var n=r(74165),a=r(15861),i=r(15671),s=r(43144),u=r(97326),o=r(60136),c=r(29388),l=r(63700),p=r(46170),h=r(20684),d=r(21410),f=r(97419),v=r(22766),m=r(61779),g=(r(13631),new WeakMap),w=new WeakMap,k=function(e){(0,o.Z)(h,e);var t=(0,c.Z)(h);function h(e){var r;return(0,i.Z)(this,h),r=t.call(this),(0,p._)((0,u.Z)(r),"id",v.w.paper),(0,p._)((0,u.Z)(r),"name","Paper Wallet"),(0,p._)((0,u.Z)(r),"ready",!0),(0,p._)((0,u.Z)(r),"user",null),(0,l._)((0,u.Z)(r),g,{writable:!0,value:void 0}),(0,l._)((0,u.Z)(r),w,{writable:!0,value:void 0}),(0,p._)((0,u.Z)(r),"onAccountsChanged",function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=5;break}return e.next=3,r.onDisconnect();case 3:e.next=6;break;case 5:r.emit("change",{account:f.getAddress(t[0])});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),(0,p._)((0,u.Z)(r),"onChainChanged",(function(e){var t=(0,m.n)(e),n=-1===r.options.chains.findIndex((function(e){return e.chainId===t}));r.emit("change",{chain:{id:t,unsupported:n}})})),(0,p._)((0,u.Z)(r),"onDisconnect",(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.emit("disconnect");case 1:case"end":return e.stop()}}),e)})))),r.options=e,r}return(0,s.Z)(h,[{key:"getPaperSDK",value:function(){var e=this;return(0,l.b)(this,g)||(0,l.a)(this,g,new Promise(function(){var t=(0,a.Z)((0,n.Z)().mark((function t(a,i){var s,u,o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Promise.resolve().then(r.bind(r,21410));case 3:u=t.sent,o=u.PaperEmbeddedWalletSdk,a(new o({advancedOptions:{recoveryShareManagement:null===(s=e.options.advancedOptions)||void 0===s?void 0:s.recoveryShareManagement},clientId:e.options.clientId,chain:"Ethereum",styles:e.options.styles})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),i(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,r){return t.apply(this,arguments)}}())),(0,l.b)(this,g)}},{key:"connect",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getPaperSDK();case 2:if(r=e.sent){e.next=5;break}throw new Error("Paper SDK not initialized");case 5:return e.next=7,r.getUser();case 7:a=e.sent,e.t0=a.status,e.next=e.t0===d.UserStatus.LOGGED_OUT?11:e.t0===d.UserStatus.LOGGED_IN_WALLET_INITIALIZED?22:24;break;case 11:if(null===t||void 0===t||!t.email){e.next=17;break}return e.next=14,r.auth.loginWithPaperEmailOtp({email:t.email});case 14:i=e.sent,e.next=20;break;case 17:return e.next=19,r.auth.loginWithPaperModal();case 19:i=e.sent;case 20:return this.user=i.user,e.abrupt("break",24);case 22:return this.user=a,e.abrupt("break",24);case 24:if(this.user){e.next=26;break}throw new Error("Error connecting User");case 26:return null!==t&&void 0!==t&&t.chainId&&this.switchChain(t.chainId),this.setupListeners(),e.abrupt("return",this.getAddress());case 29:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"disconnect",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.b)(this,g);case 2:return t=e.sent,e.next=5,null===t||void 0===t?void 0:t.auth.logout();case 5:(0,l.a)(this,w,void 0),this.user=null;case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getAddress",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getSigner();case 2:return t=e.sent,e.abrupt("return",t.getAddress());case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isConnected",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.getAddress();case 3:return t=e.sent,e.abrupt("return",!!t);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"getProvider",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getSigner();case 2:if((t=e.sent).provider){e.next=5;break}throw new Error("Provider not found");case 5:return e.abrupt("return",t.provider);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getSigner",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,a,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,l.b)(this,w)){e.next=2;break}return e.abrupt("return",(0,l.b)(this,w));case 2:if(this.user){e.next=14;break}return e.next=5,this.getPaperSDK();case 5:return r=e.sent,e.next=8,r.getUser();case 8:a=e.sent,e.t0=a.status,e.next=e.t0===d.UserStatus.LOGGED_IN_WALLET_INITIALIZED?12:14;break;case 12:return this.user=a,e.abrupt("break",14);case 14:return e.next=16,null===(t=this.user)||void 0===t?void 0:t.wallet.getEthersJsSigner({rpcEndpoint:this.options.chain.rpc[0]});case 16:if(i=e.sent){e.next=19;break}throw new Error("Signer not found");case 19:return(0,l.a)(this,w,i),e.abrupt("return",i);case 21:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isAuthorized",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"switchChain",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=this.options.chains.find((function(e){return e.chainId===t}))){e.next=3;break}throw new Error("Chain not configured");case 3:return e.next=5,null===(r=this.user)||void 0===r?void 0:r.wallet.setChain({chain:"Ethereum"});case 5:return e.t0=l.a,e.t1=this,e.t2=w,e.next=10,null===(a=this.user)||void 0===a?void 0:a.wallet.getEthersJsSigner({rpcEndpoint:i.rpc[0]});case 10:e.t3=e.sent,(0,e.t0)(e.t1,e.t2,e.t3),this.emit("change",{chain:{id:t,unsupported:!1}});case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setupListeners",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getProvider();case 2:(t=e.sent).on&&(t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateChains",value:function(e){this.options.chains=e}},{key:"getEmail",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getProvider();case 2:if(this.user){e.next=4;break}throw new Error("No user found, Paper Wallet is not connected");case 4:return e.abrupt("return",this.user.authDetails.email);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),h}(h.C)},21410:function(e,t,r){r.r(t),r.d(t,{AUTH_TOKEN_LOCAL_STORAGE_NAME:function(){return O},AuthProvider:function(){return P},DEVICE_SHARE_LOCAL_STORAGE_NAME:function(){return C},DEVICE_SHARE_LOCAL_STORAGE_NAME_DEPRECATED:function(){return D},PaperEmbeddedWalletSdk:function(){return $},RecoveryShareManagement:function(){return M},UserStatus:function(){return W},UserWalletStatus:function(){return N},WALLET_USER_DETAILS_LOCAL_STORAGE_NAME:function(){return S},WALLET_USER_ID_LOCAL_STORAGE_NAME:function(){return _}});var n,a,i=r(97326),s=r(60136),u=r(29388),o=r(74165),c=r(15671),l=r(43144),p=r(37762),h={Ethereum:"https://ethereum.rpc.thirdweb.com",Goerli:"https://goerli.rpc.thirdweb.com",Mumbai:"https://mumbai.rpc.thirdweb.com",Polygon:"https://polygon.rpc.thirdweb.com",Avalanche:"https://avalanche.rpc.thirdweb.com",Optimism:"https://optimism.rpc.thirdweb.com",OptimismGoerli:"https://optimism-goerli.rpc.thirdweb.com",BSC:"https://binance.rpc.thirdweb.com",BSCTestnet:"https://binance-testnet.rpc.thirdweb.com",ArbitrumOne:"https://arbitrum.rpc.thirdweb.com",ArbitrumGoerli:"https://arbitrum-goerli.rpc.thirdweb.com",Fantom:"https://fantom.rpc.thirdweb.com",FantomTestnet:"https://fantom-testnet.rpc.thirdweb.com",Sepolia:"https://sepolia.rpc.thirdweb.com",AvalancheFuji:"https://avalanche-fuji.rpc.thirdweb.com"},d=function(){var e;return"undefined"!=typeof window&&"true"===window.localStorage.getItem("IS_PAPER_DEV")?null!=(e=window.localStorage.getItem("PAPER_DEV_URL"))?e:"http://localhost:3000":"undefined"!=typeof window&&window.location.origin.includes("paper.xyz")?window.location.origin:"https://withpaper.com"},f=r(5829),v=r(68408),m=r(30520),g=Object.defineProperty,w=Object.defineProperties,k=Object.getOwnPropertyDescriptors,Z=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,y=function(e,t,r){return t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},b=function(e,t){for(var r in t||(t={}))I.call(t,r)&&y(e,r,t[r]);if(Z){var n,a=(0,p.Z)(Z(t));try{for(a.s();!(n=a.n()).done;){r=n.value;x.call(t,r)&&y(e,r,t[r])}}catch(i){a.e(i)}finally{a.f()}}return e},E=function(e,t){return w(e,k(t))},L=function(e,t,r){return new Promise((function(n,a){var i=function(e){try{u(r.next(e))}catch(t){a(t)}},s=function(e){try{u(r.throw(e))}catch(t){a(t)}},u=function(e){return e.done?n(e.value):Promise.resolve(e.value).then(i,s)};u((r=r.apply(e,t)).next())}))},A="/sdk/2022-08-12/embedded-wallet",S=function(e){return"paperEwsWalletUserDetails-".concat(e)},_=function(e){return"paperEwsWalletUserId-".concat(e)},O=function(e){return"".concat("walletToken","-").concat(e)},C=function(e,t){return"".concat("a","-").concat(e,"-").concat(t)},D=function(e){return"".concat("a","-").concat(e)},M=((n=M||{}).USER_MANAGED="USER_MANAGED",n.AWS_MANAGED="AWS_MANAGED",n),P=function(e){return e.PAPER_EMAIL_OTP="PaperEmailOTP",e.GOOGLE="Google",e.TWITTER="Twitter",e.COGNITO="Cognito",e.AUTH0="Auth0",e.CUSTOM_JWT="CustomJWT",e}(P||{}),W=function(e){return e.LOGGED_OUT="Logged Out",e.LOGGED_IN_WALLET_INITIALIZED="Logged In, Wallet Initialized",e}(W||{}),N=((a=N||{}).LOGGED_OUT="Logged Out",a.LOGGED_IN_WALLET_UNINITIALIZED="Logged In, Wallet Uninitialized",a.LOGGED_IN_NEW_DEVICE="Logged In, New Device",a.LOGGED_IN_WALLET_INITIALIZED="Logged In, Wallet Initialized",a),T=new Map,U=function(){function e(t){var r=t.clientId;(0,c.Z)(this,e),this.isSupported="undefined"!=typeof window&&!!window.localStorage,this.clientId=r}return(0,l.Z)(e,[{key:"getItem",value:function(e){return L(this,null,(0,o.Z)().mark((function t(){var r;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.isSupported?window.localStorage.getItem(e):null!=(r=T.get(e))?r:null);case 1:case"end":return t.stop()}}),t,this)})))}},{key:"setItem",value:function(e,t){return L(this,null,(0,o.Z)().mark((function r(){return(0,o.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!this.isSupported){r.next=2;break}return r.abrupt("return",window.localStorage.setItem(e,t));case 2:T.set(e,t);case 3:case"end":return r.stop()}}),r,this)})))}},{key:"removeItem",value:function(e){return L(this,null,(0,o.Z)().mark((function t(){var r;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getItem(e);case 2:return r=t.sent,t.abrupt("return",!(!this.isSupported||!r)&&(window.localStorage.removeItem(e),!0));case 4:case"end":return t.stop()}}),t,this)})))}},{key:"saveAuthCookie",value:function(e){return L(this,null,(0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setItem(O(this.clientId),e);case 2:case"end":return t.stop()}}),t,this)})))}},{key:"getAuthCookie",value:function(){return L(this,null,(0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.getItem(O(this.clientId)));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"removeAuthCookie",value:function(){return L(this,null,(0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.removeItem(O(this.clientId)));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"saveDeviceShare",value:function(e,t){return L(this,null,(0,o.Z)().mark((function r(){return(0,o.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.saveWalletUserId(t);case 2:return r.next=4,this.setItem(C(this.clientId,t),e);case 4:case"end":return r.stop()}}),r,this)})))}},{key:"getDeviceShare",value:function(){return L(this,null,(0,o.Z)().mark((function e(){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getWalletUserId();case 2:return t=e.sent,e.abrupt("return",t?this.getItem(C(this.clientId,t)):null);case 4:case"end":return e.stop()}}),e,this)})))}},{key:"removeDeviceShare",value:function(){return L(this,null,(0,o.Z)().mark((function e(){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getWalletUserId();case 2:return t=e.sent,e.abrupt("return",!!t&&this.removeItem(C(this.clientId,t)));case 4:case"end":return e.stop()}}),e,this)})))}},{key:"getWalletUserId",value:function(){return L(this,null,(0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.getItem(_(this.clientId)));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"saveWalletUserId",value:function(e){return L(this,null,(0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setItem(_(this.clientId),e);case 2:case"end":return t.stop()}}),t,this)})))}},{key:"removeWalletUserId",value:function(){return L(this,null,(0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.removeItem(_(this.clientId)));case 1:case"end":return e.stop()}}),e,this)})))}}]),e}();function R(e){return new Promise((function(t){setTimeout(t,1e3*e)}))}var G={height:"100%",width:"100%",border:"none",backgroundColor:"transparent",colorScheme:"light",position:"fixed",top:"0px",right:"0px",zIndex:"2147483646",display:"none"},j=new Map,q=function(){function e(t){var r=t.link,n=t.iframeId,a=t.container,i=void 0===a?document.body:a,s=t.iframeStyles,u=t.onIframeInitialize;(0,c.Z)(this,e),this.POLLING_INTERVAL_SECONDS=1.4,this.POST_LOAD_BUFFER_SECONDS=1;var o=document.getElementById(n),l=new URL(r),p="1.1.3";if(l.searchParams.set("sdkVersion",p),!o||o.src!=l.href){if(!o){o=document.createElement("iframe");var h=b(b({},G),s);Object.assign(o.style,h),o.setAttribute("id",n),o.setAttribute("fetchpriority","high"),i.appendChild(o)}o.src=l.href,o.setAttribute("data-version",p),o.onload=this.onIframeLoadHandler(o,this.POST_LOAD_BUFFER_SECONDS,u)}this.iframe=o}return(0,l.Z)(e,[{key:"onIframeLoadedInitVariables",value:function(){return L(this,null,(0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})))}},{key:"onIframeLoadHandler",value:function(e,t,r){var n=this;return function(){return L(n,null,(0,o.Z)().mark((function n(){var a=this;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,new Promise((function(n,i){return L(a,null,(0,o.Z)().mark((function a(){var s,u;return(0,o.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return(u=new MessageChannel).port1.onmessage=function(t){var a=t.data;return u.port1.close(),a.success?(j.set(e.src,!0),r&&r(),n(!0)):i(new Error(a.error))},a.next=4,R(t);case 4:if("initIframe",a.t0=null==(s=null==e?void 0:e.contentWindow),a.t0){a.next=16;break}return a.t1=s,a.t2="initIframe",a.next=11,this.onIframeLoadedInitVariables();case 11:a.t3=a.sent,a.t4={eventType:a.t2,data:a.t3},a.t5="".concat(d()).concat(A),a.t6=[u.port2],a.t1.postMessage.call(a.t1,a.t4,a.t5,a.t6);case 16:case"end":return a.stop()}}),a,this)})))}));case 2:case"end":return n.stop()}}),n)})))}}},{key:"call",value:function(e){return L(this,arguments,(function(e){var t=this,r=e.procedureName,n=e.params,a=e.showIframe,i=void 0!==a&&a,s=e.injectRecoveryCode,u=void 0===s?{isInjectRecoveryCode:!1}:s;return(0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j.get(t.iframe.src)){e.next=5;break}return e.next=3,R(t.POLLING_INTERVAL_SECONDS);case 3:e.next=0;break;case 5:if(e.t0=i,!e.t0){e.next=10;break}return t.iframe.style.display="block",e.next=10,R(.005);case 10:return e.abrupt("return",new Promise((function(e,a){var s;if(u.isInjectRecoveryCode){window.addEventListener("message",(function e(r){return L(t,null,(0,o.Z)().mark((function t(){var n,a,i;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.origin===d()&&"paper_getRecoveryCode"===r.data.type&&"string"==typeof r.data.userWalletId){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,null==(n=u.getRecoveryCode)?void 0:n.call(u,r.data.userWalletId);case 4:i=t.sent,null==(a=this.iframe.contentWindow)||a.postMessage({type:"paper_getRecoveryCode_response",recoveryCode:i},d()),window.removeEventListener("message",e);case 6:case"end":return t.stop()}}),t,this)})))}))}var c=new MessageChannel;c.port1.onmessage=function(r){return L(t,null,(0,o.Z)().mark((function t(){var n;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=r.data,c.port1.close(),t.t0=i,!t.t0){t.next=7;break}return t.next=6,R(.1);case 6:this.iframe.style.display="none";case 7:n.success?e(n.data):a(new Error(n.error));case 8:case"end":return t.stop()}}),t,this)})))},null==(s=t.iframe.contentWindow)||s.postMessage({eventType:r,data:n},"".concat(d()).concat(A),[c.port2])})));case 11:case"end":return e.stop()}}),e)}))()}))}},{key:"destroy",value:function(){j.delete(this.iframe.src)}}]),e}(),Q=function(e){(0,s.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,a=e.clientId,i=e.customizationOptions;return(0,c.Z)(this,r),(n=t.call(this,{iframeId:H,link:z({clientId:a,path:A,queryParams:i}).href,container:document.body})).clientId=a,n}return(0,l.Z)(r,[{key:"onIframeLoadedInitVariables",value:function(){return L(this,null,(0,o.Z)().mark((function e(){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new U({clientId:this.clientId}),e.next=3,t.getAuthCookie();case 3:return e.t0=e.sent,e.next=6,t.getDeviceShare();case 6:return e.t1=e.sent,e.next=9,t.getWalletUserId();case 9:return e.t2=e.sent,e.t3=this.clientId,e.abrupt("return",{authCookie:e.t0,deviceShareStored:e.t1,walletUserId:e.t2,clientId:e.t3});case 12:case"end":return e.stop()}}),e,this)})))}}]),r}(q);function z(e){var t,r=e.clientId,n=e.path,a=e.queryParams,i=new URL(n,d());if(a)for(var s=0,u=Object.keys(a);s<u.length;s++){var o=u[s];i.searchParams.set(o,(null==(t=a[o])?void 0:t.toString())||"")}return i.searchParams.set("clientId",r),i}var H="paper-embedded-wallet-iframe",V=function(){function e(t){var r=t.querier,n=t.preLogin,a=t.postLogin;(0,c.Z)(this,e),this.LoginQuerier=r,this.preLogin=n,this.postLogin=a}return(0,l.Z)(e,[{key:"sendPaperEmailLoginOtp",value:function(e){return L(this,arguments,(function(e){var t=this,r=e.email,n=e.recoveryShareManagement;return(0,o.Z)().mark((function e(){var a,i,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.preLogin();case 2:return e.next=4,t.LoginQuerier.call({procedureName:"sendPaperEmailLoginOtp",params:{email:r,recoveryShareManagement:n}});case 4:return a=e.sent,i=a.isNewUser,s=a.isNewDevice,e.abrupt("return",{isNewUser:i,isNewDevice:s});case 8:case"end":return e.stop()}}),e)}))()}))}}]),e}(),F=function(e){(0,s.Z)(r,e);var t=(0,u.Z)(r);function r(){return(0,c.Z)(this,r),t.apply(this,arguments)}return(0,l.Z)(r,[{key:"loginWithPaperModal",value:function(){return L(this,null,(0,o.Z)().mark((function e(){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.preLogin();case 2:return e.next=4,this.LoginQuerier.call({procedureName:"loginWithPaperModal",params:{recoveryShareManagement:"AWS_MANAGED"},showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0}});case 4:return t=e.sent,e.abrupt("return",this.postLogin(t));case 6:case"end":return e.stop()}}),e,this)})))}},{key:"loginWithPaperEmailOtp",value:function(e){return L(this,arguments,(function(e){var t=this,r=e.email;return(0,o.Z)().mark((function e(){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.preLogin();case 2:return e.next=4,t.LoginQuerier.call({procedureName:"loginWithPaperModal",params:{email:r,recoveryShareManagement:"AWS_MANAGED"},showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0}});case 4:return n=e.sent,e.abrupt("return",t.postLogin(n));case 6:case"end":return e.stop()}}),e)}))()}))}},{key:"verifyPaperEmailLoginOtp",value:function(e){return L(this,arguments,(function(e){var t=this,r=e.email,n=e.otp;return(0,o.Z)().mark((function e(){var a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.LoginQuerier.call({procedureName:"verifyPaperEmailLoginOtp",params:{email:r,otp:n,recoveryShareManagement:"AWS_MANAGED"},injectRecoveryCode:{isInjectRecoveryCode:!0}});case 2:return a=e.sent,e.abrupt("return",t.postLogin(a));case 4:case"end":return e.stop()}}),e)}))()}))}}]),r}(V),J=function(e){(0,s.Z)(r,e);var t=(0,u.Z)(r);function r(){return(0,c.Z)(this,r),t.apply(this,arguments)}return(0,l.Z)(r,[{key:"loginWithPaperModal",value:function(e){return L(this,null,(0,o.Z)().mark((function t(){var r;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.preLogin();case 2:return t.next=4,this.LoginQuerier.call({procedureName:"loginWithPaperModal",params:void 0,showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0,getRecoveryCode:null==e?void 0:e.getRecoveryCode}});case 4:return r=t.sent,t.abrupt("return",this.postLogin(r));case 6:case"end":return t.stop()}}),t,this)})))}},{key:"loginWithPaperEmailOtp",value:function(e){return L(this,arguments,(function(e){var t=this,r=e.email,n=e.recoveryCode;return(0,o.Z)().mark((function e(){var a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.preLogin();case 2:return e.next=4,t.LoginQuerier.call({procedureName:"loginWithPaperModal",params:{email:r,recoveryCode:n},showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0}});case 4:return a=e.sent,e.abrupt("return",t.postLogin(a));case 6:case"end":return e.stop()}}),e)}))()}))}},{key:"verifyPaperEmailLoginOtp",value:function(e){return L(this,arguments,(function(e){var t=this,r=e.email,n=e.otp,a=e.recoveryCode;return(0,o.Z)().mark((function e(){var i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.LoginQuerier.call({procedureName:"verifyPaperEmailLoginOtp",params:{email:r,otp:n,recoveryCode:a},injectRecoveryCode:{isInjectRecoveryCode:!0}});case 2:return i=e.sent,e.abrupt("return",t.postLogin(i));case 4:case"end":return e.stop()}}),e)}))()}))}}]),r}(V),B=function(){function e(t){var r,n=this,a=t.clientId,i=t.advancedOptions,s=t.querier,u=t.onAuthSuccess;(0,c.Z)(this,e),this.clientId=a,this.advancedOptions={recoveryShareManagement:null!=(r=null==i?void 0:i.recoveryShareManagement)?r:"AWS_MANAGED"},this.AuthQuerier=s,this.localStorage=new U({clientId:a}),this.onAuthSuccess=u,this.userManagedLogin=new J({postLogin:function(e){return L(n,null,(0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.postLogin(e));case 1:case"end":return t.stop()}}),t,this)})))},preLogin:function(){return L(n,null,(0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.preLogin();case 2:case"end":return e.stop()}}),e,this)})))},querier:s}),this.awsManagedLogin=new F({postLogin:function(e){return L(n,null,(0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.postLogin(e));case 1:case"end":return t.stop()}}),t,this)})))},preLogin:function(){return L(n,null,(0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.preLogin();case 2:case"end":return e.stop()}}),e,this)})))},querier:s})}return(0,l.Z)(e,[{key:"preLogin",value:function(){return L(this,null,(0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.logout();case 2:case"end":return e.stop()}}),e,this)})))}},{key:"postLogin",value:function(e){return L(this,arguments,(function(e){var t=this,r=e.storedToken,n=e.walletDetails;return(0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r.shouldStoreCookieString,!e.t0){e.next=4;break}return e.next=4,t.localStorage.saveAuthCookie(r.cookieString);case 4:return e.next=6,t.onAuthSuccess({storedToken:r,walletDetails:n});case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)}))()}))}},{key:"loginWithJwtAuth",value:function(e){return L(this,arguments,(function(e){var t=this,r=e.token,n=e.authProvider,a=e.recoveryCode;return(0,o.Z)().mark((function e(){var i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.preLogin();case 2:return e.next=4,t.AuthQuerier.call({procedureName:"loginWithJwtAuthCallback",params:{token:r,authProvider:n,recoveryCode:a}});case 4:return i=e.sent,e.abrupt("return",t.postLogin(i));case 6:case"end":return e.stop()}}),e)}))()}))}},{key:"loginWithPaperModal",value:function(e){return L(this,null,(0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.preLogin();case 2:return t.abrupt("return","AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.loginWithPaperModal():this.userManagedLogin.loginWithPaperModal(e));case 3:case"end":return t.stop()}}),t,this)})))}},{key:"loginWithPaperEmailOtp",value:function(e){return L(this,null,(0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return","AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.loginWithPaperEmailOtp({email:e.email}):this.userManagedLogin.loginWithPaperEmailOtp(e));case 1:case"end":return t.stop()}}),t,this)})))}},{key:"sendPaperEmailLoginOtp",value:function(e){return L(this,arguments,(function(e){var t=this,r=e.email;return(0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return","AWS_MANAGED"===t.advancedOptions.recoveryShareManagement?t.awsManagedLogin.sendPaperEmailLoginOtp({email:r,recoveryShareManagement:"AWS_MANAGED"}):t.userManagedLogin.sendPaperEmailLoginOtp({email:r}));case 1:case"end":return e.stop()}}),e)}))()}))}},{key:"verifyPaperEmailLoginOtp",value:function(e){return L(this,null,(0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return","AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.verifyPaperEmailLoginOtp(e):this.userManagedLogin.verifyPaperEmailLoginOtp(e));case 1:case"end":return t.stop()}}),t,this)})))}},{key:"logout",value:function(){return L(this,null,(0,o.Z)().mark((function e(){var t,r,n,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.AuthQuerier.call({procedureName:"logout",params:void 0});case 2:return t=e.sent,r=t.success,e.next=6,this.localStorage.removeAuthCookie();case 6:return n=e.sent,e.next=9,this.localStorage.removeWalletUserId();case 9:return a=e.sent,e.abrupt("return",{success:r||n||a});case 11:case"end":return e.stop()}}),e,this)})))}}]),e}(),K=function(){function e(t){var r=t.chain,n=t.clientId,a=t.querier;(0,c.Z)(this,e),this.chain=r,this.clientId=n,this.gaslessTransactionQuerier=a}return(0,l.Z)(e,[{key:"callContract",value:function(e){return L(this,arguments,(function(e){var t=this,r=e.contractAddress,n=e.methodArgs,a=e.methodInterface;return(0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.gaslessTransactionQuerier.call({procedureName:"callContract",params:{chain:t.chain,contractAddress:r,method:{args:n,stub:a}}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))()}))}}]),e}(),X=function(e){(0,s.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n,a,s=e.provider,u=e.clientId,o=e.querier;return(0,c.Z)(this,r),(n=t.call(this)).DEFAULT_ETHEREUM_CHAIN_ID=5,n.clientId=u,n.querier=o,n.endpoint=null==(a=s.connection)?void 0:a.url,(0,m.defineReadOnly)((0,i.Z)(n),"provider",s),n}return(0,l.Z)(r,[{key:"getAddress",value:function(){return L(this,null,(0,o.Z)().mark((function e(){var t,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.querier.call({procedureName:"getAddress",params:void 0});case 2:return t=e.sent,r=t.address,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})))}},{key:"signMessage",value:function(e){return L(this,null,(0,o.Z)().mark((function t(){var r,n,a,i,s,u,c;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,null==(r=this.provider)?void 0:r.getNetwork();case 2:return(s=t.sent)&&s._defaultProvider,t.t0=this.querier,t.t1=e,t.next=8,null==(n=this.provider)?void 0:n.getNetwork();case 8:if(t.t2=a=t.sent,null!=t.t2){t.next=13;break}t.t3=void 0,t.next=14;break;case 13:t.t3=a.chainId;case 14:if(t.t4=i=t.t3,null==t.t4){t.next=19;break}t.t5=i,t.next=20;break;case 19:t.t5=this.DEFAULT_ETHEREUM_CHAIN_ID;case 20:return t.t6=t.t5,t.t7=this.endpoint,t.t8={message:t.t1,chainId:t.t6,rpcEndpoint:t.t7},t.t9={procedureName:"signMessage",params:t.t8},t.next=26,t.t0.call.call(t.t0,t.t9);case 26:return u=t.sent,c=u.signedMessage,t.abrupt("return",c);case 29:case"end":return t.stop()}}),t,this)})))}},{key:"signTransaction",value:function(e){return L(this,null,(0,o.Z)().mark((function t(){var r,n,a,i,s;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=this.querier,t.t1=e,t.next=4,null==(r=this.provider)?void 0:r.getNetwork();case 4:if(t.t2=n=t.sent,null!=t.t2){t.next=9;break}t.t3=void 0,t.next=10;break;case 9:t.t3=n.chainId;case 10:if(t.t4=a=t.t3,null==t.t4){t.next=15;break}t.t5=a,t.next=16;break;case 15:t.t5=this.DEFAULT_ETHEREUM_CHAIN_ID;case 16:return t.t6=t.t5,t.t7=this.endpoint,t.t8={transaction:t.t1,chainId:t.t6,rpcEndpoint:t.t7},t.t9={procedureName:"signTransaction",params:t.t8},t.next=22,t.t0.call.call(t.t0,t.t9);case 22:return i=t.sent,s=i.signedTransaction,t.abrupt("return",s);case 25:case"end":return t.stop()}}),t,this)})))}},{key:"_signTypedData",value:function(e,t,r){return L(this,null,(0,o.Z)().mark((function n(){var a,i,s,u,c;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=this.querier,n.t1=e,n.t2=t,n.t3=r,n.next=6,null==(a=this.provider)?void 0:a.getNetwork();case 6:if(n.t4=i=n.sent,null!=n.t4){n.next=11;break}n.t5=void 0,n.next=12;break;case 11:n.t5=i.chainId;case 12:if(n.t6=s=n.t5,null==n.t6){n.next=17;break}n.t7=s,n.next=18;break;case 17:n.t7=this.DEFAULT_ETHEREUM_CHAIN_ID;case 18:return n.t8=n.t7,n.t9=this.endpoint,n.t10={domain:n.t1,types:n.t2,message:n.t3,chainId:n.t8,rpcEndpoint:n.t9},n.t11={procedureName:"signTypedDataV4",params:n.t10},n.next=24,n.t0.call.call(n.t0,n.t11);case 24:return u=n.sent,c=u.signedTypedData,n.abrupt("return",c);case 27:case"end":return n.stop()}}),n,this)})))}},{key:"connect",value:function(e){return new r({clientId:this.clientId,provider:e,querier:this.querier})}}]),r}(v.Signer),Y=function(){function e(t){var r=t.clientId,n=t.chain,a=t.querier;(0,c.Z)(this,e),this.clientId=r,this.chain=n,this.walletManagerQuerier=a,this.gasless=new K({chain:n,clientId:r,querier:a}),this.localStorage=new U({clientId:r})}return(0,l.Z)(e,[{key:"postWalletSetUp",value:function(e){return L(this,arguments,(function(e){var t=this,r=e.deviceShareStored,n=e.walletAddress,a=e.isIframeStorageEnabled,i=e.walletUserId;return(0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=a,e.t0){e.next=4;break}return e.next=4,t.localStorage.saveDeviceShare(r,i);case 4:return e.abrupt("return",{walletAddress:n});case 5:case"end":return e.stop()}}),e)}))()}))}},{key:"getUserWalletStatus",value:function(){return L(this,null,(0,o.Z)().mark((function e(){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.walletManagerQuerier.call({procedureName:"getUserStatus",params:void 0});case 2:return t=e.sent,e.abrupt("return","Logged In, Wallet Initialized"===t.status?{status:"Logged In, Wallet Initialized",user:E(b({},t.user),{wallet:this})}:t);case 4:case"end":return e.stop()}}),e,this)})))}},{key:"setChain",value:function(e){return L(this,arguments,(function(e){var t=this,r=e.chain;return(0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.chain=r,t.gasless=new K({chain:r,clientId:t.clientId,querier:t.walletManagerQuerier});case 1:case"end":return e.stop()}}),e)}))()}))}},{key:"getEthersJsSigner",value:function(e){return L(this,null,(0,o.Z)().mark((function t(){var r;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new X({clientId:this.clientId,provider:(0,f.getDefaultProvider)(null!=(r=null==e?void 0:e.rpcEndpoint)?r:h[this.chain]),querier:this.walletManagerQuerier}));case 1:case"end":return t.stop()}}),t,this)})))}}]),e}(),$=function(){function e(t){var r=this,n=t.clientId,a=t.chain,i=t.styles,s=t.advancedOptions;(0,c.Z)(this,e),this.clientId=n,this.querier=new Q({clientId:n,customizationOptions:i}),this.wallet=new Y({clientId:n,chain:a,querier:this.querier}),this.auth=new B({clientId:n,advancedOptions:b({recoveryShareManagement:"USER_MANAGED"},null!=s?s:{}),querier:this.querier,onAuthSuccess:function(e){return L(r,null,(0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.wallet.postWalletSetUp(E(b({},e.walletDetails),{walletUserId:e.storedToken.authDetails.userWalletId}));case 2:return t.abrupt("return",{user:{status:"Logged In, Wallet Initialized",authDetails:e.storedToken.authDetails,wallet:this.wallet,walletAddress:e.walletDetails.walletAddress}});case 3:case"end":return t.stop()}}),t,this)})))}})}return(0,l.Z)(e,[{key:"getUser",value:function(){return L(this,null,(0,o.Z)().mark((function e(){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.wallet.getUserWalletStatus();case 2:t=e.sent,e.t0=t.status,e.next="Logged In, New Device"===e.t0||"Logged In, Wallet Uninitialized"===e.t0?6:"Logged Out"===e.t0?9:"Logged In, Wallet Initialized"===e.t0?10:11;break;case 6:return e.next=8,this.auth.logout();case 8:return e.abrupt("return",this.getUser());case 9:return e.abrupt("return",{status:"Logged Out"});case 10:return e.abrupt("return",b({status:"Logged In, Wallet Initialized"},t.user));case 11:case"end":return e.stop()}}),e,this)})))}}]),e}()}}]);
//# sourceMappingURL=2103.cc0b0a0e.chunk.js.map