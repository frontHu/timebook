import * as actionTypes from './../actionType'

const initState = {
  keyword: [],
  searchlist: []
}

export function searchReducer(state=initState, action) {
  switch(action.type) {
    case actionTypes.GET_KEYWORD:
      return {...state, ...action.payload}
    case actionTypes.GET_SEARCH_LIST:
      return {...state, ...action.payload}
    default:
      return state
  }
} 