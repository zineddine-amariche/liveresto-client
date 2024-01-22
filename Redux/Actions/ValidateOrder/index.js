import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GET_VALIDATION_FAILED, GET_VALIDATION_LOADING, GET_VALIDATION_SUCCESS } from "../../Types/ValidationOrder";

export const submitValidation = async (
    dispatch,
    object,
    configHead,
    onShow,
    // navigateToSuccess
  ) => {
    let url = "https://dev500.live-resto.fr/api/orders";
    // console.log('object', object)
    dispatch({ type: GET_VALIDATION_LOADING });
    await axios
      .post(url, object, configHead)
      .then((res) => {
        // if (!res.ok) {
        //   throw Error("can't validate this order", res.error);
        // }
        dispatch({ type: GET_VALIDATION_SUCCESS, payload: res.data });
        // dispatch({ type: "DELETE_ALL_ITEMS" });
        // AsyncStorage.setItem("Cart", null);
        // closeValidate();
        // navigateToSuccess();
        onShow()
        console.log('submitValidation validation', res.data)
        return res;
      })

  

      .catch((error) => {
        dispatch({ type: GET_VALIDATION_FAILED, payload: error });
        console.log('error', error)
      });
  };