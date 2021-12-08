/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import * as Yup from 'yup';
import {View, Text, Alert, TextInput, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import Styles from './styleLogin';
import {useAppDispatch, useAppSelector} from 'src/Redux/Store/redux-hook';

import {FetchData} from 'src/Redux/Action/LoginAction';
import {useDispatch} from 'react-redux';

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: Yup.string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});
export default function LoginScreen() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const dispatch = useAppDispatch();

  const stateLogin = useAppSelector(state => state.login);

  useEffect(() => {
    dispatch(FetchData());
  }, [stateLogin]);

  function showAlert() {
    return Alert.alert('Login Status', 'Wrong username or password', [
      {
        text: 'Okey',
        style: 'cancel',
      },
    ]);
  }

  return (
    <View style={Styles.ViewStyle}>
      <Text style={{fontSize: 40}}>Login To System</Text>

      <Formik
        validateOnMount
        validationSchema={loginValidationSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={() => console.log('clicked')}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <View>
            <TextInput
              name="email"
              placeholder="Email Address"
              style={Styles.TextInputForm}
              onChangeText={value => {
                setUsername(value);
              }}
              onBlur={handleBlur('email')}
              value={username}
              keyboardType="email-address"
            />
            {errors.email && touched.email && (
              <Text style={Styles.errorText}>{errors.email}</Text>
            )}
            <TextInput
              name="password"
              placeholder="Password"
              onChangeText={value => {
                setPassword(value);
              }}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
              style={Styles.TextInputForm}
            />
            {errors.password && touched.password && (
              <Text style={Styles.errorText}>{errors.password}</Text>
            )}

            <TouchableOpacity
              onPress={() => console.log(stateLogin)}
              style={Styles.ButtonLogin}>
              <Text>Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
