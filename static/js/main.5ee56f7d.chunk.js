(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),c=a.n(l),s=(a(13),a(7)),o=a(1),i=a(2),u=a(4),h=a(3),p=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={length:"",special:"",exclude:""},e.handleLengthChange=function(t){e.setState({length:t.target.value,special:e.state.special,exclude:e.state.exclude})},e.handleSpecialChange=function(t){e.setState({length:e.state.length,special:t.target.value,exclude:e.state.exclude})},e.handleExcludeChange=function(t){e.setState({length:e.state.length,special:e.state.special,exclude:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.passGen(e.state.length,e.state.special,e.state.exclude)},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"number",min:"10",max:"1000",placeholder:"16",onChange:this.handleLengthChange,value:this.state.length}),r.a.createElement("label",null,"Password length (10-1000):"),r.a.createElement("input",{type:"text",pattern:"[\\W_]*",placeholder:"!@#$%^*_|",onChange:this.handleSpecialChange,value:this.state.special}),r.a.createElement("label",null,"Special characters to include. Special characters can be any characters that are not digits or letters; enter as string sequence, for example, #!@:"),r.a.createElement("input",{type:"text",onChange:this.handleExcludeChange,value:this.state.exclude}),r.a.createElement("label",null,"Characters to exclude; enter as string sequence, for example, Aa%:"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"btn orange darken-3",type:"submit",value:"Submit"},"Generate ",r.a.createElement("i",{className:"material-icons right"},"send"))))}}]),a}(n.Component),d=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={password:"",error:""},e.shuffle=function(e){for(var t=e.split(""),a=t.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),r=t[a];t[a]=t[n],t[n]=r}return t.join("")},e.copyToClipboard=function(t){e.textArea.select(),document.execCommand("copy")},e.renderPass=function(t){return t?r.a.createElement("textarea",{className:"materialize-textarea",readOnly:!0,ref:function(t){return e.textArea=t},value:t}):null},e.renderError=function(e){return e?r.a.createElement("p",null,e):null},e.passGen=function(t,a,n){var r="",l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890",c="ABCDEFGHIJKLMNOPQRSTUVWXYZ",o="abcdefghijklmnopqrstuvwxyz",i="1234567890";t=parseInt(t),isNaN(t)&&(t=16),a||(a="!@#$%^*_|");var u,h=Object(s.a)(n);try{for(h.s();!(u=h.n()).done;){var p=u.value;l=l.split(p).join(""),c=c.split(p).join(""),o=o.split(p).join(""),i=i.split(p).join(""),a=a.split(p).join("")}}catch(v){h.e(v)}finally{h.f()}r+=a,c&&(r+=c.charAt(e.randrange(0,c.length))),o&&(r+=o.charAt(e.randrange(0,o.length))),i&&(r+=i.charAt(e.randrange(0,i.length)));var d=t-r.length;if(d>=0){for(var m=0;m<d;m++){var g=e.randrange(0,l.length);r+=l.charAt(g)}var f=e.shuffle(r);e.setState({password:f,error:""})}else e.setState({password:"",error:"Length is too short for the requirements. Along with the special characters, the generated password will contain at least one uppercase character, one lowercase character, and one digit."})},e}return Object(i.a)(a,[{key:"randrange",value:function(e,t){var a=t-e,n=Math.ceil(Math.log2(a)/8);if(!n)return e;for(var r=Math.pow(256,n),l=new Uint8Array(n);;){window.crypto.getRandomValues(l);for(var c=0,s=0;s<n;s++)c=(c<<8)+l[s];if(c<r-r%a)return e+c%a}}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"center blue-text"},"Password Generator"),r.a.createElement(p,{passGen:this.passGen}),r.a.createElement("br",null),this.renderPass(this.state.password),document.queryCommandSupported("copy")&&this.state.password&&r.a.createElement("div",null,r.a.createElement("button",{className:"btn ripple orange darken-3",onClick:this.copyToClipboard},"Copy ",r.a.createElement("i",{className:"material-icons right"},"content_copy"))),this.renderError(this.state.error))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.5ee56f7d.chunk.js.map