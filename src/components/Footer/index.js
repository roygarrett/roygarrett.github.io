import React from 'react';
import Pdf from '../../../src/Resume2022.pdf';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLink, A, SocialMedia, SocialMediaWrap, FooterScroll } from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
                <FooterScroll to='about'>About</FooterScroll>
            </FooterLinkItems>
            <FooterLinkItems>
                <FooterScroll to='projects'>Projects</FooterScroll>
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
        <SocialMedia>
          <SocialMediaWrap />
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
