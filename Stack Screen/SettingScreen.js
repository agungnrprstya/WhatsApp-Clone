import React from 'react';
import { Appbar, List, Avatar } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

function Setting({ navigation }) {
    return (
        <>
            <Appbar.Header style={{ backgroundColor: '#075E54' }}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Setelan" />
            </Appbar.Header>
            <View>
                <List.Item
                    title="Agung"
                    titleStyle={styles.title}
                    description="Ada"
                    descriptionStyle={{color: 'black'}}
                    left={props => <Avatar.Image {...props} source={require('../assets/badboy.jpg')} />}
                    right={props => <MaterialIcons {...props} name="qr-code" color='green' size={40} style={{marginTop:10}} />}
                    style={{
                        borderBottomWidth: 1,
                    }}
                />
                <List.Item
                    title="Akun"
                    titleStyle={styles.title}                    
                    description="Privas, keamanan, ganti nomor"
                    descriptionStyle={{color: 'black'}}
                    left={props => <List.Icon {...props} icon={require('../assets/key.png')}/>}
                />
                <List.Item
                    title="Chat"
                    titleStyle={styles.title}                    
                    description="Tema, wallpaper, riwayat Chat"
                    descriptionStyle={{color: 'black'}}
                    left={props => <List.Icon {...props} icon={require('../assets/chat.png')}/>}
                />
                <List.Item
                    title="Notifikasi"
                    titleStyle={styles.title}                    
                    description="Pesan, grup & nada dering panggilan"
                    descriptionStyle={{color: 'black'}}
                    left={props => <List.Icon {...props} icon={require('../assets/belll.png')} />}
                />
                <List.Item
                    title="Penyimpanan dan Data"
                    titleStyle={styles.title}                    
                    description="Penggunaan jaringan, unduh otomatis"
                    descriptionStyle={{color: 'black'}}
                    left={props => <List.Icon {...props} icon={require('../assets/statuss.png')} />}
                />
                <List.Item
                    title="Bantuan"
                    titleStyle={styles.title}                    
                    description="Pusat bantuan, hubungi kami, kebijakan privasi"
                    descriptionStyle={{color: 'black'}}
                    left={props => <List.Icon {...props} icon={require('../assets/help.png')} />}
                />
                <List.Item
                    title="Undang Teman"
                    titleStyle={styles.title}                    
                    left={props => <List.Icon {...props} icon={require('../assets/group1.png')} size={10} />}
                />
            </View>

        </>
    );
}

const styles = StyleSheet.create({
    title : {
        color: 'black', 
        fontWeight:'bold', 
        marginBottom:5,
    },
});



export default Setting;