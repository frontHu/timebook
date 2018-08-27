import { put, call, takeEvery, select } from 'redux-saga/effects' 
import * as actionTypes from '../actionType'
import { combineType } from '../../../untils/combineType'
import Toast from 'react-native-root-toast'
import { default as Storage } from '../../../untils/storage'
import * as API from '../../service/detail.service'

function* getbookDetail(action) {
  let { bookId } = action.payload
  let res = yield call(API.getBookDetail, {bookId})
  if(res.code === '000') {
    yield put({type: actionTypes.BOOK_DETAIL, payload: res.data})
  }
}

function* getMenuSaga(action) {
  let { book_uid } = action.payload
  let res = yield call(API.getMenu, {book_uid})
  if(res.code === '000') {
    yield put({type: actionTypes.BOOK_DETAIL, payload: {bookmenu: res.data}})
  } 
}

function* getbookCommentSaga(action) { 
  let { book_uid } = action.payload 
  let res = yield call(API.getComment, {book_uid})
  yield put({type: actionTypes.BOOK_DETAIL, payload: {comment: res.datas}})
}

function* submitCommentSaga(action) { 
  let res = yield call(API.bookComment, action.payload)
  if(res.code === '000') {
    let bookdetailReducer = yield select(state => state.bookdetailReducer)
    res.data.replys=[]
    bookdetailReducer.comment.unshift(res.data)
    // console.log(bookdetailReducer, 'bookdetailReducer')
    yield put({type: actionTypes.BOOK_DETAIL, payload: bookdetailReducer})
  }
}
 
//watcher saga 监听takeEvery这个action 并执行helloSaga
export const Type = 'DETAIL'
export function* detailWatchSaga() {
  console.log('watcher saga is listening to action!!!!')
  yield takeEvery(combineType(Type, actionTypes.BOOK_DETAIL), getbookDetail)
  yield takeEvery(combineType(Type, actionTypes.GET_MENU), getMenuSaga)
  yield takeEvery(combineType(Type, actionTypes.GET_COMMENT), getbookCommentSaga)
  yield takeEvery(combineType(Type, actionTypes.SUBMIT_COMMENT), submitCommentSaga)
}