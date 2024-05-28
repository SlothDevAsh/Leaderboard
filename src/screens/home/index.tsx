import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import dimensions from '../../utils/dimensions';
import colors from '../../utils/colors';
import PopUp from '../../components/popup';
import Card from '../../components/card';
import {GoButton, SortButton} from '../../components/button';
import Search from '../../components/search';
import Header from '../../components/header';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.parent}>
      <Header />
      <View style={styles.searchContainer}>
        <Search />
        <GoButton />
      </View>
      <View style={styles.sortContainer}>
        <SortButton />
      </View>

      <View style={styles.cardContainer}>
        <Card />
      </View>
      <View style={styles.scroll}>
        <ScrollView>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>
      <PopUp />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
  searchContainer: {
    flexDirection: 'row',
  },
  sortContainer: {
    alignItems: 'flex-end',
    marginTop: dimensions.yScale(10),
    marginRight: dimensions.xscale(17),
  },
  cardContainer: {
    marginVertical: dimensions.yScale(13),
  },
  scroll: {
    flex: 1,
  },
});
