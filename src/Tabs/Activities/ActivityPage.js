import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  onPress(done) {
    // if (done === true) {
    //   this.props.navigation.setOptions({
    //     done: true
    //   })
      
    // } else {
    //   this.props.navigation.setOptions({
    //     done: false
    //   })
      
    // }
    console.log(this.props)        
    
    this.props.navigation.goBack()
  }
  componentDidMount() {  
    // this.props.navigation.setOptions({
    //   done: false
    // })
    // console.log(this.props)
  }
  render() {
    
    return (
      
      <View style={styles.container}>
        <Text>{this.props.route.params.title}</Text>
        <TouchableOpacity onPress={() => this.onPress(false)}>
          <View style={{}}>
            <Text style={{}}>Cancel</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onPress(true)}>
          <View style={{}}>
            <Text style={{}}>Done</Text>
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