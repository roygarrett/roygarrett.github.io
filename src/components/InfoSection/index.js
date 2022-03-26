import React from 'react'
import {Button} from 'react-scroll';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Img,
  ImgWrap
} from './InfoElements';

const InfoSection = () => {
  return (
    <>
      <InfoContainer /*id={id}*/>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>About Me</TopLine>
                <Heading>Business: MIS and Computer Science</Heading>
                <Subtitle>Junior studying at The Master's University</Subtitle>
                <BtnWrap>
                  <Button to='home' />
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
