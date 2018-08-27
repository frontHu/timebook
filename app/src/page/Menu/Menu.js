import React from 'react'
import {
  View,
  FlatList,
  Text,
  Image
} from 'react-native'
import Homeheader from './../../component/Homeheader/Homeheader'
import Search from './../../common/Search'
import Avatar from './../../common/Avatar'
import { connect } from 'react-redux'
import pxToDp from './../../../untils/pxToDp'

class Menu extends React.Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = ({navigation})=> {
    return {
      mode: 'modal',
      headerStyle: {
        width: '100%',
        backgroundColor: 'rgb(61, 60, 62)'
      },
      headerTitle: <Homeheader />,
      headerLeft: <Search 
                    iconImg={require('./../../assets/close-white.png')}
                    onPress={()=>{navigation.goBack()}}
                  />,
      headerRight: <Avatar></Avatar>
    }
  }

  renderItem({item}) {
    return  (
      <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
        <Text style={[{marginBottom: pxToDp(20)}, !item.free && {color: '#b1b1b1'} ]}>{item.title}</Text>
        {
          item.free === 0 ?
          <Image style={{width: pxToDp(30), height: pxToDp(30)}} source={require('./../../assets/lock.png')}></Image>
          : null
        }
        
      </View>
    )
  }

  render() {
    console.log(this.props,'ppp')
    return (
      <View style={{flex: 1, backgroundColor: '#fff', padding: pxToDp(30)}}>
        <FlatList 
          data={this.props.bookdetailReducer.bookmenu}
          renderItem={this.renderItem.bind(this)}
          // keyExtractor={(item, index)=> index}
          style={{flex: 1, paddingLeft: pxToDp(30), paddingRight: pxToDp(30), paddingBottom: pxToDp(30)}}
          initialNumToRender={16}
        />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    bookdetailReducer: state.bookdetailReducer
  }
}
export default connect(mapStateToProps)(Menu)