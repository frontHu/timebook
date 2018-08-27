import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'
import Bookitem from './../../component/Bookitem/Bookitem'
import style from './style'
const styles = StyleSheet.create(style)

class Rank extends React.Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    tabBarLabel: '排行',
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require('./../../assets/home-icon-normal.png')}
        style={[{height: 24, width: 24}, {tintColor: tintColor}]}
      />
    )
  }

  render() {
    return (
      <View>
        <View style={styles.rankItem}>
          <View >
            <Text style={styles.rankTitle}>人气榜</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Rank