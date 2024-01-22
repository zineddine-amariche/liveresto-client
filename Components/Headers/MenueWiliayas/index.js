import React from "react";
import { Button, Menu, Divider } from "react-native-paper";
import { View, Image } from "react-native";
import { COLORS } from "../../../Styles/theme";
import DATA from "./Data";
import { ScrollView } from "react-native-gesture-handler";
const MenueWiliayas = ({ Visible, closeMenu ,OnSelectWiliays}) => {
  let Margin = 80;
  return (
    <View style={{ position: "absolute", top: Margin, left: 15 }}>
      <Menu
        visible={Visible}
        onDismiss={closeMenu}
        style={{ height: 200 }}
        anchor={<Button style={{ height: 1 }}></Button>}
      >
        <ScrollView>
          {DATA.map((item) => {
            return (
                 
              <View   key={item.id}>
                <Menu.Item
                  icon={() => (
                    <Image
                      source={require("../../../Assets/WelcomScreen/location.png")}
                      style={{ tintColor: COLORS.primary }}
                    />
                  )}
                  onPress={() => {
                    // console.log("open popup");
                    closeMenu();
                    OnSelectWiliays(item.value)
                  }}
                  title={item.wiliaya}
                ></Menu.Item>

                <Divider />
              </View>
            );
          })}
        </ScrollView>
      </Menu>
    </View>
  );
};

export default MenueWiliayas;
