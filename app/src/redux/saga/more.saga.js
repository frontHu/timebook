import { put, call, takeEvery, select } from 'redux-saga/effects' 
import * as actionTypes from '../actionType'
import { combineType } from '../../../untils/combineType'
import Toast from 'react-native-root-toast'
import { default as Storage } from '../../../untils/storage'
import * as API from '../../service/more.service'


function* getMoreSaga(action) {
  let params = action.payload
  // console.log(params, 'params')
  let res = yield call(API.getMoreList, params)
  // console.log(res, 'res-params')
  if(res.code === '000') {
    yield put({type: actionTypes.MORE_LIST, payload: {list: res.data.datas}})
  }
}

 
//watcher saga 监听takeEvery这个action 并执行helloSaga
export const Type = 'MORE'
export function* moreWatchSaga() {
  console.log('watcher saga is listening to action!!!!')
  yield takeEvery(combineType(Type, actionTypes.MORE_LIST), getMoreSaga)
} 