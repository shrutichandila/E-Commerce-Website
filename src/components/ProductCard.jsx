

import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ProductCard = ({ product }) => {
  const { id, name, price, image } = product;

  return (
    <Card>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>₹ {price}</p>
      <NavLink to={`/singleproduct/${id}`}>
        <button>View Details</button>
      </NavLink>
    </Card>
  );
};

export default ProductCard;

const Card = styled.div`
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 6px;
  text-align: center;
  transition: transform 0.2s ease;

  img {
    width: 100%;
    height: 180px;
    object-fit: contain;
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background: #2e8b57;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 10px rgba(0,0,0,0.05);
  }
`;

const Wrapper = styled.section`
  padding: 2rem;
`;

const SearchBar = styled.div`
  margin-bottom: 2rem;
  input {
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    border-radius: 6px;
    border: 1px solid #ccc;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

