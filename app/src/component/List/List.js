import React from 'react'
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import pxToDp from './../../../untils/pxToDp'
import Icon from 'react-native-vector-icons'


class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  catalistHandle({item}) { 
    return (
      <View>
        <Text style={{marginBottom: pxToDp(10)}}>{item.title}</Text>
        {
          item.children&&item.children.map((child, i)=> (
            <TouchableOpacity activeOpacity={0.6} key={i} style={{paddingLeft: pxToDp(30), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} >
              <Text numberOfLines={1} style={{color: !child.free?'#999':'#666', fontSize: pxToDp(30), lineHeight: pxToDp(66)}}>{child.title.replace(/[\.]/g,'．')}</Text>
              {!child.free && <Icon name='ios-lock-outline' color='#666' size={20}/> || null}
            </TouchableOpacity>
          ))
        }
      </View>
    )
  }

  gomoreMenu() {
    this.props.navigation.navigate('Menu', {'bookId': this.props.navigation.getParam('bookId')})
  }

  render() {
    let bookmenu = this.props.bookmenu || []
    return (
      <View style={{width:'100%'}}>
        <FlatList 
          data={bookmenu.slice(0,6)}
          renderItem={this.catalistHandle.bind(this)}
          horizontal={false}
        ></FlatList>
        <TouchableOpacity
          onPress={this.gomoreMenu.bind(this)}
        > 
          <View style={{justifyContent: 'center', flexDirection:'row'}}>
            <Text style={{color: '#b1b1b1', alignSelf: 'center'}}>
              更多目录
            </Text>
            <Image style={{width:pxToDp(40),height:pxToDp(40)}} source={require('./../../assets/arrow.png')}></Image>
          </View>
          
        </TouchableOpacity>
      </View>
    )
  }
}

export default List