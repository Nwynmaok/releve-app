import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class Welcome extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 0.4}}>
          <Image
            resizeMode="contain"
            style={{flex: 1}}
            source={require('../../img/placeholder-image1.png')}
          />
        </View>
        <Text style={{fontSize: 20}}>WELCOME</Text>
        <StatusBar style="auto" />
        <View style={{flex: 0.05}}/>
        <Text style={styles.text}>Welcome to I’Mpact! An app designed to track and encourage every day actions that are good for people and good for our planet.</Text>
        <View style={{flex: 0.45}}/>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('How')}>
          <View style={{}}>
            <Text style={{}}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginHorizontal:50   
  }
});