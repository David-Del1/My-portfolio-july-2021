import React from 'react';
import styled from 'styled-components';
import { MainLayout }from '../styles/Layout';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';

function About() {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={'About me'} span={'About me'} />
        <ImageSection />
      </AboutStyled>
    </MainLayout>
    
  );
}

const AboutStyled = styled.section`

`

export default About;
