import React from 'react';
import styled from 'styled-components';

function Title({title, span}) {
  return (
    <TitleStyled>
      <h2>{title} <span>{span}</span></h2>
    </TitleStyled>
  )
}

const TitleStyled = styled.div`
  position: relative;
  h2 {
    color: var(--white-color);
    font-size: 3.8rem;
    font-weight: 600;
    position: relative;
    padding-bottom: 0.6rem;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 9rem;
      height: .33rem;
      background-color: var(--background-light-color-2);
      border-radius: 5px;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 7rem;
      height: .33rem;
      background-color: var(--primary-color);
      border-radius: 5px;
      left: 0;
      opacity: 0.6;
    }
    span {
      font-size: 5rem;
      font-weight: 900;
      color: lightblue;
      opacity: 0.15;
      position: absolute;
      left: 0;
      top: 20%;
      z-index: -1;
    }
  }
`

export default Title;
