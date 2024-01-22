import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Hooks/styles";
import HeaderPrimary from "../../../Components/Headers/header-1-Primary";
import { TouchableOpacity } from "react-native";
import BottomSheetBehavior from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import { useRef } from "react";
import { SIZES } from "../../../Components/constants/theme";
import UpdateForms from "./Components/UpdateForms";
import InfOForm from "./Components/InforForms";
import { COLORS } from "../../../Components/Styles/theme";
import ToastMessages from "../../../Components/ToastMessages";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_MESSAGE } from "../../../Redux/Types/Login";

const MesInformations = ({ navigation, navigation: { goBack } }) => {
  const sheetRef = useRef(null);
  const fall = new Animated.Value(1);
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const { error, type, data } = auth;

  const funHeader = () => {
    setisOpen(false);
    sheetRef.current.snapTo(1);
  };

  const RenderContents = () => {
    return (
      <View style={{ backgroundColor: COLORS.Blanc }}>
        <UpdateForms funHeader={funHeader} />
      </View>
    );
  };

  const RenderHeader = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity style={styles.panelHeader} onPress={funHeader}>
          <View style={styles.panelHandle} />
        </TouchableOpacity>
      </View>
    );
  };
  const [isOpen, setisOpen] = useState(false);
  const Open = () => {
    sheetRef.current.snapTo(0);
    setisOpen(true);
  };

  useEffect(() => {
    if (error) {
      funHeader();
      setTimeout(() => {
        dispatch({ type: CLEAR_MESSAGE });
        console.log("delete");
      }, 3000);
    }
  }, [error]);

  return (
    <View style={styles.container}>
      {error && <ToastMessages type={type} error={error} />}

      <HeaderPrimary
        Title={"Mes Informations"}
        goBack={goBack}
        Modify={"Modifier"}
        Open={Open}
      />
      {isOpen ? (
        <TouchableOpacity
          style={{ backgroundColor: COLORS.Gris, flex: 1 }}
          onPress={funHeader}
        ></TouchableOpacity>
      ) : (
        <InfOForm funHeader={funHeader} navigation={navigation} />
      )}

      <BottomSheetBehavior
        ref={sheetRef}
        snapPoints={[480, 0]}
        renderContent={RenderContents}
        enabledContentGestureInteraction={true}
        initialSnap={1}
        callbackNode={fall}
        renderHeader={RenderHeader}
      />
    </View>
  );
};

export default MesInformations;
