/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';

import {CirclesLoader, TextLoader} from 'react-native-indicator';
import * as Yup from 'yup';
// eslint-disable-next-line max-len
import {View, Text, StyleSheet, Modal, TextInput, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
// import * as loginData from './localData.json';
import {useDispatch, useSelector} from 'react-redux';
import {getUser, GetUserInfo} from '../../Redux/Action/action.js';
import {handleGetUser} from '../../Redux/Saga/handler/user.js';

// eslint-disable-next-line require-jsdoc
// eslint-disable-next-line react/prop-types
// eslint-disable-next-line require-jsdoc
function LoginScreen({navigation}) {
	// set timeout ID for setTimeOut()
	const timeIdRef = React.useRef(null);
	const dispatch = useDispatch();
	const [username, getUsername] = useState('');
	const [password, getPassword] = useState('')

	// handleInput = (e) => {
	// 	getUserInfo(e.target.value);
	// };

	// mock user from fake api
	useEffect(() => {
		// dispatch(getUser());
		
	}, [dispatch]);
	dispatch(GetUserInfo(username, password));
	//  const handlegetdata= ({user,password})=>{
	// dispatch(GetUserInfo(user,password))
	// // }

	// console.log(handleGetdata.user)


	const user = useSelector((state) => {
		return state.User.user;
	});
	// console.log('user' + username)
	//  console.log('userJSon'+user.username)
	useEffect(() => {
		return () => {
			if (timeIdRef.current) {
				// make sure this is always cleared in case clearTo is never called
				clearTimeout(timeIdRef.current);
			}
		};
	}, [timeIdRef]);
	// console.log();

	const Login = useSelector((state) => {
		return state.LoginAction.loginStatus;
	});
	// console.log(Login)
	//   const initModal = false;
	// eslint-disable-next-line require-jsdoc
	function handleLogin() {
		dispatch({type: 'changeLogin'});
	}
	function handlDefault() {
		dispatch({type: 'getDefault'});
	}

	// not show??
	// console.log(username);
	// console.log('Login ' + Login)
	//   const [show, doShow] = useState(initModal);

	// const [visible, UpdateView] = useState(false)

	// Show modal dialog
	//   function ChangeModalValue() {
	//     console.log(show);
	//     doShow(!show);
	//   }
	// setTimer after Model Appear

	function SetTimer() {
		handleLogin();
		if (timeIdRef.current) {
			// clear any previous timeIdRef to avoid multiple button click activate multiple setTimeout
			clearTimeout(timeIdRef.current);
		}
		const timeID = setTimeout(() => {
			navigation.navigate('Home');
		}, 3000);
		timeIdRef.current = timeID;
	}

	function clearTO() {
		clearTimeout(timeIdRef.current);
		timeIdRef.current = null;
		handlDefault();
	}

	// make text black when check complete
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
	//   function getLoginText() {
	//     return <CirclesLoader />;
	//   }
	// function hideText(visible){
	//     if(isDisabler)

	// }
	const loginValidationSchema = Yup.object().shape({
		email: Yup.string().email('Please enter valid email').required('Email Address is Required'),
		password: Yup.string()
			.min(8, ({min}) => `Password must be at least ${min} characters`)
			.required('Password is required'),
	});
	return (
		<View style={styles.ViewStyle}>
			<Text style={{fontSize: 40}}>Login To System</Text>

			<Formik
				validateOnMount
				validationSchema={loginValidationSchema}
				initialValues={{email: '', password: ''}}
				onSubmit={value => {
					getUsername(value.email)
					getPassword(value.password)
					SetTimer()
				}}
			// () => navigation.navigate('Login')
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
							<Modal transparent visible={Login}>
								<View
									style={{
										backgroundColor: '#000000',
										flex: 1,
										justifyContent: 'center',
										alignContent: 'center',
									}}>
									<View style={styles.ModalStyle}>
										<CirclesLoader />
										<TextLoader
											textStyle={{
												fontSize: 25,
												marginTop: 20,
											}}
											text="Logging you in"
										/>
										<TouchableOpacity onPress={clearTO} style={styles.ButtonBack}>
											<Text>Go back</Text>
										</TouchableOpacity>
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

const styles = StyleSheet.create({
	ViewStyle: {
		alignItems: 'center',
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
	},
	// lottie: {
	//     width: 50,
	//     height: 50

	// },
	ModalStyle: {
		width: 300,
		height: 300,
		alignItems: 'center',
		alignSelf: 'center',
		justifyContent: 'center',
		borderRadius: 20,
		backgroundColor: '#ffffff',
	},
	ButtonLogin: {
		width: 200,
		height: 50,
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 25,
		backgroundColor: 'rgba(214, 208, 208,1)',
	},

	ButtonBack: {
		top: 50,
		width: 200,
		height: 50,
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 25,
		backgroundColor: 'rgba(214, 208, 208,1)',
	},
	TextInputForm: {
		color: 'black',
		backgroundColor: 'rgba(214, 208, 208,1)',
		margin: 20,
		borderRadius: 25,
		width: 300,
		paddingLeft: 20,
	},
	// loginTextBlur: {
	//     color: 'grey'
	// },
	errorText: {
		fontSize: 12,
		color: 'red',
		right: -30,
		top: -15,
	},
});

export default LoginScreen;
