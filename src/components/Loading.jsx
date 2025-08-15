import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <div className="loader"></div>
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;

  .loader {
    border: 6px solid #f3f3f3;
    border-top: 6px solid #7e43e3;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
