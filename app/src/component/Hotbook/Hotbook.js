import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import pxToDp from '../../../untils/pxToDp'

const styles = StyleSheet.create({
  hotbook: {
    backgroundColor: '#fff',
    marginTop: pxToDp(20)
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: pxToDp(40),
    paddingRight: pxToDp(40),
    paddingTop: pxToDp(20),
    paddingBottom: pxToDp(20),
    borderBottomWidth: 1,
    borderBottomColor: '#c7c7c7'
  },
  titleGap: {
    borderLeftWidth: pxToDp(5),
    borderLeftColor: '#ffbf01',
    paddingLeft: pxToDp(20)
  },
  hotbox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: pxToDp(20),
    paddingBottom: pxToDp(20)
  },
  hotItem: {
    width: pxToDp(170)
  },
  hotboxImage: {
    width: pxToDp(170),
    height: pxToDp(200),
    
  },
  imgbox: {
    shadowColor:'#ccc', 
    shadowOffset:{width: pxToDp(3), height: pxToDp(2)},
    shadowRadius: pxToDp(7),
    shadowOpacity: 1,
  },
  hotbookTitle: {
    marginTop: pxToDp(5)
  },
  hotbookPrice: {
    color: 'red'
  }
})

class Hotbook extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      booklist: this.props.type1,
      showlist: [],
      hotbookIndex: 0
    }
  }

  componentDidMount() {
    this.randomBook(this.state.booklist)
  }

  randomBook(list) {
    let len = list.length
    let hotbookIndex = this.state.hotbookIndex + 3
    if(hotbookIndex > len - 1) {
      hotbookIndex = 0
    }
    // console.log(hotbookIndex, 'hotbookIndex')
    this.setState({
      hotbookIndex,
      showlist: this.state.booklist.slice(hotbookIndex, hotbookIndex+3)
    })
  }

  render() {
    let booklist = this.props.type1
    return (
      <View style={styles.hotbook}>
        <View style={styles.title}>
          <View style={styles.titleGap}><Text>热门书籍</Text></View>
          <TouchableOpacity
            onPress={()=>{this.randomBook(this.state.booklist)}}
          >
            <View><Text style={{color:'#b1b1b1'}}>换一批</Text></View>
          </TouchableOpacity>

        </View>
        <View style={styles.hotbox}>
        {
          this.state.showlist.map((child, index) => {
            return (
              <View style={styles.hotItem} key={index}>
                <View style={styles.imgbox}>
                  <Image 
                    style={styles.hotboxImage} 
                    source={{uri: child.bookCover}}
                  ></Image>
                </View>
                <View>
                  <Text 
                    numberOfLines={1}
                    style={styles.hotbookTitle}
                  >{child.bookName}</Text>
                  <Text style={styles.hotbookPrice}>{`￥${child.discountPrice}`}</Text>
                </View>
              </View>
            )
          })
        }
        </View>
      </View>
    )
  } 
}

export default Hotbook