import * as actionTypes from './../actionType'

const initState = {
  list: []
}

export function categrayReducer(state=initState, action) {
  switch(action.type) {
    case actionTypes.GET_CATE:
      return {...state, ...action.payload}
    default:
      return state
  }
} 