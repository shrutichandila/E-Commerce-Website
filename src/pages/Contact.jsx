import React, { useState } from 'react';
import styled from 'styled-components';

const Contact = () => {
 

  return (
    <>
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <Divh>Reach Out to Our Team</Divh>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.26131732789!2d73.91411937527099!3d18.5622539825394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1751022881711!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <FormWrapper>
        <h2>Contact Us</h2>
        <form action='https://formspree.io/f/mldnagqj' method='POST'>
          <input
            type="text"
            name="name"
     
         
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
    
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
         
         
            placeholder="Your Message"
            rows="5"
            required
            
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </FormWrapper>
    </>
  );
};

export default Contact;



const Divh = styled.h2`
  text-align: center;
`;

const FormWrapper = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fafafa;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);

  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #333;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input,
  textarea {
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
  }

  button {
    padding: 0.75rem;
    font-size: 1rem;
    background: #0077ff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: #005ce6;
    }
  }
`;
