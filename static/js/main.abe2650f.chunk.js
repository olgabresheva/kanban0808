(this.webpackJsonpkanban0808=this.webpackJsonpkanban0808||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),s=(a(16),a(10)),i=a(2);a(3);var u=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)(0),u=Object(i.a)(s,2),l=u[0],m=u[1];return r.a.createElement("div",{className:"TaskCreateForm"},r.a.createElement("input",{type:"text",value:o,onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{type:"number",value:l,onChange:function(e){return m(e.target.value)}}),r.a.createElement("button",{onClick:function(){e.onTaskCreate(o,l),c("")}},"Add Task"))};var l=function(e){return r.a.createElement("span",{className:"Task"},e.task.title,"P:",e.task.priority)};var m=function(e){return r.a.createElement("span",{className:"col-sm"},e.status,e.tasks.filter((function(t){return t.status===e.status})).map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(l,{task:e}))})))},v=a(5),d=(a(19),[{id:Object(v.v4)(),title:"Task-1",priority:2,status:"todo"},{id:Object(v.v4)(),title:"Task-2",priority:3,status:"review"}]);var p=function(){var e=Object(n.useState)(d),t=Object(i.a)(e,2),a=t[0],o=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(u,{onTaskCreate:function(e,t){var n=Object(s.a)(a);n.push({id:Object(v.v4)(),title:e,priority:t,status:"todo"}),o(n)}}),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},["todo","in progress","review","done"].map((function(e){return r.a.createElement(m,{status:e,tasks:a})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.abe2650f.chunk.js.map