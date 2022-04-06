import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { List, Avatar } from 'react-native-paper';


function Call({ navigation }) {
    return (
        <>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('InfoCallScreen')}>
                    <List.Item
                        title="Agung"
                        titleStyle={{color: 'black'}}
                        description="Hari ini 03.45"
                        descriptionStyle={{color: 'black'}}
                        // left={props => <Avatar.Image {...props} source={require('../assets/kartun2.jpg')} />}
                        left={props => <List.Icon {...props} icon="phone" color='black' />} />
                </TouchableOpacity>
            </View>
        </>
    );
}

export default Call;