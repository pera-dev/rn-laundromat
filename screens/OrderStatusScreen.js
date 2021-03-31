import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>My Orders</Text>
      <View style={styles.order1}>
        <Text>Order1 </Text>
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
  order1: {
    borderWidth: 1,
    padding:50,
    borderColor:"#000",
    borderRadius:20,
    alignItems: "center",
    marginTop: 150,
    marginBottom: 15,
  },
  order: {
    borderWidth: 1,
    padding:50,
    borderColor:"#000",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 15,
    borderRadius:20,

  },
});
