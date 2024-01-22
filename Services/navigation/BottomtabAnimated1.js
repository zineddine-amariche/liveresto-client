import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon, { Icons } from "../../Components/Icons/Icons";
import * as Animatable from "react-native-animatable";
import Chercher from "../../Layouts/App-Pages/Chercher";
import Pannier from "../../Layouts/App-Pages/Panier";
import MesAdresses from "../../Layouts/App-Pages/MesAdresses";
import Profile from "../../Layouts/App-Pages/Profile";
import { COLORS } from "../../Components/Styles/theme";
import Search from "../../Components/TabBarre/Icons/Search";
import { useSelector } from "react-redux";
import { Txt } from "../../Components/utils/TextComponents";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
  const { Carts } = props;
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: { scale: 0.5, rotate: "0deg" },
        1: { scale: 1.5, rotate: "360deg" },
      });
    } else {
      viewRef.current.animate({
        0: { scale: 1.5, rotate: "360deg" },
        1: { scale: 1, rotate: "0deg" },
      });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}
    >
      {item.Notification ? <View></View> : null}

      {item.Notification ? (
        <View style={styles.NbrItem}>
          <Txt color={COLORS.Blanc} Bold="700" fontSize={14}>
            {Carts?.length}
          </Txt>
        </View>
      ) : null}

      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        <Icon
          type={item.type}
          name={focused ? item.activeIcon : item.inActiveIcon}
          color={focused ? COLORS.Vert3 : COLORS.primaryLite}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default function AnimTab1() {
  const FixCarts = useSelector((state) => state.FixCarts);
  const { Carts } = FixCarts;

  const TabArr = [
    {
      route: "Chercher",
      label: "Chercher",
      type: Icons.Ionicons,
      activeIcon: "grid",

      inActiveIcon: "grid-outline",
      component: Chercher,

      Icon: Search,
      Notification: false,
    },

    {
      route: "Adresse",
      label: "Adresse",
      type: Icons.Ionicons,
      activeIcon: "location",
      inActiveIcon: "location-outline",
      component: MesAdresses,
      Icon: Search,
      Notification: false,
    },
    {
      route: "Panier",
      label: "Pannier",
      type: Icons.MaterialIcons,
      activeIcon: "shopping-cart",
      inActiveIcon: "add-shopping-cart",
      component: Pannier,
      Icon: Search,
      Notification: Carts?.length ? true : false,
    },
    {
      route: "Profile",
      label: "Profile",
      type: Icons.FontAwesome,
      activeIcon: "user-circle",
      inActiveIcon: "user-circle-o",
      component: Profile,
      Icon: Search,
      Notification: false,
    },
  ];

  useEffect(() => {
    if (Carts.length == 0) {
      AsyncStorage.removeItem("Cart", null);
    } else {
      AsyncStorage.setItem("Cart", JSON.stringify(Carts));
    }
  }, [Carts]);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          bottom: 0,
          right: 0,
          left: 0,
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        },
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => (
                <TabButton {...props} item={item} Carts={Carts} />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  NbrItem: {
    position: "absolute",
    zIndex: 100,
    top: 5,
    backgroundColor: COLORS.Rouge,
    height: 20,
    width: 20,
    right: 55,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
