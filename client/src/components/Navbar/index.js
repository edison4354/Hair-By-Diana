import React from 'react';
import {ReactComponent as Logo} from './Logo.svg';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
NavIcon,
} from './NavbarElements';

const Navbar = () => {
  return (
    <div style={{'position': 'fixed', 'top': 0, 'width': '100vw'}}>
      <Nav>
        <Bars />
        <NavIcon>
          <Logo/>
        </NavIcon>
        <NavMenu>
          <NavLink to='/' activeStyle>
            HOME
          </NavLink>
          <NavLink to='/about' activeStyle>
            ABOUT
          </NavLink>
          <NavLink to='/contact_us' activeStyle>
            CONTACT US
          </NavLink>
          <NavLink to='/services' activeStyle>
            SERVICES
          </NavLink>
          <NavBtn>
            <NavBtnLink to='/book'>Book Now</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </div>
  );
};

export default Navbar;