import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../utils/colors';
import dimensions from '../utils/dimensions';
import fonts from '../utils/fonts';

const Border = () => {
  return (
    <View style={styles.borderContainer}>
      <View style={styles.borderView} />
    </View>
  );
};
const Card = () => {
  return (
    <View style={styles.parent}>
      <View style={styles.viewContainer}>
        <View
          style={[
            styles.textContainer,
            {
              flex: 0.35,
            },
          ]}>
          <Text style={styles.text}>Name</Text>
        </View>
        <Border />
        <View
          style={[
            styles.textContainer,
            {
              flex: 0.25,
            },
          ]}>
          <Text style={styles.text}>Rank</Text>
        </View>
        <Border />
        <View
          style={[
            styles.textContainer,
            {
              flex: 0.35,
            },
          ]}>
          <Text style={styles.text}>No. of Bananas</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  parent: {
    marginLeft: dimensions.xscale(18),
    marginRight: dimensions.xscale(11),
    marginVertical: dimensions.yScale(10),
  },
  viewContainer: {
    backgroundColor: colors.DARK_GRAY,
    flexDirection: 'row',
    borderRadius: 5,
    height: dimensions.yScale(30),
  },
  textContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.SEMI_BOLD,
    color: colors.BLACK,
    fontSize: dimensions.fontSize.sm,
  },
  borderContainer: {
    flex: 0.02,
    justifyContent: 'center',
  },
  borderView: {
    height: dimensions.yScale(20),
    width: 2,
    borderRadius: 1,
    borderColor: colors.BLACK,
    backgroundColor: colors.BLACK,
  },
});
