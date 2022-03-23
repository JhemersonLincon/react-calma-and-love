import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { ThemeProvider } from 'styled-components'
import dark from './styles/Theme/dark'
import light from './styles/Theme/light'
import ChangeTheme from './components/ChangeTheme/ChangeTheme';
const App = () =>{
  const [theme,setTheme] = React.useState(light);

  const toggleTheme = () => {
    setTheme(theme.title  ==="light"? dark : light)
  }
  return (
    <ThemeProvider theme={theme}> 
      <GlobalStyle/>
      <Header/>
      <Home/>
      <Footer/>
      <ChangeTheme toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

export default App