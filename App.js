// import * as React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './screen/HomeScreen';
// import DalemScreen from './screen/DalemScreen';
import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import Navigation from "./Navigation";

export default function App() {
    return (
        <PaperProvider>
            <Navigation/>
        </PaperProvider>
    );
}


// const Stack = createNativeStackNavigator()

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen}/>
//         <Stack.Screen name="DalemScreen" component={DalemScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:'#fff',
//     alignItems:'center',
//     justifyContent:'center',
//   },
// });
