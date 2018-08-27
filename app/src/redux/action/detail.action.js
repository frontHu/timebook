import * as actionTypes from '../actionType'
import { Type } from '../saga/detail.saga'

export function bookdetailAction(params) {
  return {type: `${Type}_${actionTypes.BOOK_DETAIL}`, payload: params}
}

export function getbookMenu(params) {
  return {type: `${Type}_${actionTypes.GET_MENU}`, payload: params}
}

export function getbookComment(params) {
  return {type: `${Type}_${actionTypes.GET_COMMENT}`, payload: params}
}

export function changeCurrentType(params) {
  return {type: actionTypes.BOOK_DETAIL, payload: params}
}

export function submitcomment(params) {
  // console.log(params, 'params')
  return {type: `${Type}_${actionTypes.SUBMIT_COMMENT}`, payload: params}
}