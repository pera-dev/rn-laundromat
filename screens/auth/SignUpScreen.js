import * as React from "react";
import { Text, View, TextInput, Button, StyleSheet, TouchableOpacity, Platform, Alert } from "react-native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";

import * as firebase from "firebase";

export default function SignUpScreen({firebaseConfig}) {  

    const recaptchaVerifier = React.useRef(null);

    const [phoneNumber, setPhoneNumber] = React.useState();

    const [verificationId, setVerificationId] = React.useState();

    const [verificationCode, setVerificationCode] = React.useState();

    const [message, showMessage] = React.useState((!firebaseConfig || Platform.OS === 'web')
    ? { text: "To get started, provide a valid firebase config in App.js and open this snack on an iOS or Android device."}
    : undefined);

    return (
        <View style={{ padding: 20, marginTop: 50 }}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <Text style={{ marginTop: 20 }}>Enter phone number</Text>
      <TextInput
        style={{ marginVertical: 10, fontSize: 17 }}
        placeholder="+1 999 999 9999"
        autoFocus
        autoCompleteType="tel"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
      />
      <Button
        title="Send Verification Code"
        disabled={!phoneNumber}
        onPress={async () => {
          // The FirebaseRecaptchaVerifierModal ref implements the
          // FirebaseAuthApplicationVerifier interface and can be
          // passed directly to `verifyPhoneNumber`.
          try {
            const phoneProvider = new firebase.auth.PhoneAuthProvider();
            const verificationId = await phoneProvider.verifyPhoneNumber(
              phoneNumber,
              recaptchaVerifier.current
            );
            setVerificationId(verificationId);
            showMessage({
              text: "Verification code has been sent to your phone.",
            });
          } catch (err) {
            showMessage({ text: `Error: ${err.message}`, color: "red" });
          }
        }}
      />
      <Text style={{ marginTop: 20 }}>Enter Verification code</Text>
      <TextInput
        style={{ marginVertical: 10, fontSize: 17 }}
        editable={!!verificationId}
        placeholder="123456"
        onChangeText={setVerificationCode}
      />
      <Button
        title="Confirm Verification Code"
        disabled={!verificationId}
        onPress={async () => {
          try {
            const credential = firebase.auth.PhoneAuthProvider.credential(
              verificationId,
              verificationCode
            );
            await firebase.auth().signInWithCredential(credential);
            showMessage({ text: "Phone authentication successful 👍" });
          } catch (err) {
            showMessage({ text: `Error: ${err.message}`, color: "red" });
          }
        }}
      />
      {message ? (
        <TouchableOpacity
          style={[StyleSheet.absoluteFill, { backgroundColor: 0xffffffee, justifyContent: "center" }]}
          onPress={() => showMessage(undefined)}>
          
        </TouchableOpacity>
      ) : undefined}
    </View>
    )
=======
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback, Image,
    Alert

} from 'react-native'

const SignUpScreen=()=>{
    const [mobileNumber, setMobileNumber] = React.useState('');

    const [value, onChangeText] = React.useState('Enter Your Email or Phone No');
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior="position" style={styles.loginContainer}>


            <Image
                style={{width:200,marginHorizontal:70,marginVertical:20,}}
                resizeMode="contain"
                source={require('../../assets/images/logo.png')}
            />

            <Text style={styles.regTitleTextStyle}>Register New User</Text>
            <TextInput
                placeholder="Enter Your Email or Phone Number"
                style={styles.textInput}
                value={mobileNumber}
                onChangeText={setMobileNumber}
            />

            <Button title='Register' onPress={()=>{
                Alert.alert('Register Success!','Congratulations!');
            }}/>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </View>
    );
}


const styles=StyleSheet.create({
    regTitleTextStyle:{
        fontSize:20,
        color: 'white',
    },
    container:{
        flex:1,
        backgroundColor:'#0071bd',
    },
    textInput:{
        marginVertical:10,
        padding:10,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor:'#fff',
        color:'#000',
        borderRadius:4,
    },

    loginContainer:{
        marginTop:200,
        marginHorizontal:40,
    },
});

export default SignUpScreen;

