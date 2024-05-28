import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import colors from '../utils/colors';
import dimensions from '../utils/dimensions';
import language from '../utils/language';
import fonts from '../utils/fonts';
import {PopUpButton} from './button';

const PopUp = () => {
  return (
    <Modal>
      <View style={styles.modal}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>{language.SORT_BY}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <PopUpButton text={language.NAME} backgroundColor={colors.GOLD} />
          <PopUpButton
            text={language.LOWEST_RANK}
            backgroundColor={colors.DARK_GRAY}
          />
        </View>
      </View>
    </Modal>
  );
};

export default PopUp;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: colors.BRIGHT_GRAY,
    borderRadius: 20,
    width: dimensions.xscale(330),
    height: dimensions.yScale(140),
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dimensions.yScale(20),
  },
  headingText: {
    color: colors.BACKGROUND,
    fontSize: dimensions.fontSize.lg,
    fontFamily: fonts.SEMI_BOLD,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
