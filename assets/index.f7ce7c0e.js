var $=Object.defineProperty;var u=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var f=(r,t,n)=>t in r?$(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,x=(r,t)=>{for(var n in t||(t={}))b.call(t,n)&&f(r,n,t[n]);if(u)for(var n of u(t))v.call(t,n)&&f(r,n,t[n]);return r};var k=(r,t)=>{var n={};for(var s in r)b.call(r,s)&&t.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&u)for(var s of u(r))t.indexOf(s)<0&&v.call(r,s)&&(n[s]=r[s]);return n};import{W as D,s as i,R as l,j as o,a as e,d as L,b as S,c as q,e as C,f as M,r as T,G as E,g as F,h as N,F as A,i as P}from"./vendor.27c014ee.js";const H=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}};H();const G=D`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap');

  *{
    font-family: 'Poppins', sans-serif;
    box-sizing:border-box;
    margin: 0;padding:0;
    transition: all .3s;
  }

  :root {
    --background-principal:${r=>r.theme.colors.primary};
    --color-font-principal:${r=>r.theme.colors.text};
    --color-font-secundary:${r=>r.theme.colors.secundary};
    --border-radius:5px;
    
  }

  ::-webkit-scrollbar{
    width:0.8rem;
  }
  ::-webkit-scrollbar-truck{
    background:#f5f5f5;
  }
  ::-webkit-scrollbar-thumb{
    background:var(--background-principal);
    border-radius: var(--border-radius);
  }
  html {
    font-size: 62.7%;
  }

  body {
    transition:.3s;
    background-color: ${r=>r.theme.colors.background};
  }
`,I=i.header`
  height:95px;
  z-index:1000;
  position: fixed;
  left:0;right:0;top:0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background-principal);
  padding:0 3.2rem;

  .logo {
    position: absolute;
    top: 2.7rem;left:48.5%;
    transform:  translateX(-14%);

    img{
      width: 10rem;
    }
  }
  @media(max-width:918px){
    justify-content: space-between;
    .logo{
      position: initial;
      transform:initial;
    }
  }
`,_=i.div`
  list-style:none;
  display:flex;
  
  transition: .3s;
  align-items:center;
  @media(max-width:918px){
    display:block;
    position: absolute;
    height: ${r=>r.active?"30vh":"0"};
    overflow:hidden;
    background:var(--background-principal);
    top:9.5rem;left:0;right:0;
    a {
      margin:3.6rem 0;
      border-bottom:solid 1px #c4c4c4;
    }
    span {
      display: none;
    }
  }
  a {
    font-size:1.6rem;
    transition: .3s;
    display: block;
    padding: 8px 0;
    color:#211F18;
    margin:0 3.6rem;
    border-bottom:solid 1px transparent ;
    text-decoration:none;
    &:hover{
      border-color:black;
    }
  }
`,B=i.span`
  display:inline-block;
  width: 14.8rem;
  
`;var O="https://jhemersonlincon.github.io/react-calma-and-love/assets/logo.8c33a8d8.svg";const V=r=>{const[t,n]=l.useState(null);return l.useEffect(()=>{function s(){const{matches:a}=window.matchMedia(r);n(a)}return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[t]),{media:t}},Q=()=>{const r=V("(max-width:918px)"),[t,n]=l.useState(!1);return o(I,{children:[o(_,{active:t,children:[e("li",{children:e("a",{href:"/home",children:"Home"})}),e("li",{children:e("a",{href:"",children:"Let's your message"})}),e("li",{children:e("a",{href:"",children:"Prases of the day"})}),e(B,{}),e("li",{children:e("a",{href:"",children:"Help"})}),e("li",{children:e("a",{href:"",children:"Person Devepment"})}),e("li",{children:e("a",{href:"",children:"Contacts"})})]}),e("a",{href:"/",children:e("img",{className:"logo",src:O,alt:""})}),r.media&&e("div",{onClick:()=>n(!t),className:"btnMobile",children:e(L,{fontSize:"large"})})]})};var R="https://jhemersonlincon.github.io/react-calma-and-love/assets/bg-desktop.06a0119d.jpg";const U=i.section`
  margin-top: 9.4rem;
  min-height:calc(100vh - 95px) ;
  background-image: url(${R}) ;
  display:flex;
  align-items:center;
  justify-content:center;
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;
`,W=i.div`
  max-width:1920px;
  display:flex;
  flex-direction:column;
  align-items:center; 
  h1 {
    max-width:68.0rem;
    text-align:center;
    display:block;
    font-weight:900;
    font-size:4.6rem;
    color:white;
  }
  button {
    margin-top:4.6rem;
    border-radius:5px;
    border:none;
    height:6.0rem;
    font-size:2.0rem;
    width:26.6rem;
    cursor:pointer;
    background:#F7DE00;
    transition:.3s;
    font-weight:700;
    border:solid 1px transparent;
  }
  button:hover {
    background:var(--color-font-principal);
    color:#FDD504;
  }
`,Y=i.section`
display:grid;
margin:0 3.2rem;
grid-template-columns: 1fr 1fr;
grid-template-areas:'question dontstop';
max-width:1920px;
justify-content:space-between;

@media(max-width:918px){
  grid-template-columns:1fr;
  grid-template-areas:'dontstop'
                      'question' ;
}

h2 {
  font-size:4.0rem;
  max-width:37.2rem;
  font-weight:700;
  line-height:60px;
  color:var(--color-font-secundary);
}
p {
  color:var(--color-font-secundary);
  font-size:2.0rem;
  margin-top:3.6rem;
  line-height:30px;
  letter-spacing:1.5%;
  max-width:53.1rem;
}
`,J=i.div`
margin-top:4.0rem;
  grid-area:question;
button {
  font-size:2.0rem;
  font-weight:700;
  margin-top:3.6rem;
  border:none;
  background:var(--background-principal);
  border-radius:5px;
  transition:.3s;
  padding:1.7rem 3.2rem;
}
button:hover,
button:focus {
  background:var(--color-font-principal);
  color:#FDD504;
}
`,K=i.div`
  transform:translateY(-10.5rem);
  border-radius: var(--border-radius);
  grid-area:dontstop;
  background:var(--background-principal);
  padding:64px 32px;
  max-width:59.0rem;
  h2, p{

    color:var(--color-font-principal);
  }
  @media(max-width:918px) {
    transform:translateY(-8.5rem);
  }
`,X=()=>o(Y,{children:[o(J,{children:[e("h2",{children:"Question"}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo interdum eros quis ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec quis tellus porta, finibus enim quis, consectetur nibh."}),e("button",{children:"Anwer your question"})]}),o(K,{children:[e("h2",{children:"You must never stop"}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo interdum eros quis ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec quis tellus porta, finibus enim quis, consectetur nibh."})]})]}),Z=i.section`
  display:grid;
  max-width:1920px;
  margin: 4.0rem 3.2rem;
  gap:2.0rem;
  grid-template-columns: repeat(auto-fit,minmax(34.7rem,1fr));

  @media (max-width:918px) {
    gap:4.0rem;
  }
`,p=i.div`
  height: 45.4rem;
  position:relative;
  border-radius:5px;
  @media (max-width:918px) {
    overflow: hidden;
  }
  
  &:hover > span,
  &:focus > span{
    clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
  }
  img {
    width: 100%;
    height: 100%;
  }
`,h=i.div`
  height: 2.0rem;
  position: absolute;
  z-index:-1;
  display: flex;
  justify-content:center;
  width: 100%;
  div {
    height: 11.4rem;
    border-radius: 50%;
    display: block;
    z-index: 1111;
    transform: translateY(-5.0rem);
    display:flex;
    align-items:center;
    justify-content:center;
    width: 11.4rem;
    background:var(--color-font-principal);
  }
  div > span {
    display: block;
    
    border-radius:50%;
    height: 60%;
    width: 60%;
    border:solid 3px var(--background-principal);
    
  }

`,g=i.span`
  background:var(--color-font-principal);
  color:white;
  text-align:center;
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
  transition: .3s;
  font-size:2.4rem;
  font-weight: 400;
  bottom:0;
  width:100%;
  position: absolute;
`;var ee="https://jhemersonlincon.github.io/react-calma-and-love/assets/smile.6cbd1b44.jpg",re="https://jhemersonlincon.github.io/react-calma-and-love/assets/hope.3328415f.jpg",ie="https://jhemersonlincon.github.io/react-calma-and-love/assets/together.c1dfae90.jpg",te="https://jhemersonlincon.github.io/react-calma-and-love/assets/dont give up.65e4337d.jpg";const oe=i.div`
  display:grid;
`,ne=i.div`
  display: block;
  max-width:100%;
  border-radius:var(--border-radius);
  grid-area:1/1;
  background-image: linear-gradient(90deg, ${r=>r.theme.colors.effect} 0px, var(--background-principal) 50%,  ${r=>r.theme.colors.effect}   100%);
  background-color: ${r=>r.theme.colors.effect};
  background-size: 200%;
  animation: skeleton 1.5s infinite linear;

  @keyframes skeleton {
    from {
      background-position:0px;
    }
    to {
      background-position: -200%;
    }
  }
`,ae=i.img`
  grid-area:1/1;
  border-radius:5px;
  width:100%;
  object-fit: cover;
  opacity: 0;
  max-height:${r=>r.size?r.size:"initial "}; 
  transition: .3s;
`,d=n=>{var s=n,{alt:r}=s,t=k(s,["alt"]);const[a,c]=l.useState(!0);function m({target:j}){j.style.opacity=1}return o(oe,{children:[a&&e(ne,{}),e(ae,x({onLoad:m,alt:r},t))]})},se=()=>o(Z,{children:[o(p,{children:[e(h,{children:e("div",{children:e("span",{})})}),e(g,{children:"Smile"}),e(d,{size:"45.4rem",src:ee,alt:"Grand pintura de uma bola amarela no ch\xE3o sorrindo "})]}),o(p,{children:[e(h,{children:e("div",{children:e("span",{})})}),e(g,{children:"Hope"}),e(d,{size:"45.4rem",src:re,alt:"Grand pintura de uma bola amarela no ch\xE3o sorrindo "})]}),o(p,{children:[e(h,{children:e("div",{children:e("span",{})})}),e(g,{children:"together"}),e(d,{size:"45.4rem",src:ie,alt:"Grand pintura de uma bola amarela no ch\xE3o sorrindo "})]}),o(p,{children:[e(h,{children:e("div",{children:e("span",{})})}),e(g,{children:"Don't Give Up"}),e(d,{size:"45.4rem",src:te,alt:"Grand pintura de uma bola amarela no ch\xE3o sorrindo "})]})]});var ce="https://jhemersonlincon.github.io/react-calma-and-love/assets/have-time.e3cd24a6.jpg";const le=i.section`
  margin: 4.0rem 3.2rem;
  display: grid;
  gap:2.0rem;
  grid-template-columns: repeat(auto-fit ,minmax(34.7rem,1fr));

  div {
    border-radius:5px;
    width: 100%;
    height:100%;
  }
  img {
    height: 100%;
    border-radius:5px;
    object-fit:cover;
    width: 100%;
  }
`,de=i.div`
  font-size:2.0rem;
  color:var(--color-font-secundary);
  h2 {
    font-size:4.0rem;
    font-weight: 700;
    line-height: 6.0rem;
  }
  button {
    padding: 1.7rem 3.2rem;
    font-size: 2.0rem;
    background:var(--background-principal);
    margin-top: 3.2rem;
    border:none;
    transition:.3s;
    border-radius: 5px;
    font-weight:700;
  }
  button:hover {
    color:var(--background-principal);
    background:var(--color-font-principal);
  }
`,w=i.p`
    max-width: 53.1rem;
    line-height: 30px;
    letter-spacing: 1.5%;
    margin-top: 3.2rem;

`,me=i(w)`
  margin-top: 2.5rem;
`,ue=()=>o(le,{children:[e("div",{children:e(d,{src:ce,alt:""})}),o(de,{children:[e("h2",{children:"Have your time"}),e(w,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo interdum eros quis ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec quis tellus porta, finibus enim quis, consectetur nibh."}),e(me,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo interdum eros quis ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec quis tellus porta, finibus enim quis, consectetur nibh."}),e("button",{children:"Continue reading"})]})]}),pe=i.section`
  padding:8.7rem ; 
  background:#211F18;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  p {
    max-width: 106.2rem;
    font-size: 4.0rem;
    color: white;
    margin-bottom: 4.6rem;
  }
  span {
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:12px;
    font-size: 2.0rem;
  }
  span:before{
    content:"";
    background-color: currentColor; 
    display: inline-block;
    height:2px;
    width: 20px;
  }
  span:after{
    content:"";
    background-color: currentColor; 
    display: inline-block;
    height:2px;
    width: 20px;
  }
`,he=()=>o(pe,{children:[e("p",{children:'"I make difficulty my motivation. The turn on top comes in the continuation."'}),e("span",{children:"Charlie Brown"})]}),ge=i.div`

  display: grid;
  gap: 2.0rem;
  grid-template-columns: repeat(auto-fit, minmax(34.7rem, 1fr));
`,fe=i.div`
  color:var(--color-font-secundary);
  h2 {
    max-width: 46.9rem;
    font-weight: 700;
    font-size: 4.0rem;
  }
  p {
    max-width: 53.1rem;
    line-height: 30px;
    margin-top: 3.4rem;
    font-size: 2.0rem;
  }
`,be=i.div`  
  div {
    max-width:42.5rem;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  button {
    margin-top:3.6rem;
    padding: 1.7rem 3.2rem;
    font-size: 2.0rem;
    background:var(--background-principal);
    border:none;
    color:var(--color-font-principal);
    text-decoration: none;
    transition: .3s;
    border-radius: 5px;
    font-weight:700;
  }
  button:hover {
    color:var(--background-principal);
    background:var(--color-font-principal);
  }
`;var ve="https://jhemersonlincon.github.io/react-calma-and-love/assets/messages.a9f65457.png";const xe=()=>o(ge,{children:[o(fe,{children:[e("h2",{children:"Leave your message of the day"}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo interdum eros quis ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec quis tellus porta, finibus enim quis, consectetur nibh."})]}),o(be,{children:[e("div",{children:e(d,{alt:"",src:ve})}),e("button",{children:"Let's your message"})]})]}),ke=i.section`
  margin: 4.0rem 3.2rem;
`,ye=()=>(l.useState(!1),e(ke,{children:e(xe,{})})),we=()=>o("main",{children:[e(U,{children:o(W,{children:[e("h1",{children:"They told me  \u201Cnothing in the worlds can love you.\u201D He was wrong"}),e("button",{children:"Never Believe"})]})}),e(X,{}),e(se,{}),e(ue,{}),e(he,{}),e(ye,{})]}),ze=i.footer`
  display: block;
  margin: 4.0rem 3.2rem;
  color:var(--color-font-principal);
`,je=i.div`
  display:grid; 
  grid-template-columns: repeat(auto-fit, minmax(34.7rem, 1fr));
  gap:2.0rem;
`,$e=i.div`
border-top:solid 1px #c4c4c4;
  margin-top:4.0rem;
  padding-top:4.0rem;
  font-size:2.0rem;
`,z=i.div`
  h3 {
    font-size:2.2rem;
    font-weight: 700;
    margin-bottom:3.6rem;
  }
  p {
    font-size: 2.0rem;
  }
  p+p {
    margin-top: 1.6rem;
  }
`,De=i(z)`


`,Le=i.div`
  font-size:2.0rem;
  display:flex;
  gap:2.6rem;
`,Se=i.div`
  h3 {
    font-size:2.2rem;
    font-weight:700;
    margin-bottom:3.6rem;
  }

  input {
    padding:2.1rem;
    background:#c4c4c4;
    width:100%;
    font-size:2.0rem;
    border-radius:var(--border-radius);
    border:none;
    color: var(--color-font-principal);
  }
  input:focus {
    outline:solid 1px var(--background-principal);
    box-shadow:0px 0px 5px 0px var(--background-principal);
  }

  button {
    margin-top:1.6rem;
    padding:1.6rem 3.2rem;
    background:var(--background-principal);
    border-radius:var(--border-radius);
    border:none;
    transition:.3s;
    font-weight:700 ;
    
  }
  button:hover,
  button:focus {
    color:var(--background-principal);
    background:var(--color-font-principal);
  }
`,qe=()=>o(ze,{children:[o(je,{children:[o(z,{children:[e("h3",{children:"The Company"}),e("p",{children:"About Us"}),e("p",{children:"Work with us"}),e("p",{children:"Terms of use"})]}),o(De,{children:[e("h3",{children:"Using"}),e("p",{children:"Solutions"}),e("p",{children:"Help Center"}),e("p",{children:"Terms of use"})]}),o(Le,{children:[e(S,{fontSize:"large"}),e(q,{fontSize:"large"}),e(C,{fontSize:"large"}),e(M,{fontSize:"large"})]}),o(Se,{children:[e("h3",{children:"NewLestter"}),e("input",{placeholder:"Email",type:"email",name:"",id:""}),e("button",{children:"Register"})]})]}),e($e,{children:o("p",{children:["Termos e Pol\xEDticas",e("br",{}),"J.Lincon ",e("strong",{children:"Linhouse"})," \u2014 2022- \xA9 Todos os direitos reservados ",e("br",{}),"CNPJ n\xBA. 00.000.000/0000-00 ",e("br",{}),"Endere\xE7o: ",e("br",{}),"Contato:"]})})]});var Ce={title:"dark",colors:{primary:"#FDD504",secundary:"#fff",effect:"rgb(10,10,0)",background:"rgb(10,10,0)",text:"#211F18"}},y={title:"light",colors:{primary:"#FDD504",secundary:"#211f18",effect:"#f5f5f5",background:"#f5f5f5",text:"#211F18"}};const Me=i.div`
  position: fixed;
  bottom:1.0rem;
  right:1.0rem;
  display:flex;
  justify-content: center;
  align-items:center;
  height: 5.0rem;
  border-radius: 50%;
  width: 5.0rem;
  background:var(--background-principal);
`,Te=i.button`
  border: none;
  background:#c4c4c4;
  height: 100%;
  width: 100%;
  box-shadow:2px 2px 0px var(--background-principal);
  border-radius: 50%;
`,Ee=({toggleTheme:r})=>{const{title:t}=T.exports.useContext(E);return e(Me,{children:e(Te,{onClick:()=>r(),children:t==="light"?e(F,{sx:{fontSize:25}}):e(N,{sx:{fontSize:25}})})})},Fe=()=>{const[r,t]=l.useState(y);return o(A,{theme:r,children:[e(G,{}),e(Q,{}),e(we,{}),e(qe,{}),e(Ee,{toggleTheme:()=>{t(r.title==="light"?Ce:y)}})]})};P.render(e(l.StrictMode,{children:e(Fe,{})}),document.getElementById("root"));
