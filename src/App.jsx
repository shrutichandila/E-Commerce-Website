import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";
// import Cart from "../Cart";
import Cart from "./components/Cart"
import ErrorPage from "./ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AppProvider } from "./context/ProductContext";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
function App() {
  return (
   
    <AppProvider>
       <GlobalStyle/>
      <BrowserRouter>
        <AppContainer>
          <Header />
          <MainContent>
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/singleproduct/:id" element={<SingleProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </MainContent>
          <Footer />
        </AppContainer>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;

// Styled Components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;
