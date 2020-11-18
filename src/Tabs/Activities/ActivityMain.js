import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import ActivityTile from '../../../components/ActivityTile.js';
import ProfileButton from '../../../components/ProfileButton.js';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import AnimatedProgressWheel from 'react-native-progress-wheel';
import { useFocusEffect } from '@react-navigation/native';



export default class App extends React.Component {
  constructor(props) {
    // console.log("Construct")
    super(props);
    this.deleteFunc = this.deleteFunc.bind(this);
    this.doneFunc = this.doneFunc.bind(this);   
    this.state = {
      sliderProgress: 0,
      activityRefresh: false,
      // Temp activities
      AvailableActivities: [
        {
        text: "Activity 1",
        imgSrc: require("../img/placeholder-image3.png"),
        page: "false",
      },
      {
        text: "Activity 2",
        imgSrc: require("../img/placeholder-image3.png"),
        page: "false",
      },
      {
        text: "Activity 3",
        imgSrc: require("../img/placeholder-image3.png"),
        page: "false",
      },
      {
        text: "Activity 4",
        imgSrc: require("../img/placeholder-image3.png"),
        page: "false",
      },
    ],
      PerformedActivities: [],
      // Activity1: {
      //   text: "Activity 1",
      //   imgSrc: require("../img/placeholder-image3.png"),
      //   page: "false",
      //   title: "Activity 1"
      // },
      // Activity1Text: "Activity 1",
      // Activity1Img: require("../img/placeholder-image3.png"),
      // Activity1Page: "false",
      // Activity2Text: "Activity 2",
      // Activity2Img: require("../img/placeholder-image3.png"),
      // Activity2Page: "false",
      // Activity3Text: "Activity 3",
      // Activity3Img: require("../img/placeholder-image3.png"),
      // Activity3Page: "false",
      // Activity4Text: "Activity 4",
      // Activity4Img: require("../img/placeholder-image3.png"),
      // Activity4Page: "false",
    }
  }
  
  componentDidMount() {  
    // console.log(this.props)   
    // console.log(this.state.AvailableActivities[0])        
    // this.setState({Activity1Text: "#OOOTD"});
    // this.setState({Activity1Img: require("../img/Shirt.png")});
    // this.setState({Activity1Page: "OOOTD"});
    let newArray = [...this.state.AvailableActivities];

    // initiate with OOOTD temporary
    newArray[0] = {...newArray[0], text: "#OOOTD", imgSrc: require("../img/Shirt.png"), page: "OOOTD"}
    this.setState({AvailableActivities: newArray});
    // console.log(this)
    // console.log(this.state.activitiesMarkup)        
    
    // this.setState({AvailableActivcities: Object.values()})
    // this.setState({AvailableActivities[0].text: "#OOOTD"});
    // this.setState({Activity1.imgSrc: require("../img/Shirt.png")});
    // this.setState({Activity1.title: "OOOTD"});
  }

  deleteFunc(text) {
    let newArray = [...this.state.AvailableActivities];
    let newArr = newArray.filter((item)=>{
      return item.text != text;
    })
    // console.log("arr:")
    // console.log(newArr)
    // console.log(newArray)    
    // for(var i = 0; i < newArray.length; i++) {
    //   console.log(text)      
    //   console.log(newArray[i].text)
    //   if(newArray[i].text === text) {
    //     console.log("HERE2");     
        
    //     console.log(newArray)
        
    //     newArray.splice(i, 1)
    //     console.log(newArray)
        
    //     // console.log(newArray)
    //   }
    // }
    // index = newArray.findIndex(obj => obj.text === text);
    // console.log(index);
    // newArray[0] = {...newArray[0], text: "#OOOTD", imgSrc: require("../img/Shirt.png"), page: "OOOTD"}
    // console.log(newArray)
    this.setState({AvailableActivities: newArr});
    // this.renderActivities(this)
  }

  doneFunc(text)  {
    let newArray = [...this.state.AvailableActivities];
    let newArr = newArray.filter((item)=>{
      return item.text != text;
    })
    // console.log(this.state.sliderProgress)
    
    // this.setState({sliderProgress: this.state.sliderProgress+25})    
    this.setState({AvailableActivities: newArr, sliderProgress: this.state.sliderProgress+25});
    // console.log(this.state.sliderProgress)
    
    // let newArray = [...this.arr];
    // for(var i = 0; i < newArray.length; i++) {
    //   // console.log(text)      
    //   // console.log(newArray[i].text)
    //   if(newArray[i][text] === text) {
    //     newArray.splice(index, i)
    //     // console.log(text)
    //   }
    // }
    // console.log("HERE"); 
    // console.log(this)
    // index = newArray.findIndex(obj => obj.text === text);
    // console.log(newArray)
    // console.log(index);    
    // newArray[0] = {...newArray[0], text: "#OOOTD", imgSrc: require("../img/Shirt.png"), page: "OOOTD"}
    // this.setState({AvailableActivities: newArray});
  }

  // const activitiesMarkup = this.state.AvailableActivities.map((item, index) => {
  //   return (
  //     <ActivityTile key={index} text={this.state.AvailableActivities[0].text} src={this.state.AvailableActivities[0].imgSrc} activity={this.state.AvailableActivities[0].page} navigation={this.props.navigation} title={this.state.AvailableActivities[0].page} done={this.props.doneFunc} delete={this.props.deleteFunc}/>    
  //   );
  // });
  // someMethod() {
  //   console.log("yes")
  // }
  addActionPress() {
    this.setState({activityRefresh: false})
    this.props.navigation.navigate("AddActionPage", { activeActivities: this.state.AvailableActivities })
  }

  refreshActivites() {
    // console.log(this.state)
    if(this.state.activityRefresh == false) {
      let newArray = [...this.state.AvailableActivities];
      console.log("REFRESH")  
      console.log(this.props.route.params)   
      this.props.navigation.setParams({ newpage: false })      
      newArray.push({
        text: this.props.route.params.addText,
        imgSrc: this.props.route.params.addSrc,
        page: this.props.route.params.addPage,
      })
      // console.log(newArray) 

      this.setState({AvailableActivities: newArray});  
      this.setState({activityRefresh: !this.state.activityRefresh})
    }
  }

  renderActivitiesRow1(thisProps) {

    // console.log("props:")    
    // console.log(this.state.AvailableActivities)
    // console.log(this.AvailableActivities)
    // length = this.state.AvailableActivities.length
    // console.log(this.props.route.params)
    if (typeof this.props.route !== "undefined") {
      if (typeof this.props.route.params !== "undefined") {
        if (this.props.route.params.newpage) {
          console.log("typeof")
          this.refreshActivites()
        }
      }
    }
    return this.state.AvailableActivities.map(function(item, index, array) {
      
      
      // console.log("1:")    
      // console.log(index)
      
      // console.log(array.length)
      // console.log(index)
      // if ((index % 2 === 0) && (index+1 != array.length)) {
        if (index < 2){
        // console.log("2:")    
        // console.log(index)
        
        // console.log(index + "HERE")
        // console.log(item)
        
        return (
          
          <View style={styles.row}>
            <ActivityTile key={index+item.text} arr={thisProps.state.AvailableActivities} text={item.text} src={item.imgSrc} activity={item.page} navigation={thisProps.props.navigation} title={item.page} done={thisProps.doneFunc} delete={thisProps.deleteFunc}/>              
            {/* <ActivityTile key={index+item.text+1} arr={thisProps.state.AvailableActivities} text={array[index+1].text} src={array[index+1].imgSrc} activity={array[index+1].page} navigation={thisProps.props.navigation} title={array[index+1].page} done={thisProps.doneFunc} delete={thisProps.deleteFunc}/>               */}
          </View>
        )
      // } else if (index % 2 === 0) {
      //   console.log("3:")    
      //   console.log(index)
        
      //   return (
      //     <View style={styles.row}>
      //       <ActivityTile key={index+item.text} arr={thisProps.state.AvailableActivities} text={item.text} src={item.imgSrc} activity={item.page} navigation={thisProps.props.navigation} title={item.page} done={thisProps.doneFunc} delete={thisProps.deleteFunc}/>              
      //     </View>
      //   )
      }
    });    
  }

  renderActivitiesRow2(thisProps) {
    
        // console.log("props:")    
        // console.log(this.state.AvailableActivities)
        // console.log(this.AvailableActivities)
        // length = this.state.AvailableActivities.length
        
        return this.state.AvailableActivities.map(function(item, index, array) {
    
          // console.log("1:")    
          // console.log(index)
          
          // console.log(array.length)
          // console.log(index)
          // if ((index % 2 === 0) && (index+1 != array.length)) {
            if (index > 1){
            // console.log("2:")    
            // console.log(index)
            
            // console.log(index + "HERE")
            // console.log(item)
            
            return (
              
              <View style={styles.row}>
                <ActivityTile key={index+item.text} arr={thisProps.state.AvailableActivities} text={item.text} src={item.imgSrc} activity={item.page} navigation={thisProps.props.navigation} title={item.page} done={thisProps.doneFunc} delete={thisProps.deleteFunc}/>              
                {/* <ActivityTile key={index+item.text+1} arr={thisProps.state.AvailableActivities} text={array[index+1].text} src={array[index+1].imgSrc} activity={array[index+1].page} navigation={thisProps.props.navigation} title={array[index+1].page} done={thisProps.doneFunc} delete={thisProps.deleteFunc}/>               */}
              </View>
            )
          // } else if (index % 2 === 0) {
          //   console.log("3:")    
          //   console.log(index)
            
          //   return (
          //     <View style={styles.row}>
          //       <ActivityTile key={index+item.text} arr={thisProps.state.AvailableActivities} text={item.text} src={item.imgSrc} activity={item.page} navigation={thisProps.props.navigation} title={item.page} done={thisProps.doneFunc} delete={thisProps.deleteFunc}/>              
          //     </View>
          //   )
          }
        });    
      }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <ProfileButton/>
          <Text style={styles.Time}>Good Morning!</Text>
          <TouchableOpacity 
            style={styles.AddAction} 
            onPress={() => {this.addActionPress()}}
          >
            <Ionicons name='ios-add-circle-outline' size='20' color='black' />
            <Text style={{fontSize: 18, color: 'black'}}> Add Actions</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.activityContainer}>
          <View style={styles.row}>   
          {this.renderActivitiesRow1(this)}
     
            {/* <ActivityTile text={this.state.AvailableActivities[0].text} src={this.state.AvailableActivities[0].imgSrc} activity={this.state.AvailableActivities[0].page} navigation={this.props.navigation} title={this.state.AvailableActivities[0].page} done={this.props.doneFunc} delete={this.props.deleteFunc}/>  */}
            {/* <ActivityTile text={this.state.AvailableActivities[1].text} src={this.state.AvailableActivities[1].imgSrc} activity={this.state.AvailableActivities[1].page} navigation={this.props.navigation} title={this.state.AvailableActivities[1].page}/>  */}
            {/* <ActivityTile text='Activity 2' src={require('../img/placeholder-image3.png')} activity="false" navigation={this.props.navigation} title={this.state.Activity2Page}/>  */}
          </View>
          <View style={styles.row}>
          {this.renderActivitiesRow2(this)}
          {/* <ActivityTile text={this.state.AvailableActivities[2].text} src={this.state.AvailableActivities[2].imgSrc} activity={this.state.AvailableActivities[2].page} navigation={this.props.navigation} title={this.state.AvailableActivities[2].page}/>  */}
          {/* <ActivityTile text={this.state.AvailableActivities[3].text} src={this.state.AvailableActivities[3].imgSrc} activity={this.state.AvailableActivities[3].page} navigation={this.props.navigation} title={this.state.AvailableActivities[3].page}/>  */}
          </View>
        </View>
      <View style={styles.footer}>
        <View style={styles.wheel}>
          <AnimatedProgressWheel 
            size={100} 
            width={20} 
            color={'green'}
            progress={this.state.sliderProgress}
            backgroundColor={'grey'}
          />
        </View>
        <Text style={{fontSize: 24, paddingTop: 15, paddingBottom: 25}}>Great Work!</Text>
      </View>
      <View style={styles.kindness}>
        <TouchableOpacity onPress={() => {console.log(this.props.route.params)}}>
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