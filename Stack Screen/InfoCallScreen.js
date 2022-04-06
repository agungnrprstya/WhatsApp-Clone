import React from 'react';
import { Appbar, Text } from 'react-native-paper';



function InfoCall({ navigation }) {
    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Info" />
                <Appbar.Action icon="phone" />
                <Appbar.Action icon="video" />
                <Appbar.Action icon="dots-vertical" onPress={() => { }} />
            </Appbar.Header>
        </>
    );
}

export default InfoCall;