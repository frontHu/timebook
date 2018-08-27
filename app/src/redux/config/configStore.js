import createSagaMiddleware from 'redux-saga'
import * as userReducer  from './../reducer/user.reducer'
import * as homeReducer from './../reducer/home.reducer'
import * as bookdetailReducer from './../reducer/detail.reducer'
import * as categrayReducer from './../reducer/cate.reducer'
import * as searchReducer from './../reducer/search.reducer'
import * as moreReducer from './../reducer/more.reducer'
import rootSaga from './../saga/index.saga'
import AppNavigator from './../../router/router'
import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers'
import RootStack from './../../router/router'

//navigation reducer
const navReducer = createNavigationReducer(RootStack)
const rootReducer = combineReducers({
  ...userReducer,
  ...homeReducer,
  ...bookdetailReducer,
  ...categrayReducer,
  ...searchReducer,
  ...moreReducer,
  navReducer
})

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const navMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.navReducer,
);

// const App = reduxifyNavigator(RootStack, "root");
// const mapStateToProps = (state) => ({
//   state: state.navReducer,
// });
// const AppWithNavigationState = connect(mapStateToProps)(App);


//创建saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore( 
  rootReducer,
  applyMiddleware(sagaMiddleware, navMiddleware) 
)
sagaMiddleware.run(rootSaga)

export default store