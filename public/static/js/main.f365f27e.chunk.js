(this["webpackJsonpphase_4_password_protection_lab-client"]=this["webpackJsonpphase_4_password_protection_lab-client"]||[]).push([[0],{26:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(19),i=n.n(s),a=(n(26),n(3)),r=n(2),o=n(0);var j=function(e){var t=e.setUser,n=Object(c.useState)(""),s=Object(a.a)(n,2),i=s[0],r=s[1],j=Object(c.useState)(""),l=Object(a.a)(j,2),d=l[0],u=l[1],b=Object(c.useState)(),h=Object(a.a)(b,2),O=h[0],p=h[1],m=Object(c.useState)(""),x=Object(a.a)(m,2),f=x[0],v=x[1];return Object(o.jsx)("div",{className:"form_container",children:Object(o.jsxs)("form",{className:"form_signup",onSubmit:function(e){e.preventDefault(),fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:i,password:d,password_confirmation:f})}).then((function(e){e.ok?e.json().then((function(e){return t(e)})):p("*Password should be identical and username unique")}))},children:[Object(o.jsx)("h1",{children:"Sign Up"}),Object(o.jsx)("label",{htmlFor:"username",children:"Username"}),Object(o.jsx)("input",{type:"text",id:"username",autoComplete:"off",value:i,onChange:function(e){return r(e.target.value)}}),Object(o.jsx)("label",{htmlFor:"password",children:"Password"}),Object(o.jsx)("input",{type:"password",id:"password",value:d,onChange:function(e){return u(e.target.value)},autoComplete:"current-password"}),Object(o.jsx)("label",{htmlFor:"password",children:"Password Confirmation"}),Object(o.jsx)("input",{type:"password",id:"password_confirmation",value:f,onChange:function(e){return v(e.target.value)},autoComplete:"current-password"}),O?Object(o.jsx)("div",{className:"error-msg",children:Object(o.jsx)("h5",{className:"error-text",children:"* Password should be idenical and username unique!."})}):null,Object(o.jsx)("button",{className:"s-btn",type:"submit",children:"Sign Up"})]})})};var l=function(e){var t=e.setUser,n=Object(c.useState)(""),s=Object(a.a)(n,2),i=s[0],r=s[1],j=Object(c.useState)(""),l=Object(a.a)(j,2),d=l[0],u=l[1],b=Object(c.useState)(null),h=Object(a.a)(b,2),O=h[0],p=h[1];return Object(o.jsx)("div",{className:"form_container ",children:Object(o.jsxs)("form",{className:"form_login",onSubmit:function(e){e.preventDefault(),fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:i,password:d})}).then((function(e){e.ok?e.json().then((function(e){return t(e)})):p("Invalid Username or Password")}))},children:[Object(o.jsx)("h1",{children:"Login"}),Object(o.jsx)("input",{type:"text",id:"username",autoComplete:"off",value:i,onChange:function(e){return r(e.target.value)},placeholder:"Username"}),Object(o.jsx)("input",{type:"password",id:"password",autoComplete:"current-password",value:d,onChange:function(e){return u(e.target.value)},placeholder:"Password"}),O?Object(o.jsx)("div",{className:"error-msg",children:Object(o.jsx)("h5",{className:"error-text",children:"Invalid username or password!!."})}):null,Object(o.jsx)("button",{className:"s-btn",type:"submit",children:"Login"})]})})},d=n(8);var u=function(e){var t=e.user,n=e.setUser;return Object(o.jsx)("header",{children:Object(o.jsxs)("div",{class:"nav_bar",children:[Object(o.jsx)(d.b,{className:"link action-btn",to:"/",children:"Home"}),t?Object(o.jsx)("button",{className:" link action-btn",onClick:function(){fetch("/logout",{method:"DELETE"}).then((function(e){e.ok&&n(null)}))},children:"Logout"}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d.b,{className:"link action-btn",to:"/signup",children:"Signup"}),Object(o.jsx)(d.b,{className:"link action-btn",to:"/login",children:"Login"})]})]})})},b=n(21);var h=function(e){return e.spiceCount,Object(o.jsxs)("header",{children:[Object(o.jsx)("div",{className:"heading",children:Object(o.jsxs)("h1",{children:["Active ",Object(o.jsx)("element",{className:"live_events",children:"U"})]})}),Object(o.jsx)("div",{className:"sub_heading",children:Object(o.jsx)("h3",{children:"Find the perfect activity for you."})})]})},O=n(13),p=n(18),m={title:"",image:"",location:"",description:"",date:"",rating:""};var x=function(e){var t=e.onAddSpice,n=Object(c.useState)(m),s=Object(a.a)(n,2),i=s[0],r=s[1];function j(e){r(Object(p.a)(Object(p.a)({},i),{},Object(O.a)({},e.target.id,e.target.value)))}return Object(o.jsxs)("div",{className:"card ",children:[Object(o.jsx)("h2",{children:"Add Event/Activity"}),Object(o.jsxs)("form",{className:"new_event",onSubmit:function(e){e.preventDefault(),fetch("/events",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((function(e){return e.json()})).then((function(e){r(m),t(e)}))},children:[Object(o.jsx)("label",{htmlFor:"title",children:"Title: "}),Object(o.jsx)("input",{type:"text",id:"title",value:i.title,onChange:j}),Object(o.jsx)("label",{htmlFor:"description",children:"Description: "}),Object(o.jsx)("textarea",{id:"description",value:i.description,onChange:j}),Object(o.jsx)("label",{htmlFor:"notes",children:"Location: "}),Object(o.jsx)("input",{type:"text",id:"location",value:i.location,onChange:j}),Object(o.jsx)("label",{htmlFor:"image",children:"Image URL: "}),Object(o.jsx)("input",{type:"text",id:"image",value:i.image,onChange:j}),Object(o.jsx)("label",{htmlFor:"date",children:"date: "}),Object(o.jsx)("input",{type:"date",id:"date",value:i.date,onChange:j}),Object(o.jsx)("label",{htmlFor:"rating",children:"Rating: "}),Object(o.jsx)("input",{type:"number",id:"rating",max:"5",value:i.rating,onChange:j}),Object(o.jsx)("button",{type:"submit",children:"Submit"})]})]})};var f=function(e){var t=e.percentage,n=e.onClick,s="".concat(100*t,"%"),i=Object(c.useRef)();return Object(o.jsxs)("div",{className:"star-rating",onClick:function(e){n(e.nativeEvent.offsetX/i.current.getBoundingClientRect().width)},ref:i,children:[Object(o.jsx)("span",{className:"foreground",style:{width:s},children:"\u2605\u2605\u2605\u2605\u2605"}),Object(o.jsx)("span",{className:"background",children:"\u2605\u2605\u2605\u2605\u2605"})]})};var v=function(e){var t=e.spice,n=e.onUpdateSpice,s=e.onDeleteSpice,i=t.id,r=t.image,j=t.title,l=t.description,d=t.location,u=t.date,b=t.rating,h=Object(c.useState)(),O=Object(a.a)(h,2),p=(O[0],O[1],Object(c.useState)("true")),m=Object(a.a)(p,2),x=m[0],v=m[1];return Object(o.jsxs)("div",{className:"spice-item card",children:[Object(o.jsx)("img",{src:r,alt:j}),Object(o.jsxs)("div",{className:"details",children:[Object(o.jsx)("h2",{children:j}),Object(o.jsx)("p",{children:l}),Object(o.jsxs)("p",{children:["Location: ",Object(o.jsx)("em",{children:d})]}),Object(o.jsxs)("p",{children:["Date: ",Object(o.jsx)("em",{children:u})]}),Object(o.jsxs)("div",{children:["Reviews:"," ",Object(o.jsx)(f,{percentage:b/5,onClick:function(e){var t=5*e;fetch("/events/".concat(i),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({rating:t})}).then((function(e){return e.json()})).then(n)}})]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("button",{className:"btn",onClick:function(){v(!x),fetch("/tickets",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event_id:i})}).then((function(e){return e.json()})).then(console.log)},children:x?"BOOKED":"BOOK"}),Object(o.jsx)("button",{className:"btn",onClick:function(){fetch("/events/".concat(i),{method:"DELETE"}).then((function(e){e.ok&&s(t)}))},children:"Delete Event"})]})]})]})};var g=function(e){var t=e.user,n=Object(c.useState)([]),s=Object(a.a)(n,2),i=s[0],r=s[1],j=Object(c.useState)(!0),l=Object(a.a)(j,2),d=l[0],u=l[1],h=Object(c.useState)(),O=Object(a.a)(h,2),p=O[0],m=O[1];function f(e){r((function(t){return t.map((function(t){return t.id===e.id?e:t}))}))}function g(e){r((function(t){return t.filter((function(t){return t.id!==e.id}))}))}return Object(c.useEffect)((function(){fetch("/events").then((function(e){return e.json()})).then(r)}),[]),Object(c.useEffect)((function(){fetch("/tickets/").then((function(e){return e.json()})).then(m)}),[]),t?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("h1",{children:["Welcome, ",Object(o.jsx)("element",{className:"live_events",children:t.username}),"!"]}),Object(o.jsxs)("h3",{children:["Booked tickets:",p]}),Object(o.jsxs)("h1",{children:["live: ",Object(o.jsx)("element",{className:"live_events",children:i.length})]}),Object(o.jsxs)("main",{children:[Object(o.jsx)("button",{className:"btn add_btn",onClick:function(){u(!d)},children:" Add Event +"}),d?Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(x,{onAddSpice:function(e){r((function(t){return[].concat(Object(b.a)(t),[e])}))}})}):null,Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"Available events"})}),Object(o.jsx)("section",{className:"spice-list",children:i.map((function(e){return Object(o.jsx)(v,{spice:e,onUpdateSpice:f,onDeleteSpice:g},e.id)}))})]})]}):Object(o.jsx)("div",{class:"body_msg",children:Object(o.jsx)("h1",{children:"Please Login or Sign Up"})})};var N=function(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){fetch("/me").then((function(e){e.ok&&e.json().then((function(e){return s(e)}))}))}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"banner_title",children:Object(o.jsx)(h,{})}),Object(o.jsx)("div",{class:"banner",children:Object(o.jsx)("div",{class:"mini",children:Object(o.jsx)(u,{user:n,setUser:s})})}),Object(o.jsx)("main",{children:n?Object(o.jsx)(r.c,{children:Object(o.jsx)(r.a,{path:"/",children:Object(o.jsx)(g,{user:n})})}):Object(o.jsxs)(r.c,{children:[Object(o.jsx)(r.a,{path:"/signup",children:Object(o.jsx)(j,{setUser:s})}),Object(o.jsx)(r.a,{path:"/login",children:Object(o.jsx)(l,{setUser:s})}),Object(o.jsx)(r.a,{path:"/",children:Object(o.jsx)(g,{})})]})})]})};i.a.render(Object(o.jsx)(d.a,{children:Object(o.jsx)(N,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.f365f27e.chunk.js.map