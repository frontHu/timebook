import * as actionTypes from './../actionType'
import { Type } from './../saga/user.saga'

// 验证码登录
export function phonecodeLoginAction(params) {
  return {type: `${Type}_${actionTypes.CODE_LOGIN}`, payload: params}
}

//获取验证码
export function getPhonecode(params) {
  return {type: `${Type}_${actionTypes.GET_CODE}`, payload: params}
}

//注册
export function registerAction(params) {
  return {type: `${Type}_${actionTypes.REG_USER}`, payload: params}
}

//获取用户信息
export function getUserInfoAction(params) {
  return {type: `${Type}_${actionTypes.USER_INFO}`, payload: params}
}