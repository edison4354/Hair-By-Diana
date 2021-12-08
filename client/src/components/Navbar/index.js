import React, { useState, useEffect } from 'react';
import {ReactComponent as Logo} from './Logo.svg';
import { useLocation } from 'react-router-dom';
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
  const [navBg, setNavBg] = useState("rgba(76, 175, 80, 0)");
  const [navBor, setNavBor] = useState("rgba(76, 175, 80, 0)");
  const [isHidden, setIsHidden] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if(location.pathname === '/book'){
      setNavBg("rgba(255, 255, 255, 1)");
      setNavBor("1px solid rgba(0, 0, 0, 0.1)");
      setIsHidden(true);
    } else {
      setNavBg("rgba(76, 175, 80, 0)");
      setNavBor("none");
      setIsHidden(false);
    }
  },[location]);

  return (
    <div style={{'position': 'fixed', 'top': 0, 'width': '100vw'}}>
      <Nav style={{ "background": navBg, "borderBottom": navBor}}>
        <NavIcon>
          <Logo/>
        </NavIcon>
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/contact_us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          {!isHidden && (
            <NavBtn>
              <NavBtnLink to='/book'>Book Now</NavBtnLink>
            </NavBtn>
          )}
        </NavMenu>
        <Bars />
      </Nav>
    </div>
  );
};

export default Navbar;