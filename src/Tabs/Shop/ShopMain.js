import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import FeedTile from '../../../components/FeedTile.js'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* login icon goes first top left */}
        
        <View style={{flex:0.1, marginTop: 25, marginLeft: 25 }}>
          <Text style={styles.textHeader}>Feed</Text>
        </View>
      
        <View style={styles.layoutbox}>
          <FeedTile text='Feed 1' src={require('../img/placeholder-image-feed.png')}/>
        </View>

        <View style={styles.layoutbox}>
          <FeedTile text='Feed 2' src={require('../img/placeholder-image-feed.png')}/>
        </View> 
      
        <View style={styles.layoutbox}>
          <FeedTile text='Feed 3' src={require('../img/placeholder-image-feed.png')}/>
        </View>

        <View style={styles.layoutbox}>
          <FeedTile text='Feed 4' src={require('../img/placeholder-image-feed.png')}/>
        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: "stretch",
      justifyContent: 'center',
    },
    layoutbox: {
      flex: 0.2, 
      borderWidth: 3,
      margin: 15,
      justifyContent: "space-around",
      paddingVertical: 10
    },
    textHeader: {
      fontSize: 22,
      fontWeight: 'bold'
    },
  });