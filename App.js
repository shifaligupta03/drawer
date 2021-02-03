/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import MainContainer from './src/components/Main';
import store from './src/redux/store';

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <Provider store={store}>
        <MainContainer />
      </Provider>
    </SafeAreaView>
  </>
);
export default App;
