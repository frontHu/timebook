import pxToDp from './../../../../untils/pxToDp'
export default {
  body: {
    width: '100%',
    marginTop: pxToDp(20),
    backgroundColor: '#fff'
  },
  head: { 
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  tab: {
    flexGrow: 1,
    height: pxToDp(100),
  },
  text: {
    textAlign: 'center',
    lineHeight: pxToDp(100),
    color: '#666'
  },
  tabBody: {
    // maxHeight: 158,
    padding: 20
  },
  tabBodyText: {
    lineHeight: pxToDp(61000)
  }
}