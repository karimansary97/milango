import {Platform, StyleSheet} from 'react-native';
import unit from '../../../styles/unit';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    backgroundColor: colors.defaultBackGround,
    paddingHorizontal: 20 * unit,
  },
  content: {
    flexGrow: 1,
    paddingTop: Platform.OS === 'android' ? 16 * unit : 0,
  },
});
