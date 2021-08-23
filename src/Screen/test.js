import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import React from "react";
import { useState } from "react";
const list = ["Good", "Bad", "Bad"];
export default function Abc() {
  function getIcon(IconsetUp) {
    if (IconsetUp === "Good") {
      return "sentiment-very-satisfied";
    } else if (IconsetUp === "Bad") {
      return "sentiment-very-dissatisfied";
    }
  }
  console.log(getIcon());

  return (
    <View>
      {list.map((item, key) => (
        <View key={key}>
          <Text>{getIcon(item)}</Text>
          <Icon name={getIcon(item)} size={30} color={"black"} />
        </View>
      ))}
    </View>
  );
}
