import React from 'react';
import styled from 'styled-components';

function PrimaryButton({title}) {
  return (
    <PrimaryButtonStyled>
      {title}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.a`
  background-color: var(--primary-color);
  padding: 0.5rem 2rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all ease-in-out .2s;
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 10%;
    transition: all ease-in-out .2s;
    left: 0;
    bottom: 0;
    opacity: 0.8;
  }
  &:hover::after {
    width: 100%;
    background-color: var(--white-color);
    
  }
`
export default PrimaryButton;
