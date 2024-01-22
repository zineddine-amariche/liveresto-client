import { SET_USER_GUID, SET_USER_GUID_TRUE } from "../../Types/Accueil";
import {
  DELETE_FILTRES,
  DELETE_RECENTS,
  SET_CUISINE,
  SET_PRICE,
  SET_RECENTS,
  SET_RECENTS_VALUES,
  SET_RESTRICTION,
  SET_TRIER,
} from "../../Types/Search";

const initialState = {
  Recents: [],
  Trier: [],
  Price: null,
  Restrictions: [],
  Cuisine: [],
  Reinitiliser: false,
  Guid: true,
  values:[]
};

const search = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case SET_RECENTS:
      return {
        ...state,
        Recents: payload,
      };
    case DELETE_RECENTS:
      return {
        ...state,
        Recents: [],
      };
    case DELETE_FILTRES:
      return {
        ...state,
        Trier: [],
        Price: null,
        Restrictions: [],
        Cuisine: [],
        Reinitiliser: false,
      };
    case SET_TRIER:
      return {
        ...state,
        Reinitiliser: true,
        Trier: payload,
      };
    case SET_PRICE:
      return {
        ...state,
        Price: payload,
        Reinitiliser: true,
      };
    case SET_RESTRICTION:
      return {
        ...state,
        Reinitiliser: true,
        Restrictions: payload,
      };
    case SET_CUISINE:
      return {
        ...state,

        Reinitiliser: true,
        Cuisine: payload,
      };

    case SET_USER_GUID:
      return {
        ...state,
        Guid: false,
      };
    case SET_USER_GUID_TRUE:
      return {
        ...state,
        Guid: true,
      };
    case SET_RECENTS_VALUES:
      return {
        ...state,
        values: payload,
      };
    default:
      return state;
  }
};

export default search;
