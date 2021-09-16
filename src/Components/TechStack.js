import React from 'react';
import {InnerLayout} from '../styles/Layout.js';
import Title from './Title';

function Skills() {
  return (
    <>
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
        </>
  );
}

export default Skills;
