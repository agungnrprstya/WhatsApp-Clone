import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Appbar, Text, List, Avatar } from 'react-native-paper';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';

function Contact({ navigation }) {
    return (
        <>
            <Appbar.Header style={{ backgroundColor: '#075E54' }}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Pilih Kontak" subtitle={'6 kontak'} />
                <MaterialIcons name="search" size={24} color="white" />
                <Appbar.Action icon="dots-vertical" onPress={() => { }} />
            </Appbar.Header>
            <View>
                <List.Item
                    title="Grup Baru"
                    titleStyle={{color: 'black', fontWeight:'bold', marginBottom:5, marginLeft: 16}}
                    left={props => <Avatar.Image {...props} source={require('../assets/GrupWa.jpeg')} />} />
                <List.Item
                    title="Kontak Baru"
                    titleStyle={{color: 'black', fontWeight:'bold', marginBottom:5, marginLeft: 16}}
                    left={props => <Avatar.Image {...props} source={require('../assets/Add.jpeg')} />}
                    right={props => <List.Icon {...props} icon="qrcode" />} />
                <List.Item
                    title="Agung"
                    titleStyle={{color: 'black', fontWeight:'bold', marginBottom:5}}
                    description="Ada"
                    left={props => <Avatar.Image {...props} source={require('../assets/badboy.jpg')} />} />
                <List.Item
                    title="Bagas"
                    titleStyle={{color: 'black', fontWeight:'bold', marginBottom:5}}
                    description="2022 Tamat Basara"
                    left={props => <Avatar.Image {...props} source={require('../assets/BagasK.jpg')} />} />
                <List.Item
                    title="Zulham"
                    titleStyle={{color: 'black', fontWeight:'bold', marginBottom:5}}
                    description="Blender is my life!"
                    left={props => <Avatar.Image {...props} source={require('../assets/zulhamK.jpg')} />} />
                <List.Item
                    title="Rifqi"
                    titleStyle={{color: 'black', fontWeight:'bold', marginBottom:5}}
                    description="Galau Banget!"
                    left={props => <Avatar.Image {...props} source={require('../assets/RifkiK.jpg')} />} />
                <List.Item
                    title="Rahmat Zainul"
                    titleStyle={{color: 'black', fontWeight:'bold', marginBottom:5}}
                    description="Berdoa Aja"
                    left={props => <Avatar.Image {...props} source={require('../assets/rahmatK.jpg')} />} />
                <TouchableOpacity onPress={() => navigation.navigate('DalemScreen')}>
                <List.Item 
                    title="Denny"
                    titleStyle={{color: 'black', fontWeight:'bold', marginBottom:5}}
                    description="Aku anak jaringan"
                    left={props => <Avatar.Image {...props} source={require('../assets/ye.jpg')} />} 
                    />
                </TouchableOpacity>
            </View>
        </>
    );
}

export default Contact;