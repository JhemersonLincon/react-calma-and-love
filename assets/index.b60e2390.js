import{s as i,j as r,a as e,R as l,d as b,W as f,b as v,c as x,e as w,f as y,F as k,g as z}from"./vendor.b9ec4b36.js";const j=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}};j();var D="https://jhemersonlincon.github.io/react-calma-and-love/assets/bg-desktop.06a0119d.jpg";const L=i.section`
  margin-top: 9.4rem;
  min-height:calc(100vh - 95px) ;
  background-image: url(${D}) ;
  display:flex;
  align-items:center;
  justify-content:center;
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;
`,q=i.div`
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
`,M=i.section`
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
  color:var(--color-font-principal);
}
p {
  color:var(--color-font-principal);
  font-size:2.0rem;
  margin-top:3.6rem;
  line-height:30px;
  letter-spacing:1.5%;
  max-width:53.1rem;
}
`,S=i.div`
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
`,$=i.div`
  transform:translateY(-13.5rem);
  border-radius: var(--border-radius);
  grid-area:dontstop;
  background:var(--background-principal);
  padding:64px 32px;
  max-width:59.0rem;
  @media(max-width:918px) {
    transform:translateY(-8.5rem);
  }
`,C=()=>r(M,{children:[r(S,{children:[e("h2",{children:"Question"}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo interdum eros quis ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec quis tellus porta, finibus enim quis, consectetur nibh."}),e("button",{children:"Anwer your question"})]}),r($,{children:[e("h2",{children:"You must never stop"}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo interdum eros quis ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec quis tellus porta, finibus enim quis, consectetur nibh."})]})]}),N=i.section`
  display:grid;
  max-width:1920px;
  margin: 4.0rem 3.2rem;
  gap:2.0rem;
  grid-template-columns: repeat(auto-fit,minmax(34.7rem,1fr));

  @media (max-width:918px) {
    gap:4.0rem;
  }
`,d=i.div`
  height: 45.4rem;
  position:relative;
  border-radius:5px;
  background:#c4c4c4;
  @media (max-width:918px) {
    overflow: hidden;
  }
  
  &:hover > span,
  &:focus > span{
    clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
  }
  img {
    width: 100%;
    border-radius:5px;
    object-fit: cover;
    height: 100%;
  }
`,m=i.div`
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

`,p=i.span`
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
`;var A="https://jhemersonlincon.github.io/react-calma-and-love/assets/smile.6cbd1b44.jpg",E="https://jhemersonlincon.github.io/react-calma-and-love/assets/hope.3328415f.jpg",F="https://jhemersonlincon.github.io/react-calma-and-love/assets/together.c1dfae90.jpg",P="https://jhemersonlincon.github.io/react-calma-and-love/assets/dont give up.65e4337d.jpg";const H=()=>r(N,{children:[r(d,{children:[e(m,{children:e("div",{children:e("span",{})})}),e(p,{children:"Smile"}),e("img",{src:A,alt:""})]}),r(d,{children:[e(m,{children:e("div",{children:e("span",{})})}),e(p,{children:"Hope"}),e("img",{src:E,alt:""})]}),r(d,{children:[e(m,{children:e("div",{children:e("span",{})})}),e(p,{children:"together"}),e("img",{src:F,alt:""})]}),r(d,{children:[e(m,{children:e("div",{children:e("span",{})})}),e(p,{children:"Don't Give Up"}),e("img",{src:P,alt:""})]})]});var T="https://jhemersonlincon.github.io/react-calma-and-love/assets/have-time.e3cd24a6.jpg";const O=i.section`
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
`,B=i.div`
  font-size:2.0rem;
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
`,h=i.p`
    max-width: 53.1rem;
    line-height: 30px;
    letter-spacing: 1.5%;
    margin-top: 3.2rem;

`,I=i(h)`
  margin-top: 2.5rem;
`,V=()=>r(O,{children:[e("div",{children:e("img",{src:T,alt:""})}),r(B,{children:[e("h2",{children:"Have your time"}),e(h,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo interdum eros quis ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec quis tellus porta, finibus enim quis, consectetur nibh."}),e(I,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo interdum eros quis ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec quis tellus porta, finibus enim quis, consectetur nibh."}),e("button",{children:"Continue reading"})]})]}),_=i.section`
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
`,Q=()=>r(_,{children:[e("p",{children:'"I make difficulty my motivation. The turn on top comes in the continuation."'}),e("span",{children:"Charlie Brown"})]}),R=i.div`

  display: grid;
  gap: 2.0rem;
  grid-template-columns: repeat(auto-fit, minmax(34.7rem, 1fr));
`,U=i.div`
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
`,Y=i.div`  
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
`;var G="https://jhemersonlincon.github.io/react-calma-and-love/assets/messages.a9f65457.png";const W=()=>r(R,{children:[r(U,{children:[e("h2",{children:"Leave your message of the day"}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo interdum eros quis ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec quis tellus porta, finibus enim quis, consectetur nibh."})]}),r(Y,{children:[e("div",{children:e("img",{src:G,alt:""})}),e("button",{children:"Let's your message"})]})]}),J=i.section`
  margin: 4.0rem 3.2rem;
`,K=()=>(l.useState(!1),e(J,{children:e(W,{})})),X=()=>r("main",{children:[e(L,{children:r(q,{children:[e("h1",{children:"They told me  \u201Cnothing in the worlds can love you.\u201D He was wrong"}),e("button",{children:"Never Believe"})]})}),e(C,{}),e(H,{}),e(V,{}),e(Q,{}),e(K,{})]}),Z=i.header`
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
`,ee=i.div`
  list-style:none;
  display:flex;
  
  transition: .3s;
  align-items:center;
  @media(max-width:918px){
    display:block;
    position: absolute;
    height: ${a=>a.active?"30vh":"0"};
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
    color:var(--color-font-principal);
    margin:0 3.6rem;
    border-bottom:solid 1px transparent ;
    text-decoration:none;
    &:hover{
      border-color:black;
    }
  }
`,ie=i.span`
  display:inline-block;
  width: 14.8rem;
  
`;var re="https://jhemersonlincon.github.io/react-calma-and-love/assets/logo.8c33a8d8.svg";const te=a=>{const[n,s]=l.useState(null);return l.useEffect(()=>{function c(){const{matches:t}=window.matchMedia(a);s(t)}return window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}},[n]),{media:n}},oe=()=>{const a=te("(max-width:918px)"),[n,s]=l.useState(!1);return r(Z,{children:[r(ee,{active:n,children:[e("li",{children:e("a",{href:"/home",children:"Home"})}),e("li",{children:e("a",{href:"",children:"Let's your message"})}),e("li",{children:e("a",{href:"",children:"Prases of the day"})}),e(ie,{}),e("li",{children:e("a",{href:"",children:"Help"})}),e("li",{children:e("a",{href:"",children:"Person Devepment"})}),e("li",{children:e("a",{href:"",children:"Contacts"})})]}),e("a",{href:"/",children:e("img",{className:"logo",src:re,alt:""})}),a.media&&e("div",{onClick:()=>s(!n),className:"btnMobile",children:e(b,{fontSize:"large"})})]})},ne=f`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap');

  *{
    font-family: 'Poppins', sans-serif;
    box-sizing:border-box;
    margin: 0;padding:0;

  }

  :root {
    --background-principal:#FDD504;
    --color-font-principal:#211F18;
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
    border-radius: var(---border-radius);
  }
  html {
    font-size: 62.7%;
  }
`,ae=i.footer`
  display: block;
  margin: 4.0rem 3.2rem;
  color:var(--color-font-principal);
`,se=i.div`
  display:grid; 
  grid-template-columns: repeat(auto-fit, minmax(34.7rem, 1fr));
  gap:2.0rem;
`,ce=i.div`
border-top:solid 1px #c4c4c4;
  margin-top:4.0rem;
  padding-top:4.0rem;
  font-size:2.0rem;
`,g=i.div`
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
`,le=i(g)`


`,de=i.div`
  font-size:2.0rem;
  display:flex;
  gap:2.6rem;
`,me=i.div`
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
`,pe=()=>r(ae,{children:[r(se,{children:[r(g,{children:[e("h3",{children:"The Company"}),e("p",{children:"About Us"}),e("p",{children:"Work with us"}),e("p",{children:"Terms of use"})]}),r(le,{children:[e("h3",{children:"Using"}),e("p",{children:"Solutions"}),e("p",{children:"Help Center"}),e("p",{children:"Terms of use"})]}),r(de,{children:[e(v,{fontSize:"large"}),e(x,{fontSize:"large"}),e(w,{fontSize:"large"}),e(y,{fontSize:"large"})]}),r(me,{children:[e("h3",{children:"NewLestter"}),e("input",{placeholder:"Email",type:"email",name:"",id:""}),e("button",{children:"Register"})]})]}),e(ce,{children:r("p",{children:["Termos e Pol\xEDticas",e("br",{}),"J.Lincon ",e("strong",{children:"Linhouse"})," \u2014 2022- \xA9 Todos os direitos reservados ",e("br",{}),"CNPJ n\xBA. 00.000.000/0000-00 ",e("br",{}),"Endere\xE7o: ",e("br",{}),"Contato:"]})})]}),ue=()=>r(k,{children:[e(ne,{}),e(oe,{}),e(X,{}),e(pe,{})]});z.render(e(l.StrictMode,{children:e(ue,{})}),document.getElementById("root"));
