import React from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import style from './style'
const styles = StyleSheet.create(style)

class Read extends React.Component {
  constructor(props) {
    super(props)
  }
  static navigationOptions = {
    headerTitle: '阅读'
  };

  render() {
    return (
      <View style={styles.readBox} id=''>

      </View>
    )
  }
}

export default Read