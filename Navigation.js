import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import DalemScreen from './screen/DalemScreen';
import SettingScreen from './screen/SettingScreen';
import InfoCallScreen from './screen/InfoCallScreen';
import ContactScreen from './screen/ContactScreen';

const Stack = createNativeStackNavigator()

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="DalemScreen" component={DalemScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SettingScreen" component={SettingScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="InfoCallScreen" component={InfoCallScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ContactScreen" component={ContactScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;