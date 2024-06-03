import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import language from '@utils/language';
import colors from '@utils/colors';
import dimensions from '@utils/dimensions';
import fonts from '@utils/fonts';
import {SORT_ICON} from '@utils/icons';

type goProps = {
  disabled: boolean;
  handlePress: () => void;
};
const GoButton: FC<goProps> = ({handlePress, disabled}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={handlePress}
      disabled={disabled}>
      <View style={styles.goButtonContainer}>
        <Text style={styles.goButtonText}>{language.GO}</Text>
      </View>
    </TouchableOpacity>
  );
};

type sortProps = {
  disabled: boolean;
  handlePress: () => void;
};
const SortButton: FC<sortProps> = ({handlePress, disabled}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={handlePress}
      disabled={disabled}>
      <View style={styles.sortButtonContainer}>
        <Image source={SORT_ICON} style={styles.sortButtonIcon} />
      </View>
    </TouchableOpacity>
  );
};

const PopUpButton: FC<{
  text: string;
  backgroundColor: string;
  handlePress: () => void;
}> = ({text, backgroundColor, handlePress}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={handlePress}>
      <View
        style={[
          styles.popUpButtonContainer,
          {
            backgroundColor: backgroundColor,
          },
        ]}>
        <Text style={styles.popUpButtonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export {GoButton, SortButton, PopUpButton};

const styles = StyleSheet.create({
  goButtonContainer: {
    backgroundColor: colors.GOLD,
    width: dimensions.xscale(40),
    height: dimensions.yScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: dimensions.xscale(10),
  },
  goButtonText: {
    color: colors.WHITE,
    fontSize: dimensions.fontSize.sm,
    fontFamily: fonts.BOLD,
  },
  sortButtonContainer: {
    backgroundColor: colors.DARK_GRAY,
    width: dimensions.xscale(30),
    height: dimensions.yScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: dimensions.xscale(10),
  },
  sortButtonIcon: {
    width: dimensions.xscale(18),
    height: dimensions.xscale(18),
  },
  popUpButtonContainer: {
    width: dimensions.xscale(100),
    height: dimensions.yScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: dimensions.xscale(10),
  },
  popUpButtonText: {
    color: colors.BACKGROUND,
    fontSize: dimensions.fontSize.sm,
    fontFamily: fonts.SEMI_BOLD,
  },
});
