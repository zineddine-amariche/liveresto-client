import * as Font from "expo-font";

const UseFonts = async () => {
  await Font.loadAsync({
    Gotu: require("../fonts/Gotu.ttf"),
    OxygenLight: require("../fonts/Oxygen-Light.ttf"),
    OxygenRegular: require("../fonts/Oxygen-Regular.ttf"),
    OxygenBold: require("../fonts/Oxygen-Bold.ttf"),
    PoppinsBlack:require('../fonts/Poppins-Black.ttf'),
    PoppinsBold:require('../fonts/Poppins-Bold.ttf'),
    PoppinsLight:require('../fonts/Poppins-Light.ttf'),
    PoppinsMedium:require('../fonts/Poppins-Medium.ttf'),
    PoppinsRegular:require('../fonts/Poppins-Regular.ttf'),
    PoppinsSemiBold:require('../fonts/Poppins-SemiBold.ttf'),
    RobotoBold:require('../fonts/Roboto-Bold.ttf'),
    RobotoLight:require('../fonts/Roboto-Light.ttf'),
    RobotoMedium:require('../fonts/Roboto-Medium.ttf'),
    RobotoRegular:require('../fonts/Roboto-Regular.ttf'),
  }).catch((err) => console.log(err));
};

export default UseFonts;