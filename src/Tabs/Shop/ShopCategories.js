import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class App extends React.Component {

  // state = {
  //   search: '',
  // };

  // updateSearch = (search) => {
  //   this.setState({ search });
  // };


  render() {

    // const { search } = this.state;

    return (
      <View style={styles.container}>
          
          {/* Top Banner including Menu Button, Page TItle, Search Icon */}
          <View style={{flex:0.075, marginTop: 65, alignItems: "center", flexDirection: 'row', justifyContent: 'space-around'}}>
          <Image
              style={{flex:1, height:35, width: 35}}
              resizeMode="contain"
              source={require('../img/icons8-menu-50.png')}
          />     
          
          <Text style={styles.textHeader}>Shop Releve Fashion</Text>
          
          <Image
              style={{flex:1, height: 35, width: 35}}
              resizeMode="contain"
              source={require('../img/icons8-search-50.png')}
          />
          </View>
          
          {/* Page Buttons: Category, Brand Commitment, Designers */}
          <View style={{flex:0.05, marginTop: 15, flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text style={{fontSize: 16, color: '#535052', fontWeight: 'bold'}}>Categories</Text>
            <Text style={{fontSize: 16, color: '#535052'}}>Brand Commitment</Text>
            <Text style={{fontSize: 16, color: '#535052'}}>Designers</Text>
          </View>

          <View style={{flex:0.85, marginTop: 5, justifyContent: 'space-between'}}>
            <View style={{flex:0.25, marginHorizontal: 15, marginVertical: 5}}>
              <Image
                style = {{flex:1 , width: undefined, height: undefined}}
                resizeMode="contain"
                source={require('../img/shop/Categories/accessories.png')}
              />
            </View>
            
            <View style={{flex:0.25, marginHorizontal: 15, marginVertical: 5}}>
              <Image
                style = {{flex:1 , width: undefined, height: undefined}}
                resizeMode="contain"
                source={require('../img/shop/Categories/activewear.png')}
              />
            </View>
            
            <View style={{flex:0.25, marginHorizontal: 15, marginVertical: 5}}>
              <Image
                style = {{flex:1 , width: undefined, height: undefined}}
                resizeMode="contain"
                source={require('../img/shop/Categories/bags.png')}
            />
            </View>
            
            <View style={{flex:0.25, marginHorizontal: 15, marginVertical: 5}}>
              <Image
                style = {{flex:1 , width: undefined, height: undefined}}
                resizeMode="contain"
                source={require('../img/shop/Categories/clothing.png')}
              />
            </View>  
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    textHeader: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#535052'
    },
    
    contentRow:{
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    }
      
  });