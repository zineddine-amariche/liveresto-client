/**
 * @format
 */
 import React from 'react';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider as StoreProvider } from 'react-redux';
import configureStore from './Redux/store';


const store = configureStore();


const Redux = () => (
    <StoreProvider store={store}>
        <App />
    </StoreProvider>
  );
AppRegistry.registerComponent(appName, () => Redux);
