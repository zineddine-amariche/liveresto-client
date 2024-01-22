import { Dimensions } from "react-native";
import { Platform, StyleSheet } from "react-native";
import { SIZES } from "../../../../Components/constants/theme";
import { COLORS } from "../../../../Components/Styles/theme";
const MIN_HEIGHT = Platform.OS === "ios" ? 90 : 1;
const MAX_HEIGHT = SIZES.height / 2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxImg: {
    alignItems: "center",
    flex: 1 ,
  },
  Body: {
    flex: 1 ,
    padding: 30,
  },
  textT1: {
    fontWeight: "700",
    color: COLORS.Noir,
    fontSize:22
  },
  textT2: {
    color: COLORS.Noir,
    paddingVertical:5,
    textAlign:"justify",
    paddingRight:15,
    fontWeight:"400"
  },
  Gold:{
  },
  row:{
    flexDirection:"row",
    alignItems:"center"
  },
  BoxGradient:{
    width:136,
    backgroundColor:'linear-gradient(92.86deg, #AAC841 6.44%, #5DBCA3 92.18%)',
    borderRadius:30,
    marginVertical:10,
    alignItems:"center",
    justifyContent:"center",
    padding:4
  },
  TextGR:{
    color:COLORS.Blanc,
    fontWeight:"400"
  },
  Info:{
    flexDirection:"row",
    width:"100%",
    alignItems:"center",
    justifyContent:"space-between",
    marginVertical:15
  },
  InfoImgCircl:{
  },
  TxtInfo:{
    color:COLORS.Vert3

  },
  Generate:{
    height:90,
    backgroundColor:COLORS.Blanc,
    padding:30,
    justifyContent:"center"
  },
  boxBtn:{
    marginVertical:10
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  categoryContainer: {
    flexDirection: 'row',
    backgroundColor: '#FF6347',
    borderRadius: 20,
    margin: 10,
    padding: 10,
    paddingHorizontal: 15,
  },
  category: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 10,
  },
  titleContainer: {
    backgroundColor:"#222",
     marginTop:59, 
     padding:20,
     width:60
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 28,
    fontWeight:"700"

  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 5,
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  sectionLarge: {
    minHeight: 300,
  },
});

export default styles;
