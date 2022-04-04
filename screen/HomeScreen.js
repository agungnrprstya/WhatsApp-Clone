import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Chat from "../screen/ChatScreen"
import Camera from "../screen/CameraScreen"
// import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator()

const HomeScreen = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title:"WhatsApp",
            headerTitleStyle:{
                color:"white",
            },
            headerStyle:{   
                backgroundColor:"#075E54"
            },
            headerRight:() => (
                <View style={styles.headerRight}>
                    <MaterialIcons name="search" size={30} color="white"/>
                    <MaterialCommunityIcons name="dots-vertical" size={30} color="white"/>
                </View>
            )
        })
    })

    return (
        <Tab.Navigator initialRouteName="Chat">
            <Tab.Screen name="Camera" component={Camera}/>
            <Tab.Screen name="Chat" component={Chat}/>
            {/* <Tab.Screen name="Status" component={StatusScreen}/>
            <Tab.Screen name="Calls" component={CallScreen}/>  */}
        </Tab.Navigator>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})