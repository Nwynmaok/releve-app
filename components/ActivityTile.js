import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';



export default class ActivityTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgDone : false
    }
  }

  onPress() {
    if (this.props.activity !== "false") {
      this.props.navigation.navigate("ActivityPage", {
        title: this.props.title,
      });
    }
    else {
      // if (this.state.tileAction === "back") {
        this.setState({ imgDone: !this.state.imgDone })        
      // }
    }
    console.log(this.props)
  }

  tilePress(action) {
    if (action === "done") {

    } else {
      this.setState({ imgDone: !this.state.imgDone })              
    }
  }

  renderImage(){
    // var imgSource = this.state.imgDone ?  : 
    if (this.state.imgDone) {
      return (
        
      <View style={styles.activity}>
        <View style={ styles.activityImage }>
          <TouchableOpacity style={styles.back} onPress={() => this.tilePress("back")}>
          <Ionicons name='ios-arrow-round-back' size='50' color='black' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.close} onPress={() => this.tilePress("cancel")}>
          <Ionicons name='ios-close' size='50' color='black' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.done} onPress={() => this.tilePress("done")}>
          <Ionicons name='ios-checkmark' size='100' color='black' />
          </TouchableOpacity>
        </View>
        <Text style={styles.activityText}>{this.props.text}</Text>
      </View>
      );
    } else {
      return (
        <TouchableOpacity style={styles.activity} onPress={() => this.onPress()}>
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

  render() {

    

    return (
      <View>{this.renderImage()}</View>
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
  },
  back: {
    position: 'absolute',
    left: 10,
    top: 5,
    width: 50,
    height: 50,
  },
  close: {
    position: 'absolute',
    right: -20,
    top: 5,
    width: 50,
    height: 50,
  },
  done: {
    position: 'absolute',
    left: 45,
    bottom: -15,
    width: 100,
    height: 100,
  }
});
