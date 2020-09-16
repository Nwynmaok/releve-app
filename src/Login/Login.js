import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';


export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Login Page with render</Text>
        <StatusBar style="auto" />
        <View style={styles.submitButton}>
        <Button
          onPress={() => Alert.alert('Button with adjusted color pressed')}
          title="Login"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        </View>
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
  submitButton: {
    alignSelf: 'center',
    position: 'absolute',
    bottom:50
  }
});