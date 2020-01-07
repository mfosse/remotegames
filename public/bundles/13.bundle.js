(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{248:function(e,t,a){var o;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)&&o.length){var n=r.apply(null,o);n&&e.push(n)}else if("object"===i)for(var s in o)a.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},320:function(e,t,a){"use strict";var o=a(2),r=a(9),i=a(0),n=a.n(i),s=(a(10),a(245)),c=a(111),l=a(247),p={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},m=n.a.forwardRef((function(e,t){var a=e.align,i=void 0===a?"inherit":a,c=e.classes,m=e.className,d=e.color,h=void 0===d?"initial":d,u=e.component,g=e.display,b=void 0===g?"initial":g,y=e.gutterBottom,f=void 0!==y&&y,v=e.noWrap,w=void 0!==v&&v,j=e.paragraph,O=void 0!==j&&j,E=e.variant,N=void 0===E?"body1":E,x=e.variantMapping,k=void 0===x?p:x,C=Object(r.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),B=u||(O?"p":k[N]||p[N])||"span";return n.a.createElement(B,Object(o.a)({className:Object(s.a)(c.root,m,"inherit"!==N&&c[N],"initial"!==h&&c["color".concat(Object(l.a)(h))],w&&c.noWrap,f&&c.gutterBottom,O&&c.paragraph,"inherit"!==i&&c["align".concat(Object(l.a)(i))],"initial"!==b&&c["display".concat(Object(l.a)(b))]),ref:t},C))}));t.a=Object(c.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(m)},417:function(e,t,a){"use strict";var o=a(2),r=a(9),i=a(0),n=a.n(i),s=(a(10),a(245)),c=a(494),l=a(111),p=n.a.forwardRef((function(e,t){var a=e.classes,i=e.className,l=e.raised,p=void 0!==l&&l,m=Object(r.a)(e,["classes","className","raised"]);return n.a.createElement(c.a,Object(o.a)({className:Object(s.a)(a.root,i),elevation:p?8:1,ref:t},m))}));t.a=Object(l.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(p)},418:function(e,t,a){"use strict";var o=a(2),r=a(9),i=a(0),n=a.n(i),s=(a(10),a(245)),c=a(111),l=a(525),p=n.a.forwardRef((function(e,t){var a=e.children,i=e.classes,c=e.className,p=e.focusVisibleClassName,m=Object(r.a)(e,["children","classes","className","focusVisibleClassName"]);return n.a.createElement(l.a,Object(o.a)({className:Object(s.a)(i.root,c),focusVisibleClassName:Object(s.a)(p,i.focusVisible),ref:t},m),a,n.a.createElement("span",{className:i.focusHighlight}))}));t.a=Object(c.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(p)},419:function(e,t,a){"use strict";var o=a(2),r=a(9),i=a(0),n=a.n(i),s=(a(10),a(245)),c=a(111),l=["video","audio","picture","iframe","img"],p=n.a.forwardRef((function(e,t){var a=e.children,i=e.classes,c=e.className,p=e.component,m=void 0===p?"div":p,d=e.image,h=e.src,u=e.style,g=Object(r.a)(e,["children","classes","className","component","image","src","style"]),b=-1!==l.indexOf(m),y=!b&&d?Object(o.a)({backgroundImage:'url("'.concat(d,'")')},u):u;return n.a.createElement(m,Object(o.a)({className:Object(s.a)(i.root,c,b&&i.media,-1!=="picture img".indexOf(m)&&i.img),ref:t,style:y,src:b?d||h:void 0},g),a)}));t.a=Object(c.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(p)},420:function(e,t,a){"use strict";var o=a(2),r=a(9),i=a(0),n=a.n(i),s=(a(10),a(245)),c=a(111),l=n.a.forwardRef((function(e,t){var a=e.classes,i=e.className,c=e.component,l=void 0===c?"div":c,p=Object(r.a)(e,["classes","className","component"]);return n.a.createElement(l,Object(o.a)({className:Object(s.a)(a.root,i),ref:t},p))}));t.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)},510:function(e,t,a){"use strict";a.r(t);var o=a(0),r=a.n(o),i=a(111),n=a(494),s=a(509),c=a(417),l=a(418),p=a(420),m=a(419),d=a(320),h=a(70),u=a(246);a(248);class g extends o.PureComponent{constructor(e){super(e)}render(){const{classes:e}=this.props;return r.a.createElement(n.a,{elevation:0,className:e.root},r.a.createElement(n.a,{elevation:3,className:e.main},r.a.createElement(s.a,{variant:"contained",className:e.back,onClick:()=>{this.props.history.push("/")}},"Back"),r.a.createElement("h2",null,"About the project"),r.a.createElement("p",null,"This website is developed and maintained by"," ",r.a.createElement("a",{href:"https://github.com/mfosse"},"Matthew Fosse"),"."),r.a.createElement("p",null,"The whole idea behind the project is that you can use a keyboard or controller to try out games on these consoles from anywhere with just a web browser."),r.a.createElement("div",{className:e.imagesContainer},r.a.createElement(c.a,{className:e.card,elevation:5},r.a.createElement(l.a,null,r.a.createElement(m.a,{className:e.media,image:"/images/about/about5.jpg",title:"Photo 1"}),r.a.createElement(p.a,null,r.a.createElement(d.a,{component:"p"},"The consoles are hosted in Central Florida, and the server is currently located in Virginia.")))),r.a.createElement(c.a,{className:e.card,elevation:5},r.a.createElement(l.a,null,r.a.createElement(m.a,{className:e.media,image:"/images/about/about2.jpg",title:"Photo 2"}),r.a.createElement(p.a,null,r.a.createElement(d.a,{component:"p"},"The whole setup"))))),r.a.createElement("p",null,"The games, consoles, and server costs to run this project are primarily funded through"," ",r.a.createElement("a",{href:"https://twitch.tv/remotegames/subscribe/"},"Twitch subscriptions")," ","and donations. If you like the project consider supporting it with the links below."),r.a.createElement("div",{className:e.donationButtons},r.a.createElement("img",{border:"0",alt:"Donate with Twitch",src:"/images/about/twdonatebutton.png",className:e.image,onClick:()=>{window.location="https://streamlabs.com/remotegames/"}}),r.a.createElement("img",{border:"0",alt:"Join the Discord Server",src:"/images/about/discordbutton.png",className:e.image,onClick:()=>{window.location="https://discord.io/tpns/"}}),r.a.createElement("img",{border:"0",alt:"Donate with Paypal",src:"/images/about/ppdonatebutton.png",className:e.image,onClick:()=>{window.location="https://paypal.me/fossephate/"}})),r.a.createElement("iframe",{className:e.twitch,src:"https://player.twitch.tv/?channel=remotegames&muted=false&autoplay=true",height:"360",width:"640",frameBorder:"0",scrolling:"no",allowFullScreen:!0})))}}t.default=Object(u.a)(Object(i.a)(e=>({root:{display:"flex",justifyContent:"center",padding:"3%",color:e.palette.primary.contrastText,backgroundColor:e.palette.background.default},main:{display:"flex",flexDirection:"column",justifyContent:"center",width:"85%",height:"100%",padding:"3%"},image:{cursor:"pointer",marginLeft:"auto",marginRight:"auto"},back:{marginBottom:"10px",width:"30%",marginLeft:"auto"},card:{width:345},media:{height:300},imagesContainer:{display:"flex",justifyContent:"space-evenly",padding:"10px",flexWrap:"wrap",marginBottom:"10px"},donationButtons:{display:"flex",flexWrap:"wrap"},twitch:{marginLeft:"auto",marginRight:"auto"}})),Object(h.b)(e=>({}),e=>({updateSettings:t=>{e(updateSettings(t))}})))(g)}}]);