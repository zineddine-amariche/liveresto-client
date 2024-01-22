import axios from "axios";
import { GET_ESTABLISHEMENTS, GET_ESTABLISHEMENTS_FAILED, GET_ESTABLISHEMENTS_LOADING } from "../../Types/Establishements";

export const dispatchGetParams = () => {
  return {
    type: GET_PARAMS,
  };
};

export const getEstablishement = async (dispatch, initialState,configHead) => {

  const url = "https://dev500.live-resto.fr/api/establishments";
  dispatch({ type: GET_ESTABLISHEMENTS_LOADING });
  await axios
  .post(url, initialState, configHead)
  .then((res) => {
    let Data = res.data;
    return res, dispatch({ type: GET_ESTABLISHEMENTS, payload: Data })
  })
  .catch((error) => {
    return (
      error,
      dispatch({ type: GET_ESTABLISHEMENTS_FAILED, payload: "échec  !" }),
      console.log("error", error)
    );
  });
};
