import 'react-native-gesture-handler';
import React from 'react';
import loginScreen from './src/Screen/Login/Login.js';
import {createStackNavigator} from '@react-navigation/stack';
import mainScreen from './src/Screen/MainScreen/MainScreen.js';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import authReducer from './src/Redux/Reducer/AuthReducer';
import {useEffect } from 'react';
const navigationRef = React.createRef();


const Stack = createStackNavigator();
function NavigationRoute() {
	useEffect(async () => {
		try {
			const value = await AsyncStorage.getItem('data')
			if (value !== null) {
				console.log(value)
				dispatch({type: 'RESTORE_TOKEN'})
			}
			else (console.log('NULL VALUE'))
		} catch (error) {
		}

	},[])
	const signInStatus = useSelector((state) => {
		return (state.authReducer.isAuth)
	})
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
					/>) :
					(<Stack.Screen
						options={{
							headerShown: false,
						}}
						name="Home"
						component={mainScreen}
					/>)}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

function App() {
	return <NavigationRoute />;
}
export default App;
