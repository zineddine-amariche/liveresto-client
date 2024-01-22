import { GET_PRODUCTS, GET_PRODUCTS_FAILED, GET_PRODUCTS_LOADING } from "../../Types/Products";
import axios from "axios";

export const getProducts = async (dispatch, configHead,id) => {
  const url = `https://dev500.live-resto.fr/api/products/${id}`;
  dispatch({ type: GET_PRODUCTS_LOADING });
  await axios
    .get(url, configHead)
    .then((res) => {
      let Data = res.data;
      return res, dispatch({ type: GET_PRODUCTS, payload: Data });
    })
    .catch((error) => {
      return (
        error,
        dispatch({ type: GET_PRODUCTS_FAILED, payload: "échec  !" }),
        console.log("error", error)
      );
    });
};
