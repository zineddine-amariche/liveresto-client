import React from "react";
import { Button, Menu, Divider } from "react-native-paper";
import { View, Image } from "react-native";
import { COLORS } from "../../Styles/theme";


const MenueItems = ({
  visible,
  closeMenu,
  LogOut,
}) => {
  let Margin = 60;
  return (
    <View style={{ position: "absolute", top: Margin, right: 10 }}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        style={{}}
        anchor={<Button style={{ height: 1 }}></Button>}
      >
        <Menu.Item
          icon={() => (
            <Image
              source={require("../../../Assets/Images/Croix.png")}
              style={{ tintColor: COLORS.Jaune }}
            />
          )}
          onPress={() => {
            // console.log("open popup");
            closeMenu();
          }}
          title="Besoin d'aide"
        ></Menu.Item>

        <Menu.Item
          icon={() => (
            <Image
              source={require("../../../Assets/Images/Croix.png")}
              style={{ tintColor: COLORS.red }}
            />
          )}
          onPress={() => {
            LogOut();
            closeMenu();
          }}
          title="Se déconnecter"
        ></Menu.Item>
        <Divider />
      </Menu>
    </View>
  );
};

export default MenueItems;
