(this.webpackJsonpairqualitymonit=this.webpackJsonpairqualitymonit||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){},20:function(t,e,c){"use strict";c.r(e);var n=c(1),i=c.n(n),a=c(4),r=c.n(a),s=(c(13),c.p,c(14),c(5)),d=c(8),j=c(6),o=c(7),u=c.n(o),b=c(0),l=new j.w3cwebsocket("wss://city-ws.herokuapp.com/"),h={Goa:{city:"Goa",aqi:238.31,updatedAt:Date.now()}},f=function(){var t=Object(n.useState)({}),e=Object(d.a)(t,2),c=e[0],i=e[1];Object(n.useEffect)((function(){l.onmessage=function(t){var e,c=JSON.parse(t.data),n=Object(s.a)(c);try{for(n.s();!(e=n.n()).done;){var a=e.value;h[a.city]&&h[a.city].aqi!==a.aqi?(h[a.city].aqi=a.aqi,h[a.city].updatedAt=Date.now()):h[a.city]?h[a.city].aqi=a.aqi:(h[a.city]=a,h[a.city].updatedAt=Date.now())}}catch(r){n.e(r)}finally{n.f()}i(h)}}),[c]);var a=function(t){var e="";return t>0&&t<51?e="#55a84f":t>=51&&t<101?e="#a3c853":t>=101&&t<201?e="#fff833":t>=201&&t<301?e="#f29c33":t>=301&&t<401?e="#e93f33":t>=401&&t<500&&(e="#af2d24"),e};return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("table",{children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"City"}),Object(b.jsx)("th",{children:"Current AQI"}),Object(b.jsx)("th",{children:"Last Updated"})]})}),Object(b.jsx)("tbody",{children:Object.keys(h).map((function(t,e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:h[t].city}),Object(b.jsx)("td",{style:{color:"#000",background:a(h[t].aqi.toFixed(2))},children:h[t].aqi.toFixed(2)}),Object(b.jsx)("td",{children:u()(h[t].updatedAt).fromNow()})]},t+e)}))})]})})})};var O=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("header",{className:"App-header",children:Object(b.jsx)(f,{})})})},x=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,21)).then((function(e){var c=e.getCLS,n=e.getFID,i=e.getFCP,a=e.getLCP,r=e.getTTFB;c(t),n(t),i(t),a(t),r(t)}))};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),x()}},[[20,1,2]]]);
//# sourceMappingURL=main.1e0fa0f5.chunk.js.map