import React from 'react';
import styled from 'styled-components';

function ServiceCard({image, title, paragraph}) {
  return (
    <ServiceCardStyled>
      <div className="container">
        <img src={image} alt="" />
        <h4>{title}</h4>
        <p>{paragraph}</p>
      </div>
    </ServiceCardStyled>
  );
}

const ServiceCardStyled = styled.div`
margin: 0 0.3rem;
background-color: var(--sidebar-dark-color);
box-shadow: 0px 0px 5px 0px black;
border-left: 1px solid var(--border-color);
border-right: 1px solid var(--border-color);
border-bottom: 1px solid var(--border-color);
border-top: 8px solid var(--border-color);
transition: all ease-in-out 0.2s;
&:hover {
  border-top: 8px solid var(--primary-color);
  transform: scale(1.01);
}
.container {
  padding: 0.8rem;
}
  img {
    height: 120px;
  }

  h4 {
    color: var(--white-color);
    font-size: 1.2rem;
    padding: 1rem 0;
    position: relative;
    &::after {
      content: '';
      width: 13rem;
      background-color: var(--border-color);
      height: 4px;
      position: absolute;
      left: 0;
      bottom: 0;
      border-radius: 10px;
    }
  }

  p {
    padding: 0.8rem 0;
  }
`

export default ServiceCard;
