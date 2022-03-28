import React from 'react';
import Construction from '../../images/svg-construction.svg';
import { ContactContainer, ContactH1, Img } from './PageContactElements';


const PageContact = () => {
  return (
    <ContactContainer>
      <ContactH1>This page is still under construction!</ContactH1>
      <Img src={Construction} />
    </ContactContainer>
  );
};

export default PageContact;
