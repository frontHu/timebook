import pxToDp from '../../../../untils/pxToDp'
export default {
  headbox: {
    padding: pxToDp(30),
    backgroundColor: '#fff',
    // height: pxToDp(360)
  },
  book: {
    width: pxToDp(200),
    height: pxToDp(300),
    marginRight: 20
  },
  bookinfo: {
    // marginBottom: pxToDp(20)
  },
  btn: {
    display:'flex',
    flexDirection:'row',
    justifyContent: 'flex-start',
    marginTop: pxToDp(20),
  },
  read: {
    width: pxToDp(118),
    // height: pxToDp(60)
    marginRight: pxToDp(20),
    // backgroundColor: '#fff',
    // borderWidth: 1,
    // borderColor: '#ffbf01'
  },
  buy: {
    width: pxToDp(118),
    // height: pxToDp(60)
  }
}