import React from 'react';
import styled from 'styled-components';

function Progress({title, width, text}) {
  return (
    <ProgressStyled>
      <h6>{title}</h6>
      <div className="progress-bar">
        <p>{text}</p>
        <div className="progress">
          <span style={{width}}></span>
        </div>
      </div>
    </ProgressStyled>
  );
}

const ProgressStyled = styled.div`
  .progress-bar {
    display: flex;
    align-items: center;
    p {
      padding-right: 1.2rem;
    }
    .progress {
      position: relative;
      width: 100%;
      height: .4rem;
      background-color: var(--border-color);
      span {
        background-color: var(--primary-color);
        position: absolute;
        left: 0;
        bottom: 0;
        height: 100%;
      }
    }
  }
`

export default Progress;
