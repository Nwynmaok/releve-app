import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login/Login.js';
import Splash from './Splash.js'


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      component : <Splash />      
    }
  }


componentDidMount() {  
  
  // Start counting when the page is loaded
  this.timeoutHandle = setTimeout(()=>{

    // Add your logic for the transition
    this.setState({ component: <Login /> })
  }, 5000);
}

componentWillUnmount(){
  clearTimeout(this.timeoutHandle); 
}

render() {
  return (
    this.state.component
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
});