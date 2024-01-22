import { CLEAR_MESSAGE, FAILED, LOGIN_SUCCESS, LOGOUT } from "../Types/Login";
import { LOADING, REGISTER_SUCCESS } from "../Types/Register";
import { UPDATE_FAILED, UPDATE_LOADING, UPDATE_SUCCESS } from "../Types/updateInfo";

const initialState = {
  isAuth: false,
  appToken: null,
  loading: false,
  error: null,
  data: [],
  isNewUser: false,
  type: "error",
};

export default function auth(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        loading: false,
        error: null,
        data: [],
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        error: null,
        loading: false,
        data: payload,
        isNewUser: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuth: true,
        error: null,
        loading: false,
        data: payload,
        isNewUser: true,
      };

    case FAILED:
      return {
        ...state,
        error: payload,
        loading: false,
        type: "error",
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        error: null,
        loading: false,
      };
    case UPDATE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        isAuth: true,
        loading: false,
        error: "mise à jour réussie",
        data: payload,
        type: "Sccess",
      };
    case UPDATE_FAILED:
      return {
        ...state,
        loading: false,
        type: "error",
        error: payload,
      };
    default:
      return state;
  }
}
