import React from 'react'
import { useState } from 'react';

import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import MainScreen from './MainScreen.js';


function LoginScreen({navigation}) {
    
    const [info][SetInfo]= useState([
        {
            username: "",
            password: "",
        }
    ])
    const[error][setError]= useState({})
    return (
        <View style={styles.ViewStyle}>
            <Text style={{ fontSize: 40 }}>Login To System</Text>
            <View >
                <TextInput
                    placeholder="Enter username"
                    style={styles.TextInputForm}

                />
                <TextInput
                    placeholder="Enter password"
                    style={styles.TextInputForm}
                />
                <TouchableOpacity
                    onPress={()=> navigation.navigate('Home')}
                    style={styles.ButtonLogin}>

                    <Text>Login</Text>
                </TouchableOpacity>

            </View>

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
    TextInputForm: {
        color: "black",
        backgroundColor: 'rgba(214, 208, 208,1)',
        margin: 20,
        borderRadius: 25,
        width: 300,
        paddingLeft: 20,
    }
})
export default LoginScreen