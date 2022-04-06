import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Appbar, Text, Avatar} from 'react-native-paper';
import { View } from 'react-native';
// import { loremIpsum } from 'react-lorem-ipsum';

function Chat1({navigation}) {
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack('') } />
        <Avatar.Image size={50} source={require('../assets/ye.jpg')} />
        <Appbar.Content title="Denny" subtitle="Online" />
        <Appbar.Action icon="video"/>
        <Appbar.Action icon="phone"/>
        <Appbar.Action icon="dots-vertical"/>
      </Appbar.Header>


      <View style={{flex: 1}}>
        <ImageBackground
        //  resizeMode={'stretch'}
         style={{flex: 1}}
         source={require('../assets/bg.jpeg')}>
        <Text style={styles.kanan}>Den</Text>
        <Text style={styles.kanan}>Kuis Pancasila udahan belom?</Text>
        <Text style={styles.kiri}>Udahan</Text>
        <Text style={styles.kanan}>Bagi dong</Text>
        <Text style={styles.kiri}>1-8 true sisanya false</Text>
        <Text style={styles.kanan}>Okee makasih den</Text>
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

export default Chat1;