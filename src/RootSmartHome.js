import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerScreen from "../Services/navigation/DrawerScreen";
import AuthStackScreen from "../Services/navigation/AuthStack";
const RootStack = createNativeStackNavigator();
import { useSelector } from "react-redux";


const RootLiveRestoClient = () => {
  const auth = useSelector((state) => state.auth);
  const { isAuth } = auth;


  if (isAuth) {
    return (
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStack.Screen
          name="DrawerScreen"
          component={DrawerScreen}
          screenOptions={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    );
  } else {
    return (
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStack.Screen
          name="AuthStackScreen"
          component={AuthStackScreen}
          options={{
            animationEnabled: false,
          }}
        />
      </RootStack.Navigator>
    );
  }
};
export default RootLiveRestoClient;
