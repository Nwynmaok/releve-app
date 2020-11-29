import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import ActivityTile from '../../../components/ActivityTile.js';
import ProfileButton from '../../../components/ProfileButton.js';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';



export default class App extends React.Component {
  constructor(props) {
    super(props); 
    this.addFunc = this.addFunc.bind(this);     
    this.state = {
      AvailableActivities: [
        {
        text: "GO TO THE SALON",
        imgSrc: require("../img/salon.png"),
        page: "OOOTD",
      },
      {
        text: "DO LAUNDRY",
        imgSrc: require("../img/laundry.png"),
        page: "false",
      },
      {
        text: "DO MY NAILS",
        imgSrc: require("../img/nails.png"),
        page: "false",
      },
      {
        text: "CLEAN BAG/S",
        imgSrc: require("../img/bag.png"),
        page: "false",
      },
    ],
      PerformedActivities: [],
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
    // Grab activities from previous page to know not to reccommend them
    // or add on to array and pass back to parent
    let newArray = [...this.state.AvailableActivities];
    this.setState({AvailableActivities: newArray});
    // console.log(this.props)
  }

  addFunc(text, page, src) {
    // console.log(text)
    // console.log(page)
    // console.log(this.props.route.params.activeActivities)

    this.props.navigation.navigate("ActivityMain", { addText: text, addPage: page, addSrc: src, newpage: true })
  }

  renderActivitiesRow1(thisProps) {

    return this.state.AvailableActivities.map(function(item, index, array) {

        if (index < 2){

        return (
          
          <View style={styles.row}>
            <ActivityTile key={index+item.text} arr={thisProps.state.AvailableActivities} text={item.text} page={item.page} src={item.imgSrc} activity={"Add"} navigation={thisProps.props.navigation} add={thisProps.addFunc} />              
          </View>
        )
      }
    });    
  }

  renderActivitiesRow2(thisProps) {
    
        return this.state.AvailableActivities.map(function(item, index, array) {
          
            if (index > 1){
            
            return (
              
              <View style={styles.row}>
                <ActivityTile key={index+item.text} arr={thisProps.state.AvailableActivities} text={item.text} page={item.page} src={item.imgSrc} activity={"Add"} navigation={thisProps.props.navigation} add={thisProps.addFunc} />              
              </View>
            )
          }
        });    
      }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.cancel} onPress={() => this.onPress(false)}>
          <View style={{}}>
            <Text style={{ fontSize: 18 }}>Cancel</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.header}>
          
          <Text style={styles.Time}>Add an Action</Text>
        </View>
        <View style={styles.activityContainer}>
          <View style={styles.row}>   
          {this.renderActivitiesRow1(this)}
     
          </View>
          <View style={styles.row}>
          {this.renderActivitiesRow2(this)}
          </View>
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