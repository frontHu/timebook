import { put, call, takeEvery, select } from 'redux-saga/effects' 
import { delay } from 'redux-saga'
import * as actionTypes from './../actionType'
import * as API from './../../service/user.service'
import { combineType } from './../../../untils/combineType'
import { Base64 } from 'js-base64'
import Toast from 'react-native-root-toast'
import { NavigationActions, StackActions } from 'react-navigation'
import { default as Storage } from './../../../untils/storage'

//worker saga 这里其实是有接收参数的 这个参数action就是redux执行dispatch方法中的参数

//获取验证码
function* getCode(action) {
  let params = { 
    mobile: action.payload.mobile, 
    type: action.payload.type 
  }
  let res = yield call(API.sendCode, params)
  if(res.code === '000') {
    yield put({type: actionTypes.USER_UPDATA, payload: {timeNumber: 60}})
    Toast.show('发送成功，请注意查收')
  }else {
    Toast.show('网络错误')
  }
}

//登录
function* phonecodeLogin(action) {
  let { type, mobile, password, phoneCode } = action.payload
  let params = { "mobile":  mobile}
  if(type === 'pwd') {
    params["password"] = Base64.encode(password)
  }else {
    params["phoneCode"] = phoneCode
  }
  let res = yield call(API.login, params)
  if(res.code === '000') {
    yield put({type: actionTypes.USER_UPDATA, payload: {...res.data}})
    Storage.set('ts-token', res.data.token) 
    Storage.set('ts-uid', res.data.uid)
    Toast.show('登录成功') 
    yield put({type: `USER_${actionTypes.USER_INFO}`})
    // console.log(NavigationActions, 'NavigationActions')
    // console.log(StackActions, 'StackActions')
    yield put(StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'DrawerNav' })],
    }))
    // yield put(NavigationActions.navigate({routeName: 'Home'}))
  }else {
    Toast.show(res.msg)
    yield put({type: actionTypes.USER_UPDATA, payload: {msg: res.msg}})
  }
}

//用户注册
function* registerUser(action) {
  let {code, mobile, password, verifyCode, type} = action.payload
  let params = {
    code, 
    mobile, 
    password, 
    verifyCode: code
  }
  let res = yield call(API.register, params)
  if(res.code === '000') {
    yield put({type: actionTypes.USER_UPDATA, payload: {...res.data}})
    Toast.show('注册成功') 
    yield put(NavigationActions.navigate({routeName: 'Login'}))
  }else {
    Toast.show(res.msg)
    yield put({type: actionTypes.USER_UPDATA, payload: {msg: res.msg}})
  }
}


//获取用户信息
function* getUserInfoSaga(action) {
  let res = yield call(API.getUserInfo, {})
  yield put({type: actionTypes.USER_UPDATA, payload: {...res.data}})
}



//watcher saga 监听takeEvery这个action 并执行helloSaga
export const Type = 'USER'
export function* userWathcerSaga() {
  console.log('watcher saga is listening to action!!!!')
  yield takeEvery(combineType(Type, actionTypes.GET_CODE), getCode)
  yield takeEvery(combineType(Type, actionTypes.CODE_LOGIN), phonecodeLogin)
  yield takeEvery(combineType(Type, actionTypes.REG_USER), registerUser)
  yield takeEvery(combineType(Type, actionTypes.USER_INFO), getUserInfoSaga)
}