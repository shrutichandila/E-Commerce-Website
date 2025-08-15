import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import MyImage from "../components/MyImage";
import styled from "styled-components";
import Loading from "../components/Loading";
// React Icons
import { RiTruckLine, RiShieldCheckLine } from "react-icons/ri";
import { TbReplace } from "react-icons/tb";
import { FaCheck } from "react-icons/fa";
import AddToCart from "../components/AddToCart";
const API = "https://fakestoreapi.com/products";

const SingleProduct = () => {
  const { getSingleProducts, isSingleLoading, singleProduct } = useProductContext();
  const { id } = useParams();

  const [selectedColor, setSelectedColor] = useState(null);
  const colorOptions = ["#000", "#2e8b57", "#007bff", "#ffc107", "#ff4d4d"];
const {
  name,
  company,
  price,
  description,
  category,
  stock,
  stars,
  reviews,
  image,
} = singleProduct;




  useEffect(() => {
    getSingleProducts(`${API}?id=${id}`);
  }, []);

 
  if (isSingleLoading) {
    return <Loading />;
  }

  

  
  return (
    <Wrapper>
      <HomeButton>
        <NavLink to="/">🏠 Home</NavLink>
      </HomeButton>

      <ImageSection>
        <MyImage imgs={image} />
      </ImageSection>

      <ContentSection>
        <h2>{name}</h2>
        <p className="company">by <strong>{company}</strong></p>
        <p className="price">₹ {price  }</p>
        <p className="description">{description}</p>

        <div className="guarantee">
          <div><RiTruckLine /> <span>Fast Delivery</span></div>
          <div><TbReplace /> <span>7 Days Replacement</span></div>
          <div><RiShieldCheckLine /> <span>2 Year Warranty</span></div>
        </div>

        <ColorSelector>
          {colorOptions.map((color, index) => (
            <button
              key={index}
              className={selectedColor === color ? "active" : ""}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            >
              {selectedColor === color && <FaCheck color="#fff" size="0.8rem" />}
            </button>
          ))}
    
        </ColorSelector>

        <p className="info"><span>Category:</span> {category}</p>
        <p className="info"><span>In Stock:</span> {stock}</p>
        <p className="info"><span>Rating:</span> {stars} ⭐ ({reviews} reviews)</p>
        {stock > 0 && <AddToCart product={singleProduct} />}
      </ContentSection>
    </Wrapper>
  );
};

export default SingleProduct;

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  padding: 3rem 1rem;
  background: #f0f2f5;
`;

const HomeButton = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;

  a {
    display: inline-block;
    text-decoration: none;
    background: #007bff;
    color: #fff;
    padding: 0.6rem 1.2rem;
    border-radius: 5px;
    font-weight: 500;
    font-size: 0.95rem;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
      background: #0056b3;
      transform: translateY(-2px);
    }
  }

  @media (max-width: 768px) {
    position: static;
    margin-bottom: 1rem;
  }
`;

const ImageSection = styled.div`
  flex: 1 1 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 10px;
    max-width: 100%;
    object-fit: cover;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

const ContentSection = styled.div`
  flex: 1 1 400px;
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  h2 {
    font-size: 2.1rem;
    color: #222;
  }

  .company {
    font-size: 1rem;
    color: #666;
    font-style: italic;
  }

  .price {
    font-size: 1.6rem;
    font-weight: 700;
    color: #28a745;
  }

  .description {
    font-size: 1rem;
    color: #444;
    line-height: 1.6;
  }

  .info {
    font-size: 0.95rem;
    color: #555;

    span {
      font-weight: 600;
      color: #333;
    }
  }

  .guarantee {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 1rem 0;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: #e9ecef;
      padding: 0.7rem 1rem;
      border-radius: 6px;
      font-size: 0.95rem;
      color: #333;

      svg {
        font-size: 1.2rem;
        color: #007bff;
      }
    }
  }
`;

const ColorSelector = styled.div`
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
  margin: 1rem 0;

  button {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid #ddd;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

    &:hover {
      transform: scale(1.1);
      border-color: #007bff;
    }

    &.active {
      box-shadow: 0 0 0 2px #007bff;
      border-color: #007bff;
    }

    svg {
      pointer-events: none;
    }
  }

  @media (max-width: 480px) {
    button {
      width: 24px;
      height: 24px;
    }
  }
`;
