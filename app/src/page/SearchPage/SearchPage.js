import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableHighlight
} from 'react-native'
import style from './style/style'
import Searchitem from './../../component/Searchitem/Searchitem'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as searchActions from './../../redux/action/search.action'
import pxToDp from '../../../untils/pxToDp'
import Nomore from './../../common/Nomore'
const styles = StyleSheet.create(style)


class SearchPage extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      text:''
    }
    this.actions = bindActionCreators(Object.assign({}, searchActions), props.dispatch)
  }

  static navigationOptions = {
    headerTitle: '搜索',
    headerStyle: {
      width: '100%',
      backgroundColor: 'rgb(61, 60, 62)'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#fff',
    }
  }

  componentDidMount() {
    this.getKeyword()
  }

  //获取关键字
  getKeyword() {
    this.actions.getkeywordAction()
  }

  //搜搜
  search(event) {
    console.log(event.nativeEvent.text, 'event')
    this.setState({
      text: event.nativeEvent.text
    })
    this.actions.searchAction({
      pageNumber: 1,
      pageSize: 15,
      searchKey: event.nativeEvent.text
    })
  }

  searchPress() {
    this.actions.searchAction({
      pageNumber: 1,
      pageSize: 15,
      searchKey: this.state.text
    })
  }

  //渲染列表
  renderItem({item, index}) {
    return <Searchitem key={index} {...item}></Searchitem>
  }

  render() {
    let keyword = this.props.searchReducer.keyword || []
    let searchlist = this.props.searchReducer.searchlist || []
    console.log(searchlist, 'searchlist')
    return (
      <View style={styles.searchbox}>
        <View style={styles.searchInput}>
          <TextInput 
            style={styles.input}
            placeholder='搜索书名/作者'
            placeholderTextColor='#ccc'
            value={this.state.text}
            onSubmitEditing={(event) => {this.search(event)}}
          > 
            {/* <View style={styles.searchIcon}>
              <TouchableHighlight onPress={this.searchPress.bind(this)} style={styles.searchIcon}>
                <Image style={{width: pxToDp(40), height: pxToDp(40)}} source={require('./../../assets/search.png')}></Image>
              </TouchableHighlight>
            </View> */}
          </TextInput>
          
        </View>
        <View style={styles.searchContent}>
          {
            searchlist.length <= 0 ?
            <View>
              <Text style={{color: '#999'}}>大家都再搜索</Text>
              <View style={styles.keyword}>
                {
                  keyword.map((item, index) => {
                    return <Text key={index} style={style.keyItem}>{item.word}</Text>
                  })
                }
              </View>
            </View> : null
          }
          {
            searchlist.length > 0 ?
            <View>
              <FlatList
                data={searchlist}
                renderItem={this.renderItem.bind(this)}
                ListFooterComponent={<Nomore />}
              ></FlatList>
            </View> : null
          }
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    searchReducer: state.searchReducer
  }
}
export default connect(mapStateToProps)(SearchPage)