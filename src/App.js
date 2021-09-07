
import React from 'react';
import styled from 'styled-components'
import Home from './Pages/Home';

function App() {
  return (
  <AppStyled>
      <MainContentStyled>
          <Home />
      </MainContentStyled>
  </AppStyled>

  );
}

const MainContentStyled = styled.main`
  position: relative;
  min-height: 100vh;

  
  @media only screen and (max-width: 1100px) {
    margin-left: 0;
  }
`;

const AppStyled = styled.div`


  .light-dark-mode {
    

    opacity: 0.8;
  }
`
export default App;
