import {
  GET_ADRESSES,
  GET_ADRESSES_FAILED,
  GET_ADRESSES_LOADING,
  GET_DESACTIVATE_INFO,
} from "../../Types/Addresses";

const initialState = {
  loading: false,
  error: null,
  AllAddresses: [],
  lastAdress: [],
  showInfo: true,
};

export default function Adresses(state = initialState, action) {
  const { type, payload } = action;

  switch (action.type) {
    case GET_ADRESSES:
      return {
        ...state,
        error: null,
        loading: false,
        AllAddresses: payload,
      };
    case GET_ADRESSES_FAILED:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case GET_ADRESSES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_DESACTIVATE_INFO:
      return {
        ...state,
        showInfo:false
      };
    default:
      return state;
  }
}
