import styled from 'styled-components';

export const InicialMessage = styled.div`

  display: grid;
  gap: 2.0rem;
  grid-template-columns: repeat(auto-fit, minmax(34.7rem, 1fr));
`;
export const MessageOfDay = styled.div`
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
`;

export const Message = styled.div`  
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
`;