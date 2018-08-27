import * as actionTypes from './../actionType'

const initState = {
  type1: [],
  type2: [],
  type3: []
}

export function homebookReducer(state=initState, action) {
  switch(action.type) {
    case actionTypes.GET_BOOK:
      return {...state, ...action.payload}
    default:
      return state
  }
} 