import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #667eea, #764ba2);
  color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
`;

const ErrorCode = styled.h1`
  font-size: 10rem;
  margin: 0;
`;

const ErrorMessage = styled.p`
  font-size: 1.5rem;
  margin: 20px 0;
`;

const HomeLink = styled.a`
  padding: 10px 20px;
  background-color: #fff;
  color: #764ba2;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
`;

const ErrorPage = () => (
  <Container>
    <ErrorCode>404</ErrorCode>
    <ErrorMessage>Oops! The page you're looking for isn't here.</ErrorMessage>
    <HomeLink href="/">Go Back Home</HomeLink>
  </Container>
);

export default ErrorPage;
