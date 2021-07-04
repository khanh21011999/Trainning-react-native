import 'react-native-gesture-handler';
import React from 'react';
import LoginScreen from './src/Screen/Login/Login.js';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/Screen/MainScreen/MainScreen.js';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
function NavigationRoute() {
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
        <Stack.Screen
          options={
            {
              headerShown: false,
            }
          }
          name="Home"
          component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>)
}

function App() {
  return (
    <NavigationRoute />
  )
}
export default App;