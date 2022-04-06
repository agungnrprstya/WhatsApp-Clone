// import React, { useLayoutEffect } from "react";
// import { View } from "react-native";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import Chat from "../screen/ChatScreen"
// import Camera from "../screen/CameraScreen"
// import Status from "../screen/StatusScreen"
// import Call from "../screen/CallScreen"
// // import { TabBarIndicator } from "react-native-tab-view";
// // import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
// // import { NavigationContainer } from "@react-navigation/native";

// const Tab = createMaterialTopTabNavigator()
// // const styles = StyleSheet.create({})

// const HomeScreen = ({navigation}) => {
//     useLayoutEffect(() => {
//         navigation.setOptions({
//             title:"WhatsApp",
//             headerTitleStyle:{
//                 color:"white",
//             },
//             headerStyle:{   
//                 backgroundColor:"#075E54"
//             },
//             headerRight:() => (
//                 <View style={{flexDirection: "row",}}>
//                     <MaterialIcons 
//                      name="search" 
//                      size={30} 
//                      color="white"
//                     />
//                     <MaterialCommunityIcons 
//                      name="dots-vertical" 
//                      size={30} 
//                      color="white"
//                      onPress={() => navigation.navigate('SettingScreen')}
//                      />
//                 </View>
//             )
//         })
//     })

//     return (
//         <Tab.Navigator initialRouteName="Chat"
//             screenOptions={{
//                 tabBarActiveTintColor:"white",
//                 tabBarStyle:{backgroundColor:"#075E54"},
//                 tabBarLabelStyle:{
//                     fontWeight:"bold"
//                 },
//             }}
//         >
//             <Tab.Screen name="Camera" component={Camera}
//                 options={{
//                     tabBarIcon:(()=>
//                     <View>
//                     <MaterialIcons name="photo-camera" size={22} color="white"/>
//                     </View>
//                     ),
//                     tabBarShowLabel:false
//                 }}
//             />
//             <Tab.Screen name="Chat" component={Chat}/>
//             <Tab.Screen name="Status" component={Status}/>
//             <Tab.Screen name="Call" component={Call}/> 
//         </Tab.Navigator>
//     )
// }

// export default HomeScreen

import React from 'react';
import { View } from "react-native";
import { Appbar,} from 'react-native-paper';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chat from "../Tab Screen/ChatScreen"
import Camera from "../Tab Screen/CameraScreen"
import Status from "../Tab Screen/StatusScreen"
import Call from "../Tab Screen/CallScreen"

const Tab = createMaterialTopTabNavigator();

function HomeScreen({navigation}) {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="WhatsApp" />
        <MaterialIcons name = "search" size={24} color="white"/>
        <Appbar.Action icon="dots-vertical" onPress={() => navigation.navigate('SettingScreen')} />
      </Appbar.Header>

        <Tab.Navigator initialRouteName="Chat"
            screenOptions={{
                tabBarActiveTintColor:"white",
                tabBarStyle:{backgroundColor:"#075E54"},
                tabBarLabelStyle:{
                fontWeight:"bold"
                },
            }}
            >
            <Tab.Screen name="Camera" component={Camera}
                options={{
                tabBarIcon:(()=>
                <View>
                <MaterialIcons name="photo-camera" size={22} color="white"/>
                </View>
                ),
                tabBarShowLabel:false
            }}
            />
            <Tab.Screen name="Chat" component={Chat}/>
            <Tab.Screen name="Status" component={Status}/>
            <Tab.Screen name="Call" component={Call}/> 
            </Tab.Navigator>
    
    </>
  );
}

export default HomeScreen;