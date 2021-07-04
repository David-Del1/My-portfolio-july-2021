import React from 'react';
import { InnerLayout } from '../styles/Layout';
import styled from 'styled-components';
import Title from './Title';
import SmallTitle from './SmallTitle';
import BriefCaseIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from './ResumeItem';

function Resume() {
  const briefcase = <BriefCaseIcon />
  const school = <SchoolIcon />
  return (
    <ResumeStyled>
      <Title title={'Resume'} span={'Resume'} />
      <InnerLayout>
        <div className="description">
          <p> <span>Description:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, doloremque nostrum, labore dolorem unde consequuntur a quos ut neque temporibus blanditiis tempore debitis facilis, eligendi ex perferendis quod dolores cumque. Officia, nisi autem rem ipsam sequi voluptatibus ipsa, quaerat eligendi, placeat doloribus illum iste sapiente? Enim dolorem vitae cupiditate quam?</p>
        </div>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={'Work Experience'} />
        </div>
        <div className="resume-content">
          <ResumeItem year={'2015 - 2020'} title={'Computer Science'}
            subTitle={'Harvard'}
            text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quam voluptatum voluptatibus, harum aperiam nihil vero ex ipsa minima ipsam.'} /> 
          <ResumeItem year={'2015 - 2020'} title={'Computer Science'}
            subTitle={'Harvard'}
            text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quam voluptatum voluptatibus, harum aperiam nihil vero ex ipsa minima ipsam.'} /> 
          <ResumeItem year={'2015 - 2020'} title={'Computer Science'}
            subTitle={'Harvard'}
            text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quam voluptatum voluptatibus, harum aperiam nihil vero ex ipsa minima ipsam.'} /> 
        </div>
        <div className="small-title utility">
            <SmallTitle icon={school} title={'Education'} />
        </div>
        <div className="resume-content ">
          <ResumeItem year={'2015 - 2020'} title={'Computer Science'}
            subTitle={'Harvard'}
            text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quam voluptatum voluptatibus, harum aperiam nihil vero ex ipsa minima ipsam.'} /> 
          <ResumeItem year={'2015 - 2020'} title={'Computer Science'}
            subTitle={'Harvard'}
            text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quam voluptatum voluptatibus, harum aperiam nihil vero ex ipsa minima ipsam.'} /> 
          <ResumeItem year={'2015 - 2020'} title={'Computer Science'}
            subTitle={'Harvard'}
            text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quam voluptatum voluptatibus, harum aperiam nihil vero ex ipsa minima ipsam.'} /> 
        </div>
      </InnerLayout>
    </ResumeStyled>
 
  );
}

const ResumeStyled = styled.div`
  .small-title {
    padding-bottom: 3rem;
  }
  .resume-content {
    border-left: 2px solid var(--border-color);
  }
  .utility {
    margin-top: 3rem;
  }

  .description {
    margin-bottom: 3rem;

    span {
    color: var(--primary-color);
    font-weight: 800;
    }
  }

  
`

export default Resume;
