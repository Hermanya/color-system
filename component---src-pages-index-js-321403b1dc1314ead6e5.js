(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,n){"use strict";n.r(t);n(161);var a=n(147),r=n.n(a),o=(n(79),n(56),n(167),n(32),n(72)),l=n.n(o),c=n(145),i=n(0),m=n.n(i),s=n(146),u=function(e){var t=e.children,n=e.title,a=e.titleProps,r=void 0===a?{}:a,o=l()(e,["children","title","titleProps"]);return m.a.createElement(s.Card,Object.assign({py:3,px:4,m:2,bg:"gray.9",borderRadius:8},o),m.a.createElement(s.Text,Object.assign({letterSpacing:"tracked",color:"gray.2",mb:2},r),n),m.a.createElement(s.Flex,{flexDirection:"column"},t))};function f(){var e=r()([":hover{cursor:pointer;background:",";}"]);return f=function(){return e},e}var g=function(){return m.a.createElement(d,{title:"WARNING",titleProps:{textAlign:"center"},bg:"yellow.9",color:"gray.0"},m.a.createElement(s.Box,{bg:"gray.2",color:"gray.9",p:2,mt:2},m.a.createElement(s.Text,{fontFamily:"mono",textAlign:"center"},"Expected outage"),m.a.createElement(s.Text,{fontFamily:"mono",textAlign:"center"},"in US-EAST-1")),m.a.createElement(s.Flex,{justifyContent:"flex-end",alignItems:"center"},m.a.createElement(h,{bg:"yellow.4",fontWeight:"normal",fontSize:0,my:2},"OK")))},d=Object(c.default)(u).withConfig({displayName:"WarningIndicator___StyledIndicator",componentId:"sc-1md0n9z-0"})(["position:relative;overflow:hidden;"]),h=Object(c.default)(s.Button)(f(),function(e){return e.theme.colors.yellow[5]}),E=function(){return m.a.createElement(u,{bg:"indigo.3",color:"gray.10",title:"RIGHT NOW",titleProps:{textAlign:"center",color:"indigo.10"}},m.a.createElement(s.Text,{fontFamily:"mono",fontSize:6,textAlign:"center"},"90"),m.a.createElement(s.Text,{fontSize:0,textAlign:"center"},"active users on site"))},b=n(150);function y(){var e=r()(["display:inline-flex;align-items:flex-end;"]);return y=function(){return e},e}var x=function(){return m.a.createElement(p,{title:"REVENUE TODAY"},m.a.createElement(v,{bg:"green.4",color:"gray.10",fontSize:3,px:3,py:2,mb:2},m.a.createElement(s.Text,{fontFamily:"mono"},"USD 98"),m.a.createElement(s.Text,{fontFamily:"mono",fontSize:0},".50")),m.a.createElement(s.Flex,null,m.a.createElement(s.Text,{color:"red.3",fontSize:1},m.a.createElement(b.TrendingDown,{size:"1em"})," 5%"),m.a.createElement(s.Text,{color:"gray.4",fontSize:1,ml:"0.5em"},"vs average")))},p=Object(c.default)(u).withConfig({displayName:"RevenueIndicator___StyledIndicator",componentId:"yx6077-0"})(["position:relative;overflow:hidden;"]),v=Object(c.default)(s.Box)(y()),S=function(){return m.a.createElement(u,{title:"SOCIAL"},m.a.createElement(s.Flex,{alignItems:"center",mb:2},m.a.createElement(s.Box,{color:"fuschia.8"},m.a.createElement(b.Heart,{size:"2em",fill:"currentColor"})),m.a.createElement(s.Box,{ml:"0.5em"},m.a.createElement(s.Text,{color:"gray.1",fontSize:3},"204"),m.a.createElement(s.Text,{color:"gray.4",fontSize:0},"likes today"))),m.a.createElement(s.Flex,{alignItems:"center"},m.a.createElement(s.Box,{color:"fuschia.4"},m.a.createElement(b.UserPlus,{size:"0.8em"})),m.a.createElement(s.Text,{color:"gray.1",fontSize:1,ml:"0.5em"},"16"),m.a.createElement(s.Text,{color:"gray.4",fontSize:1,ml:"0.25em"},"followers")))},C=(n(448),n(449));function w(){var e=r()(["",""]);return w=function(){return e},e}var O=Object(c.keyframes)(["",""],C.flash),T=function(e){var t=e.icon,n=e.bg,a=e.children,r=l()(e,["icon","bg","children"]);return m.a.createElement(s.Flex,Object.assign({alignItems:"center",color:"gray.4"},r),t,m.a.createElement(s.Text,{color:"gray.1",fontSize:1,mx:"0.5em"},a),m.a.createElement(z,{bg:n,ml:"auto",_css:n.startsWith("orange")&&Object(c.css)(["animation:"," 5s infinite;"],O)}))},k=function(){return m.a.createElement(u,{title:"HEALTH STATUS"},m.a.createElement(s.Flex,{flexDirection:"column"},m.a.createElement(T,{icon:m.a.createElement(b.Server,{size:"0.8em"}),bg:"red.5"},"Vendor API"),m.a.createElement(T,{icon:m.a.createElement(b.Database,{size:"0.8em"}),bg:"orange.5"},"Database"),m.a.createElement(T,{icon:m.a.createElement(b.Server,{size:"0.8em"}),bg:"green.5"},"Server 1"),m.a.createElement(T,{icon:m.a.createElement(b.Server,{size:"0.8em"}),bg:"blue.5"},"Server 2")))},j=Object(c.default)(s.Box).withConfig({displayName:"StatusIndicator___StyledBox",componentId:"wgufym-0"})(["width:32px;height:8px;border-radius:8px;"]),z=Object(c.default)(function(e){return m.a.createElement(j,e)})(w(),function(e){return e._css}),F=n(148),I=n(527),A=n.n(I),B=n(528),M=n.n(B),D=n(529),_=n.n(D);function N(){var e=r()(["opacity:0.5;"]);return N=function(){return e},e}function P(){var e=r()(["writing-mode:vertical-lr;"]);return P=function(){return e},e}function R(){var e=r()(["\nbody, html {\n  padding: 0; margin: 0;\n}\n"]);return R=function(){return e},e}var L=function(e){var t=e.colors,n=e.title,a=l()(e,["colors","title"]);return m.a.createElement(s.Flex,Object.assign({},a,{title:n,justifyContent:"flex-end",alignItems:"center"}),m.a.createElement(q,{pt:3},n),t.map(function(e,t){return m.a.createElement(s.Box,{key:e+String(t),bg:e,p:3})}))},H=function(e){var t=e.colors,n=l()(e,["colors"]);return m.a.createElement(s.Flex,Object.assign({flexDirection:"row"},n),Object.keys(t).map(function(e){return m.a.createElement(L,{key:e,title:e,colors:t[e],flexDirection:"column-reverse"})}))},W=function(e){var t=e.label,n=e.checked,a=e.onChange,r=l()(e,["label","checked","onChange"]);return m.a.createElement(s.Flex,Object.assign({as:"label",alignItems:"center",mb:2},r),m.a.createElement("input",{type:"checkbox",checked:n,onChange:a}),m.a.createElement(s.Text,{ml:2},t))},U=function(e){var t=e.label,n=e.checked,a=e.onChange,r=l()(e,["label","checked","onChange"]);return m.a.createElement(s.Flex,Object.assign({as:"label",alignItems:"center",mb:2},r),m.a.createElement("input",{type:"radio",checked:n,onChange:a}),m.a.createElement(s.Text,{ml:2},t))},G=function(e){var t=e.label,n=e.min,a=e.max,r=e.value,o=e.onChange,c=l()(e,["label","min","max","value","onChange"]);return m.a.createElement(s.Flex,Object.assign({as:"label",flexDirection:"column",mb:2},c),m.a.createElement("input",{type:"range",min:n,max:a,value:r,onChange:o}),m.a.createElement(s.Text,null,t))},J=Object(c.default)(s.Box).withConfig({displayName:"pages__Root",componentId:"sc-1icwiw1-0"})(["font-family:system-ui,sans-serif;line-height:1.5;min-height:100vh;filter:",";"],function(e){return e.grayscale?"grayscale()":""}),V=Object(c.createGlobalStyle)(R()),q=(t.default=function(){var e,t=Object(i.useState)(28),n=t[0],a=t[1],r=Object(i.useState)(!1),o=r[0],l=r[1],u=Object(i.useState)(!1),f=u[0],d=u[1],h=Object(i.useState)(!1),b=h[0],y=h[1],p=_()("(prefers-color-scheme: light)"),v=_()("(prefers-color-scheme: dark)"),C=v||p,w={fonts:{mono:'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace'},space:[0,4,8,16,32,64,128,256,512],letterSpacings:{normal:"normal",tracked:"0.1em",tight:"-0.05em",mega:"0.25em"},colors:function(e){var t=e.hueOffset,n=e.invertedLightness,a=e.highContrastMode,r=e.highContrastLightnessScale,o=void 0===r?[0,1,2,3,4,5,6,7,8,9,10]:r,l=e.lowContrastLightnessScale,c=void 0===l?o.map(function(e){return.8*e+1.5}):l,i=e.hues,m=void 0===i?[0,1,2,3,4,5,6,7,8,9,10].map(function(e){return 30*e+t}):i,s=(a?o:c).map(function(e){return 10*e});return n&&s.reverse(),m.reduce(function(e,t){return e[M()(t,.75,.5)]=s.map(function(e){return A.a.hcl(t,85-20*e/100,e).hex()}),e},{gray:s.map(function(e){return A.a.hcl(0,0,e).hex()})})}({hueOffset:n,invertedLightness:void 0===f?v:f,highContrastMode:b})};return m.a.createElement(c.ThemeProvider,{theme:w},m.a.createElement(J,{bg:"gray.10",color:"gray.0",grayscale:o,p:[3,5]},m.a.createElement(V,null),m.a.createElement(F.a,{title:"Color scales"}),m.a.createElement("h1",null,"Color system"),m.a.createElement(s.Flex,{justifyContent:"center",flexDirection:["column","column","row"],m:-3,width:1},m.a.createElement(s.Box,{m:3,width:[1,.5,.25]},m.a.createElement(s.Text,{as:"h2",fontSize:2,mb:4},"Controls"),m.a.createElement(G,{label:"Hue offset",value:n,min:10,max:30,mb:4,onChange:function(e){return a(Number(e.target.value))}}),m.a.createElement(W,{label:"Grayscale",checked:o,mb:4,onChange:function(){return l(!o)}}),m.a.createElement(U,{label:"Regular lightness",checked:!1===f,onChange:function(){return d(!1)}}),C&&m.a.createElement(U,{label:"OS lightness mode",checked:void 0===f,onChange:function(){return d(void 0)}}),m.a.createElement(U,{label:"Inverted lightness",checked:f,mb:4,onChange:function(){return d(!0)}}),m.a.createElement(W,{label:"High contrast",checked:b,onChange:function(){return y(!b)}})),m.a.createElement(s.Box,{m:3},m.a.createElement(s.Text,{as:"h2",fontSize:2,mb:2},"Colors"),m.a.createElement(H,{colors:w.colors,mb:3})),m.a.createElement(s.Box,{m:3},m.a.createElement(s.Text,{as:"h2",fontSize:2,mb:2},"Demo"),m.a.createElement(s.Flex,{flexWrap:"wrap",m:-2},m.a.createElement(g,null),m.a.createElement(E,null),m.a.createElement(x,null),m.a.createElement(S,null),m.a.createElement(k,null)))),m.a.createElement(s.Box,null,m.a.createElement(s.Text,{as:"h2",fontSize:2,mb:2},"Code"),m.a.createElement(s.Flex,{flexDirection:"column"},m.a.createElement(K,{as:"code",mb:2,fontFamily:"mono",fontSize:1},"yarn add use-color-system"),m.a.createElement(s.Text,{as:"code",mb:2,fontFamily:"mono",fontSize:1},"import useColorSystem from 'use-color-system'"),m.a.createElement(s.Text,{as:"pre",mt:0,fontFamily:"mono",fontSize:1},"const colors = useColorSystem({\n  hueOffset: "+(e={hueOffset:n,darkMode:f,highContrastMode:b}).hueOffset+", // pretty random number 0-30\n  invertedLightness: "+e.darkMode+", // works for automatic Dark Mode\n  highContrastMode: "+e.highContrastMode+" // good for accessibility\n});\nstyledSystemTheme.colors = colors;\n")))))},Object(c.default)(s.Box)(P())),K=Object(c.default)(s.Text)(N())},148:function(e,t,n){"use strict";var a=n(149),r=n(0),o=n.n(r),l=n(4),c=n.n(l),i=n(151),m=n.n(i);function s(e){var t=e.description,n=e.lang,r=e.meta,l=e.keywords,c=e.title,i=a.data.site,s=t||i.siteMetadata.description;return o.a.createElement(m.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})}s.defaultProps={lang:"en",meta:[],keywords:[]},s.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=s},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Color System",description:"Online tool for creating Accessible Color Schemes",author:"@hermanhasawish"}}}}},528:function(e,t){e.exports=function(e,t,n){var a=Math.round(e)%360;return t<.05||n<.12&&t<.18||n>.95?"gray":a<30?"red":a<60?"orange":a<90?"yellow":a<90?"lime":a<120?"green":a<150?"green":a<180?"teal":a<210?t<.2?"gray":"cyan":a<260?t<.2?"gray":"blue":a<300?t<.6?"purple":"indigo":a<335?"fuschia":"red"}}}]);
//# sourceMappingURL=component---src-pages-index-js-321403b1dc1314ead6e5.js.map