import React from 'react';
import styled from 'styled-components';

function ResumeItem({year, title, subTitle, text}) {
  return (
    <ResumeItemStyled>
      <div className="left-content">
        <p>{year}</p>
      </div>
      <div className="right-content">
        <h5>{title}</h5>
        <h6>{subTitle}</h6>
        <p>{text}</p>
      </div>
      
    </ResumeItemStyled>
  );
}

const ResumeItemStyled = styled.div`
  display: flex;

  padding-bottom: 3rem;

  .left-content {
    width: 50%;
    padding-left: 20px;
    position: relative;
    &::before{
      content: '';
      position: absolute;
      left: -9px;
      top: 5px;
      height: 17px;
      width: 17px;
      border-radius: 50%;
    
      background-color: var(--border-color);
    }
    p {
      display: inline-block;
    }
  }
  .right-content {
    padding-left: 5rem;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 15px;
      height: 2px;
      width: 3rem;
      background-color: var(--border-color);
    }
    h5 {
      color: var(--primary-color);
      font-size: 2rem;
      padding-bottom: 0.4rem;
    }
    h6 {
      padding-bottom: 0.6rem;
      font-size: 1.5rem;
    }
  }
`

export default ResumeItem
