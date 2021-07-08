import React from 'react';
import {View, Text, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native';
//import LoginScreen from '../Login/Login.js'
import {useDispatch, useSelector} from 'react-redux';

function MainScreen({navigation, route}) {
	const dispatch = useDispatch();
	const Login = useSelector((state) => {
		return state.loginStatus;
	});


	//   const initModal = false;
	function handleLogin() {
		dispatch({type: 'getDefault'});
	}
	return (
		<View style={styles.ViewStyle}>
			<Text style={styles.TextForm}>Welcome to System</Text>
			<View>
				<TouchableOpacity
					onPress={() => {
						//route.params.cb()
						handleLogin();
						console.log(Login);
						navigation.navigate('Login');
					}}
					style={styles.ButtonLogout}>
					<Text>Log out</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	ViewStyle: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	},
	ButtonLogout: {
		width: 200,
		height: 50,
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 25,
		backgroundColor: 'rgba(214, 208, 208,1)',
	},
	TextForm: {
		fontSize: 40,
		marginBottom: 400,
	},
});
export default MainScreen;
