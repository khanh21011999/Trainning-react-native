import React, { useState } from 'react';

import { CirclesLoader, TextLoader, RotationHoleLoader } from 'react-native-indicator';
import * as Yup from 'yup';
import { useSelector, connect, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Modal, TextInput, Button, TouchableOpacity } from 'react-native';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as loginData from './localData.json';

function LoginScreenTest({ navigation, props }) {
  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")
  const dispatch = useDispatch();
  const LoginCheck = useSelector((state) => {
    return state.login;
  });
  const initModal = false;
  const [show, doShow] = useState(initModal);
  // const [visible, UpdateView] = useState(false)

  // Show modal dialog
  function ChangeModalValue() {
    console.log(show);
    doShow(!show);
  }
  // setTimer after Model Appear
  function SetTimer() {
    setTimeout(() => {
      navigation.navigate(
        'Home',
        // {
        //     cb: () => {
        //         console.log('call here')
        //         doShow(false);
        //      }

        // }
      );
    }, 5000);
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
  function getLoginText() {
    return <CirclesLoader />;
  }
  // function hideText(visible){
  //     if(isVisible)

  // }
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email('Please enter valid email').required('Email Address is Required'),
    password: Yup.string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });
  return (
    <View style={styles.ViewStyle}>
      <Text style={{ fontSize: 40 }}>Login To System</Text>
      <Formik
        validateOnMount
        validationSchema={loginValidationSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={
          () => {
            ChangeModalValue();
            SetTimer();
          }
          // () => navigation.navigate('Login')
        }>
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
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
              <CirclesLoader size={20} dotRadius={7} />
              <Text style={getTextStyle(isValid)}>Login</Text>
            </TouchableOpacity>
            <View>
              <Modal transparent visible={show}>
                <View style={{ backgroundColor: '#000000aa', flex: 1 }}>
                  <View style={styles.ModalStyle}>
                    <CirclesLoader />
                    <TextLoader
                      textStyle={{
                        fontSize: 25,
                        marginTop: 20,
                      }}
                      text="Logging you in"
                    />
                    <TouchableOpacity onPress={ChangeModalValue} style={styles.ButtonBack}>
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
    top: 300,
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

export default LoginScreenTest;
