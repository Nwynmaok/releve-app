import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default class ShopItemTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <TouchableOpacity style={styles.shopItemTile} onPress={() => {}}>
          <View style={styles.shopItemImage}>
            <Image
              style={{flex: 1, width: '100%', height: '100%'}}
              resizeMode="contain"
              source={this.props.src}
            />              
          </View>
            
            <View style = {{flex: 0.20, marginBottom: 10}}>
              <Text style={styles.shopItemName}>
              {this.props.name}
              </Text>
              
              <Text style={styles.shopItemPrice}> {this.props.price} </Text>
            </View>

        </TouchableOpacity>
    );
  } 
  
}
const styles = StyleSheet.create({
  shopItemTile: {
    flex: 1,
    flexDirection: "column",
  },
  shopItemImage: {
    flex: 0.80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  shopItemName:{
    textAlign: "center",
    color: "#7F7D7E",
    fontSize: 16,
    fontWeight: "bold",
  },

  shopItemPrice: {
    textAlign: "center",
    color: "#000000",
    fontSize: 14
  }
});
