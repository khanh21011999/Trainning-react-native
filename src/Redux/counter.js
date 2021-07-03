import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
function Counter() {
    const dispatch = useDispatch()
    const Counter = useSelector(state => {
        return (state.loginStatus)
    })

    function handleIncrease() {
        dispatch({ type: 'changeLogin' })
    }
    return (
        <View>
            <Button
                onPress={handleIncrease}
                title="Change" ></Button>
            <Text >{console.log(Counter)}</Text>
        </View>
    )

}
export default Counter