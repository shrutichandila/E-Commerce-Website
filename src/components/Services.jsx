import styled from 'styled-components';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaShieldHalved } from 'react-icons/fa6';
import { RiMoneyDollarCircleLine, RiSecurePaymentLine } from 'react-icons/ri';

const Services = () => {
  return (
    <ServicesContainer>
      <ServiceBox>
        <TbTruckDelivery size={36} color='blue'/>
        <p>Super Fast Delivery</p>
      </ServiceBox>

      <DoubleBox>
        <SmallBox>
          <FaShieldHalved size={28} color='blue' />
          <p>Non Contact Shipping</p>
        </SmallBox>
        <SmallBox>
          <RiMoneyDollarCircleLine size={28}color='blue' />
          <p>Money Back Guarantee</p>
        </SmallBox>
      </DoubleBox>

      <ServiceBox>
        <RiSecurePaymentLine size={36}color='blue' />
        <p>Super Secure Payment</p>
      </ServiceBox>
    </ServicesContainer>
  );
};

export default Services;

// Styled Components

const ServicesContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  gap: 2rem;
  padding: 3rem 2rem;
  flex-wrap: wrap;
  background: #f8f8f8;
  margin: 0 100px;

  @media (max-width: 768px) {
    margin: 0 1rem;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
  }
`;

const ServiceBox = styled.div`
  flex: 1;
  min-width: 250px;
  background: #fff;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.06);
  border-radius: 10px;

  p {
    margin-top: 1rem;
    font-weight: 500;
    color: #333;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DoubleBox = styled.div`
  flex: 1;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SmallBox = styled.div`
  background: #fff;
  padding: 1.2rem;
  text-align: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.06);
  border-radius: 10px;

  p {
    margin-top: 0.7rem;
    font-weight: 500;
    color: #333;
  }
`;
