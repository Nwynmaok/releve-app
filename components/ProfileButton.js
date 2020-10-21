import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default class ProfileButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <TouchableOpacity style={styles.Profile} onPress={() => {}}>
        <Ionicons name='ios-contact' size='45' color='grey' />
      </TouchableOpacity>
    );
  } 
  
}
const styles = StyleSheet.create({
  Profile: {
    position: 'absolute',
    left: 30,
    top: 40,
  },
});
