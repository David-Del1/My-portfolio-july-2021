
import React from 'react';
import styled from 'styled-components'
import Home from './Pages/Home';

function App() {


  return (
  <div>
      <MainContentStyled>
        <div className="lines">

          
        </div>
          <Home />
      </MainContentStyled>
  </div>

  );
}

const MainContentStyled = styled.main`
  position: relative;
  min-height: 100vh;

  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.5;
    z-index: -1;
    .line-1, .line-2, .line-3, .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
      opacity: 0.5;
    }
  }

  
  @media only screen and (max-width: 1100px) {
    margin-left: 0;
  }
`;

export default App;
