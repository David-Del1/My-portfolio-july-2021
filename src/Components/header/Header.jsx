import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if(window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <HeaderStyled>
      <div className={isVisible ? 'nav-link-container' : 'hidden'}>
        <h1>David Delgadillo</h1>

      </div>
    </HeaderStyled>
  )
}

export default Header

const HeaderStyled = styled.header`

.nav-link-container {
  display: flex;
  align-items: center;
  height: 10vh;
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: var(--border-color);
  z-index: 1001;
  transition: top ease-in-out 0.5s;
  border-bottom: 1px solid black;
  h1 {
    padding: 1rem;
    font-size: 1.8rem;
    font-weight: 400;

    @media only screen and (max-width: 600px) {
      font-size: 1.5rem;
    }
  }
}

.hidden {
  display: flex;
  align-items: center;
  height: 10vh;
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: var(--border-color);
  z-index: 1001;
  top: -500px;
  transition: top ease-in-out 0.5s;
  h1 {
    font-size: 1.8rem;
    font-weight: 400;
  }
}

`;
