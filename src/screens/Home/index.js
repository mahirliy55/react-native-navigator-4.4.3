import React, { Component } from "react"
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native"


export default class Home extends Component {

  // static navigationOptions = ({ navigation }) => {

  //   return {
  //     title:"Ana sayfa",
  //     headerLeft:<TouchableOpacity onPress={()=>navigation.navigate("Detail")}>
  //       <Text>Geri</Text>
  //     </TouchableOpacity>,
  //     headerRight:<Text>Ekle</Text>
  //   }
  // };


  constructor() {
    super();
  }

  componentDidMount() {
    // this.props.navigation.addListener("willFocus", () => {
    //   alert("Index e Geri Geldin")
    // })

    this.props.navigation.addListener("willBlur", () => {
      alert('indexden gitdin')
    })
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