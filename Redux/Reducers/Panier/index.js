import { GET_PANIER, SET_CART_PRODUCTS } from "../../Types/Panier";

const initialState = {
  error: null,
  loading: false,
  data: [],
  message: null,
  Products: [],
  haveProducts: false,
};

const Panier = (state = initialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case GET_PANIER:
      return {
        ...state,
        data: payload,
        message: "success",
      };
    case SET_CART_PRODUCTS:
      return {
        ...state,
        Products: payload,
        haveProducts: true,
      };
    default:
      return state;
  }
};

export default Panier;
