import React from 'react'
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  Text,
  TouchableOpacity
} from 'react-native'
import TextButton from './../../common/TextButton'
import style from './style/style'
import * as userActions from '../../redux/action/user.action'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionTypes from './../../redux/actionType'
import Toast from 'react-native-root-toast'
import pxToDp from '../../../untils/pxToDp';
let styles = StyleSheet.create(style)

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.actions = bindActionCreators(Object.assign({}, userActions), this.props.dispatch)
    this.state = {
      mobile: '18305669123',
      phoneCode: '',
      pwd: '19920629',
      loginMethod: 'pwd', //默认密码登录 code
      isgetCode: false,
      second: 60,
      getCodeText: '获取验证码',

    }
    this.timer = null
  }
  static navigationOptions = {
    title: '登录',
    headerStyle: {
      backgroundColor: '#fff'
    },
    header: null
  }

  componentDidMount() { }

  //输入
  handleInput(type, v) {
    this.setState({
      [type]: v
    })
  }

  //获取验证码
  getPhoneCode() {
    let { timeNumber } = this.props.userReducer
    if (!/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(this.state.mobile)) {
      Toast.show('请输入正确的手机号')
      return
    }

    if (timeNumber > 0) return
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
      if (timeNumber <= 0) {
        clearInterval(this.timer)
        this.props.dispatch({
          type: actionTypes.USER_UPDATA,
          payload: { timeNumber: 0 }
        })
      } else {
        this.props.dispatch({
          type: actionTypes.USER_UPDATA,
          payload: { timeNumber: timeNumber - 1, getCodeText: '再次获取' }
        })
      }
    }, 1000)
  }

  login() {
    if (!/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(this.state.mobile) || !this.state.pwd) {
      Toast.show('请输入正确的手机号和密码')
      return
    }
    let params = {
      mobile: this.state.mobile,
      phoneCode: this.state.phoneCode,
      type: this.state.loginMethod,
      password: this.state.pwd
    }
    this.actions.phonecodeLoginAction(params)
  }

  loginHandle(type) {
    this.setState({
      loginMethod: type
    })
  }

  clear(type) {
    this.setState({
      [type]: ''
    })
  }

  render() {
    return (
      <View style={ styles.loginBox }>
        <Image style={ styles.loginBg } source={ require('./../../assets/login-bg.jpg') }></Image>
        <View style={ styles.loginContent }>
          <View style={ styles.loginLogo }>
            <Image style={ styles.loginLogoImage } source={ require('./../../assets/logo.png') }></Image>
          </View>
          <View style={ styles.inputBox }>
            <View style={ styles.inputPhoneBox }>
              <Image style={ styles.inputPhoneLogo } source={ require('./../../assets/phone.png') }></Image>
              <TextInput
                style={ styles.inputPhone }
                placeholderTextColor='#c7c7c7'
                placeholder='请输入手机号'
                value={ this.state.mobile }
                onChangeText={ (text) => { this.handleInput('mobile', text) } }
              ></TextInput>
              {
                this.state.mobile ?
                  <TouchableOpacity
                    onPress={ this.clear.bind(this, 'mobile') }
                  >
                    <Image
                      style={ styles.inputClose }
                      source={ require('./../../assets/close.png') }
                    ></Image>
                  </TouchableOpacity> : null
              }

            </View>
            {
              this.state.loginMethod === 'pwd' ?
                <View style={ styles.inputPwdBox }>
                  <Image style={ styles.inputPwdLogo } source={ require('./../../assets/icon_key.png') }></Image>
                  <TextInput
                    value={ this.state.pwd }
                    style={ styles.inputPwd }
                    placeholderTextColor='#c7c7c7'
                    placeholder='请输入密码'
                    onChangeText={ (text) => { this.handleInput('pwd', text) } }
                  ></TextInput>
                  {
                    this.state.pwd ?
                      <TouchableOpacity
                        onPress={ this.clear.bind(this, 'pwd') }
                      >
                        <Image
                          style={ styles.inputClose }
                          source={ require('./../../assets/close.png') }
                        ></Image>
                      </TouchableOpacity> : null
                  }

                </View> : null
            }
            {
              this.state.loginMethod === 'code' ?
                <View style={ styles.inputCodeBox }>
                  <Image style={ styles.inputCodeLogo } source={ require('./../../assets/dunpai.png') }></Image>
                  <TextInput
                    style={ styles.inputCode }
                    placeholderTextColor='#c7c7c7'
                    placeholder='请输入验证码'
                    onChangeText={ (text) => { this.handleInput('phoneCode', text) } }
                  ></TextInput>
                  <View style={ styles.getCode }>
                    <TouchableOpacity
                      onPress={ this.getPhoneCode.bind(this) }
                    >
                      <Text style={ styles.getCodeFont }>
                        {
                          this.props.userReducer.timeNumber > 0 ?
                            `${this.props.userReducer.timeNumber}s` : this.props.userReducer.getCodeText
                        }
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View> : null
            }

            <View style={ styles.loginOpt }>
              <TouchableOpacity
                onPress={ () => {
                  this.props.navigation.navigate('Reg', {
                    type: 'forget'
                  })
                } }
              ><Text style={ { color: '#b4b4b4' } }>忘记密码</Text></TouchableOpacity>
              {
                this.state.loginMethod === 'pwd' ?
                  <TouchableOpacity onPress={ this.loginHandle.bind(this, 'code') }><Text style={ { color: '#ffbf01' } }>手机验证码登录</Text></TouchableOpacity>
                  :
                  <TouchableOpacity onPress={ this.loginHandle.bind(this, 'pwd') }><Text style={ { color: '#ffbf01' } }>账号密码登录</Text></TouchableOpacity>
              }
            </View>
            <View>
              <TextButton
                text='登录'
                textStyle={ { color: '#000' } }
                btnStyle={ { marginTop: pxToDp(40) } }
                onPress={ this.login.bind(this) }
              />
            </View>
          </View>
        </View>
        <View style={ styles.goReg }>
          <Text style={ { color: '#b1b1b1' } }>没有账号?</Text>
          <TouchableOpacity
            onPress={ () => {
              this.props.navigation.navigate('Reg', {
                type: 'reg'
              })
            } }
          >
            <Text style={ { color: '#ffbf01' } }>立即注册</Text>
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
export default connect(mapStateToProps)(Login) 