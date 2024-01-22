// UserInfoUpdate

import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {
  UPDATE_FAILED,
  UPDATE_LOADING,
  UPDATE_SUCCESS,
} from "../Types/updateInfo";

export const UserInfoUpdate = async (dispatch, configHead, values,email) => {

  let url = "https://dev500.live-resto.fr/api/customers";
  dispatch({ type: UPDATE_LOADING });
  await axios
    .put(url, values, configHead)
    
    .then((res) => {
      let Data = res.data;
      console.log("Datassssuccesss");
      return res, dispatch({ type: UPDATE_SUCCESS, payload: Data }),
      AsyncStorage.setItem("login", email),
      AsyncStorage.setItem("password", values.customer.password)
    })
    .catch((error) => {
      return (
        error,
        console.log("error", error),

        dispatch({
          type: UPDATE_FAILED,
          payload: "quelque chose s'est mal passé !",
        })
      );
    });
};
