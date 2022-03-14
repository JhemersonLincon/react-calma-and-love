import styled from 'styled-components'

export const Question = styled.section`
display:flex;
margin:0 3.2rem;
max-width:1920px;
justify-content:space-between;
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
`;

export const QuestionArea = styled.div`
margin-top:4.0rem;

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
`;

export const DontStop = styled.div`
transform:translateY(-13.5rem);
border-radius: var(--border-radius);
background:var(--background-principal);
padding:64px 32px;

`;
