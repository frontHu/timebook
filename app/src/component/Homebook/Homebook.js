import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native'
import styles from './style/style'

class Homebook extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  goDetail(item) {
    this.props.navigation.navigate('Detail', {
      'bookId': item.bookId
    })
  }



  renderFlat({ item }) {
    return (
      <TouchableOpacity
        style={ styles.specialItem }
        onPress={ this.goDetail.bind(this, item) }
      >
        <View style={ styles.imgItem }>
          <View style={ styles.imgShadow }>
            <Image style={ styles.Img } source={ { uri: item.bookCover } } />
          </View>
          <View style={ styles.title }>
            <Text numberOfLines={ 1 }>{ item.bookName }</Text>
          </View>
          <View>
            {
              item.discountPrice === 0 ?
                <Text style={ styles.free }>免费</Text> :
                <Text style={ styles.price }>{ `￥${item.discountPrice}` }</Text>
            }
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  goMore(type) {
    this.props.navigation.navigate('More', {
      type
    })
  }

  render() {
    return (
      <View style={ styles.hotBox }>
        {/* 热门推荐 */ }
        <View style={ styles.hotMain }>
          <View style={ styles.titleBox }>
            <Text style={ styles.hotTitle }>热门推荐</Text>
            <View style={ styles.more }>
              <TouchableOpacity
                onPress={ () => { this.goMore(1) } }
              >
                <Text style={ { color: '#999' } }>更多</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={ styles.gap }></View>
          <View style={ styles.flatBox }>
            <FlatList
              horizontal={ true }
              data={ this.props.homebookReducer.type1 }
              renderItem={ this.renderFlat.bind(this) }
            >
            </FlatList>
          </View>
        </View>
        {/* 最新推荐 */ }
        <View style={ styles.hotMain }>
          <View>
            <Text style={ styles.hotTitle }>最新推荐</Text>
            <View style={ styles.more }>
              <TouchableOpacity
                onPress={ () => { this.goMore(2) } }
              >
                <Text style={ { color: '#999' } }>更多</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={ styles.gap }></View>
          <View style={ styles.flatBox }>
            <FlatList
              horizontal={ true }
              data={ this.props.homebookReducer.type2 }
              renderItem={ this.renderFlat.bind(this) }
            >
            </FlatList>
          </View>
        </View>
        {/* 出版社 */ }
        <View style={ { backgroundColor: '#fff', marginBottom: 10, paddingTop: 10, paddingBottom: 10 } }>
          <View>
            <Text style={ styles.hotTitle }>出版社</Text>
            <View style={ styles.more }>
              <Text style={ { color: '#999' } }>更多</Text>
            </View>
          </View>
        </View>
        {/* 免费推荐 */ }
        <View style={ { backgroundColor: '#fff', marginBottom: 10, paddingTop: 10, paddingBottom: 10 } }>
          <View>
            <Text style={ styles.hotTitle }>免费推荐</Text>
            <View style={ styles.more }>
              <TouchableOpacity
                onPress={ () => { this.goMore(3) } }
              >
                <Text style={ { color: '#999' } }>更多</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={ styles.flatBox }>
            <FlatList
              horizontal={ true }
              data={ this.props.homebookReducer.type3 }
              renderItem={ this.renderFlat.bind(this) }
            >
            </FlatList>
          </View>
        </View>
      </View>
    )
  }
}

export default Homebook