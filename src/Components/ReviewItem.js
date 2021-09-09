import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const reviews = [
  {
    name: 'Johnny',
    text: 'Lorem ipsum'
  },
  {
    name: 'Kelly',
    text: 'Lorem ipsum'
  },
  {
    name: 'Nick',
    text: 'Lorem ipsum'
  },
  {
    name: 'Fred',
    text: 'Lorem ipsum'
  },
]

function ReviewItem() {

  const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5500,
      cssEase: "ease-in-out",
      swipeToSlide: true,
      arrows: false,
      
    };
  return (
    <ReviewItemStyled>
      <Slider {...settings}>
        <div>
          <p className="review-text">"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex earum reiciendis fuga ipsum fugiat vitae neque expedita eum amet animi."</p>
          <p className="reviewer-name">{reviews[0].name}</p>
        </div>
        <div>
          <p className="review-text">"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex earum reiciendis fuga ipsum fugiat vitae neque expedita eum amet animi."</p>
          <p className="reviewer-name">{reviews[1].name}</p>
        </div>
        <div>
          <p className="review-text">"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex earum reiciendis fuga ipsum fugiat vitae neque expedita eum amet animi."</p>
          <p className="reviewer-name">{reviews[2].name}</p>
        </div>
      </Slider>
    </ReviewItemStyled>
  );
}

const ReviewItemStyled = styled.div`
  width: 40vw;
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
    font-style: italic;
    padding: 0 0.5rem;
  }

  .reviewer-name {
    text-align: right;
    padding: 0.5rem;
  }
`;

export default ReviewItem;
