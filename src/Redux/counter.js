import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
function Counter() {
    const dispatch = useDispatch()
    const Counter = useSelector(state => {
        return (state.number)
    })
    function handleIncrease() {
        dispatch({ type: 'increase',  amount : 10 })
    }
    return (
        <View>
            <Button
                onPress={handleIncrease}
                title="Increase" ></Button>
            <Text>{Counter}</Text>
        </View>
    )

}
export default Counter