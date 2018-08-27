import React from 'react'
import {
  View,
  Text 
} from 'react-native'

class Introduce extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <Text style={{lineHeight: 25}}>
          {this.props.desc}
        </Text>
      </View>
    )
  }
}

export default Introduce