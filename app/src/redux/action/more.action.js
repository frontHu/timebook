import * as actionTypes from './../actionType'
import { Type } from './../saga/more.saga'

//获取更多列表
export function getMoreAction(params) {
  return {type: `${Type}_${actionTypes.MORE_LIST}`, payload: params}
}