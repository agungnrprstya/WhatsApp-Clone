import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Stack Screen/HomeScreen';
import DalemScreen from './Stack Screen/DalemScreen';
import SettingScreen from './Stack Screen/SettingScreen';
import InfoCallScreen from './Stack Screen/InfoCallScreen';
import ContactScreen from './Stack Screen/ContactScreen';

const Stack = createNativeStackNavigator()

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="DalemScreen" component={DalemScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SettingScreen" component={SettingScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="InfoCallScreen" component={InfoCallScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ContactScreen" component={ContactScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;