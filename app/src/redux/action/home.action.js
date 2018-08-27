import * as actionTypes from './../actionType'
import { Type } from './../saga/home.saga'

export function getBookAction(params) {
  return {type: `${Type}_${actionTypes.GET_BOOK}`, payload: params}
}
