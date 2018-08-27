import * as actionTypes from './../actionType'

const initState = {
  list: []
}

export function moreReducer(state=initState, action) {
  switch(action.type) {
    case actionTypes.MORE_LIST:
      console.log(action, 'ssss')
      return {...state, ...action.payload}
    default:
      return state
  }
}