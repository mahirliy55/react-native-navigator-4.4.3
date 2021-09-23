import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
// Top Navigation
import { createStackNavigator } from 'react-navigation-stack';
// Bottom Navigation
import { createBottomTabNavigator } from 'react-navigation-tabs';
// Sidebar Navigation
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from "../src/screens/Home";
import Detail from "../src/screens/Detail";
import Drawer from "../src/Components/Drawer";


const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Ana sayfa",
    }
  },

  Detail: { screen: Detail }
},


  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "red",
      }
    }
  }
);


const DetailStack = createStackNavigator({
  Detail: {
    screen: Detail,
  },
});


const AppBottomNavigator = createBottomTabNavigator({
  Home:{
    screen:Home,
    navigationOptions:{
      title:"Ana sayfa"
    }
  },

  Detail:{
    screen:Detail,
    navigationOptions:{
      title:"Detail"
    }
  }
},
{
  tabBarOptions:{
    activeTintColor:"red"
  }
})

const AppNavigator = createDrawerNavigator({
  Home: AppBottomNavigator,
},
  {
    contentComponent: Drawer,
  });

export default createAppContainer(AppNavigator);

