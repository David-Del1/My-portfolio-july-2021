import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import blogs from '../data/blogs.js';
import Title from '../Components/Title';
import {MainLayout, InnerLayout} from '../styles/Layout.js';

function Blog() {
  return (
    <MainLayout>
      <BlogsStyled>
        <Title title={"Blog"} span={"Blog"}/>
        <InnerLayout className={'blog'}>
      {
        blogs.map(blog => {
          
          return <Link to={blog.link} key={blog.id} className="blog-card">
            <div className="image">
              <img src={blog.image} alt="" />
            </div>
            <div className="title">
              <h4>
                {blog.title}
              </h4>
            </div>
          </Link>
        })
      }
        </InnerLayout>
      </BlogsStyled>
    </MainLayout>
  )
}

const BlogsStyled = styled.div`
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;

    @media only screen and (max-width: 900px) {
      grid-template-columns: repeat(1, 1fr);
    }
    
    .image {
      width: 100%;
      height: 85%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
    }
    

    .blog-card{
      padding: 1rem;
      background-color: var(--background-dark-grey);
      transition: all 0.2s ease-in-out;
      &:hover {
      transform: scale(1.03)
    }
    }
    .title {
      margin-top: 0.5rem;
    }
  }
`

export default Blog
