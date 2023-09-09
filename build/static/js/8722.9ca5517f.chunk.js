"use strict";(self.webpackChunkschool_recycle=self.webpackChunkschool_recycle||[]).push([[8722],{28722:function(t,r,e){e.r(r),e.d(r,{Vote:function(){return x}});var n=e(29439),a=e(74165),o=e(15861),c=e(15671),s=e(43144),u=e(4942),i=e(95474),p=e(49242),h=e(51583),d=e(2257),f=e(6222),l=e(34029),v=function(t){return t[t.Against=0]="Against",t[t.For=1]="For",t[t.Abstain=2]="Abstain",t}({}),x=(e(80518),e(20737),e(78262),e(66315),e(84255),e(13631),function(){function t(r,e,n){var s=this;(0,c.Z)(this,t),(0,u.Z)(this,"propose",(0,i.dt)(function(){var t=(0,o.Z)((0,a.Z)().mark((function t(r,e){var n,o,c;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e||(e=[{toAddress:s.contractWrapper.readContract.address,nativeTokenValue:0,transactionData:"0x"}]),n=e.map((function(t){return t.toAddress})),o=e.map((function(t){return t.nativeTokenValue})),c=e.map((function(t){return t.transactionData})),t.abrupt("return",i.aW.fromContractWrapper({contractWrapper:s.contractWrapper,method:"propose",args:[n,o,c,r],parse:function(t){return{id:s.contractWrapper.parseLogs("ProposalCreated",null===t||void 0===t?void 0:t.logs)[0].args.proposalId,receipt:t}}}));case 5:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}())),(0,u.Z)(this,"vote",(0,i.dt)(function(){var t=s;return function(){var r=(0,o.Z)((0,a.Z)().mark((function r(e,n){var o,c=arguments;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=c.length>2&&void 0!==c[2]?c[2]:"",r.next=3,t.ensureExists(e);case 3:return r.abrupt("return",i.aW.fromContractWrapper({contractWrapper:t.contractWrapper,method:"castVoteWithReason",args:[e,n,o]}));case 4:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}()}())),(0,u.Z)(this,"execute",(0,i.dt)(function(){var t=(0,o.Z)((0,a.Z)().mark((function t(r){var e,n,o,c,u;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.ensureExists(r);case 2:return t.next=4,s.get(r);case 4:return e=t.sent,n=e.executions.map((function(t){return t.toAddress})),o=e.executions.map((function(t){return t.nativeTokenValue})),c=e.executions.map((function(t){return t.transactionData})),u=h.id(e.description),t.abrupt("return",i.aW.fromContractWrapper({contractWrapper:s.contractWrapper,method:"execute",args:[n,o,c,u]}));case 10:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()));var p=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},d=arguments.length>4?arguments[4]:void 0,f=arguments.length>5?arguments[5]:void 0,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new i.ds(r,e,d,p,n);this._chainId=f,this.abi=i.e.parse(d||[]),this.contractWrapper=l,this.storage=n,this.metadata=new i.ah(this.contractWrapper,i.d$,this.storage),this.app=new i.b0(this.contractWrapper,this.metadata,this.storage),this.encoder=new i.ag(this.contractWrapper),this.estimator=new i.aQ(this.contractWrapper),this.events=new i.aR(this.contractWrapper),this.interceptor=new i.aS(this.contractWrapper)}return(0,s.Z)(t,[{key:"chainId",get:function(){return this._chainId}},{key:"onNetworkUpdated",value:function(t){this.contractWrapper.updateSignerOrProvider(t)}},{key:"getAddress",value:function(){return this.contractWrapper.address}},{key:"get",value:function(){var t=(0,o.Z)((0,a.Z)().mark((function t(r){var e,n;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getAll();case 2:if(e=t.sent,0!==(n=e.filter((function(t){return t.proposalId.eq(d.O$.from(r))}))).length){t.next=6;break}throw new Error("proposal not found");case 6:return t.abrupt("return",n[0]);case 7:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"getAll",value:function(){var t=(0,o.Z)((0,a.Z)().mark((function t(){var r=this;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Promise,t.next=3,this.contractWrapper.read("getAllProposals",[]);case 3:return t.t1=t.sent.map(function(){var t=(0,o.Z)((0,a.Z)().mark((function t(e){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e.proposalId,t.t1=e.proposer,t.t2=e.description,t.t3=e.startBlock,t.t4=e.endBlock,t.next=7,r.contractWrapper.readContract.state(e.proposalId);case 7:return t.t5=t.sent,t.next=10,r.getProposalVotes(e.proposalId);case 10:return t.t6=t.sent,t.t7=e[3].map((function(t,r){return{toAddress:e.targets[r],nativeTokenValue:t,transactionData:e.calldatas[r]}})),t.abrupt("return",{proposalId:t.t0,proposer:t.t1,description:t.t2,startBlock:t.t3,endBlock:t.t4,state:t.t5,votes:t.t6,executions:t.t7});case 13:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()),t.abrupt("return",t.t0.all.call(t.t0,t.t1));case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getProposalVotes",value:function(){var t=(0,o.Z)((0,a.Z)().mark((function t(r){var e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.readContract.proposalVotes(r);case 2:return e=t.sent,t.abrupt("return",[{type:v.Against,label:"Against",count:e.againstVotes},{type:v.For,label:"For",count:e.forVotes},{type:v.Abstain,label:"Abstain",count:e.abstainVotes}]);case 4:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"hasVoted",value:function(){var t=(0,o.Z)((0,a.Z)().mark((function t(r,e){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=4;break}return t.next=3,this.contractWrapper.getSignerAddress();case 3:e=t.sent;case 4:return t.t0=this.contractWrapper.readContract,t.t1=r,t.next=8,(0,i.cG)(e);case 8:return t.t2=t.sent,t.abrupt("return",t.t0.hasVoted.call(t.t0,t.t1,t.t2));case 10:case"end":return t.stop()}}),t,this)})));return function(r,e){return t.apply(this,arguments)}}()},{key:"canExecute",value:function(){var t=(0,o.Z)((0,a.Z)().mark((function t(r){var e,n,o,c,s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.ensureExists(r);case 2:return t.next=4,this.get(r);case 4:return e=t.sent,n=e.executions.map((function(t){return t.toAddress})),o=e.executions.map((function(t){return t.nativeTokenValue})),c=e.executions.map((function(t){return t.transactionData})),s=h.id(e.description),t.prev=9,t.next=12,this.contractWrapper.callStatic().execute(n,o,c,s);case 12:return t.abrupt("return",!0);case 15:return t.prev=15,t.t0=t.catch(9),t.abrupt("return",!1);case 18:case"end":return t.stop()}}),t,this,[[9,15]])})));return function(r){return t.apply(this,arguments)}}()},{key:"balance",value:function(){var t=(0,o.Z)((0,a.Z)().mark((function t(){var r;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.readContract.provider.getBalance(this.contractWrapper.readContract.address);case 2:return r=t.sent,t.abrupt("return",{name:"",symbol:"",decimals:18,value:r,displayValue:f.formatUnits(r,18)});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"balanceOfToken",value:function(){var t=(0,o.Z)((0,a.Z)().mark((function t(r){var e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=l.CH,t.next=3,(0,i.cG)(r);case 3:return t.t1=t.sent,t.t2=p,t.t3=this.contractWrapper.getProvider(),e=new t.t0(t.t1,t.t2,t.t3),t.t4=i.bc,t.t5=this.contractWrapper.getProvider(),t.t6=r,t.next=12,e.balanceOf(this.contractWrapper.readContract.address);case 12:return t.t7=t.sent,t.next=15,(0,t.t4)(t.t5,t.t6,t.t7);case 15:return t.abrupt("return",t.sent);case 16:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"ensureExists",value:function(){var t=(0,o.Z)((0,a.Z)().mark((function t(r){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.contractWrapper.readContract.state(r);case 3:t.next=8;break;case 5:throw t.prev=5,t.t0=t.catch(0),Error("Proposal ".concat(r," not found"));case 8:case"end":return t.stop()}}),t,this,[[0,5]])})));return function(r){return t.apply(this,arguments)}}()},{key:"settings",value:function(){var t=(0,o.Z)((0,a.Z)().mark((function t(){var r,e,o,c,s,u,p,h;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([this.contractWrapper.readContract.votingDelay(),this.contractWrapper.readContract.votingPeriod(),this.contractWrapper.readContract.token(),this.contractWrapper.readContract["quorumNumerator()"](),this.contractWrapper.readContract.proposalThreshold()]);case 2:return r=t.sent,e=(0,n.Z)(r,5),o=e[0],c=e[1],s=e[2],u=e[3],p=e[4],t.next=11,(0,i.bb)(this.contractWrapper.getProvider(),s);case 11:return h=t.sent,t.abrupt("return",{votingDelay:o.toString(),votingPeriod:c.toString(),votingTokenAddress:s,votingTokenMetadata:h,votingQuorumFraction:u.toString(),proposalTokenThreshold:p.toString()});case 13:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"prepare",value:function(){var t=(0,o.Z)((0,a.Z)().mark((function t(r,e,n){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:r,args:e,overrides:n}));case 1:case"end":return t.stop()}}),t,this)})));return function(r,e,n){return t.apply(this,arguments)}}()},{key:"call",value:function(){var t=(0,o.Z)((0,a.Z)().mark((function t(r,e,n){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.contractWrapper.call(r,e,n));case 1:case"end":return t.stop()}}),t,this)})));return function(r,e,n){return t.apply(this,arguments)}}()}]),t}())}}]);
//# sourceMappingURL=8722.9ca5517f.chunk.js.map