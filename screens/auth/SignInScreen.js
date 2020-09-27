import * as  React from 'react'
import { StyleSheet, Text, View, StatusBar,Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Button } from 'react-native-elements';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import * as firebase from "firebase";
import { connect } from 'react-redux';

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

export default function SignInScreen({navigation}) {
    
    const recaptchaVerifier = React.useRef(null);

    const [phoneNumber, setPhoneNumber] = React.useState();

    const [verificationId, setVerificationId] = React.useState();

    return (
        <View style={styles.container}>
           <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
           <KeyboardAvoidingView behavior="position" style={styles.loginContainer}>
           <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
           />    
            <Image 
                style={{width:200,marginHorizontal:50,marginVertical:20,}}
                resizeMode="contain"
                source={require('../../assets/images/logo.png')}
            />
            <TextInput
                placeholder="Mobile Number"
                style={styles.textInput}
                autoFocus
                autoCompleteType="tel"
                keyboardType="phone-pad"
                textContentType="telephoneNumber"
                onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
            />

            <Button title="Sign in" 
                titleStyle={{fontWeight:'bold'}} 
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
                    navigation.navigate("Verification",{verificationId : verificationId});
                    //Alert.alert("Verification code has been sent to your phone");
                } catch (err) {
                    Alert.alert(err.message);
                }
                }} 
            />
            <Button style={{
                    marginTop:10,
                }}
                title="Sign Up" 
                titleStyle={{fontWeight:'bold',color:'#04cca4'}}
                buttonStyle={{borderColor:'#04cca4',borderWidth:2}}
                onPress={ () => navigation.navigate('SignUp')}
                type='outline'/>
            <Button style={{
                    marginTop:10,
                }}
                title="Sign Up" 
                titleStyle={{fontWeight:'bold',color:'#04cca4'}}
                onPress={ () => navigation.navigate('Home')}
                type='clear' />
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
        marginTop:200,
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
