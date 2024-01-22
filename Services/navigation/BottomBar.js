import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/Fontisto";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import Adresse from "../../Layouts/App-Pages/Adresse";
import Profile from "../../Layouts/App-Pages/Profile";
import { COLORS } from "../../Components/Styles/theme";
import Chercher from "../../Layouts/App-Pages/Chercher";
import Pannier from "../../Layouts/App-Pages/Accueil";
import { Image } from "react-native";

const Tab = createMaterialBottomTabNavigator();
const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Chercher"
    activeColor={COLORS.Noir}
    inactiveColor={COLORS.Noir}
    barStyle={{ paddingBottom: 8, paddingTop: 8,  }}
  >
    <Tab.Screen
      name="Chercher"
      component={Chercher}
      options={{
        tabBarLabel: "Chercher",
        tabBarColor: COLORS.Blanc,
        tabBarIcon: ({ focused, color, size }) => (
          <Image
            source={require("../../Assets/Images/🔍.png")}
            style={{ marginBottom: 4 }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Adresse"
      component={Adresse}
      options={{
        tabBarLabel: "Adresse",
        tabBarColor: COLORS.Blanc,
        tabBarIcon: () => (
          <Image
            source={require("../../Assets/Images/📍.png")}
            // style={{ tintColor: COLORS.Blue0 }}
            style={{ paddingBottom: 4 }}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Pannier"
      component={Pannier}
      options={{
        tabBarLabel: "Pannier",
        tabBarColor: COLORS.Blanc,
        tabBarIcon: () => (
          <Image
            source={require("../../Assets/Images/🛒.png")}
            // style={{ tintColor: COLORS.Blue0 }}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: "Profile",
        tabBarColor: COLORS.Blanc,
        tabBarIcon: () => (
          <Image
            source={require("../../Assets/Images/👤.png")}
            style={{ paddingBottom: 4 }}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;
