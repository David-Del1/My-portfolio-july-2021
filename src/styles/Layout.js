import styled from 'styled-components';

export const MainLayout = styled.div`
  padding: 2rem;

  @media screen and (max-width: 700px) {
    padding: 1rem;
  }
`;

export const InnerLayout = styled.div`
  padding: 4rem 0;
  @media screen and (max-width: 700px) {
    padding: 2rem 0;
  }
`;