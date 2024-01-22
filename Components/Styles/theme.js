import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  Blanc: "#FFFFFF",
  Noir: "#08261D",
  Gris: "#F5F7F7",
  Rouge: "#DC0909",
  Vert0: "#495719",
  Vert1: "#6B7F24",
  Vert2: "#8CA630",
  Vert3: "#AAC841",
  Vert4: "#BCD469",
  Vert5: "#CEDF90",
  Vert6: "#DFEABB",
  Vert7: "#F1F6DF",
  Blue8: "#255A4C",
  Blue0: "#347E6B",
  Blue1: "#43A289",
  Blue2: "#5DBCA3",
  Blue3: "#81CBB7",
  Blue4: "#A5DACC",
  Blue5: "#C9E9E0",
  Blue6: "#EDF8F5",
  Jaune0: "#A68303",
  Jaune1: "#D8AB04",
  Jaune2: "#FBCA13",
  Jaune3: "#FCD647",
  Jaune4: "#FDE178",
  Jaune5: "#FEECAA",
  Jaune6: "#FEF7DC",
  Sccess: "#21EC00",
  BacKColorBottom: "#255A4C53",

};


export const SIZES = {
  // global sizes
  base: 4,
  base1: 8,
  font: 14,
  radius1: 12,
  radius: 8,
  padding: 24,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,
  body: 40,


  // app dimensions
  width,
  height
};


const appTheme = { COLORS,SIZES };

export default appTheme;
