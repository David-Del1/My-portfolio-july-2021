import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Particle from '../Components/Particles.js';
// icon imports
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import About from './About.js';
import PortfoliosPage from './Portfolio.js';
import Contact from './Contact.js';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import avatar from '../images/me.jpeg';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Switch from '@material-ui/core/Switch';
import ScrollToTop from '../Components/scroll/ScrollToTop.js';
import Footer from '../Components/footer/Footer.jsx';


function Home() {
  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);

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
    <>
    <HomeStyled>
      <div className="particle-con">
        <Particle />
      </div>
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
      <div className="avatar">
        <img src={avatar} alt="me" />
      </div>
      <div className="typography">
        <h1>Hi, I'm <span>David Delgadillo</span></h1>
        <p>
          I'm a Full Stack software developer based in Orange County, CA.<br /> Welcome to my portfolio site.
        </p>
        <div className="icons">
          <a href="https://www.linkedin.com/in/davidadelgadillo/" className="i-linkedIn icon" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/David-Del1" target="_blank" className="i-github icon" rel="noreferrer">
            <GithubIcon />
          </a>
          <a href="https://twitter.com/DavidDel_" target="_blank" className="i-twitter icon" rel="noreferrer">
            <TwitterIcon />
          </a>
        </div>
      </div>
      <ArrowDownwardIcon className="down-arrow" />
    <ScrollToTop />
    </HomeStyled>
    <PortfoliosPage />
    <About />
    <Contact />
    <Footer />
    </>
  )
}

const HomeStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;

  .avatar {
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
    z-index: 10;
    
    img {
      height: 200px;
      width: 200px;
      object-fit: cover;
      object-position: 0 -10px;
      border-radius: 50%;
      border: 8px solid var(--border-color);
      box-shadow: 0px 0px 5px 0px black;
    }

    @media only screen and (max-width: 800px) {
      
      img {
        height: 200px;
        width: 200px;
      }
    }
    @media only screen and (max-width: 550px) {
      
      img {
        height: 180px;
        width: 180px;
      }
    }
    @media only screen and (max-width: 420px) {
      
      img {
        height: 150px;
        width: 150px;
      }
    }
    @media only screen and (max-width: 320px) {
      
      img {
        height: 120px;
        width: 120px;
      }
    }
  }

  .theme {
    position: absolute;
    bottom: 10%;
    right: 0;
  }

  .particle-con {
    position: absolute;
    top: 0;
    left: 0;
  }

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;

    p {
      padding: 1rem 1rem;
    }

    @media only screen and (max-width: 600px) {
      p {
        font-size: 1rem;
      }
    }
    @media only screen and (max-width: 400px) {
      h1 {
        padding: 0 0.5rem;
      }
      p {
        font-size: 1rem;
        padding: 0.6rem 1rem;
      }
    }

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        margin: 0 0.5rem;
        transition: all ease-in-out 0.2s;
        svg {
          margin: 0.5rem;
        }
        }
        .i-linkedIn {
          &:hover {
            color: #0c66c2;
            border: 2px solid #0c66c2;
          }
        }
        .i-github {
          &:hover {
            color: #f4c8B2;
            border: 2px solid #f4c8B2;
          }
        }
        .i-twitter{
          &:hover {
            color: #1fa1f1;
            border: 2px solid #1fa1f1
          }
        }

  }}

  .down-arrow {
    font-size: 3.5rem;
    position: absolute;
    bottom: 15%;
    animation-name: floating; 
    animation-duration: 3s; 
    animation-iteration-count: infinite; 
    animation-timing-function: ease-in-out;
  }

  @keyframes floating { 
    0% { transform: translate(0,  0px); } 
    50%  { transform: translate(0, 20px); } 
    100%   { transform: translate(0, -0px); }     
}
`;
export default Home
