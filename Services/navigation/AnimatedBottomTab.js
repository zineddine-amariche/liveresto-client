import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon, { Icons } from "./components/Icons";
import * as Animatable from "react-native-animatable";
import { COLORS } from "../../Components/Styles/theme";
import Accueil from "../../Layouts/App-Pages/Accueil";
const TabArr = [
  {
    route: "Accueil",
    label: "Accueil",
    type: Icons.Feather,
    icon: "home",
    component: Accueil,
  },
  // {
  //   route: "RendezVous",
  //   label: "Rendez-vous",
  //   type: Icons.Fontisto,
  //   icon: "date",
  //   component: RendezVous,
  // },
  //   { route: 'Add', label: 'Add', type: Icons.Feather, icon: 'plus-square', component: Compte },
  // {
  //   route: "HealthBook",
  //   label: "Carnet de santé",
  //   type: Icons.Ionicons,
  //   icon: "document-text-outline",
  //   component: HealthBook,
  // },
  // {
  //   route: "Profile",
  //   label: "Compte",
  //   type: Icons.FontAwesome,
  //   icon: "user-circle-o",
  //   component: Compte,
  // },
];

const Tab = createBottomTabNavigator();

const animate1 = {
  0: { scale: 0.5, translateY: 3 },
  0.92: { translateY: -14 },
  1: { scale: 1.2, translateY: -14 },
};
const animate2 = {
  0: { scale: 1.2, translateY: -24 },
  1: { scale: 1, translateY: 7 },
};

const circle1 = {
  0: { scale: 0 },
  0.3: { scale: 0.9 },
  0.5: { scale: 0.2 },
  0.8: { scale: 0.7 },
  1: { scale: 1 },
};
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } };

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  // useEffect(() => {
  //   if (focused) {
  //     viewRef.current.animate(animate1);
  //     circleRef.current.animate(circle1);
  //     textRef.current.transitionTo({ scale: 1 });
  //   } else {
  //     viewRef.current.animate(animate2);
  //     circleRef.current.animate(circle2);
  //     textRef.current.transitionTo({ scale: 0 });
  //   }
  // }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}
    >
      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View ref={circleRef} style={styles.circle} />
          <Icon
            type={item.type}
            name={item.icon}
            color={focused ? COLORS.white : COLORS.primary}
          />
        </View>
        <Animatable.Text ref={textRef} style={styles.text}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default function AnimTab1() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarHideOnKeyboard: true
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
              tabBarButton: (props) => <TabButton {...props} item={item} />,
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
  tabBar: {
    height: 55,
    position: "absolute",
    bottom: 9,
    right: 16,
    left: 16,
    borderRadius: 16,
  },
  btn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: COLORS.white,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 25,
  },
  text: {
    fontSize: 10,
    textAlign: "center",
    color: COLORS.primary,
  },
});
