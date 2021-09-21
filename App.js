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
// End
import { createBottomTabNavigator } from 'react-navigation-tabs';
//Sidebar Menu
import { createDrawerNavigator } from 'react-navigation-drawer';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <SafeAreaView>
        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
          <Text>Go!</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
class Detail extends Component {
  constructor() {
    super();
  }

  render() {
    return <SafeAreaView></SafeAreaView>;
  }
}

class Drawer extends Component {
  constructor() {
    super();
  }
  render() {
    return <SafeAreaView style={{marginTop:100}}>
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Contact Us</Text>
        <Text>Destination</Text>
    </SafeAreaView>;
  }
}

const HomeStack = createStackNavigator({
  Home: {
    screen: App,
  },
});

const DetailStack = createStackNavigator({
  Detail: {
    screen: Detail,
  },
});

const DrawerStack = createStackNavigator({
  Drawer: {
    screen: Drawer,
  },
});

const AppNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  Detail: {
    screen: DetailStack,
  },
},
{
contentComponent:Drawer,
});
export default createAppContainer(AppNavigator);
