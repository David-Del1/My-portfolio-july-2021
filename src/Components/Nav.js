import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import avatar from '../images/me.jpeg';
import { useNavToggle } from '../state/AppProvider';


function Nav() {
  const { navToggle, setNavToggle } = useNavToggle();

  const handleClick = () => {
    setNavToggle(!navToggle);
  }

  return (
    <NavStyled>
      <div className="avatar">
        <img src={avatar} alt="me" />
      </div>
        <ul className="nav-items">
          <li className="nav-item" onClick={handleClick}>
            <NavLink to="/" exact activeClassName="active-class">Home</NavLink>
          </li>
          <li className="nav-item" onClick={handleClick}>
            <NavLink to="/about" exact activeClassName="active-class">About</NavLink>
          </li>
          <li className="nav-item" onClick={handleClick}>
            <NavLink to="/portfolio" exact activeClassName="active-class">Portfolio</NavLink>
          </li>
          {/* <li className="nav-item" onClick={handleClick}>
            <NavLink to="/blog" exact activeClassName="active-class">Blog</NavLink>
          </li> */}
          <li className="nav-item" onClick={handleClick}>
            <NavLink to="/contact" exact activeClassName="active-class">Contact</NavLink>
          </li>
        </ul>
        <footer className="footer">
          <p>&copy;2021. Created by David Delgadillo. All Rights Reserved.</p>
        </footer>
      
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  border-right: 1px solid var(--border-color);
  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;
    
  
    img {
      height: 200px;
      width: 200px;
      object-fit: cover;
      object-position: 0 -10px;
      border-radius: 50%;
      border: 8px solid var(--border-color);
      box-shadow: 0px 0px 10px 0px black;
    }
  }

  .nav-items {
    width: 100%;
    text-align: center;
    .active-class {
      background-color: var(--primary-color-light);
    }
    li {
      display: block;
      a {
        display: block;
        padding: 1.5rem 0;
        position: relative;
        z-index: 10;
        
        &:hover {
          cursor: pointer;
          
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          opacity: 0.2;
          transition: all 0.2s ease-in-out;
          z-index: 3;
        }
      }
      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }

  .footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    text-align: center;
    p{
      padding: 0.5rem 0;
      font-size: 0.6rem;
      opacity: 0.6;
    }
  }
`;

export default Nav
