import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Antonym = () => {
  return (
    <View style={styles.container}>
      <Text>Hello from Antonym</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Antonym;
