import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../../Components/Styles/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.Blanc,
  },
  Input: {
    backgroundColor: COLORS.Blanc,
    color: COLORS.Noir,
    borderRadius: 6,
    paddingLeft: 10,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    fontSize: 14.4,
    flex:1,
    margin: 3,
  },
  label: {
    fontSize: 17,
    fontWeight: '700',
    marginVertical: 10,
  },
  cardInfo: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 30,
  },
  circle: {
    height: 135,
    width: 135,
    borderRadius: 100,
    backgroundColor: COLORS.Vert3,
    alignItems: "center",
    justifyContent: "center",
  },
  elseText: {
    fontSize: 30,
  },
  Modify: {
    position: "absolute",
    backgroundColor: COLORS.Vert6,
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    bottom: 20,
    right: "28%",
  },
  ContainerInputs: {
    paddingVertical: 10,
     paddingHorizontal:30
  },
  BoxGradient:{
    borderRadius:30,
    alignItems:"center",
    justifyContent:"center",
    padding:4,
    marginRight:5,
    paddingHorizontal:10,
    marginVertical:5
  },
  TextGR:{
    color:COLORS.Blanc
  },
  BoxIcon:{
    flexDirection:"row",
    alignItems:"center",
  },
  header: {
    backgroundColor: COLORS.Vert3,
    shadowColor: "#FFFFFF",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 80,
    height: 6,
    borderRadius: 4,
    backgroundColor: COLORS.Gris,
    marginBottom: 13,
  },
  BoxIcon:{
    flexDirection:"row",
    alignItems:"center",
  },

});

export default styles;
