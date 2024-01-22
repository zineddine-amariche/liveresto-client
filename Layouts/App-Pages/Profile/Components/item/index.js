import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import ArrowG from "../../../../../Assets/Images/ArrowG.png";
import { StyleSheet } from "react-native";
import { H7 } from "../../../../../Components/utils/TextComponents";
import { COLORS } from "../../../../../Components/Styles/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOGOUT } from "../../../../../Redux/Types/Login";
import { useDispatch } from "react-redux";
import { SET_USER_GUID_TRUE } from "../../../../../Redux/Types/Accueil";
import { FixdelAllCarts } from "../../../../../Redux/Actions/panier/FixAddToCartAcions";
import { useSelector } from "react-redux";

const Item = ({ title, Divider, last, Nav, item }) => {
  const dispatch = useDispatch();

  const clearAsyncStorage = async() => {
    AsyncStorage.clear();
}

const FixCarts = useSelector((state) => state.FixCarts);
const { Carts } = FixCarts;



  return (
    <>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          if (item?.Path) {
            Nav(item?.Path);
          }
          if (title === "📤  Déconnexion") {
            dispatch({ type: LOGOUT });
            AsyncStorage.setItem("login", "");
            AsyncStorage.setItem("password", "");
            AsyncStorage.setItem("Guid", "");
            AsyncStorage.setItem("Cart", "");
            clearAsyncStorage()
            // FixdelAllCarts(Carts,dispatch)
            dispatch({type:SET_USER_GUID_TRUE})
          } else if (title === "📝 Mes informations") {
            Nav("MesInformations");
          }
        }}
      >
        <View>
          <H7
            Bold="400"
            style={{
              color: title === "📤  Déconnexion" ? COLORS.Rouge : COLORS.Noir,
            }}
          >
            {title}
          </H7>
        </View>
        {last ? null : <Image source={ArrowG} />}
      </TouchableOpacity>
      {Divider ? <View style={styles.Divider} /> : null}
    </>
  );
};

export default Item;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    padding: 5,
    marginVertical: 15,
  },
  Divider: {
    height: 1,
    opacity: 0.2,
    backgroundColor: COLORS.Noir,
  },
});
