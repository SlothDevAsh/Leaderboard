import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {SEARCH_ICON} from '../utils/icons';
import dimensions from '../utils/dimensions';
import colors from '../utils/colors';
import fonts from '../utils/fonts';

const Search = () => {
  return (
    <View style={styles.parent}>
      <View style={styles.iconContainer}>
        <Image source={SEARCH_ICON} style={styles.icon} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholderTextColor={colors.BLACK}
          placeholder="Search users"
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  parent: {
    backgroundColor: colors.DARK_GRAY,
    marginLeft: dimensions.xscale(18),
    height: dimensions.yScale(30),
    width: dimensions.xscale(270),
    flexDirection: 'row',
    borderRadius: 5,
  },
  iconContainer: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 15,
    height: 15,
  },
  inputContainer: {
    flex: 0.9,
    justifyContent: 'center',
  },
  input: {
    justifyContent: 'center',
    padding: 0,
    fontSize: dimensions.fontSize.sm,
    fontFamily: fonts.SEMI_BOLD,
    color: colors.BLACK,
  },
});
