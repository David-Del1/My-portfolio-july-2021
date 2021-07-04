import { Route, Switch as Switching } from 'react-router-dom';
import { useState, useEffect } from 'react';
import About from './Pages/About';
import ResumePage from './Pages/ResumePage';
import Portfolio from './Pages/Portfolio';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import styled from 'styled-components'
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Switch from '@material-ui/core/Switch';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from "@material-ui/core";


function App() {
  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState();

  useEffect(() => {
    document.documentElement.className= theme;
  }, [theme]);

  const themeToggle = () => {
    if(theme === 'light-theme'){
      setTheme('dark-theme');
      setChecked(false);
      
    } else {
      setTheme('light-theme');
      setChecked(true);
      
    }
  }
  return (
  <div className="App">
      <Sidebar />
      <div className="theme">
        <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4Icon />
          </div>
          <div className="right-content">
            <Switch 
              value=""
              checked={checked}
              inputProps={{'aria-label': ''}}
              size="medium"
              onClick={themeToggle}/>
          </div>
      </div>
      </div>

      <div className="hamburger-menu">
        <IconButton>
          <MenuIcon />
        </IconButton>
      </div>

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

        

        <Switching>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/resume">
            <ResumePage />
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
        </Switching>

        
      </MainContentStyled>
   </div>

  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media only screen and (max-width: 1100px) {
    margin-left: 0;
  }
  

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
