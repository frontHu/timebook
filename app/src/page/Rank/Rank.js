import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native'
import Bookitem from './../../component/Bookitem/Bookitem'
import style from './style'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as rankActions from './../../redux/action/rank.action'
const styles = StyleSheet.create(style)

class Rank extends React.Component {
  constructor(props) {
    super(props)
    this.actions = bindActionCreators(Object.assign({}, rankActions), props.dispatch)
    this.state = {
      list: ['畅销榜', '新书榜', '热搜榜', '人气榜', '免费榜']
    }
  }

  static navigationOptions = {
    tabBarLabel: '排行',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={ require('./../../assets/home-icon-normal.png') }
        style={ [{ height: 24, width: 24 }, { tintColor: tintColor }] }
      />
    )
  }

  componentDidMount() {
    this.getBook()
  }

  getBook() {
    let params = { pageNumber: 1, pageSize: 10 }
    this.actions.getRankAction({ 'type': 1, ...params })
    this.actions.getRankAction({ 'type': 2, ...params })
    this.actions.getRankAction({ 'type': 3, ...params })
    this.actions.getRankAction({ 'type': 4, ...params })
    this.actions.getRankAction({ 'type': 5, ...params })
  }

  renderItem({ item }) {
    console.log(item)
    return <Bookitem { ...item } navigation={this.props.navigation}/>
  }

  goMore(type) {
    this.props.navigation.navigate('More', {type})
  }

  render() {
    console.log(this.props, 'rankReducer')
    let { list } = this.state
    return (
      <ScrollView>
        <View>
          <View style={ styles.rankBox }>
            {
              list.length > 0 && list.map((v, k) => (
                <View style={ styles.rankItem } key={ k }>
                  <View style={ style.rankHead }>
                    <Text style={ styles.rankTitle }>{ v }</Text>
                    <TouchableOpacity 
                      style={ styles.rankMore }
                      onPress={()=>this.goMore(k+1)}
                    >
                      <Text>更多</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={ styles.rankGap }></View>
                  <View style={ styles.rankBook }>
                    <FlatList
                      horizontal={ true }
                      data={ this.props.rankReducer[k + 1] }
                      renderItem={ this.renderItem.bind(this) }
                    />
                  </View>
                </View>
              ))
            }
          </View>
        </View>
      </ScrollView>

    )
  }
}
function mapStateToProps(state) {
  return {
    rankReducer: state.rankReducer
  }
}
export default connect(mapStateToProps)(Rank)