(this.webpackJsonpmoney_in_politics=this.webpackJsonpmoney_in_politics||[]).push([[0],{118:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var c,s,i,r=n(0),a=n(30),o=n.n(a),j=n(10),l=n(26),b=n(174),u=n(1),d=function(e){var t=e.legislator,n=t.organization,c=t.amount;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("h4",{children:[n," : ",Object(u.jsxs)("em",{children:["$",c]})," "]})})},h=function(e){var t=e.legislator;e.contributions,e.activeLegislator;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{children:t.contributions.map((function(e){return Object(u.jsx)(d,{legislator:e})}))})})},O=function(e){var t=e.legislators,n=(e.setActiveLegislator,e.activeLegislator,e.contributions),c=t.name,s=t.party,i=t.website_url,a=Object(r.useState)(!1),o=Object(j.a)(a,2),l=o[0],d=o[1];return Object(u.jsxs)("div",{className:"legs",children:[Object(u.jsx)("h2",{children:c}),Object(u.jsxs)(b.a,{onClick:function(){d(!l)},size:"small",variant:"contained",color:"success",children:["\ud83d\udcb0 ",Object(u.jsx)("strong",{children:"Contributions"})," \ud83d\udcb0"]}),l?Object(u.jsx)(h,{legislator:t,contributions:n}):null,Object(u.jsx)("h3",{children:s}),Object(u.jsx)("a",{href:i,children:i}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]})},x=n(179),f=n(182),g=function(e){var t=e.legislators,n=e.setActiveLegislator,c=e.activeLegislator,s=e.contributions;return Object(u.jsx)("div",{children:Object(u.jsx)(x.a,{container:!0,spacing:2,justify:"center",children:t.map((function(e){return Object(u.jsx)(x.a,{item:!0,md:4,children:Object(u.jsx)(f.a,{id:"test",children:Object(u.jsx)(O,{setActiveLegislator:n,legislators:e,activeLegislator:c,contributions:s})})})}))})})},p=n(176),v=n(178),m=n(175),y=n(177),w=n(173),C=function(e){var t=e.legislators,n=e.setActiveLegislator,c=e.contributions,s=e.activeLegislator,i=Object(r.useState)(""),a=Object(j.a)(i,2),o=a[0],l=a[1],b=Object(r.useState)(""),d=Object(j.a)(b,2),h=d[0],O=d[1],x=t.filter((function(e){return e.party.includes(h)&&e.name.toLowerCase().includes(o.toLowerCase())}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"homeMenu",children:[Object(u.jsx)(p.a,{label:"Search For legislators",type:"text",variant:"standard",onChange:function(e){return l(e.target.value)}}),Object(u.jsxs)(y.a,{sx:{width:500,mx:10},children:[Object(u.jsx)(v.a,{id:"demo-simple-select-label",children:"Filter By Party"}),Object(u.jsxs)(w.a,{variant:"standard",labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Filter By Party",onChange:function(e){return O(e.target.value)},children:[Object(u.jsx)(m.a,{value:"R",children:"Republican"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(m.a,{value:"D",children:"Democrat"})]})]})]}),Object(u.jsx)(g,{contributions:c,setActiveLegislator:n,legislators:x,activeLegislator:s})]})},S=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"See where your favorite legislators get their cash"}),Object(u.jsxs)("p",{id:"about",children:["Money has the power to influence legislation and even elections. Explore this app to see where legislators are getting their contributions. Once on the home page, you can search a legislator by name, or filter legislators by party affiliation. You can then visit their website by clicking the link on their card, or view their top ten contributors by donation value.",Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:"* Accurate data as of 1/3/2022"})]})]}),Object(u.jsx)("br",{}),Object(u.jsx)("img",{id:"pic",src:"http://www.jackwiens.com/wp-content/uploads/2018/08/Lincoln-and-Money-Bags-cartoon-867x1024.jpg",width:"450px",height:"500px"})]})},L=n(18),k=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)([]),i=Object(j.a)(s,2),a=i[0],o=i[1],l=Object(r.useState)(null),b=Object(j.a)(l,2),d=b[0],h=b[1];return Object(r.useEffect)((function(){fetch("/api/legislators").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]),Object(r.useEffect)((function(){fetch("/api/contributions").then((function(e){return e.json()})).then((function(e){return o(e)}))}),[]),Object(u.jsx)("div",{children:Object(u.jsxs)(L.d,{children:[Object(u.jsx)(L.b,{exact:!0,path:"/",children:Object(u.jsx)(C,{legislators:n,setActiveLegislator:h,contributions:a,activeLegislator:d})}),Object(u.jsx)(L.b,{exact:!0,path:"/about",children:Object(u.jsx)(S,{})}),Object(u.jsx)(L.b,{exact:!0,path:"/contributions"})]})})},F=function(e){var t=e.setCurrentUser,n=Object(L.g)(),c=Object(r.useState)(""),s=Object(j.a)(c,2),i=s[0],a=s[1],o=Object(r.useState)(""),l=Object(j.a)(o,2),d=l[0],h=l[1],O=Object(r.useState)(""),x=Object(j.a)(O,2),f=x[0],g=x[1];return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("/api/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:i,password:d,password_confirmation:f})}).then((function(e){e.ok?e.json().then((function(e){t(e),n.push("/")})):e.json().then((function(e){console.error(e),alert("Invalid Credentials")}))}))},children:[Object(u.jsx)("h2",{className:"signupAcct",children:"Create an Account"}),Object(u.jsxs)("div",{className:"signup",children:[Object(u.jsx)(p.a,{variant:"standard",label:"Username",type:"text",name:"username",value:i,onChange:function(e){return a(e.target.value)}}),Object(u.jsx)(p.a,{sx:{mx:8},variant:"standard",label:"Password",type:"password",name:"",value:d,onChange:function(e){return h(e.target.value)}}),Object(u.jsx)(p.a,{variant:"standard",label:" Confirm Password",type:"password",name:"password_confirmation",value:f,onChange:function(e){return g(e.target.value)}})]}),Object(u.jsx)(b.a,{id:"signupBttn",size:"small",variant:"contained",type:"submit",style:{backgroundColor:"#008000",color:"#ffffff"},children:"Submit"})]})})},A=function(e){var t=e.setCurrentUser,n=(Object(L.g)(),Object(r.useState)("")),c=Object(j.a)(n,2),s=c[0],i=c[1],a=Object(r.useState)(""),o=Object(j.a)(a,2),d=o[0],h=o[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(L.a,{to:"/"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:s,password:d})}).then((function(e){e.ok?e.json().then((function(e){t(e)})):e.json().then((function(e){alert(e.error)}))}))},children:[Object(u.jsx)("h1",{className:"signupAcct",children:"Log In"}),Object(u.jsxs)("div",{className:"signup",children:[Object(u.jsx)(p.a,{sx:{mx:10},variant:"standard",label:"Username",type:"text",name:"username",value:s,onChange:function(e){return i(e.target.value)}}),Object(u.jsx)(p.a,{variant:"standard",label:"Password",type:"password",name:"",value:d,onChange:function(e){return h(e.target.value)}})]}),Object(u.jsx)(b.a,{id:"loginBttn",size:"small",variant:"contained",type:"submit",style:{backgroundColor:"#008000",color:"#ffffff"},children:"Log In"})]}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{id:"suLnk",children:Object(u.jsx)(l.b,{to:"/signup",children:"Sign Up"})})]})},N=function(e){var t=e.setCurrentUser;return Object(u.jsx)("div",{children:Object(u.jsxs)(L.d,{children:[Object(u.jsx)(L.b,{exact:!0,path:"/",children:Object(u.jsx)(A,{setCurrentUser:t})}),Object(u.jsx)(L.b,{exact:!0,path:"/signup",children:Object(u.jsx)(F,{setCurrentUser:t})}),Object(u.jsx)(L.b,{exact:!0,path:"/about",children:Object(u.jsx)(S,{})}),Object(u.jsx)(L.a,{to:"/"})]})})},U=n(42),P=n(68),T=P.a.nav(c||(c=Object(U.a)(["\n  background: #008000;\n  height: 75px;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.2rem calc((100vw - 1000px) / 2);\n  z-index: 10;\n  /* Third Nav */\n  /* justify-content: flex-start; */\n"]))),B=Object(P.a)(l.c)(s||(s=Object(U.a)(["\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 2rem;\n  height: 100%;\n  cursor: pointer;\n  /* &.active {\n    color: #9999ff;\n  } */\n"]))),E=P.a.div(i||(i=Object(U.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: -24px;\n  /* Second Nav */\n   margin-right: 24px;\n   /* Third Nav */\n   width: 80vw;\n  white-space: nowrap;\n  @media screen and (max-width: 408px) {\n    display: none;\n  }\n"]))),_=function(e){var t=e.setCurrentUser,n=Object(L.g)();return Object(u.jsx)("div",{children:Object(u.jsx)(T,{children:Object(u.jsxs)(E,{children:[Object(u.jsx)(B,{to:"/",children:"Home"}),Object(u.jsx)(B,{to:"/about",children:"About"}),Object(u.jsx)(B,{to:"/",onClick:function(){fetch("/api/logout",{method:"DELETE"}).then((function(e){return e.json()})),t(null),n.push("/login")},children:"Logout"})]})})})},D=n(89),I=n(172);n(118);var z=function(){var e=Object(r.useState)(null),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(!1),i=Object(j.a)(s,2),a=(i[0],i[1]),o=Object(D.a)({typography:{fontFamily:["JetBrains Mono","monospace"].join(",")}});return Object(r.useEffect)((function(){fetch("/me").then((function(e){e.ok?e.json().then((function(e){c(e),a(!0)})):a(!1)}))}),[]),Object(u.jsx)("div",{children:Object(u.jsx)(I.a,{theme:o,children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)(_,{setCurrentUser:c}),n?Object(u.jsx)(k,{}):Object(u.jsx)(N,{setCurrentUser:c})]})})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,186)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};o.a.render(Object(u.jsx)(l.a,{children:Object(u.jsx)(z,{})}),document.getElementById("root")),J()}},[[119,1,2]]]);
//# sourceMappingURL=main.ad1fb21b.chunk.js.map