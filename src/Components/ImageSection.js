import React from 'react';
import styled from 'styled-components';
import mock from '../images/me.jpeg'
import PrimaryButton from './PrimaryButton';


function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={mock} alt="" />
      </div>
      <div className="right-content">
        <h4>Fullstack <span>Developer.</span></h4>
        <h4>Problem <span>Solver.</span></h4>
        <div className="description">
          <p> <span>Profile:</span> Software Engineer who loves coding and technology. A self-starter dedicated to creating practical, intuitive, and accessible solutions with software. An insatiably curious lifelong learner who's intensely optimistic about human nature and our ability to solve problems.</p>
        </div>
        <PrimaryButton title={'Download Resume'}/>
      </div>
    </ImageSectionStyled>
  )
}

const ImageSectionStyled = styled.div`
  margin-top: 4rem;
  display: flex;

  .left-content{
    width: 100%;
  
    img {
      width: 90%;
      height: 100%;
      object-fit: cover;
      box-shadow: 0px 0px 5px 0px black;
    }
  }
  .right-content{
    
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span{
        font-size: 2rem;
        color: var(--primary-color);
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.5rem;
      .info-title {
        padding-right: 4rem;
        p{
          font-weight: 600;
        }
      }
      .info-title, .info {
        p{
          padding: 0.5rem 0;
        }
      }
    }
  }

  .description {
    margin: 1rem 0;

    span {
    color: var(--primary-color);
    font-weight: 800;
    }
  }

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
`;

export default ImageSection;
