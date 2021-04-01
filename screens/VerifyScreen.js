import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Verify My Account</Text>
      </View>
      <View style={styles.optionArea}>
        <View style={styles.option1}>
          <Text style={styles.optionText}>Username : </Text>
          <TextInput placeholder="  " />
          {/* Link Current Username */}
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Email : </Text>
          <TextInput placeholder="  " />
          {/* Link Current Email */}
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Mobile Number : </Text>
          <TextInput placeholder="  " />
          {/* Link Current Mobile Number */}
        </View>
        <View>
          <Button title=" Submit " onPress={} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#63BBDB",
  },
  option1: {
    alignItems: "center",
    marginTop: 150,
    marginBottom: 15,
  },
  option: {
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
