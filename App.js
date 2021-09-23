import React, { Component } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
// Top Navigation
import { createStackNavigator } from 'react-navigation-stack';
// Bottom Navigation
import { createBottomTabNavigator } from 'react-navigation-tabs';
// Sidebar Navigation
import { createDrawerNavigator } from 'react-navigation-drawer';

import Route from "./src/Route"

export default class App extends Component {
  render() {
    return (
      <Route/>
    )
  }
}
