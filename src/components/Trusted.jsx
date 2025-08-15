import styled from 'styled-components';

const Trusted = () => {
  return (
    <Wrapper>
      <Heading>Trusted By 1000+ Companies</Heading>
      <TrustedContainer>
        <div>
          <img src="https://img.icons8.com/?size=100&id=117508&format=png&color=000000" alt="Brand 1" />
        </div>
        <div>
          <img src="https://img.icons8.com/?size=100&id=81239&format=png&color=000000" alt="Brand 2" />
        </div>
        <div>
          <img src="https://img.icons8.com/?size=100&id=20494&format=png&color=000000" alt="Brand 3" />
        </div>
        <div>
          <img src="https://img.icons8.com/?size=100&id=pOa8st0SGd5C&format=png&color=000000" alt="Brand 4" />
        </div>
        <div>
          <img src="https://img.icons8.com/?size=100&id=LGheHaktLytE&format=png&color=000000" alt="Brand 5" />
        </div>
      </TrustedContainer>
    </Wrapper>
  );
};

export default Trusted;

// Styled Components

const Wrapper = styled.section`
  margin-bottom: 1vh;
  background: linear-gradient(180deg , #d6d6fb, #9c9cf8);
  text-align: center;
  overflow-x: hidden;
  border-radius: 2vh;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #6e6666;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;



const TrustedContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1000px;
  padding: 0 1rem;
  margin: 0 auto;
  box-sizing: border-box;

  img {
    width: 80px;
    height: auto;

    @media (max-width: 480px) {
      width: 60px;
    }
  }
`;






