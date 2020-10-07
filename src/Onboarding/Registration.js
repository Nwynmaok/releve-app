import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from 'react-native';

class Registration extends React.Component {
    static navigationOptions = {
      title: "Registration"
    };
  }

  export default function App() {

    const [value, onChangeText] = React.useState('Useless Placeholder');

    return (
        <View style={styles.container}>
          <View style={{flex:0.15}}/>
          
          <View style={{flex:0.1, marginTop: 25 }}>
            <Image
                  resizeMode="contain"
                  style={styles.image}
                  source={require('../../img/placeholder_login.png')}
            />
            <StatusBar style="auto" />
          </View>

          <View style={{flex:0.075}}>
              <Text style={styles.textHeader}>Registration</Text>
          </View>
          
          <View style={{flex:0.3, marginBottom: 30}}>
            <View style={styles.editText}>
            <TextInput
                onChangeText={text => onChangeText(text)}
                clearTextOnFocus={'true'}
                value = {value}
            />
            </View>
            <View style={styles.editText}>
            <TextInput
                onChangeText={text => onChangeText(text)}
                clearTextOnFocus={'true'}
                value = {value}
            />
            </View>
            <View style={styles.editText}>
            <TextInput
                onChangeText={text => onChangeText(text)}
                clearTextOnFocus={'true'}
                value = {value}
            />
            </View>
            <View style={styles.editText}>
            <TextInput
                onChangeText={text => onChangeText(text)}
                clearTextOnFocus={'true'}
                value = {value}
            />
            </View>
            <View style={styles.editText}>
            <TextInput
                onChangeText={text => onChangeText(text)}
                clearTextOnFocus={'true'}
                value = {value}
            />
            </View>

          </View>
            
          <View style={{flex: 0.2}}>
            <View style={{flex: 1}}>
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
        </View>
      );
    }
  
  
    const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1
    },
    textHeader: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    heading: {
      marginTop: 70,
      fontSize: 20
    },
    submitButton: {
      backgroundColor: "white",
      borderWidth: 1,
      borderRadius: 5,
      borderColor: "#808080",
      marginBottom: 10
    },
    buttonText: {
      margin: 12,
      paddingHorizontal: 6,
      textAlign: "center",
      backgroundColor: "white",
      color: "#000000",
      fontSize: 12
    },
    editText: {
        justifyContent: "space-evenly",
        backgroundColor: "white",
        borderWidth: 2,
        borderRadius: 0,
        borderColor: "#808080",
        marginBottom: 5,
        marginTop: 5,
        paddingHorizontal: 45,

        flex: 0.2

    }

    
  });
