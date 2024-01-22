import { CheckBox } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

export const RadioInput = ({ onPress, checked, title }) => {
    return (
      <CheckBox
        checked={checked}
        title={title || <></>}
        containerStyle={{
          alignSelf: "flex-start",
          margin: 0,
          padding: 0,
          backgroundColor: "transparent",
          borderWidth: 0,
        }}
        checkedIcon={
          <Ionicons name="checkmark-circle" size={24} color={colors.green2} />
        }
        uncheckedIcon={
          <Ionicons
            name="ios-radio-button-off-outline"
            size={24}
            color={colors.grayBorder}
          />
        }
        onPress={onPress}
      />
    );
  };