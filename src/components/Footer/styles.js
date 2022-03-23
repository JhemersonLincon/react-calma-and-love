import styled from 'styled-components';

export const Footer = styled.footer`
  display: block;
  margin: 4.0rem 3.2rem;
  color:var(--color-font-secundary);
  `;
  
export const FooterAreas = styled.div`
  display:grid; 
  grid-template-columns: repeat(auto-fit, minmax(34.7rem, 1fr));
  gap:2.0rem;
`;

export const FooterAutorais = styled.div`
border-top:solid 1px #c4c4c4;
  margin-top:4.0rem;
  padding-top:4.0rem;
  font-size:2.0rem;
`;

export const LinksArea = styled.div`
  h3 {
    font-size:2.2rem;
    font-weight: 700;
    margin-bottom:3.6rem;
  }
  a {
    display:block;
    text-decoration:none;
    color:var(--color-font-secundary);
    font-size: 2.0rem;
  }
  p+p {
    margin-top: 1.6rem;
  }
`;

export const HelpArea = styled(LinksArea)`


`;
export const SocialArea = styled.div`
  font-size:2.0rem;
  display:flex;
  gap:2.6rem;
`;

export const NewLestterArea = styled.div`
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
`;
