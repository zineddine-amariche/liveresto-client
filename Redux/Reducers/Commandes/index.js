
import { GET_COMMANDES, GET_COMMANDES_FAILED, GET_COMMANDES_LOADING } from "../../Types/Commandes";


const initialState = {
    loading: false,
    error: null,
    AllCommandes: [],
    EnAttente:false
  };
  
  export default function Commandes(state = initialState, action) {
    const { type, payload } = action;
  
    switch (action.type) {
      case GET_COMMANDES:
        return {
          ...state,
          error: null,
          loading: false,
          AllCommandes: payload,
        };
      case GET_COMMANDES_FAILED:
        return {
          ...state,
          error: payload,
          loading: false,
        };
      case GET_COMMANDES_LOADING:
        return {
          ...state,
          loading: true,
        };
      default:
        return state;
    }
  }
  