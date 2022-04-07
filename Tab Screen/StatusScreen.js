import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { List, Avatar } from 'react-native-paper';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function Status({ navigation }) {
return (
        <View>
          
            <List.Item
              title="Status saya"
              titleStyle={styles.title}
              description="Ketuk untuk menambahkan oembaruan status"
              descriptionStyle={{color: 'black', marginLeft:-10}}
              left={props => <Avatar.Image {...props} source={require('../assets/mystatus.jpg')}/>}
            />
          
          <Text style={{fontWeight:'bold', marginTop:5, marginBottom:5, marginLeft:10}}>Pembaruan terkini</Text>
          
            <List.Item
              title="Bagas"
              titleStyle={styles.title}
              description="24 menit yang lalu"
              descriptionStyle={{color: 'black', marginLeft:-10}}
              left={props => <Avatar.Image {...props} source={require('../assets/status1.png')}/>}
            />

            <List.Item
              title="Rahmat"
              titleStyle={styles.title}
              description="56 menit yang lalu"
              descriptionStyle={{color: 'black', marginLeft:-10}}
              left={props => <Avatar.Image {...props} source={require('../assets/status2.png')}/>}
            />

            <List.Item
              title="Ayang 1"
              titleStyle={styles.title}
              description="Hari ini, 16:05"
              descriptionStyle={{color: 'black', marginLeft:-10}}
              left={props => <Avatar.Image {...props} source={require('../assets/status3.png')}/>}
            />

            <List.Item
              title="Rifqi"
              titleStyle={styles.title}
              description="Hari ini, 12:45"
              descriptionStyle={{color: 'black', marginLeft:-10}}
              left={props => <Avatar.Image {...props} source={require('../assets/status4.png')}/>}
            />

            <Text style={styles.text}>Pembaruan yang telah dilihat</Text>

            <List.Item
              title="Denny"
              titleStyle={styles.title}
              description="Hari ini, 03:30"
              descriptionStyle={{color: 'black', marginLeft:-10}}
              left={props => <Avatar.Image {...props} source={require('../assets/vstatus2.png')}/>}
            />

            <List.Item
              title="Zulham 3D"
              titleStyle={styles.title}
              description="Kemarin, 22.15"
              descriptionStyle={{color: 'black', marginLeft:-10}}
              left={props => <Avatar.Image {...props} source={require('../assets/vstatus1.png')}/>}
            />

          <TouchableOpacity 
            style={styles.button1}>
            <MaterialCommunityIcons name="pencil" size={24} color="white"/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}
            style={styles.button2}>
            <MaterialIcons name="camera-alt" size={24} color="white"/>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  title: {
    color: 'black', 
    marginLeft:-10, 
    marginBottom:10, 
    fontWeight:'bold'
  },
  text: {
    fontWeight:'bold', 
    marginTop:5, 
    marginBottom:5, 
    marginLeft:10
  },
  button1: {
    borderWidth: 1,
    borderColor:'grey',
    alignItems:"center",
    width:50,
    position:'absolute',
    bottom:50,
    right:28,
    height:50,
    backgroundColor:"grey",
    borderRadius:100,
    elevation: 5,
    justifyContent:"center",
  },
  button2: {
    borderWidth: 1,
    borderColor:'#25d366',
    alignItems:"center",
    width:70,
    position:'absolute',
    bottom:-40,
    right:20,
    height:70,
    backgroundColor:"#25d366",
    borderRadius:100,
    elevation: 5,
    justifyContent:"center",
  }
});

export default Status