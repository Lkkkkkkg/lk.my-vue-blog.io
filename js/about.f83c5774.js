(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"3b4e":function(t,e,a){"use strict";var i=a("59d1"),o=a.n(i);o.a},"59d1":function(t,e,a){},"77b6":function(t,e,a){},"7cc9":function(t,e,a){},c84b:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"detailRef",staticClass:"detail"},[t.loading?a("loading"):a("note",{ref:"noteRef",attrs:{des:t.blog.des,author:t.blog.author,avatar:t.blog.avatar,time:t.blog.time,detail:t.blog.detail}})],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"note"},[a("header",{staticClass:"note-header"},[a("div",{staticClass:"note-header-top"},[t._v("\n            "+t._s(t.des)+"\n        ")]),a("div",{staticClass:"note-header-bottom"},[a("a",{staticClass:"note-header-bottom-left"},[a("img",{staticClass:"note-avatar",attrs:{src:t.avatar}})]),a("div",{staticClass:"note-header-bottom-right"},[a("p",{staticClass:"note-author"},[t._v(t._s(t.author))]),a("p",{staticClass:"note-time"},[t._v(t._s(t.time))])])])]),a("section",{staticClass:"note-section"},[a("div",{staticClass:"note-section-top"},[t._v("\n            "+t._s(t.detail)+"\n        ")])])])},n=[],l={name:"note",props:{avatar:{type:String,default:""},author:{type:String,default:""},time:{type:String,default:""},des:{type:String,default:""},imgs:{type:Array,default:function(){return["","",""]}},detail:{type:String,default:""}}},r=l,c=(a("ded3"),a("2877")),d=Object(c["a"])(r,s,n,!1,null,"8abc9b5c",null),u=d.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loading"},[a("svg",{staticClass:"loading-icon"},[a("use",{attrs:{"xlink:href":"#icon-logo"}})])])},g=[],h={name:"Loading"},b=h,v=(a("3b4e"),Object(c["a"])(b,f,g,!1,null,"d409ecb4",null)),p=v.exports,m={name:"detail",components:{note:u,loading:p},data:function(){return{blog:{},loading:!1}},methods:{getBlog:function(){var t=this;this.loading=!0,this.$ajax.get("https://api.github.com/gists/".concat(this.$route.query.id)).then(function(e){t.blog.des=e.data.description,t.blog.author=e.data.owner.login,t.blog.avatar=e.data.owner.avatar_url,t.blog.time=e.data.created_at,t.blog.detail=e.data.files.blog.content,t.loading=!1,t.$nextTick(function(){this.$refs.detailRef.scrollTop=this.$store.state.scrollTops[this.$route.query.id]})})}},activated:function(){this.getBlog()},beforeRouteLeave:function(t,e,a){this.$store.commit("SET_SCROLLTOPS",{key:this.$route.query.id,value:this.$refs.detailRef.scrollTop}),a()}},_=m,C=(a("e314"),Object(c["a"])(_,i,o,!1,null,"5298c884",null));e["default"]=C.exports},ded3:function(t,e,a){"use strict";var i=a("77b6"),o=a.n(i);o.a},e314:function(t,e,a){"use strict";var i=a("7cc9"),o=a.n(i);o.a}}]);
//# sourceMappingURL=about.f83c5774.js.map