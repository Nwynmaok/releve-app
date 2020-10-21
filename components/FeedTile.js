import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default class FeedTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <TouchableOpacity style={styles.feedTile} onPress={() => {}}>
          <View style={styles.feedImage}>
            <Image
              resizeMode="contain"
              source={this.props.src}
            />              
            </View>
            
            <View style = {{flex: 1}}>
              <Text style={styles.feedTitle}>TITLE</Text>
              <Text style={styles.feedText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
            </View>

        </TouchableOpacity>
    );
  } 
  
}
const styles = StyleSheet.create({
  feedTile: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  feedImage: {
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  feedTitle:{
    textAlign: "center",
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold"
  },

  feedText: {
    textAlign: "center",
    color: "#000000",
    fontSize: 14
  }
});
