import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity 
} from 'react-native'
import pxToDp from './../../../untils/pxToDp'
import {fomatDate} from './../../../untils/fomatDate'

class Comment extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
  }

  render() {
    console.log(this.props.comment, 'comment') 
    let comment = this.props.comment.length > 2 ? this.props.comment.slice(0, 2) : this.props.comment
    return (
      <View>
        {
          comment.length > 0 && comment.map((child, index) => {
            return (
              <View 
                style={{flexDirection:'row',marginBottom: pxToDp(30)}}
                key={index}
              >
                <View style={{marginRight: pxToDp(10)}}>
                  <Image 
                    style={{width: pxToDp(50),height: pxToDp(50), borderRadius: pxToDp(25)}} 
                    source={{uri: child.creator.avatar}}
                  ></Image>
                </View>
                <View style={{flex: 1}}>
                  <View style={{marginBottom: pxToDp(20)}}>
                    <Text>{child.creator.name}</Text>
                  </View>
                  <View style={{marginBottom: pxToDp(20)}}>
                    <Text>{child.content}</Text>
                  </View>
                  <View style={{marginBottom:pxToDp(10)}}>
                    {
                      child.replys.length > 0 && child.replys.slice(0, 4).map((item, index) => {
                        return (
                          <View style={{padding: pxToDp(10),backgroundColor: '#f3f3f5',justifyContent:'flex-start',flexDirection:'row',alignItems:'center'}}> 
                            <Text style={{color: '#3478f7'}}>{`${item.creator.name}:  `}</Text>
                            <Text>{item.content}</Text>
                          </View>
                        )
                      })
                    }
                    <View>
                      <TouchableOpacity>
                        {
                          child.replys.length > 4 ?
                          <Text style={{color: '#3478f7'}}>
                            更多{child.replys.length - 4}条评论
                          </Text> : null
                        }
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                    <Text style={{color:'#b1b1b1'}}>{fomatDate(child.createTime)}</Text>
                    <View style={{flexDirection:'row', alignItems: 'center'}}> 
                      <TouchableOpacity>
                        <Image style={{width:pxToDp(40),height:pxToDp(40)}} source={require('./../../assets/zan.png')}></Image>
                      </TouchableOpacity>
                      <TouchableOpacity style={{marginLeft: pxToDp(10)}}>
                        <Image style={{width:pxToDp(35),height:pxToDp(35)}} source={require('./../../assets/comment.png')}></Image>
                      </TouchableOpacity>
                      <TouchableOpacity style={{marginLeft: pxToDp(10)}}>
                        <Image style={{width:pxToDp(40),height:pxToDp(40)}} source={require('./../../assets/delete.png')}></Image>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )
          })
        }
        {
          this.props.comment.length > 2 ?
          <View style={{alignItems:'center'}}>
            <TouchableOpacity>
              <Text style={{color: '#b1b1b1'}}>更多评论>></Text>
            </TouchableOpacity>
          </View> : null
        }
        
      </View>
    )
  }
}

export default Comment