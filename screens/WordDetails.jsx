import React, { useState } from "react";
import { Entypo, AntDesign } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Definition from "../components/Definition";
import Synonym from "../components/Synonym";
import Antonym from "../components/Antonym";

const WordDetails = ({ navigation }) => {
  const navigateBackToHome = () => {
    return navigation.navigate("home");
  };
  const [definitionPressed, setDefinitionPressed] = useState(false);
  const [synonymPressed, setSynonymPressed] = useState(true);
  const [antonymPressed, setAntonymPressed] = useState(false);

  return (
    <React.Fragment>
      <View style={styles.container}>
        <TouchableOpacity onPress={navigateBackToHome}>
          <View
            style={{
              //backgroundColor: "yellow",
              height: 50,
              width: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="back" size={30} color="black" />
          </View>
        </TouchableOpacity>
        <View style={styles.headerCard}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 20,
            }}
          >
            <View>
              <Text
                style={{ fontSize: 30, fontWeight: "bold", color: "white" }}
              >
                Onion
              </Text>
            </View>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "orange",
                  width: 35,
                  height: 30,
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Entypo name="sound" size={24} color="white" />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "orange" }}>
              Show IPA
            </Text>
            <Text style={{ fontSize: 20, color: "white" }}>[uhn-yuhn]</Text>
          </View>
        </View>
        <ScrollView
          style={styles.navbar}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity
            onPress={() => {
              setDefinitionPressed(true);
              setSynonymPressed(false);
              setAntonymPressed(false);
            }}
          >
            <View
              style={{
                paddingRight: 40,
                height: 50,
                justifyContent: "center",
              }}
            >
              <Text
                style={
                  definitionPressed
                    ? styles.navTitlePressed
                    : styles.defaultNavTitle
                }
              >
                Definition
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setDefinitionPressed(false);
              setSynonymPressed(true);
              setAntonymPressed(false);
            }}
          >
            <View
              style={{
                paddingRight: 40,
                height: 50,
                justifyContent: "center",
              }}
            >
              <Text
                style={
                  synonymPressed
                    ? styles.navTitlePressed
                    : styles.defaultNavTitle
                }
              >
                Synonym
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setDefinitionPressed(false);
              setSynonymPressed(false);
              setAntonymPressed(true);
            }}
          >
            <View
              style={{
                paddingRight: 40,
                height: 50,
                justifyContent: "center",
              }}
            >
              <Text
                style={
                  antonymPressed
                    ? styles.navTitlePressed
                    : styles.defaultNavTitle
                }
              >
                Antonym
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        {definitionPressed ? (
          <Definition />
        ) : synonymPressed ? (
          <Synonym />
        ) : (
          <Antonym />
        )}
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerCard: {
    backgroundColor: "#312754",
    height: 120,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginVertical: 45,
    shadowColor: "hotpink",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.55,
    shadowRadius: 20.84,
    elevation: 50,
  },
  navbar: {
    flexDirection: "row",
  },
  navTitlePressed: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
  },
  defaultNavTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#939294",
  },
});

export default WordDetails;
