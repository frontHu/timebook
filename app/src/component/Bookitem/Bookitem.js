import React from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text
} from 'react-native'
import style from './style/style'

const styles = StyleSheet.create(style)


class Bookitem extends React.Component {
  constructor(props) {
    super(props)
  }

  goDetail(bookId) {
    this.props.navigation.navigate('Detail', {
      'bookId': bookId
    })
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={ styles.specialItem }
          onPress={ this.goDetail.bind(this, this.props.bookId) }
        >
          <View style={ styles.imgItem }>
            <View style={ styles.imgShadow }>
              <Image style={ styles.Img } source={ { uri: this.props.bookCover } } />
            </View>
            <View style={ styles.title }>
              <Text numberOfLines={ 1 }>{ this.props.bookName }</Text>
            </View>
            <View>
              {
                this.props.discountPrice === 0 ?
                  <Text style={ styles.free }>免费</Text> :
                  <Text style={ styles.price }>{ `￥${this.props.discountPrice}` }</Text>
              }
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Bookitem