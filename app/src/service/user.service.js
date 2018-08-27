import request from './../../untils/request'


//获取验证码{mobile:,type:1}
export function sendCode(data) {
  // console.log(data, 'sencode')
  return request('/member/sendCode', {
    method: 'POST',
    body: data,
  })
}

//登录
export function login(data) {
  return request('/member/login', {
    method: 'POST',
    body: data,
  })
}

//用户注册
// code:"22222"
// mobile:"18355160993"
// password:"MTExMTExMQ=="
// verifyCode:"22222"
export function register(data) {
  return request('/member/register', { 
    method: 'POST',
    body: data,
  })
}

//获取用户信息
export function getUserInfo(data) {
  return request('/member/userInfo', { 
    method: 'POST',
    body: data,
  })
}
