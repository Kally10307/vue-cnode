(function(t){function e(e){for(var s,a,i=e[0],c=e[1],u=e[2],l=0,d=[];l<i.length;l++)a=i[l],r[a]&&d.push(r[a][0]),r[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);m&&m(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(s=!1)}s&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var s={},a={app:0},r={app:0},o=[];function i(t){return c.p+"js/"+({}[t]||t)+".201807290051.js"}function c(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-3420":1,"chunk-ae89":1,"chunk-2f1e":1,"chunk-6fb1":1,"chunk-70b4":1,"chunk-71d9":1,"chunk-a770":1,"chunk-b98d":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var s="css/"+({}[t]||t)+".201807290051.css",a=c.p+s,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var i=r[o],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===s||u===a))return e()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){i=l[o],u=i.getAttribute("data-href");if(u===s||u===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var s=e&&e.target&&e.target.src||a,r=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");r.request=s,n(r)},d.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(d)}).then(function(){a[t]=0}));var s=r[t];if(0!==s)if(s)e.push(s[2]);else{var o=new Promise(function(e,n){s=r[t]=[e,n]});e.push(s[2]=o);var u,l=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=i(t),u=function(e){d.onerror=d.onload=null,clearTimeout(m);var n=r[t];if(0!==n){if(n){var s=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+s+": "+a+")");o.type=s,o.request=a,n[1](o)}r[t]=void 0}};var m=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,l.appendChild(d)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(n,s,function(e){return t[e]}.bind(null,s));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var m=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2726:function(t,e,n){"use strict";var s=n("da1c"),a=n.n(s);a.a},"365c":function(t,e,n){"use strict";n("cadf"),n("551c");var s={login:"https://cnodejs.org/api/v1/accesstoken",topics:"https://cnodejs.org/api/v1/topics",topicDetail:"https://cnodejs.org/api/v1/topic/",collection:"https://cnodejs.org/api/v1/topic_collect/collect",cancelCollection:"https://cnodejs.org/api/v1/topic_collect/de_collect",like:"https://cnodejs.org/api/v1/reply/",messageCount:"https://cnodejs.org/api/v1/message/count",fetchMessages:"https://cnodejs.org/api/v1/messages",messageMarkAll:"https://cnodejs.org/api/v1/message/mark_all",messageMarkOne:"https://cnodejs.org/api/v1/message/mark_one/",replies:"https://cnodejs.org/api/v1/topic/",newTopics:"https://cnodejs.org/api/v1/topics",updateTopics:"https://cnodejs.org/api/v1/topics/update",user:"https://cnodejs.org/api/v1/user/",userCollections:"https://cnodejs.org/api/v1/topic_collect/"};e["a"]=s},4081:function(t,e,n){"use strict";var s=n("db6e"),a=n.n(s);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"xiejiahe"}},[n("div",{staticClass:"progress",class:{actve:t.start,end:t.end}},[n("div",{staticClass:"rotate-loading"}),n("div",{staticClass:"progress-forward"})]),n("div",{staticClass:"go-top user-select-none",on:{click:t.goTop}},[n("p",[t._v("回")]),n("p",[t._v("顶")]),n("p",[t._v("部")])]),n("div",{staticClass:"router-view"},[n("Header"),n("keep-alive",{attrs:{exclude:"User,Collections,Messages,Release"}},[n("router-view")],1),n("Footer")],1)])},r=[],o=(n("28a5"),n("f751"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"header-box"},[n("router-link",{staticClass:"logo user-select-none",attrs:{to:"/"}},[n("img",{attrs:{src:"http://o4j806krb.qnssl.com/public/images/cnodejs_light.svg",alt:"logo"}})]),n("nav",{staticClass:"nav"},[n("router-link",{attrs:{to:"/"}},[t._v("首页")]),t.isLogin?n("router-link",{class:{"unread-msg":t.messageCount>0},attrs:{to:"/messages"}},[t._v("未读消息")]):t._e(),n("a",{ref:"noopenr noreferer",attrs:{href:"https://github.com/xjh22222228",target:"_blank"}},[t._v("关于作者")]),t.isLogin?n("a",{attrs:{href:"javascript:;"},on:{click:t.logout}},[t._v("退出")]):n("router-link",{attrs:{to:"/login"}},[t._v("登录")])],1)],1)])}),i=[],c=n("c93e"),u=n("2f62"),l={name:"Header",computed:Object(c["a"])({},Object(u["b"])(["isLogin","messageCount"])),methods:{logout:function(){this.$store.commit("logout"),this.$Message.success("已登出！")}}},d=l,m=(n("eadf"),n("2877")),p=Object(m["a"])(d,o,i,!1,null,null,null),g=p.exports,f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{pre:!0,attrs:{class:"footer"}},[s("div",{attrs:{class:"footer-box"}},[s("div",{attrs:{class:"source-code-add"}},[s("a",{attrs:{href:"https://github.com/xjh22222228/vue-cnode",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码地址")])]),s("div",{attrs:{class:"vendor"}},[s("ul",[s("li",{attrs:{class:"cnode"}},[s("span",[t._v("CNode社区提供API")]),s("a",{attrs:{href:"https://cnodejs.org",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://cnodejs.org/public/images/cnodejs.svg",alt:"cnode"}})])]),s("li",{attrs:{class:"cnode"}},[s("span",[t._v("github-pages提供网站托管")]),s("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:n("917e"),alt:"github"}})])])])])])])}],v={name:"Footer"},A=v,_=(n("a194"),Object(m["a"])(A,f,h,!1,null,null,null)),b=_.exports,k={name:"App",components:{Header:g,Footer:b},data:function(){return{loading:!1,start:!1,end:!1}},created:function(){this.axiosConfig(),this.momentConfig(),this.$store.dispatch("checkLogin")},methods:{goTop:function(){window.scrollTo(0,0)},progressStart:function(){this.start=!0},progressEnd:function(){var t=this;this.end=!0,setTimeout(function(){t.end=t.start=!1},700)},axiosConfig:function(){var t=this;axios.interceptors.request.use(function(e){return t.progressStart(),"post"===e.method&&(e.data=Object.assign({accesstoken:t.$store.state.accessToken},e.data)),"get"===e.method&&(e.params=Object.assign({accesstoken:t.$store.state.accessToken},e.params)),e},function(e){return t.progressEnd(),t.$Message.warning("API请求失败!"),Promise.reject(e)}),axios.interceptors.response.use(function(e){return t.progressEnd(),e},function(e){return t.$Message.warning("请求超时或服务器出错!"),t.progressEnd(),Promise.reject(e)})},momentConfig:function(){moment.locale("zh-cn",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah点mm分",LTS:"Ah点m分s秒",L:"YYYY-MM-DD",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日Ah点mm分",LLLL:"YYYY年MMMD日ddddAh点mm分",l:"YYYY-MM-DD",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日Ah点mm分",llll:"YYYY年MMMD日ddddAh点mm分"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(t,e){return 12===t&&(t=0),"凌晨"===e||"早上"===e||"上午"===e?t:"下午"===e||"晚上"===e?t+12:t>=11?t:t+12},meridiem:function(t,e,n){var s=100*t+e;return s<600?"凌晨":s<900?"早上":s<1130?"上午":s<1230?"中午":s<1800?"下午":"晚上"},calendar:{sameDay:function(){return 0===this.minutes()?"[今天]Ah[点整]":"[今天]LT"},nextDay:function(){return 0===this.minutes()?"[明天]Ah[点整]":"[明天]LT"},lastDay:function(){return 0===this.minutes()?"[昨天]Ah[点整]":"[昨天]LT"},nextWeek:function(){var t,e;return t=moment().startOf("week"),e=this.unix()-t.unix()>=604800?"[下]":"[本]",0===this.minutes()?e+"dddAh点整":e+"dddAh点mm"},lastWeek:function(){var t,e;return t=moment().startOf("week"),e=this.unix()<t.unix()?"[上]":"[本]",0===this.minutes()?e+"dddAh点整":e+"dddAh点mm"},sameElse:"LL"},ordinalParse:/\d{1,2}(日|月|周)/,ordinal:function(t,e){switch(e){case"d":case"D":case"DDD":return t+"日";case"M":return t+"月";case"w":case"W":return t+"周";default:return t}},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},week:{dow:1,doy:4}})}}},C=k,j=Object(m["a"])(C,a,r,!1,null,null,null),y=j.exports,M=n("8c4f");s["default"].use(M["a"]);var w=new M["a"]({routes:[{name:"HomePage",path:"/",component:function(){return n.e("chunk-2f1e").then(n.bind(null,"0a0d"))}},{name:"Login",path:"/login",component:function(){return n.e("chunk-a770").then(n.bind(null,"ede4"))}},{name:"User",path:"/user/:loginname",component:function(){return n.e("chunk-b98d").then(n.bind(null,"9419"))}},{name:"Collections",path:"/user/:loginname/collections",props:function(t){return{loginname:t.params.loginname}},component:function(){return n.e("chunk-6fb1").then(n.bind(null,"b071"))}},{name:"Messages",path:"/messages",component:function(){return n.e("chunk-70b4").then(n.bind(null,"4ee6"))}},{name:"Topic",path:"/topic/:id",component:function(){return Promise.all([n.e("chunk-255d"),n.e("chunk-ae89")]).then(n.bind(null,"9a02"))}},{name:"Release",path:"/release/:id",component:function(){return Promise.all([n.e("chunk-255d"),n.e("chunk-3420")]).then(n.bind(null,"4115"))}},{name:"NotMatch",path:"*",component:function(){return n.e("chunk-71d9").then(n.bind(null,"efd7"))}}]}),x=n("e069"),T=n.n(x),N=(n("dcad"),n("78a7"),n("7642"),n("365c"));s["default"].use(u["a"]);var O=new u["a"].Store({strict:!1,state:{accessToken:window.localStorage.access_token||"",isLogin:!1,userInfo:{avatar_url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACAQMAAACnuvRZAAAAA1BMVEX29vYACyOqAAAACklEQVQI12MAAgAABAABINItbwAAAABJRU5ErkJggg==",id:"",loginname:""},messageCount:0},mutations:{logout:function(t){window.localStorage.removeItem("access_token"),t.accessToken="",t.isLogin=!1},updateLoginStatus:function(t,e){e.accessToken?(window.localStorage.access_token=window.localStorage.save_access_token=t.accessToken=e.accessToken,t.userInfo=e.userInfo):t.userInfo=e,t.isLogin=!0},updateMessageCount:function(t,e){t.messageCount=e}},actions:{login:function(t,e){var n=t.dispatch,s=(t.state,t.commit);s("updateLoginStatus",e),n("fetchMessageCount")},checkLogin:function(t){var e=t.state,n=t.dispatch,s=t.commit;e.accessToken&&axios.post(N["a"].login).then(function(t){t.data.success&&(s("updateLoginStatus",t.data),n("fetchMessageCount"))}).catch(function(t){return t})},fetchMessageCount:function(t){var e=t.commit;axios.get(N["a"].messageCount).then(function(t){t.data.success&&e("updateMessageCount",t.data.data)}).catch(function(t){return t})}}}),E=O,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"sidebar"},[n("div",{staticClass:"personal-information"},["topic"!==t.from?n("div",[t.isLogin?n("div",[n("div",{staticClass:"top user-select-none"},[t._v("个人信息")]),n("div",{staticClass:"info user-select-none"},[n("router-link",{attrs:{to:{name:"User",params:{loginname:t.userInfo.loginname}}}},[n("img",{attrs:{src:t.userInfo.avatar_url,alt:"头像"}})]),n("router-link",{staticClass:"nickname",attrs:{to:{name:"User",params:{loginname:t.userInfo.loginname}}}},[t._v(t._s(t.userInfo.loginname))])],1),n("div",{staticClass:"publish-topic"},[n("router-link",{attrs:{to:"/release/create"}},[t._v("发布话题")])],1)]):n("div",{staticClass:"tourist-box"},[n("div",{staticClass:"cnode"},[t._v("CNode：Node.js专业中文社区")]),n("div",{staticClass:"tourist"},[n("span",[t._v("当前是游客状态，您可以 ")]),n("router-link",{attrs:{to:"/login"}},[t._v("登录")])],1)])]):n("div",[n("div",{staticClass:"top user-select-none"},[t._v("作者")]),n("div",{staticClass:"info user-select-none"},[n("router-link",{attrs:{to:{name:"User",params:{loginname:t.author.loginname}}}},[n("img",{attrs:{src:t.author.avatar_url,alt:"头像"}})]),n("router-link",{attrs:{to:{name:"User",params:{loginname:t.author.loginname}}}},[n("em",{staticClass:"nickname"},[t._v(t._s(t.author.loginname))])])],1)])]),n("div",{staticClass:"pay pointer-events-none"},[n("div",[t._v("如果这个项目能帮到您，那么您可以")]),n("Carousel",{attrs:{autoplay:"",loop:"","autoplay-speed":5e3}},[n("CarouselItem",[n("div",[n("img",{attrs:{src:"https://raw.githubusercontent.com/xjh22222228/statics/master/images/pay/alipay.png",alt:"支付宝"}})])]),n("CarouselItem",[n("div",[n("img",{attrs:{src:"https://raw.githubusercontent.com/xjh22222228/statics/master/images/pay/wxpay.png",alt:"微信"}})])])],1)],1),t._m(0)])},L=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"scann-qrcode"},[s("div",{staticClass:"scann-qrcode-title"},[t._v("手机端二维码")]),s("img",{attrs:{src:n("b8dc"),alt:"手机端二维码"}})])}],S={name:"Sidebar",props:{from:{type:String,default:""},author:{type:Object,default:function(){return{avatar_url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACAQMAAACnuvRZAAAAA1BMVEX29vYACyOqAAAACklEQVQI12MAAgAABAABINItbwAAAABJRU5ErkJggg==",id:"",loginname:""}}}},computed:Object(c["a"])({},Object(u["b"])(["userInfo","isLogin"]))},B=S,U=(n("2726"),Object(m["a"])(B,Y,L,!1,null,null,null)),P=U.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"unique-topics-list"},t._l(t.topics,function(e){return n("li",{key:e.id},[n("div",{staticClass:"avatar"},[n("router-link",{attrs:{to:{name:"User",params:{loginname:e.author.loginname}}}},[n("img",{attrs:{src:e.author.avatar_url,alt:"头像",title:e.author.loginname}})])],1),void 0!==e.reply_count?n("div",{staticClass:"reply-view"},[t._v(t._s(e.reply_count)+"/"+t._s(e.visit_count))]):t._e(),e.tab?n("span",{staticClass:"tag",class:t.tag(e).className},[t._v(t._s(t.tag(e).text))]):t._e(),n("router-link",{staticClass:"title",attrs:{to:{name:"Topic",params:{id:e.id}}}},[t._v(t._s(e.title))]),n("div",{staticClass:"last-reply-time"},[n("time",[t._v(t._s(t._f("fromNow")(e.last_reply_at)))])])],1)}))},D=[],V={name:"TopicsList",props:{topics:{type:Array,default:function(){return[]},required:!0}},methods:{tag:function(t){if(t.top)return{text:"置顶",className:"top"};if(t.good)return{text:"精华",className:"good"};switch(t.tab){case"ask":return{text:"问答",className:t.tab};case"share":return{text:"分享",className:t.tab};case"job":return{text:"招聘",className:t.tab};case"good":return{text:"精华",className:t.tab};case"dev":return{text:"测试",className:t.tab};default:return{text:"",className:"default"}}}}},Z=V,F=(n("4081"),Object(m["a"])(Z,I,D,!1,null,null,null)),J=F.exports;s["default"].use(T.a),s["default"].config.productionTip=!1,s["default"].component("Sidebar",P),s["default"].component("List",J),s["default"].filter("fromNow",function(t){return moment(t).fromNow()}),new s["default"]({router:w,store:E,render:function(t){return t(y)}}).$mount("#xiejiahe")},7642:function(t,e,n){},"78a7":function(t,e,n){},"917e":function(t,e,n){t.exports=n.p+"img/github.131c9e89.svg"},9510:function(t,e,n){},a194:function(t,e,n){"use strict";var s=n("de40"),a=n.n(s);a.a},b8dc:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAEYAQMAAAC9QHvPAAAABlBMVEX///8AAABVwtN+AAACn0lEQVRo3uWZzc2zMBCEJ+LAkRIoxZ0lfjujFErIkYOFv5lZIDV4P0uRsvbjg9lfr5F1TF3jW/76F5+p78VyA9Cw+n/NyxwU5285p+9aMff+4sSH63U61g1AGZVZ+zl/Ob3s+hCa5gYdGevGr5KfKb0tvbZ5L4gNeRgAnao2IzOejvwMgJsJm1+2N52akm1+VOaOUbTnj457zj/Ba3mZa0jVmgZe9OeXltq9NCpj9zUngXonwwluKP2gU+dlaOZdUgNC7xDTd0jQx8KQjE4o7gTW2kPQ2VdtKukZUNW9u8TglIO1iirMOyTUQRmq+pdqgFO1hJ37WFVUZWas2WWD0hE5+/HLQY2S9T4kA/CEwZE5bhN2fRyFRWYGcEhuZFo4Nd4TfXm69T4kE7XEFaPEaAPPHdGLDJCWuSpFhKojNj93PW8Ylumcds4Nx3ZIJkNZBo7MTOSmP+reZn4XylDOBcZl1jvNrsJ0dcMbiCaFfjUtI1/2jW4Sc1jV8X2Yn/TlBmWANUp8HVfTSsBvuLBCkYC0zFVDbm7DtFB1xGf3JZSbhmQ45R7a+y4fuja4WIxsBORlgCJT1xUnruzRl+gUlHNHZe5WBHC1gV0fk+nRbyKclpGJK1r5ijNd/Zg/BetH72MyoWr4uJiDqU/eyc6UE8tTOvYevVONvajCqkMyV+mkK04Ui6eC1p2JFb2QlnEdhSs32ea1QTBmPc6NyrjFMnf3JaT3X5NC58/NPPkpQvLjy1dBKZsfknlOGG+sO5yAf48ZXMnLHBGf/VTVgMcVPoLl2HVQRmHJZwfavDtYA0v0Dy1kZ7S0m+E6F6NJvJ0U6shM5FtwSHhJmC5fzswAEKN7gd/NfS8ABQ4H6zGZriFfJsMli347bn6py8z8x+MfovkFOZjwA2EAAAAASUVORK5CYII="},da1c:function(t,e,n){},db6e:function(t,e,n){},de40:function(t,e,n){},eadf:function(t,e,n){"use strict";var s=n("9510"),a=n.n(s);a.a}});