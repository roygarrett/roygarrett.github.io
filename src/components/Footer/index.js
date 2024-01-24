import React from 'react';
import Pdf from '../../../src/Resume.pdf';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLink, A, FooterScroll} from './FooterElements';

const Footer = () => {
  
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
                <FooterScroll
                to='about'
                smooth={true} 
                duration={500} 
                spy={true}
                exact='true' 
                offset={-80}
                >About</FooterScroll>
            </FooterLinkItems>
            <FooterLinkItems>
                <FooterScroll
                to='projects'
                smooth={true} 
                duration={500} 
                spy={true}
                exact='true' 
                offset={-80}
                >Projects</FooterScroll>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
                <A href={Pdf} target='_blank'>Resume</A>
            </FooterLinkItems>
            <FooterLinkItems>
                <FooterLink to='/contact'>Reach Out</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
