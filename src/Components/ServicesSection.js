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
        <Title title = {"Skillsets"} span={"Skillsets"} />
        <div className="services">
          <ServiceCard image={design} title={"Web Design"} 
            paragraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quod repellendus ducimus aut doloremque vel facere quidem est vero quis."}/>
          <ServiceCard image={goals} title={"Web Design"} 
            paragraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quod repellendus ducimus aut doloremque vel facere quidem est vero quis."}/>
          <ServiceCard image={undraw2} title={"Web Design"} 
            paragraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quod repellendus ducimus aut doloremque vel facere quidem est vero quis."}/>
        </div>
      </ServicesStyled>
    </InnerLayout>
  );
}

const ServicesStyled = styled.section`

  .services {
    display: flex;
    
    margin-top: 4rem;
  }
`

export default ServicesSection;
