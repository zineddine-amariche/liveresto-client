import {
    GET_ALL,
  GET_BILL,
  GET_HOTEL,
  GET_ID_ESTABLISHEMENTS,
  GET_ORDER_VALIDATION,
  GET_PAYMENTS_VALIDATION,
  GET_PRODUCTS_VALIDATION,
  GET_VALIDATION_FAILED,
  GET_VALIDATION_LOADING,
  GET_VALIDATION_SUCCESS,
} from "../../Types/ValidationOrder";

const initialState = {
  products: null,
  payments: null,
  customer_id: 17587,
  establishment_id: null,
  for_when: "2022-01-13 20:45:00",
  comment: "",
  origin_id: 2,
  voucher_code: "",
  bill_address_id: 14808,
  delivery_address_id: 14808,
  use_loyalty: 0,
  total: null,
};

export default function OrderObjet(state = initialState, action) {
  const { type, payload } = action;

  switch (action.type) {
    case GET_PRODUCTS_VALIDATION:
      return {
        ...state,
        error: null,
        loading: false,
        products: payload,
      };
    case GET_PAYMENTS_VALIDATION:
      return {
        ...state,
        error: null,
        loading: false,
        payments: payload,
      };
    case GET_ID_ESTABLISHEMENTS:
      return {
        ...state,
        error: null,
        loading: false,
        establishment_id: payload,
      };
    case GET_ALL:
      return {
        ...state,
        error: null,
        loading: false,
        total: payload,
      };

    default:
      return state;
  }
}
