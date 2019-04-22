(function(e){function t(t){for(var s,r,o=t[0],u=t[1],c=t[2],f=0,d=[];f<o.length;f++)r=o[f],n[r]&&d.push(n[r][0]),n[r]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],s=!0,o=1;o<i.length;o++){var u=i[o];0!==n[u]&&(s=!1)}s&&(a.splice(t--,1),e=r(r.s=i[0]))}return e}var s={},n={app:0},a=[];function r(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=s,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(i,s,function(t){return e[t]}.bind(null,s));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var s=i("64a9"),n=i.n(s);n.a},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("f751"),i("097d");var s=i("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("h1",[e._v("vue-svg-distotion")]),i("SvgDistotion",{ref:"svg",staticClass:"svg",attrs:{image:e.image,filter:e.filter,duration:e.duration,ease:e.ease},on:{mouseleave:e.onPassive,mouseenter:e.onActive,touchstart:e.toggle}})],1)},a=[],r=(Math.PI,navigator.userAgent.toLowerCase());function o(){return r.indexOf("iphone")>-1||r.indexOf("ipad")>-1||r.indexOf("android")>-1}var u,c=i("8992"),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("svg",{on:{mouseenter:function(t){return e.$emit("mouseenter")},mouseleave:function(t){return e.$emit("mouseleave")},touchstart:function(t){return e.$emit("touchstart")}}},[i("filter",{attrs:{id:"distortion"}},[i("feTurbulence",{attrs:{type:e.filter.type,baseFrequency:e.baseFrequency,numOctaves:e.filter.numOctaves,seed:e.filter.seed,stitchTiles:e.filter.stitchTiles,result:"noise"}}),i("feDisplacementMap",{attrs:{in:"SourceGraphic",in2:"noise",scale:e.scale,xChannelSelector:"R",yChannelSelector:"G",filterUnits:"userSpaceOnUse"}})],1),i("g",{attrs:{filter:"url(#distortion)"}},[i("image",{attrs:{"xlink:href":e.image.passive,width:e.image.width,height:e.image.height,x:e.image.x,y:e.image.y,opacity:e.opacity.passive}}),i("image",{attrs:{"xlink:href":e.image.active,width:e.image.width,height:e.image.height,x:e.image.x,y:e.image.y,opacity:e.opacity.active}})])])},f=[],d=(i("c5f6"),i("109c")),h={name:"SvgDistotion",props:{image:{type:Object,default:function(){return{passive:"../../assets/img/img01.jpg",active:"../../assets/img/img02.jpg",width:"90%",height:"90%",x:"5%",y:"5%"}}},filter:{type:Object,default:function(){return{type:"fractalNoise",baseFrequencyX:.01,baseFrequencyY:.003,numOctaves:2,seed:2,stitchTiles:"noStitch",scale:80,maxScale:100}}},duration:{type:Number,default:.8},ease:{type:[String,Object],default:"Power2.easeOut"}},data:function(){return{progress:0}},computed:{baseFrequency:function(){return this.filter.baseFrequencyX+" "+this.filter.baseFrequencyY},scale:function(){var e=2*(.5-Math.abs(this.progress-.5));return this.filter.scale*e},opacity:function(){return{passive:1-this.progress,active:this.progress}}},methods:{onPassive:function(){d["a"].to(this,this.duration,{progress:0,ease:this.ease})},onActive:function(){d["a"].to(this,this.duration,{progress:1,ease:this.ease})}}},p=h,g=(i("8990"),i("2877")),m=Object(g["a"])(p,l,f,!1,null,"927ea66a",null),v=m.exports,y={name:"app",components:{SvgDistotion:v},data:function(){return{image:{passive:"./assets/img/img01.jpg",active:"./assets/img/img02.jpg",width:"90%",height:"90%",x:"5%",y:"5%"},filter:{type:"fractalNoise",baseFrequencyX:.01,baseFrequencyY:.003,numOctaves:2,seed:2,stitchTiles:"noStitch",scale:80,maxScale:100},duration:.8,ease:"Power1.easeOut",isActive:!1}},mounted:function(){var e=this;u=new c["a"].GUI({autoPlace:!1}),u.domElement.style.position="fixed",u.domElement.style.top="0",u.domElement.style.right="0",document.body.appendChild(u.domElement),o()&&u.close();var t={size:90,x:5,y:5,type:["fractalNoise","turbulence"],stitchTiles:["noStitch","stitch"],easeList:["Power0.easeNone","Power1.easeIn","Power1.easeInOut","Power1.easeOut","Power2.easeIn","Power2.easeInOut","Power2.easeOut","Power3.easeIn","Power3.easeInOut","Power3.easeOut","Power4.easeIn","Power4.easeInOut","Power4.easeOut","Back.easeIn","Back.easeOut","Back.easeInOut","Elastic.easeIn","Elastic.easeOut","Elastic.easeInOut","Bounce.easeIn","Bounce.easeOut","Bounce.easeInOut","Circ.easeIn","Circ.easeOut","Circ.easeInOut","Expo.easeIn","Expo.easeOut","Expo.easeInOut","Sine.easeIn","Sine.easeOut","Sine.easeInOut"]},i=u.addFolder("Image");i.add(t,"size",10,100).onChange(function(){e.image.width=t.size+"%",e.image.height=t.size+"%"}),i.add(t,"x",0,100).onChange(function(){e.image.x=t.x+"%"}),i.add(t,"y",0,100).onChange(function(){e.image.y=t.y+"%"});var s=u.addFolder("Filter");s.add(this.filter,"type",t.type),s.add(this.filter,"baseFrequencyX",0,1).step(.01),s.add(this.filter,"baseFrequencyY",0,1).step(.01),s.add(this.filter,"numOctaves",1,10).step(1),s.add(this.filter,"seed",0,10).step(1),s.add(this.filter,"stitchTiles",t.stitchTiles),s.add(this.filter,"scale",0,300).step(1),u.add(this,"duration",.1,3),u.add(this,"ease",t.easeList)},methods:{onActive:function(){this.$refs.svg.onActive()},onPassive:function(){this.$refs.svg.onPassive()},toggle:function(){this.isActive=!this.isActive,this.isActive?this.onActive():this.onPassive()}}},O=y,b=(i("034f"),Object(g["a"])(O,n,a,!1,null,null,null)),w=b.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(w)}}).$mount("#app")},"64a9":function(e,t,i){},8990:function(e,t,i){"use strict";var s=i("f47c"),n=i.n(s);n.a},f47c:function(e,t,i){}});
//# sourceMappingURL=app.ee01df33.js.map