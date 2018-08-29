import { put, call, takeEvery, select } from 'redux-saga/effects' 
import * as actionTypes from '../actionType'
import { combineType } from '../../../untils/combineType'
import Toast from 'react-native-root-toast'
import { default as Storage } from '../../../untils/storage'
import * as API from '../../service/rank.service'

function* getRankListSaga(action) {
  let payload = action.payload
  let type = payload.type  
  let res = yield call(API.getRankList, payload)
  console.log(res.data.title, 'res')
  if(res.code === '000') {
    if(res.data.title === '畅销榜') {
      yield put({type: actionTypes.RANK_LIST, payload: {1: res.data.datas}})
    }else if(res.data.title === '新书榜') {
      yield put({type: actionTypes.RANK_LIST, payload: {2: res.data.datas}})
    }else if(res.data.title === '热搜榜') {
      yield put({type: actionTypes.RANK_LIST, payload: {3: res.data.datas}})
    }else if(res.data.title === '人气榜') {
      yield put({type: actionTypes.RANK_LIST, payload: {4: res.data.datas}})
    }else if(res.data.title === '免费榜') {
      yield put({type: actionTypes.RANK_LIST, payload: {5: res.data.datas}})
    }
  }
}

//watcher saga 监听takeEvery这个action 并执行helloSaga
export const Type = 'RANK'
export function* rankWatchSaga() {
  yield takeEvery(combineType(Type, actionTypes.RANK_LIST), getRankListSaga)
}