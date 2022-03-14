import styled from 'styled-components';


export const Emotions = styled.section`
  display:grid;
  max-width:1920px;
  margin: 4.0rem 3.2rem;
  gap:2.0rem;
  grid-template-columns: repeat(auto-fit,minmax(34.7rem,1fr));

  @media (max-width:918px) {
    gap:4.0rem;
  }
`;

export const Emotion = styled.div`
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
`;


export const Circle = styled.div`
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

`;

export const Phase = styled.span`
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
`;