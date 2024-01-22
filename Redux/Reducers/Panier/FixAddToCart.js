import {
  ADD_ITEM,
  DELETE_ALL_ITEM,
  DELETE_ITEM,
  GETPRODUCTASYNC,
  SELECT_RESTAURANT,
} from "../../Types/Panier";

const initialState = {
  Carts: [],
  haveProducts: false,
  restaurantSelected: null,
};

const FixCarts = (state = initialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        Carts: payload,
        message: "success",
      };
    case DELETE_ITEM:
      return {
        ...state,
        Carts: payload,
      };

    case DELETE_ALL_ITEM:
      return {
        ...state,
        Carts: [],
        restaurantSelected: null,
        haveProducts: false,
      };

    case GETPRODUCTASYNC:
      return {
        ...state,
        Carts: payload,
        haveProducts:true
      };
    case SELECT_RESTAURANT:
      return {
        ...state,
        restaurantSelected: payload,
      };
    default:
      return state;
  }
};

export default FixCarts;
