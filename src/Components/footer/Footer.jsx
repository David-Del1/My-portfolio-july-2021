import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterStyled>
      <p>&copy;2021. Created by David Delgadillo. All Rights Reserved.</p>
    </FooterStyled>
  )
}

export default Footer;

const FooterStyled = styled.footer`
  border-top: 1px solid var(--border-color);
  width: 100%;
  text-align: center;
    p{
      padding: 0.5rem 0;
      font-size: 1rem;
      opacity: 0.6;
    }
`;
