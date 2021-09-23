import React, { Component } from "react";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native"

export default class Drawer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <SafeAreaView style={{ marginTop: 100 }}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Detail")}>
          <Text>Detail</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}