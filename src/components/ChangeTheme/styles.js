import styled from 'styled-components'

export const ContainerTheme = styled.div`
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
`;
export const BtnTheme = styled.button`
  border: none;
  background:var(--background-principal);
  height: 100%;
  width: 100%;
  box-shadow:2px 2px 0px var(--color-font-secundary);
  border-radius: 50%;
`;