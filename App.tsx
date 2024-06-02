import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Screens from './src/screens';
import {Provider} from 'react-redux';
import store from './src/store';
import SplashScreen from 'react-native-splash-screen';

function App(): React.JSX.Element {
  useEffect(() => {
    // hide splash screen
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
