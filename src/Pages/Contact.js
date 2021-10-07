import React, { useState } from 'react';
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../styles/Layout.js';
import Title from '../Components/Title';
import ContactItem from '../Components/ContactItem.js';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import EmailIcon from '@material-ui/icons/Email';

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function Contact() {
  const [formData, setFormData] = useState(initialState);

  const phone = <PhoneIphoneOutlinedIcon />
  const email = <EmailIcon />

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "contact": "contact", ...formData })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <MainLayout>
      <Title title={'Contact'} span={'Contact'}/>
      <ContactStyled>
        <InnerLayout className={'contact-section'}>
          <div className="left-content">
            <form className="form" name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true" onSubmit={handleSubmit}>
            <input type="hidden" name="contact" />
              <div className="form-field">
                <label htmlFor="name">Enter Your Name <span>*</span></label>
                <input id="name" name="name" type="text" required onChange={handleChange} />
              </div>
              <div className="form-field">
                <label htmlFor="email">Enter Your Email <span>*</span></label>
                <input id="email" name="email" type="text" required onChange={handleChange} />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Subject <span>*</span></label>
                <input id="subject" name="subject" type="text" required onChange={handleChange}/>
              </div>
              <div className="form-field">
                <label htmlFor="text-area">Enter Your Message</label>
                <textarea id="textarea" name="message" type="textarea" cols="30" rows="12" required onChange={handleChange} />
                <div>
                  <div data-netlify-recaptcha="true"></div>
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="right-content">
          
            <ContactItem title={'Phone'} icon={phone} cont1={'+1(909)731-4075'} />
            <a href="mailto:daviddel.731@gmail.com">
              <ContactItem title={'Email'} icon={email} cont1={'DavidDel.731@gmail.com'} />
            </a>
          </div>
          
        </InnerLayout>
      </ContactStyled>
    </MainLayout>
    
  );
}

const ContactStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content, .right-content a{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background-color: var(--background-dark-color);
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                  font-size: 1rem;
                    background-color: var(--background-dark-color);
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
                span {
                  color: var(--primary-color);
                }
              }
              
              button {
                margin: 1rem 0;
                padding: 0.6rem;
                width: 100%;
                background-color: var(--primary-color);
                border: none;
                border-radius: 5px;
                color: white;
                outline: none;
                cursor: pointer;
              }
        }
    }
`;

export default Contact;
