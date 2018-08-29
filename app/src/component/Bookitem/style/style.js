import pxToDp from './../../../../untils/pxToDp';

export default {
  specialItem: {
    width: pxToDp(200),
    marginLeft: pxToDp(10),
    marginRight: pxToDp(10),
    marginTop: pxToDp(40)
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