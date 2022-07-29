import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const Definition = () => {
  return (
    <ScrollView
      style={styles.detailCardsContainer}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <View style={styles.detailsCard}>
          <View style={{ padding: 20 }}>
            <View style={{ paddingBottom: 10 }}>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: "bold",
                  color: "#939294",
                }}
              >
                Noun
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                1. a plant, Allium Cepa, of the amaryllis family, having an
                edible, succulent, pungent bulb
              </Text>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                2. any of certain similar plants.
              </Text>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                3. Slang. a person:
                <Text style={{ color: "#939294" }}>He's a tough onion.</Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.detailsCard}>
          <View style={{ padding: 20 }}>
            <View style={{ paddingBottom: 10 }}>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: "bold",
                  color: "#939294",
                }}
              >
                Adjectives
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                1. containing or cooked with onions:{" "}
                <Text style={{ color: "grey" }}>Onion soup</Text>
              </Text>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                2. of, relating to, or resembling an onion.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  detailsCard: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10,
  },
  detailCardsContainer: {
    marginTop: 20,
  },
});

export default Definition;
