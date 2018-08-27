import pxToDp from './../../../../untils/pxToDp'

export default {
  loginBox: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  loginBg: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: '100%',
    height: '100%'
  },
  loginContent: {
    width: '100%',
    height: '100%',
    paddingLeft: pxToDp(134),
    paddingRight: pxToDp(134)
  },
  loginLogo: {
    width: '100%',
    // height: '100%',
    marginTop: pxToDp(150),
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  loginLogoImage: {
    width: pxToDp(305),
    height: pxToDp(139)
  },
  inputBox: {
    marginTop: pxToDp(70)
  },
  inputPhoneBox: {
    borderBottomWidth: 1,
    borderBottomColor: '#c7c7c7',
    paddingLeft: pxToDp(60),
    position: 'relative',
    paddingBottom: pxToDp(10)
  },
  inputPhoneLogo: {
    width: pxToDp(40),
    height: pxToDp(40),
    position: 'absolute',
    left: 0,
    bottom: pxToDp(10)
  },
  inputPhone: {
    color: '#c7c7c7',
    fontSize: pxToDp(30)
  },
  inputClose: {
    width: pxToDp(40),
    height: pxToDp(40),
    position: 'absolute',
    right: 0,
    bottom: pxToDp(0)
  },
  inputPwdBox: {
    borderBottomWidth: 1,
    borderBottomColor: '#c7c7c7',
    paddingLeft: pxToDp(60),
    position: 'relative',
    paddingBottom: pxToDp(10),
    marginTop: pxToDp(50)
  },
  inputPwdLogo: {
    width: pxToDp(40),
    height: pxToDp(40),
    position: 'absolute',
    left: 0,
    bottom: pxToDp(10)
  },
  inputPwd: {
    color: '#c7c7c7',
    fontSize: pxToDp(30)
  },
  loginOpt:{
    marginTop: pxToDp(10),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputCodeBox: {
    borderBottomWidth: 1,
    borderBottomColor: '#c7c7c7',
    paddingLeft: pxToDp(60),
    position: 'relative',
    paddingBottom: pxToDp(10),
    marginTop: pxToDp(50)
  },
  inputCodeLogo: {
    width: pxToDp(40),
    height: pxToDp(40),
    position: 'absolute',
    left: 0,
    bottom: pxToDp(10)
  },
  inputCode: {
    color: '#c7c7c7',
    fontSize: pxToDp(30)
  },
  getCode: {
    position: 'absolute',
    right: 0,
    bottom: pxToDp(10),
    backgroundColor: '#ff6b50',
    borderRadius: pxToDp(5),
    paddingLeft: pxToDp(10),
    paddingRight: pxToDp(10),
    paddingTop: pxToDp(10),
    paddingBottom: pxToDp(10)
  },
  getCodeFont: {
    color: '#fff'
  },
  goReg: {
    width: '100%',
    position: 'absolute',
    bottom: pxToDp(50),
    flexDirection: 'row',
    justifyContent: 'center'
  }
}