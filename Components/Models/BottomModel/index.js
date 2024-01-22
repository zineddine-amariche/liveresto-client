import { View, Text, Animated, StyleSheet } from "react-native";
import React from "react";
import BottomSheetBehavior from "reanimated-bottom-sheet";
import { useRef } from "react";
import { TouchableOpacity } from "react-native";
import { Txt } from "../../utils/TextComponents";
import RadioCheck from "../../RadioCheck/useRadiochek";



const SheetBehavior = () => {

  const sheetRef = useRef(null);
  const fall = new Animated.Value(1);

  const funHeader = () => {
    // if (Visible) {
    sheetRef.current.snapTo(1);
    //   setVisible(false);
    // } else {
    //   CloseSheet();
    // }
  };

  const RenderContents = () => {
    return (
      <View>
        <Text>RenderContents</Text>
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
  return (
    <View>
      <BottomSheetBehavior
        ref={sheetRef}
        snapPoints={[350, 0]}
        renderContent={RenderContents}
        enabledContentGestureInteraction={true}
        initialSnap={0}
        // callbackNode={fall}
        renderHeader={RenderHeader}
      />
    </View>
  );
};

export default SheetBehavior;



const styles = StyleSheet.create({
    header: {
      backgroundColor: "#eee",
      shadowColor: "#FFFFFF",
      shadowOffset: { width: -1, height: -3 },
      shadowRadius: 2,
      shadowOpacity: 0.4,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: "center",
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: "#00000040",
      marginBottom: 10,
    },
  });