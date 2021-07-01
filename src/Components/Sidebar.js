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
`

export default Sidebar
