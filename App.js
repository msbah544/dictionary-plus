import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import WordDetails from "./screens/WordDetails";

export default function App() {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="home" component={Home} />
          <Screen name="details" component={WordDetails} />
        </Navigator>
      </NavigationContainer>
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
