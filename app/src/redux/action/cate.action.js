import * as actionTypes from '../actionType'
import { Type } from '../saga/cate.saga'

export function getCateAction() {
  console.log('itoooo')
  return { type: `${Type}_${actionTypes.GET_CATE}`}
}