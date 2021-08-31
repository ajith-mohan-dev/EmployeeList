import {StyleSheet} from 'react-native';
import AppTheme from '../../config';
const {colors, fontfamily} = AppTheme || {};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colors.COLOR_PISTA,
  },
  textInput: {
    fontSize: 15,
    fontFamily: fontfamily.REGULAR,
    color: colors.COLOR_BLACK,
    width: 230,
  },
});

export default styles;
