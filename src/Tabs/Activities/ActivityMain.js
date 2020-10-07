import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ActivityTile from '../../../components/ActivityTile.js'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.Time}>Good Morning!</Text>
          <TouchableOpacity style={styles.AddAction} onPress={() => {}}>
            <Ionicons name='ios-add-circle-outline' size='20' color='black' />
            <Text style={{fontSize: 18, color: 'black'}}> Add Actions</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.activityContainer}>
          <View style={styles.row}>        
            <ActivityTile text='Activity 1' src={require('../img/placeholder-image3.png')}/> 
            <ActivityTile text='Activity 2' src={require('../img/placeholder-image3.png')}/> 
          </View>
          <View style={styles.row}>
            <ActivityTile text='Activity 3' src={require('../img/placeholder-image3.png')}/> 
            <ActivityTile text='Activity 4' src={require('../img/placeholder-image3.png')}/> 
          </View>
        </View>
      <View style={styles.footer}/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.15,
    marginTop: 20,
  },
  Time: {
    position: 'absolute',
    left: 15,
    top: 90,
    fontSize: 24, 
    color: 'black'
  },
  AddAction: {
    flexDirection: 'row',
    position: 'absolute',
    right: 15,
    top: 75,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#808080",
    margin: 12,
    paddingHorizontal: 6,
    paddingVertical: 6
  },
  footer: {
    flex: 0.3
  },
  activityContainer: {
    flex: 0.55,
    justifyContent: 'space-evenly'    
  },
  row: {
    // flex: 0.35,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
});