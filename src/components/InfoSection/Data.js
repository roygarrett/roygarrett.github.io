import aboutPic from '../../images/svg-about.svg';
import resumePic from '../../images/svg-resume.svg';
import contactPic from '../../images/svg-contact.svg';

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'About Me',
  headLine: 'Business: MIS and Computer Science',
  description: "Junior studying at The Master's University",
  buttonLabel: 'Contact Me',
  imgStart: false, //Toggle for image to switch sides
  img: aboutPic,
  alt: 'about-pic',
  dark: true,
  primary: true,
}

export const homeObjThree = {
  id: 'resume',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Resume',
  headLine: 'View My Resume Here',
  description: "Click the button below to view my Resume",
  buttonLabel: 'View Resume',
  imgStart: false, //Toggle for image to switch sides
  img: resumePic,
  alt: 'resume-pic',
  dark: true,
  primary: true,
}

export const homeObjFour = {
  id: 'contact',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Contact',
  headLine: 'Reach Out',
  description: "Click the button below to contact me by email",
  buttonLabel: 'Contact Me',
  imgStart: false, //Toggle for image to switch sides
  img: contactPic,
  alt: 'contact-pic',
  dark: false,
  primary: false,
}