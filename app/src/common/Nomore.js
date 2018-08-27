import React from 'react'
import {
  View,
  Text
} from 'react-native'
import pxToDp from './../../untils/pxToDp'

const Nomore = ({}) => (
  <View style={{ marginTop: pxToDp(30),padding: pxToDp(20), flexDirection:'row', justifyContent:'center'}}>
    <Text style={{
      color: '#666',
      position:'absolute',
      zIndex: 9,
      backgroundColor: '#fff',
      paddingLeft: pxToDp(40),
      paddingRight: pxToDp(40),
     
    }}>没有更多了~</Text>
    <View style={{
      width:'100%',
      borderBottomColor:'#666', 
      borderBottomWidth:1,
      // position:'absolute',
      // top:'50%'
      alignSelf:'center'
    }}></View>
  </View>
)
 
export default Nomore