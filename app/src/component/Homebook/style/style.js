import pxToDp from './../../../../untils/pxToDp'

export default {
  hotBox: {
    width: '100%',
    marginTop: pxToDp(20)
  },
  hotMain: {
    backgroundColor: '#fff',
    marginBottom: pxToDp(20),
    paddingTop: pxToDp(20)
  },
  titleBox: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  hotTitle: {
    textAlign: 'center',
    marginBottom: pxToDp(20)
  },
  more: {
    position:'absolute',
    right: pxToDp(20)
  },
  gap: {
    width: pxToDp(50),
    height: pxToDp(5),
    backgroundColor: '#ffbf01',
    alignSelf: 'center',
    marginBottom: pxToDp(20)
  },
  flatBox: {
    width:'100%',
    // height: pxToDp(300),
    paddingBottom: pxToDp(20)
  },
  specialItem: {
    width: pxToDp(200),
    marginLeft: pxToDp(10),
    marginRight: pxToDp(10)
  },
  Img: {
    width: '100%',
    height: pxToDp(240),
    marginBottom: pxToDp(10)
  },
  imgShadow: {
    shadowColor:'#ccc', 
    shadowOffset:{width: pxToDp(3), height: pxToDp(2)},
    shadowRadius: pxToDp(7),
    shadowOpacity: 1,
  },
  title: {
    marginBottom: pxToDp(5)
  },
  price: {
    color: 'red'
  },
  free: {
    color: '#fff',
    backgroundColor: '#ffbf01',
    width: pxToDp(70),
    padding: pxToDp(5)
  }
}