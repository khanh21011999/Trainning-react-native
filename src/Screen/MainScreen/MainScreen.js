import React from 'react';
import {View, Text, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native';
//import LoginScreen from '../Login/Login.js'
import {useDispatch, useSelector} from 'react-redux';
import {Logout} from '../../Redux/Action/action.js';
import styles from './styleMainScreen.js';

function MainScreen({navigation, route}) {
	const dispatch = useDispatch();
	return (
		<View style={styles.ViewStyle}>
			<Text style={styles.TextForm}>Welcome to System</Text>
			<View>
				<TouchableOpacity
					onPress={() => {
						dispatch(Logout())
						navigation.navigate('Login');
					}}
					style={styles.ButtonLogout}>
					<Text>Log out</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default MainScreen;
