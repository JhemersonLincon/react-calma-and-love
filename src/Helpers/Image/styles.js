import styled from 'styled-components';

export const Wrapper = styled.div`
  display:grid;
`;

export const Skeleton = styled.div`
  display: block;
  max-width:100%;
  border-radius:var(--border-radius);
  grid-area:1/1;
  background-image: linear-gradient(90deg, ${props => props.theme.colors.effect} 0px, var(--background-principal) 50%,  ${props => props.theme.colors.effect}   100%);
  background-color: ${props => props.theme.colors.effect};
  background-size: 200%;
  animation: skeleton 1.5s infinite linear;

  @keyframes skeleton {
    from {
      background-position:0px;
    }
    to {
      background-position: -200%;
    }
  }
`;
export const Image = styled.img`
  grid-area:1/1;
  border-radius:5px;
  width:100%;
  object-fit: cover;
  opacity: 0;
  max-height:${props => props.size?props.size: 'initial '}; 
  transition: .3s;
`;