(this["webpackJsonpreact-otp-box-example"]=this["webpackJsonpreact-otp-box-example"]||[]).push([[0],{31:function(e,t,n){e.exports=n(76)},32:function(e,t,n){},41:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),l=n(18),c=n.n(l),o=n(80),i=n(27),u=n(79),s=n(30),p=n(29),d=n(19);function m(){var e=Object(d.a)(["\n  border: none;\n  outline: none;\n  background: #dedede;\n  border-radius: 10px;\n  color: black;\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  &::-webkit-inner-spin-button,\n  &::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    margin: 0;\n  }\n  -moz-appearance: textfield;\n"]);return m=function(){return e},e}var f,g=n(20).a.input(f||(f=m())),y=Object(a.memo)(g),x=Object(a.memo)((function(e){var t=e.autoFocus,n=void 0!==t&&t,l=e.n,c=void 0===l?3:l,o=e.gap,i=void 0===o?"10px":o,u=e.onChange,d=e.inputStyle,m=Object(a.useState)(Array(c).fill("")),f=Object(p.a)(m,2),g=f[0],x=f[1],b=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=function(e){var t=Object(s.a)(g);if(null!==b.current){var n=b.current.children;if(isNaN(e.key)){if("Backspace"===e.key&&0!==t.length)for(var a=0;a<n.length;a++){var r=n[a];if(""===t[a]){0!==a&&n[a-1].focus();break}if(document.activeElement===r){t[a]="",x(t);break}}}else for(var l=0;l<n.length;l++)if(document.activeElement===n[l]){t[l]=e.key,x(t),l===g.length-1?n[l].focus():n[l+1].focus();break}}};return console.log(g),g.join("").length===c&&u(g.join("")),document.addEventListener("keyup",e),function(){document.removeEventListener("keyup",e)}}),[g]),r.a.createElement("div",{ref:b,style:{width:"100%",display:"flex",justifyContent:"center"}},g.map((function(e,t){return 0===t?r.a.createElement(y,{type:"number",key:t,autoFocus:n,maxLength:1,value:g[t]||"",style:d?d(t):{}}):r.a.createElement(a.Fragment,null,r.a.createElement("div",{style:{width:i}}),r.a.createElement(y,{type:"number",key:t,maxLength:1,value:g[t]||"",style:d?d(t):{}}))})))}));n(41);o.a.registerLanguage("jsx",i.a);var b=function(e){var t=e.codeString;return r.a.createElement(o.a,{customStyle:{overflow:"visible",width:"50%"},language:"jsx",style:u.a},t)},v=function(){return r.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"}},r.a.createElement("div",{style:{width:"80%",margin:"20px 0px"}},r.a.createElement("h1",null," Autofocus"),r.a.createElement("div",{style:{width:"100%",display:"flex",alignItems:"center"}},r.a.createElement(b,{codeString:"<ReactOtp autoFocus />"}),r.a.createElement(x,{autoFocus:!0})),r.a.createElement("h1",null," Number of boxes"),r.a.createElement("div",{style:{width:"100%",display:"flex",alignItems:"center"}},r.a.createElement(b,{codeString:"<ReactOtp n={6} />"}),r.a.createElement(x,{n:6})),r.a.createElement("h1",null,"Gap"),r.a.createElement("div",{style:{width:"100%",display:"flex",alignItems:"center"}},r.a.createElement(b,{codeString:'<ReactOtp gap="30px" />'}),r.a.createElement(x,{gap:"30px"})),r.a.createElement("h1",null,"Custom Box Style"),r.a.createElement("div",{style:{width:"100%",display:"flex",alignItems:"center"}},r.a.createElement(b,{codeString:'\n      <ReactOtp\n        n={6}\n        onChange={(e) => console.log(e)}\n        inputStyle={(n) => {\n          if (n % 2)\n            return { border: "1px solid red" }\n          else\n            return { border: "1px solid green" }\n        }}\n        gap="30px"\n      />'}),r.a.createElement(x,{n:6,onChange:function(e){return console.log(e)},inputStyle:function(e){return e%2?{border:"1px solid red"}:{border:"1px solid green"}},gap:"30px"}))))};c.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.99065b83.chunk.js.map