import React, {useState} from 'react'
import Video from '../../videos/video.mp4';
import {ButtonPage} from '../ButtonPageElements';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
  setHover(!hover);
  }

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome to my Portfolio</HeroH1>
        <HeroP>
          Scroll to Learn More
        </HeroP>
        <HeroBtnWrapper>
          <ButtonPage
            to='contact'
            smooth={true} 
            duration={500} 
            spy={true}
            exact='true' 
            offset={-80}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >
            Contact Me {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonPage>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;
