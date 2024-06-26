import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '@utils/colors';

const Loader = () => {
  return (
    <View style={styles.parent}>
      <ActivityIndicator size={25} color={colors.BRIGHT_GRAY} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
