import * as actionTypes from './../actionType'

const initState = {
  currentType: 'introduce',
  bookmenu: [],
  comment: {}
}

export function bookdetailReducer(state=initState, action) {
  switch(action.type) {
    case actionTypes.BOOK_DETAIL:
      return {...state, ...action.payload}
    default:
      return state
  }
} 