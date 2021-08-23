import 'react-native-gesture-handler';
import { AppRegistry, View } from 'react-native';
import App from './App.js';
import React from 'react';
import { name as appName } from './app.json';
import { Provider } from 'react-redux'
// import Counter from './src/Redux/counter.js';
import Abc from './src/Screen/test.js';
import store from './src/Redux/Store/store.js'
function Display() {
    return (
        <Provider store={store}>
          <Abc/>
        </Provider>
    )
}
AppRegistry.registerComponent(appName, () => Display);
