import React from 'react'
import { Provider, connect } from 'react-redux'
import store from './redux/config/configStore'
import RootStack from './router/router'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers'

const mapStateToProps = (state) => ({ state: state.navReducer })
const App = reduxifyNavigator(RootStack, "root")
const AppWithNavigationState = connect(mapStateToProps)(App)

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState></AppWithNavigationState>
      </Provider>
    )
  }
}
export default Main