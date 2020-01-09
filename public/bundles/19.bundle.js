(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{521:function(t,e,a){"use strict";a.r(e);var s=a(0),i=a.n(s),o=a(508),r=a(493),n=a(517),l=a(498),c=a(516),h=a(515),p=a(70),d=a(246);class u extends s.PureComponent{constructor(t){super(t),this.handleClick=this.handleClick.bind(this),this.handleClose=this.handleClose.bind(this),this.enableMouseControls=this.enableMouseControls.bind(this),this.graphicsCanvasRef=i.a.createRef(),this.state={alertOpen:!1}}handleClick(){window.inputHandler.mouse.settings.enabled||this.setState({alertOpen:!0})}handleClose(){this.setState({alertOpen:!1}),window.inputHandler.mouse.toggle(!1)}enableMouseControls(){this.setState({alertOpen:!1}),window.inputHandler.mouse.init(this.graphicsCanvasRef.current),window.inputHandler.mouse.toggle(!0)}render(){const{classes:t}=this.props;let e=null;return"mpeg2"===this.props.streamType?e=i.a.createElement("canvas",{id:"videoCanvas",className:this.props.classes}):"webRTC"===this.props.streamType&&(e=i.a.createElement("video",{id:"videoCanvas",className:this.props.classes})),i.a.createElement(i.a.Fragment,null,e,i.a.createElement("canvas",{id:"graphicsCanvas",className:this.props.classes,ref:this.graphicsCanvasRef,onClick:this.handleClick,style:{position:"absolute",width:"73.2%",height:"100%"},width:"1280",height:"720"}),i.a.createElement(r.a,{open:this.state.alertOpen,onClose:this.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},i.a.createElement(h.a,{id:"alert-dialog-title"},"Activate Mouse Controls?"),i.a.createElement(l.a,null,i.a.createElement(c.a,{id:"alert-dialog-description"},"By default, the mouse will move the right stick, you can remap and change settings for it in the remap menu.")),i.a.createElement(n.a,null,i.a.createElement(o.a,{onClick:this.handleClose,color:"primary"},"No"),i.a.createElement(o.a,{onClick:this.enableMouseControls,variant:"contained",color:"primary",autoFocus:!0},"Yes"))))}}var m=Object(d.a)(Object(p.b)(t=>({streamType:t.stream.info.streamType})))(u),g=a(111),b=a(281),v=a(253),f=a.n(v);class x extends s.PureComponent{constructor(t){super(t),this.getLeftStickTransform=this.getLeftStickTransform.bind(this),this.getRightStickTransform=this.getRightStickTransform.bind(this),this.cstate=new b.a,this.state={}}getLeftStickTransform(){let t=this.cstate.axes[0],e=this.cstate.axes[1];e*=-1;let a=t*Math.sqrt(1-e*e/2)*32,s=e*Math.sqrt(1-t*t/2)*32,i=1,o=document.querySelector("#leftStick");return o&&(i=o.clientWidth/55),a*=i,s*=i,`${a}px, ${s}px`}getRightStickTransform(){let t=this.cstate.axes[2],e=this.cstate.axes[3];e*=-1;let a=t*Math.sqrt(1-e*e/2)*32,s=e*Math.sqrt(1-t*t/2)*32,i=1,o=document.querySelector("#rightStick");return o&&(i=o.clientWidth/55),a*=i,s*=i,`${a}px, ${s}px`}render(){const{classes:t}=this.props;let e,a;return this.cstate.setState(this.props.controllerState),"joycon"===this.props.type?(e=t.highlighted,a=t.abxy):"xbox"===this.props.type&&(e=t.xboxHighlighted,a=t.xboxabxy),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:f()(t.controllerRoot,{[t.leftOverlay]:this.props.overlay})},i.a.createElement("img",{className:f()(t.image,{[t.transparent]:this.props.overlay}),src:`${window.location.origin}/images/leftJoyCon2.png`}),i.a.createElement("div",{id:"leftStick",className:f()(t.leftStick1,{[e]:this.cstate.buttons.lstick})},i.a.createElement("div",{className:t.leftStick2,style:{transform:`translate(${this.getLeftStickTransform()})`}})),i.a.createElement("div",{className:t.dpad},i.a.createElement("div",{className:f()(t.button,"up",{[e]:this.cstate.buttons.up})}),i.a.createElement("div",{className:f()(t.button,"down",{[e]:this.cstate.buttons.down})}),i.a.createElement("div",{className:f()(t.button,"left",{[e]:this.cstate.buttons.left})}),i.a.createElement("div",{className:f()(t.button,"right",{[e]:this.cstate.buttons.right})})),i.a.createElement("div",{className:t.otherButtons},i.a.createElement("div",{className:f()(t.button,t.otherButtons,"minus",{[e]:this.cstate.buttons.minus})}),i.a.createElement("div",{className:f()(t.button,t.otherButtons,"capture",{[e]:this.cstate.buttons.capture})}),i.a.createElement("div",{className:f()(t.button,t.otherButtons,"l",{[e]:this.cstate.buttons.l})},i.a.createElement("div",{className:"click-passthrough"},"xbox"===this.props.type?"LB":"L")),i.a.createElement("div",{className:f()(t.button,t.otherButtons,"zl")},i.a.createElement("div",{className:f()(t.trigger1,{[e]:this.cstate.buttons.zl})},"xbox"===this.props.type?"LT":"ZL"),i.a.createElement("div",{className:t.trigger2,style:{width:100*this.cstate.axes[4]+"%"}})))),this.props.children,i.a.createElement("div",{className:f()(t.controllerRoot,{[t.rightOverlay]:this.props.overlay})},i.a.createElement("img",{className:f()(t.image,{[t.transparent]:this.props.overlay}),src:`${window.location.origin}/images/rightJoyCon2.png`}),i.a.createElement("div",{id:"rightStick",className:f()(t.rightStick1,{[e]:this.cstate.buttons.rstick})},i.a.createElement("div",{className:t.rightStick2,style:{transform:`translate(${this.getRightStickTransform()})`}})),i.a.createElement("div",{className:a},i.a.createElement("div",{className:f()(t.button,"a",{[e]:this.cstate.buttons.a})},"xbox"===this.props.type&&"A"),i.a.createElement("div",{className:f()(t.button,"b",{[e]:this.cstate.buttons.b})},"xbox"===this.props.type&&"B"),i.a.createElement("div",{className:f()(t.button,"x",{[e]:this.cstate.buttons.x})},"xbox"===this.props.type&&"X"),i.a.createElement("div",{className:f()(t.button,"y",{[e]:this.cstate.buttons.y})},"xbox"===this.props.type&&"Y")),i.a.createElement("div",{className:t.otherButtons},i.a.createElement("div",{className:f()(t.button,t.otherButtons,"plus",{[e]:this.cstate.buttons.plus})}),i.a.createElement("div",{className:f()(t.button,t.otherButtons,"home",{[e]:this.cstate.buttons.home})}),i.a.createElement("div",{className:f()(t.button,t.otherButtons,"r",{[e]:this.cstate.buttons.r})},i.a.createElement("div",{className:"click-passthrough"},"xbox"===this.props.type?"RB":"R")),i.a.createElement("div",{className:f()(t.button,t.otherButtons,"zr")},i.a.createElement("div",{className:f()(t.trigger1,{[e]:this.cstate.buttons.zr})},"xbox"===this.props.type?"RT":"ZR"),i.a.createElement("div",{className:t.trigger2,style:{width:100*this.cstate.axes[5]+"%"}})))))}}var C=Object(g.a)(t=>({controllerRoot:{zIndex:100,background:"transparent",position:"relative",width:"13.4%"},leftOverlay:{left:0,width:"18.4%",position:"absolute",opacity:.5},rightOverlay:{right:0,width:"18.4%",position:"absolute",opacity:.5},transparent:{opacity:.4},leftStick1:{position:"absolute",width:"37%",height:"12%",left:"34.9%",top:"19.8%",borderRadius:"50%"},leftStick2:{position:"absolute",background:"#FF3C28",width:"50%",height:"50%",left:"25%",top:"25%",pointerEvents:"none",borderRadius:"50%"},rightStick1:{position:"absolute",width:"37%",height:"12%",left:"28%",top:"47.2%",borderRadius:"50%"},rightStick2:{position:"absolute",background:"#0AB9E6",width:"50%",height:"50%",left:"25%",top:"25%",pointerEvents:"none",borderRadius:"50%"},image:{width:"100%"},dpad:{position:"absolute",background:"transparent",width:"85.25%",height:"27.75%",left:"10%",top:"39%","& .up":{position:"absolute",left:"34.8%",top:"9.5%"},"& .down":{position:"absolute",left:"34.8%",top:"62.5%"},"& .left":{position:"absolute",left:"7%",top:"36%"},"& .right":{position:"absolute",left:"63%",top:"36%"}},abxy:{position:"absolute",background:"transparent",width:"85.25%",height:"27.75%",left:"3%",top:"12%","& .a":{position:"absolute",left:"63.2%",top:"34.5%"},"& .b":{position:"absolute",left:"35.2%",top:"61%"},"& .x":{position:"absolute",left:"35.2%",top:"8%"},"& .y":{position:"absolute",left:"7.2%",top:"34.5%"}},xboxabxy:{position:"absolute",background:"transparent",width:"85.25%",height:"27.75%",left:"3%",top:"12%",fontSize:"large",fontWeight:"bold","& :after":{content:'""',position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",clipPath:"circle(60% at 80% 0%)",backgroundImage:"linear-gradient(45deg, rgba(255,255,255,0.1),rgba(255,255,255,0.3))",borderRadius:"50%"},"& .a":{position:"absolute",left:"63.2%",top:"34.5%",color:"#E53136",backgroundImage:"linear-gradient(45deg, #000, #333)"},"& .b":{position:"absolute",left:"35.2%",top:"61%",color:"#91C85C",backgroundImage:"linear-gradient(45deg, #000, #333)"},"& .x":{position:"absolute",left:"35.2%",top:"8%",color:"#FCE504",backgroundImage:"linear-gradient(45deg, #000, #333)"},"& .y":{position:"absolute",left:"7.2%",top:"34.5%",color:"#0399DC",backgroundImage:"linear-gradient(45deg, #000, #333)"}},button:{background:"rgba(50, 50, 50, 0.2)",width:"32%",height:"32%",border:"2px solid #333",borderRadius:"50%",display:"flex",justifyContent:"space-evenly",flexDirection:"column"},otherButtons:{color:"#FFFFFF",textShadow:"2px 2px 4px #000000",borderRadius:"10px !important","& .minus":{position:"absolute",left:"66%",top:"6%",width:"32%",height:"9%"},"& .capture":{position:"absolute",left:"54%",top:"67.5%",width:"32%",height:"9%"},"& .l":{position:"absolute",left:"1%",top:"6%",width:"60%",height:"6%"},"& .zl":{position:"absolute",left:"1%",top:"0%",width:"60%",height:"6%"},"& .plus":{position:"absolute",left:"1%",top:"6%",width:"32%",height:"9%"},"& .home":{position:"absolute",left:"14%",top:"67.5%",width:"32%",height:"9%"},"& .r":{position:"absolute",left:"40%",top:"6%",width:"60%",height:"6%"},"& .zr":{position:"absolute",left:"40%",top:"0%",width:"60%",height:"6%"}},highlighted:{background:"rgba(80, 187, 80, 0.7)"},trigger1:{height:"50%",borderRadius:"10px",borderBottomLeftRadius:"0",borderBottomRightRadius:"0",zIndex:"100"},trigger2:{height:"50%",background:"rgba(80, 187, 80, 0.7)",borderRadius:"10px",borderTopLeftRadius:"0",borderTopRightRadius:"0"},xboxHighlighted:{background:"rgba(68, 68, 68, 0.7)","&.a,&.b,&.x,&.y":{background:"rgba(68, 68, 68, 1) !important"}}}))(x);class w extends s.PureComponent{constructor(t){super(t)}render(){const{classes:t}=this.props;let e=f()(t.root,{[t.fullscreen]:this.props.largescreen||this.props.fullscreen}),a=this.props.loggedIn&&!this.props.waitlisted,s={display:a?"none":null},o=f()(t.canvas,{[t.fullscreen]:this.props.largescreen||this.props.fullscreen});return a=a?i.a.createElement(m,{classes:o}):null,i.a.createElement("div",{className:e},this.props.controllerView?i.a.createElement(C,{overlay:this.props.mobileMode,controllerState:this.props.controllerStates[0],type:"joycon"},a):a,i.a.createElement("div",{id:"twitchVideo",className:t.twitch,style:s},"You need to login first or this stream is offline."))}}var E=Object(d.a)(Object(g.a)(t=>({root:{display:"flex",flexDirection:"row",justifyContent:"center",position:"relative",textAlign:"center"},canvas:{width:"73.2%",alignSelf:"center"},twitch:{width:"73.2%",height:"100%"},fullscreen:{width:"100% !important",margin:"0",padding:"0",border:"none"}})),Object(p.b)(t=>({loggedIn:t.client.loggedIn,waitlisted:t.client.waitlisted,controllerStates:t.stream.players.controllerStates,controllerView:t.settings.controllerView,fullscreen:t.settings.fullscreen,largescreen:t.settings.largescreen,mobileMode:t.settings.mobileMode})))(w),y=a(6),k=a(494),N=a(437),S=a.n(N),R=a(438),O=a.n(R),T=a(535);class j extends s.PureComponent{constructor(t){super(t),this.handleLocalChange=this.handleLocalChange.bind(this),this.bounce=this.bounce.bind(this),this.state={value:0},this.active=!1,this.bounceTimer=null,this.countDown=0,this.countUp=0}bounce(){this.countDown-=100,this.countUp+=50,this.countUp>=100&&(this.countUp=0,this.props.handleChange(this.state.value)),this.countDown<=0&&(this.active=!1,this.countDown=0,clearInterval(this.bounceTimer),void 0!==this.props.handleAfterChange&&(this.props.handleAfterChange(this.state.value),setTimeout(()=>{this.setState({value:Math.random()})},200)))}handleLocalChange(t,e){this.setState({value:e}),void 0!==this.props.handleChange&&(this.countDown=1e3,this.active||(this.active=!0,this.props.handleChange(e),this.bounceTimer=setInterval(this.bounce,this.props.bounceInterval||100)))}render(){const{classes:t}=this.props;return i.a.createElement(T.a,{classes:{root:this.props.rootClass||t.slider,thumb:this.props.thumbClass,active:this.props.activeClass,rail:this.props.railClass,track:this.props.trackClass},min:this.props.min,max:this.props.max,step:this.props.step,onChange:this.handleLocalChange,value:(this.active?this.state.value:this.props.value)||0})}}var M=Object(g.a)(t=>({slider:{width:"70%"}}))(j);class F extends s.PureComponent{constructor(t){super(t),this.state={}}render(){const{classes:t}=this.props;return i.a.createElement(k.a,{className:t.root,elevation:3},i.a.createElement(S.a,{className:t.svg,onClick:this.props.onMute}),i.a.createElement(M,{rootClass:t.rootClass,thumbClass:t.thumb,activeClass:t.active,railClass:t.rail,trackClass:t.track,min:0,max:100,step:1,handleChange:this.props.handleChange,value:this.props.value,bounceInterval:100,delay:500}),i.a.createElement(O.a,{className:t.svg,onClick:this.props.onMax}))}}var B=Object(g.a)(t=>({root:{display:"flex",justifyContent:"space-evenly",width:"30%",minWidth:"125px",alignItems:"center",paddingLeft:"6px",paddingRight:"6px",backgroundColor:t.palette.primary.main},svg:{color:t.palette.primary.contrastText,alignSelf:"center",cursor:"pointer"},rootClass:{width:"70%"},rail:{backgroundColor:"#FFF"},track:{backgroundColor:"#FFF"},thumb:{backgroundColor:"#FFF","&:hover":{boxShadow:"0px 0px 0px 9px rgba(255, 255, 255, 0.16)"},"&:active":{boxShadow:"0px 0px 0px 18px rgba(255, 255, 255, 0.16)"}},active:{"span&":{boxShadow:"0px 0px 0px 18px rgba(255, 255, 255, 0.16) !important"}}}))(F),L=a(466),I=a(342),P=a(329),V=a(436),D=a.n(V);class z extends s.PureComponent{constructor(t){super(t),this.handleClick=this.handleClick.bind(this),this.handleClose=this.handleClose.bind(this),this.getViewerList=this.getViewerList.bind(this),this.state={anchorEl:null}}handleClick(t){this.setState({anchorEl:t.currentTarget})}handleClose(){this.setState({anchorEl:null})}getViewerList(){let t=[],e=0;for(let a in this.props.accountMap){if(!this.props.accountMap.hasOwnProperty(a))continue;let s=this.props.accountMap[a];e++,t.push(i.a.createElement(I.a,{key:e,uniqueid:s.userid},i.a.createElement(P.a,{variant:"inherit",noWrap:!0},s.username)))}return 0===e&&t.push(i.a.createElement(I.a,{key:0,uniqueid:null},i.a.createElement(P.a,{variant:"inherit",noWrap:!0},"Loading..."))),t}render(){const t=Boolean(this.state.anchorEl);return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{variant:"contained",color:"primary",onClick:this.handleClick},"Viewers",i.a.createElement(D.a,null)),i.a.createElement(L.a,{id:"viewerDropdown",anchorEl:this.state.anchorEl,open:t,onClose:this.handleClose,PaperProps:{style:{maxHeight:216,width:250}}},this.getViewerList()))}}class q extends s.PureComponent{constructor(t){super(t),this.state={}}render(){const{classes:t}=this.props;return i.a.createElement(k.a,{className:t.root,elevation:3},this.props.ping,"ms")}}var $=Object(d.a)(Object(g.a)(t=>({root:{backgroundColor:t.palette.primary.main,color:t.palette.primary.contrastText,padding:"5px"}})),Object(p.b)(t=>({ping:t.stream.time.ping})))(q),A=a(439),H=a.n(A),W=a(72);class J extends s.PureComponent{constructor(t){super(t),this.handleChange=this.handleChange.bind(this),this.state={}}handleChange(t){this.props.setVolume(parseInt(t))}render(){const{classes:t}=this.props;return i.a.createElement(k.a,{id:"laglessBar",className:t.root,elevation:3},i.a.createElement(z,{accountMap:this.props.accountMap}),i.a.createElement(B,{value:this.props.volume,handleChange:this.handleChange,onMute:()=>{this.props.setVolume(0)},onMax:()=>{this.props.setVolume(100)}}),i.a.createElement(o.a,{variant:"contained",color:"primary",onClick:()=>{this.props.history.push("/settings/site")}},"Settings ",i.a.createElement(H.a,null)),i.a.createElement($,null))}}var U=Object(d.a)(y.f,Object(g.a)(t=>({root:{display:"flex",justifyContent:"space-evenly",alignSelf:"center",width:"100%",padding:"4px 0px",marginTop:"4px",backgroundColor:"dark"===t.palette.type?t.palette.primary.dark:t.palette.primary.light}})),Object(p.b)(t=>({volume:t.settings.volume,accountMap:t.stream.accountMap}),t=>({setVolume:e=>{t(Object(W.a)({volume:e}))}})))(J),Y=a(249);class Z extends s.PureComponent{constructor(t){super(t)}render(){const{classes:t}=this.props;let e=f()(t.root,{[t.hideChat]:this.props.hideChat||this.props.fullscreen,[t.fullscreen]:this.props.fullscreen});return i.a.createElement(k.a,{id:"picture",elevation:3,className:e},i.a.createElement(E,null),i.a.createElement(U,null))}}e.default=Object(d.a)(Object(g.a)(t=>({root:{gridArea:"picture",display:"flex",flexDirection:"column",width:"100%",padding:"5px",margin:0,overflow:"hidden"},[Y.a.tablet]:{root:{}},hideChat:{gridColumn:"1/3"},fullscreen:{gridRow:"1",gridColumn:"1/3",padding:"0px"}})),Object(p.b)(t=>({hideChat:t.settings.hideChat,fullscreen:t.settings.fullscreen})))(Z)}}]);