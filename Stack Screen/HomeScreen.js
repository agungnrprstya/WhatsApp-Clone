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
            <Tab.Screen name="Panggilan" component={Call}/> 
            </Tab.Navigator>
    
    </>
  );
}

export default HomeScreen;