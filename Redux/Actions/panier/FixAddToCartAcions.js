import {
  ADDITEM,
  ADD_ITEM,
  DELETE_ALL_ITEM,
  DELETE_ITEM,
  DELITEM,
  SELECT_RESTAURANT,
} from "../../Types/Panier";

// For Add Item to Cart
export const FixaddCart = (state, product, dispatch) => {
  const exist = state.find((x) => x.id === product.id);

  if (exist) {
    // Increase the Quantity
    let NewP = state.map((x) =>
      x.id === product.id ? { ...x, quantity: x.quantity + 1 } : x
    );
    dispatch({ type: ADD_ITEM, payload: NewP });
  } else {
    let NewP = [
      ...state,
      {
        ...product,
        quantity: 1,
      },
    ];

    dispatch({ type: ADD_ITEM, payload: NewP });
  }
};

// For Delete Item From Cart
export const FixdelCart = (state, product, dispatch) => {
  const exist1 = state.find((x) => x.id === product.id);
  // console.log("exist-----------", exist1);
  if (!exist1) {
    return console.log("null", null);
  } else if (exist1.quantity === 1) {
    let NewP = state.filter((x) => x.id !== exist1.id);
    dispatch({ type: DELETE_ITEM, payload: NewP });
  } else {
    let NewP = state.map((x) =>
      x.id === product.id ? { ...x, quantity: x.quantity - 1 } : x
    );

    dispatch({ type: DELETE_ITEM, payload: NewP });
  }
};

export const FixdelAllCarts = (_,dispatch) => {
  // let NewP = state.filter((x) => x.id == !x.id);
  dispatch({ type: DELETE_ALL_ITEM });
};

export const SelectRestaurant = (dispatch, title) => {
  dispatch({ type: SELECT_RESTAURANT, payload: title });
};
