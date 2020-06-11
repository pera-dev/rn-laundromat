import * as  React from 'react'
import { StyleSheet, Text, View, StatusBar,Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Button } from 'react-native-elements';

export default function SignInScreen({navigation}) {
    const [mobileNumber, setMobileNumber] = React.useState('');

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
                placeholder="Mobile Number"
                style={styles.textInput}
                value={mobileNumber}
                onChangeText={setMobileNumber}
            />

            <Button title="Sign in" 
                titleStyle={{fontWeight:'bold'}}  
                onPress={ () => navigation.navigate('Home')} raised/>

            <Button style={{
                    marginTop:10,
                }}
                title="Sign Up" 
                titleStyle={{fontWeight:'bold'}}
                buttonStyle={{backgroundColor:'#04cca4'}}
                onPress={ () => navigation.navigate('SignUp')} />
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
