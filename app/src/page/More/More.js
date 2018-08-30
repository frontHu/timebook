import React from 'react'
import {
  View,
  FlatList
} from 'react-native'
import Morebox from './../../component/Morebox/Morebox'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as moreActions from './../../redux/action/more.action'

class More extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      type: this.props.navigation.getParam('type'),
      pageNumber: 1,
      pageSize: 10
    }
    this.actions = bindActionCreators(Object.assign({}, moreActions), props.dispatch)
  }
  static navigationOptions = ({navigation}) => {
    console.log(navigation, 'navigation') 
    return {
      headerTitle: navigation.state.params.title,
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      },
      headerStyle: {
        backgroundColor: 'rgb(61, 60, 62)'
      }
    }
  }

  componentDidMount() {
    this.getMoreList()
  }

  //获取书本更多列表
  getMoreList() {
    this.actions.getMoreAction(this.state)
  }

  //渲染列表
  renderList({item}) {
    return (
      <Morebox {...item}></Morebox>
    )
  }
  render() {
    // console.log(this.props.moreReducer, 'moreReducer')
    let list = this.props.moreReducer.list || []
    return (
      <View>
        <View>
          <FlatList
            data={list}
            renderItem={this.renderList.bind(this)}
          ></FlatList>
        </View>
      </View>
    )
  }
}
function mapStateToProps(state) {
  return {
    moreReducer: state.moreReducer
  }
}
export default connect(mapStateToProps)(More)