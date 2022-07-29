import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
//import { getData } from "../services/services";
import axios from "axios";

const headerImage = require("../assets/search.jpg");
const Home = ({ navigation }) => {
  const navigateToDetails = () => {
    return navigation.navigate("details");
  };
  return (
    <React.Fragment>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="cover"
              style={styles.image}
              source={headerImage}
            />
          </View>
          <View style={styles.headerText}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              Dictionary+
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                color: "grey",
                textAlign: "center",
                paddingTop: 20,
              }}
            >
              Find synonyms, antonyms, and related words
            </Text>
          </View>
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
                  //value={word}
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
          <TouchableOpacity onPress={navigateToDetails}>
            <View style={styles.button}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                Search
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 60,
  },
  image: {
    borderRadius: 10,
  },
  headerText: {
    marginTop: 50,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  inputBox: {
    backgroundColor: "white",
    height: 60,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    backgroundColor: "#4c2770",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default Home;
