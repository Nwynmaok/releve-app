import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


class Welcome extends React.Component {
  static navigationOptions = {
    title: "Goals"
  };
}

export default class Goals extends React.Component {

  onPress(button) {
    switch(button) {
      case 'home':    
        if(this.state.homeColor=='grey') {
          this.setState({homeColor: '#007AFF'}); 
          this.setState({homeIconActive: true});     
          // this.setState({homeIconRecent: true});   
          this.state.goalIconActiveOrder.push('home');
          
        } else {
          this.setState({homeColor: 'grey'});
          this.setState({homeIconActive: false}); 
          // this.setState({homeIconRecent: false});   
          var goalIconActiveTemp = [...this.state.goalIconActiveOrder]
          var index = goalIconActiveTemp.indexOf('home')          
          if (index !== -1) {
            goalIconActiveTemp.splice(index, 1);
            this.setState({goalIconActiveOrder: goalIconActiveTemp});
          }
        }
        break;
      case 'food':    
        if(this.state.foodColor=='grey') {
          this.setState({foodColor: '#007AFF'});      
          this.setState({foodIconActive: true});    
          // this.setState({foodIconRecent: true}); 
          this.state.goalIconActiveOrder.push('food');          
          
        } else {
          this.setState({foodColor: 'grey'});
          this.setState({foodIconActive: false});  
          // this.setState({foodIconRecent: false});  
          var goalIconActiveTemp = [...this.state.goalIconActiveOrder]
          var index = goalIconActiveTemp.indexOf('food')          
          if (index !== -1) {
            goalIconActiveTemp.splice(index, 1);
            this.setState({goalIconActiveOrder: goalIconActiveTemp});
          }     
        }
        break;
      case 'fashion':    
        if(this.state.fashionColor=='grey') {
          this.setState({fashionColor: '#007AFF'}); 
          this.setState({fashionIconActive: true});  
          // this.setState({fashionIconRecent: true});     
          this.state.goalIconActiveOrder.push('fashion');
          
        } else {
          this.setState({fashionColor: 'grey'});
          this.setState({fashionIconActive: false});  
          // this.setState({fashionIconRecent: false});    
          var goalIconActiveTemp = [...this.state.goalIconActiveOrder]
          var index = goalIconActiveTemp.indexOf('fashion')          
          if (index !== -1) {
            goalIconActiveTemp.splice(index, 1);
            this.setState({goalIconActiveOrder: goalIconActiveTemp});
          }   
          
        }
        break;
      case 'beginner':    
        if(this.state.beginnerColor=='grey') {
          this.setState({beginnerColor: '#007AFF'});      
          this.setState({beginnerIconActive: true}); 
          this.setState({intermediateIconActive: false}); 
          this.setState({advancedIconActive: false});        
          this.setState({intermediateColor: 'grey'});          
          this.setState({advancedColor: 'grey'});
          
        } else {
          this.setState({beginnerColor: 'grey'});
          this.setState({beginnerIconActive: false});  
        }
        break;
      case 'intermediate':    
        if(this.state.intermediateColor=='grey') {
          this.setState({intermediateColor: '#007AFF'});        
          this.setState({intermediateIconActive: true});  
          this.setState({beginnerIconActive: false});           
          this.setState({advancedIconActive: false});      
          this.setState({beginnerColor: 'grey'});          
          this.setState({advancedColor: 'grey'});
          
        } else {
          this.setState({intermediateColor: 'grey'});
          this.setState({intermediateIconActive: false});  
        }
        break;
      case 'advanced':    
        if(this.state.advancedColor=='grey') {
          this.setState({advancedColor: '#007AFF'}); 
          this.setState({advancedIconActive: true});  
          this.setState({beginnerIconActive: false});            
          this.setState({intermediateIconActive: false});   
          this.setState({beginnerColor: 'grey'});          
          this.setState({intermediateColor: 'grey'});          
        } else {
          this.setState({advancedColor: 'grey'});
          this.setState({advancedIconActive: false});  
        }
        break;
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      homeColor: 'grey',
      foodColor: 'grey',
      fashionColor: 'grey',
      beginnerColor: 'grey',
      intermediateColor: 'grey',
      advancedColor: 'grey',

      homeIconActive: false,
      foodIconActive: false,
      fashionIconActive: false,
      beginnerIconActive: false,
      intermediateIconActive: false,
      advancedIconActive: false,

      goalIconActiveOrder: [],
      // goalIconActiveTemp: [],
    };
  }
  
  render() {
  var goalDescText;
  var activeGoal = this.state.goalIconActiveOrder[this.state.goalIconActiveOrder.length - 1];
  // console.log(this.state.goalIconActiveOrder)  
  if (activeGoal == 'home') {
    goalDescText = (
      <View style={styles.goalDesc} >
        <Text style={{fontSize: 18, paddingLeft: 50}}>Energy Conservation and Efficiency</Text>
        <Text style={{fontSize: 5}}>{"\n"}</Text>
        <Text style={{fontSize: 18, paddingLeft: 50}}>Sustainable Cleaning</Text>  
      </View>    
    );
  } else if (activeGoal == 'food') {
    goalDescText = (
      <View style={styles.goalDesc} >
        <Text style={{fontSize: 18, paddingLeft: 50}}>Zero Waste</Text>
        <Text style={{fontSize: 5}}>{"\n"}</Text>
        <Text style={{fontSize: 18, paddingLeft: 50}}>Clean Eats</Text>  
      </View>   
    );
  } else if (activeGoal == 'fashion') {
    goalDescText = (
      <View style={styles.goalDesc} >
        <Text style={{fontSize: 18, paddingLeft: 50}}>Conscious Wardrobe</Text>
        <Text style={{fontSize: 5}}>{"\n"}</Text>
        <Text style={{fontSize: 18, paddingLeft: 50}}>Sustainable Shopping</Text> 
        <Text style={{fontSize: 5}}>{"\n"}</Text> 
        <Text style={{fontSize: 18, paddingLeft: 50}}>Clean Beauty</Text>  
      </View>   
    );
  } else {
    goalDescText = (      
    <View style={styles.goalDesc} >
    </View>    
    );
  }

  var levelDescText;
  if (this.state.beginnerIconActive) {
    levelDescText = (
      <View style={styles.levelDesc} >
            <Text style={{fontSize: 18, paddingLeft: 50, paddingRight: 50}}>Complete at least 4 actions out of 10 options per goal set to reach 100% for the day</Text>
      </View>
    );
  } else if (this.state.intermediateIconActive) {
    levelDescText = (
      <View style={styles.levelDesc} >
            <Text style={{fontSize: 18, paddingLeft: 50, paddingRight: 50}}>Complete at least 6 actions out of 10 options per goal set to reach 100% for the day</Text>

      </View>
    );
  } else if (this.state.advancedIconActive) {
    levelDescText = (
      <View style={styles.levelDesc} >
            <Text style={{fontSize: 18, paddingLeft: 50, paddingRight: 50}}>Complete at least 8 actions out of 10 options per goal set to reach 100% for the day</Text>

      </View>
    );
  } else {
    levelDescText = (
      
    <View style={styles.levelDesc} >
    </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.goals} >
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Set Your Goal</Text>
        <Text style={{fontSize: 3}}>{"\n"}</Text>
        <Text>We suggest starting with 2-3</Text>
      </View>
      {goalDescText}
      <View style={styles.goalTabs} >
        <TouchableOpacity  onPress={() => this.onPress('home')}>
          <View style={styles.goalsButton}>
            <Image
              resizeMode="contain"
              style={styles.goalImage}
              source={this.state.homeIconActive === true ? require('../../img/homeIcon1.png') : require('../../img/homeIcon2.png')}
            />
            <Text style={{fontSize: 3}}>{"\n"}</Text>
            <Text style={{fontSize: 18, color: this.state.homeColor}}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => this.onPress('food')}>
          <View style={styles.goalsButton}> 
          <Image
              resizeMode="contain"
              style={styles.goalImage}
              source={this.state.foodIconActive === true ? require('../../img/burgerIcon1.png') : require('../../img/burgerIcon2.png')}
              />
            <Text style={{fontSize: 3}}>{"\n"}</Text>
            <Text style={{fontSize: 18, color: this.state.foodColor}}>Food</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => this.onPress('fashion')}>
          <View style={styles.goalsButton}>
          <Image
              resizeMode="contain"
              style={styles.goalImage}
              source={this.state.fashionIconActive === true ? require('../../img/shirtIcon1.png') : require('../../img/shirtIcon2.png')}
              />
            <Text style={{fontSize: 3}}>{"\n"}</Text>
            <Text style={{fontSize: 18, color: this.state.fashionColor}}>Fashion</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.levels} >
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Set Your Level</Text>
        <Text style={{fontSize: 10}}>{"\n"}</Text>
        {levelDescText}
        <View style={styles.levelTabs} >
        <TouchableOpacity  onPress={() => this.onPress('beginner')}>
          <View style={styles.levelsButton}>
            <Image
              resizeMode="contain"
              style={styles.goalImage}
              source={this.state.beginnerIconActive === true ? require('../../img/dotIcon1.png') : require('../../img/dotIcon2.png')}
              />
            <Text style={{fontSize: 3}}>{"\n"}</Text>
            <Text style={{fontSize: 18, color: this.state.beginnerColor}}>Beginner</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => this.onPress('intermediate')}>
          <View style={styles.levelsButton}> 
          <Image
              resizeMode="contain"
              style={styles.goalImage}
              source={this.state.intermediateIconActive === true ? require('../../img/dotIcon1.png') : require('../../img/dotIcon2.png')}
              />
            <Text style={{fontSize: 3}}>{"\n"}</Text>
            <Text style={{fontSize: 18, color: this.state.intermediateColor}}>Intermediate</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => this.onPress('advanced')}>
          <View style={styles.levelsButton}>
          <Image
              resizeMode="contain"
              style={styles.goalImage}
              source={this.state.advancedIconActive === true ? require('../../img/dotIcon1.png') : require('../../img/dotIcon2.png')}
              />
            <Text style={{fontSize: 3}}>{"\n"}</Text>
            <Text style={{fontSize: 18, color: this.state.advancedColor}}>Advanced</Text>
          </View>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  goals: {
    flex: 0.1,
    alignItems: 'center',
    marginTop: 80,
    // justifyContent: 'center',
  },
  goalDesc: {
    flex: 0.2,
    // alignItems: 'center',
    paddingTop: 50,
    width: '100%', 
    borderColor:'rgba(0,0,0,.2)', 
    borderBottomWidth:1,
    borderTopWidth:1
  },
  goalTabs: {
    paddingTop: 15,    
    flex: 0.15,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
  //  marginLeft: 50,
  //  marginRight: 50,
  },
  goalsButton: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  goalImage: {
    flex: 0.5
  },
  levels: {
    flex: 0.5,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  levelDesc: {
    flex: 0.6,
    // alignItems: 'center',
    paddingTop: 50,
    width: '100%', 
    borderColor:'rgba(0,0,0,.2)', 
    borderBottomWidth:1,
    borderTopWidth:1
  },
  levelTabs: {
    paddingTop: 15,    
    flex: 0.3,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  levelsButton: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  }
});