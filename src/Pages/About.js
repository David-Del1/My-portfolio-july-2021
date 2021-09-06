import React from 'react';
import styled from 'styled-components';
import { MainLayout }from '../styles/Layout';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import ServicesSection from '../Components/ServicesSection';
import ReviewsSection from '../Components/ReviewsSection';
import Skills from '../Components/TechStack.js';

function About() {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={'About me'} span={'About me'} />
        <ImageSection />
        <ServicesSection />
        <Skills />
        <ReviewsSection />
      </AboutStyled>
    </MainLayout>
    
  );
}

const AboutStyled = styled.section`
  
`

export default About;
