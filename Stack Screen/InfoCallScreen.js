// import React from 'react';
// import { Appbar, Text } from 'react-native-paper';



// function InfoCall({ navigation }) {
//     return (
//         <>
//             <Appbar.Header>
//                 <Appbar.BackAction onPress={() => navigation.goBack()} />
//                 <Appbar.Content title="Info" />
//                 <Appbar.Action icon="phone" />
//                 <Appbar.Action icon="video" />
//                 <Appbar.Action icon="dots-vertical" onPress={() => { }} />
//             </Appbar.Header>
//         </>
//     );
// }

// export default InfoCall;

import React from 'react';
import { View, Text } from 'react-native';
import { Appbar, List, Avatar } from 'react-native-paper';

function InfoScreen({ navigation }) {
    return (
        <>
            <Appbar.Header style={{ backgroundColor: '#075E54' }}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Info Panggilan" />
                <Appbar.Action icon="message" onPress={() => navigation.navigate('Chat2')}/>
                <Appbar.Action icon="dots-vertical" />
            </Appbar.Header>
            <View>
                <List.Item
                    title="Rahmat"
                    titleStyle={{ marginBottom: 10, color: 'black', fontWeight:'bold' }}
                    description="Ada"
                    left={props => <Avatar.Image {...props} source={require('../assets/rahmatK.jpg')} />}
                    right={props => <><List.Icon {...props} icon="phone" color='green' />
                <List.Icon {...props} icon="video" color='green' /> </>} />
                <Text style={{ marginLeft: 90, borderTopWidth: 1 }}></Text>
                <Text style={{ marginLeft: 86, marginTop:10 }}> Hari ini</Text>
                <List.Item
                    title="Tak Terjawab"
                    description="15.00"
                    left={props => <List.Icon {...props} icon="call-received" color='red' />}
                    style={{ marginLeft: 15 }} />
                <List.Item
                    title="Keluar"
                    description="13.50"
                    left={props => <List.Icon {...props} icon="call-made" color='green' />}
                    style={{ marginLeft: 15 }} />
            </View>
        </>


    );
}

export default InfoScreen;