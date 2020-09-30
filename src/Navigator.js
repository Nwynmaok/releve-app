import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, YellowBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './Onboarding/Welcome.js';
import Loading from './Loading.js';
import Goals from './Onboarding/Goals.js';
import WeekdayWakeup from './Onboarding/WeekdayWakeup.js';
import GoalsFashion from './Onboarding/GoalsFashion.js';
import How from './Onboarding/How.js'

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Goals" component={Goals} />
            <Stack.Screen name="WeekdayWakeup" component={WeekdayWakeup} />
            <Stack.Screen name="GoalsFashion" component={GoalsFashion} />
            <Stack.Screen name="How" component={How} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}