import styled from "styled-components";
const CartAmountToggle = ({ amount, setIncrease, setDecrease }) => {
  return (
    <DIV>
    <div className="cart-toggle">
      <button onClick={() => setDecrease()}>-</button>
      <span>{amount}</span>
      <button onClick={() => setIncrease()}>+</button>
    </div>
    </DIV>
  );
};

export default CartAmountToggle;

const DIV = styled.div`

    button{
      background-color: blue;
    }
  
`