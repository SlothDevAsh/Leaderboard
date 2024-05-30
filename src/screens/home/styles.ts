import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import dimensions from '../../utils/dimensions';
import fonts from '../../utils/fonts';

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    height: '100%',
    backgroundColor: colors.BACKGROUND,
  },
  searchContainer: {
    flexDirection: 'row',
  },
  sortButtonContainer: {
    alignItems: 'flex-end',
    marginTop: dimensions.yScale(10),
    marginRight: dimensions.xscale(17),
  },
  sortTextContainer: {
    marginLeft: dimensions.xscale(18),
  },
  sortText: {
    color: colors.BRIGHT_GRAY,
    fontSize: dimensions.fontSize.sm,
    fontFamily: fonts.MEDIUM,
  },
  cardContainer: {
    marginVertical: dimensions.yScale(13),
  },
  scroll: {
    flex: 1,
    // backgroundColor: 'orange',
  },
});

export default styles;
