(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r),m=(a(16),a(1)),u=(a(17),function(){return l.a.createElement("div",null,"this is about page.")}),s=function(){return l.a.createElement("div",null,"This is contact page")},i=a(4),E=(a(18),function(){return l.a.createElement("div",{className:"Navbar"},l.a.createElement("ul",{className:"Navitem"},l.a.createElement("li",null,l.a.createElement(i.b,{to:"/home",className:"navtype"},"HOME")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/about",className:"navtype"},"ABOUT")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/contact",className:"navtype"},"CONTACT")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/service",className:"navtype"},"SERVICE"))))}),o=function(){return l.a.createElement("div",null,"this is service page.")},p=a(7),d=a.n(p),h=a(5),v=a(10),f=a(3);a(20);var b=function(e){var t=e.data,a="http://openweathermap.org/img/wn/"+"".concat(404!==t.cod?t.weather[0].icon:null)+".png";return l.a.createElement("div",{className:"displayweather"},404!==t.cod?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"maincard"},l.a.createElement("span",{className:"cardtitle"},t.name," , ",t.sys.country,". Weather"),l.a.createElement("span",{className:"cardsubtitle"},"As of ",(new Date).toLocaleTimeString()),l.a.createElement("h1",null," ",Math.floor(t.main.temp-273.15),l.a.createElement("sup",null,"o")),l.a.createElement("span",{className:"weather-main"},t.weather[0].main),l.a.createElement("img",{className:"weather-icon",src:a,alt:"",srcset:""}),l.a.createElement("span",{className:"weather-description"}," ",t.weather[0].description)),l.a.createElement("div",{className:"weatherdetails"},l.a.createElement("div",{className:"section1"},l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("h4",null,"High/Low")),l.a.createElement("td",null,l.a.createElement("span",null,Math.floor(t.main.temp_max-273.15),"/",Math.floor(t.main.temp_min-273.15)))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("h4",null,"Humidity")),l.a.createElement("td",null,l.a.createElement("span",null,t.main.humidity," %"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("h4",null,"Pressure")),l.a.createElement("td",null,l.a.createElement("span",null,t.main.pressure," hPa"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("h4",null,"Visibility")),l.a.createElement("td",null,l.a.createElement("span",null,t.visibility/1e3," Km"))))),l.a.createElement("div",{className:"section2"},l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("h4",null,"Wind")),l.a.createElement("td",null,l.a.createElement("span",null,Math.floor(18*t.wind.speed/5)," km/hr"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("h4",null,"Wind Direction")),l.a.createElement("td",null,l.a.createElement("span",null,t.wind.deg,l.a.createElement("sup",null,"o")," deg"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("h4",null,"Sunrise")),l.a.createElement("td",null,l.a.createElement("span",null,new Date(1e3*t.sys.sunrise).toLocaleTimeString()))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("h4",null,"Sunset")),l.a.createElement("td",null,l.a.createElement("span",null,new Date(1e3*t.sys.sunset).toLocaleTimeString()))))))):l.a.createElement("div",{className:"maincard"},l.a.createElement("h2",null,t.message)))};a(21);var y=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({city:"",country:""}),m=Object(f.a)(c,2),u=m[0],s=m[1],i="3cc1a0f9be86aa0f398779013715bce6";function E(){return(E=Object(v.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==u.city){e.next=5;break}alert("Add values"),e.next=9;break;case 5:return e.next=7,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(u.city,",").concat(u.country,"&APPID=").concat(i)).then((function(e){return e.json()})).then((function(e){return e}));case 7:a=e.sent,r({data:a});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var o=function(e){var t=e.target.name,a=e.target.value;"city"===t&&s(Object(h.a)(Object(h.a)({},u),{},{city:a})),"country"===t&&s(Object(h.a)(Object(h.a)({},u),{},{country:a}))};return l.a.createElement("div",{className:"weather"},l.a.createElement("span",{className:"title"},"Weather App"),l.a.createElement("br",null),l.a.createElement("form",null,l.a.createElement("input",{type:"text",placeholder:"city",name:"city",onChange:function(e){return o(e)}}),"\xa0 \xa0 \xa0\xa0",l.a.createElement("input",{type:"text",placeholder:"Country",name:"country",onChange:function(e){return o(e)}}),l.a.createElement("button",{className:"getweather",onClick:function(e){return function(e){return E.apply(this,arguments)}(e)}},"Submit")),void 0!==a.data?l.a.createElement("div",null,l.a.createElement(b,{data:a.data})):null)};var w=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E,null),l.a.createElement(m.c,{className:"Appcomponents"},l.a.createElement(m.a,{path:"/",element:l.a.createElement(y,null)}),l.a.createElement(m.a,{path:"/home",element:l.a.createElement(y,null)}),l.a.createElement(m.a,{path:"/about",element:l.a.createElement(u,null)}),l.a.createElement(m.a,{path:"/contact",element:l.a.createElement(s,null)}),l.a.createElement(m.a,{path:"/service",element:l.a.createElement(o,null)})))};c.a.render(l.a.createElement(i.a,null,l.a.createElement(w,null)),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.675a07cd.chunk.js.map