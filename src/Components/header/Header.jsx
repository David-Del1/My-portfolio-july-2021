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
        <ul>
          <li>Portfolio</li>
          <li>About</li>
          <li>Tech Stack</li>
          <li>Contact</li>
        </ul>

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
  ul {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
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
  ul {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }
}

`;
