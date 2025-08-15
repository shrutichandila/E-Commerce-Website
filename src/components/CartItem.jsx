import styled from "styled-components";
import  formatPrice  from "../utiles/formatPrice"; 
import { MdDelete } from "react-icons/md";
import { useCartContext } from "../context/CartContext";
import CartAmountToggle from "./CartAmountToggle";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem, setDecrease, setIncrease} = useCartContext();
  const subtotal = price * amount;

  return (
    <ItemWrapper>
      <div className="item-info">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="details">
          <p className="name">{name}</p>
          <div className="color">
            <span>Color:</span>
            <Swatch color={color} title={color} />
          </div>
        </div>
      </div>

      <p className="price">{formatPrice(price)}</p>
      <div className="quantity">
        <CartAmountToggle amount={amount}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrease(id)} className="inc-dec"></CartAmountToggle></div>
      <p className="subtotal">{formatPrice(subtotal)}</p>
      <div className="icon">
      <MdDelete className="remove_icon" onClick={() => removeItem(id)}/></div>
    </ItemWrapper>
  );
};

export default CartItem;

const ItemWrapper = styled.article`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr auto;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  background: #fff;
  border-radius: 0.5rem;

.quantity {
  display: flex;
  justify-content: center;
}


  .item-info {
    display: flex;
    align-items: center;
    gap: 1rem;

    figure {
      width: 60px;
      height: 60px;
      margin: 0;
      border-radius: 0.4rem;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .details {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;

      .name {
        font-weight: 500;
        font-size: 1rem;
      }

      .color {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.85rem;
        color: #555;
      }
    }
  }

  .price,
  .quantity,
  .subtotal {
    text-align: center;
    font-weight: 500;
  }

  .remove_icon {
    background: transparent;
    border: none;
    color: #d9534f;
    cursor: pointer;
    font-size: 2rem;
    margin-left: 2vh;
    margin-right: 1vh;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    text-align: center;

    .item-info {
      flex-direction: column;
      align-items: flex-start;
      align-items: center;
    }

    .price,
    .quantity,
    .subtotal,
    .remove_icon {
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    padding: 0.8rem;

    .remove_icon {
      font-size: 1.5rem;
    }

    .price,
    .quantity,
    .subtotal {
      font-size: 0.9rem;
    }

    .details .name {
      font-size: 0.95rem;
    }
  }
`;

const Swatch = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: ${({ color }) => color};
  border: 1px solid #ccc;
`;

