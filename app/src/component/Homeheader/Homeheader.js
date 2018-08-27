import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'
import style from './style/style'
const styles = StyleSheet.create(style)

class Homeheader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.headerMain}>
        <View style={styles.homelogo}>
          <Image style={styles.logo} source={require('./../../assets/homelog.png')}></Image>
        </View>
      </View>
    )
  }
}
export default Homeheader