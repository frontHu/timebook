import React from 'react'
import {
  View,
  Image,
  Text,
  Button
} from 'react-native'
import styles from './style/style'
import { fomatDate } from './../../../untils/fomatDate'
import TextButton from './../../common/TextButton' 

class Detailhead extends React.Component {
  constructor(props) {
    super(props)
  }

  btnHanle() {
    this.props.navigation.navigate('Read', {
      bookuid: this.props.bookuid
    })
  }

  render() {
    return (
      <View style={styles.headbox}>
        <View style={{
          display:'flex',
          flexDirection:'row'
        }}>
          <View style={styles.book}>
            <Image style={{width:'100%',height:'100%'}} source={require('./../../assets/book.jpg')}></Image>
          </View>
          <View style={{justifyContent: 'space-around'}}> 
            <View style={styles.bookinfo}> 
              <Text style={{fontSize:16}}>{this.props.bookName}</Text>
            </View>
            <View style={styles.bookinfo}>
              <Text style={{fontSize:14,color:'#999'}}>{this.props.commentNum}人评论|{this.props.readNum}人在读</Text>
            </View>
            <View style={styles.bookinfo}>
              <Text style={{color:'#666'}}>作者: <Text style={{color:'#333'}}>{this.props.author}</Text></Text>
            </View>
            <View style={styles.bookinfo}>
              <Text style={{color:'#666'}}>出版社: <Text style={{color:'#333'}}>{this.props.pressName}</Text></Text>
            </View> 
            <View style={styles.bookinfo}>
              <Text style={{color:'#666'}}>出版: <Text style={{color:'#333'}}>{fomatDate(this.props.createTime)}</Text></Text>
            </View>
            <View>
              <Text style={{color:'red'}}>￥{this.props.discountPrice} </Text>
              {/* <Text style={{color:'#666',marginLeft:20}}>原价:￥22.9</Text> s */}
            </View>
          </View> 
        </View>
        <View style={styles.btn}>
          <TextButton 
            text='阅读'
            onPress={this.btnHanle.bind(this)}
            btnStyle={styles.read}
            // textStyle={{col}}
          ></TextButton>
          <TextButton 
            text='购买'
            onPress={this.btnHanle.bind(this)}
            btnStyle={styles.buy}

          ></TextButton>
        </View>
      </View>
    )
  }
}

export default Detailhead