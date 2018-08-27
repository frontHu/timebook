import React from 'react'
import {
  createStackNavigator,
  StackNavigator,
  TabBarBottom,
  createBottomTabNavigator,
  TabNavigator,
  DrawerNavigator,
  createDrawerNavigator
} from 'react-navigation'
import Home from './../page/Home/Home'
import Login from './../page/Login/Login'
import Reg from './../page/Reg/Reg'
import Category from './../page/Category/Category'
import Rank from './../page/Rank/Rank'
import Detail from './../page/Detail/Detail'
import Homeheader from './../component/Homeheader/Homeheader'
import Menu from './../page/Menu/Menu'
import Search from './../common/Search'
import Avatar from './../common/Avatar'
import SearchPage from './../page/SearchPage/SearchPage'
import Slider from './../page/Slider/Slider'
import More from './../page/More/More'

import { YellowBox } from 'react-native';
import pxToDp from '../../untils/pxToDp';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

//类似底部标签栏，用来区分模块
const HomeStack = createBottomTabNavigator({
  'HomePage': {
    screen: Home
  },
  'Category': {
    screen: Category
  },
  'Rank': {
    screen: Rank
  }
})

//drawer navigation
const DrawerNav = createDrawerNavigator({
  'Drawer': {
    screen: HomeStack
  }
})

//根router
const RootStack = createStackNavigator({
  'Login': { //登录页面
    screen: Login
  },
  'Reg': { //注册页面
    screen: Reg
  },
  'DrawerNav': { //抽屉
    screen: DrawerNav,
    navigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          width: '100%',
          backgroundColor: 'rgb(61, 60, 62)'
        },
        headerTitle: <Homeheader />,
        headerLeft: <Search onPress={() => { navigation.navigate('Search') } } />,
        headerRight: <Avatar onPress={() => { navigation.openDrawer()} } />
      }
    }
  },
  'Detail': { //书本详情页
    screen: Detail
  },
  'Menu': { //目录页面
    screen: Menu
  },
  'Search': { //搜索页面
    screen: SearchPage
  },
  'More': {
    screen: More
  }
}, {
    initialRouteName: 'Login',
    mode: 'modal'
  });

export default RootStack