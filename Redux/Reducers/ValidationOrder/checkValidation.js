import {


  CLEAR_MESSAGE_ORDER,
    GET_VALIDATION_FAILED,
    GET_VALIDATION_LOADING,
    GET_VALIDATION_SUCCESS,
  } from "../../Types/ValidationOrder";
  
  const initialState = {
    loading:false,
    validate:false,
    error:null
  };
  
  export default function CHeckValidationCommande(state = initialState, action) {
    const { type, payload } = action;
  
    switch (action.type) {
  
      case GET_VALIDATION_FAILED:
        return {
          ...state,
          error: payload,
          loading: false,
        };
      case GET_VALIDATION_SUCCESS:
        return {
          ...state,
          validate: payload,
          loading: false,
          error: null,
        };
      case GET_VALIDATION_LOADING:
        return {
          ...state,
          loading: true,
        };
        case CLEAR_MESSAGE_ORDER:
          return {
            ...state,
            error: null,
            loading: false,
          };
      default:
        return state;
    }
  }
  