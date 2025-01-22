import React from 'react';

import {ABOUT_ROUTE, HOME_ROUTE, MORE_ROUTE, WALLET_ROUTE} from './Constants';
import HomeContainer from '../screens/Home/home.container';
import AboutContainer from '../screens/About/about.container';
import LoginContainer from '../screens/Auth/Login/login.container';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SelectionOneContainer from '../screens/Home/selectionScreen/selectionOne.container';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageComponent from '../components/Image';
import {Text, View} from 'react-native';
import normalize from '../helpers/normalizeText';

// const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ProtectedRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#645209',
        tabBarInactiveTintColor: '#64748b',
        tabBarLabelStyle: {
          fontSize: normalize(12),
        },
        tabBarStyle: {
          height: 60,
          paddingBottom: 10,
          backgroundColor: '#ffffff',
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name={HOME_ROUTE}
        component={HomeContainer}
        options={{
          headerLeft: () => (
            <View>
              <Icon name="chevron-back" size={30} color="black" />
            </View>
          ),
          headerRight: () => (
            <View>
              <Icon name="notifications-outline" size={30} color="black" />
            </View>
          ),
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
            shadowOpacity: 0,
            height: 80,
          },
          headerTitle: () => (
            <View style={{padding: 10}}>{ImageComponent('appIcon')}</View>
          ),
          tabBarIcon: ({color, size, focused}) => ImageComponent('home'),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name={WALLET_ROUTE}
        component={AboutContainer}
        options={{
          tabBarIcon: ({color}) => ImageComponent('wallet'),
          tabBarLabel: 'Wallet',
        }}
      />
      <Tab.Screen
        name={MORE_ROUTE}
        component={AboutContainer}
        options={{
          tabBarIcon: ({color}) => ImageComponent('more'),
          tabBarLabel: 'More',
        }}
      />
    </Tab.Navigator>
  );
}

export default ProtectedRoutes;
