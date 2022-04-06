import React from 'react';
import { Appbar, Text } from 'react-native-paper';

function Dalem({ navigation }) {
    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Unkown" />
                <Appbar.Action icon="phone" />
                <Appbar.Action icon="video" />
                <Appbar.Action icon="dots-vertical" onPress={() => { }} />
            </Appbar.Header>
        </>
    );
}

export default Dalem;