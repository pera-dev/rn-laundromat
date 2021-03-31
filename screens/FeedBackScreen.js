import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View, CheckBox } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>FeedBack </Text>
      <View style={styles.feedbackArea}>
        <TextInput
          placeholder = "Message"
          style = {styles.input}
        />
        <Button
          onPress={}
         title="Submit"
          color="#f194ff"
        />
        </View>
        <Text>Select the quality</Text>
        <View>
        <Text>Best</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        </View>
        <View>
        <Text>Good</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        </View>
        <View>
        <Text>Bad</Text>
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
    backgroundColor: "#fff259",
    
  },
  feedbackArea: {
    borderWidth: 1,
    padding:50,
    borderColor:"#000",
    borderRadius:20,
    alignItems: "center",
    marginTop: 150,
    marginBottom: 15,
    
  },
  
  input: {
    height: 200,
  },
});
