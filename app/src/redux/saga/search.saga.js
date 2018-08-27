import { put, call, takeEvery, select } from 'redux-saga/effects' 
import * as actionTypes from '../actionType'
import { combineType } from '../../../untils/combineType'
import Toast from 'react-native-root-toast'
import { default as Storage } from '../../../untils/storage'
import * as API from '../../service/search.service'


function* getKeyWordSaga(action) {
  let res = yield call(API.getKeyword)
  console.log(res, 'res')
  if(res.code === '000') {
    yield put({type: actionTypes.GET_KEYWORD, payload: {keyword: res.data}})
  }
}
 //狄仁杰
function* getsearchBook(action) {
  let res = yield call(API.searchBook, action.payload)
  console.log(res, 'res')
  if(res.code === '000') {
    console.log(res.data.datas, 'datasss')
    yield put({type: actionTypes.GET_SEARCH_LIST, payload: {searchlist: res.data.datas}})
    
  }
}

 
//watcher saga 监听takeEvery这个action 并执行helloSaga
export const Type = 'SEARCH'
export function* searchWatcherSaga() {
  console.log('watcher saga is listening to action!!!!')
  yield takeEvery(combineType(Type, actionTypes.GET_KEYWORD), getKeyWordSaga)
  yield takeEvery(combineType(Type, actionTypes.GET_SEARCH_LIST), getsearchBook)
}