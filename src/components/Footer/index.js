import React from 'react'
import Pdf from '../../../src/Resume2022.pdf'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>
                <FooterLink to='about'>About Me</FooterLink>
                <FooterLink to='projects'>Projects</FooterLink>
                <a href={Pdf} target='_blank'>Resume</a>
                <FooterLink to='contact'>Contact</FooterLink>
              </FooterLinkTitle>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
