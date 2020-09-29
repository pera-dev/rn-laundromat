import * as  React from 'react'
import { StyleSheet, Text, View, StatusBar,Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Button } from 'react-native-elements';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCIk7URulZ800O4x8YRu5qid7ivjUDliYE",
    authDomain: "laundromat-test.firebaseapp.com",
    databaseURL: "https://laundromat-test.firebaseio.com",
    projectId: "laundromat-test",
    storageBucket: "laundromat-test.appspot.com",
    messagingSenderId: "115420084820",
    appId: "1:115420084820:web:242c7f15ddba70b759cbc1",
    measurementId: "G-YWQXM4Z7MP"
  };


export default function Verification({navigation,route}) {
    
    //const [verificationId, setVerificationId] = React.useState();
    const {verificationId} = route.params;

    const [verificationCode, setVerificationCode] = React.useState();

    return (
        <View style={styles.container}>
           <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
           <KeyboardAvoidingView behavior="position" style={styles.loginContainer}>  
            <Image 
                style={{width:200,marginHorizontal:50,marginVertical:20,}}
                resizeMode="contain"
                source={require('../../assets/images/logo.png')}
            />
            <TextInput
                style={styles.textInput}
                //editable={!!verificationId}
                placeholder="123456"
                keyboardType='number-pad'
                onChangeText={setVerificationCode}
            />

            <Button title="Verify" 
                titleStyle={{fontWeight:'bold'}} 
                //disabled={!verificationId}
                onPress={async () => {
                try {
                    const credential = firebase.auth.PhoneAuthProvider.credential(
                    verificationId,
                    verificationCode
                    );
                    await firebase.auth().signInWithCredential(credential);
                    //Alert.alert("Phone authentication successful 👍");
                    navigation.navigate('Home');
                } catch (err) {
                    Alert.alert(err.message);
                }
                }}
            />

            </KeyboardAvoidingView>
         </TouchableWithoutFeedback>             
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#0071bd',
    },
    loginContainer:{
        marginTop:100,
        marginHorizontal:40,
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
    }
})
