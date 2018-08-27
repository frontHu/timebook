import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'
import  pxToDp  from '../../../untils/pxToDp'

let styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: pxToDp(40),
    paddingRight: pxToDp(40),
    paddingTop: pxToDp(20),
    paddingBottom: pxToDp(20),
    borderBottomWidth: 1,
    borderBottomColor: '#c7c7c7'
  },
  titleGap: {
    borderLeftWidth: pxToDp(5),
    borderLeftColor: '#ffbf01',
    paddingLeft: pxToDp(10)
  },
  publisBannerbox: {
    paddingTop: pxToDp(20),
    paddingBottom: pxToDp(20),
    flexDirection: 'row',
    justifyContent: 'center'
  },
  publisBanner: {
    width: pxToDp(600),
    height: pxToDp(105)
  }
})

class Publisher extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{marginTop: 20, backgroundColor:'#fff'}}>
        <View style={styles.title}>
          <View style={styles.titleGap}>
            <Text>{this.props.pressName}</Text>
          </View>
          <View>
            <Text style={{color: '#b1b1b1'}}>进入书店</Text>
          </View>
        </View>
        <View style={styles.publisBannerbox}>
          <Image style={styles.publisBanner} source={require('./../../assets/banner1.jpg')}></Image>
        </View>
      </View>
    )
  }
}

export default Publisher