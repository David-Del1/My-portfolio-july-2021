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
      display: flex;
      flex-wrap: wrap;

      .container {
        padding: 1rem;
        margin: 0.4rem;
        width: 420px;
        border-radius: 15px;
        background-color: var(--background-dark-grey);
      }

      h2 {
        font-size: 1.7rem;
        padding: 0 0.2rem;
        color: var(--white-color);
        opacity: 0.8;
        border-bottom: 1px solid var(--border-color);
      }

      li {
        padding: 0.5rem 0.5rem;
        margin: 0.5rem 0;
        
        border-radius: 10px;
        background-color: var(--border-color);
      }
    }
  @media screen and (max-width: 700px) {
    padding: 2rem 0;
  }
`;