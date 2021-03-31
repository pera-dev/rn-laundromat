import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.headerText}>My Orders</Text>
      <View style={styles.order1}>
        <Text style={styles.innerText}>Order1 </Text>
      </View>
      <View style={styles.order}>
        <Text style={styles.innerText}>Order 2 </Text>
      </View>
      <View style={styles.order}>
        <Text style={styles.innerText}>Order 3 </Text>
      </View>
      <Button onPress={} title="Track My Order" color="#f194ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: "#63BBDB",
  },
  order1: {
    borderWidth: 1,
    padding: 50,
    borderColor: "#000",
    borderRadius: 20,
    alignItems: "center",
    marginTop: 150,
    marginBottom: 15,
  },
  order: {
    borderWidth: 1,
    padding: 50,
    borderColor: "#000",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 20,
  },
  innerText: {
    fontSize: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
