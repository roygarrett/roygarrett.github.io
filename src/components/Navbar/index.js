import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements';


const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/'>./Roy-Garrett</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='projects'>Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='resume'>Resume</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact'>Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/contact'>Reach Out</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  );
};

export default Navbar;
