import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import OOOTD from '../../../components/OOOTD.js';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgPicked: false,
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


  renderPicker() {
      return (
        <OOOTD navigation={this.props.navigation} title={this.props.route.params.title}/>
      );
  }

  componentDidMount() {  
    // this.props.navigation.setOptions({
    //   done: false
    // })
    console.log(this.props)
  }
  render() {
    
    return (
      
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.route.params.title}</Text>
        <TouchableOpacity style={styles.cancel} onPress={() => this.onPress(false)}>
          <View style={{}}>
            <Text style={{ fontSize: 18 }}>Cancel</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.done} onPress={() => this.onPress(true)}>
          <View style={{}}>
            <Text style={{ fontSize: 18 }}>Done</Text>
          </View>
        </TouchableOpacity>
        {this.renderPicker()}
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