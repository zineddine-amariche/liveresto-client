import {StyleSheet} from 'react-native';
import { COLORS } from '../../../../../Components/Styles/theme';

const styles = StyleSheet.create({
  containerForm: {
    marginTop: 15,
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
  },
  label: {
    fontWeight: '700',
    marginVertical: 10,
  },
  left: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems:"center"
  },
  checkbox: {
    marginRight: 10,
  },
  labelText: {
    fontWeight: '400',
  },
  error: {
    color: COLORS.Rouge,
    marginTop: 5,
    paddingLeft: 10,
    fontSize: 13,
  },
  Identifiants: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 25,
    justifyContent: 'space-between',
  },
  textRight: {
    color: COLORS.Vert3,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    // backgroundColor:"#ccc",
    alignItems: 'center',
    // justifyContent: 'space-between',
    // position: "relative",
  },
  iconPass: {
    color: '#000',
    fontSize: 20,
    position: 'absolute',
    right:10,
    top: 3,
    zIndex:100
  },

  containerButtons:{
    backgroundColor:'transparent'
  }
});

export default styles;
