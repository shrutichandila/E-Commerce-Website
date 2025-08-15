import { createContext, useEffect, useReducer} from "react";
import { useContext } from "react";
import reducer from "../reducers/CartReducer";

const CartContext = createContext() 

const getLocalCartData = () => {
    let newCartData = localStorage.getItem("cart");
    if(newCartData === null) {
      return [];
    }
    else{
      return JSON.parse(newCartData);
    }
  }

const initialState = {
  cart: getLocalCartData(),
  total_item: 0,
  total_amount: 0,
  shipping_fee: 5000,
}

const CartProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({type: "ADD_TO_CART", payload: {id, color, amount, product}})
  };

  const setDecrease = (id) => {
    dispatch({type: "SET_DECREMENT", payload: id});
  }
  const setIncrease = (id) => {
    dispatch({type: "SET_INCREMENT", payload: id});
  }

  const removeItem = (id) => {
    dispatch({type: "REMOVE_ITEM", payload: id});
  }
  const ClearCart = () => {
    dispatch({type: "CLEAR_CART"})
  }

  useEffect(() => {
    dispatch({type: "CART_TOTAL_ITEM"});
    dispatch({type: "CART_TOTAL_PRICE"});
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
  <CartContext.Provider value={{...state, addToCart, removeItem, ClearCart, setDecrease, setIncrease}}>{children}</CartContext.Provider>
  );
}
const useCartContext = () => {
  return useContext(CartContext);
}

export { CartProvider, useCartContext };