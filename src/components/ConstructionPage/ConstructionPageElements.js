import styled from "styled-components";

export const ConstructContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ConstructH1 = styled.h1`
  padding: 8px;
  font-size: 48px;
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const ConstructH2 = styled.h2`
  padding: 8px;
  font-size: 48px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Img = styled.img`
  padding: 16px;
  height: 500px;

  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;