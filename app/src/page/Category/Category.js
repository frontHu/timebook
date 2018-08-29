import React from 'react'
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView
} from 'react-native'
import Catebox from './../../component/Catebox/Catebox'
import pxToDp from './../../../untils/pxToDp'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cateActions from './../../redux/action/cate.action'

class Category extends React.Component {
  constructor(props) {
    super(props)
    this.actions = bindActionCreators(Object.assign({}, cateActions), this.props.dispatch)
  }
  
  static navigationOptions = {
    tabBarLabel: '分类',
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require('./../../assets/category-icon-normal.png')}
        style={[{height: 24, width: 24}, {tintColor: tintColor}]}
      />
    )
  }

  componentDidMount() {
    this.getCategray()
    // console.log(this.props,'props')
  }

  //获取分类
  getCategray() {
    this.actions.getCateAction()
  }

  render() {
    let list = this.props.categrayReducer.list || []
    return (
      <ScrollView>
      <View style={{padding: pxToDp(20), backgroundColor:'#fff',flex:1}}> 
        {
          this.props.categrayReducer.list.map((item, index) => {
            return (
              <Catebox key={index} subCategoryDtos={item.subCategoryDtos} name={item.name}/>
            )
          })
        }
      </View>
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return {
    categrayReducer: state.categrayReducer
  }
}
export default connect(mapStateToProps)(Category)