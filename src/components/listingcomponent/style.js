import {StyleSheet} from 'react-native';
import AppTheme from '../../config';

const {fontfamily, colors} = AppTheme || {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.COLOR_LIGHT_BLACK,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 10,
  },
  imageRound: {
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    resizeMode: 'contain',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginHorizontal: 15,
  },
  bigText: {
    fontFamily: fontfamily.MEDIUM,
    color: colors.COLOR_WHITE_LIGHT,
    fontSize: 15,
    marginVertical: 5,
  },
  normalText: {
    fontFamily: fontfamily.REGULAR,
    color: colors.COLOR_WHITE_LIGHT,
    fontSize: 13,
  },
});

export default styles;
