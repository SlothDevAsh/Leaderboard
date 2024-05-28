import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import language from '../utils/language';
import fonts from '../utils/fonts';
import colors from '../utils/colors';
import dimensions from '../utils/dimensions';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{language.LEADER_BORDER}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: dimensions.yScale(20),
  },
  text: {
    fontSize: dimensions.fontSize.xl,
    color: colors.BRIGHT_GRAY,
    fontFamily: fonts.BOLD,
  },
});
