import {
  StyleSheet,
  Pressable,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useRef } from "react";
import { H5, SmallBoldTxt, Txt } from "./TextComponents";
import { COLORS } from "../Styles/theme";

export const PrimaryButton = ({
  children,
  style,
  onPress,
  width,
  isHovered,
  opacity,
  Bold,
  loading,
  disabled,
  fontWeight
}) => {
  const hoverRef = useRef(null);

  return (
    <TouchableOpacity
      ref={hoverRef}
      onPress={onPress}
      style={[
        styles.buttonPrimary,
        {
          backgroundColor: isHovered ? COLORS.Vert2 : COLORS.Vert3,
          width: width || "auto",
        },

        { ...style },
      ]}
      disabled={disabled}
    >
      {loading ? (
        <ActivityIndicator color={COLORS.Blanc}></ActivityIndicator>
      ) : (
        <H5
          numberOfLines={1}
          color={COLORS.Blanc}
          opacity={opacity}
          fontWeight={fontWeight}
        >
          {children}
        </H5>
      )}
    </TouchableOpacity>
  );
};

export const SecondaryButton = ({
  children,
  style,
  onPress,
  width,
  opacity,
  Bold,
  loading
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonSecondary,
        {
          backgroundColor: "transparent",
          width: width || "auto",
          borderColor: COLORS.Vert3,
        },
        { ...style },
      ]}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color={COLORS.Vert2}></ActivityIndicator>
      ) : (
        <H5 color={COLORS.Vert3} opacity={opacity} style={{ fontWeight: Bold }}>
          {children}
        </H5>
      )}
    </TouchableOpacity>
  );
};

export const ButtonRound = ({
  children,
  style,
  onPress,
  width,
  isPrimary,
  opacity,
}) => {
  const hoverRef = useRef(null);

  return (
    <Pressable
      ref={hoverRef}
      onPress={onPress}
      style={[
        styles.buttonPrimaryRound,
        {
          backgroundColor: isPrimary ? COLORS.Vert3 : COLORS.Blanc,
          width: width || "auto",
        },

        { ...style },
      ]}
    >
      <Txt
        numberOfLines={1}
        color={isPrimary ? COLORS.Blanc : COLORS.Vert3}
        opacity={opacity}
        style={styles.TextButtonRound}
      >
        {children}
      </Txt>
    </Pressable>
  );
};

export const SmButtonRound = ({
  children,
  style,
  onPress,
  width,
  isPrimary,
  opacity,
}) => {
  const hoverRef = useRef(null);

  return (
    <Pressable
      ref={hoverRef}
      onPress={onPress}
      style={[
        styles.smbuttonPrimaryRound,
        {
          backgroundColor: isPrimary ? COLORS.Vert3 : COLORS.Blanc,
          width: width || "auto",
        },

        { ...style },
      ]}
    >
      <SmallBoldTxt
        numberOfLines={1}
        color={isPrimary ? COLORS.Blanc : COLORS.Vert3}
        opacity={opacity}
        style={styles.TextButtonRound}
      >
        {children}
      </SmallBoldTxt>
    </Pressable>
  );
};
export const XSButtonRound = ({
  children,
  style,
  onPress,
  width,
  isPrimary,
  opacity,
}) => {
  const hoverRef = useRef(null);

  return (
    <Pressable
      ref={hoverRef}
      onPress={onPress}
      style={[
        styles.xsbuttonPrimaryRound,
        {
          backgroundColor: isPrimary ? COLORS.Vert3 : COLORS.Blanc,
          width: width || "auto",
        },

        { ...style },
      ]}
    >
      <SmallBoldTxt
        numberOfLines={1}
        color={isPrimary ? COLORS.Blanc : COLORS.Vert3}
        opacity={opacity}
        style={styles.TextButtonRound}
      >
        {children}
      </SmallBoldTxt>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  buttonPrimary: {
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPrimaryRound: {
    height: 30,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    marginHorizontal: 10,
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    paddingHorizontal: 10,
    flex:1
  },
  smbuttonPrimaryRound: {
    height: 30,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    marginHorizontal: 10,
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  xsbuttonPrimaryRound: {
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  buttonSecondary: {
    height: 51,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
  },
});
