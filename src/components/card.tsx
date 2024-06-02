import {StyleSheet, Text, View} from 'react-native';
import React, {FC, memo} from 'react';
import colors from '../utils/colors';
import dimensions from '../utils/dimensions';
import fonts from '../utils/fonts';
import language from '../utils/language';

type borderProps = {
  backgroundColor?: string;
};
const Border: FC<borderProps> = ({backgroundColor = colors.BLACK}) => {
  return (
    <View style={styles.borderContainer}>
      <View
        style={[
          styles.borderView,
          {
            backgroundColor: backgroundColor,
          },
        ]}
      />
    </View>
  );
};

type props = {
  name: string;
  rank: string;
  bananas: string;
  highlighted?: boolean;
};
const Card: FC<props> = ({
  name = language.NAME,
  rank = language.RANK,
  bananas = language.NO_OF_BANANAS,
  highlighted = false,
}) => {
  return (
    <View style={styles.parent}>
      <View
        style={[
          styles.viewContainer,
          {
            backgroundColor: highlighted ? colors.GOLD : colors.DARK_GRAY,
          },
        ]}>
        <View
          style={[
            styles.textContainer,
            {
              flex: 0.4,
            },
          ]}>
          <Text
            style={[
              styles.text,
              {
                textAlign: 'center',
                color: highlighted ? colors.WHITE : colors.BLACK,
              },
            ]}>
            {name}
          </Text>
        </View>
        <Border backgroundColor={highlighted ? colors.WHITE : colors.BLACK} />
        <View
          style={[
            styles.textContainer,
            {
              flex: 0.25,
            },
          ]}>
          <Text
            style={[
              styles.text,
              {
                color: highlighted ? colors.WHITE : colors.BLACK,
              },
            ]}>
            {rank}
          </Text>
        </View>
        <Border backgroundColor={highlighted ? colors.WHITE : colors.BLACK} />
        <View
          style={[
            styles.textContainer,
            {
              flex: 0.35,
            },
          ]}>
          <Text
            style={[
              styles.text,
              {
                color: highlighted ? colors.WHITE : colors.BLACK,
              },
            ]}>
            {bananas}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default memo(Card);

const styles = StyleSheet.create({
  parent: {
    marginLeft: dimensions.xscale(18),
    marginRight: dimensions.xscale(11),
    marginVertical: dimensions.yScale(10),
  },
  viewContainer: {
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
    fontSize: dimensions.fontSize.sm,
  },
  borderContainer: {
    flex: 0.02,
    justifyContent: 'center',
  },
  borderView: {
    height: dimensions.yScale(20),
    width: 2,
    borderRadius: 10,
  },
});
