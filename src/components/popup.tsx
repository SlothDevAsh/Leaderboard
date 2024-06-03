import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import Modal from 'react-native-modal';
import colors from '@utils/colors';
import dimensions from '@utils/dimensions';
import language from '@utils/language';
import fonts from '@utils/fonts';
import {PopUpButton} from './button';
import {SortType} from '@utils/types';

type props = {
  isVisible: boolean;
  selectedOption: SortType;
  handleButtonPress: (value: SortType) => void;
  toggle: () => void;
};
const PopUp: FC<props> = ({
  isVisible,
  selectedOption,
  handleButtonPress,
  toggle,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      useNativeDriver
      onBackButtonPress={toggle}
      onBackdropPress={toggle}
      animationIn={'slideInUp'}>
      <View style={styles.modal}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>{language.SORT_BY}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <PopUpButton
            text={language.NAME}
            backgroundColor={
              selectedOption === 'name' ? colors.GOLD : colors.DARK_GRAY
            }
            handlePress={() => {
              // if sort by is already name, then make it empty
              handleButtonPress(selectedOption === 'name' ? '' : 'name');
            }}
          />
          <PopUpButton
            text={language.LOWEST_RANK}
            backgroundColor={
              selectedOption === 'lowest_ranked'
                ? colors.GOLD
                : colors.DARK_GRAY
            }
            handlePress={() => {
              // if sort by is already lowest_rank, then make it empty
              handleButtonPress(
                selectedOption === 'lowest_ranked' ? '' : 'lowest_ranked',
              );
            }}
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
