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

