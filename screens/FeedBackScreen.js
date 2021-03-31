import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  CheckBox,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.headerText}>FeedBack </Text>
      <View style={styles.feedbackArea}>
        <TextInput placeholder="Message" style={styles.input} />
        <Button onPress={} title="Submit" color="#f194ff" />
      </View>
      <Text style={styles.innerText}>Select the quality</Text>
      <View>
        <Text style={styles.innerText}>Best</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
      </View>
      <View>
        <Text style={styles.innerText}>Good</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
      </View>
      <View>
        <Text style={styles.innerText}>Bad</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: "#63BBDB",
  },
  feedbackArea: {
    borderWidth: 1,
    padding: 50,
    borderColor: "#000",
    borderRadius: 20,
    alignItems: "center",
    marginTop: 150,
    marginBottom: 15,
  },

  input: {
    height: 200,
  },
  innerText: {
    fontSize: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
