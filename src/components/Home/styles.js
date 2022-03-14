import styled from 'styled-components';
import bgDesktop from '../../images/bg-desktop.jpg';


export const Home = styled.section`
  margin-top: 9.4rem;
  min-height:calc(100vh - 95px) ;
  background-image: url(${bgDesktop}) ;
  display:flex;
  align-items:center;
  justify-content:center;
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;
`;
export const Content = styled.div`
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
`;