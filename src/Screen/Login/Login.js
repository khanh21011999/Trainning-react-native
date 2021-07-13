import React from 'react';
import * as Yup from 'yup';
import {View, Text,Modal,TextInput, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import styles from './styleLogin.js'
import { useDispatch, useSelector } from 'react-redux';
import {GetUserInfo} from '../../Redux/Action/action.js';
import Toast from 'react-native-toast-message';
function LoginScreen({navigation}) {
	const dispatch = useDispatch();
	function GetUser(username, password) {
		dispatch(GetUserInfo(username, password))
	}
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
	const getModalStatus= useSelector((state)=>{
       return (state.AuthReducer.ModalShow)
	})
	const loginValidationSchema = Yup.object().shape({
		email: Yup.string().email('Please enter valid email').required('Email Address is Required'),
		password: Yup.string()
			.min(8, ({min}) => `Password must be at least ${min} characters`)
			.required('Password is required'),
	});
	return (
		<View style={styles.ViewStyle}>

			<Text style={{fontSize: 40}}>Login To System</Text>
			<Toast ref={(ref) => Toast.setRef(ref)} />

			<Formik
				validateOnMount
				validationSchema={loginValidationSchema}
				initialValues={{email: '', password: ''}}
				onSubmit={value => {
					GetUser(value.email, value.password)
				}}
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
							{/* <CirclesLoader size={20} dotRadius={7} /> */}
							<Text style={getTextStyle(isValid)}>Login</Text>
						</TouchableOpacity>
						<View>
							<Modal 
							transparent={false} 
							backdropColor="transparent"
							visible={getModalStatus}>
								<View
									style={{
										backgroundColor: '#878787',
										flex: 1,
										justifyContent: 'center',
										alignContent: 'center',
									}}>
									<View style={styles.ModalStyle}>
									<Text style={{fontWeight:'bold',fontSize:20}}>Success, logging you in..</Text>
									</View>
								</View>
							</Modal>
						</View>
					</View>
				)}
			</Formik>
		</View>
	);
}



export default LoginScreen;
