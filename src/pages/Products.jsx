import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Cart from '../components/Cart';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;

  @media (max-width: 600px) {
    padding: 12px;
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }
`;

const SearchInput = styled.input`
  padding: 8px;
  width: 300px;
  max-width: 100%;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const CartIcon = styled.div`
  position: relative;
  font-size: 24px;
  cursor: pointer;
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -10px;
  background-color: red;
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 50%;
`;

const Content = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Categories = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 801px) {
    width: 25%;
  }
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CategoryItem = styled.li`
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: color 0.2s;

  ${({ active }) =>
    active &&
    `
    font-weight: bold;
    border-bottom: 2px solid #007bff;
    color: #007bff;
  `}
`;

const ProductsList = styled.div`
  width: 100%;
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;

  @media (min-width: 801px) {
    width: 75%;
    padding-left: 20px;
  }
`;

const ProductCard = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 160px;
  object-fit: contain;
  margin-bottom: 10px;
  border-radius: 4px;

  @media (max-width: 480px) {
    max-height: 120px;
  }
`;

const AddToCartButton = styled.button`
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 14px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 10px;
  }
`;

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products/categories')
      .then((res) => setCategories(res.data))
      .catch((err) => console.error('Categories fetch error:', err));
  }, []);

  useEffect(() => {
    const url = selectedCategory
      ? `https://dummyjson.com/products/category/${selectedCategory}`
      : 'https://dummyjson.com/products';

    axios
      .get(url)
      .then((res) => {
        const allProducts = selectedCategory ? res.data.products : res.data.products;
        const shuffled = selectedCategory
          ? allProducts
          : allProducts.sort(() => 0.5 - Math.random()).slice(0, 10);
        setProducts(shuffled);
      })
      .catch((err) => console.error('Products fetch error:', err));
  }, [selectedCategory]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const filteredProducts = products.filter((prod) =>
    prod.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <TopBar>
        <h2>Product Explorer</h2>
        <SearchInput
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <CartIcon onClick={() => setShowCart(!showCart)}>
          🛒
          {cartItems.length > 0 && (
            <CartCount>
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </CartCount>
          )}
        </CartIcon>
      </TopBar>

      {showCart ? (
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      ) : (
        <Content>
          <Categories>
            <h3>Categories</h3>
            <CategoryList>
              {categories.map((cat) => (
                <CategoryItem
                  key={cat.slug || cat}
                  active={selectedCategory === (cat.slug || cat)}
                  onClick={() => setSelectedCategory(cat.slug || cat)}
                >
                  {cat.name || cat}
                </CategoryItem>
              ))}
            </CategoryList>
          </Categories>
          <ProductsList>
            {filteredProducts.map((prod) => (
              <ProductCard key={prod.id}>
                <ProductImage src={prod.thumbnail || prod.images?.[0]} alt={prod.title} />
                <h4>{prod.title}</h4>
                <p><strong>Price:</strong> ${prod.price}</p>
                <p><strong>Rating:</strong> {prod.rating} ⭐</p>
                <p><strong>Stock:</strong> {prod.stock}</p>
                <AddToCartButton onClick={() => handleAddToCart(prod)}>Add to Cart</AddToCartButton>
              </ProductCard>
            ))}
          </ProductsList>
        </Content>
      )}
    </Container>
  );
};

export default Products;
