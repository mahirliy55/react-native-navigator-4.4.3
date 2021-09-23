import React, { Component } from "react";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native"


export default class Detail extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Detay",
      headerLeft: <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Geri</Text>
      </TouchableOpacity>,
      headerRight: <Text>Ekle</Text>
    }
  };



  constructor() {
    super();
  }

  componentDidMount(){
    alert(this.props.navigation.getParam("name"))
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Detail</Text>
      </SafeAreaView>
    );
  }
}