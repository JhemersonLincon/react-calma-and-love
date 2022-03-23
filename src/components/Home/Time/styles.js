import styled from 'styled-components';

export const Time = styled.section`
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
`;  

export const ContainerContent = styled.div`
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
`;
export const PhaseTime = styled.p`
    max-width: 53.1rem;
    line-height: 30px;
    letter-spacing: 1.5%;
    margin-top: 3.2rem;

`;

export const Phase2 = styled(PhaseTime)`
  margin-top: 2.5rem;
`;