import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layout';
import ReviewItem from './ReviewItem';
import Title from './Title';

function ReviewsSection() {
  return (
    
      <ReviewsStyled>
        <Title title={'Testimonials'} span={'Testimonials'}/>
        <InnerLayout>
          <div className="reviews">
            <ReviewItem text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam saepe iusto illo quisquam, iste similique architecto adipisci consequatur recusandae.'}/>
            <ReviewItem text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam saepe iusto illo quisquam, iste similique architecto adipisci consequatur recusandae.'}/>
          </div>
        </InnerLayout>
      </ReviewsStyled>
    
  );
}

const ReviewsStyled = styled.section`
  .reviews {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    @media only screen and (max-width: 1000px) {
      grid-row-gap: 3rem;
      grid-template-columns: repeat(1, 1fr);
    }
}
`;

export default ReviewsSection;
