/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Demo1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Text>酒店</Text>
         </View>>
        <View style={styles.item}>
            <View>
              <Text>海外酒店</Text>
            </View>
              
            <View>
                <Text>特惠酒店</Text>
            </View>
        </View>
        <View style={styles.item}>
            <View>
                <Text>团购</Text>
            </View>

            <View>
                <Text>优惠</Text>
            </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0067',
    borderColor:'red',
    flexDirection:'row'
  },
  item:{
    flex:1,
    height:80,
    borderWidth:1,
    borderColor:'blue'
 },
center:{
  justifyContent:'center',
}
  
});

AppRegistry.registerComponent('Demo1', () => Demo1);
