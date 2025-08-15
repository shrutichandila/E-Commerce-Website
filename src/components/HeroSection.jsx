import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <HeroContainer>
      <Div1>
        <p className="pw">WELCOME TO,</p>
        <h1>Trend Era</h1>
        <p>🛍️ 
Step into a seamless shopping experience where style, quality, and value come together. From trendsetting fashion to everyday essentials, we bring you handpicked collections designed to inspire and elevate your lifestyle. Start exploring now—because you deserve the best, delivered to your door.</p>
      </Div1>
      <Div2>
        <StyledImage
          src="hero.jpg"
          alt="Hero"
        />
      </Div2>
    </HeroContainer>
  );
};

export default HeroSection;

const HeroContainer = styled.section`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Div1 = styled.div`
  flex: 1;
  min-width: 300px;

  .pw {
    font-size: 0.9rem;
    letter-spacing: 2px;
    font-weight: bold;
    color: #555;
  }

  h1 {
    font-size: clamp(1.8rem, 5vw, 3rem);
    margin: 0.5rem 0;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const Div2 = styled.div`
  flex: 1;
  min-width: 300px;
  margin-top: 1.5rem;
`;

const StyledImage = styled.img`
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
`;
