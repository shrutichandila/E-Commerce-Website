import styled from "styled-components";
import { useProductContext } from "../context/ProductContext";
import Product from "./Product";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return (
      <LoaderWrapper>
        <div className="spinner"></div>
      </LoaderWrapper>
    );
  }

  return (
    <>
      <TExt>
        <p>Check Now</p>
        <h2>Our Services</h2>
      </TExt>

      <MaIn>
        {featureProducts.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </MaIn>
    </>
  );
};

export default FeatureProduct;

const TExt = styled.section`
  text-align: center;
  background: linear-gradient(90deg, #3f3f41, #383738);
  border-radius: 2vh;
  color: white;
`;

const MaIn = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  padding: 2rem;
  margin: 0 100px;
`;

const LoaderWrapper = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .spinner {
    width: 60px;
    height: 60px;
    border: 6px solid #eee;
    border-top: 6px solid #2e8b57;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
