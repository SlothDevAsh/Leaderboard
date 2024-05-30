import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import language from '../utils/language';
import dimensions from '../utils/dimensions';
import colors from '../utils/colors';
import fonts from '../utils/fonts';

const ListEmpty = () => {
  return (
    <View style={styles.parent}>
      <Text style={styles.text}>{language.START_SEARCHING}</Text>
    </View>
  );
};

const NoSearchResult = () => {
  return (
    <View style={styles.parent}>
      <Text style={styles.text}>{language.NO_RESULT}</Text>
    </View>
  );
};

export {ListEmpty, NoSearchResult};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: dimensions.fontSize.base,
    textAlign: 'center',
    lineHeight: 20,
    color: colors.DARK_GRAY,
    fontFamily: fonts.MEDIUM,
  },
});
