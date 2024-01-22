import {
  GET_ESTABLISHEMENTS,
  GET_ESTABLISHEMENTS_FAILED,
  GET_ESTABLISHEMENTS_LOADING,
  GET_IDS,
  GET_PARAMS,
  SET_FAVORIS_ESTA,
} from "../../Types/Establishements";

const initialState = {
  loading: false,
  error: null,
  establishments: [],
  params: null,
  ids: null,
  eststaFavoris: [],
  deliveryPrice:null
};

export default function Establishements(state = initialState, action) {
  const { type, payload } = action;

  switch (action.type) {
    case GET_ESTABLISHEMENTS:
      return {
        ...state,
        error: null,
        loading: false,
        establishments: payload,
        deliveryPrice:payload.defaultDeliveryPrice
      };
    case GET_ESTABLISHEMENTS_FAILED:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case GET_ESTABLISHEMENTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_PARAMS:
      return {
        ...state,
        loading: false,
        params: payload,
      };
    case GET_IDS:
      return {
        ...state,
        ids: payload,
      };

    case SET_FAVORIS_ESTA:
      return {
        ...state,
        eststaFavoris: payload,
      };
    default:
      return state;
  }
}
