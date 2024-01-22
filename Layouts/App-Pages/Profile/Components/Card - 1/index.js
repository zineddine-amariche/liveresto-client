import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./Components/styles";
import { Avatar } from "react-native-elements";
import { DarkTxt, H7 } from "../../../../../Components/utils/TextComponents";
import Item from "../item";
import { useSelector } from "react-redux";
const CardP1 = ({ Nav }) => {
  const auth = useSelector((state) => state.auth);
  const { error, type, data } = auth;

  return (
    <View style={styles.container}>
      <View style={styles.GR1}>
        <Avatar
          size={40}
          rounded
          icon={{ name: "user", type: "font-awesome", color: "#ccc" }}
          onPress={() => console.log("Works!")}
          activeOpacity={0.9}
          containerStyle={styles.Avatar}
        />
        <View>
          <H7>
            {data?.customer.lastname} {data?.customer.firstname}
          </H7>
          <DarkTxt>{data?.customer.email}</DarkTxt>
        </View>
      </View>
      {/* <View style={styles.Space} /> */}
      <Item title={"📝 Mes informations"} Nav={Nav} />
    </View>
  );
};

export default CardP1;
