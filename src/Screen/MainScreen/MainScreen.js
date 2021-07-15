import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from './styleMainScreen.js';

function mainScreen() {
	const dispatch = useDispatch();
	const removeUser = () => {
		dispatch({type: 'LOG_OUT_FUNC'})
	}
	return (
		<View style={styles.ViewStyle}>
			<Text style={styles.TextForm}>Welcome to System</Text>
			<View>
				<TouchableOpacity
					onPress={removeUser}
					style={styles.ButtonLogout}>
					<Text>Log out</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default mainScreen;
