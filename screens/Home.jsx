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
const Home = () => {
  const [word, setWord] = useState("hello");
  useEffect(() => {

    const options = {
      method: "GET",
      url: "https://mashape-community-urban-dictionary.p.rapidapi.com/define",
      params: { term: "hello" },
      headers: {
        "X-RapidAPI-Key": "9f6e26c40emsh975fafe781c05eep15d7cdjsndbc7f139ceff",
        "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
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
  },
});

export default Home;
