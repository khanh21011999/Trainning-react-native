import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './src/Redux/Store/store';
function Display() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
AppRegistry.registerComponent(appName, () => Display);
