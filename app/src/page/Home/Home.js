import React from 'react'
import {
  Text,
  Image,
  StyleSheet,
  View,
  Alert,
  ScrollView
} from 'react-native'
import style from './style/style'
import Swiper from 'react-native-swiper'
import Homebook from './../../component/Homebook/Homebook'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as homeactions from './../../redux/action/home.action'


const styles = StyleSheet.create(style)

class Home extends React.Component {   
  constructor(props) {
    super(props)
    this.state = {

    }
    this.actions = bindActionCreators(Object.assign({}, homeactions), this.props.dispatch)
  }
  static navigationOptions = {
    title: 'Home',
    tabBarLabel: '首页',
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require('./../../assets/home-icon-normal.png')}
        style={[{height: 24, width: 24}, {tintColor: tintColor}]}
      />
    )
  }

  componentDidMount() {
    this.getbooklist() 
    this.props.navigation.navigate('Drawer');
  }

  //获取推荐列表
  getbooklist() {  
    let params = {type: [1, 2, 3], number: [12, 10, 10]}
    this.actions.getBookAction(params)
  }

  render() {
    // console.log(this.props, 'props')
    return (
      <View style={{overflow:'scroll'}}>
      <ScrollView>
        <View style={styles.headerStyle}>
          <Swiper 
            style={styles.wrapper} 
            showsButtons={false}
            autoplay={true}
            showsPagination={false}
            index={0}
          >
            <View style={styles.headerStyle}>
              <Image style={{width:'100%',height:'100%'}} source={require('./../../assets/banner1.jpg')}></Image>
            </View>
            <View style={styles.headerStyle}>
              <Image style={{width:'100%',height:'100%'}} source={require('./../../assets/banner1.jpg')}></Image>
            </View>
            <View style={styles.headerStyle}>
              <Image style={{width:'100%',height:'100%'}} source={require('./../../assets/banner1.jpg')}></Image>
            </View>
          </Swiper> 
        </View>
        <Homebook
          navigation={this.props.navigation}
          homebookReducer={this.props.homebookReducer}
        ></Homebook>
      </ScrollView>
      </View>
    )
  }
}
function mapStateToProps(state) {
  return {
    homebookReducer: state.homebookReducer
  } 
}
export default connect(mapStateToProps)(Home)