import React from 'react'
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  FlatList
} from 'react-native'
import pxToDp from './../../../untils/pxToDp'

const styles = StyleSheet.create({
  catebox: {
    // flexWrap: 'wrap',
    marginBottom: pxToDp(20)
  },
  catetitle: {
    borderLeftWidth: pxToDp(5),
    borderColor: '#ffbf01',
    paddingLeft: pxToDp(15),
    marginBottom: pxToDp(20)
  },
  cate: {
    marginRight: pxToDp(20),
    marginBottom: pxToDp(20),
    padding: pxToDp(20),
    backgroundColor: '#fffaeb',
  }
})

class Catebox extends React.Component {
  constructor(props) { 
    super(props)
  }

  render() {
    return (
      <View style={styles.catebox}>
        <View> 
          <View style={styles.catetitle}>
            <Text>{this.props.name}</Text>
          </View>
            <TouchableHighlight >
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {
                  this.props.subCategoryDtos.map((item, index) => {
                    return  <Text key={index} style={styles.cate}>{item.name}</Text>
                  })
                }
              </View>
            </TouchableHighlight>
        </View>
      </View>
    )
  }
}


export default Catebox