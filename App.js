import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Image, AsyncStorage} from 'react-native';
import { Appearance,AppearanceProvider, } from 'react-native-appearance';
import { NavigationContainer,DefaultTheme,DarkTheme} from '@react-navigation/native';
import { 
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from '@expo-google-fonts/dm-sans';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import CreateBasketScreen from './screens/createBasket/CreateBasketScreen';
import CheckoutScreen from './screens/createBasket/CheckoutScreen';
import OrderStatusScreen from './screens/OrderStatusScreen';
import SignInScreen from './screens/auth/SignInScreen';
import SignUpScreen from './screens/auth/SignUpScreen';
import VerificationScreen from "./screens/auth/VerificationScreen";
import * as firebase from "firebase";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { AppLoading } from 'expo';

const Stack = createStackNavigator();

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

try {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

} catch (error) {
  console.error(error);
}

export default function App(props) {

  const Authcontext = React.createContext();

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
      
    
  );

  React.useEffect(() => {

    const bootstrapAsync = async() => {

      let userToken;
      try { 
        userToken = await AsyncStorage.getItem('userToken')
        
      } catch (e) {
        
      }
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });

    };
    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );
  const isLoadingComplete = useCachedResources();

  const colorScheme = Appearance.getColorScheme();

  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });
  if(!fontsLoaded){
    return <AppLoading />;
  }

  //const store = createStore()

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      //<Provider store={store}>
      <Authcontext.Provider value={authContext}>
        <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
        <AppearanceProvider>

          <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme} linking={LinkingConfiguration}>
          
          <Stack.Navigator
            screenOptions={{
              headerTintColor: '#fff',
              headerStyle:{
                backgroundColor: "#0071bd",
                height:80,
              },
            }}>
<<<<<<< HEAD
                <Stack.Screen name='SignIn' options={{ headerShown: false }} component={SignInScreen}/>
                <Stack.Screen name='SignUp' options={{ headerShown: false }} component={SignUpScreen}/>
                <Stack.Screen name="Home" component={BottomTabNavigator} />
                <Stack.Screen name="CreateBasket"  component={CreateBasketScreen}/>
                <Stack.Screen name="OrderStatus" component={OrderStatusScreen}/>
                <Stack.Screen name="Checkout" component={CheckoutScreen}/>
=======
                  <Stack.Screen name='SignIn' options={{ headerShown: false }} component={SignInScreen}/>
                  <Stack.Screen name='Verification' options={{ headerShown: false }} component={VerificationScreen}/>
                  <Stack.Screen name='SignUp' options={{ headerShown: false }} component={SignUpScreen}/>
                  <Stack.Screen name="Home" component={BottomTabNavigator} />
                  <Stack.Screen name="CreateBasket"  component={CreateBasketScreen}/>
                  <Stack.Screen name="OrderStatus" component={OrderStatusScreen}/>  
             {/*  {state.userToken == null ? (
                <>
                  <Stack.Screen name='SignIn' options={{ headerShown: false }} component={SignInScreen}/>
                  <Stack.Screen name='Verification' options={{ headerShown: false }} component={VerificationScreen}/>
                  <Stack.Screen name='SignUp' options={{ headerShown: false }} component={SignUpScreen}/>
                </>
              ):(
                <>
                  <Stack.Screen name="Home" component={BottomTabNavigator} />
                  <Stack.Screen name="CreateBasket"  component={CreateBasketScreen}/>
                  <Stack.Screen name="OrderStatus" component={OrderStatusScreen}/>      
                </>
              )}  */}
>>>>>>> df13dd910279495da028cc432961687370b5da78
          </Stack.Navigator>
          </NavigationContainer>
        </AppearanceProvider>
      </View>
      </Authcontext.Provider>
      //</Provider>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
