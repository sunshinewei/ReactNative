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
    TextInput,
    DrawerLayoutAndroid,
} from 'react-native';

export default class DemoInputext extends Component {
    render(){
        return(
            //<SearchInput></SearchInput>
            <MyDrawerLayout></MyDrawerLayout>
        );
    }
}

//DrawerLayoutAndroid的使用
class MyDrawerLayout extends Component{
    render(){
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
            </View>
        );
        return(
                <DrawerLayoutAndroid drawerWidth={300}
                                     drawerPosition={DrawerLayoutAndroid.positions.Left}
                                     renderNavigationView={() => navigationView}>
                    <View style={{flex: 1, alignItems: 'center',justifyContent:'center'}}>
                        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>主界面</Text>
                        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
                    </View>
                </DrawerLayoutAndroid>
        );
    }
}

//TextInput的使用
class SearchInput extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.boderstyle}>
                    <TextInput underlineColorAndroid={'transparent'}
                               placeholder='搜索框'></TextInput>
                </View>
                <Text style={styles.search}>搜索</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF0058',
        flexDirection:'row',
    },
    context:{
        width:150,
        height:80,
        borderRadius:5,
        backgroundColor:'#00ff89',
    },
    boderstyle:{
        width:200,
        borderColor:'#ffffff',
        borderWidth:1,
        height:50,
        borderRadius:5,
    },
    search:{
       color:'#345676',
        backgroundColor:'#3400FF',
        borderRadius:5,
        width:50,
        height: 50,
        fontSize:20,
        marginLeft:-5,
        textAlign:'center',
    },

});

AppRegistry.registerComponent('DemoInputext', () => DemoInputext);
