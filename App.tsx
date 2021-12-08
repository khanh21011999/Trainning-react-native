import 'react-native-gesture-handler';
import React from 'react';
import loginScreen from './src/Screen/Login/Login';
import {createStackNavigator} from '@react-navigation/stack';
import mainScreen from './src/Screen/MainScreen/MainScreen';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
function NavigationRoute() {
  const signInStatus = false;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!signInStatus ? (
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={loginScreen}
          />
        ) : (
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Home"
            component={mainScreen}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return <NavigationRoute />;
}
export default App;
