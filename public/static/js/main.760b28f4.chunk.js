(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{119:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=a(8),s=a(21),u=a(63),i=a(52),m=a(4),d="[ui] Open modal",p="[ui] Close modal",v="[event] Set active",f="[event] Logout event",b="[event] Add new",E="[event] Clear active event",h="[event] Event updated",g="[event] Event deleted",O="[event] Events loaded",j="[auth] Finish checking login state",y="[auth] Login",N="[auth] Logout",k={events:[],activeEvent:null},w={modalOpen:!1},x={checking:!0},S=Object(s.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(m.a)(Object(m.a)({},e),{},{modalOpen:!0});case p:return Object(m.a)(Object(m.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(m.a)(Object(m.a)({},e),{},{activeEvent:t.payload});case b:return Object(m.a)(Object(m.a)({},e),{},{events:[].concat(Object(i.a)(e.events),[t.payload])});case E:return Object(m.a)(Object(m.a)({},e),{},{activeEvent:null});case h:return Object(m.a)(Object(m.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case g:return Object(m.a)(Object(m.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case O:return Object(m.a)(Object(m.a)({},e),{},{events:Object(i.a)(t.payload)});case f:return Object(m.a)({},k);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(m.a)(Object(m.a)(Object(m.a)({},e),t.payload),{},{checking:!1});case j:return Object(m.a)(Object(m.a)({},e),{},{checking:!1});case N:return{checking:!1};default:return e}}}),C="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,T=Object(s.e)(S,C(Object(s.a)(u.a))),D=a(33),P=a(9),I=a(36),A=function(e){var t=e.isAuthenticated,a=e.component,n=Object(I.a)(e,["isAuthenticated","component"]);return r.a.createElement(P.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(P.a,{to:"/"}):r.a.createElement(a,e)}}))},_=function(e){var t=e.isAuthenticated,a=e.component,n=Object(I.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",n.location.pathname+(n.location.search||"")),r.a.createElement(P.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(P.a,{to:"/login"})}}))},L=a(17),R=a(16),G=a.n(R),F=a(24),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(L.a)(t,2),r=a[0],c=a[1],o=function(){c(e)},l=function(e){var t=e.target;c(Object(m.a)(Object(m.a)({},r),{},Object(F.a)({},t.name,t.value)))};return[r,l,o]},V=a(11),H=a.n(V),J=a(20),U="https://mern-calendar-jm.herokuapp.com/api",B=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(U,"/").concat(e);return"GET"===a?fetch(n):fetch(n,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},X=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(U,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===a?fetch(n,{method:a,headers:{"x-token":r}}):fetch(n,{method:a,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},q=a(14),z=a.n(q),K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{end:z()(e.end).toDate(),start:z()(e.start).toDate()})}))},Q=function(e){return{type:b,payload:e}},W=function(){return{type:E}},Y=function(e){return{type:h,payload:e}},Z=function(){return{type:g}},$=function(e){return{type:O,payload:e}},ee=function(){return{type:j}},te=function(e){return{type:y,payload:e}},ae=function(){return function(e){localStorage.clear(),e({type:f}),e(ne())}},ne=function(){return{type:N}},re=(a(81),function(){var e=Object(l.b)(),t=M({lEmail:"jose@hotmail.com",lPassword:"123456"}),a=Object(L.a)(t,2),n=a[0],c=a[1],o=M({rName:"Marina",rEmail:"marina@hotmail.com",rPassword1:"123456",rPassword2:"123456"}),s=Object(L.a)(o,2),u=s[0],i=s[1],m=n.lEmail,d=n.lPassword,p=u.rName,v=u.rEmail,f=u.rPassword1,b=u.rPassword2;return r.a.createElement("div",{className:"container login-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 login-form-1"},r.a.createElement("h3",null,"Ingreso"),r.a.createElement("form",{onSubmit:function(t){var a,n;t.preventDefault(),e((a=m,n=d,function(){var e=Object(J.a)(H.a.mark((function e(t){var r,c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B("auth",{email:a,password:n},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(te({uid:c.uid,name:c.name}))):G.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:m,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:d,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Login"})))),r.a.createElement("div",{className:"col-md-6 login-form-2"},r.a.createElement("h3",null,"Registro"),r.a.createElement("form",{onSubmit:function(t){if(t.preventDefault(),f!==b)return G.a.fire("Error","Las contrase\xf1as debe de ser iguales","error");var a,n,r;e((a=v,n=f,r=p,function(){var e=Object(J.a)(H.a.mark((function e(t){var c,o;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B("auth/new",{email:a,password:n,name:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(te({uid:o.uid,name:o.name}))):G.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:p,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:v,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:f,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:b,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"}))))))}),ce=a(51),oe=function(){var e=Object(l.c)((function(e){return e.auth})).name,t=Object(l.b)();return r.a.createElement("div",{className:"navbar navbar-dark bg-dark mb-4"},r.a.createElement("span",{className:"navbar-brand"},e),r.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){t(ae())}},r.a.createElement("i",{className:"fas fa-sign-out-alt"}),r.a.createElement("span",null," Salir")))},le={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},se=function(e){var t=e.event,a=t.title,n=t.user.name;return r.a.createElement("div",null,r.a.createElement("span",null,a," "),r.a.createElement("strong",null,"- ",n))},ue=a(48),ie=a.n(ue),me=a(49),de=a.n(me),pe=function(){return{type:d}},ve={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};ie.a.setAppElement("#root");var fe=z()().minutes(0).seconds(0).add(1,"hours"),be=fe.clone().add(1,"hours"),Ee={title:"",notes:"",start:fe.toDate(),end:be.toDate()},he=function(){var e=Object(l.c)((function(e){return e.ui})).modalOpen,t=Object(l.c)((function(e){return e.calendar})).activeEvent,a=Object(l.b)(),c=Object(n.useState)(!0),o=Object(L.a)(c,2),s=o[0],u=o[1],i=Object(n.useState)(Ee),d=Object(L.a)(i,2),v=d[0],f=d[1],b=v.notes,E=v.title,h=v.start,g=v.end;Object(n.useEffect)((function(){f(t||Ee)}),[t,f]);var O=function(e){var t=e.target;f(Object(m.a)(Object(m.a)({},v),{},Object(F.a)({},t.name,t.value)))},j=function(){a({type:p}),a(W()),f(Ee)};return r.a.createElement("div",null,r.a.createElement(ie.a,{isOpen:e,onRequestClose:j,style:ve,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo"},r.a.createElement("h1",null," ",t?"Editar evento":"Nuevo evento"," "),r.a.createElement("hr",null),r.a.createElement("form",{className:"container",onSubmit:function(e){e.preventDefault();var n,r=z()(h),c=z()(g);return r.isSameOrAfter(c)?G.a.fire("Error","La fecha fin debe de ser mayor a la fecha de inicio.","error"):E.trim().length<2?u(!1):(a(t?(n=v,function(){var e=Object(J.a)(H.a.mark((function e(t){var a,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X("events/".concat(n.id),n,"PUT");case 3:return a=e.sent,e.next=6,a.json();case 6:(r=e.sent).ok?t(Y(n)):G.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(J.a)(H.a.mark((function t(a,n){var r,c,o,l,s;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,X("events",e,"POST");case 4:return l=t.sent,t.next=7,l.json();case 7:(s=t.sent).ok&&(e.id=s.evento.id,e.user={_id:c,name:o},a(Q(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,a){return t.apply(this,arguments)}}()}(v)),u(!0),void j())}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora inicio"),r.a.createElement(de.a,{onChange:function(e){f(Object(m.a)(Object(m.a)({},v),{},{start:e}))},value:h,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora fin"),r.a.createElement(de.a,{onChange:function(e){f(Object(m.a)(Object(m.a)({},v),{},{end:e}))},value:g,className:"form-control",minDate:h})),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Titulo y notas"),r.a.createElement("input",{type:"text",className:"form-control ".concat(!s&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:E,onChange:O}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Una descripci\xf3n corta")),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:b,onChange:O}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Informaci\xf3n adicional")),r.a.createElement("button",{type:"submit",className:"btn btn-outline-primary btn-block"},r.a.createElement("i",{className:"far fa-save"}),r.a.createElement("span",null," Guardar")))))},ge=(a(116),a(117),function(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-primary fab",onClick:function(){e(W()),e(pe())}},r.a.createElement("i",{className:"fas fa-plus"}))}),Oe=function(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(J.a)(H.a.mark((function e(t,a){var n,r,c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().calendar.activeEvent.id,e.prev=1,e.next=4,X("events/".concat(n),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(Z()):G.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement("i",{className:"fas fa-trash"}),r.a.createElement("span",null," Borrar evento "))};z.a.locale("es");var je=Object(ce.b)(z.a),ye=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.calendar})),a=t.events,c=t.activeEvent,o=Object(l.c)((function(e){return e.auth})).uid,s=Object(n.useState)(localStorage.getItem("lastView")||"month"),u=Object(L.a)(s,2),i=u[0],m=u[1];Object(n.useEffect)((function(){e(function(){var e=Object(J.a)(H.a.mark((function e(t){var a,n,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X("events");case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,r=K(n.eventos),t($(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return r.a.createElement("div",{className:"calendar-screen"},r.a.createElement(oe,null),r.a.createElement(ce.a,{localizer:je,events:a,startAccessor:"start",endAccessor:"end",messages:le,eventPropGetter:function(e,t,a,n){return{style:{backgroundColor:o===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:"0.8",display:"block",color:"white"}}},onDoubleClickEvent:function(t){e(pe())},onSelectEvent:function(t){e({type:v,payload:t})},onView:function(e){m(e),localStorage.setItem("lastView",e)},onSelectSlot:function(t){e(W())},selectable:!0,view:i,components:{event:se}}),r.a.createElement(ge,null),c&&r.a.createElement(Oe,null),r.a.createElement(he,null))},Ne=(a(60),function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})),a=t.checking,c=t.uid;return Object(n.useEffect)((function(){e(function(){var e=Object(J.a)(H.a.mark((function e(t){var a,n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X("auth/renew");case 2:return a=e.sent,e.next=5,a.json();case 5:(n=e.sent).ok?(localStorage.setItem("token",n.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(te({uid:n.uid,name:n.name}))):t(ee());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),a?r.a.createElement("div",{className:"sk-chase-main"},r.a.createElement("div",{className:"sk-chase"},r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}))):r.a.createElement(D.a,null,r.a.createElement("div",null,r.a.createElement(P.d,null,r.a.createElement(A,{exact:!0,path:"/login",component:re,isAuthenticated:!!c}),r.a.createElement(_,{exact:!0,path:"/",component:ye,isAuthenticated:!!c}),r.a.createElement(P.a,{to:"/"}))))}),ke=function(){return r.a.createElement(l.a,{store:T},r.a.createElement(Ne,null))};o.a.render(r.a.createElement(ke,null),document.getElementById("root"))},60:function(e,t,a){},66:function(e,t,a){e.exports=a(119)},81:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.760b28f4.chunk.js.map