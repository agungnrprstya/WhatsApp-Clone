import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { List, Avatar } from 'react-native-paper';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function Call({ navigation }) {
    return (
        <>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('InfoCallScreen')}>
                    <List.Item
                        title="Rahmat"
                        titleStyle={{color: 'black'}}
                        description="Hari ini 15.00"
                        descriptionStyle={{color: 'black'}}
                        left={props => <Avatar.Image {...props} source={require('../assets/rahmatK.jpg')}/>}
                        right={props => <List.Icon {...props} icon="phone" color='green' />} 
                    />
                </TouchableOpacity>

                <List.Item
                    title="Ayang 1"
                    description="Hari ini 03.30"
                    descriptionStyle={{color: 'black'}}
                    left={props => <Avatar.Image {...props} source={require('../assets/ryujin.jpg')} />}
                    right={props => <List.Icon {...props} icon="video" color='green' />} />

                <List.Item
                    title="Ayang 2"
                    description="Hari ini 02.15"
                    descriptionStyle={{color: 'black'}}
                    left={props => <Avatar.Image {...props} source={require('../assets/lisa.jpg')} />}
                    right={props => <List.Icon {...props} icon="video" color='green'/>} />

                <List.Item
                    title="Ayang 3"
                    description="Hari ini 01.00"
                    descriptionStyle={{color: 'black'}}
                    left={props => <Avatar.Image {...props} source={require('../assets/han.jpg')} />}
                    right={props => <List.Icon {...props} icon="video" color='green'/>} />

                <TouchableOpacity style={styles.button}>
                <MaterialCommunityIcons name="phone-plus" size={24} color="white"/>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor:'#25d366',
        alignItems:"center",
        width:70,
        position:'absolute',
        bottom:-340,
        right:20,
        height:70,
        backgroundColor:"#25d366",
        borderRadius:100,
        elevation: 5,
        justifyContent:"center",
    },
});

export default Call;