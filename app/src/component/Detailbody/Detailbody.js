import React from 'react'
import {
  View,
  Text,
  Alert,
  TouchableHighlight,
  FlatList,
  TouchableNativeFeedback
} from 'react-native'
import styles from './style/style'
import Comment from '../Comment/Comment'
import Introduce from '../Introduce/Introduce'
import List from '../List/List'

class Detailbody extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentType: 'introduce'
    }
  }

  tabHandle(type) {
    if(type === 'category') {
      this.props.actions.getbookMenu({book_uid: this.props.book_uid})
    }else if(type === 'comment') {
      // console.log('commm')
      this.props.actions.getbookComment({book_uid: this.props.book_uid})
    }
    this.props.actions.changeCurrentType({currentType:type})
  }

  

  render() {
    let activeClass = {
      'borderBottomWidth':2,
      'borderColor': 'rgb(246, 194, 67)',
    }
    let activeColor = {
      'color': 'rgb(246, 194, 67)'
    }
    let currentType = this.props.currentType
    // console.log(this.props,' ppp')
    return (
      <View style={styles.body}>
        <View style={styles.head}>
          <TouchableHighlight  
            onPress={this.tabHandle.bind(this, 'introduce')}
            style={currentType==='introduce'?{...styles.tab, ...activeClass}:{...styles.tab}} 
          >
            <View>
              <Text style={styles.text}>简介</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={currentType==='category'?{...styles.tab, ...activeClass}:{...styles.tab}}             
            onPress={this.tabHandle.bind(this, 'category')}
          > 
            <View>
              <Text style={styles.text}>目录</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={currentType==='comment'?{...styles.tab, ...activeClass}:{...styles.tab}}             
            onPress={this.tabHandle.bind(this, 'comment')}
          >
            <View>
              <Text style={styles.text}>评论{`(${this.props.commentNum})`}</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.tabBody}>
          {
            currentType === 'introduce' ?
            <Introduce 
              desc={this.props.description}
            /> : null
          }
          {
            currentType === 'category' ?
            <List 
              bookmenu={this.props.bookmenu} 
              navigation={this.props.navigation}
            /> : null
          }
          {
            currentType === 'comment' ? 
            <View>
              <Comment 
                navigation={this.props.navigation}
                comment={this.props.comment}
              />
            </View> : null
          }
        </View>
      </View>
    )
  }
}

export default Detailbody