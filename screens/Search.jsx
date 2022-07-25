import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                //backgroundColor: "red",
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign name="search1" size={30} color="grey" />
            </View>
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <TextInput
              style={{
                fontSize: 15,
                color: "grey",
                fontWeight: "bold",
              }}
              placeholder="Search by word.."
            />
          </View>
        </View>
        <View style={{}}>
          <TouchableOpacity>
            <View
              style={{
                //backgroundColor: "green",
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialIcons name="mic-none" size={24} color="grey" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    paddingTop: Platform.OS === "android" ? 28 : 0,
    paddingHorizontal: 15,
  },
  inputBox: {
    backgroundColor: "white",
    height: 60,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Search;
