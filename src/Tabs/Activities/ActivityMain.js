import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ActivityTile from '../../../components/ActivityTile.js';
import ProfileButton from '../../../components/ProfileButton.js';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import AnimatedProgressWheel from 'react-native-progress-wheel';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PerformedActivities: [],
      Activity1Text: "Activity 1",
      Activity1Img: require("../img/placeholder-image3.png"),
      Activity1Page: "false",
      Activity2Text: "Activity 2",
      Activity2Img: require("../img/placeholder-image3.png"),
      Activity2Page: "false",
      Activity3Text: "Activity 3",
      Activity3Img: require("../img/placeholder-image3.png"),
      Activity3Page: "false",
      Activity4Text: "Activity 4",
      Activity4Img: require("../img/placeholder-image3.png"),
      Activity4Page: "false",
    }
  }
  componentDidMount() {  
    console.log(this.props)    
    this.setState({Activity1Text: "#OOOTD"});
    this.setState({Activity1Img: require("../img/Shirt.png")});
    this.setState({Activity1Page: "OOOTD"});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <ProfileButton/>
          <Text style={styles.Time}>Good Morning!</Text>
          <TouchableOpacity style={styles.AddAction} onPress={() => {}}>
            <Ionicons name='ios-add-circle-outline' size='20' color='black' />
            <Text style={{fontSize: 18, color: 'black'}}> Add Actions</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.activityContainer}>
          <View style={styles.row}>        
            <ActivityTile text={this.state.Activity1Text} src={this.state.Activity1Img} activity={this.state.Activity1Page} navigation={this.props.navigation} title={this.state.Activity1Page}/> 
            <ActivityTile text={this.state.Activity2Text} src={this.state.Activity2Img} activity={this.state.Activity2Page} navigation={this.props.navigation} title={this.state.Activity2Page}/> 
            {/* <ActivityTile text='Activity 2' src={require('../img/placeholder-image3.png')} activity="false" navigation={this.props.navigation} title={this.state.Activity2Page}/>  */}
          </View>
          <View style={styles.row}>
            <ActivityTile text={this.state.Activity3Text} src={this.state.Activity3Img} activity={this.state.Activity3Page} navigation={this.props.navigation} title={this.state.Activity3Page}/> 
            <ActivityTile text={this.state.Activity4Text} src={this.state.Activity4Img} activity={this.state.Activity4Page} navigation={this.props.navigation} title={this.state.Activity4Page}/> 
          </View>
        </View>
      <View style={styles.footer}>
        <View style={styles.wheel}>
          <AnimatedProgressWheel 
            size={100} 
            width={20} 
            color={'green'}
            progress={35}
            backgroundColor={'grey'}
          />
        </View>
        <Text style={{fontSize: 24, paddingTop: 15, paddingBottom: 25}}>Great Work!</Text>
      </View>
      <View style={styles.kindness}>
        <TouchableOpacity onPress={() => {console.log(this.props)}}>
          <Text style={styles.kindnessText}>Performed Act of Kindness</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.15,
    marginTop: 20,
  },
  Profile: {
    position: 'absolute',
    left: 30,
    top: 40,
  },
  wheel: {
    transform: [{ rotate: '270deg'}]
  },
  Time: {
    position: 'absolute',
    left: 15,
    top: 90,
    fontSize: 24, 
    color: 'black'
  },
  AddAction: {
    flexDirection: 'row',
    position: 'absolute',
    right: 15,
    top: 75,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#808080",
    margin: 12,
    paddingHorizontal: 6,
    paddingVertical: 6
  },
  footer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  kindness: {
    flex: 0.1,
  },
  kindnessText: {
    borderWidth: 2,
    // borderRadius: ,
    fontWeight: 'bold',
    borderColor: "black",
    // width: '100%',
    textAlign: 'center',
    marginLeft: 60,
    marginRight: 60,
    fontSize: 18,
    paddingVertical: 6,
    paddingHorizontal: 6,
  },
  activityContainer: {
    flex: 0.55,
    justifyContent: 'space-evenly'    
  },
  row: {
    // flex: 0.35,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
});