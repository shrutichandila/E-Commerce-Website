import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaShoppingCart } from 'react-icons/fa';
import { useCartContext } from '../context/CartContext';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {total_item} = useCartContext();

  return (
    <>
      <GlobalStyle />
      <Navbar>
        <Logo>
          <img src="/logo.png" alt="" />
        </Logo>
        <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </MenuButton>
        <NavLinks open={menuOpen}>
          <StyledLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </StyledLink>
          <StyledLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
            About
          </StyledLink>
          <StyledLink to="/contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact
          </StyledLink>
          <StyledLink to="/products" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
            Products
          </StyledLink>
          <StyledLink to="/cart" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
            {/* <CartWrapper>
              <FaShoppingCart size={20} />
              <CartCount>{total_item}</CartCount>
              {/* <Cart></Cart> 
            </CartWrapper> */}
          </StyledLink>
        </NavLinks>
      </Navbar>
    </>
  );
};

export default Header;





const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .1rem 2rem;
  background: linear-gradient(90deg, #bf54f0, #460458);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1000;
`;
const Logo = styled.h1`
  display: flex;
  align-items: center;
  gap: 0.1rem;
  font-size: 1.8rem;
  color: #fff;
  padding: 0.1rem ;
  margin: 0;
  border-radius: 0.3rem;

  img {
    height: 18vh;
    width: auto;
  }
`;


const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 90px;
    left: 0;
    right: 0;
    background: #66036d;
    border-radius: 2px;
    border: 2px solid black;
    padding: 1rem;
    border-radius: 0 0 10px 10px;
  }
`;

const StyledLink = styled(NavLink)`
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;

  &.active {
    text-decoration: underline;
  }

  &:hover {
    color: #fffbe9;
  }
`;

const CartWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -10px;
  background: #3d07a3;
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 50%;
  padding: 2px 6px;
  min-width: 20px;
  text-align: center;
  height: 100%;
  width:1%;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

