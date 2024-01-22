
import { GET_PRODUCTS_LOADING } from "../../Types/Products";
import { GET_PRODUCTS_FAILED } from "../../Types/Products";
import { GET_PRODUCTS } from "../../Types/Products";

const initialState = {
    loading: false,
    error: null,
    products: [],
  };
  
  export default function Products(state = initialState, action) {
    const { type, payload } = action;
  
    switch (action.type) {
      case GET_PRODUCTS:
        return {
          ...state,
          error: null,
          loading: false,
          products: payload,
        };
      case GET_PRODUCTS_FAILED:
        return {
          ...state,
          error: payload,
          loading: false,
        };
      case GET_PRODUCTS_LOADING:
        return {
          ...state,
          loading: true,
        };
      default:
        return state;
    }
  }
  