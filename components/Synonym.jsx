import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Synonym = () => {
  return (
    <View style={styles.container}>
      <Text>Hello from Synonym</Text>
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

export default Synonym;
