import React, {useEffect, useState} from 'react';
import * as Yup from 'yup';
import {View, Text, Modal, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Formik} from 'formik';
import styles from './styleLogin.js'
import {useDispatch, useSelector} from 'react-redux';
import {getUserInfo} from '../../Redux/Action/action.js';
import Toast from 'react-native-toast-message';
import Loader from 'react-loader-spinner';
import AsyncStorage from '@react-native-community/async-storage';


const loginValidationSchema = Yup.object().shape({
	email: Yup.string().email('Please enter valid email').required('Email Address is Required'),
	password: Yup.string()
		.min(8, ({min}) => `Password must be at least ${min} characters`)
		.required('Password is required'),
});

function loginScreen() {
	const dispatch = useDispatch();
	//save Async if token is valid
	

	//getUserfromFormik , Formik using {} format for named field
	const getUser = ({email, password}) => {
		dispatch(getUserInfo(email, password));
	};


	//make Login text visible when inputs are correct
	function getTextStyle(isValid) {
		if (isValid) {
			return {
				color: 'black',
			};
		}
		return {
			color: 'grey',
		};
	}

	return (
		<View style={styles.ViewStyle}>

			<Text style={{fontSize: 40}}>Login To System</Text>
			<Toast ref={(ref) => Toast.setRef(ref)} />

			<Formik
				validateOnMount
				validationSchema={loginValidationSchema}
				initialValues={{email: '', password: ''}}
				onSubmit={getUser}
			>
				{({handleChange, handleBlur, handleSubmit, values, errors, touched, isValid}) => (
					<View>

						<TextInput
							name="email"
							placeholder="Email Address"
							style={styles.TextInputForm}
							onChangeText={handleChange('email')}
							onBlur={handleBlur('email')}
							value={values.email}
							keyboardType="email-address"
						/>
						{errors.email && touched.email && <Text style={styles.errorText}>{errors.email}</Text>}
						<TextInput
							name="password"
							placeholder="Password"
							onChangeText={handleChange('password')}
							onBlur={handleBlur('password')}
							value={values.password}
							secureTextEntry
							style={styles.TextInputForm}
						/>
						{errors.password && touched.password && (
							<Text style={styles.errorText}>{errors.password}</Text>
						)}

						<TouchableOpacity
							onPress={handleSubmit}
							style={styles.ButtonLogin}
							disabled={!isValid || values.email === ''}>
							<Text style={getTextStyle(isValid)}>Login</Text>
						</TouchableOpacity>
					</View>
				)}
			</Formik>
		</View>
	);
}



export default loginScreen;
