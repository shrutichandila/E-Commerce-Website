import { useContext } from "react";
import HeroSection from "../components/HeroSection";
import { AppContext } from "../context/ProductContext";
import styled from "styled-components";

const About = () => {
  const myName = useContext(AppContext);

  return (
    <PageWrapper>
      <HeroSection />
    </PageWrapper>
  );
};

export default About;

// Styled Component for consistency (optional)
const PageWrapper = styled.div`
  padding-top: 2rem;
`;
