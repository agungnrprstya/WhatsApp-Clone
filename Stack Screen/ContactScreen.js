import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Appbar, List, Avatar } from 'react-native-paper';
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
                    titleStyle={styles.title1}
                    left={props => <Avatar.Image {...props} source={require('../assets/GrupWa.jpeg')} />} />
                <List.Item
                    title="Kontak Baru"
                    titleStyle={styles.title1}
                    left={props => <Avatar.Image {...props} source={require('../assets/Add.jpeg')} />}
                    right={props => <List.Icon {...props} icon="qrcode" />} />
                <TouchableOpacity onPress={() => navigation.navigate('Chat3')}>
                <List.Item
                    title="Agung"
                    titleStyle={styles.title2}                    
                    description="Ada"
                    left={props => <Avatar.Image {...props} source={require('../assets/badboy.jpg')} />} />
                </TouchableOpacity>
                <List.Item
                    title="Bagas"
                    titleStyle={styles.title2}                    
                    description="2022 Tamat Basara"
                    left={props => <Avatar.Image {...props} source={require('../assets/BagasK.jpg')} />} />
                <List.Item
                    title="Zulham"
                    titleStyle={styles.title2}                    
                    description="Blender is my life!"
                    left={props => <Avatar.Image {...props} source={require('../assets/zulhamK.jpg')} />} />
                <List.Item
                    title="Rifqi"
                    titleStyle={styles.title2}                    
                    description="Galau Banget!"
                    left={props => <Avatar.Image {...props} source={require('../assets/RifkiK.jpg')} />} />
                <TouchableOpacity onPress={() => navigation.navigate('Chat2')}>
                <List.Item
                    title="Rahmat Zainul"
                    titleStyle={styles.title2}                    
                    description="Berdoa Aja"
                    left={props => <Avatar.Image {...props} source={require('../assets/rahmatK.jpg')} />} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Chat1')}>
                <List.Item 
                    title="Denny"
                    titleStyle={styles.title2}
                    description="Aku anak jaringan"
                    left={props => <Avatar.Image {...props} source={require('../assets/ye.jpg')} />} 
                    />
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    title1 : {
        color: 'black', 
        fontWeight:'bold', 
        marginBottom:5, 
        marginLeft: 16
    },
    title2 : {
        color: 'black',
        fontWeight:'bold', 
        marginBottom:5
    },
});

export default Contact;