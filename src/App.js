
import React from 'react';
import styled from 'styled-components'
import Home from './Pages/Home';

function App() {


  return (
  <div>
      <MainContentStyled>
          <Home />
      </MainContentStyled>
  </div>

  );
}

const MainContentStyled = styled.main`
  position: relative;
  min-height: 100vh;

  @media only screen and (max-width: 1100px) {
    margin-left: 0;
  }
`;

export default App;
