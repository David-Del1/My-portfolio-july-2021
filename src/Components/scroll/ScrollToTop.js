import React, { useEffect, useState } from 'react';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import styled from 'styled-components';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if(window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <ArrowStyled>
      <ArrowUpwardRoundedIcon onClick={scrollToTop} className={ isVisible ? 'visible' : 'invisible' } />
    </ArrowStyled>
  )
}

export default ScrollToTop

const ArrowStyled = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
  z-index: 1000;
  cursor: pointer;

  .visible {
    opacity: 1;
    color: var(--primary-color);
    background-color: var(--border-color);
    border-radius: 50%;
    font-size: 2rem;
    box-shadow: 0px 0px 5px 0px black;
    transition: opacity ease-in-out 0.5s;
  }

  .invisible {
    opacity: 0;
    color: var(--primary-color);
    background-color: var(--border-color);
    border-radius: 50%;
    font-size: 2rem;
    box-shadow: 0px 0px 5px 0px black;
    transition: opacity ease-in-out 0.5s;
  }
`;

