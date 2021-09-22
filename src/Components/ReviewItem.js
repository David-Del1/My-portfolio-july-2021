import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ReviewItem() {

  const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 6500,
      cssEase: "ease-in-out",
      swipeToSlide: true,
      arrows: false,
      
    };
  return (
    <>
    <ReviewItemStyled>
      <Slider {...settings}>
        <div>
          <p className="review-text">"David is a dedicated developer. He always comes up with eloquent solutions to complicated problems. He’s enthusiastic and goes above and beyond to mentor his peers."</p>
          <p className="reviewer-name">Tucker Hogg</p>
        </div>
        <div>
          <p className="review-text">"I have been very impressed with David. He learns quickly, and is ready to take on any challenge. I think David would no doubt be a positive addition to any team he is on. I have taught hundreds of students and David has some of the highest potential I've seen."</p>
          <p className="reviewer-name">Devonta Johnson</p>
        </div>
        <div>
          <p className="review-text">
           David consistently went above and beyond in projects. He was a pleasure to work with and contributed professional, clean, and well tested code during his collaborations. David is a great software engineer and an awesome person to work with.
          </p>
          <p className="reviewer-name">Dan Bennington</p>
        </div>
      </Slider>
    </ReviewItemStyled>
    </>
  );
}

const ReviewItemStyled = styled.div`
  width: 60vw;
  background-color: var(--background-dark-grey);
  padding: 2rem 1rem;
  border-left: 6px solid var(--primary-color);
  border-radius: 10px;
  position: relative;

  @media only screen and (max-width: 1000px) {
      width: 90vw;
    }

  &::after {
    content: '';
    position: absolute;
    left: 2rem;
    border-width: .8rem;
    top: 100%;
    border-style: solid;
    border-color: var(--background-dark-grey) transparent transparent var(--background-dark-grey);
  }

  .review-text {
    font-size: 1rem;
    font-style: italic;
    padding: 0 0.5rem;
    width: 100%;
  }

  .reviewer-name {
    text-align: right;
    padding: 0.5rem;
  }
`;

export default ReviewItem;
