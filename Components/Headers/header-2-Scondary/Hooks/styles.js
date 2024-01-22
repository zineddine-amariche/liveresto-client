import {StyleSheet, Dimensions} from 'react-native';
import { COLORS } from '../../../../Styles/theme';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  Right: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    height: '100%',
    width: '80%',
    paddingLeft:15,
    justifyContent:"space-between"
  },
  Button: {
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextTitle:{
    fontWeight:'700',
    fontSize:18,
    color:COLORS.white
  },
  TextTitleButton:{
    fontWeight:'500',
    fontSize:17,
    color:COLORS.white
  }
});
export default styles;
