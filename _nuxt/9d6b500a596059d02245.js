(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{152:function(e,t,o){var content=o(159);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(63).default)("8ff0e09c",content,!0,{sourceMap:!1})},154:function(e,t,o){"use strict";var n=o(6),r=o(155)(5),m=!0;"find"in[]&&Array(1).find((function(){m=!1})),n(n.P+n.F*m,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),o(78)("find")},155:function(e,t,o){var n=o(19),r=o(77),m=o(20),l=o(16),c=o(156);e.exports=function(e,t){var o=1==e,d=2==e,v=3==e,f=4==e,h=6==e,x=5==e||h,w=t||c;return function(t,c,y){for(var k,_,$=m(t),C=r($),V=n(c,y,3),I=l(C.length),j=0,A=o?w(t,I):d?w(t,0):void 0;I>j;j++)if((x||j in C)&&(_=V(k=C[j],j,$),e))if(o)A[j]=_;else if(_)switch(e){case 3:return!0;case 5:return k;case 6:return j;case 2:A.push(k)}else if(f)return!1;return h?-1:v||f?f:A}}},156:function(e,t,o){var n=o(157);e.exports=function(e,t){return new(n(e))(t)}},157:function(e,t,o){var n=o(9),r=o(107),m=o(2)("species");e.exports=function(e){var t;return r(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!r(t.prototype)||(t=void 0),n(t)&&null===(t=t[m])&&(t=void 0)),void 0===t?Array:t}},158:function(e,t,o){"use strict";var n=o(152);o.n(n).a},159:function(e,t,o){(t=o(62)(!1)).push([e.i,".img[data-v-2a7958a8]{height:75vh;overflow:hidden;top:0;z-index:-1;background:#f7f2ef}.img[data-v-2a7958a8],.img .overlay[data-v-2a7958a8]{width:100%;position:absolute}.img .overlay[data-v-2a7958a8]{bottom:0;height:300px;background:linear-gradient(180deg,rgba(246,241,238,0),#f7f2ef);z-index:1}.img img[data-v-2a7958a8]{width:100%;height:75vh;-o-object-fit:cover;object-fit:cover;position:absolute;top:0}.post[data-v-2a7958a8]{margin-top:calc(75vh - 400px);position:relative;z-index:5;padding:200px 25px}@media screen and (min-width:1080px){.post[data-v-2a7958a8]{padding:200px 20%}}.post h1[data-v-2a7958a8]{display:inline}.post p[data-v-2a7958a8]{-webkit-animation:fade-data-v-2a7958a8 .4s ease .25s 1 both;animation:fade-data-v-2a7958a8 .4s ease .25s 1 both;opacity:0}@-webkit-keyframes fade-data-v-2a7958a8{0%{opacity:0;transform:translateY(20px)}75%{transform:none}to{opacity:1}}@keyframes fade-data-v-2a7958a8{0%{opacity:0;transform:translateY(20px)}75%{transform:none}to{opacity:1}}",""]),e.exports=t},163:function(e,t,o){"use strict";o.r(t);o(27),o(154);var n=o(0).a.extend({name:"post",computed:{title:function(){var e=this,img=this.imgs.find((function(img){return img.name===e.$route.params.img}));return(null==img?void 0:img.title)||"Unknown image"},src:function(){return"".concat(this.$router.options.base,"images/").concat(this.$route.params.img,".jpg")}},methods:{getId:function(e){return"".concat(e,"_title")}},data:function(){return{pVisible:!0,imgs:[{name:"road",title:"Iconic road"},{name:"elk",title:"Beautiful animal"},{name:"flower",title:"Pretty flower"},{name:"car",title:"Classic car"},{name:"mtns",title:"Foggy mountains"},{name:"overhead",title:"Mountain road"},{name:"books",title:"Old books"},{name:"guitar",title:"Electric guitar"}]}}}),r=(o(158),o(24)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[o("div",{directives:[{name:"shared-element",rawName:"v-shared-element:[$route.params.img]",value:{restrictToViewport:!0},expression:"{ restrictToViewport: true }",arg:e.$route.params.img}],staticClass:"img"},[o("img",{attrs:{src:e.src,alt:e.title}}),e._v(" "),o("div",{staticClass:"overlay"})]),e._v(" "),o("div",{staticClass:"post"},[o("h1",{directives:[{name:"shared-element",rawName:"v-shared-element:[getId($route.params.img)]",value:{restrictToViewport:!0},expression:"{\n        restrictToViewport: true\n      }",arg:e.getId(e.$route.params.img)}]},[e._v("\n      "+e._s(e.title)+"\n    ")]),e._v(" "),o("p",[e._v("\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur\n      eum alias, sapiente obcaecati, doloribus velit aut quam vitae voluptas\n      iste quidem fugiat laudantium, et ipsa tempora quo similique debitis!\n      Voluptatibus illo magnam esse minima. Suscipit odio, aliquam mollitia,\n      repudiandae qui provident illum possimus maxime dolorum doloribus\n      temporibus nihil! Beatae voluptates eveniet quasi animi ullam deserunt\n      facere quisquam eos aliquam excepturi, aperiam consequuntur maxime optio\n      inventore eum quos magni commodi laudantium quo. Enim odio quae debitis\n      porro nesciunt facere, earum praesentium quam dolores nam aut?\n      Voluptates eius consequatur architecto ratione odio dolor blanditiis\n      vero, similique libero, esse praesentium modi deserunt debitis ullam,\n      quod adipisci! Modi iusto quas aliquid itaque commodi dolor nisi.\n      Consequatur voluptates placeat fugit quaerat provident et, excepturi\n      quibusdam facere. Sed aliquam fuga impedit. Fugiat, porro voluptatibus\n      cum in quaerat deleniti iure ipsum qui eveniet at eaque maxime suscipit\n      aperiam esse? Id possimus omnis, nulla est, vel eos voluptatibus rem\n      quasi architecto qui placeat quaerat velit ducimus ullam aperiam itaque\n      tempora corporis expedita a quidem. Numquam quod maiores quae omnis\n      error architecto ut quisquam necessitatibus excepturi nihil tenetur vero\n      ipsum cum illum quas tempore, corporis dolor, unde porro vel corrupti\n      quam? Numquam quas soluta quibusdam fuga odit. Sed, nesciunt?\n    ")])])])}),[],!1,null,"2a7958a8",null);t.default=component.exports}}]);