import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Screens from './src/screens';
import {Provider} from 'react-redux';
import store from './src/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
