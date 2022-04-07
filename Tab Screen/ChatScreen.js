import React from 'react'
import { StyleSheet, View, TouchableOpacity} from 'react-native'
import { List, Avatar } from 'react-native-paper';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

function Chat({ navigation }) {
    return (
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Chat1')}>
            <List.Item
              title="Denny"
              titleStyle={styles.title}
              description="Okee makasih den"
              descriptionStyle={{color: 'black'}}
              left={props => <Avatar.Image {...props} source={require('../assets/ye.jpg')}/>}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Chat2')}>
            <List.Item
              title="Rahmat Zainul"
              titleStyle={styles.title}              
              description="Warteg kuy"
              descriptionStyle={{color: 'black'}}
              left={props => <Avatar.Image {...props} source={require('../assets/rahmatK.jpg')}/>}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Chat3')}>
            <List.Item
              title="Agung"
              titleStyle={styles.title}              
              description="Okedeh"
              descriptionStyle={{color: 'black'}}
              left={props => <Avatar.Image {...props} source={require('../assets/badboy.jpg')}/>}
            />
          </TouchableOpacity>
         
            <List.Item
              title="Ayang 1"
              titleStyle={styles.title}              
              description="Good Morning😘"
              descriptionStyle={{color: 'black'}}
              left={props => <Avatar.Image {...props} source={require('../assets/ryujin.jpg')}/>}
            />
        
            <List.Item
              title="Ayang 2"
              titleStyle={styles.title}              
              description="Semangat ngerjain tugasnya❤️✨"
              descriptionStyle={{color: 'black'}}
              left={props => <Avatar.Image {...props} source={require('../assets/lisa.jpg')}/>}
            />
         
            <List.Item
              title="Ayang 3"
              titleStyle={styles.title}              
              description="Semangat puasanya🥰"
              descriptionStyle={{color: 'black'}}
              left={props => <Avatar.Image {...props} source={require('../assets/han.jpg')}/>}
            />
         
          <TouchableOpacity onPress={() => navigation.navigate('ContactScreen')}
            style={styles.button}>
            <MaterialIcons name="message" size={24} color="white"/>
          </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
  title: {
    color: 'black', 
    fontWeight:'bold', 
    marginBottom:5
  },
  button: {
    borderWidth: 1,
    borderColor:'#25d366',
    alignItems:"center",
    width:70,
    position:'absolute',
    bottom:-180,
    right:20,
    height:70,
    backgroundColor:"#25d366",
    borderRadius:100,
    elevation: 5,
    justifyContent:"center",
  }
});

export default Chat