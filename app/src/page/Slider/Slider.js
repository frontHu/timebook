import React from 'react'
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ScrollView,
} from 'react-native'

class Slider extends React.Component {
  componentDidMount() {
    this.props.navigation.openDrawer()
  }
  render() {
    // log(this.props,'ddddd')
    return (
      <View>
        <Text>slider</Text>
      </View>
    )
  }
}

export default Slider