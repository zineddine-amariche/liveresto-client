import { GET_DESACTIVATE_INFO } from "../../Types/Addresses"
import AsyncStorage from "@react-native-async-storage/async-storage";

export const disableInfo = (dispatch)=>{
    dispatch({type:GET_DESACTIVATE_INFO })
    AsyncStorage.setItem("info_address", "true");
}