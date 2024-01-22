import { View, Image, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./Hooks/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Croix from "../../../Assets/Images/Croix.png";
import MenueItems from "../Menue";
import { COLORS } from "../../Styles/theme";
import { FraisTxt, H7, LightTxt, Txt } from "../../utils/TextComponents";
import Arrow from "../../../Assets/Images/Left.png";
import { DELETE_FILTRES, DELETE_RECENTS } from "../../../Redux/Types/Search";
import { useDispatch } from "react-redux";

const HeaderPrimary = ({
  LogOut,
  goBack,
  Title,
  navigation,
  Visible,
  closeMenu,
  openModel,
  openMenu,
  Reinitiliser,
  R1,
  Modify,
  Open
}) => {
  const NavigatonTo = (nav, To) => {
    nav.navigate(To);
  };
  const dispatch = useDispatch();
  const Reinitiliserfiltres = () => {
    dispatch({ type: DELETE_FILTRES });
  };

  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => {
          goBack();
        }}
      >
        <Image source={R1 ? Croix : Arrow} />
      </TouchableOpacity>
      <View style={styles.Right}>
        <H7 style={styles.TextTitle}>{Title}</H7>

        {Title === "Filtre" && Reinitiliser ? (
          <TouchableOpacity onPress={Reinitiliserfiltres}>
            <LightTxt style={styles.renitialisation}>
              Réinitialiser les filtres
            </LightTxt>
          </TouchableOpacity>
        ) : null}

        {Title === "" ? (
          <TouchableOpacity onPress={openMenu}>
            <Ionicons
              name="filter"
              size={28}
              color={COLORS.primary}
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
        ) : null}

        {Title === "Information Personnelles" ? (
          <TouchableOpacity onPress={openMenu}>
            <MaterialCommunityIcons
              name="account-edit-outline"
              size={28}
              color={COLORS.primary}
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
        ) : null}




        {Modify ? (
          <TouchableOpacity onPress={Open}>
            <Txt color={COLORS.Vert3}>{Modify}</Txt>
          </TouchableOpacity>
        ) : null}
      </View>
      <MenueItems
        visible={Visible}
        closeMenu={closeMenu}
        NavigatonTo={NavigatonTo}
        navigation={navigation}
        openModel={openModel}
        LogOut={LogOut}
      />
    </View>
  );
};

export default HeaderPrimary;
