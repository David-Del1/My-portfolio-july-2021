import React from 'react';
import styled from 'styled-components';
import GetAppIcon from '@material-ui/icons/GetApp';
import resume from '../images/resume.pdf';


function PrimaryButton({title}) {
  return (
    <PrimaryButtonStyled>
      <a href={resume} download>

        {title}
      </a>
      <GetAppIcon />
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.a`
  background-color: var(--primary-color);
  padding: 0.5rem;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  width: 300px;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all ease-in-out .2s;
  z-index: 100;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 100%;
    transition: all ease-in-out .3s;
    left: 0;
    bottom: 0;
    opacity: 0.8;
    
  }
  &:hover {
    color: var(--primary-color);
  }
  &:hover::after {
    width: 100%;
    z-index: -1;
    background-color: var(--white-color);
    
  }
`
export default PrimaryButton;
