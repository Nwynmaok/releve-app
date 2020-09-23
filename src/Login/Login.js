import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Swiper from 'react-native-swiper';
// import { StackNavigator } from '@react-navigation/stack';


export default class App extends React.Component {
  
  onPress() {
    // this.props.navigation.navigate('Welcome'); // this will be main route
      this.props.navigation.navigate('Goals'); //temporary for testing

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:.15}}>
          <Text style={styles.heading}>WELCOME</Text>
          <StatusBar style="auto" />
        </View>
        <View style={{flex: .5, borderBottomWidth:1, borderColor:'rgba(0,0,0,.2)'}}>
          <Swiper 
            style={styles.wrapper} 
            loop={false}
            dot={
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,.2)',
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  marginLeft: 4,
                  marginRight: 4,
                  marginTop: 4,
                  marginBottom: 4
                }}
              />
            }
            activeDot={
              <View
                style={{
                  backgroundColor: '#000',
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  marginLeft: 4,
                  marginRight: 4,
                  marginTop: 4,
                  marginBottom: 4
                }}
              />
            }
            paginationStyle={{
              bottom: -35,
            }}
          >
            <View testID="Hello" style={styles.slide1}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={require('../../img/placeholder-image1.png')}
              />
              <View style={{flex: .05}} />
              <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in erat sem. Praesent et tincidunt ligula. Quisque iaculis commodo pretium. Curabitur vitae enim eget elit vulputate ultricies eget eget metus. Cras commodo arcu ut pretium auctor. Duis est nibh, vestibulum ut gravida et, lobortis et urna. Phasellus auctor ligula nulla, eget ultricies elit lobortis vel.</Text>
            </View>
            <View testID="Beautiful" style={styles.slide2}>
              <Image
                  resizeMode="contain"
                  style={styles.image}
                  source={require('../../img/placeholder-image2.png')}
                />
                <View style={{flex: .05}} />
                <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in erat sem. Praesent et tincidunt ligula. Quisque iaculis commodo pretium. Curabitur vitae enim eget elit vulputate ultricies eget eget metus. Cras commodo arcu ut pretium auctor. Duis est nibh, vestibulum ut gravida et, lobortis et urna. Phasellus auctor ligula nulla, eget ultricies elit lobortis vel.</Text>
            </View>
          </Swiper>
        </View>
        <View style={{flex: .05, width: '100%', borderColor:'rgba(0,0,0,.2)', borderBottomWidth:1}}>
        <View style={{flex: .05}}/>
        </View>
        <View  style={styles.bottom}>
          <TouchableOpacity onPress={() => this.onPress()}>
            <View style={styles.submitButton}>
              <Text style={styles.buttonText}>Sign in with Email (proceed to signup)</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.submitButton}>
              <Text style={styles.buttonText}>Sign in with Relevé Fashion Account</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.submitButton}>
              <Text style={styles.buttonText}>Sign in with Google</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.submitButton}>
              <Text style={styles.buttonText}>Sign in with Apple</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1
  },
  heading: {
    marginTop: 70,
    fontSize: 20
  },
  bottom: {
    flex: 0.25,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#808080"
  },
  buttonText: {
    margin: 12,
    paddingHorizontal: 6,
    textAlign: "center",
    backgroundColor: "white",
    color: "#000000",
    fontSize: 12
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 0.5
  },
  text: {
    flex: 0.5,
    marginHorizontal:50   
  }
});