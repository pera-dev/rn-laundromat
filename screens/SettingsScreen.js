import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <View style={styles.optionArea}>
        <View style={styles.option1}>
          <Text style={styles.optionText}>Account </Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Notifications </Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Apperance </Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Privacy and Securty </Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Help and Support</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>About</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 50,

    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  option1: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    alignItems: "center",
    marginTop: 150,
    marginBottom: 15,
  },
  option: {
    borderBottomColor: "#000",
    alignItems: "center",
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 15,
  },
  header: {
    paddingTop: 50,
    backgroundColor: "#0071BD",
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  optionText: {
    fontSize: 20,
  },
  optionArea: {
    margin: 50,
  },
});
