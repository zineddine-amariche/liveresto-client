import { View, Animated, Modal, StyleSheet, Dimensions, Pressable } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("screen");

const ModalPrimary = ({ visible, children,onDissmis }) => {
  const [ShowModal, setShowModal] = React.useState(visible);

  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={ShowModal}>
      <Pressable style={styles.modalBackGround} onPress={()=>{
        onDissmis()
      }}>
      </Pressable>

        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ scale: scaleValue }] },
          ]}
        >
          {children}
        </Animated.View>
    </Modal>
  );
};


export default ModalPrimary;


const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.1)",
    justifyContent: "center",
    alignItems: "center",
    overflow:"hidden",

  },
  modalContainer: {
    width: width * .9,
    backgroundColor: "white",
    elevation: 20,
    overflow: "hidden",
    borderRadius: 6,
    zIndex:1000,
    position:"absolute",
    alignSelf:"center",
    top:"30%",
    paddingBottom:10
    

  },
});