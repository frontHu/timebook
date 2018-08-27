import * as actionTypes from '../actionType'
import { Type } from '../saga/search.saga'

export function getkeywordAction() {
  return {type: `${Type}_${actionTypes.GET_KEYWORD}`}
}

export function searchAction(params) {
  return {type: `${Type}_${actionTypes.GET_SEARCH_LIST}`, payload: params }
}