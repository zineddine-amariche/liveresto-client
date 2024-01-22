import { StyleSheet, View } from "react-native";
import React from "react";
import { useMemo } from "react";
import { BottomSheetModal, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useCallback } from "react";
import CustomBackdrop from "./CustomBackdrop";
import ContentRenders from "../../Layouts/Auth-pages/ForgotPassword/Components/BottomSheet/ContentRenders";
import { COLORS } from "../Styles/theme";

const BottomSheet = ({
  bottomSheetModalRef,
  navigation,
  closeAll,
  onPress,
  height,
  children
}) => {



  let bottomHeader = height ? height : "65%"


  const snapPoints = useMemo(() => [bottomHeader]);
  const handleSheetChanges = useCallback((index) => {}, []);



  const handleClosePress = () => {
    bottomSheetModalRef.current.close();
  };
  
  return (
    <View style={styles.containerBottom}>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={CustomBackdrop}
        onDismiss={handleClosePress}
        handleIndicatorStyle={{
          backgroundColor: COLORS.blueGreen,
          width: 50,
          height: 5,
        }}
      >
        <BottomSheetScrollView showsVerticalScrollIndicator={false}>
          {children}
        </BottomSheetScrollView>
      </BottomSheetModal>
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({});
