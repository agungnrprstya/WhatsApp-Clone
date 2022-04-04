import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { Appbar, List, Button, Avatar } from 'react-native-paper';

function Chat({ navigation }) {
    return (
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('DalemScreen')}>
            <List.Item
              title="Unkown"
              description="Woy"
              left={props => <Avatar.Image {...props} source={require('../assets/kartun2.jpg')}
              />}
            />
          </TouchableOpacity>
        </View>
    
      );
    }

//     return (
//         <View>
//             <Text>MMK</Text>
//         </View>
//     )
// }

export default Chat