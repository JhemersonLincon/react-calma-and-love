import Home from './components/Home/Home';
import React from 'react';
import Header from './components/Header/Header';
import { GlobalStyle } from './GlobalStyles';
import Footer from './components/Footer/Footer';
const App = () =>{
  
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App