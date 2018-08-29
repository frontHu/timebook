import * as actionType from './../actionType'

const initState = {
  1:[],
  2:[],
  3:[],
  4:[],
  5:[]
}

export function rankReducer(state=initState, action) {
  switch(action.type) {
    case actionType.RANK_LIST:
      console.log(action.payload, 'action.payload')
      return {...state, ...action.payload}
    default:
      return state
  }
}