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
       
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci suscipit reprehenderit nobis. Illum quo fugiat accusantium maxime rem unde tempora!
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name:</p>
            <p>Age:</p>
            <p>Languages:</p>
            <p>Location:</p>
            <p>Services:</p>
          </div>
          <div className="info">
            <p> David A. Delgadillo</p>
            <p> 25</p>
            <p> English, Spanish</p>
            <p> CA, USA</p>
            <p> Dev</p>
          </div>
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
`;

export default ImageSection;
