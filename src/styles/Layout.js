import styled from 'styled-components';

export const MainLayout = styled.div`
  padding: 2rem;

  @media screen and (max-width: 700px) {
    padding: 1rem;
  }
`;

export const InnerLayout = styled.div`
  padding: 4rem 0;

  .tech-stack {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    @media screen and (max-width:920px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:670px){
        grid-template-columns: repeat(1, 1fr);
    }

      .container {
        padding: 1rem;
        border-radius: 15px;
        background-color: var(--background-dark-grey);
      }

      h2 {
        font-size: 1.7rem;
        padding: 0 0.2rem;
        color: var(--white-color);
      }

      li {
        padding: 0.5rem 0.5rem;
        margin: 0.5rem 0;
        border-bottom: 1px solid var(--border-color);
        width: 95%;
      }
    }
  @media screen and (max-width: 700px) {
    padding: 2rem 0;
  }
`;