import 'react-native-gesture-handler';
import React from 'react';
import LoginScreen from './src/Login.js'
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/MainScreen.js';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={
            {
              headerShown: false,
            }
          }
          name='Login'
          component={LoginScreen} />
        <Stack.Screen name="Home" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>)
}


export default App;