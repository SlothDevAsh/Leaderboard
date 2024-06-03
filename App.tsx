import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Screens from '@screens/index';
import {Provider} from 'react-redux';
import store from '@store/index';
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
