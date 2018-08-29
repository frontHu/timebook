import React from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import pxToDp from './../../untils/pxToDp'
import { connect } from 'react-redux'

const Avatar = ({avatar, onPress, boxStyle, avatarStyle, userReducer}) => {
  // console.log(userReducer, 'this')
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.avatarbox, boxStyle]}
    >
      <Image style={[styles.avatar, avatarStyle]} source={userReducer.avatar ? {uri: userReducer.avatar} : require('./../assets/avatar.png')}></Image>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  avatarbox: {
    width: pxToDp(50),
    height: pxToDp(50),
    marginRight:  pxToDp(20) 
  },
  avatar: {
    width: pxToDp(50),
    height: pxToDp(50),
    borderRadius: pxToDp(25)
  }
})
function mapStateToProps(state) {
  return {
    userReducer: state.userReducer
  }
}
export default connect(mapStateToProps)(Avatar)