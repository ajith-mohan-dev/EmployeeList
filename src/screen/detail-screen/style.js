import {StyleSheet} from 'react-native';
import AppTheme from '../../config';
const {fontfamily, colors} = AppTheme || {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.COLOR_LIGHT_BLACK,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 15,
    marginHorizontal: 10,
  },
  imageRound: {
    height: 75,
    width: 75,
    borderRadius: 75 / 2,
    resizeMode: 'contain',
  },
  profileColumn: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginHorizontal: 15,
  },
  nameText: {
    fontFamily: fontfamily.MEDIUM,
    color: colors.COLOR_WHITE_LIGHT,
    fontSize: 16,
    // marginTop: 5,
  },
  normalText: {
    fontFamily: fontfamily.REGULAR,
    color: colors.COLOR_WHITE_LIGHT,
    fontSize: 14,
  },
});

export default styles;
