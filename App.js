import "react-native-gesture-handler";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Reanimated 2"]);
import React, { useEffect, useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import RootLiveRestoClient from "./src/RootSmartHome";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginFromStorage } from "./Redux/Actions/AuthActions";
import { SET_USER_GUID } from "./Redux/Types/Accueil";
import SplashLaoder from "./Layouts/App-Pages/Splash";
import { GETPRODUCTASYNC } from "./Redux/Types/Panier";
import { GET_ADRESSES, GET_DESACTIVATE_INFO } from "./Redux/Types/Addresses";
import { GET_ID_ESTABLISHEMENTS } from "./Redux/Types/ValidationOrder";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

// enableLatestRenderer();
LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
]);
function App({ navigation }) {
  const dispatch = useDispatch();
  let configHead = {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "fr",
      accept: "application/json",
    },
  };
  const [checkAsyc, setcheckAsyc] = useState(false);

  const checkingAsync = async () => {
    let email = await AsyncStorage.getItem("login");
    let password = await AsyncStorage.getItem("password");
    let Guid = await AsyncStorage.getItem("Guid");
    if (Guid) {
      dispatch({ type: SET_USER_GUID });
    }
    if (email && password) {
      LoginFromStorage(dispatch, configHead, email, password);
      setcheckAsyc(true);
    } else {
      setcheckAsyc(true);
    }
  };

  const cartLocal = async () => {
    let data = await AsyncStorage.getItem("Cart");
    let id = await AsyncStorage.getItem("id");
    // console.log("cartLocal", data);
    if (data) {
      dispatch({ type: GETPRODUCTASYNC, payload: JSON.parse(data) });
      dispatch({ type: GET_ID_ESTABLISHEMENTS, payload: id });
    }
  };

  const Adresses = useSelector((state) => state.Adresses);
  const { AllAddresses } = Adresses;

  const checkingAsyncaddress = async () => {
    let Address = await AsyncStorage.getItem("Address");
    // console.log('Address', JSON.parse(Address))
    if (Address) {
      dispatch({ type: GET_ADRESSES, payload: JSON.parse(Address) });
    } else {
      AsyncStorage.setItem("Address", JSON.stringify(AllAddresses));
    }
  };

  useEffect(() => {
    checkingAsync();
    cartLocal();
  }, []);

  useEffect(() => {
    checkingAsyncaddress();
  }, []);

  const getInfoAddress = async () => {
    let Address = await AsyncStorage.getItem("info_address");

    if (Address) {
      dispatch({ type: GET_DESACTIVATE_INFO });
    }
  };
  useEffect(() => {
    getInfoAddress();
  }, []);
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          {checkAsyc ? (
            <BottomSheetModalProvider>
              <RootLiveRestoClient navigation={navigation} />
            </BottomSheetModalProvider>
          ) : (
            <SplashLaoder />
          )}
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;
