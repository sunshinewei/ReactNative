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
    View,
    Navigator,
} from 'react-native';


export default class Demo2 extends Component {
    render() {
        return (
            <ShopMenue></ShopMenue>
        );
    }
}




//Text组件的基本使用
class ShopMenue extends Component {

    show(title) {
        alert(title);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.items}>
                    <Text style={styles.textfont} onPress={this.show.bind(this,'弹出一个对话框！')}>商城</Text>
                </View>

                <View style={styles.items}>
                    <Text style={styles.textfont}>特价房</Text>
                    <Text style={styles.textfont}>销售房</Text>
                </View>

                <View style={styles.items}>
                    <Text style={styles.textfont}>特惠价</Text>
                    <Text style={styles.textfont}>正常价</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FF0056',
        justifyContent: 'center',
        alignItems: 'center',
    },
    items: {
        margin: 2,
        height: 80,
        backgroundColor: '#00ff00',
        width: 100,
        flex: 1,
        borderRadius: 5,
        justifyContent: 'center',

    },
    textfont: {
        color: '#0000BB',
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'center',
        marginTop: 10,
    },
});

AppRegistry.registerComponent('Demo2', () => Demo2);
