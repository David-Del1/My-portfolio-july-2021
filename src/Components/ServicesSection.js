import React from 'react';
import styled from 'styled-components';
import { InnerLayout }from '../styles/Layout';
import Title from './Title';
import ServiceCard from './ServiceCard';
import design from '../images/undraw1.svg'
import goals from '../images/undraw-goals.svg'
import undraw2 from '../images/undraw2.svg'

function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesStyled>
        <Title title = {"Highlights"} span={"Highlights"} />
        <div className="services">
          <ServiceCard image={design} title={"TDD"} 
            paragraph={"Employing an array of tools and libraries, product features are rigorously tested following industry-standard coding practices."}/>
          <ServiceCard image={goals} title={"UX/UI"} 
            paragraph={"With an eye for design and inclusivity, I aim to create applications that users from every kind of background and orientation find easy to use and beautiful to look at."}/>
          <ServiceCard image={undraw2} title={"Adaptable"} 
            paragraph={"No matter any unforseens, I remain a resourceful problem solver in team environments as well as working individually."}/>
        </div>
      </ServicesStyled>
    </InnerLayout>
  );
}

const ServicesStyled = styled.section`

  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    margin-top: 4rem;

    @media only screen and (max-width: 1000px) {
    
      grid-template-columns: repeat(1, 1fr);
    }
  }
`

export default ServicesSection;
