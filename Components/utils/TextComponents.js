import { Text } from "react-native";
import React from "react";
import DimensionsHook from "../Hooks/DimensionsHook";
import { COLORS } from "../Styles/theme";

export const H1 = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
  fontWeight,
}) => {
  const { isMobile, isTablet, isDesktop } = DimensionsHook();
  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      style={{
        fontSize: fontSize || 55,
        fontFamily: fontFamily || "OxygenBold",
        color: color || COLORS.Noir,
        fontWeight: fontWeight || "900",
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
export const H2 = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
}) => {
  const { isMobile, isTablet, isDesktop } = DimensionsHook();
  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      style={{
        fontSize: fontSize || isMobile ? 26 : 28,
        fontFamily: fontFamily || "Gotu",
        color: color || COLORS.black,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
export const H3 = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
}) => {
  const { isMobile, isTablet, isDesktop } = DimensionsHook();
  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      style={{
        fontSize: fontSize || isMobile ? 24 : 26,
        fontFamily: fontFamily || "Gotu",
        color: color || COLORS.Noir,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
export const H4 = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
  Bold,
}) => {
  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      style={{
        fontSize: fontSize ||  22 ,
        fontFamily: fontFamily || "Helvetica",
        color: color || COLORS.Noir,
        fontWeight: Bold || "700",
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
export const H5 = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
  fontWeight
}) => {
  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      style={{
        fontSize: fontSize || 20 ,
        fontFamily: fontFamily || "Helvetica",
        color: color || COLORS.Noir,
        ...style,
        fontWeight:fontWeight || "400"
      }}
    >
      {children}
    </Text>
  );
};
export const H6 = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
}) => {
  const { isMobile, isTablet, isDesktop } = DimensionsHook();
  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      style={{
        fontSize: fontSize ||  18,
        fontFamily: fontFamily || "Gotu",
        color: color || COLORS.Noir,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
export const H7 = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
  Bold
}) => {
  const { isMobile, isTablet, isDesktop } = DimensionsHook();
  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      style={{
        fontSize: fontSize ||  16 ,
        fontFamily: fontFamily || "Helvetica",
        color: color || COLORS.Noir,
        fontWeight : Bold || '700',
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
export const Txt = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
  opacity,
  Bold,
  onTextLayout
}) => {
  const { isMobile, isTablet, isDesktop } = DimensionsHook();
  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      onTextLayout={onTextLayout}
      style={{
        fontSize: fontSize || 16 ,
        fontFamily: fontFamily || "Helvetica",
        color: color || COLORS.Noir,
        fontWeight: Bold || "400",
        opacity: opacity || 1,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
export const GoldTxt = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
  fontWeight,
  opacity,
}) => {
  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      style={{
        fontSize: fontSize || 16,
        fontFamily: fontFamily || "OxygenRegular",
        color: color || COLORS.Jaune2,
        fontWeight: fontWeight || "400",
        opacity: opacity || 1,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
export const SmallTxt = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
}) => {
  const { isMobile, isTablet, isDesktop } = DimensionsHook();
  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      style={{
        fontSize: fontSize || isMobile ? 12 : 14,
        fontFamily: fontFamily || "OxygenRegular",
        color: color || COLORS.Noir,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
export const LightTxt = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
}) => {
  const { isMobile, isTablet, isDesktop } = DimensionsHook();
  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      style={{
        fontSize: fontSize || isMobile ? 14 : 17,
        fontFamily: fontFamily || "OxygenLight",
        color: color || COLORS.Blanc,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
export const DarkTxt = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
}) => {
  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      style={{
        fontSize: fontSize ||  14 ,
        fontFamily: fontFamily || "Helvetica",
        color: color || COLORS.Noir,
        ...style,
        fontWeight:'400'
      }}
    >
      {children}
    </Text>
  );
};
export const SmallLightTxt = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
}) => {
  const { isMobile, isTablet, isDesktop } = DimensionsHook();
  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      style={{
        fontSize: fontSize || isMobile ? 12 : 14,
        fontFamily: fontFamily || "OxygenLight",
        color: color || COLORS.Blanc,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
export const SmallBoldTxt = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
}) => {
  const { isMobile, isTablet, isDesktop } = DimensionsHook();
  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      style={{
        fontSize: fontSize ||  14,
        fontFamily: fontFamily || "OxygenBold",
        color: color || COLORS.Noir,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
export const BoldTxt = ({
  fontSize,
  fontFamily,
  color,
  children,
  style,
}) => {
  const { isMobile, isTablet, isDesktop } = DimensionsHook();
  return (
    <Text
      selectable={false}
      style={{
        fontSize: fontSize || 14,
        fontFamily: fontFamily || "Roboto",
        color: color || COLORS.Noir,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
export const FraisTxt = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
  Bold,
  opacity,
  onPress
}) => {
  return (
    <Text
    onPress={onPress}
      selectable={false}
      numberOfLines={numberOfLines}
      style={{
        fontSize: fontSize || 16,
        fontFamily: fontFamily || "OxygenRegular",
        color: color || COLORS.Blue2,
        fontWeight: Bold || "400",
        opacity: opacity || 1,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
