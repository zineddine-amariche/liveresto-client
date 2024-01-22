import {StyleSheet, Dimensions} from 'react-native';
import { COLORS } from '../../../Styles/theme';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',

  },
  Right: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    width: '80%',
    paddingLeft:15,
    justifyContent:'space-between'
  },
  Button: {
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 60,


  },
  TextTitle:{
    fontWeight:'700',
    color:COLORS.Noir
  },
  renitialisation:{
    color:COLORS.Vert2,
    marginRight:15
  }
});
export default styles;
