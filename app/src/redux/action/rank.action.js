import * as actionType from './../actionType'
import { Type } from './../saga/rank.saga'

export function getRankAction(params) {
  return {type: `${Type}_${actionType.RANK_LIST}`, payload: params}
}