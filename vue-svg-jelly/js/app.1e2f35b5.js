(function(t){function e(e){for(var i,o,s=e[0],u=e[1],c=e[2],l=0,f=[];l<s.length;l++)o=s[l],a[o]&&f.push(a[o][0]),a[o]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);h&&h(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={app:0},r=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var h=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("vue-svg-jelly")]),n("SvgJelly",{ref:"svg",attrs:{viewBox:"0 0 500 500",image:"./assets/img/img02x500.jpg",path:"M475 250 Q 475 343 409 409 Q 343 475 250 475 Q 157 475 91 409 Q 25 343 25 250 Q 25 157 91 91 Q 157 25 250 25 Q 343 25 409 91 Q 475 157 475 250",options:{mass:1,friction:.85,k:.25,restLength:0,maxSpeed:20,range:180},scale:t.scale}})],1)},r=[],o=(n("a481"),n("ac6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{viewBox:t.viewBox},on:{mousemove:t.mousemove,touchmove:t.mousemove,mouseout:t.mouseout,touchout:t.mouseout}},[n("image",{attrs:{"xlink:href":t.image,width:"100%",height:"100%",x:"0",y:"0","clip-path":"url(#clipPath)"}}),n("clipPath",{attrs:{id:"clipPath"}},[n("path",{attrs:{d:t.d}})])])}),s=[],u=(n("4917"),n("c5f6"),n("28a5"),n("d225")),c=n("b0b4"),h=(n("673e"),n("5176")),l=n.n(h),f=(n("6b54"),Object.prototype.toString),d=2*Math.PI,v=180/Math.PI,m=Math.PI/180,g=navigator.userAgent.toLowerCase();function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=Math.random();if(t>e){var i=t;t=e,e=i}return n*(e-t)+t}function x(t){return t*m}function k(t){return!!t&&"[object Object]"===f.call(t)}function b(t){return"[object Number]"===f.call(t)}function w(){return g.indexOf("iphone")>-1||g.indexOf("ipad")>-1||g.indexOf("android")>-1}var M=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(u["a"])(this,t),k(e)&&(n=e.y||0,e=e.x||0),this.x=e,this.y=n}return Object(c["a"])(t,[{key:"clone",value:function(){return new t(this.x,this.y)}},{key:"identity",value:function(){return this.x=0,this.y=0,this}},{key:"set",value:function(t,e){return this.x=t,this.y=e,this}},{key:"add",value:function(t){return this.x+=t.x,this.y+=t.y,this}},{key:"sub",value:function(t){return this.x-=t.x,this.y-=t.y,this}},{key:"mult",value:function(t){return this.x*=t,this.y*=t,this}},{key:"div",value:function(t){return this.x/=t,this.y/=t,this}},{key:"setMag",value:function(e){var n=t.radToVector2(this.angle(),e);return this.set(n.x,n.y),this}},{key:"magSq",value:function(){return this.x*this.x+this.y*this.y}},{key:"mag",value:function(){return Math.sqrt(this.magSq(this.x,this.y))}},{key:"angle",value:function(){return Math.atan2(this.y,this.x)}},{key:"setAngle",value:function(e){var n=t.radToVector2(e,this.mag());return this.set(n.x,n,y),this}},{key:"addAngle",value:function(t){return this.setAngle(this.angle()+t),this}},{key:"subAngle",value:function(t){return this.setAngle(this.angle()-t),this}},{key:"multAngle",value:function(t){return this.setAngle(this.angle()*t),this}},{key:"divAngle",value:function(t){return this.setAngle(this.angle()/t),this}},{key:"normalize",value:function(){var t=this.mag();return 0!==t&&this.div(t),this}},{key:"limit",value:function(t){return t*t<this.magSq()&&this.normalize().mult(t),this}},{key:"lerp",value:function(t,e){return this.x+=(t.x-this.x)*(e||0),this.y+=(t.y-this.y)*(e||0),this}},{key:"dot",value:function(e){return t.dot(this,e)}},{key:"cross",value:function(e){return t.cross(this,e)}},{key:"diff",value:function(e){return new t(Math.abs(this.x-e.x),Math.abs(this.y-e.y))}},{key:"diffMag",value:function(t){return t.diff(this).mag()}},{key:"diffRad",value:function(t){var e=Math.atan2(this.y,this.x),n=Math.atan2(t.y,t.x);return Math.abs(n-e)}},{key:"diffDeg",value:function(t){return this.diffRad(t)*v}},{key:"betweenMag",value:function(t,e){var n=this.mag(),i=t.mag();return e=b(e)?e:.5,n+(i-n)*e}},{key:"betweenRad",value:function(t,e){var n=Math.atan2(this.y,this.x),i=Math.atan2(t.y,t.x);return e=b(e)?e:.5,n+(i-n)*e}},{key:"betweenDeg",value:function(t,e){return this.betweenRad(t,e)*v}}],[{key:"radToVector2",value:function(e,n){return new t(Math.cos(e)*n,Math.sin(e)*n)}},{key:"degToVector2",value:function(e,n){return t.radToVector2(e*m,n)}},{key:"random",value:function(e){return t.radToVector2(p(d),e)}},{key:"equals",value:function(t,e){return t.x===e.x&&t.y===e.y}},{key:"distance",value:function(e,n){var i=new t(e.x,e.y);return i.sub(n).mag()}},{key:"dot",value:function(t,e){return t.x*e.x+t.y*e.y}},{key:"cross",value:function(t,e){return t.x*e.y-t.y*e.x}},{key:"lerp",value:function(t,e,n){var i=t.clone();return i.leap(e,n),i}},{key:"add",value:function(e,n){var i=new t(e.x,e.y);return i.add(n)}},{key:"sub",value:function(e,n){var i=new t(e.x,e.y);return i.sub(n)}},{key:"mult",value:function(e,n){var i=new t(e.x,e.y);return i.mult(n)}},{key:"div",value:function(e,n){var i=new t(e.x,e.y);return i.div(n)}},{key:"magSq",value:function(t){return t.x*t.x+t.y*t.y}},{key:"mag",value:function(e){var n=new t(e.x,e.y);return n.mag()}},{key:"degToVector2",value:function(e,n){var i=t.radToVector2(x(e),n);return i.setAngleMode(!0),i}},{key:"angle",value:function(t){return Math.atan2(t.y,t.x)}},{key:"angleBetween",value:function(t,e){return Math.acos(t.dot(e)/(t.mag()*e.mag()))}}]),t}(),S=function(){function t(e,n,i){Object(u["a"])(this,t),this.origin=new M(e,n),this.position=new M(e,n),this.velocity=new M(0,0);var a=l()({mass:1,friction:.85,k:.25,maxSpeed:20,range:180,restLength:0},i);this.mass=a.mass,this.friction=a.friction,this.k=a.k,this.maxSpeed=a.maxSpeed,this.range=a.range,this.restLength=a.restLength}return Object(c["a"])(t,[{key:"getSpringForce",value:function(t){var e=M.sub(this.origin,t||this.position),n=e.mag(),i=n-this.restLength;return e.normalize(),e.mult(this.k*i),e}},{key:"distract",value:function(t){t=new M(t.x,t.y);var e=M.distance(t,this.position),n=new M(0,0);if(e>0&&e<this.range){n=M.sub(this.position,t);var i=n.magSq();n.normalize(),n.mult(this.range/i*(this.range/2)),n.limit(this.maxSpeed),this.applyForce(n)}}},{key:"applyForce",value:function(t){var e=new M(t.x,t.y);this.velocity.add(e),this.velocity.div(this.mass),this.velocity.mult(this.friction)}},{key:"update",value:function(){this.position.add(this.velocity)}},{key:"jelly",value:function(t){var e=this.getSpringForce();this.applyForce(e),this.distract(t),this.update()}}]),t}(),E=function(){function t(e,n){Object(u["a"])(this,t),this.type=t.getType(e),this.points=this.getPoints(e),this.magnets=null,this.magnetOptions=n}return Object(c["a"])(t,[{key:"setup",value:function(){var t=this;this.points&&(this.magnets=this.points.map(function(e){return new S(e.x,e.y,t.magnetOptions)}))}},{key:"update",value:function(t){this.magnets&&this.magnets.forEach(function(e){e.jelly(t)})}},{key:"getPoints",value:function(t){var e=t.replace(this.type,"");e=e.replace(/,/g," ");var n=e.split(/\s+/g),i=[];if(n.forEach(function(t){""!=t&&i.push(+t)}),0==i.length)return null;if(1==i.length)return[{x:i[0],y:i[0]}];for(var a=[],r=0,o=~~(i.length/2);r<o;r+=1)a.push({x:i[2*r],y:i[2*r+1]});return a}},{key:"getCommand",value:function(){var t=this.type;return this.magnets.forEach(function(e){t+=" ".concat(e.position.x," ").concat(e.position.y)}),t}}],[{key:"getType",value:function(t){return t.match(/[a-zA-Z]/)[0]}},{key:"getCommandList",value:function(t){var e=t.replace(/[a-zA-Z]/g,function(t){return"$"+t});return e.split("$").slice(1)}}]),t}(),j={name:"SvgJelly",props:{image:String,path:String,viewBox:String,options:{type:Object,default:function(){return{mass:1,friction:.85,k:.25,maxSpeed:20,range:180}}},scale:{type:Number,default:1}},data:function(){return{isActive:!0,d:"",commands:[],mouse:{x:Number.MAX_VALUE,y:Number.MAX_VALUE}}},created:function(){this.createCommands(),this._$update()},beforeDestroy:function(){this.isActive=!1},methods:{createCommands:function(){var t=this,e=E.getCommandList(this.path),n=[];console.log(e),e.forEach(function(e,i){var a=new E(e,t.options);if(a.type.match(/H|V/)){var r=n[i-1];"H"==a.type?a.points=[{x:a.points[0].x,y:r.points[r.points.length-1].y}]:a.points=[{x:r.points[r.points.length-1].x,y:a.points[0].y}],a.type="L"}a.setup(),n.push(a)}),this.commands=n},mousemove:function(t){t.touches?(this.mouse.x=t.touches[0].clientX/this.scale,this.mouse.y=t.touches[0].clientY/this.scale):(this.mouse.x=t.offsetX/this.scale,this.mouse.y=t.offsetY/this.scale)},mouseout:function(){this.mouse.x=Number.MAX_VALUE,this.mouse.y=Number.MAX_VALUE},_$update:function(){var t=this,e="";this.commands.forEach(function(n){n.update(t.mouse),e+=n.getCommand()}),this.d=e,this.isActive&&requestAnimationFrame(this._$update.bind(this))}}},A=j,O=(n("d0a9"),n("2877")),_=Object(O["a"])(A,o,s,!1,null,"74c364b8",null),L=_.exports,P=n("56ec"),$={name:"app",components:{SvgJelly:L},data:function(){return{scale:1}},mounted:function(){var t=this,e=new P["a"].GUI({autoPlace:!1});e.domElement.style.position="fixed",e.domElement.style.top="0",e.domElement.style.right="0",document.body.appendChild(e.domElement),w()&&e.close();var n={mass:1,friction:.85,k:.25,restLength:0,maxSpeed:20,range:180};e.add(n,"mass",1,3).onChange(function(e){t.$refs.svg.commands.forEach(function(t){t.magnets.forEach(function(t){return t.mass=e})})}),e.add(n,"friction",.1,.9).onChange(function(e){t.$refs.svg.commands.forEach(function(t){t.magnets.forEach(function(t){return t.friction=e})})}),e.add(n,"k",.01,3).onChange(function(e){t.$refs.svg.commands.forEach(function(t){t.magnets.forEach(function(t){return t.k=e})})}),e.add(n,"maxSpeed",1,50).onChange(function(e){t.$refs.svg.commands.forEach(function(t){t.magnets.forEach(function(t){return t.maxSpeed=e})})}),e.add(n,"range",30,300).onChange(function(e){t.$refs.svg.commands.forEach(function(t){t.magnets.forEach(function(t){return t.range=e})})}),window.addEventListener("resize",this.handleResize)},methods:{resize:function(){var t=window.getComputedStyle(this.$refs.svg.$el),e=+t.width.replace("px","");this.scale=e/500}}},C=$,T=(n("034f"),Object(O["a"])(C,a,r,!1,null,null,null)),V=T.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(V)}}).$mount("#app")},"64a9":function(t,e,n){},cfda:function(t,e,n){},d0a9:function(t,e,n){"use strict";var i=n("cfda"),a=n.n(i);a.a}});
//# sourceMappingURL=app.1e2f35b5.js.map