import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import Home from "./screens/Home";
import Search from "./screens/Search";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    paddingTop: Platform.OS === "android" ? 28 : 0,
    paddingHorizontal: 15,
    //alignItems: "center",
    //justifyContent: "center",
  },
});
