import React, { useLayoutEffect } from "react";
import { View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Chat from "../screen/ChatScreen"
import Camera from "../screen/CameraScreen"
import Status from "../screen/StatusScreen"
import Call from "../screen/CallScreen"
// import { TabBarIndicator } from "react-native-tab-view";
// import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
// import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator()
// const styles = StyleSheet.create({})

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
                <View style={{flexDirection: "row",}}>
                    <MaterialIcons 
                     name="search" 
                     size={30} 
                     color="white"
                    />
                    <MaterialCommunityIcons 
                     name="dots-vertical" 
                     size={30} 
                     color="white"
                     onPress={() => navigation.navigate('SettingScreen')}
                     />
                </View>
            )
        })
    })

    return (
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
                    <MaterialIcons name="photo-camera" size={24} color="white"/>
                    </View>
                    ),
                    tabBarShowLabel:false
                }}
            />
            <Tab.Screen name="Chat" component={Chat}/>
            <Tab.Screen name="Status" component={Status}/>
            <Tab.Screen name="Call" component={Call}/> 
        </Tab.Navigator>
    )
}

export default HomeScreen
