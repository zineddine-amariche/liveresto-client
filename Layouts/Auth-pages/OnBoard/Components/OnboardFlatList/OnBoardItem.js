import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
  Dimensions,
  ImageBackground,
} from "react-native";
const { height, width } = Dimensions.get("screen");

function OnBoardItem({ item }) {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <View
        style={{
          position: "absolute",
          top: -26,
          zIndex: 5,
          width: "100%",
          alignItems: "center",
        }}
      ></View>

      <View
        style={{
          backgroundColor: "#6F5ED4",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: "15%",
        }}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.description}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: height * 0.85,
    alignItems: "center",
    justifyContent: "space-between",
  },
  img: {
    justifyContent: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 28,
    color: "#fff",
    textAlign: "center",
  },

  desc: {
    fontWeight: "100",
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    paddingHorizontal: 30,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:"#eee",
//   },
//   image: {
//     height: '100%',
//     width: '100%',
//     backgroundColor:'#ccc'
//   },
//   text: {
//     color: 'white',
//     fontSize: 42,
//     lineHeight: 84,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     backgroundColor: '#000000c0',
//   },
// });
export default OnBoardItem;
