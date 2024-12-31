(function(){var e={5661:function(e,t,r){"use strict";var n=r(5130),o=r(6768),i=r(6450),a=r(8477);function s(e,t,r,n,s,c){const u=(0,o.g2)("Header"),l=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)(i.E,null,{default:(0,o.k6)((()=>[(0,o.bF)(a.Y,null,{default:(0,o.k6)((()=>[(0,o.bF)(u,{onLevelChange:c.handleDifficultyChange},null,8,["onLevelChange"]),((0,o.uX)(),(0,o.Wv)(l,{key:s.routerKey,dLevel:s.currLevel},null,8,["dLevel"]))])),_:1})])),_:1})}var c=r(3524),u=r(3813),l=r(1720),d=r(9547);function f(e,t,r,n,i,a){return(0,o.uX)(),(0,o.Wv)(c.z,{dark:"",color:"grey darken-3"},{default:(0,o.k6)((()=>[(0,o.bF)(u.I,{class:"d-flex justify-center"},{default:(0,o.k6)((()=>[(0,o.bF)(l.h),(0,o.bF)(d.d4,{modelValue:i.difficulty,"onUpdate:modelValue":[t[0]||(t[0]=e=>i.difficulty=e),a.emitLevelChange],items:["Easy","Medium","Hard","Challenger"],label:"Difficulty",style:{width:"150px","margin-top":"20px"}},null,8,["modelValue","onUpdate:modelValue"]),(0,o.bF)(l.h)])),_:1})])),_:1})}var h={data(){return{difficulty:"Easy"}},methods:{emitLevelChange(){this.$emit("level-change",this.difficulty)}}},m=r(1241);const p=(0,m.A)(h,[["render",f]]);var v=p,g={name:"App",components:{Header:v},data(){return{currLevel:"Easy",routerKey:0}},methods:{handleDifficultyChange(e){this.currLevel=e,this.routerKey+=1}}};const b=(0,m.A)(g,[["render",s]]);var y=b,L=(r(5524),r(5790)),k=(0,L.$N)();async function w(){const e=await r.e(53).then(r.t.bind(r,6493,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var S=r(4232),T=r(4750);const _={key:0,class:"game-active"},O={id:"word",class:"game-word"},C={class:"time-container"},j={class:"score-container"},E={id:"score"};function A(e,t,r,n,i,a){return(0,o.uX)(),(0,o.Wv)(u.I,{class:"game-container justify-center"},{default:(0,o.k6)((()=>[i.isGameActive?((0,o.uX)(),(0,o.CE)("div",_,[(0,o.bF)(l.h),t[2]||(t[2]=(0,o.Lk)("h2",{class:"game-title"},"👩‍💻 Speed Typer 👨‍💻",-1)),t[3]||(t[3]=(0,o.Lk)("small",null,"Type the following:",-1)),(0,o.Lk)("h1",O,(0,S.v_)(i.randomWord),1),(0,o.bF)(T.W,{class:"game-text-field",modelValue:i.currTyping,"onUpdate:modelValue":t[0]||(t[0]=e=>i.currTyping=e),"hide-details":"auto",label:"Insert the word here"},null,8,["modelValue"]),(0,o.Lk)("p",C,"Time left: "+(0,S.v_)(i.timeLeft)+" s",1),(0,o.Lk)("p",j,[t[1]||(t[1]=(0,o.eW)("Score: ")),(0,o.Lk)("span",E,(0,S.v_)(i.score),1)]),t[4]||(t[4]=(0,o.Lk)("div",{id:"end-game-container",class:"end-game-container"},null,-1)),(0,o.bF)(l.h)])):(0,o.Q3)("",!0)])),_:1})}r(4114);var F=r(1770),W={props:{dLevel:{type:String,default:"Easy"}},data(){return{currTyping:"",randomWord:(0,F.cM)({minLength:5,maxLength:13}),score:0,startTime:6e4,timeLeft:60,isGameActive:!0}},watch:{dLevel(e){this.startTime=this.getStartTime(e),this.refreshGame()},currTyping(e){this.compareWords(e)}},created(){this.startTime=this.getStartTime(),this.refreshGame()},beforeUnmount(){this.timer&&clearInterval(this.timer)},methods:{initializeGame(){this.timer&&clearInterval(this.timer),this.isGameActive=!0,this.timeLeft=this.getStartTime()/1e3,this.timer=setInterval((()=>{this.timeLeft>0?this.timeLeft--:this.handleCountdownFinish()}),1e3)},handleCountdownFinish(){this.isGameActive=!1,this.$router.push({name:"game-over",query:{score:this.score}})},updateScore(){this.score++},refreshGame(){this.score=0,this.startTime=this.getStartTime(),this.isGameActive=!0,this.initializeGame()},getStartTime(){return"Easy"===this.dLevel?1e4:"Medium"===this.dLevel?7e3:"Hard"===this.dLevel?5e3:"Challenger"===this.dLevel?3e3:void 0},compareWords(e){e==this.randomWord&&(this.currTyping="",this.randomWord=(0,F.cM)({minLength:5,maxLength:13}),this.updateScore(),this.initializeGame())}}};const G=(0,m.A)(W,[["render",A],["__scopeId","data-v-34d01547"]]);var x=G,N=r(8874);const I={class:"game-over-container"},P={class:"score-summary"},M={id:"score",class:"score"},V={id:"score",class:"best-score"},X={key:0,class:"new-record-message"};function D(e,t,r,n,i,a){return(0,o.uX)(),(0,o.CE)("div",I,[t[3]||(t[3]=(0,o.Lk)("h1",{class:"game-over-title"},"Time ran out",-1)),(0,o.Lk)("div",P,[(0,o.Lk)("p",null,[t[0]||(t[0]=(0,o.eW)("Score: ")),(0,o.Lk)("span",M,(0,S.v_)(i.score),1)]),(0,o.Lk)("p",null,[t[1]||(t[1]=(0,o.eW)("Best Score: ")),(0,o.Lk)("span",V,(0,S.v_)(i.bestScore),1)]),i.isNewRecord?((0,o.uX)(),(0,o.CE)("p",X," 🎉 Congratulations! You made a new record! ")):(0,o.Q3)("",!0),(0,o.bF)(l.h),(0,o.bF)(N.D,{class:"btn-reload btn btn-sm pull-xs-right",onClick:a.reloadTiming},{default:(0,o.k6)((()=>t[2]||(t[2]=[(0,o.Lk)("i",{class:"ion-heart"},null,-1),(0,o.eW)(" Try Again ")]))),_:1},8,["onClick"])])])}var R={name:"GameOver",data(){return{score:0,bestScore:0,isNewRecord:!1}},mounted(){this.score=Number(this.$route.query.score),this.updateBestScore()},methods:{reloadTiming(){this.$router.push({name:"Game"}),console.log("reloadTiming hit")},updateBestScore(){const e=localStorage.getItem("bestScore");e?(this.bestScore=Number(e),this.score>this.bestScore&&(this.isNewRecord=!0,this.bestScore=this.score)):(console.log("in else"),this.isNewRecord=!0,this.bestScore=this.score,console.log(this.bestScore)),localStorage.setItem("bestScore",this.bestScore)}}};const $=(0,m.A)(R,[["render",D],["__scopeId","data-v-1acd5e43"]]);var z=$,B=r(1387);const H=[{path:"/",name:"Game",component:x},{path:"/game-over",name:"game-over",component:z}],U=(0,B.aE)({history:(0,B.LA)("/Speed-typer/"),routes:H});var q=U;w(),(0,n.Ef)(y).use(k).use(q).mount("#app")},1234:function(){}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=e,function(){r.amdD=function(){throw new Error("define cannot be used indirect")}}(),function(){r.amdO={}}(),function(){var e=[];r.O=function(t,n,o,i){if(!n){var a=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],i=e[l][2];for(var s=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,o,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var i=Object.create(null);r.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){a[e]=function(){return n[e]}}));return a["default"]=function(){return n},r.d(i,a),i}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/webfontloader.a166a151.js"}}(),function(){r.miniCssF=function(e){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="speed-typer:";r.l=function(n,o,i,a){if(e[n])e[n].push(o);else{var s,c;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+i),s.src=n),e[n]=[o];var f=function(t,r){s.onerror=s.onload=null,clearTimeout(h);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(r)})),t)return t(r)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){r.p="/Speed-typer/"}(),function(){var e={524:0};r.f.j=function(t,n){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise((function(r,n){o=e[t]=[r,n]}));n.push(o[2]=i);var a=r.p+r.u(t),s=new Error,c=function(n){if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}};r.l(a,c,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,a=n[0],s=n[1],c=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(c)var l=c(r)}for(t&&t(n);u<a.length;u++)i=a[u],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(l)},n=self["webpackChunkspeed_typer"]=self["webpackChunkspeed_typer"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[504],(function(){return r(5661)}));n=r.O(n)})();
//# sourceMappingURL=app.85cd1e18.js.map