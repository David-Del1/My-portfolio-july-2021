import { Route, Switch } from 'react-router-dom';
import About from './Pages/About';
import Resume from './Pages/Resume';
import Portfolio from './Pages/Portfolio';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import styled from 'styled-components'
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';

function App() {
  return (
   <div className="App">
      <Sidebar />
      <MainContentStyled>
        <div className="lines">

          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
          <div className="line-4"></div>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/resume">
            <Resume />
          </Route>

          <Route exact path="/portfolio">
            <Portfolio />
          </Route>

          <Route exact path="/blog">
            <Blog />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>

        
      </MainContentStyled>
   </div>

  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
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
`;
export default App;
