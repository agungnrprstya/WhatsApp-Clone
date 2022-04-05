import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { Appbar, List, Button, Avatar } from 'react-native-paper';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

function Chat({ navigation }) {
    return (
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('DalemScreen')}>
            <List.Item
              title="Unkown"
              titleStyle={{color: 'black'}}
              description="Woy"
              descriptionStyle={{color: 'black'}}
              left={props => <Avatar.Image {...props} source={require('../assets/kartun2.jpg')}/>}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('DalemScreen')}>
            <List.Item
              title="Unkown"
              titleStyle={{color: 'red'}}
              description="Woy"
              descriptionStyle={{color: 'red'}}
              left={props => <Avatar.Image {...props} source={require('../assets/kartun2.jpg')}/>}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ContactScreen')}
            style={{
            borderWidth: 1,
            borderColor:'#25d366',
            alignItems:"center",
            width:70,
            position:'absolute',
            bottom:-500,
            right:20,
            height:70,
            backgroundColor:"#25d366",
            borderRadius:100,
            elevation: 5,
            justifyContent:"center",
          }}>
            <MaterialIcons name="message" size={24} color="white"/>
          </TouchableOpacity>
        </View>

    );
    
}

export default Chat