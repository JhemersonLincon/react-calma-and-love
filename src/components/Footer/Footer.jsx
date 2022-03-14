import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import * as C from './styles';
import React from 'react';

const Footer = () => {
  return (
    <C.Footer>
      <C.FooterAreas>
        <C.LinksArea>
          <h3>The Company</h3>
          <p>About Us</p>
          <p>Work with us</p>
          <p>Terms of use</p>
        </C.LinksArea>
        <C.HelpArea>
          <h3>Using</h3>
          <p>Solutions</p>
          <p>Help Center</p>
          <p>Terms of use</p>
        </C.HelpArea>
        <C.SocialArea>
          <FacebookIcon fontSize="large"/>
          <TwitterIcon  fontSize="large"/>
          <LinkedInIcon  fontSize="large"/>
          <InstagramIcon fontSize='large'/>
        </C.SocialArea>
        <C.NewLestterArea>
          <h3>NewLestter</h3>
          <input placeholder="Email" type="email" name="" id="" />
          <button>Register</button>
        </C.NewLestterArea>
      </C.FooterAreas>
      <C.FooterAutorais>
      <p>
        Termos e Políticas<br/>
        J.Lincon <strong>Linhouse</strong> — 2022- © Todos os direitos reservados <br />
        CNPJ nº. 00.000.000/0000-00 <br />
        Endereço: <br />
        Contato: 
      </p>
      </C.FooterAutorais>
    </C.Footer>
  )
}

export default Footer