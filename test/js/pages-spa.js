(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-spa"],{"2baf":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("el-row",[a("el-button",{attrs:{type:"success"},on:{click:t.openNewPage}},[t._v("打开新页面")]),a("el-button",{attrs:{type:"primary"},on:{click:t.openSubPage}},[t._v("打开子页面")]),a("el-button",{attrs:{type:"info"},on:{click:t.openWindowPage}},[t._v("打开新窗口页面")]),a("el-button",{attrs:{type:"warning"},on:{click:t.openSelfpage}},[t._v("打开自身页面")])],1)],1)},o=[],c=a("9690"),p={data:function(){return{}},methods:{openNewPage:function(){c["a"].open({status:!0,title:"新页面",page:"pages/tree"})},openSubPage:function(){c["a"].open({status:!0,title:"子页面",page:"pages/tree",type:"SUB",vm:this,confirmCallback:function(){console.log("点击确定")},cancelCallback:function(t){console.log("点击取消")}})},openWindowPage:function(){c["a"].open({status:!0,title:"window页面",page:"pages/table",type:"WINDOW"})},openSelfpage:function(){c["a"].open({status:!0,title:"自身页面",page:"pages/tree",type:"SELF"})}},mounted:function(){}},l=p,i=a("2877"),r=Object(i["a"])(l,n,o,!1,null,null,null);r.options.__file="spa.vue";e["default"]=r.exports},9690:function(t,e,a){"use strict";(function(t){a.d(e,"a",function(){return i});a("ac6a"),a("cadf"),a("551c"),a("097d");var n=a("70c3"),o=a.n(n),c=a("a18c"),p=a("88e9"),l=a("5892");t.pageMap={};var i={open:function(e){e.status;var a,n,i=e.page,r=e.title,u=e.type,s=e.vm,h=e.params,d=e.confirmCallback,f=e.cancelCallback,m=t.antRouter,b=t.pageMap,g=Object(l["a"])("router")||[];switch(u){case"SUB":s.$store.commit("set_D_visible",!0),s.$store.commit("setModalCallback",{cancel:f,confirm:d}),b[i]?m.forEach(function(t){t.children&&t.children[0].path===i&&(t.children[0].meta.type="SUB")}):(a={path:"",component:p["default"],meta:{title:r},children:[{path:i,component:o()(i),meta:{title:r,type:"SUB"}}]},m=m.concat([a])),c["a"].addRoutes(m),t.antRouter=m,b[i]=!0,c["a"].push({path:"/"+i,query:h});break;case"WINDOW":a={path:"/"+i,component:o()(i),meta:{title:r,type:"WINDOW"}},m=m.filter(function(t){return t.path!=="/"+i}),m=m.concat([a]),g=g.filter(function(t){return t.path!=="/"+i}),g=g.concat([{path:"/"+i,component:i,meta:{title:r,type:"WINDOW"}}]),Object(l["b"])("router",g),localStorage.setItem("openWindow","true"),c["a"].addRoutes(m),t.antRouter=m,n=c["a"].resolve({path:"/"+i,query:h||{}}),window.open(n.href,"_blank");break;case"SELF":b[i]?m=m.map(function(t){t.children&&t.children[0].path===i&&(t.children[0].meta.type="SELF")}):(m=m.concat([{path:"",component:p["default"],meta:{title:r},children:[{path:i,component:o()(i),meta:{title:r,type:"SELF"}}]}]),c["a"].addRoutes(m),t.antRouter=m,b[i]=!0),c["a"].push({path:"/"+i,query:h});break;default:b[i]?m=m.map(function(t){t.children&&t.children[0].path===i&&(t.children[0].meta.type="BLANK")}):(m=m.concat([{path:"",component:p["default"],meta:{title:r},children:[{path:i,component:o()(i),meta:{title:r,type:"BLANK"}}]}]),c["a"].addRoutes(m),t.antRouter=m,b[i]=!0),c["a"].push({path:"/"+i,query:h})}}}}).call(this,a("c8ba"))}}]);