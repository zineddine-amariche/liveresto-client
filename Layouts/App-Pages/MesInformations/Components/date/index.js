import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { styles } from "./styles";
import { COLORS } from "../../../../../Components/Styles/theme";
import { Txt } from "../../../../../Components/utils/TextComponents";
import { useSelector } from "react-redux";

const DateHandler = ({ setFieldValue, nodate }) => {
  const auth = useSelector((state) => state.auth);
  const { error, type, data } = auth;

  const [date, setDate] = useState(new Date());
  const [Mode, setMode] = useState("date");
  const [show, setshow] = useState(false);
  const [text, settext] = useState("MM-DD-YYYY");
  const [Color, setColor] = useState(false);
  const onChage = (event, selectedDate) => {
    const currenDate = selectedDate || date;
    setshow(Platform.OS === "ios");
    setDate(currenDate);
    let tempDate = new Date(currenDate);
    let fDate =
      tempDate.getFullYear() +
      "-" +
      (tempDate.getMonth() + 1) +
      "-" +
      tempDate.getDate();

    setFieldValue("birthday", fDate);
    settext(fDate);
    setColor(true);
  };

  const showMode = (currentMode) => {
    setshow(true);
    setMode(currentMode);
  };

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        if (!nodate) showMode("date");
      }}
    >
      <View>
        <Text
          style={{ color: Color ? COLORS.Vert2 : COLORS.Noir, fontSize: 16 }}
        >
          {data?.customer.birthday}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          if (!nodate) showMode("date");
        }}
      >
        <Txt>🗓</Txt>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePiker"
          value={date}
          mode={Mode}
          is24Hour="default"
          onChange={onChage}
          minimumDate={new Date(1940, 1, 1)}
          maximumDate={new Date(2002, 12, 31)}
        />
      )}
    </Pressable>
  );
};

export default DateHandler;
