import pxToDp from './../../../../untils/pxToDp'
export default {
  searchbox: {
    flex: 1,
    backgroundColor: '#fff'
  },
  searchInput: {
    width: '100%',
    height: pxToDp(100),
    backgroundColor: 'rgb(61, 60, 62)',
    padding: pxToDp(20),
    borderTopWidth: 1,
    borderTopColor: '#333',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  input: {
    width: '95%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: pxToDp(50),
    paddingLeft: pxToDp(20),
    color: 'rgb(61, 60, 62)'
  },
  searchContent: {
    padding: pxToDp(20)
  },
  searchIcon: {
    width: pxToDp(40),
    height: pxToDp(40),
    position: 'absolute',
    // alignSelf: 'flex-end'
    right: pxToDp(20),
    top: '50%',
    marginTop: -pxToDp(10)
  },
  keyword: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: pxToDp(20)
  },
  keyItem: {
    padding: pxToDp(20),
    backgroundColor: '#f4f4f4',
    color: '#666',
    marginRight: pxToDp(20),
    marginBottom: pxToDp(20)
  }
}