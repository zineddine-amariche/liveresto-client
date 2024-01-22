import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { FAILED, LOGIN_SUCCESS } from "../Types/Login";
import { LOADING, REGISTER_SUCCESS } from "../Types/Register";

export const UserRegister = async (dispatch, configHead, values) => {
  const {customer} = values
  const {email ,password} = customer
  console.log('email,password', email,password)
  let url = "https://dev500.live-resto.fr/api/customers";
  dispatch({ type: LOADING });
  await axios
    .post(url, values, configHead)
    .then((res) => {
      let Data = res.data;

      return res, dispatch({ type: REGISTER_SUCCESS, payload: Data }),
      AsyncStorage.setItem("login", email),
      AsyncStorage.setItem("password", password)
    })
    .catch((error) => {
      return (
        error,
        dispatch({ type: FAILED, payload: "échec de l'inscription !" }),
        console.log("error", error)
      );
    });
};

export const UserLogin = async (dispatch, configHead, values) => {
  let url = "https://dev500.live-resto.fr/api/customers/auth";
  dispatch({ type: LOADING });
  await axios
    .post(url, values, configHead)
    .then((res) => {
      let Data = res.data;

      return (
        res,
        dispatch({ type: LOGIN_SUCCESS, payload: Data }),
        AsyncStorage.setItem("login", values.email),
        AsyncStorage.setItem("password", values.password)
      );
    })
    .catch((error) => {
      return (
        error,
        dispatch({ type: FAILED, payload: "échec de connexion !" }),
        console.log("error login", error)
      );
    });
};

export const LoginFromStorage = async (
  dispatch,
  configHead,
  email,
  password
) => {
  dispatch({ type: LOADING });
  // console.log('start')

  let url = "https://dev500.live-resto.fr/api/customers/auth";
  let body = JSON.stringify({
    email,
    password,
  });
  await axios
    .post(url, body, configHead)
    .then((res) => {
      let Data = res.data;

      return Data, dispatch({ type: LOGIN_SUCCESS, payload: Data });
    })
    .catch((error) => {
      return (
        error,
        dispatch({ type: FAILED, payload: "échec de connexion !" }),
        console.log("error.message", error.message)
      );
    });
};
