(this["webpackJsonpcolor-picker-ts"]=this["webpackJsonpcolor-picker-ts"]||[]).push([[0],{22:function(e,t,o){},23:function(e,t,o){},3:function(e,t,o){e.exports={Container:"ColorPicker_Container__K1kK3",Menu:"ColorPicker_Menu__3GfxU",Number:"ColorPicker_Number__2TOem",Square:"ColorPicker_Square__3YcvT",Arrow:"ColorPicker_Arrow__2tS5M",Icon:"ColorPicker_Icon__3Ax4b"}},37:function(e,t,o){"use strict";o.r(t);var n=o(0),c=o.n(n),r=o(14),a=o.n(r),l=o(2),s=Object(n.createContext)(),i=o(1);function u(e){var t=e.children,o=Object(n.useState)({h:0,s:100,l:50,a:1}),c=Object(l.a)(o,2),r=c[0],a=c[1],u=Object(n.useState)({h:120,s:100,l:50,a:1}),C=Object(l.a)(u,2),j=C[0],d=C[1],b=Object(n.useState)({h:240,s:100,l:50,a:1}),O=Object(l.a)(b,2),h=O[0],f=O[1],_=Object(n.useState)(""),x=Object(l.a)(_,2),g=x[0],m=x[1],v=Object(n.useState)("#ff0000"),p=Object(l.a)(v,2),S=p[0],M=p[1],k=Object(n.useState)([]),N=Object(l.a)(k,2),P=N[0],T=N[1],B=Object(n.useState)("ff0000"),L=Object(l.a)(B,2),w=L[0],I=L[1];Object(n.useEffect)((function(){}),[S]);var E=Object(n.useMemo)((function(){return{redColor:r,setRedColor:a,greenColor:j,setGreenColor:d,blueColor:h,setBlueColor:f,chosenColor:g,setChosenColor:m,color:S,setColor:M,selectedColors:P,setSelectedColors:T,temporaryColor:w,setTemporaryColor:I}}),[r,a,j,d,h,f,g,m,S,M,P,T]);return Object(i.jsx)(s.Provider,{value:E,children:t})}o(22);var C=o(15),j=(o(23),o(3)),d=o.n(j),b=o(39);var O=function(e){var t=e.toggleModalChoose,o=e.toggleModalPalette,c=Object(n.useContext)(s),r=c.color,a=c.setColor,l=Object(n.useContext)(s),u=l.chosenColor,C=l.setChosenColor;Object(n.useEffect)((function(){u&&a(u)}),[u,C]);var j={backgroundColor:r,width:"15px",height:"15px",marginTop:"7px",marginLeft:"auto",marginRight:"auto"};return Object(i.jsx)("div",{className:d.a.Container,children:Object(i.jsxs)("div",{className:d.a.Menu,children:[Object(i.jsx)("div",{className:d.a.Number,children:r}),Object(i.jsx)("div",{className:d.a.Square,onClick:function(e){e.preventDefault(),t()},children:Object(i.jsx)("div",{style:j})}),Object(i.jsx)("div",{className:d.a.Arrow,onClick:function(e){e.preventDefault(),o()},children:Object(i.jsx)(b.a,{className:d.a.Icon})})]})})},h=o(4),f=o.n(h),_=o(10),x=o(9),g=o.n(x);var m=function(e){var t=e.toggleModalChoose,o=e.addSelectedColor,c=Object(n.useState)("ff0000"),r=Object(l.a)(c,2),a=r[0],u=r[1],C=Object(n.useState)("00ff00"),j=Object(l.a)(C,2),d=j[0],b=j[1],O=Object(n.useState)("0000ff"),h=Object(l.a)(O,2),x=h[0],m=h[1],v=Object(n.useContext)(s),p=v.redColor,S=v.setRedColor,M=Object(n.useContext)(s),k=M.greenColor,N=M.setGreenColor,P=Object(n.useContext)(s),T=P.blueColor,B=P.setBlueColor,L=Object(n.useContext)(s),w=L.chosenColor,I=L.setChosenColor;function E(e){return[e.h,e.s,e.l]}function y(){var e=a.slice(0,2),t=d.slice(2,4),o=x.slice(4);return I("#".concat(e).concat(t).concat(o))}return Object(n.useEffect)((function(){function e(e){e.target.classList.contains("ModalChooseColor_Container__213HF")||e.target.classList.contains("ModalChooseColor_OkButton__2q4sh")||e.target.classList.contains("ColorPicker_Square__3YcvT")||e.target.classList.contains("ModalChooseColor_CancelButton__ZQB7p")||t()}return window.addEventListener("mouseup",e),function(){window.removeEventListener("mouseup",e)}}),[]),Object(i.jsxs)("div",{className:f.a.Container,children:[Object(i.jsxs)("div",{className:f.a.SliderContainer,children:[Object(i.jsx)(_.a,{handleChangeColor:function(e){S(e);var t=E(e);u(g.a.hsl.hex(t)),y()},color:p}),Object(i.jsx)(_.a,{handleChangeColor:function(e){N(e);var t=E(e);b(g.a.hsl.hex(t)),y()},color:k}),Object(i.jsx)(_.a,{handleChangeColor:function(e){B(e);var t=E(e);m(g.a.hsl.hex(t)),y()},color:T})]}),Object(i.jsxs)("div",{className:f.a.ButtonContainer,children:[Object(i.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),I(localStorage.getItem("currentColor")),t()},className:f.a.CancelButton,children:"Cancel"}),Object(i.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),console.log("chosenColor",w),o(w),localStorage.setItem("currentColor",w),t()},className:f.a.OkButton,children:"Ok"})]})]})},v=o(5),p=o.n(v),S=o(40);var M=function(e){var t=e.toggleModalPalette,o=e.selectedColors,c=Object(n.useContext)(s),r=(c.chosenColor,c.setChosenColor);Object(n.useEffect)((function(){function e(e){(e.target.classList.contains("ColorPicker_Container__K1kK3")||e.target.classList.contains("App"))&&t()}return window.addEventListener("mouseup",e),function(){window.removeEventListener("mouseup",e)}}),[]);var a=function(e){console.log("this is inner text",e.target.innerText),r(e.target.innerText),localStorage.setItem("currenColor",e.target.innerText),t()};return Object(i.jsxs)("div",{className:p.a.Container,children:[Object(i.jsx)("h2",{className:p.a.Text,children:"Your color collection"}),o&&Object(i.jsx)("ul",{className:p.a.List,children:o.map((function(e){return Object(i.jsxs)("li",{className:p.a.Item,onClick:a,children:[Object(i.jsx)("h2",{className:p.a.ItemText,children:e}),Object(i.jsx)("div",{style:{width:"15px",height:"15px",backgroundColor:e,border:"1px solid #b6b6b4"}})]},Object(S.a)())}))})]})};var k=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),o=t[0],c=t[1],r=Object(n.useState)(!1),a=Object(l.a)(r,2),s=a[0],u=a[1],j=Object(n.useState)(!1),d=Object(l.a)(j,2),b=d[0],h=d[1];function f(){b&&h(!1),u(!s)}function _(){s&&u(!1),h(!b)}return Object(n.useEffect)((function(){localStorage.setItem("currentColor","#ff0000")}),[]),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(O,{toggleModalChoose:f,toggleModalPalette:_}),s&&Object(i.jsx)(m,{toggleModalChoose:f,addSelectedColor:function(e){console.log("chosenColor in add function",e),e&&(c([].concat(Object(C.a)(o),[e])),console.log("selectedColorsArray",o))}}),b&&Object(i.jsx)(M,{toggleModalPalette:_,selectedColors:o})]})},N=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,41)).then((function(t){var o=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;o(e),n(e),c(e),r(e),a(e)}))};a.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(u,{children:Object(i.jsx)(k,{})})}),document.getElementById("root")),N()},4:function(e,t,o){e.exports={Container:"ModalChooseColor_Container__213HF",SliderContainer:"ModalChooseColor_SliderContainer__1Tadk",ButtonContainer:"ModalChooseColor_ButtonContainer__b3wKt",CancelButton:"ModalChooseColor_CancelButton__ZQB7p",OkButton:"ModalChooseColor_OkButton__2q4sh"}},5:function(e,t,o){e.exports={Container:"ModalPalette_Container__V101Q",List:"ModalPalette_List__3qGHD",Text:"ModalPalette_Text__2jL_h",Item:"ModalPalette_Item__3IYEr",ItemText:"ModalPalette_ItemText__NvGaH",TipTriangle:"ModalPalette_TipTriangle__JutnV"}}},[[37,1,2]]]);
//# sourceMappingURL=main.36763886.chunk.js.map