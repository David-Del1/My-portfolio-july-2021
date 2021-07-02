import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Particle from '../Components/Particles.js';
// icon imports
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

function Home() {
  return (
    <HomeStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>Hi, I'm <span>David Delgadillo</span></h1>
        <p>
          I'm a fullstack software developer based in Orange County, CA!<br /> Welcome to my portfolio site.
        </p>
        <div className="icons">
          <Link to="/" className="i-linkedIn icon">
            <LinkedInIcon />
          </Link>
          <Link to="/" className="i-github icon">
            <GithubIcon />
          </Link>
          <Link to="/" className="i-twitter icon">
            <TwitterIcon />
          </Link>
        </div>
      </div>
    </HomeStyled>
  )
}

const HomeStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

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
`;
export default Home
