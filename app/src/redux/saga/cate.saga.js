import { put, call, takeEvery, select } from 'redux-saga/effects' 
import * as actionTypes from '../actionType'
import { combineType } from '../../../untils/combineType'
import Toast from 'react-native-root-toast'
import { default as Storage } from '../../../untils/storage'
import * as API from '../../service/cate.service'


function* getCateSaga(action) {
  console.log('gggg')
  let res = yield call(API.getCate)
  console.log(res, 'getcate')
  if(res.code === '000') {
    yield put({type: actionTypes.GET_CATE, payload: {list: res.data}})
  }
}

 
//watcher saga 监听takeEvery这个action 并执行helloSaga
export const Type = 'CATE'
export function* catelWatchSaga() {
  console.log('watcher saga is listening to action!!!!')
  yield takeEvery(combineType(Type, actionTypes.GET_CATE), getCateSaga)
}