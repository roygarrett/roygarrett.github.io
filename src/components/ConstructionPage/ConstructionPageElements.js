import styled from "styled-components";

export const ConstructContainer = styled.div`
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #f0f0f0;
`;

export const ConstructH1 = styled.h1`
  padding: 8px;
  align-items: center;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  font-size: 48px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const ConstructH2 = styled.h2`
  padding: 8px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  font-size: 48px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Img = styled.img`
  padding: 16px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  height: 500px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;