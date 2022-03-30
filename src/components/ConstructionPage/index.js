import React from 'react';
import Construction from '../../images/svg-construction.svg';
import { ConstructContainer, ConstructH1, ConstructH2, Img } from './ConstructionPageElements';


const ConstructionPage = () => {
  return (
    <ConstructContainer>
      <ConstructH1>This page is under construction at the moment!</ConstructH1>
      <Img src={Construction} />
      <ConstructH2>Please E-mail me at: roygarrett116@outlook.com</ConstructH2>
    </ConstructContainer>
  );
};

export default ConstructionPage;