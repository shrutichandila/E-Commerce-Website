import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import  reducer from "../reducers/ProductsReducer";
const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const intialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading:false,
  singleProduct: {},
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  const getProducts = async (url) => {
    dispatch({type: 'IS_LOADING'})
try {
    

        const res = await axios.get(url);
        const products = await res.data;
        dispatch({type : "MY_API_DATA" , payload : products})
} catch (error) {
    dispatch({type: 'API_ERROR'})
}
  };






  const getSingleProducts = async (url) => {
    dispatch({type: 'SET_SINGLE_LOADING'})

try {
    

        const res = await axios.get(url);
        const singleProduct = await res.data;
        dispatch({type : "SET_SINGLE_PRODUCT" , payload : singleProduct})
} catch (error) {
    dispatch({type: 'SET_SINGLE_ERROR'})
}
  };






  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <>
    <AppContext.Provider value={{ ...state ,getSingleProducts}}>{children}</AppContext.Provider>
    </>
  );
};

const useProductContext = ()=>{
  return useContext(AppContext)
}
export { AppContext, AppProvider,useProductContext };
