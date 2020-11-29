import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, YellowBox } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// import Feed from './Feed.js';
import ActivityMain from './Activities/ActivityMain.js';
import ActivityPage from './Activities/ActivityPage.js';
// import Savings from './Savings.js';
//import ShopDesigners from './Shop/ShopDesigners.js';
//import ShopCategories from './Shop/ShopCategories.js';
//import ShopBrandCommitment from './Shop/ShopBrandCommitment.js';
import ShopCatalog from './Shop/ShopCatalog.js';
// import Impact from './Impact.js';
import FeedMain from './Feed/FeedMain.js';

const FeedStack = createStackNavigator();


function Feed() {
  return (
    <FeedStack.Navigator screenOptions={{headerShown: false}}>
      <FeedStack.Screen name="FeedMain" component={FeedMain}/>
    </FeedStack.Navigator>
  );
}

const ActivityStack = createStackNavigator();

function Activity() {
  return (
    <ActivityStack.Navigator screenOptions={{headerShown: false}}>
      <ActivityStack.Screen name="ActivityMain" component={ActivityMain} />
      <ActivityStack.Screen name="ActivityPage" component={ActivityPage}/>
    </ActivityStack.Navigator>
  );
}

function Savings() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Savings!</Text>
    </View>
  );
}

const ShopStack = createStackNavigator();

function Shop() {
  return (
    <ShopStack.Navigator screenOptions={{headerShown: false}}>
      <ShopStack.Screen name="ShopCatalog" component={ShopCatalog}/>
    </ShopStack.Navigator>
  );
}

function Impact() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Impact!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Feed') {
              iconName = focused ? 'home' : 'home-outline';
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />              
            } else if (route.name === 'Activity') {
              iconName = focused ? 'white-balance-sunny' : 'white-balance-sunny';
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />              
            } else if (route.name === 'Savings') {
              iconName = focused ? 'coin' : 'coin';
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />              
            } else if (route.name === 'Shop') {
              iconName = focused ? 'cart' : 'cart-outline';
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />              
            } else if (route.name === 'Impact') {
              iconName = focused ? 'heart' : 'heart-outline';
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />              
            }

          },
        })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTinyColor: 'gray',
          }}
      >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Savings" component={Savings} />
        <Tab.Screen name="Shop" component={Shop} />
        <Tab.Screen name="Impact" component={Impact} />
      </Tab.Navigator>
    )
  }
}