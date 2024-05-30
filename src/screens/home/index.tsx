import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import dimensions from '../../utils/dimensions';
import colors from '../../utils/colors';
import PopUp from '../../components/popup';
import Card from '../../components/card';
import {GoButton, SortButton} from '../../components/button';
import Search from '../../components/search';
import Header from '../../components/header';
import {useDispatch, useSelector} from 'react-redux';
import {
  actions,
  searchUser,
  setInput,
  setIsSearchCompleted,
  setIsSearching,
  setPopUp,
  setSortBy,
  sortUsers,
} from '../../store/actions';
import {SortType, StoreState} from '../../utils/types';
import language from '../../utils/language';
import {UserType} from '../../utils/types';
import {ListEmpty, NoSearchResult} from '../../components/empty';
import styles from './styles';
import Loader from '../../components/loader';

const HomeScreen = () => {
  const dispatch: any = useDispatch();

  const users = useSelector((state: StoreState) => state.users);
  const searchedUser = useSelector((state: StoreState) => state.searchedUser);

  const searchInput = useSelector((state: StoreState) => state.searchInput);
  const showPopUp = useSelector((state: StoreState) => state.showPopUp);
  const sortBy = useSelector((state: StoreState) => state.sortBy);

  const isSearching = useSelector((state: StoreState) => state.isSearching);

  const isSearchCompleted = useSelector(
    (state: StoreState) => state.isSearchCompleted,
  );

  const handleText = (value: string) => {
    dispatch(setInput(value));

    // make the search completed to false
    dispatch(setIsSearchCompleted(false));
  };

  const handleGoButtonPress = () => {
    // hide the keyboard
    Keyboard.dismiss();

    // set loading to true
    dispatch(setIsSearching(true));

    dispatch(searchUser());
  };

  const handleSortButtonPress = () => {
    dispatch(setPopUp(true));
  };

  const togglePopUp = () => {
    dispatch(setPopUp(!showPopUp));
  };

  const handleSortOptionPress = (value: SortType) => {
    dispatch(setSortBy(value));
    // close the popup
    dispatch(setPopUp(false));

    // set searching to true
    dispatch(setIsSearching(true));

    // search users again
    dispatch(sortUsers(value));
  };

  return (
    <SafeAreaView style={styles.parent}>
      <Header />
      <View style={styles.searchContainer}>
        <Search input={searchInput} onChange={handleText} />
        <GoButton
          handlePress={handleGoButtonPress}
          disabled={searchInput === ''}
        />
      </View>
      <View style={styles.sortButtonContainer}>
        <SortButton
          handlePress={handleSortButtonPress}
          disabled={users.length === 0}
        />
      </View>

      {sortBy !== '' && users.length > 0 && (
        <View style={styles.sortTextContainer}>
          <Text style={styles.sortText}>{language.SORTED_BY(sortBy)}</Text>
        </View>
      )}
      {users.length > 0 && (
        <View style={styles.cardContainer}>
          <Card
            name={language.NAME}
            rank={language.RANK}
            bananas={language.NO_OF_BANANAS}
          />
        </View>
      )}

      {isSearching ? (
        <Loader />
      ) : users.length > 0 ? (
        <View style={styles.scroll}>
          <FlatList
            data={users}
            keyboardShouldPersistTaps={'never'}
            renderItem={({item, index}: {item: UserType; index: number}) => (
              <Card
                name={item.name}
                rank={item.rank.toString()}
                bananas={item.bananas.toString()}
                key={item.uid}
                highlighted={item.uid === searchedUser?.uid}
              />
            )}
          />
        </View>
      ) : searchInput !== '' && isSearchCompleted ? (
        <NoSearchResult />
      ) : (
        <ListEmpty />
      )}
      {showPopUp && (
        <PopUp
          isVisible={showPopUp}
          toggle={togglePopUp}
          handleButtonPress={value => handleSortOptionPress(value)}
          selectedOption={sortBy}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
