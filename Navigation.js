import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import DalemScreen from './screen/DalemScreen';

const Stack = createNativeStackNavigator()

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="DalemScreen" component={DalemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;