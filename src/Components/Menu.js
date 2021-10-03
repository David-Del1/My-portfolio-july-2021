import React from 'react';
import styled from 'styled-components';
import GitHub from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';

function Menu({menuItem}) {
  return (
        <MenuItemStyled >
            {
            menuItem.map((item)=>{
                return <div className="grid-item" key={item.id}>
                    <div className="portfolio-content">
                        <div className="portfolio-image">
                            <video
                            // src={item.image} 
                            // alt=""
                            // controls
                            autoPlay
                            loop={true}
                            >
                              <source src={item.image} />
                            </video>
                            <ul>
                                <li>
                                    <a href={item.link1} target="_blank" rel="noreferrer">
                                        <GitHub />
                                    </a>
                                </li>
                                <li>
                                    <a href={item.link2} target="_blank" rel="noreferrer">
                                        <LaunchIcon />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <h6>{item.title}</h6>
                        <p className="tech_stack">{item.techStack}</p>
                        <p>{item.text}</p>
                    </div>
                </div>
            })
            }
        </MenuItemStyled>
    )
}

const MenuItemStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    @media screen and (max-width:920px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:670px){
        grid-template-columns: repeat(1, 1fr);
    }
    .grid-item{
        background-color: var(--background-dark-grey);
        padding: 1rem;
        border: 1px solid var(--border-color);
        border-radius: 10px;
        .portfolio-content{
            display: block;
            position: relative;
            overflow: hidden;
            h6{
                font-size: 1.5rem;
            }
            video{
                width: 100%;
                height: 30vh;
                object-fit: contain;
                transition: all ease-in-out 0.2s;
                &:hover {
                    filter: blur(2px);
                }
            }
            p {
                font-size: 1rem;
            }

            .tech_stack {
              font-size: 0.8rem;
              margin-bottom: 10px;
              opacity: 0.6;
            }
            ul{
                display: flex;
                transform: translateY(-600px);
                transition: all .4s ease-in-out;
                position: absolute;
                left: 50%;
                top: 40%;
                opacity: 0;
                li{
                        background-color: var(--border-color);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 1rem;
                        border-radius: 50%;
                        width: 3rem;
                        height: 3rem;
                        margin: 0 .5rem;
                        transition: all .4s ease-in-out;
                        &:hover{
                            background-color: var(--primary-color);
                        }
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all .4s ease-in-out;
                        }
                    }
            }
            .portfolio-image:hover{
                ul{
                    transform: translateY(0);
                    transform: translate(-50%, -50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all .3s ease-in-out;
                    opacity: 1;
                    height: 0;
                    li{
                        transition: all .4s ease-in-out;
                        margin-bottom: 3rem;
                        &:hover{
                            background-color: var(--primary-color);
                        }
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all .4s ease-in-out;
                        }
                    }
                    li:hover{
                        svg{
                            color: var(--white-color);
                        }
                    }
                    svg{
                        font-size: 2rem;
                        
                    }
                }
            }
        }
    }
`;

export default Menu;
