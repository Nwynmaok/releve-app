import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgPicked: false,
      imgSrc: null,
    }
  }

  uploadImg = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      this.setState({imgSrc: result.uri})      
      this.setState({imgPicked: true})      
    }
  }

  launchCamera = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
    let result = await ImagePicker.launchCameraAsync();
    if (!result.cancelled) {
      this.setState({imgSrc: result.uri})      
      this.setState({imgPicked: true})      
    }
  }

  renderPicker() {
    if (this.state.imgPicked) {
      return (
        <Image
          resizeMode="contain"
          style={{width: 300, height: 300, resizeMode: "contain"}}
          source={{ uri: this.state.imgSrc }}
        /> 
      );
    } else {
      return (
        <View>
        <TouchableOpacity onPress={() => this.uploadImg()}>
          <Text>Upload a picture</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.launchCamera()}>
          <Text>Take a picture</Text>
        </TouchableOpacity>
        </View>
      );
    }
  }

  componentDidMount() {  
    console.log(this.props)
  }
  
  render() {
    
    return (
      
      <View style={styles.container}>
        <Text>Take a photo of your OOOTD</Text>
        {this.renderPicker()}
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginHorizontal:50   
  },
  title: {
    fontSize: 18,
    position: 'absolute',
    top: 60
  },
  cancel: {
    position: 'absolute',
    left: 30,
    top: 60,
  },
  done: {
    position: 'absolute',
    right: 30,
    top: 60,
  }
});