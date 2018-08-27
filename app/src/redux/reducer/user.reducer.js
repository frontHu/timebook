import * as actionType from './../actionType'

const initState = {
  'timeNumber': 0, //倒计时
  'getCodeText': '获取验证码', //验证码提示
  'username': '', //用户名
  'password': '', //密码
  'avatar': '', //头像
  'code': '', //验证码
  'newUser': 0,
  'uid': '',
  'token': '',
  'msg': ''
}

export function userReducer(state=initState, action) {
  switch(action.type) {
    case actionType.USER_UPDATA:
      return {...state, ...action.payload}
    default:
      return {...state}
  }
}