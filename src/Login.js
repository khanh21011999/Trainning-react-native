import React from 'react'
import { useState } from 'react';
import * as Yup from 'yup'
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import { Formik, Form, Field, ErrorMessage } from "formik";


function LoginScreen({ navigation }) {
    function getTextStyle(isValid){
        if(isValid){
            return{
                color:'black'
            }
        }
        else{
            return{
                color:'grey'
            }
        }
    }
    const loginValidationSchema = Yup.object().shape({
        email: Yup
            .string()
            .email("Please enter valid email")
            .required('Email Address is Required'),
        password: Yup
            .string()
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),
    })
    return (

        <View style={styles.ViewStyle}>
            <Text style={{ fontSize: 40 }}>Login To System</Text>
            <Formik
                validateOnMount={true}
                validationSchema={loginValidationSchema}
                initialValues={{ email: '', password: '' }}
                onSubmit={() => { navigation.navigate('Home') }}

            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                    isValid,
                }) => (
                    <View >
                        <TextInput
                            name="email"
                            placeholder="Email Address"
                            style={styles.TextInputForm}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"

                        />
                        {(errors.email && touched.email) &&
                            <Text style={styles.errorText}>{errors.email}</Text>
                        }
                        <TextInput
                            name="password"
                            placeholder="Password"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry
                            style={styles.TextInputForm}
                        />
                        {(errors.password && touched.password) &&
                            <Text style={styles.errorText}>{errors.password}</Text>
                        }
                        <TouchableOpacity
                            onPress={handleSubmit}
                            title="LOGIN"
                            style={styles.ButtonLoginBlur}
                            disabled={!isValid || values.email === ''}
                        >
                        <Text style={getTextStyle(isValid)}>Login</Text>

                        </TouchableOpacity>



                    </View>
                )}


            </Formik>

        </View>
    )
}

const styles = StyleSheet.create({
    ViewStyle: {
        alignItems: 'center',
        display: "flex",
        flex: 1,
        justifyContent: "center",

    },
    ButtonLogin: {
        width: 200,
        height: 50,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        backgroundColor: 'rgba(214, 208, 208,1)',

    },
    ButtonLoginBlur: {
        width: 200,
        height: 50,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        backgroundColor: 'rgba(214, 208, 208,1)',

    },
    TextInputForm: {
        color: "black",
        backgroundColor: 'rgba(214, 208, 208,1)',
        margin: 20,
        borderRadius: 25,
        width: 300,
        paddingLeft: 20,
    },
    loginTextBlur:{
        color: 'grey'
    },
    errorText: {
        fontSize: 12,
        color: 'red',
        right: -30,
        top:-15
    
    },
})
export default LoginScreen