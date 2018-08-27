import React from 'react'
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity 
} from 'react-native'
import pxToDp from './../../untils/pxToDp'

const TextButton = ({ text, textStyle, btnStyle, Child, onPress, activeOpacity }) => (
  <TouchableOpacity 
    activeOpacity={activeOpacity || 0.6} 
    onPress={onPress} 
    style={[styles.btn, btnStyle]}
  >
    { text && <Text style={[styles.text, textStyle]}>{text}</Text> }
    { Child && <Child /> }
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  text: {
    fontSize: pxToDp(30),
    color: '#666',
    backgroundColor: 'rgba(0,0,0,0)',
    textAlign: 'center',
    lineHeight: pxToDp(60)
  },
  btn: {
    width: '100%',
    height: pxToDp(60),
    backgroundColor: '#ffbf01',
    borderRadius: pxToDp(10),
    // marginTop: pxToDp(82)
  }
})

export default TextButton