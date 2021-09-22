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
            paragraph={"Practiced in testing libraries such as QUnit and Jest to ensure product features are rigorously tested following industry-standard coding practices."}/>
          <ServiceCard image={goals} title={"MVC Architecture"} 
            paragraph={"Capable of employing MVC architecture principles to create a modular and maintainable code base with reusable components."}/>
          <ServiceCard image={undraw2} title={"Visualization Tools"} 
            paragraph={"Good software starts with good planning. Proficient with design software such as Adobe XD/Illustrator to create wireframes and produce tangible blueprints."}/>
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
