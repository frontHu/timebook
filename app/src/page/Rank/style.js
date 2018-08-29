import pxToDp from './../../../untils/pxToDp'
export default {
  rankBox: {
    marginTop: pxToDp(20)
  },
  rankItem: {
    backgroundColor: '#fff',
    padding: pxToDp(20),
    marginBottom: pxToDp(20)
  },
  rankHead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  rankTitle: {
    textAlign: 'center',
    fontSize: pxToDp(36)
  },
  rankMore: {
    position: 'absolute',
    right: 0
  },
  rankGap: {
    width: pxToDp(50),
    height: pxToDp(5),
    backgroundColor: '#ffbf01',
    alignSelf: 'center',
    marginTop: pxToDp(20)
  }
}