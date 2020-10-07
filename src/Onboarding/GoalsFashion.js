import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {Picker} from '@react-native-community/picker'; 

class Welcome extends React.Component {
  static navigationOptions = {
    title: "GoalsFashion"
  };
}

export default class WeekdayWakeup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clothingChanges: "1",

      firstIsPress: false,
      lunchIsPress: false,
      workoutIsPress: false,
      bedIsPress: false,

      showerFirstColor: "white",
      showerLunchColor: "white",
      showerWorkoutColor: "white",
      showerBedColor: "white"
    };
  }

  

  onPress(showerTime) {
    switch(showerTime) {
      case 'first':
        this.state.firstIsPress? this.setState({firstIsPress: false}) : this.setState({firstIsPress: true});
        break;
      case 'lunch':
        this.state.lunchIsPress? this.setState({lunchIsPress: false}) : this.setState({lunchIsPress: true});
        break;
      case 'workout':
        this.state.workoutIsPress? this.setState({workoutIsPress: false}) : this.setState({workoutIsPress: true});
        break;
      case 'bed':
        this.state.bedIsPress? this.setState({bedIsPress: false}) : this.setState({bedIsPress: true});
        break;
    }
  }    

  render() {

    var firstButtonProps = {                       
      style: this.state.firstIsPress ? styles.btnPress : styles.btnNormal, 
      onPress: () => this.onPress('first')        
    };

    var lunchButtonProps = {                       
      style: this.state.lunchIsPress ? styles.btnPress : styles.btnNormal, 
      onPress: () => this.onPress('lunch')        
    };

    var workoutButtonProps = {                       
      style: this.state.workoutIsPress ? styles.btnPress : styles.btnNormal, 
      onPress: () => this.onPress('workout')        
    };

    var bedButtonProps = {                       
      style: this.state.bedIsPress ? styles.btnPress : styles.btnNormal, 
      onPress: () => this.onPress('bed')        
    };


    var firstButtonTextProps = {
      style: this.state.firstIsPress ? styles.btnTextPress : styles.btnTextNormal,       
    }

    var lunchButtonTextProps = {
      style: this.state.lunchIsPress ? styles.btnTextPress : styles.btnTextNormal,       
    }

    var workoutButtonTextProps = {
      style: this.state.workoutIsPress ? styles.btnTextPress : styles.btnTextNormal,       
    }

    var bedButtonTextProps = {
      style: this.state.bedIsPress ? styles.btnTextPress : styles.btnTextNormal,       
    }

    return (
      // <View style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={{fontSize: 28, flex: 0.1, textAlign: 'center', paddingTop: 75, fontWeight: 'bold', paddingLeft: 75, paddingRight: 75}}>Sustainable Fashion and Clean Beauty</Text>
          <Text style={{fontSize: 16, flex: 0.05}}>Take us through your day...</Text>
          <Text style={{fontSize: 26, flex: 0.1, textAlign: 'center', paddingLeft: 30, paddingRight: 30}}>How many times in a day do you usually change your outfit?</Text>
          <View style={{flex: 0.3, paddingBottom: 0, paddingTop: 0}}>
            <Picker
              selectedValue={this.state.clothingChanges}
              style={{height: 0, width: 100}}
              itemStyle={{height: 200}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({clothingChanges: itemValue})
              }>
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5+" value="5" />
            </Picker>
          </View>
          <Text style={{fontSize: 26, flex: 0.1, textAlign: 'center', paddingLeft: 25, paddingRight: 25}}>What time in the day do you usually shower?</Text>
          <Text style={{fontSize: 16, flex: 0.05}}>(Select all that apply)</Text>
          <View style={styles.bottom} >
            <TouchableOpacity {...firstButtonProps}>
                <Text {...firstButtonTextProps}>First Thing in the Morning</Text>
            </TouchableOpacity>
            <TouchableOpacity {...lunchButtonProps}>
              <Text {...lunchButtonTextProps}>Lunch Time</Text>
            </TouchableOpacity>
            <TouchableOpacity {...workoutButtonProps}>
                <Text {...workoutButtonTextProps}>Right After Working Out</Text>
            </TouchableOpacity>
            <TouchableOpacity {...bedButtonProps}>
                <Text {...bedButtonTextProps}>Right Before Bed</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 0.2}}>
           <Image
            resizeMode="contain"
            source={require('../../img/loadingBar.png')}
            style={{width: 200, height: 50, resizeMode: "contain"}}
            />
        </View>
        </View>
         
      // </View>
    ); 
  }
}
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  bottom: {
    flex: 0.35,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15,
  },
  btnNormal: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#808080"
  },
  btnPress: {
    backgroundColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#808080"
  },
  btnTextNormal: {
    margin: 12,
    paddingHorizontal: 6,
    textAlign: "center",
    backgroundColor: "white",
    color: "#000000",
    fontSize: 12
  },
  btnTextPress: {
    margin: 12,
    paddingHorizontal: 6,
    textAlign: "center",
    backgroundColor: "grey",
    color: "white",
    fontSize: 12
  },
});