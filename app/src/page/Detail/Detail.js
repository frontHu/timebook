import React from 'react'
import {
  View,
  Text,
  ScrollView,
  TextInput,
  RefreshControl
} from 'react-native'
import Detailhead from '../../component/Detailhead/Detailhead'
import Detailbody from '../../component/Detailbody/Detailbody'
import Publisher from '../../component/Publisher/Publisher'
import Hotbook from '../../component/Hotbook/Hotbook'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as bookdetailActions from '../../redux/action/detail.action'
import pxToDp from './../../../untils/pxToDp'
import TextButton from './../../common/TextButton' 

class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      book_uid: this.props.navigation.getParam('bookId'),
      content: ''
    }
    this.actions = bindActionCreators(Object.assign({}, bookdetailActions), this.props.dispatch)
  }
 
  componentDidMount() {
    this.getbookDetail()
  }

  static navigationOptions = {
    title: '图书详情',
    headerStyle: {
      backgroundColor: 'rgb(61, 60, 62)',
    },
    headerTitleStyle: {
      color: '#fff'
    }
  }

  //获取书本信息
  getbookDetail() {
    this.actions.bookdetailAction({bookId: this.props.navigation.getParam('bookId')})
  }

  //输入评论信息
  inputComment(text) {
    this.setState({content: text})
  }

  //提交评论信息
  submitComment() {
    if(!this.state.content) return
    this.actions.submitcomment({
      book_uid: this.state.book_uid,
      content: this.state.content,
      h5: 1,
      replyId: 0
    })
  }

  render() {
    let bookdetailReducer = this.props.bookdetailReducer || {}

    let homebookReducer = this.props.homebookReducer || {}
    // console.log(bookdetailReducer, 'bookdetailReducer111')
    return(
      <View style={{flex: 1}}>
        <ScrollView
          keyboardDismissMode='on-drag'
        >
          <Detailhead 
            {...bookdetailReducer}
            navigation={this.props.navigation}
          />
          <Detailbody 
            {...bookdetailReducer}
            actions={this.actions}
            book_uid={this.state.book_uid}
            navigation={this.props.navigation}
          />
          <Publisher 
            {...bookdetailReducer}
          />
          <Hotbook 
            {...homebookReducer}
          />
        </ScrollView>
        {
          this.props.bookdetailReducer.currentType === 'comment' ?
          <View 
            style={{
              width: '100%',
              height: pxToDp(92),
              paddingBottom: pxToDp(20),
              paddingRight: pxToDp(20),
              paddingTop: pxToDp(20),
              paddingLeft: pxToDp(20),
              backgroundColor: '#fff',
              borderTopWidth: pxToDp(2),
              borderColor: '#c7c7c7',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <TextInput 
              placeholder='说说你的想法'
              style={{width: '75%'}}
              value={this.state.talk}
              onChangeText={(text)=>this.inputComment(text)}
            ></TextInput>
            <TextButton 
              text='send'
              btnStyle={{width:'25%', backgroundColor: '#fff'}}
              onPress={this.submitComment.bind(this)}
            ></TextButton>
          </View> : null
        }
      </View>
    )
  }
}
function mapStateToProps(state) {
  return {
    bookdetailReducer: state.bookdetailReducer,
    homebookReducer: state.homebookReducer
  }
}
export default connect(mapStateToProps)(Detail)