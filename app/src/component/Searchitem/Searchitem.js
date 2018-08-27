import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text 
} from 'react-native'
import pxToDp from './../../../untils/pxToDp'
import { fomatDate } from './../../../untils/fomatDate'
const styles = StyleSheet.create({
  itembox: {
    padding: pxToDp(20),
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  imgbox: {
    width: pxToDp(200),
    height: pxToDp(300),
    // backgroundColor: 'red',
    // shadowColor: '#ccc',
    // shadowOffset: {width: pxToDp(4), height: pxToDp(4)},
    // shadowRadius: 2
    shadowColor:'#000', 
    shadowOffset:{width: pxToDp(3), height: pxToDp(2)},
    shadowRadius: pxToDp(7),
    shadowOpacity: 1,
  },
  infobox: {
    justifyContent: 'space-around',
    marginLeft: pxToDp(40)
  },
  title: {
    fontSize: 18
  },
  pre: {
    color: '#666'
  }
})

class Searchitem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.itembox}>
        <View style={styles.imgbox}>
          <Image style={styles.imgbox} source={{uri: this.props.bookCover}}></Image>
        </View>
        <View style={styles.infobox}>
          <View>
            <Text style={styles.title}>{this.props.bookName}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.pre}>作者:  </Text>
            <Text>{this.props.author}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.pre}>出版社:  </Text>
            <Text>{this.props.pressName}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.pre}>出版:  </Text>
            <Text>{fomatDate(this.props.createTime)}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.pre}>售价:  </Text>
            <Text>￥{this.props.ebookPrice}</Text>
          </View>
        </View>
      </View>
    )
  }
}
export default Searchitem