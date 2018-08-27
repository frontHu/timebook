import React from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Text
} from 'react-native'
import TextButton from './../../common/TextButton'
import styles from './style/style'
import * as userActions from '../../redux/action/user.action'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Toast from 'react-native-root-toast'
import * as actionTypes from './../../redux/actionType'
import pxToDp from '../../../untils/pxToDp';

class Reg extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: this.props.navigation.getParam('type'),
      mobile: '',
      password: '',
      password2: '',
      code: '',
      verifyCode: ''
    }
    this.actions = bindActionCreators(Object.assign({}, userActions), this.props.dispatch)
    this.timer = null
  }

  static navigationOptions = {
    header: null
  }

  inputHandle(type, value) {
    this.setState({
      [type]: value
    })
  }

  //清除
  clear(type) {
    this.setState({
      [type]: ''
    })
  }

  //注册
  register() {
    if(!/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(this.state.mobile) || !this.state.password){
      Toast.show('请输入正确的手机号和密码')
      return  
    }else if(!this.state.code) {
      
      Toast.show('请输入验证码')
      return 
    }else if(this.state.password !== this.state.password2) {
      Toast.show('两次密码不一致')
      return   
    }
    this.actions.registerAction(this.state)
  }

  //获取验证码
  getCode() {
    let { timeNumber } = this.props.userReducer
    if(!/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(this.state.mobile)){
      Toast.show('请输入正确的手机号')
      return  
    }

    if(timeNumber > 0) return
    this.actions.getPhonecode({
      'mobile': this.state.mobile,
      'type': '1'
    })
    this.setTimer()
  }

  //倒计时
  setTimer() {
    this.timer = setInterval(() => {
      let timeNumber = this.props.userReducer.timeNumber
      if( timeNumber <= 0 ) {
        clearInterval(this.timer)
        this.props.dispatch({
          type: actionTypes.USER_UPDATA,
          payload: {timeNumber: 0}
        })
      }else {
        this.props.dispatch({
          type: actionTypes.USER_UPDATA,
          payload: {timeNumber: timeNumber - 1, getCodeText: '再次获取'}
        })
      }
    },1000)
  }

  render() {
    return (
      <View style={styles.regBox}>
        <Image style={styles.regBg} source={require('./../../assets/login-bg.jpg')}></Image>
        <View style={styles.regMain}>
          <View style={styles.regLogo}>
            <Image style={styles.regLogoImg} source={require('./../../assets/logo.png')}></Image>
          </View>
          <View style={styles.inputBox}>
            <View style={styles.inputPhoneBox}>
              <Image style={styles.inputPhoneLogo} source={require('./../../assets/phone.png')}></Image>
              <TextInput 
                style={styles.inputPhone}
                placeholderTextColor='#c7c7c7'
                placeholder='请输入手机号'
                value={this.state.mobile}
                onChangeText={(text)=>{this.inputHandle('mobile', text)}}
              ></TextInput>
              <TouchableOpacity
                onPress={this.clear.bind(this, 'mobile')}
              >
                <Image style={styles.inputClose} source={require('./../../assets/close.png')}></Image>
              </TouchableOpacity>
            </View>
            <View style={styles.inputCodeBox}>
                <Image style={styles.inputCodeLogo} source={require('./../../assets/dunpai.png')}></Image>
                <TextInput
                  style={styles.inputCode}
                  placeholderTextColor='#c7c7c7'
                  placeholder='请输入验证码'
                  value={this.state.code}
                  onChangeText={(text)=>{this.inputHandle('code', text)}}
                ></TextInput>
                <View style={styles.getCode}>
                  <TouchableOpacity
                    onPress={this.getCode.bind(this)}
                  >
                    <Text style={styles.getCodeFont}>
                      { 
                        this.props.userReducer.timeNumber > 0 ? 
                        `${this.props.userReducer.timeNumber}s` : this.props.userReducer.getCodeText 
                      }
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.inputPwdBox}>
                <Image style={styles.inputPwdLogo} source={require('./../../assets/icon_key.png')}></Image>
                <TextInput 
                  style={styles.inputPwd}
                  placeholderTextColor='#c7c7c7'
                  placeholder='请输入密码'
                  value={this.state.password}
                  onChangeText={(text)=>{this.inputHandle('password', text)}}
                ></TextInput>
                <TouchableOpacity
                  onPress={this.clear.bind(this, 'password')}
                >
                  <Image style={styles.inputClose} source={require('./../../assets/close.png')}></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.inputPwdBox}>
                <Image style={styles.inputPwdLogo} source={require('./../../assets/icon_key.png')}></Image>
                <TextInput 
                  style={styles.inputPwd}
                  placeholderTextColor='#c7c7c7'
                  placeholder='请输入密码'
                  value={this.state.password2}
                  onChangeText={(text)=>{this.inputHandle('password2', text)}}
                ></TextInput>
                <TouchableOpacity
                  onPress={this.clear.bind(this, 'password2')}
                >
                  <Image style={styles.inputClose} source={require('./../../assets/close.png')}></Image>
                </TouchableOpacity>
              </View>
            <View style={{marginTop: pxToDp(40)}}>
              <TextButton 
                text={this.state.type==='reg' ? '注册':'修改密码'}
                textStyle={{color:'#000'}}
                onPress={this.register.bind(this)}
              />
            </View>
          </View>
        </View>
        <View style={styles.goReg}>
          <Text style={{color:'#b1b1b1'}}>已有账号?</Text>
          <TouchableOpacity
            onPress={ ()=> {
              this.props.navigation.navigate('Login')
            }}
          >
            <Text style={{color: '#ffbf01'}}>立即登录</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    userReducer: state.userReducer
  }
}
export default connect(mapStateToProps)(Reg)