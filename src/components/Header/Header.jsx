import React from 'react';
import * as C from './styles';
import MenuIcon from '@mui/icons-material/Menu';
import imgLogo from '../../images/logo.svg';
import useMedia from '../../Hooks/useMedia';
const Header = () => {

  const mobile = useMedia('(max-width:918px)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  return (
    <C.Header>
      <C.NavBar active={mobileMenu}>
        <li><a href="/home">Home</a></li>
        <li><a href="">Let's your message</a></li>
        <li><a href="">Prases of the day</a></li>
        <C.Space></C.Space>
        <li><a href="">Help</a></li>
        <li><a href="">Person Devepment</a></li>
        <li><a href="">Contacts</a></li>
      </C.NavBar>
      <a href="/">  
        <img className='logo' src={imgLogo} alt="" />
      </a>
      {mobile.media && (<div onClick={() => setMobileMenu(!mobileMenu)}         className='btnMobile'>
        <MenuIcon fontSize='large' /> 
      </div>)
      }
    </C.Header>
  )
}

export default Header