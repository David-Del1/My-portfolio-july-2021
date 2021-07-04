import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

function Sidebar() {
  return (
    <SidebarStyled>
      <Nav />
    </SidebarStyled>
  );
}

const SidebarStyled = styled.div`
  width: 16.3rem;
  position: fixed;
  height: 100vh;
  background-color: var(--sidebar-dark-color);
  overflow: hidden;
  transition: all 1s ease-in-out;
  @media only screen and (max-width: 1100px) {
    transform: translateX(-100%);
  }
`

export default Sidebar
