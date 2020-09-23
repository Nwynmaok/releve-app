import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


//still needs to be resized and optimized

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex: 0.1}}/>
      <View style={{flex:0.6}}>
        <Image
          resizeMode="contain"
          style={{flex: 1}}
          source={require('../img/splash01.png')}
        />
      </View>
      <StatusBar style="auto" />
      <View style={{flex:0.2}}>
        <Image
          resizeMode="contain"
          style={{flex: 1}}
          source={require('../img/splash02.png')}
        />
      </View>
      <View style={{flex:0.1}}/>   
  </View>
  );
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
  },
  text: {
    marginVertical: 50
  }
});


