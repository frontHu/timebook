import React from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'
import pxToDp from './../../untils/pxToDp'


const Search = ({ searchStyle, onPress, activeOpacity, iconImg }) => (
  <TouchableOpacity 
    activeOpacity={activeOpacity || 0.6} 
    onPress={onPress} 
    style={[styles.searchbox, searchStyle]}
  >
    <Image 
      style={styles.search} 
      source={iconImg ? iconImg : require('./../assets/search.png')}
    ></Image>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  searchbox: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(61, 60, 62)',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  search: {
    width: pxToDp(50),
    height: pxToDp(50),
    alignSelf: 'center',
    marginLeft:  pxToDp(20) 
  }
})

export default Search