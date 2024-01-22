import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { DarkTxt } from "../../../../../Components/utils/TextComponents";
import { PrimaryButton } from "../../../../../Components/utils/Buttons";
import { COLORS } from "../../../../../Components/Styles/theme";
import Space from "../../../../../Components/Space";

 

const ContentRenders = ({ closeAll }) => {
  return (
    <>
      <View
        style={{
          backgroundColor: COLORS.white,
          padding: 16,
          // height: SIZES.height / 4,
        }}
      >
        <DarkTxt style={styles.Head}>
          Nous enverrons un code OTP à votre adresse e-mail ou numéro de
          téléphone enregistré
        </DarkTxt>
        <ScrollView>
        <View style={styles.Input}>

          <TextInput
         
           />
        </View>
        </ScrollView>
        <PrimaryButton
          onPress={() => {
            closeAll();
          }}
        >
          cancel
        </PrimaryButton>
        <Space space={90} />
      </View>
    </>
  );
};

export default ContentRenders;

const styles = StyleSheet.create({
  Point: {
    height: 7,
    width: 7,
    borderRadius: 8,
    backgroundColor: COLORS.orangeYellow,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
    marginTop: 3,
  },
  item: {
    backgroundColor: COLORS.paleGreyTwo,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    height: 80,
    justifyContent: "space-between",
    width: "100%",
  },
  Head: {
    alignSelf: "center",
    paddingVertical: 10,
    textAlign: "center",
    lineHeight: 23,
  },
  Input: {
    backgroundColor: COLORS.Gris,
    color: COLORS.Noir,
    borderRadius: 6,
    paddingLeft: 10,
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    fontSize: 14.4,
    flex: 1,
    marginBottom:20,
    overflow:"hidden"
  },
});
