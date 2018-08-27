import React from 'react'
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native'
import pxToDp from './../../../untils/pxToDp'
import { fomatDate } from './../../../untils/fomatDate'
const styles = StyleSheet.create({
  morebox: {
    backgroundColor: '#e9e9e9',
    marginBottom: pxToDp(20)
  },
  moreitem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: pxToDp(20),
    position: 'relative'
  },
  readnow: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: '#ffbf01',
    top: pxToDp(10),
    // borderRadius: pxToDp(10),
    padding: pxToDp(20)

  },
  moreimg: {
    width: pxToDp(180),
    height: pxToDp(240),
    // backgroundColor: '#ccc',
    marginRight: pxToDp(30),
    shadowColor:'#333', 
    shadowOffset:{width: pxToDp(3), height: pxToDp(2)},
    shadowRadius: pxToDp(7),
    shadowOpacity: 1,
  },
  moreinfo: {
    justifyContent: 'space-around'
  },
  booktitle: {
    fontSize: pxToDp(36),
    width: pxToDp(300)
  },
})


class Morebox extends React.Component {
 
  render() {
    console.log(this.props, 'props')
    return (
      <View style={styles.morebox}>
        <View style={styles.moreitem}>
          <View style={styles.readnow}>
            <TouchableHighlight>
              <Text>立即阅读</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.moreimg}>
            <Image style={styles.moreimg} source={{uri: this.props.bookCover}}></Image>
          </View>
          <View style={styles.moreinfo}>
            <View>
              <Text numberOfLines={1} style={styles.booktitle}>{this.props.bookName}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:"#666"}}>作者：</Text>
              <Text style={styles.bookauthor}>{this.props.author}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:"#666"}}>出版社：</Text>
              <Text style={styles.bookauthor}>{this.props.pressName}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:"#666"}}>出版：</Text>
              <Text style={styles.bookauthor}>{fomatDate(this.props.createTime)}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:"#666"}}>售价：</Text>
              <Text style={styles.bookauthor}>￥{this.props.ebookPrice}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Morebox