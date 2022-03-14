import styled from 'styled-components';

export const Header = styled.header`
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
`;
export const NavBar = styled.div`
  list-style:none;
  display:flex;
  
  transition: .3s;
  align-items:center;
  @media(max-width:918px){
    display:block;
    position: absolute;
    height: ${(props) => props.active? '30vh':'0'};
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
`;

export const Space = styled.span`
  display:inline-block;
  width: 14.8rem;
  
`;