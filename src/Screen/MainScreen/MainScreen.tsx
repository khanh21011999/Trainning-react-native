import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Styles from './styleMainScreen';

export default function MainScreen() {
  return (
    <View style={Styles.ViewStyle}>
      <Text style={Styles.TextForm}>Welcome to System</Text>
      <View>
        <TouchableOpacity style={Styles.ButtonLogout}>
          <Text>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
