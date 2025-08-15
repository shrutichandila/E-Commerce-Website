import { useState } from "react";
import CartAmountToggle from "./CartAmountToggle"; // import it
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";


const AddToCart = ({ product }) => {
  const {addToCart} = useCartContext();

  const { stock, id, colors } = product;
  const [amount, setAmount] = useState(1);
  const [color, setColor] = useState(colors?.[0] || "");

  const setIncrease = () => {
    if (amount < stock) {
      setAmount(amount + 1);
    }
  };

  const setDecrease = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  return (
    <div>
      <div className="color-selector">
        <p>Colors:</p>
        {colors?.map((c, i) => (
          

          <button
            key={i}
            style={{
              backgroundColor: c,
              border: color === c ? "2px solid #164c99" : "none",
            }}
            onClick={() => setColor(c)}
          />
        ))}
      </div>

      <CartAmountToggle
        amount={amount}
        setIncrease={setIncrease}
        setDecrease={setDecrease}
      />

      <NavLink to="/cart"
      onClick={() => addToCart(id, color, amount, product)}>
      
      <Button>Add to Cart</Button>
      </NavLink>
    </div>
  );
};

export default AddToCart;
import styled from "styled-components";

export const Button = styled.button`
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 0.65rem 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.25s ease;
  margin-top: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

