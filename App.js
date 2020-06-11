import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Image, AsyncStorage} from 'react-native';
import { Appearance,AppearanceProvider, } from 'react-native-appearance';
import { NavigationContainer,DefaultTheme,DarkTheme} from '@react-navigation/native';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import CreateBasketScreen from './screens/CreateBasketScreen';
import OrderStatusScreen from './screens/OrderStatusScreen';
import SignInScreen from './screens/auth/SignInScreen';
import SignUpScreen from './screens/auth/SignUpScreen';

const Stack = createStackNavigator();

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

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
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
                <Stack.Screen name='SignIn' options={{ headerShown: false }} component={SignInScreen}/>
                <Stack.Screen name='SignUp' options={{ headerShown: false }} component={SignUpScreen}/>
                <Stack.Screen name="Home" component={BottomTabNavigator} />
                <Stack.Screen name="CreateBasket"  component={CreateBasketScreen}/>
                <Stack.Screen name="OrderStatus" component={OrderStatusScreen}/>
          </Stack.Navigator>
          </NavigationContainer>
        </AppearanceProvider>
      </View>
      </Authcontext.Provider>

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
