import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default class ActivityTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <TouchableOpacity style={styles.activity} onPress={() => {}}>
          <View style={ styles.activityImage }>
            <Image
              resizeMode="contain"
              // style={ styles.activityImage }
              source={this.props.src}
            />              
            </View>
            <Text style={styles.activityText}>{this.props.text}</Text>
        </TouchableOpacity>
    );
  } 
  
}
const styles = StyleSheet.create({
  activity: {
    // flex: 0.25,
    // width: 100,
    // height: 25,
    // flex: 1,

  },
  activityImage: {
    // flex: 0.5,
    width: 140,
    height: 140,
    // padding: 20,
    backgroundColor: "white",
    borderWidth: 5,
    borderRadius: 5,
    borderColor: "#808080",
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 12,
    // paddingHorizontal: 6,
  },
  activityText: {
    // margin: 12,
    // // padding: 12,
    // paddingHorizontal: 6,
    textAlign: "center",
    // backgroundColor: "white",
    color: "#000000",
    fontSize: 16
  }
});
