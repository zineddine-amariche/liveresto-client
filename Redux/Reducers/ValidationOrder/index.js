import { GET_BILL, GET_HOTEL } from "../../Types/ValidationOrder";

const initialState = {
  hotel: null,
  bill: null,
};

export default function ValidationOrder(state = initialState, action) {
  const { type, payload } = action;

  switch (action.type) {
    case GET_HOTEL:
      return {
        ...state,
        error: null,
        loading: false,
        hotel: payload,
      };
    case GET_BILL:
      return {
        ...state,
        error: null,
        loading: false,
        bill: payload,
      };

    default:
      return state;
  }
}
