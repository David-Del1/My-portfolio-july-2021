import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layout.js';
import Title from './Title';

function Skills() {
  return (
    <SkillsStyled>
  
        <Title title={'Tech Stack'} span={"Tech Stack"} />
        <InnerLayout>
          <div className="tech-stack">
            <div className="container">
              <h2>Languages</h2>
              <ul>
                <li>JavaScript</li>
                <li>Python</li>
                <li>HTML/CSS</li>
                <li>SASS</li>
              </ul>
            </div>
            <div className="container">
              <h2>Libs/Frameworks</h2>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>Angular</li>
                <li>Node</li>
                <li>Express</li>
              </ul>
            </div>
            <div className="container">
              <h2>Dev Tools</h2>
              <ul>
                <li>Git/GitHub</li>
                <li>Heroku</li>
                <li>Postman</li>
              </ul>
            </div>
            <div className="container">
              <h2>Databases</h2>
              <ul>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div className="container">
              <h2>Testing Suites</h2>
              <ul>
                <li>Jest</li>
                <li>QUnit</li>
                <li>React Testing Library</li>
              </ul>
            </div>

          </div>
        
        </InnerLayout>
  
    </SkillsStyled>
  );
}

const SkillsStyled = styled.div`
  .skills {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    @media screen and (max-width:920px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:670px){
        grid-template-columns: repeat(1, 1fr);
    }
  }
`

export default Skills;
