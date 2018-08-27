import { all } from 'redux-saga/effects'
import { userWathcerSaga } from './user.saga'
import { homeWatcherSaga } from './home.saga'
import { detailWatchSaga } from './detail.saga'
import { catelWatchSaga } from'./cate.saga'
import { searchWatcherSaga } from './search.saga'
import { moreWatchSaga } from './more.saga'

export default function* rootSaga() {
  yield all([
    userWathcerSaga(),
    homeWatcherSaga(),
    detailWatchSaga(),
    catelWatchSaga(),
    searchWatcherSaga(),
    moreWatchSaga()
  ])
}