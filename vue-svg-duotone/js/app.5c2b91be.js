(function(e){function t(t){for(var r,s,i=t[0],u=t[1],l=t[2],p=0,v=[];p<i.length;p++)s=i[p],a[s]&&v.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(v.length)v.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],r=!0,i=1;i<o.length;i++){var u=o[i];0!==a[u]&&(r=!1)}r&&(n.splice(t--,1),e=s(s.s=o[0]))}return e}var r={},a={app:0},n=[];function s(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=r,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(o,r,function(t){return e[t]}.bind(null,r));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=u;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var r=o("64a9"),a=o.n(r);a.a},"409e":function(e,t,o){"use strict";var r=o("f2de"),a=o.n(r);a.a},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var r=o("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("h1",[e._v("vue-svg-duotone")]),o("p",[o("a",{attrs:{href:"https://github.com/yoshihitofujiwara/vue-svg-duotone",target:"_blank"}},[o("SvgDuotone",{staticClass:"svg_duotone",attrs:{image:e.image,passive:e.passive,active:e.active,duration:e.duration,ease:e.ease}})],1)])])},n=[],s=o("8992"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("svg",{on:{mouseenter:e.onActive,mouseleave:e.onPassive}},[o("filter",{attrs:{id:"duotone"}},[o("feColorMatrix",{attrs:{type:"saturate",values:e.saturate}}),o("feComponentTransfer",{attrs:{"color-interpolation-filters":"sRGB"}},[o("feFuncR",{attrs:{type:"table",tableValues:e.color.r()}}),o("feFuncG",{attrs:{type:"table",tableValues:e.color.g()}}),o("feFuncB",{attrs:{type:"table",tableValues:e.color.b()}})],1)],1),o("image",{attrs:{"xlink:href":e.image,width:"100%",height:"100%",x:"0",y:"0",filter:"url(#duotone)"}})])},u=[],l=(o("c5f6"),o("6149")),c=o.n(l),p=o("109c");Math.PI;function v(e,t,o){return(o-t)*e+t}var f,d={name:"SvgDuotone",props:{image:String,passive:{type:Object,default:function(){return{saturate:1,color:[null,null]}}},active:{type:Object,default:function(){return{saturate:0,color:[15157086,15784057]}}},duration:{type:Number,default:function(){return.8}},ease:{type:[String,Object],default:function(){return"Power2.easeOut"}}},data:function(){return{progress:0,passiveColor:{r:[0,1],g:[0,1],b:[0,1]},activeColor:{r:[0,1],g:[0,1],b:[0,1]}}},watch:{"passive.color":function(){this._$updateColor()},"active.color":function(){this._$updateColor()}},computed:{saturate:function(){return v(this.progress,this.passive.saturate,this.active.saturate)},color:function(){var e=this;return{r:function(){return v(e.progress,e.passiveColor.r[0],e.activeColor.r[0])+" "+v(e.progress,e.passiveColor.r[1],e.activeColor.r[1])},g:function(){return v(e.progress,e.passiveColor.g[0],e.activeColor.g[0])+" "+v(e.progress,e.passiveColor.g[1],e.activeColor.g[1])},b:function(){return v(e.progress,e.passiveColor.b[0],e.activeColor.b[0])+" "+v(e.progress,e.passiveColor.b[1],e.activeColor.b[1])}}}},created:function(){this._$updateColor()},methods:{onPassive:function(){p["a"].to(this,this.duration,{progress:0,ease:this.ease})},onActive:function(){p["a"].to(this,this.duration,{progress:1,ease:this.ease})},_$updateColor:function(){this.passiveColor=this._$getRGB(this.passive.color),this.activeColor=this._$getRGB(this.active.color)},_$getRGB:function(e){var t={r:[0,1],g:[0,1],b:[0,1]};if(e&&e[0]&&e[1]){var o=c()(e[0]).rgb(),r=c()(e[1]).rgb();t.r=[o[0]/255,r[0]/255],t.g=[o[1]/255,r[1]/255],t.b=[o[2]/255,r[2]/255]}return t}}},g=d,h=(o("409e"),o("2877")),C=Object(h["a"])(g,i,u,!1,null,"0b2adc13",null),b=C.exports,O={name:"app",components:{SvgDuotone:b},data:function(){return{image:"./assets/img/img02.jpg",passive:{saturate:1,color:[null,null]},active:{saturate:0,color:[15157086,15784057]},duration:.8,ease:"Power1.easeOut"}},mounted:function(){var e=this;f=new s["a"].GUI({autoPlace:!1}),f.domElement.style.position="fixed",f.domElement.style.top="0",f.domElement.style.right="0",document.body.appendChild(f.domElement);var t={passiveColor:!1,passiveColor1:2394248,passiveColor2:15132390,activeColor:!0,activeColor1:15157086,activeColor2:15784057,easeList:["Power0.easeNone","Power1.easeIn","Power1.easeInOut","Power1.easeOut","Power2.easeIn","Power2.easeInOut","Power2.easeOut","Power3.easeIn","Power3.easeInOut","Power3.easeOut","Power4.easeIn","Power4.easeInOut","Power4.easeOut","Back.easeIn","Back.easeOut","Back.easeInOut","Elastic.easeIn","Elastic.easeOut","Elastic.easeInOut","Bounce.easeIn","Bounce.easeOut","Bounce.easeInOut","Circ.easeIn","Circ.easeOut","Circ.easeInOut","Expo.easeIn","Expo.easeOut","Expo.easeInOut","Sine.easeIn","Sine.easeOut","Sine.easeInOut"]},o=f.addFolder("OFF");o.open(),o.add(t,"passiveColor").onChange(function(o){e.passive.color=o?[t.passiveColor1,t.passiveColor2]:[null,null]}),o.addColor(t,"passiveColor1").onChange(function(o){t.passiveColor&&(e.passive.color=[o,t.passiveColor2])}),o.addColor(t,"passiveColor2").onChange(function(o){t.passiveColor&&(e.passive.color=[t.passiveColor1,o])}),o.add(this.passive,"saturate",0,1);var r=f.addFolder("ON");r.open(),r.add(t,"activeColor").onChange(function(o){e.active.color=o?[t.activeColor1,t.activeColor2]:[null,null]}),r.addColor(t,"activeColor1").onChange(function(o){t.activeColor&&(e.active.color=[o,t.activeColor2])}),r.addColor(t,"activeColor2").onChange(function(o){t.activeColor&&(e.active.color=[t.activeColor1,o])}),r.add(this.active,"saturate",0,1),f.add(this,"duration",.1,3),f.add(this,"ease",t.easeList).set(3)}},m=O,w=(o("034f"),Object(h["a"])(m,a,n,!1,null,null,null)),y=w.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(y)}}).$mount("#app")},"64a9":function(e,t,o){},f2de:function(e,t,o){}});
//# sourceMappingURL=app.5c2b91be.js.map