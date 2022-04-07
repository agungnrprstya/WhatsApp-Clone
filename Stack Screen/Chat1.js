import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { TextInput, Appbar, Text, Avatar } from 'react-native-paper';
import { View } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import { loremIpsum } from 'react-lorem-ipsum';

function Chat1({navigation}) {
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('Home')}/>
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
        <TextInput
          label="Ketik Pesan"
          style={styles.input}
          left={<TextInput.Icon name="emoticon" />}
          // placeholder="Enter placeholder"
          right={<TextInput.Icon name="camera" />}
        />
        <TouchableOpacity style={styles.button}>
                <MaterialIcons name="mic" size={24} color="white"/>
        </TouchableOpacity>
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
  },
  input: {
    width: '80%',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
    bottom: 20,
    position: 'absolute',
    marginLeft: 10,
    backgroundColor: 'white',
  },
  button: {
    borderWidth: 1,
    borderColor:'#25d366',
    alignItems:"center",
    width:50,
    position:'absolute',
    bottom:30,
    right:10,
    height:50,
    backgroundColor:"#25d366",
    borderRadius:100,
    elevation: 5,
    justifyContent:"center",
  },
});

export default Chat1;