import React from 'react';
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../styles/Layout.js';
import Title from './Title';
import Progress from './Progress';

function Skills() {
  return (
    <SkillsStyled>
  
        <Title title={'Languages'} span={"Languages"} />
        <InnerLayout>
          <div className="skills">
            <Progress 
              title={'HTML5'}
              width={'90%'}
              text={'Great'}/>
            <Progress 
              title={'CSS/SASS'}
              width={'90%'}
              text={'Great'}/>
            <Progress 
              title={'JavaScript'}
              width={'90%'}
              text={'Great'}/>
            <Progress 
              title={'React JS'}
              width={'80%'}
              text={'Good'}/>
            <Progress 
              title={'SQL'}
              width={'80%'}
              text={'Good'}/>
            <Progress 
              title={'Python'}
              width={'60%'}
              text={'OK'}/>
            <Progress 
              title={'Python'}
              width={'60%'}
              text={'OK'}/>
            <Progress 
              title={'Python'}
              width={'60%'}
              text={'OK'}/>
          </div>
        </InnerLayout>
  
    </SkillsStyled>
  );
}

const SkillsStyled = styled.div`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
  }
`

export default Skills;
