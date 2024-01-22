import { GET_POSITION, UPDATE_RECENT } from "../../Types/Accueil/index.js";

const initialState = {
  error: null,
  loading: false,
  position: "Wiliaya",
  recents: [],
};

const Accueil = (state = initialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case GET_POSITION:
      return {
        ...state,
        position: payload,
      };
    case UPDATE_RECENT:
      return {
        ...state,
        recents: payload,
      };

    default:
      return state;
  }
};

export default Accueil;
