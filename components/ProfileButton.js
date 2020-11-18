import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';




const ProfileButton = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   }
  // }

  const navigation = useNavigation();


    return (
      <TouchableOpacity style={styles.Profile} onPress={() => navigation.navigate("ProfilePage")}>
        <Ionicons name='ios-contact' size='45' color='grey' />
      </TouchableOpacity>
    );
  
  
}
export default ProfileButton;

const styles = StyleSheet.create({
  Profile: {
    position: 'absolute',
    left: 30,
    top: 40,
  },
});
