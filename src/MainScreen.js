import React from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'

class MainScreen extends React.Component {
    render() {
        return (
            <View style={styles.ViewStyle}>
                <Text style={styles.TextForm}>Welcome to System</Text>
                <View >
                    <TouchableOpacity

                        style={styles.ButtonLogout}>
    
                        <Text>Log out</Text>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }

}
const styles = StyleSheet.create({
    ViewStyle: {
        alignItems: 'center',
        flex: 1,
        justifyContent: "center",

    },
    ButtonLogout: {
        width: 200,
        height: 50,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        backgroundColor: 'rgba(214, 208, 208,1)',

    },
    TextForm:{
        fontSize:40,
        marginBottom:400

    }
})
export default MainScreen