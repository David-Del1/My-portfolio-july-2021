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

    @media screen and (max-width: 800px) {
        font-size: 3rem;
      
      }
      @media screen and (max-width: 650px) {
        font-size: 2.5rem;
        
      }
    span {
      font-size: 5rem;
      font-weight: 900;
      color: var(--font-dark-color);
      opacity: 0.4;
      position: absolute;
      left: 0;
      top: 20%;
      z-index: -1;
      text-decoration: line-through var(--background-light-color-2) 5px;

      @media screen and (max-width: 800px) {
        font-size: 4rem;
        
      }
      @media screen and (max-width: 650px) {
        font-size: 3rem;
        
      }
    }
  }
`

export default Title;
