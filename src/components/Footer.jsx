import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <ContactDetails>
        <p>📞 +91-9876543210</p>
        <p>📧 example@gmail.com</p>
        <p>📍 Phoenix Marketcity, Pune, India</p>
      </ContactDetails>
      <SocialIcons>
        <a href="https://www.linkedin.com/in/gaurav-singh-72a455313/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={28} />
        </a>
        <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={28} />
        </a>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background: linear-gradient(to right, #060073, #140466);
  color: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: center;
    gap: 4rem;
  }
`;

const ContactDetails = styled.div`
  font-size: 0.95rem;
  line-height: 1.6;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;

  a {
    color: #fff;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.2);
      color: #e3e3e3;
    }
  }
`;
