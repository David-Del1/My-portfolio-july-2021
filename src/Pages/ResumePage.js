import React from 'react';
import Title from '../Components/Title';
import styled from 'styled-components';
import mock from '../images/mock.png';
import { MainLayout, InnerLayout } from '../styles/Layout';
import PrimaryButton from '../Components/PrimaryButton';
import Skills from '../Components/Skills';
import Resume from '../Components/Resume';

function ResumePage() {
  return (
    <MainLayout>
      <ResumeStyled>
        <Skills />
        
        <Resume />
      </ResumeStyled>
    </MainLayout>
  );
}

const ResumeStyled = styled.div`

`

export default ResumePage;
