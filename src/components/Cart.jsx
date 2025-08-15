
import styled from 'styled-components';

const CartContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  min-height: 100vh;

  @media (max-width: 600px) {
    padding: 12px;

  }
`;
const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);

  @media (max-width: 600px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 400px) {
    width: 60px;
    height: 60px;
  }
`;

const CartItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 12px;
  border-bottom: 1px solid #ddd;
  padding: 15px 0;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;



const ItemDetails = styled.div`
  flex: 1;
`;

const Title = styled.h4`
  margin: 0;
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

const Price = styled.p`
  margin: 4px 0;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const QuantityControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;

  @media (max-width: 600px) {
    justify-content: flex-start;
  }
`;

const QtyButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 6px 12px;
  font-size: 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 5px 10px;
  }
`;

const QuantityDisplay = styled.span`
  font-size: 16px;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const SummaryContainer = styled.div`
  margin-top: 30px;
  border-top: 2px solid #eee;
  padding-top: 20px;
  text-align: right;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

const TotalAmount = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const PlaceOrderButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 18px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #218838;
  }

  @media (max-width: 600px) {
    width: 100%;
    font-size: 15px;
    padding: 10px;
  }
`;

const Cart = ({ cartItems, setCartItems }) => {
  const handleQuantityChange = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    alert('Order placed successfully! 🚀');
    setCartItems([]);
  };

  return (
    <CartContainer>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              <Thumbnail src={item.thumbnail || item.images?.[0]} alt={item.title} />
              <ItemDetails>
                <Title>{item.title}</Title>
                <Price>
                  ${item.price} × {item.quantity} = ${item.price * item.quantity}
                </Price>
                <QuantityControls>
                  <QtyButton onClick={() => handleQuantityChange(item.id, -1)}>-</QtyButton>
                  <QuantityDisplay>{item.quantity}</QuantityDisplay>
                  <QtyButton onClick={() => handleQuantityChange(item.id, 1)}>+</QtyButton>
                </QuantityControls>
              </ItemDetails>
            </CartItem>
          ))}
          <SummaryContainer>
            <TotalAmount>Total: ${totalPrice.toFixed(2)}</TotalAmount>
            <PlaceOrderButton onClick={handlePlaceOrder}>Place Order</PlaceOrderButton>
          </SummaryContainer>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
