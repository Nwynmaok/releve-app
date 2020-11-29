import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import ShopTile from '../../../components/ShopItemTile'

export default class App extends React.Component {

  render() {

    return (
      <View style={styles.container}>
          
          {/* Top Banner including Menu Button, Page TItle, Search Icon */}
          <View style={{flex:0.075, marginTop: 45, alignItems: "center", flexDirection: 'row', justifyContent: 'space-around'}}>
          <Image
              style={{flex:1, height:30, width: 30}}
              resizeMode="contain"
              source={require('../img/icons8-menu-50.png')}
          />     
          
          <Text style={styles.textHeader}>Shop Releve Fashion</Text>
          
          <Image
              style={{flex:1, height: 30, width: 30}}
              resizeMode="contain"
              source={require('../img/icons8-search-50.png')}
          />
          </View>
          
          {/* Page Buttons: Category, Brand Commitment, Designers */}
          <View style={{flex:0.05, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: '#535052'}}>Wibes Catalog</Text>
          </View>

          <View style={{flex:0.85, marginTop: 15, justifyContent: 'space-around'}}>
            <View style={styles.contentRow}>
                <View style = {styles.contentItem}>
                    <ShopTile name='Akwaba Marcory Trainers' price='$99.99' src={require('../../../img/shop/Brands/Wibes/Akwaba_Marcory_Trainers/Akwaba_Marcory_9.jpg')}/>
                </View>
                
                <View style = {styles.contentItem}>
                    <ShopTile name='N Zassa Butterose Trainers' price='$99.99' src={require('../../../img/shop/Brands/Wibes/N_Zassa_Butterose_Trainers/N_Zassa_Butterose_8.jpg')}/>
                </View>
                
            </View>
            
            <View style={styles.contentRow}>
                <View style = {styles.contentItem}>
                    <ShopTile name='N Zassa Iroko Trainers' price='$99.99' src={require('../../../img/shop/Brands/Wibes/N_Zassa_Iroko_Trainers/N_Zassa_Iroko_7.jpg')}/>
                </View>

                <View style = {styles.contentItem}>
                    <ShopTile name='N Zassa Marcory Trainers' price='$99.99' src={require('../../../img/shop/Brands/Wibes/N_Zassa_Marcory_Trainers/N_Zassa_Marcory_7.jpg')}/>
                </View>
                
            </View>

          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff'
    },
    textHeader: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "#535052"
    },
    
    contentRow:{
      flex: 0.50,
      flexDirection: 'row',
      justifyContent: 'space-around',

    },

    contentItem:{
        flex: 0.5
    },

    layoutbox: {
        flex: 0.2, 
        margin: 15,
        justifyContent: "space-around",
        paddingVertical: 10
      },
      
  });