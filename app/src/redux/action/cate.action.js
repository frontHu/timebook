import * as actionTypes from '../actionType'
import { Type } from '../saga/cate.saga'

export function getCateAction() {
  return { type: `${Type}_${actionTypes.GET_CATE}`}
}