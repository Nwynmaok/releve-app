import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

class How extends React.Component {
  static navigationOptions = {
    title: "How"
  };
}


export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        
        <View style = {{flex:1, alignItems: "center"}}> 
          <View style={{flex:0.15}}/>
          
          <View style={{flex: 0.25}}>
              <Text style={styles.textHeader}>How Does It Work?</Text>          
          </View>
          
          {/* <View style={{flex:0.1}}/> */}
          
          <View style={{flex: 0.6}}>
            <Swiper style={styles.wrapper} loop={false}
              dot= {<View style={{backgroundColor: 'rgba(0,0,0,.2)',
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  marginLeft: 4,
                  marginRight: 4,
                  marginTop: 4,
                  marginBottom: 4}}>    
                  </View>
                  
              }
              activeDot= {<View style={{backgroundColor: '#000',
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  marginLeft: 4,
                  marginRight: 4,
                  marginTop: 4,
                  marginBottom: 4}}>
                  </View>
              }
              >
              <View testID="Hello" style={styles.slide}>
                  <Text style={styles.textBody}>I'Mpact will track your sustainable actions throughout the day and help you make simple choices based on your lifestyle that will benefit you, our communities, and our planet.</Text>
              </View>
              
              <View testID="Beautiful" style={styles.slide}>
                  <Text style={styles.textBody}>Let's start with 3 main lifestyle goals: Home, Food, and Fashion. We recommend selecting 1-2 goals for you to begin with. (Even for our competitive friends out there, don't worry! You'll flex those sustainable muscles soon enough.)</Text>
              </View>
              
              <View testID="Simple" style={styles.slide}>
                  <Text style={styles.textBody}>You'll need to indicate your level: Beginner, Intermediate or Advanced. We will then ask you a series of questions to get to know you and how you go about your day.</Text>
              </View>

              <View testID="Simple" style={styles.slide}>
                  <Text style={styles.textBody}>From your answers, we'll suggest 10 sustainable actions that you can do every morning, afternoon and night. Depending on your level, once you complete a number of tasks, you'll accomplish 100% progress for the day.</Text>
              </View>

              <View testID="Simple" style={styles.slide}>
                  <Text style={styles.textBody}>We'll help you keep track of your daily and monthly progress so you can stay consistent and challenge yourself. Think of it like working out but for the health of our loved ones and our environment.</Text>
              </View>

              <View testID="Simple" style={styles.slide}>
                  <Text style={styles.textBody}>Be kind to yourself. Don't sweat it if you don't achieve 100% every day. You can perform a daily act of kindness that will contribute to your progress. {"\n"} {"\n"} Pretty simple, right? We know you'll be a superstar at this! {"\n"} {"\n"} Let's get started! </Text>
              </View>
            </Swiper>
                
            {/* <View style={{flex:0.1}}/> */}
            </View>   
            <TouchableOpacity style={{flex: 0.1}} onPress={() => this.props.navigation.navigate('Goals')}>
              <View style={{}}>
                <Text style={{}}>Next</Text>
              </View>
            </TouchableOpacity>       
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
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  textHeader: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  textBody: {
    fontSize: 20,
    alignItems: "center",
    textAlign: "center",
    marginHorizontal: 25
}  
});