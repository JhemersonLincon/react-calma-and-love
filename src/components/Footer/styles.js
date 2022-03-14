import styled from 'styled-components';

export const Footer = styled.footer`
  display: block;
  margin: 4.0rem 3.2rem;
  color:var(--color-font-principal);
`;

export const FooterAreas = styled.div`
  display:grid; 
  grid-template-columns: repeat(auto-fit, minmax(34.7rem, 1fr));
`;

export const FooterAutorais = styled.div`
border-top:solid 1px #c4c4c4;
`;

export const LinksArea = styled.div`
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
`;
