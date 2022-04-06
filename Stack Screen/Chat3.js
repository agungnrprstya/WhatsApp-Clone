import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Appbar, Text, Avatar} from 'react-native-paper';
import { View } from 'react-native';
// import { loremIpsum } from 'react-lorem-ipsum';

function Chat3({navigation}) {
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack('') } />
        <Avatar.Image size={50} source={require('../assets/badboy.jpg')} />
        <Appbar.Content title="Agung" subtitle="Terakhir dilihat hari ini pukul 19.45" />
        <Appbar.Action icon="video"/>
        <Appbar.Action icon="phone"/>
        <Appbar.Action icon="dots-vertical"/>
      </Appbar.Header>


      <View style={{flex: 1}}>
        <ImageBackground
        //  resizeMode={'stretch'}
         style={{flex: 1}}
         source={require('../assets/bg.jpeg')}>
        <Text style={styles.kanan}>P</Text>
        <Text style={styles.kanan}>Gung</Text>
        <Text style={styles.kiri}>Ada apa</Text>
        <Text style={styles.kanan}>Gmeet mobile yoo</Text>
        <Text style={styles.kiri}>Ntar malem aja</Text>
        <Text style={styles.kanan}>Okedeh</Text>
        </ImageBackground>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  kiri : {
    // flex: 100,
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    marginRight: 75,
    // borderWidth : 
    borderRadius: 10,

},
  kanan : {
    // flex: 0.3,
    justifyContent: "space-between",
    backgroundColor: "#C0EDA6",
    padding: 10,
    margin: 10,
    marginLeft: 75,
    // borderWidth : 5,
    textAlign : 'right',
    borderRadius: 10
  }
});

export default Chat3;