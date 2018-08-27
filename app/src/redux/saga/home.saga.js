import { put, call, takeEvery, select } from 'redux-saga/effects' 
import * as actionTypes from './../actionType'
import { combineType } from './../../../untils/combineType'
import { Base64 } from 'js-base64'
import Toast from 'react-native-root-toast'
import { default as Storage } from './../../../untils/storage'
import * as API from './../../service/home.service'

 
//获取书本
function* getBookSaga(action) {
  let params = action.payload
  let res = yield call(API.getBook, params)
  // console.log(res, 'res')
  if(res.code === '000') {
    yield put({type: actionTypes.GET_BOOK, payload: res.data})
  }
}


//watcher saga 监听takeEvery这个action 并执行helloSaga
export const Type = 'BOOK'
export function* homeWatcherSaga() {
  console.log('watcher saga is listening to action!!!!')
  yield takeEvery(combineType(Type, actionTypes.GET_BOOK), getBookSaga)
}