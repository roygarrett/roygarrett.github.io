import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import {About} from '../components/AboutSection/AboutData';
import {Resume} from '../components/ResumeSection/ResumeData';
import {Contact} from '../components/ContactSection/ContactData';
import Projects from '../components/Projects';
import AboutSection from '../components/AboutSection';
import ResumeSection from '../components/ResumeSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <AboutSection {...About}/>
      <Projects />
      <ResumeSection {...Resume}/>
      <ContactSection {...Contact}/>
      <Footer />
    </>
  );
};

export default Home;
