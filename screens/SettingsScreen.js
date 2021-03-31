import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Settings</Text>
      <View style={styles.option1}>
        <Text>Account </Text>
      </View>
      <View style={styles.option}>
        <Text>Notifications </Text>
      </View>
      <View style={styles.option}>
        <Text>Apperance </Text>
      </View>
      <View style={styles.option}>
        <Text>Privacy and Securty </Text>
      </View>
      <View style={styles.option}>
        <Text>Help and Support</Text>
      </View>
      <View style={styles.option}>
        <Text>About</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: "#fff259",
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
});
