import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap');

  *{
    font-family: 'Poppins', sans-serif;
    box-sizing:border-box;
    margin: 0;padding:0;
    transition: all .3s;
  }

  :root {
    --background-principal:${props => props.theme.colors.primary};
    --color-font-principal:${props => props.theme.colors.text};
    --color-font-secundary:${props => props.theme.colors.secundary};
    --border-radius:5px;
    
  }

  ::-webkit-scrollbar{
    width:0.8rem;
  }
  ::-webkit-scrollbar-truck{
    background:#f5f5f5;
  }
  ::-webkit-scrollbar-thumb{
    background:var(--background-principal);
    border-radius: var(--border-radius);
  }
  html {
    font-size: 62.7%;
  }

  body {
    transition:.3s;
    background-color: ${props => props.theme.colors.background};
  }
`;

