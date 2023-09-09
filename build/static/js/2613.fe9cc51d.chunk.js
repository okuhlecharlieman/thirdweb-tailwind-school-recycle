"use strict";(self.webpackChunkschool_recycle=self.webpackChunkschool_recycle||[]).push([[2613],{52613:function(t,e,r){r.r(e),r.d(e,{Split:function(){return f}});var n=r(29439),a=r(37762),c=r(74165),s=r(15861),u=r(15671),i=r(43144),p=r(4942),o=r(49242),h=r(2257),d=r(34029),l=r(95474),f=(r(80518),r(20737),r(78262),r(66315),r(84255),r(13631),function(){function t(e,r,n){var a=this;(0,u.Z)(this,t),(0,p.Z)(this,"withdraw",(0,l.dt)(function(){var t=(0,s.Z)((0,c.Z)().mark((function t(e){return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=l.aW,t.t1=a.contractWrapper,t.next=4,(0,l.cG)(e);case 4:return t.t2=t.sent,t.t3=[t.t2],t.t4={contractWrapper:t.t1,method:"release(address)",args:t.t3},t.abrupt("return",t.t0.fromContractWrapper.call(t.t0,t.t4));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())),(0,p.Z)(this,"withdrawToken",(0,l.dt)(function(){var t=(0,s.Z)((0,c.Z)().mark((function t(e,r){return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=l.aW,t.t1=a.contractWrapper,t.next=4,(0,l.cG)(r);case 4:return t.t2=t.sent,t.next=7,(0,l.cG)(e);case 7:return t.t3=t.sent,t.t4=[t.t2,t.t3],t.t5={contractWrapper:t.t1,method:"release(address,address)",args:t.t4},t.abrupt("return",t.t0.fromContractWrapper.call(t.t0,t.t5));case 11:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}())),(0,p.Z)(this,"distribute",(0,l.dt)((0,s.Z)((0,c.Z)().mark((function t(){return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",l.aW.fromContractWrapper({contractWrapper:a.contractWrapper,method:"distribute()",args:[]}));case 1:case"end":return t.stop()}}),t)}))))),(0,p.Z)(this,"distributeToken",(0,l.dt)(function(){var t=(0,s.Z)((0,c.Z)().mark((function t(e){return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=l.aW,t.t1=a.contractWrapper,t.next=4,(0,l.cG)(e);case 4:return t.t2=t.sent,t.t3=[t.t2],t.t4={contractWrapper:t.t1,method:"distribute(address)",args:t.t3},t.abrupt("return",t.t0.fromContractWrapper.call(t.t0,t.t4));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4?arguments[4]:void 0,h=arguments.length>5?arguments[5]:void 0,d=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new l.ds(e,r,o,i,n);this._chainId=h,this.abi=l.e.parse(o||[]),this.contractWrapper=d,this.storage=n,this.metadata=new l.ah(this.contractWrapper,l.dX,this.storage),this.app=new l.b0(this.contractWrapper,this.metadata,this.storage),this.roles=new l.ai(this.contractWrapper,t.contractRoles),this.encoder=new l.ag(this.contractWrapper),this.estimator=new l.aQ(this.contractWrapper),this.events=new l.aR(this.contractWrapper),this.interceptor=new l.aS(this.contractWrapper)}return(0,i.Z)(t,[{key:"chainId",get:function(){return this._chainId}},{key:"onNetworkUpdated",value:function(t){this.contractWrapper.updateSignerOrProvider(t)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"getAllRecipients",value:function(){var t=(0,s.Z)((0,c.Z)().mark((function t(){var e,r,n,a;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],r=h.O$.from(0),t.next=4,this.contractWrapper.readContract.payeeCount();case 4:n=t.sent;case 5:if(!r.lt(n)){t.next=27;break}return t.prev=6,t.next=9,this.contractWrapper.readContract.payee(r);case 9:return a=t.sent,t.t0=e,t.next=13,this.getRecipientSplitPercentage(a);case 13:t.t1=t.sent,t.t0.push.call(t.t0,t.t1),r=r.add(1),t.next=25;break;case 18:if(t.prev=18,t.t2=t.catch(6),!("method"in t.t2)||!t.t2.method.toLowerCase().includes("payee(uint256)")){t.next=24;break}return t.abrupt("break",27);case 24:throw t.t2;case 25:t.next=5;break;case 27:return t.abrupt("return",e);case 28:case"end":return t.stop()}}),t,this,[[6,18]])})));return function(){return t.apply(this,arguments)}}()},{key:"balanceOfAllRecipients",value:function(){var t=(0,s.Z)((0,c.Z)().mark((function t(){var e,r,n,s,u;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getAllRecipients();case 2:e=t.sent,r={},n=(0,a.Z)(e),t.prev=5,n.s();case 7:if((s=n.n()).done){t.next=14;break}return u=s.value,t.next=11,this.balanceOf(u.address);case 11:r[u.address]=t.sent;case 12:t.next=7;break;case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(5),n.e(t.t0);case 19:return t.prev=19,n.f(),t.finish(19);case 22:return t.abrupt("return",r);case 23:case"end":return t.stop()}}),t,this,[[5,16,19,22]])})));return function(){return t.apply(this,arguments)}}()},{key:"balanceOfTokenAllRecipients",value:function(){var t=(0,s.Z)((0,c.Z)().mark((function t(e){var r,n,s,u,i,p;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,l.cG)(e);case 2:return r=t.sent,t.next=5,this.getAllRecipients();case 5:n=t.sent,s={},u=(0,a.Z)(n),t.prev=8,u.s();case 10:if((i=u.n()).done){t.next=17;break}return p=i.value,t.next=14,this.balanceOfToken(p.address,r);case 14:s[p.address]=t.sent;case 15:t.next=10;break;case 17:t.next=22;break;case 19:t.prev=19,t.t0=t.catch(8),u.e(t.t0);case 22:return t.prev=22,u.f(),t.finish(22);case 25:return t.abrupt("return",s);case 26:case"end":return t.stop()}}),t,this,[[8,19,22,25]])})));return function(e){return t.apply(this,arguments)}}()},{key:"balanceOf",value:function(){var t=(0,s.Z)((0,c.Z)().mark((function t(e){var r,n,a,s;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,l.cG)(e);case 2:return r=t.sent,t.next=5,this.contractWrapper.readContract.provider.getBalance(this.getAddress());case 5:return n=t.sent,t.next=8,this.contractWrapper.readContract["totalReleased()"]();case 8:return a=t.sent,s=n.add(a),t.t0=this,t.t1=r,t.t2=s,t.next=15,this.contractWrapper.readContract["released(address)"](r);case 15:return t.t3=t.sent,t.abrupt("return",t.t0._pendingPayment.call(t.t0,t.t1,t.t2,t.t3));case 17:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"balanceOfToken",value:function(){var t=(0,s.Z)((0,c.Z)().mark((function t(e,r){var n,a,s,u,i,p,h;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,l.cG)(r);case 2:return n=t.sent,t.next=5,(0,l.cG)(e);case 5:return a=t.sent,s=new d.CH(n,o,this.contractWrapper.getProvider()),t.next=9,s.balanceOf(this.getAddress());case 9:return u=t.sent,t.next=12,this.contractWrapper.readContract["totalReleased(address)"](n);case 12:return i=t.sent,p=u.add(i),t.t0=this,t.t1=a,t.t2=p,t.next=19,this.contractWrapper.readContract["released(address,address)"](n,a);case 19:return t.t3=t.sent,t.next=22,t.t0._pendingPayment.call(t.t0,t.t1,t.t2,t.t3);case 22:return h=t.sent,t.next=25,(0,l.bc)(this.contractWrapper.getProvider(),n,h);case 25:return t.abrupt("return",t.sent);case 26:case"end":return t.stop()}}),t,this)})));return function(e,r){return t.apply(this,arguments)}}()},{key:"getRecipientSplitPercentage",value:function(){var t=(0,s.Z)((0,c.Z)().mark((function t(e){var r,a,s,u,i;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,l.cG)(e);case 2:return r=t.sent,t.next=5,Promise.all([this.contractWrapper.readContract.totalShares(),this.contractWrapper.readContract.shares(e)]);case 5:return a=t.sent,s=(0,n.Z)(a,2),u=s[0],i=s[1],t.abrupt("return",{address:r,splitPercentage:i.mul(h.O$.from(1e7)).div(u).toNumber()/1e5});case 10:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"_pendingPayment",value:function(){var t=(0,s.Z)((0,c.Z)().mark((function t(e,r,n){var a,s;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=r,t.t1=this.contractWrapper.readContract,t.next=4,(0,l.cG)(e);case 4:return t.t2=t.sent,t.next=7,t.t1.shares.call(t.t1,t.t2);case 7:return t.t3=t.sent,a=t.t0.mul.call(t.t0,t.t3),t.t4=a,t.next=12,this.contractWrapper.readContract.totalShares();case 12:return t.t5=t.sent,s=t.t4.div.call(t.t4,t.t5),t.abrupt("return",s.sub(n));case 15:case"end":return t.stop()}}),t,this)})));return function(e,r,n){return t.apply(this,arguments)}}()},{key:"prepare",value:function(){var t=(0,s.Z)((0,c.Z)().mark((function t(e,r,n){return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",l.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:e,args:r,overrides:n}));case 1:case"end":return t.stop()}}),t,this)})));return function(e,r,n){return t.apply(this,arguments)}}()},{key:"call",value:function(){var t=(0,s.Z)((0,c.Z)().mark((function t(e,r,n){return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.contractWrapper.call(e,r,n));case 1:case"end":return t.stop()}}),t,this)})));return function(e,r,n){return t.apply(this,arguments)}}()}]),t}());(0,p.Z)(f,"contractRoles",l.dW)}}]);
//# sourceMappingURL=2613.fe9cc51d.chunk.js.map