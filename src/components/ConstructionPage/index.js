import React from 'react';
import Construction from '../../images/svg-construction.svg';
import { ConstructContainer, ConstructH1, Img } from './ConstructionPageElements';


const ConstructionPage = () => {
  return (
    <ConstructContainer>
      <ConstructH1>This page is still under construction!</ConstructH1>
      <Img src={Construction} />
    </ConstructContainer>
  );
};

export default ConstructionPage;