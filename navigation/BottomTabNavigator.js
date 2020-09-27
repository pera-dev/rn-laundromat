import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import AccountScreen from '../screens/AccountScreen';
import HomeScreen from '../screens/HomeScreen';
import { Image,View,} from 'react-native';
import SettingsScreen from '../screens/SettingsScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

function LogoHeader() {
  return (
    <View>
      <Image 
        style={{width:140,height:80,marginTop:10,}}
        resizeMode="contain"
        source={require('../assets/images/logo_header.png')}
      />
    </View>
  )
}

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html

  navigation.setOptions({ 
    headerTitle: () => <LogoHeader/>,
    headerLeft: null,
    gesturesEnabled: false,
  });
  
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME} backBehavior='initialRoute'>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Laundromat',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-today" />,
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: 'My Account',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Laundromat';
    case 'Account':
      return 'My Account';
  }
}
