import React from 'react'
import { Appbar, Text, View } from 'react-native-paper'

function Setting({ navigation }) {
    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Setting" />
                <Appbar.Action icon="phone" />
                <Appbar.Action icon="video" />
                <Appbar.Action icon="dots-vertical" onPress={() => { }} />
            </Appbar.Header>
        </>
    );
}

export default Setting