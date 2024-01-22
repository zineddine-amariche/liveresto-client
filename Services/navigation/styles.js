import {View, StyleSheet, Dimensions} from 'react-native';
import { COLORS } from '../../Components/Styles/theme';

const {height, width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  userInfoSection: {
    backgroundColor: COLORS.primary,
    height: height * 0.12,
    flexDirection: 'row',
    alignItems:'center'
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color: '#000',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 10,
  },
  bottomDrawerSection: {
    marginBottom: 10,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },



  ImageLogo: {
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.light,
    borderWidth: 1,
    shadowColor: COLORS.light,
    marginLeft:5
  },
  BoxName:{
      width:"45%",
      marginLeft:15,
      flexDirection:'row',
      height:40,
      alignItems:'center'
  },
  Textnam:{
      color:COLORS.white,
      fontSize:16,
      fontWeight:'700',
      marginHorizontal:5
  }
});
