import React from 'react'
import { Text, View } from 'react-native'
import { List, Avatar } from 'react-native-paper';

const Status = () => {
    return (
        <View>
          
            <List.Item
              title="My Status"
              titleStyle={{color: 'black', marginLeft:-10, marginBottom:10, fontWeight:'bold'}}
              description="Tap to add status update"
              descriptionStyle={{color: 'black', marginLeft:-10}}
              left={props => <Avatar.Image {...props} source={require('../assets/mystatus.jpg')}/>}
            />
          
          <Text style={{fontWeight:'bold', marginTop:5, marginBottom:5, marginLeft:10}}>Recent updates</Text>
          
            <List.Item
              title="Bagas"
              titleStyle={{color: 'black', marginLeft:-10, marginBottom:10, fontWeight:'bold'}}
              description="24 minutes Ago"
              descriptionStyle={{color: 'black', marginLeft:-10}}
              left={props => <Avatar.Image {...props} source={require('../assets/status1.png')}/>}
            />

            <List.Item
              title="Rahmat"
              titleStyle={{color: 'black', marginLeft:-10, marginBottom:10, fontWeight:'bold'}}
              description="56 minutes ago"
              descriptionStyle={{color: 'black', marginLeft:-10}}
              left={props => <Avatar.Image {...props} source={require('../assets/status2.png')}/>}
            />

            <List.Item
              title="Agung"
              titleStyle={{color: 'black', marginLeft:-10, marginBottom:10, fontWeight:'bold'}}
              description="Today, 16:05"
              descriptionStyle={{color: 'black', marginLeft:-10}}
              left={props => <Avatar.Image {...props} source={require('../assets/status3.png')}/>}
            />

            <List.Item
              title="Rifqi"
              titleStyle={{color: 'black', marginLeft:-10, marginBottom:10, fontWeight:'bold'}}
              description="Today, 12:45"
              descriptionStyle={{color: 'black', marginLeft:-10}}
              left={props => <Avatar.Image {...props} source={require('../assets/status4.png')}/>}
            />

            <Text style={{fontWeight:'bold', marginTop:5, marginBottom:5, marginLeft:10}}>Viewed updates</Text>

            <List.Item
              title="Denny"
              titleStyle={{color: 'black', marginLeft:-10, marginBottom:10, fontWeight:'bold'}}
              description="Today, 03:30"
              descriptionStyle={{color: 'black', marginLeft:-10}}
              left={props => <Avatar.Image {...props} source={require('../assets/vstatus2.png')}/>}
            />

            <List.Item
              title="Zulham 3D"
              titleStyle={{color: 'black', marginLeft:-10, marginBottom:10, fontWeight:'bold'}}
              description="Yesterday, 22.15"
              descriptionStyle={{color: 'black', marginLeft:-10}}
              left={props => <Avatar.Image {...props} source={require('../assets/vstatus1.png')}/>}
            />
         
        </View>
    )
}

export default Status