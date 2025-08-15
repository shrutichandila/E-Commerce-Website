import styled from "styled-components";
import { NavLink } from "react-router-dom";
import formatPrice from "../utiles/formatPrice"

const Product = ({ id, name, price, image, category }) => {
  return (
    <>
    <Card to={`/singleproduct/${id}`}>
      
      <ImageWrapper>
        <img src={image} alt={name} />
        <span className="category">{category}</span>
      </ImageWrapper>

      <Info>
        <h3>{name}</h3>
<p>{formatPrice(price)}</p>

      </Info>
    </Card>
    </>
  );
};

export default Product;

// Styled Components
const Card = styled(NavLink)`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 1rem;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    object-fit: cover;
    height: 200px;
    border-radius: 8px;
  }

  .category {
    position: absolute;
    top: 8px;
    left: 8px;
    background: #ff6347;
    color: #fff;
    padding: 4px 10px;
    font-size: 0.75rem;
    border-radius: 5px;
  }
`;

const Info = styled.div`
  margin-top: 1rem;

  h3 {
    font-size: 1rem;
    margin: 0;
  }

  p {
    color: #007b5e;
    font-weight: bold;
    margin: 5px 0 0;
  }
`;
